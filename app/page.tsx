"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">

      {/* Navbar */}
      <nav className="w-full bg-white px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">

        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={40}
          className="w-auto h-auto"
        />

        <div className="hidden lg:flex gap-8 items-center text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-4">

          <button className="hidden sm:block bg-[#4657D9] text-white px-6 py-3 rounded-md text-sm">
            Contact Us
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-3xl"
          >
            ☰
          </button>

        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">

          <div
            onClick={() => setMenuOpen(false)}
            className="w-[35%] bg-black/70"
          />

          <div className="w-[65%] bg-[#f7f8ff] px-8 py-6">

            <div className="flex items-center justify-between mb-12">

              <Image
                src="/logo.png"
                alt="Logo"
                width={110}
                height={45}
                className="w-auto h-auto"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-[#4657D9]"
              >
                ×
              </button>

            </div>

            <div className="space-y-9 text-sm">

              <div className="flex gap-5 items-center text-[#4657D9]">
                <Image src="/home.png" alt="" width={18} height={18} />
                <span>Home</span>
              </div>

              <div className="flex gap-5 items-center">
                <Image src="/aboutUs.png" alt="" width={18} height={18} />
                <span>About Us</span>
              </div>

              <div className="flex gap-5 items-center">
                <Image src="/services.png" alt="" width={18} height={18} />
                <span>Our Services</span>
              </div>

              <div className="flex gap-5 items-center">
                <Image src="/pricing.png" alt="" width={18} height={18} />
                <span>Pricing</span>
              </div>

              <div className="flex gap-5 items-center">
                <Image src="/faq.png" alt="" width={18} height={18} />
                <span>FAQ</span>
              </div>

              <div className="flex gap-5 items-center">
                <Image src="/contact.png" alt="" width={18} height={18} />
                <span>Contact</span>
              </div>

            </div>

            <button className="mt-10 w-full bg-[#4657D9] text-white py-3 rounded-md text-sm">
              Contact Us
            </button>

          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 py-10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div className="text-center lg:text-left">

            <h1 className="font-bold leading-tight text-[38px] md:text-[46px] lg:text-[56px]">
              Simplifying{" "}
              <span className="text-[#4657D9] underline decoration-[#4657D9]/40">
                Compliance
              </span>{" "}
              For Research Analysts
            </h1>

            <p className="mt-5 text-[18px] leading-8 text-gray-700 max-w-xl mx-auto lg:mx-0">
              Stay focused on your insights — We’ll handle the compliance.
              Our expert solutions ensure your research practices meet every
              regulatory requirement with confidence and ease.
            </p>

            <div className="mt-6 space-y-3 max-w-xl mx-auto lg:mx-0">

              <div className="flex gap-3 items-center">
                <Image src="/check-sign.png" alt="" width={20} height={20} />
                <p>End-To-End Compliance Support</p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src="/check-sign.png" alt="" width={20} height={20} />
                <p>Regulatory Filings Made Simple</p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src="/check-sign.png" alt="" width={20} height={20} />
                <p>Tailored Solutions For Independent Analysts & Firms</p>
              </div>

            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="bg-[#4657D9] text-white px-8 py-3 rounded-md">
                Get Started
              </button>

              <button className="border border-[#4657D9] text-[#4657D9] px-8 py-3 rounded-md">
                Book A Consultation
              </button>

            </div>
          </div>

          <div className="flex justify-center">

            <Image
              src="/banner.png"
              alt="Banner"
              width={600}
              height={600}
              className="w-full max-w-[480px] h-auto"
            />

          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="font-bold leading-tight text-[34px] md:text-[42px] lg:text-[46px] text-center lg:text-left">
              Why{" "}
              <span className="text-[#4657D9]">
                Compliance Matters
              </span>{" "}
              For Research Analysts
            </h2>

            <p className="mt-5 text-[18px] leading-8 text-gray-700 text-center lg:text-left">
              In today’s regulatory environment, even a small oversight can
              lead to penalties and reputational risks. We help research
              analysts and firms navigate complex compliance requirements.
            </p>

            <div className="mt-8 flex justify-center">

              <Image
                src="/section2.png"
                alt="Section"
                width={500}
                height={500}
                className="w-full max-w-[430px] h-auto"
              />

            </div>
          </div>

          <div className="space-y-6">

            <FeatureCard
              image="/regulatory Clarity.png"
              title="Regulatory Clarity"
              text="We decode complex compliance rules into simple actionable steps."
            />

            <FeatureCard
              image="/hassle-Free Filings Clarity.png"
              title="Hassle-Free Filings Clarity"
              text="From registration to ongoing reporting we manage it end-to-end."
            />

            <FeatureCard
              image="/risk Protection.png"
              title="Risk Protection"
              text="Stay ahead of audits inspections and compliance gaps with proactive support."
            />

          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#f7f8ff] border border-gray-200 rounded-xl p-6 hover:border-[#4657D9] hover:shadow-md transition">

      <div className="flex gap-4 items-start">

        <Image
          src={image}
          alt={title}
          width={42}
          height={42}
          className="w-auto h-auto"
        />

        <div>

          <h3 className="text-[20px] font-semibold">
            {title}
          </h3>

          <p className="text-gray-700 mt-2 text-[16px] leading-7">
            {text}
          </p>

        </div>
      </div>
    </div>
  );
}git init