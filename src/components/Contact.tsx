import React from 'react';
import { SolarIcon } from './SolarIcon';

interface ContactProps {
  onSuccessToast?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const quickInquiries = [
    {
      title: 'Book Free Facility Tour',
      subtitle: 'Walk through our 15,000 sq ft training arena',
      message:
        'Hi, I would like to book a free facility tour at The Gym (Tavarekere, Bengaluru).',
    },
    {
      title: 'Membership Plans & Pricing',
      subtitle: 'Essential, Pro, and Elite packages',
      message:
        'Hi, I want to inquire about current membership plans and discounts at The Gym.',
    },
    {
      title: 'Personal Training & Coaching',
      subtitle: '1-on-1 conditioning with certified coaches',
      message:
        'Hi, I am looking for 1-on-1 personal training and coach availability at The Gym.',
    },
    {
      title: 'Daily CrossFit & Batch Timings',
      subtitle: 'Morning & evening class schedule',
      message:
        'Hi, could you please share the daily CrossFit and group workout schedule?',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            <span className="w-2 h-0.5 bg-lime-400"></span>
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-50 uppercase text-balance mb-4">
            Connect With Our Head Coaches
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Drop in for a tour of our Bengaluru training arena or message us directly on WhatsApp for
            instant consultation and bookings.
          </p>
        </div>

        {/* 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Direct WhatsApp Booking & Consultation Hub */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-7 sm:p-9 flex flex-col justify-between">
            <div>
              {/* WhatsApp Active Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-bold text-[#25D366] mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                </span>
                <span>Coaches Online · Instant WhatsApp Response</span>
              </div>

              <h3 className="text-2xl font-black text-zinc-100 uppercase tracking-tight mb-2">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                Skip tedious forms! Reach our coaching staff directly on WhatsApp to claim your free
                assessment, schedule your facility walkthrough, or get personalized advice.
              </p>

              {/* Quick Inquiry Options */}
              <div className="mb-6 space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Choose a topic to chat about:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {quickInquiries.map((inquiry, idx) => (
                    <a
                      key={idx}
                      href={`https://wa.me/918618490717?text=${encodeURIComponent(inquiry.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/chip text-left p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-[#25D366]/60 hover:bg-zinc-900/90 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-zinc-200 group-hover/chip:text-[#25D366] transition-colors">
                          {inquiry.title}
                        </span>
                        <span className="text-zinc-500 group-hover/chip:text-[#25D366] transition-colors">
                          →
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500 line-clamp-1">
                        {inquiry.subtitle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="pt-6 border-t border-zinc-800/80 space-y-3">
              {/* Primary WhatsApp Button */}
              <a
                href="https://wa.me/918618490717?text=Hi%2C%20I%20am%20interested%20in%20The%20Gym%20Bengaluru%20and%20would%20like%20to%20consult%20with%20a%20coach."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-4 px-6 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.55)] cursor-pointer"
              >
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.484-8.418z" />
                </svg>
                <span>Message on WhatsApp: +91 86184 90717</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <SolarIcon icon="solar:arrow-right-linear" size={18} />
                </span>
              </a>

              {/* Secondary Click to Call */}
              <a
                href="tel:+918618490717"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold py-3 px-6 rounded-xl text-xs sm:text-sm border border-zinc-800 transition-colors"
              >
                <SolarIcon icon="solar:phone-calling-linear" size={16} className="text-lime-400" />
                <span>Or Call Us Directly: +91 86184 90717</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Contact Info + Pattern-filled Map View Integration */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact Info Card */}
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-7">
              <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-tight mb-4">
                Headquarters & Hours
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 shrink-0 mt-0.5">
                    <SolarIcon icon="solar:map-point-linear" size={18} />
                  </span>
                  <div>
                    <strong className="text-zinc-100 block">The Gym Headquarters</strong>
                    158, 4th Cross Rd, Tavarekere, Venkateshwara Layout, S.G. Palya, Bengaluru,
                    Karnataka 560029
                  </div>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 shrink-0 mt-0.5">
                    <SolarIcon icon="solar:clock-circle-linear" size={18} />
                  </span>
                  <div>
                    <strong className="text-zinc-100 block">Operational Hours</strong>
                    <span>Staffed: Mon - Fri: 5:00 AM - 11:00 PM</span>
                    <br />
                    <span>Sat - Sun: 6:00 AM - 9:00 PM</span>
                    <br />
                    <span className="text-lime-400 font-semibold">
                      24/7 Keycard Access for Pro & Elite
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 shrink-0 mt-0.5">
                    <SolarIcon icon="solar:phone-linear" size={18} />
                  </span>
                  <div>
                    <strong className="text-zinc-100 block">Phone Support</strong>
                    <a
                      href="tel:+918618490717"
                      className="text-zinc-200 hover:text-lime-400 transition-colors font-mono"
                    >
                      +91 86184 90717
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-lime-400 shrink-0 mt-0.5">
                    <SolarIcon icon="solar:letter-linear" size={18} />
                  </span>
                  <div>
                    <strong className="text-zinc-100 block">Direct Inquiry</strong>
                    contact@thegymiron.com
                  </div>
                </li>
              </ul>
            </div>

            {/* Map View Integration */}
            <div className="relative h-64 rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-950 flex flex-col justify-between p-5 group shadow-lg">
              {/* Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`,
                  backgroundColor: '#09090b',
                }}
              />

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

              {/* Top Bar inside Map Placeholder */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-700/60 text-[10px] font-mono uppercase tracking-wider text-lime-400 font-bold backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                  Map View · Bengaluru
                </span>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
                  12°55'47.3"N 77°36'30.0"E
                </span>
              </div>

              {/* Center Map Pin Target with Radar Pulse */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-lime-400/20" />
                  <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                    <SolarIcon icon="solar:map-point-linear" size={20} />
                  </span>
                </div>
                <span className="mt-2 text-xs font-bold text-zinc-100 bg-zinc-950/85 px-3 py-1 rounded-full border border-zinc-800 text-center">
                  The Gym · Tavarekere, Bengaluru
                </span>
              </div>

              {/* Bottom bar */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-800/80">
                <span className="truncate mr-2">S.G. Palya, Bengaluru 560029</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=158,+4th+Cross+Rd,+Tavarekere,+Venkateshwara+Layout,+S.G.+Palya,+Bengaluru,+Karnataka+560029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 hover:text-lime-300 font-semibold cursor-pointer underline underline-offset-2 shrink-0"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
