import { useState } from "react";
import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const productsList = [
    {
      "id": "chyrix-ap",
      "name": "CHYRIX - AP",
      "image": "/images/chyrix-ap.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    },
    {
      "id": "reciron",
      "name": "RECIRON",
      "image": "/images/reciron.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    },
    {
      "id": "monterix-l-kid",
      "name": "MONTERIX - L kid",
      "image": "/images/monterix-l-kid.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    },
    {
      "id": "panerix-40-mg",
      "name": "PANERIX - 40 mg",
      "image": "/images/panerix-40-mg.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    },
    {
      "id": "cholerix-d3",
      "name": "CHOLERIX - D3",
      "image": "/images/cholerix-d3.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    },
    {
      "id": "nexorix-dsr",
      "name": "NEXORIX- DSR",
      "image": "/images/nexorix-dsr.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    },
    {
      "id": "aceclorix-mr",
      "name": "ACECLORIX-MR",
      "image": "/images/aceclorix-mr.jpg",
      "category": "Pharmaceuticals",
      "description": "High-quality pharmaceutical product from Novarix Healthcare.",
      "composition": "Advanced active ingredients optimized for high efficacy.",
      "benefits": ["Rapid onset of action", "High safety profile", "Maintains optimal patient health"],
      "usage": "Use as directed by a healthcare professional. Follow prescribed dosage schedules.",
      "dosage": "As prescribed",
      "packaging": "Standard clinical packaging"
    }
  ];

  const foundProduct = productsList.find((p) => p.id === id) || productsList[0];
  
  const product = {
    ...foundProduct,
    images: [
      foundProduct.image,
      "https://images.unsplash.com/photo-1579154204601-52588c83e18f?w=800",
      "https://images.unsplash.com/photo-1631556760585-2e846196d5a9?w=800"
    ]
  };

  const relatedProducts = productsList.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-20 bg-[#f8f9fb]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/products">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FAC778] transition-colors">
            <ArrowLeft size={20} />
            Back to Products
          </button>
        </Link>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-4">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-2xl overflow-hidden ${
                      selectedImage === index ? "ring-4 ring-[#FAC778]" : ""
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#e0f2fe] rounded-full mb-4">
                <span className="text-sm font-medium text-[#FAC778]">{product.category}</span>
              </div>

              <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Composition</h2>
                <p className="text-gray-600">{product.composition}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Key Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#885113] shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Usage Instructions</h2>
                <p className="text-gray-600 mb-4">{product.usage}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Dosage</div>
                    <div className="font-medium text-[#1a1a2e]">{product.dosage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Packaging</div>
                    <div className="font-medium text-[#1a1a2e]">{product.packaging}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="flex-1">
                  <Download size={20} />
                  Download Brochure
                </Button>
                <Link to="/contact" className="flex-1">
                  <Button variant="secondary" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Related Products</h2>
            <p className="text-lg text-gray-600">Explore our other healthcare solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/products/${relatedProduct.id}`}>
                  <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-[#885113] font-medium mb-2">{relatedProduct.category}</div>
                      <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{relatedProduct.name}</h3>
                      <div className="flex items-center text-[#FAC778] font-medium group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
