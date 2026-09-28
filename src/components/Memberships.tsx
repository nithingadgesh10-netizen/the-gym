import React, { useState } from 'react';
import { SolarIcon } from './SolarIcon';

interface MembershipsProps {
  onSelectPlan: (plan: string, billing: 'monthly' | 'yearly', price: number) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Essential Iron',
      tagline: 'Foundational strength training for self-guided athletes',
      monthlyPrice: 2000,
      yearlyPrice: 1600,
      isPopular: false,
      features: [
        'Full gym floor access (5am - 11pm)',
        'Full free weights, racks & cardio machines',
        'Locker room & high-pressure showers',
        'Access to member workout tracking app',
        '1 complimentary trainer assessment',
      ],
      excluded: ['Group HIIT & CrossFit classes', 'Infrared sauna & recovery zone', '24/7 keycard access'],
    },
    {
      id: 'pro',
      name: 'Pro Performance',
      tagline: 'Our premier tier for athletes seeking all-inclusive coaching & recovery',
      monthlyPrice: 4000,
      yearlyPrice: 3200,
      isPopular: true,
      features: [
        '24/7 unlimited keycard access',
        'Unlimited CrossFit & HIIT group classes',
        'Full recovery lab: Infrared Sauna & Cold Plunge',
        '2 monthly personal 1-on-1 coaching sessions',
        'InBody biometric composition scans',
        'Guest pass privilege (2 passes / month)',
      ],
      excluded: [],
    },
    {
      id: 'elite',
      name: 'Elite Mastery',
      tagline: 'Dedicated personal coaching and custom nutrition programming',
      monthlyPrice: 6000,
      yearlyPrice: 4800,
      isPopular: false,
      features: [
        '24/7 VIP facility & private loft access',
        'Weekly 1-on-1 private coaching sessions (4/mo)',
        'Custom macro nutrition & meal planning',
        'Priority booking for Olympic platforms',
        'Unlimited sauna, plunge, and compression boots',
        'Quarterly bloodwork & metabolic consultation',
      ],
      excluded: [],
    },
  ];

  return (
    <section id="memberships" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            <span className="w-2 h-0.5 bg-lime-400"></span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-50 uppercase text-balance mb-4">
            Invest in Your Physical Capital
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            No long-term locks. No hidden cancellation fees. Pure commitment to your transformation.
          </p>

          {/* Custom Toggle: Monthly / Yearly with Transition Logic */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-zinc-800 text-zinc-50 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-lime-400 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>Annual Billing</span>
              <span
                className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                  billingCycle === 'yearly'
                    ? 'bg-zinc-950 text-lime-400'
                    : 'bg-lime-400/20 text-lime-400'
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

            if (plan.isPopular) {
              return (
                /* Pro Card: z-10 and md:-translate-y-4 with absolute Most Popular badge at -top-4 */
                <div
                  key={plan.id}
                  className="relative z-10 md:-translate-y-4 rounded-2xl bg-zinc-900/95 border-2 border-lime-400 p-8 flex flex-col justify-between shadow-2xl shadow-lime-400/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.25)]"
                >
                  {/* Absolute Badge at -top-4 */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-zinc-950 text-xs font-extrabold uppercase tracking-wider shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                    Most Popular
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black text-zinc-50 uppercase tracking-tight">
                        {plan.name}
                      </h3>
                      <span className="text-xs font-bold text-lime-400 px-2 py-0.5 rounded bg-lime-400/10 border border-lime-400/20">
                        Top Value
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 mb-6">{plan.tagline}</p>

                    <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-zinc-800">
                      <span className="text-4xl sm:text-5xl font-black text-zinc-50 font-mono tracking-tight">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono uppercase">
                        / {billingCycle === 'monthly' ? 'month' : 'mo (billed yearly)'}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <p className="text-xs uppercase font-bold tracking-wider text-lime-400">
                        Included Privileges:
                      </p>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                          <span className="text-lime-400 shrink-0 mt-0.5">
                            <SolarIcon icon="solar:check-circle-linear" size={16} />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name, billingCycle, price)}
                    className="group w-full inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 shadow-[0_0_15px_rgba(163,230,53,0.2)] hover:shadow-[0_0_20px_rgba(163,230,53,0.35)] cursor-pointer"
                  >
                    <span>Get Pro Performance</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <SolarIcon icon="solar:arrow-right-linear" size={16} />
                    </span>
                  </button>
                </div>
              );
            }

            return (
              /* Flanking Cards */
              <div
                key={plan.id}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 flex flex-col justify-between hover:border-lime-400/50 transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 uppercase tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-6">{plan.tagline}</p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-zinc-800/80">
                    <span className="text-4xl font-black text-zinc-50 font-mono tracking-tight">
                      ₹{price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono uppercase">
                      / {billingCycle === 'monthly' ? 'month' : 'mo (billed yearly)'}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                      Included Privileges:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="text-lime-400 shrink-0 mt-0.5">
                          <SolarIcon icon="solar:check-circle-linear" size={16} />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                    {plan.excluded && plan.excluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-50">
                        {plan.excluded.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-500 line-through">
                            <span className="text-zinc-600 shrink-0 mt-0.5">✕</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name, billingCycle, price)}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer border border-zinc-700/80 hover:border-zinc-600"
                >
                  <span>Select {plan.name.split(' ')[0]}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <SolarIcon icon="solar:arrow-right-linear" size={16} />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
