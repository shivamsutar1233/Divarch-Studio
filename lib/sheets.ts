import type { Product } from "./types";

export async function fetchSheetData(): Promise<Product[]> {
  const SHEET_ID = process.env.PRODUCTS_SHEET_ID;
  const SHEET_NAME = "Sheet1";
  const SHEET_RANGE = "A2:AL";

  if (!SHEET_ID) {
    console.warn("PRODUCTS_SHEET_ID is not set");
    return [];
  }

  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=${SHEET_RANGE}`,
    { next: { revalidate: 300 } } // Cache for 5 minutes
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const text = await response.text();
  const jsonText = text.substring(47).slice(0, -2);
  const data = JSON.parse(jsonText);

  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  return data.table.rows.map(
    (row: { c: Array<{ v?: string | number | null } | null> }) => {
      const regularPrice = (row.c[5]?.v as number) || 0;
      const salePrice =
        row.c[12]?.v !== undefined && row.c[12]?.v !== null
          ? Number(row.c[12]?.v)
          : null;
      const displayPrice = salePrice || regularPrice;
      const whatsappLink = row.c[35]?.v as string;
      const dimensions = (row.c[36]?.v as string)
        ?.split(",")
        ?.map((dim: string) => dim.trim())
        ?.map((dim: string, index: number) => {
          switch (index) {
            case 0:
              return `${dim} mm (L)`;
            case 1:
              return `${dim} mm (W)`;
            case 2:
              return `${dim} mm (H)`;
            default:
              return dim;
          }
        })
        ?.join(" x ");

      const images =
        (row.c[37]?.v as string)?.split(",")?.map((img: string) => img.trim()) ||
        [];

      return {
        id: (row.c[0]?.v as string) || "",
        title: (row.c[1]?.v as string) || "",
        name: (row.c[1]?.v as string) || "",
        description: (row.c[2]?.v as string) || "",
        availability: (row.c[3]?.v as string) || "",
        condition: (row.c[4]?.v as string) || "",
        price: regularPrice,
        salePrice: salePrice,
        link: (row.c[6]?.v as string) || "",
        image: (row.c[7]?.v as string) || "",
        brand: (row.c[8]?.v as string) || "",
        material: (row.c[19]?.v as string) || "",
        colors: (row.c[30]?.v as string) || "",
        dimensions: dimensions || "",
        whatsappLink:
          whatsappLink ||
          `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in ${encodeURIComponent(
            (row.c[1]?.v as string) || ""
          )} (${(row.c[0]?.v as string) || ""}) priced at ₹${displayPrice}`,
        additionalImages: [(row.c[7]?.v as string), ...images].filter(Boolean),
      };
    }
  );
}
