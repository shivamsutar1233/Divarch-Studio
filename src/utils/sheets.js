export const fetchSheetData = async () => {
  const SHEET_ID = import.meta.env.VITE_PRODUCTS_SHEET_ID;
  const SHEET_NAME = "Sheet1";
  const SHEET_RANGE = "A2:AJ";

  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=${SHEET_RANGE}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const text = await response.text();
  const jsonText = text.substring(47).slice(0, -2);
  const data = JSON.parse(jsonText);

  return data.table.rows.map((row) => {
    const regularPrice = row.c[5]?.v || 0;
    const salePrice =
      row.c[12]?.v !== undefined && row.c[12]?.v !== null
        ? Number(row.c[12]?.v)
        : null;
    const displayPrice = salePrice || regularPrice;
    const whatsappLink = row.c[35]?.v;

    return {
      id: row.c[0]?.v || "",
      title: row.c[1]?.v || "",
      name: row.c[1]?.v || "",
      description: row.c[2]?.v || "",
      availability: row.c[3]?.v || "",
      condition: row.c[4]?.v || "",
      price: regularPrice,
      salePrice: salePrice,
      link: row.c[6]?.v || "",
      image: row.c[7]?.v || "",
      brand: row.c[8]?.v || "",
      material: row.c[19]?.v || "",
      colors: row.c[30]?.v || "",
      dimensions: row.c[20]?.v || "",
      whatsappLink:
        whatsappLink ||
        `https://wa.me/${
          import.meta.env.VITE_WHATSAPP_NUMBER
        }?text=Hi, I'm interested in ${encodeURIComponent(
          row.c[1]?.v || ""
        )} (${row.c[0]?.v || ""}) priced at ₹${displayPrice}`,
    };
  });
};