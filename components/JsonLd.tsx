/**
 * JSON-LD Structured Data — LocalBusiness + Organization schema
 * Helps Google understand your business details for rich results.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://div-arch.com/#business",
        name: "Div-Arch Studio",
        alternateName: "Div-Arch",
        description:
          "Revolutionary 3D printing solutions for architectural models, prototypes, keychains, and functional components with precision and innovation.",
        url: "https://div-arch.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ab2bbkrtuubturud.public.blob.vercel-storage.com/product_images/1766407610876-nuodgt5-Div-Arch.in%20Brand%20Identity-1.png",
        },
        image:
          "https://ab2bbkrtuubturud.public.blob.vercel-storage.com/product_images/1766407610876-nuodgt5-Div-Arch.in%20Brand%20Identity-1.png",
        telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
        email: "support@div-arch.in",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Akluj",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
          postalCode: "413101",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.8926",
          longitude: "75.0214",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: ["https://www.instagram.com/divarch_studio/"],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "3D Printing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom 3D Printing",
                description:
                  "Upload your STL files and get them professionally 3D printed.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Architectural Model Printing",
                description:
                  "High-precision architectural model printing with detailed finishing.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Rapid Prototyping",
                description:
                  "Quick turnaround prototypes for architectural components.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://div-arch.com/#website",
        url: "https://div-arch.com",
        name: "Div-Arch Studio",
        description: "3D Printing for Modern Architecture",
        publisher: { "@id": "https://div-arch.com/#business" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://div-arch.com/products?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
