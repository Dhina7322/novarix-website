import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Research", "Innovation", "Healthcare", "Industry News"];

  const featuredPost = {
    id: 1,
    title: "The Future of Pharmaceutical Research and Machine Learning",
    excerpt: "Exploring how artificial intelligence is revolutionizing drug discovery and development processes in modern pharmaceutical research.",
    category: "Innovation",
    author: "Dr. Sarah Mitchell",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1631556760585-2e846196d5a9?w=1200",
    readTime: "8 min read",
  };

  const blogPosts = [
    {
      id: 2,
      title: "Advances in Cardiovascular Medicine",
      excerpt: "Recent breakthroughs in cardiovascular treatments are changing patient outcomes worldwide.",
      category: "Research",
      author: "Dr. James Chen",
      date: "April 8, 2026",
      image: "https://images.unsplash.com/photo-1631557675464-77cf8f0d9426?w=800",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Quality Assurance in Pharmaceutical Manufacturing",
      excerpt: "Understanding the critical role of quality control in ensuring safe and effective medications.",
      category: "Industry News",
      author: "Dr. Emily Rodriguez",
      date: "April 5, 2026",
      image: "https://images.unsplash.com/photo-1631556760646-50241850eb25?w=800",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Global Healthcare Accessibility Initiatives",
      excerpt: "How pharmaceutical companies are working to make essential medicines accessible worldwide.",
      category: "Healthcare",
      author: "Dr. Michael Thompson",
      date: "April 2, 2026",
      image: "https://images.unsplash.com/photo-1631556764629-b51c3ae40d18?w=800",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Sustainable Practices in Pharmaceutical Production",
      excerpt: "Exploring environmentally responsible manufacturing processes in the pharmaceutical industry.",
      category: "Innovation",
      author: "Dr. Sarah Mitchell",
      date: "March 28, 2026",
      image: "https://images.unsplash.com/photo-1631556759597-96df19797d7d?w=800",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "The Role of Clinical Trials in Drug Development",
      excerpt: "A comprehensive look at how clinical trials ensure the safety and efficacy of new medications.",
      category: "Research",
      author: "Dr. James Chen",
      date: "March 25, 2026",
      image: "https://images.unsplash.com/photo-1631556762764-100577512917?w=800",
      readTime: "9 min read",
    },
    {
      id: 7,
      title: "Innovations in Drug Delivery Systems",
      excerpt: "New technologies are making medication administration more effective and patient-friendly.",
      category: "Innovation",
      author: "Dr. Emily Rodriguez",
      date: "March 22, 2026",
      image: "https://images.unsplash.com/photo-1631557676757-fcc7b1160be8?w=800",
      readTime: "5 min read",
    },
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Healthcare Insights
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest news, research, and innovations in pharmaceutical healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-96 lg:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="size-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-[#FAC778] text-white rounded-full text-sm font-medium mb-4 self-start">
                  Featured
                </div>

                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>

                <button className="flex items-center gap-2 text-[#FAC778] font-medium group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#f8f9fb] sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#FAC778] to-[#885113] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#FAC778]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>

                    <button className="flex items-center gap-1 text-[#FAC778] font-medium group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
