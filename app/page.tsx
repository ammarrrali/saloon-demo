"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <DecoratedSection>
        <Services />
        <Book />
      </DecoratedSection>
    </main>
  );
}

/**
 * Wrapper for Services + Book
 * Adds barber pole stickers (left + right) as background decor
 */
function DecoratedSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bg-[#F6F3EE] overflow-hidden">
      {/* LEFT barber pole */}
      <div className="pointer-events-none absolute left-[-90px] top-40 opacity-0.04">
        <Image
          src="/images/barber-pole.png"
          alt="Barber Pole"
          width={140}
          height={420}
        />
      </div>

      {/* RIGHT barber pole */}
      <div className="pointer-events-none absolute right-[-90px] top-40 opacity-0.04">
        <Image
          src="/images/barber-pole.png"
          alt="Barber Pole"
          width={140}
          height={420}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/scissors.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-white/60 uppercase tracking-[0.4em] text-xs font-medium">
          SALON • STUDIO • RITUAL
        </p>

        <h1 className="mt-6 text-white text-5xl md:text-7xl font-light tracking-tight">
          Precision <span className="italic">Crafted</span>
        </h1>

        <a
          href="#book"
          className="mt-10 inline-block rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Reserve Your Chair
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.35em] text-xs font-bold text-black/60">
            The Menu
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
            Clean cuts. Rich color. <br />
            Ritual-level care.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Cut & Style"
            desc="Signature precision cut, scalp massage, and bespoke styling."
            price="PKR 2,500+"
          />
          <ServiceCard
            title="Color & Tone"
            desc="Advanced color correction, gloss treatments, and custom toning."
            price="PKR 6,000+"
          />
          <ServiceCard
            title="Treatment"
            desc="Deep tissue repair, hydration therapy, and scalp rejuvenation."
            price="PKR 3,500+"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  price,
}: {
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-8 backdrop-blur transition hover:bg-white hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-light">{title}</h3>
        <span className="text-sm text-black/40">{price}</span>
      </div>
      <p className="mt-4 text-sm text-black/60">{desc}</p>
    </div>
  );
}

function Book() {
  return (
    <section id="book" className="pb-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.5rem] border border-black/10 bg-white/80 p-8 md:p-16 shadow-xl">
          <p className="uppercase tracking-[0.35em] text-xs font-bold text-black/60">
            Booking
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight">
            Reserve your slot.
          </h2>

          <form className="mt-12 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-black/10 px-5 py-4 text-sm" placeholder="Full name" />
            <input className="rounded-xl border border-black/10 px-5 py-4 text-sm" placeholder="Phone / WhatsApp" />
            <button className="md:col-span-2 rounded-xl bg-black px-6 py-4 text-sm text-white">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}