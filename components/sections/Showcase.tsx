"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm bg-primary/10"
          >
            Showcase
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Beautiful by design
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[42rem] text-lg">
            A carefully crafted desktop experience that stays out of your
            way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "200px" }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/notch2.webp"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              alt="HyprLuna Desktop Screenshot - Dark Theme"
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority={true}
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23212121'/%3E%3C/svg%3E"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="font-bold text-lg">Dark Theme</h3>
              <p className="text-sm text-white/80">
                Perfect for night coding sessions
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "200px" }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src="/Light.webp"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              alt="HyprLuna Desktop Screenshot - Light Theme"
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              fetchPriority="auto"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23f5f5f5'/%3E%3C/svg%3E"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="font-bold text-lg">Light Theme</h3>
              <p className="text-sm text-white/80">
                Clean and minimal for daytime productivity
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "200px" }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-lg border shadow-lg"
            >
              <Image
                src={`/${i}.webp`}
                width={300}
                height={200}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                quality={75}
                alt={`HyprLuna Showcase ${i}`}
                className="size-full object-cover transition-all hover:scale-110"
                loading="lazy"
                fetchPriority="auto"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='100%25' height='100%25' fill='%23${i % 2 === 0 ? '212121' : '2c2c2c'}'/%3E%3C/svg%3E`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 