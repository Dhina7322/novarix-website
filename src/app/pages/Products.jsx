import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Search, ArrowRight, Heart, Stethoscope, Bone, Brain, Activity, Leaf, Smile, Wind, HeartPulse, Dna, Sparkles, Handshake, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollContainerRef = useRef(null);

  const categories = [
    "All",
    "Paediatrics",
    "General Medicine",
    "Orthopaedics",
    "Neurology",
    "Gynaecology",
    "Nutraceuticals & Wellness",
    "Dental",
    "Respiratory",
    "Cardiology",
    "Oncology",
    "Dermatology",
    "Our Commitment",
  ];

  const products = [
    {
      "id": "chyrix-ap",
      "name": "CHYRIX - AP",
      "image": "/images/chyrix-ap.jpg",
      "category": "General Medicine",
      "description": "High-quality pharmaceutical product for general medicine."
    },
    {
      "id": "reciron",
      "name": "RECIRON",
      "image": "/images/reciron.jpg",
      "category": "Gynaecology",
      "description": "Premium patient care pharmaceutical product."
    },
    {
      "id": "monterix-l-kid",
      "name": "MONTERIX - L kid",
      "image": "/images/monterix-l-kid.jpg",
      "category": "Paediatrics",
      "description": "Gentle care for paediatric and child wellness."
    },
    {
      "id": "panerix-40-mg",
      "name": "PANERIX - 40 mg",
      "image": "/images/panerix-40-mg.jpg",
      "category": "General Medicine",
      "description": "High-quality pharmaceutical product for general medicine."
    },
    {
      "id": "cholerix-d3",
      "name": "CHOLERIX - D3",
      "image": "/images/cholerix-d3.jpg",
      "category": "Orthopaedics",
      "description": "Specially formulated structure and functional support."
    },
    {
      "id": "nexorix-dsr",
      "name": "NEXORIX- DSR",
      "image": "/images/nexorix-dsr.jpg",
      "category": "General Medicine",
      "description": "High-quality pharmaceutical product for general medicine."
    },
    {
      "id": "aceclorix-mr",
      "name": "ACECLORIX-MR",
      "image": "/images/aceclorix-mr.jpg",
      "category": "Orthopaedics",
      "description": "Specially formulated structure and functional support."
    }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#FAC778] to-[#885113]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Product Range
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of high-quality pharmaceutical products designed to improve health outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-80 relative shrink-0">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#f8f9fb] rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAC778] transition-colors"
              />
            </div>

            <div className="relative flex items-center w-full min-w-0">
              <div 
                ref={scrollContainerRef}
                className="flex gap-3 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth pb-2 md:pb-0"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all shrink-0 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#FAC778] to-[#885113] text-white shadow-lg"
                        : "bg-[#f8f9fb] text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none flex items-center justify-end md:pb-0 pb-2">
                <button 
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  className="pointer-events-auto size-10 mr-1 flex items-center justify-center bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-[#1a1a2e] hover:text-[#FAC778] hover:scale-110 transition-all border border-gray-100"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={`/products/${product.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                      <div className="relative h-64 overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#FAC778]">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
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
          )}
        </div>
      </section>
    </div>
  );
}
