import React from 'react';
import { Mail, Facebook, Twitter, Youtube, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      className="py-24 bg-slate-900 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/rabih-rizk.jpg"
                alt="Rabih Rizk"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0.1)",
                    "0 0 0 20px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 mb-8"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of these platforms:
            </motion.p>
            
            {/* Social Links */}
            <motion.div className="space-y-4">
              {[
                { icon: Mail, href: 'mailto:rob@rizkadvertising.com', label: 'Email', text: 'rob@rizkadvertising.com' },
                { icon: Twitter, href: 'https://x.com/RobRizk2020/', label: 'Twitter', text: '@RobRizk2020' },
                { icon: Facebook, href: 'https://www.facebook.com/rabihrizk/', label: 'Facebook', text: 'Rabih Rizk' },
                { icon: Youtube, href: 'https://www.youtube.com/@Rabih-Rizk', label: 'YouTube', text: '@Rabih-Rizk' },
                { icon: Coffee, href: 'https://buymeacoffee.com/robk', label: 'Buy Me a Coffee', text: 'Buy me a coffee' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  aria-label={social.label}
                  variants={socialHoverVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.div>
                  <span className="text-lg group-hover:text-blue-400">{social.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}