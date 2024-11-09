import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Handshake, ArrowRight } from 'lucide-react';

export default function InfluencerPartnerships() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Looking for influencers and industry leaders to create impactful partnerships. 
            Our proven track record shows significant growth for our partners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Users,
              title: "Influencer Collaboration",
              description: "Perfect for content creators with engaged followers who want to scale their impact"
            },
            {
              icon: TrendingUp,
              title: "Proven Success",
              description: "Track record of successful partnerships with measurable growth and engagement"
            },
            {
              icon: Handshake,
              title: "Custom Solutions",
              description: "Tailored partnership strategies that align with your brand and audience"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700"
            >
              <feature.icon className="w-12 h-12 text-[#00A3FF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#00A3FF]/10 to-[#00E6FF]/10 rounded-xl p-8 border border-[#00A3FF]/20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Scale Together?
            </h3>
            <p className="text-gray-400 mb-6">
              Join our growing network of successful partnerships. We've helped influencers and industry leaders 
              achieve remarkable growth through strategic collaboration.
            </p>
            <a
              href="mailto:rob@rizkadvertising.com?subject=Partnership%20Inquiry"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00A3FF] text-white font-semibold hover:bg-[#0088FF] transition-colors group"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 