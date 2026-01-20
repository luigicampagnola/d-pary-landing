'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Usuario frecuente',
    avatar: 'CM',
    content: 'D\'Pary cambió completamente mi forma de salir. Ahora puedo encontrar los mejores eventos y comprar mis entradas sin complicaciones. ¡Increíble!',
    rating: 5,
    gradient: 'from-electric-blue to-electric-cyan',
  },
  {
    name: 'Ana Rodríguez',
    role: 'Influencer',
    avatar: 'AR',
    content: 'La función de reserva de mesas es genial. Siempre consigo los mejores lugares en los clubs más exclusivos. Recomendada 100%.',
    rating: 5,
    gradient: 'from-hot-pink to-neon-magenta',
  },
  {
    name: 'Diego López',
    role: 'DJ Profesional',
    avatar: 'DL',
    content: 'Como DJ, me encanta que mis seguidores puedan comprar entradas fácilmente para mis eventos. La app es súper intuitiva.',
    rating: 5,
    gradient: 'from-electric-violet to-hot-pink',
  },
  {
    name: 'Lucía Fernández',
    role: 'Organizadora de eventos',
    avatar: 'LF',
    content: 'La plataforma nos ha ayudado a aumentar las ventas de tickets significativamente. El panel de control es muy completo.',
    rating: 5,
    gradient: 'from-rich-gold to-american-gold',
  },
  {
    name: 'Miguel Torres',
    role: 'Usuario VIP',
    avatar: 'MT',
    content: 'El servicio de mesas VIP es excepcional. Siempre encuentro disponibilidad y la confirmación es instantánea.',
    rating: 5,
    gradient: 'from-mint-green to-electric-cyan',
  },
  {
    name: 'Sofia García',
    role: 'Blogger de lifestyle',
    avatar: 'SG',
    content: 'Me encanta poder descubrir eventos nuevos cerca de mí. La interfaz es muy elegante y fácil de usar.',
    rating: 5,
    gradient: 'from-sunset-orange to-burnt-orange',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-gradient-to-br from-midnight-navy via-oxford-blue to-deep-space relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rich-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-rich-gold/20 text-rich-gold font-medium text-sm mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-gold to-champagne-gold">
              usuarios
            </span>
          </h2>
          <p className="text-lg text-silver-mist">
            Miles de personas ya disfrutan de la mejor experiencia en vida nocturna con D&apos;Pary.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-rich-gold/50 transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-rich-gold' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-silver-mist text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-rich-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-silver-mist leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-white/10">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-rich-gold'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
