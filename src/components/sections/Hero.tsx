'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cream-beige/30 to-champagne-gold/20 dark:from-midnight-navy dark:via-deep-space dark:to-oxford-blue" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-rich-gold/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-electric-violet/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-cream-beige dark:bg-soft-charcoal px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-mint-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-gray dark:text-silver-mist">
                Disponible para iOS y Android
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-navy-primary dark:text-white">
                Vive la noche
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-gold via-american-gold to-dark-goldenrod">
                como nunca antes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-neutral-gray dark:text-silver-mist mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Descubre los mejores eventos, compra tus tickets al instante y reserva mesas VIP en los lugares más exclusivos de tu ciudad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Button>
              <Button variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.801 8.99l-2.302 2.302-8.635-8.634z" />
                </svg>
                Google Play
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cream-beige dark:border-soft-charcoal"
            >
              {[
                { value: '50K+', label: 'Usuarios' },
                { value: '500+', label: 'Eventos' },
                { value: '100+', label: 'Locales' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-navy-primary dark:text-rich-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-gray dark:text-silver-mist">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rich-gold/30 to-electric-violet/30 rounded-[3rem] blur-2xl scale-90" />

              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 sm:w-72 lg:w-80 aspect-[9/19] bg-midnight-navy rounded-[2.5rem] p-2 shadow-2xl"
              >
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-navy-primary to-midnight-blue rounded-[2rem] overflow-hidden relative">
                  {/* App UI Preview */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white/80 text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 border border-white/80 rounded-sm">
                          <div className="w-3 h-full bg-mint-green rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 py-2">
                      <Image
                        src="/logo.svg"
                        alt="D'Pary"
                        width={80}
                        height={28}
                        className="h-7 w-auto object-contain"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(76%) sepia(50%) saturate(500%) hue-rotate(5deg) brightness(95%)',
                        }}
                      />
                    </div>

                    {/* Featured Event Card */}
                    <div className="mx-4 mt-2 rounded-xl bg-gradient-to-br from-electric-violet/20 to-neon-magenta/20 p-3 border border-white/10">
                      <div className="w-full h-24 bg-gradient-to-r from-rich-gold/30 to-electric-violet/30 rounded-lg mb-2" />
                      <div className="h-3 bg-white/80 rounded w-3/4 mb-1" />
                      <div className="h-2 bg-white/40 rounded w-1/2" />
                    </div>

                    {/* Event List */}
                    <div className="px-4 mt-4 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                          <div className="w-10 h-10 rounded-lg bg-rich-gold/20" />
                          <div className="flex-1">
                            <div className="h-2 bg-white/60 rounded w-2/3 mb-1" />
                            <div className="h-2 bg-white/30 rounded w-1/2" />
                          </div>
                          <div className="w-6 h-6 rounded-full bg-mint-green/20" />
                        </div>
                      ))}
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-4 bg-midnight-navy/80 backdrop-blur-sm border-t border-white/10">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-rich-gold' : 'bg-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-midnight-navy rounded-full" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-mint-green rounded-2xl shadow-lg flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-hot-pink rounded-2xl shadow-lg flex items-center justify-center"
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-gray dark:text-silver-mist"
        >
          <span className="text-xs">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
