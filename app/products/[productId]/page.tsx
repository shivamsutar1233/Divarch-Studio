import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchSheetData } from "@/lib/sheets";
import ImageCarousel from "@/components/ImageCarousel";

interface Props {
  params: Promise<{ productId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  try {
    const products = await fetchSheetData();
    const product = products.find((p) => p.id === productId);
    if (!product) return { title: "Product Not Found" };
    return {
      title: product.name,
      description: product.description,
    };
  } catch {
    return { title: "Product" };
  }
}

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;
  const products = await fetchSheetData();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-4 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full min-h-[400px]">
                <ImageCarousel
                  images={
                    product.additionalImages && product.additionalImages.length > 0
                      ? product.additionalImages
                      : product.image
                      ? [product.image]
                      : []
                  }
                  alt={product.name}
                  className="h-full rounded-none p-0"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 md:p-12 space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </h1>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>

                <div className="border-t border-b dark:border-gray-700 py-4 space-y-3">
                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Price:</span>
                    <div className="flex items-center gap-2">
                      {product.salePrice ? (
                        <>
                          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                            ₹{product.salePrice}
                          </span>
                          <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                            ₹{product.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ₹{product.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Availability:</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      product.availability === "in stock"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                        : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                    }`}>
                      {product.availability}
                    </span>
                  </div>

                  {product.dimensions && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Dimensions:</span>
                      <span className="text-gray-900 dark:text-white">{product.dimensions}</span>
                    </div>
                  )}

                  {product.material && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Material:</span>
                      <span className="text-gray-900 dark:text-white">{product.material}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <a
                    href={product.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                  >
                    <WhatsAppIcon />
                    Enquire on WhatsApp
                  </a>

                  <Link
                    href="/products"
                    className="w-full inline-flex justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
