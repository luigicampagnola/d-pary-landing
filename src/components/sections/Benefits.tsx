'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Sin colas, sin esperas',
    description: 'Compra tus tickets desde la comodidad de tu hogar y evita las largas filas en la entrada.',
    icon: '⚡',
  },
  {
    title: 'Los mejores precios',
    description: 'Accede a precios exclusivos y promociones especiales solo disponibles en la app.',
    icon: '💰',
  },
  {
    title: 'Eventos verificados',
    description: 'Todos los eventos y locales están verificados para garantizar tu seguridad.',
    icon: '✅',
  },
  {
    title: 'Experiencia VIP',
    description: 'Reserva mesas premium y disfruta de beneficios exclusivos en los mejores lugares.',
    icon: '👑',
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-white dark:bg-midnight-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-rich-gold/20 to-electric-violet/20 rounded-3xl blur-3xl scale-90" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-midnight-navy to-oxford-blue rounded-3xl p-8 shadow-2xl">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-rich-gold mb-1">4.9</div>
                    <div className="flex justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-rich-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-silver-mist">Rating App Store</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-mint-green mb-1">98%</div>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-1">
                      <div className="bg-mint-green h-2 rounded-full" style={{ width: '98%' }} />
                    </div>
                    <div className="text-sm text-silver-mist">Satisfacción</div>
                  </motion.div>
                </div>

                {/* Feature highlight */}
                <div className="bg-gradient-to-r from-rich-gold/20 to-american-gold/20 rounded-2xl p-4 border border-rich-gold/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rich-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-midnight-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Pagos 100% Seguros</div>
                      <div className="text-silver-mist text-sm">Protegidos con encriptación SSL</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 bg-white/5 rounded-2xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hot-pink to-electric-violet flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-white font-medium">María García</div>
                      <div className="text-silver-mist text-sm mt-1">
                        &quot;La mejor app para salir de fiesta. Super fácil de usar!&quot;
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-mint-green text-midnight-navy px-4 py-2 rounded-full font-semibold shadow-lg"
              >
                Gratis
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-mint-green/10 dark:bg-mint-green/20 text-mint-green font-medium text-sm mb-4">
              Beneficios
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary dark:text-white mb-6">
              ¿Por qué elegir{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-gold to-american-gold">
                D&apos;Pary?
              </span>
            </h2>

            <p className="text-lg text-neutral-gray dark:text-silver-mist mb-8">
              Nos enfocamos en brindarte la mejor experiencia para que disfrutes al máximo de la vida nocturna.
            </p>

            {/* Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream-beige dark:bg-soft-charcoal flex items-center justify-center text-2xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-primary dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-gray dark:text-silver-mist">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
