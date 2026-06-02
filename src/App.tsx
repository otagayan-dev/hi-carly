import { motion, useScroll, useTransform } from 'motion/react'
import dance from './assets/dance.mp4'
import flower1 from './assets/flower-1.svg'
import flower2 from './assets/flower-2.svg'
import flower3 from './assets/flower-3.svg'
import flower4 from './assets/flower-4.svg'
import flower5 from './assets/flower-5.svg'
import flower6 from './assets/flower-6.svg'
import flower7 from './assets/flower-7.svg'

const FLOWERS = [flower1, flower2, flower3, flower4, flower5, flower6, flower7]
const COUNT = 60

const flowerData = Array.from({ length: COUNT }, (_, i) => {
  const src = FLOWERS[i % FLOWERS.length]
  const angle = (i / COUNT) * 2 * Math.PI + (i % 2 === 0 ? 0.15 : -0.15)
  const rx = 65 + ((i * 5) % 26)
  const ry = 38 + ((i * 5) % 26)
  const size = 60 + (i * 14) % 150
  const rotation = (i * 53) % 360
  const rotationDuration = 20 + ((i * 7) % 30)
  const clockwise = i % 3 !== 0
  const delay = ((i * 6180) % 10000) / 10000 * 2.4
  return {
    src,
    x: Math.cos(angle) * rx,
    y: Math.sin(angle) * ry,
    size,
    rotation,
    rotationDuration,
    clockwise,
    delay,
  }
})

type FlowerDatum = (typeof flowerData)[0]

function FlowerItem({ f }: { f: FlowerDatum }) {
  const target = f.clockwise ? f.rotation + 360 : f.rotation - 360

  return (
    <motion.img
      src={f.src}
      alt=""
      initial={{ scale: 0, opacity: 0, rotate: f.rotation }}
      animate={{ scale: 1, opacity: 1, rotate: target }}
      transition={{
        scale: { delay: f.delay, type: 'spring', stiffness: 180, damping: 14 },
        opacity: { delay: f.delay, duration: 0.6 },
        rotate: { duration: f.rotationDuration, repeat: Infinity, ease: 'linear' },
      }}
      style={{
        position: 'absolute',
        width: f.size,
        height: f.size,
        left: `calc(50% + ${f.x}vw - ${f.size / 2}px)`,
        top: `calc(50% + ${f.y}vh - ${f.size / 2}px)`,
        objectFit: 'contain',
      }}
    />
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const groupRotation = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <main className="overflow-hidden">
      <motion.div
        style={{
          rotate: groupRotation,
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        {flowerData.map((f, i) => (
          <FlowerItem key={i} f={f} />
        ))}
      </motion.div>
       <section className="relative z-10 flex-1 flex h-dvh items-center justify-center">
        <motion.div>
          <h1 className="text-[#FF6565] text-[22vw] font-damion m-0 pb-[0.3em]">
            <motion.span
              initial={{ opacity: 0, y: '0.2em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, type: 'spring', bounce: 0.1, duration: 1.5 }}
              style={{ display: 'inline-block', textAlign:'center' }}
            >
              It's You
            </motion.span>
          </h1>
        </motion.div>
      </section>

      <section className="relative z-10 flex h-dvh items-center justify-center">
        <motion.video
          src={dance}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, y: '0.2em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, type: 'spring', bounce: 0.1, duration: 1.5 }}
          style={{width:'100vh', height:'100vw', objectFit:'cover', transform:'rotate(90deg)'}}
        />
      </section>

       <section className="relative z-10 flex-1 flex h-dvh items-center justify-center">
        <motion.div>
          <h1 className="text-[#FF6565] text-[19vw] font-damion m-0 pb-[0.3em]">
            <motion.span
              initial={{ opacity: 0, y: '0.2em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, type: 'spring', bounce: 0.1, duration: 1.5 }}
              style={{ display: 'inline-block', textAlign:'center' }}
            >
              I know It's You
            </motion.span>
          </h1>
        </motion.div>
      </section>
         <section className="relative z-10 flex-1 flex h-dvh items-center justify-center">
        <motion.div>
          <h1 className="text-[#FF6565] text-[19vw] font-damion m-0 pb-[0.3em]">
            <motion.span
              initial={{ opacity: 0, y: '0.2em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, type: 'spring', bounce: 0.1, duration: 1.5 }}
              style={{ display: 'inline-block', textAlign:'center' }}
            >
              hahahaha
            </motion.span>
          </h1>
        </motion.div>
      </section>
      
    </main>
    
  )
}

export default App
