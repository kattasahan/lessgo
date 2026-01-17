'use client';

// import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';

// export function Hero() {
//   <section id="hero" className="h-[calc(100vh-60px)]">
//     <div className="relative flex h-full w-full flex-col items-start justify-start overflow-hidden">
//       <BackgroundRippleEffect />
//       <h2 className="relative z-10 mx-auto mt-50 max-w-4xl text-center text-4xl font-bold text-neutral-800 lg:text-7xl dark:text-neutral-100">
//         Designed in Denim. Defined by You
//       </h2>
//       <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
//         Every pair of peesey jeans is carefully crafted from premium denim,
//         designed to fit your body and move with your lifestyle, giving you
//         freedom, comfort, and your own unique style.
//       </p>
//     </div>
//   </section>;
// }

import { motion } from 'motion/react';
import { ImagesSlider } from '../../ui/images-slider';

export function Hero() {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <section id="hero" className="h-[calc(100vh-50px)] w-full bg-muted">
      <ImagesSlider images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center max-w-50 sm:max-w-2xl bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4">
            Designed in Denim. Defined by You
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>View All →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
