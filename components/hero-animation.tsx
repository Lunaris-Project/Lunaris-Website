"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function HeroAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden rounded-lg border bg-background">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-3 gap-4 p-8">
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 h-full rounded-lg bg-primary/10 p-4"
          >
            <div className="h-6 w-24 rounded bg-primary/20"></div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-primary/20"></div>
              <div className="h-4 w-full rounded bg-primary/20"></div>
              <div className="h-4 w-2/3 rounded bg-primary/20"></div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full rounded-lg bg-primary/10 p-4"
          >
            <div className="h-24 w-full rounded bg-primary/20"></div>
            <div className="mt-4 h-4 w-full rounded bg-primary/20"></div>
            <div className="mt-2 h-4 w-2/3 rounded bg-primary/20"></div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-full rounded-lg bg-primary/10 p-4"
          >
            <div className="h-6 w-24 rounded bg-primary/20"></div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-primary/20"></div>
              <div className="h-4 w-full rounded bg-primary/20"></div>
              <div className="h-4 w-2/3 rounded bg-primary/20"></div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-2 h-full rounded-lg bg-primary/10 p-4"
          >
            <div className="h-24 w-full rounded bg-primary/20"></div>
            <div className="mt-4 h-4 w-full rounded bg-primary/20"></div>
            <div className="mt-2 h-4 w-2/3 rounded bg-primary/20"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

