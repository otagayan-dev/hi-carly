import { motion } from 'motion/react'
import flower1 from './assets/flower-1.svg'
import flower2 from './assets/flower-2.svg'
import flower3 from './assets/flower-3.svg'
import flower4 from './assets/flower-4.svg'
import flower5 from './assets/flower-5.svg'
import flower6 from './assets/flower-6.svg'

const FLOWERS = [flower1, flower2, flower3, flower4, flower5, flower6]

const COUNT = 60

const flowerData = Array.from({ length: COUNT }, (_, i) => {
  const src = FLOWERS[i % FLOWERS.length]
  const angle = (i / COUNT) * 2 * Math.PI + (i % 2 === 0 ? 0.15 : -0.15)
  const rx = 55 + ((i * 5) % 26)
  const ry = 35 + ((i * 5) % 26)
  const size = 90 + (i * 14) % 110
  const rotation = (i * 53) % 360
  return {
    src,
    x: Math.cos(angle) * rx,
    y: Math.sin(angle) * ry,
    size,
    rotation,
  }
})

function App() {
  return (
    <main className="relative ">
      {flowerData.map((f, i) => (
        <motion.img
          key={i}
          src={f.src}
          alt=""
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: i * 0.04,
            type: 'spring',
            stiffness: 180,
            damping: 14,
          }}
          style={{
            position: 'absolute',
            width: f.size,
            height: f.size,
            left: `calc(50% + ${f.x}vw - ${f.size / 2}px)`,
            top: `calc(50% + ${f.y}vh - ${f.size / 2}px)`,
            rotate: f.rotation,
            objectFit: 'contain',
          }}
        />
      ))}

     <section className='flex h-dvh items-center justify-center'>
       <h1 className="relative z-10 text-[#FF6565] text-[22vw] font-damion m-0 leading-none">
        <motion.span
          initial={{ opacity: 0, y: '0.2em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: 'spring', bounce: 0.1, duration: 1.5 }}
          style={{ display: 'inline-block' }}
        >
          Hi Carly
        </motion.span>
     
      </h1>
     </section>

    </main>
  )
}

export default App
