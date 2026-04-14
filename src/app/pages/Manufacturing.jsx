import { motion } from "motion/react";
import { Factory, Shield, Microscope, Users, Award, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function Manufacturing() {
  const processSteps = [
    {
      step: "01",
      title: "Raw Material Testing",
      description: "Rigorous quality checks on all incoming raw materials to ensure purity and compliance.",
    },
    {
      step: "02",
      title: "Precision Manufacturing",
      description: "State-of-the-art automated systems ensure consistent, high-quality production.",
    },
    {
      step: "03",
      title: "Quality Assurance",
      description: "Multiple quality control checkpoints throughout the manufacturing process.",
    },
    {
      step: "04",
      title: "Final Testing",
      description: "Comprehensive testing before packaging to guarantee product efficacy and safety.",
    },
    {
      step: "05",
      title: "Packaging & Distribution",
      description: "Secure packaging and controlled distribution maintaining product integrity.",
    },
  ];

  const facilities = [
    {
      icon: Factory,
      title: "Manufacturing Plants",
      value: "5",
      description: "WHO-GMP certified facilities",
    },
    {
      icon: Microscope,
      title: "Research Labs",
      value: "3",
      description: "Advanced R&D centers",
    },
    {
      icon: Users,
      title: "Expert Team",
      value: "500+",
      description: "Qualified professionals",
    },
    {
      icon: Award,
      title: "Certifications",
      value: "15+",
      description: "International standards",
    },
  ];

  const qualityStandards = [
    "ISO 9001:2015 Quality Management",
    "WHO GMP Compliance",
    "FDA Approved Processes",
    "European CE Marking",
    "HACCP Certified",
    "ISO 14001 Environmental Management",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1732690233982-1d4567384ea1?w=2000"
            alt="Manufacturing facility"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 to-[#FAC778]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              World-Class Manufacturing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art facilities equipped with cutting-edge technology to ensure the highest quality pharmaceutical production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="size-24 rounded-2xl bg-gradient-to-br from-[#FAC778] to-[#885113] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <facility.icon size={40} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-[#FAC778] mb-2">{facility.value}</div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Images */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Our Infrastructure</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
                Advanced Manufacturing Facilities
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669101283206-480f531d0f47?w=800"
                alt="Laboratory"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669101283516-e608dcf142df?w=800"
                alt="Manufacturing"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#e0f2fe] rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Our Process</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
                Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach ensuring quality at every stage of production.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-8">
                  <div className="size-20 rounded-2xl bg-gradient-to-br from-[#FAC778] to-[#885113] flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-[#e0f2fe] to-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#FAC778] to-[#885113] h-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
                <span className="text-sm font-medium text-[#FAC778]">Quality Standards</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">
                Uncompromising Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality is reflected in our adherence to the most stringent international standards and certifications. Every product undergoes rigorous testing to ensure safety, efficacy, and consistency.
              </p>

              <div className="space-y-4">
                {qualityStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={24} className="text-[#885113] shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631556760646-50241850eb25?w=800"
                  alt="Quality Control"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#FAC778] to-[#885113] rounded-2xl p-6 text-white max-w-xs shadow-xl">
                <Shield size={32} className="mb-3" />
                <h3 className="text-xl font-bold mb-2">100% Quality Assured</h3>
                <p className="text-sm text-white/90">Every batch tested to perfection</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758573467057-99f26217b2ae?w=2000"
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
              Experience Manufacturing Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Visit our facilities and witness our commitment to pharmaceutical excellence firsthand.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
