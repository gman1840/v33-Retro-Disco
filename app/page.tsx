
"use client";
import Image from "next/image";
import SectionDivider from "../components/SectionDivider";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section id="home" className="hero-wrap">
        <div className="container grid md:grid-cols-2 gap-8 pt-10 md:pt-20 pb-12 relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl/[1.07] font-extrabold tracking-tight">
              Silent Disco<br/>Rentals in<br/>Orange County &<br/>North SD
            </h1>
            <p className="mt-6 text-lg text-black/70 max-w-xl">
              Put on the headset and transform into a magical world of disco & connection!
            </p>
            <div className="mt-7 flex gap-6">
              <a href="#quote" className="rounded-lg bg-[#F77C45] px-6 py-3 text-white font-semibold shadow-card hover:opacity-90">
                Get a Free Quote
              </a>
              <a href="#packages" className="text-[#C54134] font-semibold">See Packages ↓</a>
            </div>
          </div>
          <div className="relative min-h-[220px] md:min-h-[280px]" />
        </div>
        <Image src="/images/hero-deco.png" alt="Ribbon and disco ball" width={1400} height={800} priority className="hero-deco"/>
      </section>

      <SectionDivider/>

      <section id="packages" className="container py-14">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10">Our Packages</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
          <article className="bg-white rounded-2xl p-8 shadow-card">
            <div className="text-[56px]">🎧</div>
            <h3 className="mt-3 text-3xl font-extrabold italic">Pickup</h3>
            <p className="mt-4 text-black/70">Grab the full kit, quick 10-min demo, run the party yourself.</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-card">
            <div className="text-[56px]">📍</div>
            <h3 className="mt-3 text-3xl font-extrabold italic">Delivery</h3>
            <p className="mt-4 text-black/70">We deliver, set up, and pick up next day. Easy & stress-free.</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-card">
            <div className="text-[56px]">🎵</div>
            <h3 className="mt-3 text-3xl font-extrabold italic">Helper</h3>
            <p className="mt-4 text-black/70">Delivery + live walkthrough for your guests, on-site assistance for your event.</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-card">
            <div className="text-[56px]">🎤</div>
            <h3 className="mt-3 text-3xl font-extrabold italic">Pro</h3>
            <p className="mt-4 text-black/70">Full DJ/MC service, live requests, announcements, and crowd hype.</p>
          </article>
        </div>
      </section>

      <SectionDivider/>

      <section className="container py-12">
        <div className="rounded-3xl shadow-card overflow-hidden bg-white">
          <Image src="/images/sunset.jpg" alt="Dana Point sunset over the water" width={2400} height={1000} className="w-full h-[380px] md:h-[440px] object-cover" priority/>
        </div>
      </section>

      <SectionDivider/>

      <section id="what" className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What’s a Silent Disco?</h2>
        <p className="text-black/80 max-w-3xl">
          Guests wear wireless headsets with up to three music channels. Switch channels any time,
          dance to your favorite vibe, and keep the neighbors happy—speakers aren’t required.
          It’s immersive, surprisingly social, and ridiculously fun.
        </p>
      </section>

      <section className="container pb-14">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6">Perfect for…</h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black/80">
          <li className="bg-white rounded-xl p-5 shadow-card">Beach parties & sunsets</li>
          <li className="bg-white rounded-xl p-5 shadow-card">Backyard birthdays</li>
          <li className="bg-white rounded-xl p-5 shadow-card">Weddings & after-parties</li>
          <li className="bg-white rounded-xl p-5 shadow-card">Corporate events</li>
          <li className="bg-white rounded-xl p-5 shadow-card">Apartment/quiet-hour venues</li>
          <li className="bg-white rounded-xl p-5 shadow-card">Community & church nights</li>
        </ul>
      </section>

      <SectionDivider/>

      <section id="about" className="container py-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">About Us</h2>
        <div className="max-w-4xl mx-auto text-lg leading-8 text-black/85 space-y-6">
          <p>Hey there! I’m Garrett, and I started Dana Point Disco because I love this community and the way it fosters connection. The first time I experienced a silent disco was at my Senior Grad Night at Disneyland. I wandered into Cars Land, slipped on a headset, and suddenly I was transported — dancing with friends and total strangers, carefree and completely immersed in the music. That feeling stuck with me, and I thought: what better place than here in Dana Point to bring that magic to life?</p>
          <p>Today I get to share that joy through Dana Point Disco. I’m married to my wonderful wife, Jenna, and when I’m not helping people throw unforgettable parties, I’m at home with our two cats, out surfing, or helping out at our local church. For me, silent disco isn’t just about music, it’s about creating moments of connection, laughter, and memories you’ll never forget.</p>
        </div>
        <div className="mt-10 flex items-end justify-center gap-14">
          <Image src="/images/daisy.svg" alt="" width={70} height={70}/>
          <Image src="/images/bus.svg" alt="VW bus with surfboard" width={280} height={140}/>
          <Image src="/images/daisy.svg" alt="" width={70} height={70}/>
        </div>
      </section>

      <SectionDivider/>

      <section id="quote" className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Request a Quote</h2>
        <p className="text-black/80 mb-6 max-w-2xl">Tell us a few details and we’ll reply quickly with availability and pricing.</p>
        <a href="mailto:hello@danapointdisco.com" className="inline-block rounded-lg bg-[#F77C45] px-6 py-3 text-white font-semibold shadow-card hover:opacity-90">Email hello@danapointdisco.com</a>
      </section>
    </main>
  );
}
