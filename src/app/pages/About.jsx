import { motion } from "motion/react";
import { Target, Eye, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function About() {
  const timeline = [
    { year: "2001", title: "Foundation", description: "Novarix Healthcare established with a vision to transform pharmaceutical industry" },
    { year: "2008", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2015", title: "Global Expansion", description: "Expanded operations to 50+ countries worldwide" },
    { year: "2020", title: "Research Center", description: "Launched state-of-the-art R&D facility" },
    { year: "2026", title: "Innovation Leader", description: "Recognized as a leading pharmaceutical innovator" },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?w=400",
    },
    {
      name: "Dr. James Chen",
      role: "Chief Scientific Officer",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Quality Assurance",
      image: "https://images.unsplash.com/photo-1640909386733-e5260a325c26?w=400",
    },
    {
      name: "Dr. Michael Thompson",
      role: "Director of Research",
      image: "https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?w=400",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1669707040789-b39a52afb84c?w=2000"
            alt="Laboratory"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FAC778]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About Novarix Healthcare
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A global leader in pharmaceutical innovation, committed to advancing healthcare through research, quality, and compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">
                Pioneering Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception in 2001, Novarix Healthcare has been at the forefront of pharmaceutical innovation. We combine cutting-edge research with decades of expertise to develop medications that improve lives worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to quality, safety, and efficacy drives everything we do. With state-of-the-art manufacturing facilities and a dedicated team of scientists, we continue to push the boundaries of what's possible in healthcare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-[#FAC778] mb-2">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-[#FAC778] mb-2">2,500+</div>
                  <div className="text-gray-600">Employees</div>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-[#FAC778] mb-2">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-[#FAC778] mb-2">25+</div>
                  <div className="text-gray-600">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-lg"
            >
              <div className="size-16 rounded-2xl bg-gradient-to-br from-[#FAC778] to-[#885113] flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted pharmaceutical company globally, recognized for transforming healthcare through innovation, quality, and unwavering commitment to patient well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-lg"
            >
              <div className="size-16 rounded-2xl bg-gradient-to-br from-[#885113] to-[#FAC778] flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To develop, manufacture, and deliver safe, effective, and affordable pharmaceutical products that improve patient outcomes and contribute to healthier communities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#e0f2fe] rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e]">Milestones of Excellence</h2>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FAC778] to-[#885113] transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-6 shadow-lg inline-block">
                      <div className="text-3xl font-bold text-[#FAC778] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="size-12 rounded-full bg-gradient-to-br from-[#FAC778] to-[#885113] flex items-center justify-center shadow-lg shrink-0 z-10">
                    <TrendingUp size={24} className="text-white" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Leadership</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Led by industry pioneers with decades of pharmaceutical expertise.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAC778]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Visual */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1732690233982-1d4567384ea1?w=2000"
            alt="Manufacturing"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#1a1a2e]/70" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              State-of-the-Art Facilities
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Our world-class laboratories and manufacturing plants are equipped with the latest technology to ensure the highest standards of pharmaceutical production.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
