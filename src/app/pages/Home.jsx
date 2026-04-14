import { motion } from "motion/react";
import { ArrowRight, Award, Users, Globe, Shield, Microscope, Heart, CheckCircle, Quote } from "lucide-react";
import { Button } from "../components/Button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function Home() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Countries" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified manufacturing with rigorous quality control at every stage.",
    },
    {
      icon: Microscope,
      title: "Research & Development",
      description: "Cutting-edge R&D facilities dedicated to innovative pharmaceutical solutions.",
    },
    {
      icon: Heart,
      title: "Patient-Centric",
      description: "Every product designed with patient safety and efficacy as the top priority.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted pharmaceutical partner serving healthcare systems worldwide.",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "WHO GMP", description: "Manufacturing Standards" },
    { name: "FDA Approved", description: "Regulatory Compliance" },
    { name: "CE Marking", description: "European Standards" },
  ];

  const testimonials = [
    {
      quote: "Novarix Healthcare has been our trusted partner for over a decade. Their commitment to quality is unmatched.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?w=400",
    },
    {
      quote: "The innovation and reliability of their pharmaceutical products have significantly improved patient outcomes.",
      author: "Dr. Michael Chen",
      role: "Hospital Director",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400",
    },
    {
      quote: "Excellence in pharmaceutical manufacturing with a genuine focus on healthcare advancement.",
      author: "Dr. Emily Rodriguez",
      role: "Research Coordinator",
      image: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?w=400",
    },
  ];

  const products = [
    {
      id: "chyrix-ap",
      name: "CHYRIX - AP",
      category: "Pharmaceuticals",
      image: "/images/chyrix-ap.jpg",
    },
    {
      id: "reciron",
      name: "RECIRON",
      category: "Pharmaceuticals",
      image: "/images/reciron.jpg",
    },
    {
      id: "monterix-l-kid",
      name: "MONTERIX - L kid",
      category: "Pharmaceuticals",
      image: "/images/monterix-l-kid.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=2000"
            alt="Pharmaceutical Research"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e]/60 to-[#1a1a2e]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 w-full">
          <div className="text-center max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
                Innovating Healthcare for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC778] to-[#885113]">Better Tomorrow</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Leading pharmaceutical excellence with cutting-edge research and uncompromising quality standards.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/products">
                  <Button variant="primary" size="lg" className="px-10 text-[#1a1a2e]">
                    Explore Products
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="px-10 bg-transparent border-2 border-white text-[#885113] hover:bg-[#885113] hover:text-[#885113]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats Cards Inside Hero */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-default"
                >
                  <div className="text-4xl font-bold text-[#FAC778] mb-2 drop-shadow-md">{stat.value}</div>
                  <div className="text-sm text-white/90 uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#e0f2fe] rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">About Novarix</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">
                Pioneering Pharmaceutical Excellence Since 2001
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Novarix Healthcare stands at the forefront of pharmaceutical innovation, dedicated to improving global health through quality medications and groundbreaking research.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art facilities and team of expert scientists work tirelessly to develop safe, effective treatments that make a real difference in patients' lives.
              </p>
              <Link to="/about">
                <Button variant="primary">
                  Learn More
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669101283142-a61e26f8c352?w=800"
                  alt="Laboratory professional"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#FAC778] to-[#885113] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <Award size={32} className="mb-3" />
                <h3 className="text-xl font-bold mb-2">Award-Winning Innovation</h3>
                <p className="text-sm text-white/90">Recognized globally for pharmaceutical excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-[#fdfdfe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0f2fe] rounded-full mb-6">
                <span className="size-2 rounded-full bg-[#FAC778] animate-pulse" />
                <span className="text-sm font-semibold text-[#FAC778] tracking-wider uppercase">Our Portfolio</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-6">
                Pharmaceutical <span className="text-[#FAC778]">Excellence</span>
              </h2>
              <p className="text-xl text-gray-500">
                Discover our range of innovative medications designed to improve health outcomes and patient well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/products">
                <button className="flex items-center gap-3 text-[#1a1a2e] font-bold hover:text-[#FAC778] transition-all group">
                  EXPLORE ALL SOLUTIONS
                  <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#FAC778] group-hover:bg-[#FAC778] group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products/${product.id}`} className="group block">
                  <div className="relative rounded-[2.5rem] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,102,204,0.12)] transition-all duration-500 overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 size-32 bg-gradient-to-br from-[#FAC778]/5 to-transparent rounded-bl-[100px] -z-0" />

                    <div className="relative z-10">
                      <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="px-6 pb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-4 py-1.5 bg-[#f0f9ff] text-[#FAC778] text-xs font-bold rounded-full border border-[#FAC778]/10">
                            {product.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#FAC778] transition-colors line-clamp-1">
                          {product.name}
                        </h3>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                            <CheckCircle size={16} className="text-[#885113]" />
                            Quality Verified
                          </div>

                          <div className="size-12 rounded-2xl bg-[#f8fafc] text-[#1a1a2e] flex items-center justify-center group-hover:bg-[#FAC778] group-hover:text-white transition-all transform group-hover:rotate-12">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#e0f2fe] rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Why Choose Us</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
                Excellence in Every Aspect
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="size-20 rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#e0f2fe]/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-[#FAC778]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Certifications</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
                Globally Recognized Standards
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all group"
              >
                <CheckCircle size={48} className="text-[#885113] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#e0f2fe] rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Testimonials</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
                Trusted by Healthcare Professionals
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-8 shadow-lg"
              >
                <Quote size={32} className="text-[#FAC778] mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#1a1a2e]">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1669707041081-dd4d51943041?w=2000"
            alt="Laboratory"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAC778]/95 to-[#885113]/95" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join healthcare providers worldwide who trust Novarix Healthcare for quality pharmaceutical solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#FAC778]">
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
