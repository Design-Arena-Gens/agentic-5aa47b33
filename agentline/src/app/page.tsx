import Link from "next/link";
import {
  CalendarDays,
  Check,
  Headphones,
  Mail,
  PhoneCall,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Home() {
  const benefits = [
    {
      icon: PhoneCall,
      title: "Never Miss a Lead",
      description:
        "AgentLine answers every call within seconds, even during load shedding, weekends, and public holidays.",
    },
    {
      icon: CalendarDays,
      title: "Instant Bookings",
      description:
        "Real-time syncing with Google and Outlook calendars so qualified prospects book themselves into open slots.",
    },
    {
      icon: Sparkles,
      title: "Industry Trained Scripts",
      description:
        "Conversational AI tailored for South African accents, property jargon, and local buyer questions.",
    },
    {
      icon: Shield,
      title: "Trusted + Compliant",
      description:
        "Built on GoHighLevel with POPIA-friendly data handling and encrypted call recordings.",
    },
  ];

  const workflow = [
    {
      step: "Answer",
      headline: "Warm, human-like greeting every time.",
      copy: "Our AI receptionist picks up in under three rings with your personalised script and brand tone.",
    },
    {
      step: "Qualify",
      headline: "Smart questions that surface serious buyers.",
      copy: "Dynamic conversation logic gathers budget, preferred suburbs, timelines, service requirements, and more.",
    },
    {
      step: "Book",
      headline: "Calendar bookings without back-and-forth.",
      copy: "AgentLine checks availability and confirms the best slot, even managing buffers between appointments.",
    },
    {
      step: "Confirm",
      headline: "Instant follow-up to seal the deal.",
      copy: "Prospects receive branded email and WhatsApp confirmations, while you get a detailed call summary.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "R1,290",
      blurb: "Perfect for solo agents closing a handful of listings a month.",
      features: [
        "200 call minutes included",
        "1 calendar + 1 inbox integration",
        "Lead qualification tailored to your listings",
        "Automated email confirmations",
      ],
      cta: "Launch Starter",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "R2,190",
      blurb: "For top performers juggling multiple mandates and viewings daily.",
      features: [
        "500 call minutes included",
        "Multi-agent routing + round robin",
        "Custom workflows per property type",
        "Email + WhatsApp confirmations & reminders",
      ],
      cta: "Scale with Pro",
      highlighted: true,
    },
    {
      name: "Business",
      price: "Talk to us",
      blurb: "Ideal for agencies and national franchises needing enterprise support.",
      features: [
        "Unlimited minutes bundle pricing",
        "Dedicated success manager",
        "Advanced reporting dashboards",
        "Priority setup within 48 hours",
      ],
      cta: "Book Strategy Call",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "How fast can we go live?",
      answer:
        "Most agents launch within 5 business days. We import your scripts, connect calendars, and run live call tests before switching on.",
    },
    {
      question: "Does it handle multiple properties?",
      answer:
        "Yes. AgentLine maintains property-specific knowledge, so the AI can match callers to the correct mandate and relevant qualifying questions.",
    },
    {
      question: "What happens after the included minutes?",
      answer:
        "Extra minutes are billed at competitive local VoIP rates. We alert you at 80% usage so you stay in control.",
    },
    {
      question: "Can it route high-priority calls to me?",
      answer:
        "Absolutely. Set escalation rules for VIP buyers, urgent maintenance requests, or bond attorneys and we’ll patch them through instantly.",
    },
  ];

  const sectors = [
    "Real Estate",
    "Salons & Spas",
    "Home Services",
    "Legal Practices",
    "Medical & Dental",
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_60%)]" />
      <div className="absolute inset-0 -z-20 opacity-65">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/40 blur-3xl" />
        <div className="absolute right-32 top-32 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-16 left-12 h-64 w-64 rounded-full bg-emerald-500/20 blur-2xl" />
      </div>
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-xl font-semibold text-white shadow-lg shadow-sky-500/40">
            AL
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">AgentLine</p>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-200">
              AI Receptionist
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          <Link href="#features" className="transition hover:text-sky-300">
            Features
          </Link>
          <Link href="#story" className="transition hover:text-sky-300">
            Story
          </Link>
          <Link href="#pricing" className="transition hover:text-sky-300">
            Pricing
          </Link>
          <Link href="#faq" className="transition hover:text-sky-300">
            FAQ
          </Link>
          <Link
            href="#book-demo"
            className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-slate-900 transition hover:bg-sky-300"
          >
            <PhoneCall className="h-4 w-4" />
            Book a demo
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-6 sm:px-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-200">
              Always-on South African AI receptionist
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Never miss another call, lead, or viewing.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200 sm:text-xl">
              AgentLine answers calls in your brand voice, qualifies serious
              prospects, and locks appointments straight into your calendar.
              Built for South African service pros who can’t afford to let hot
              leads slip through the cracks.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#book-demo"
                className="flex items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
              >
                <Zap className="h-5 w-5" />
                Get started in 5 days
              </Link>
              <Link
                href="#pricing"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200"
              >
                <CalendarDays className="h-5 w-5" />
                See pricing
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-white">24/7/365</p>
                <p className="mt-2 text-sm text-slate-200">
                  Calls answered—no downtime, no load shedding excuses.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-3xl font-semibold text-white">&lt; 3 mins</p>
                <p className="mt-2 text-sm text-slate-200">
                  Average qualifying conversation that delivers ready-to-book
                  leads.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-sky-500/20">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-500/25 blur-3xl" />
              <div className="absolute -left-8 bottom-10 h-44 w-44 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="relative flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-3 text-sky-300">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      Call Transcript
                    </p>
                    <p className="text-lg font-semibold text-white">
                      Buyer enquiry • Sea Point
                    </p>
                  </div>
                </div>
                <div className="space-y-5 text-sm text-slate-200">
                  <ChatBubble
                    name="Caller"
                    role="Prospect"
                    tone="light"
                    message="Hi, I'm interested in the Sea Point apartment listed for R2 million. Is it still available?"
                  />
                  <ChatBubble
                    name="AgentLine"
                    role="AI Receptionist"
                    tone="brand"
                    message="Great news! It’s available. May I confirm your budget range and whether you’re pre-approved for a bond?"
                  />
                  <ChatBubble
                    name="Caller"
                    role="Prospect"
                    tone="light"
                    message="Yes, I’m pre-approved for up to R2.2 million and would like a late afternoon viewing."
                  />
                  <ChatBubble
                    name="AgentLine"
                    role="AI Receptionist"
                    tone="brand"
                    message="We have a 3 PM slot tomorrow. I’ve reserved it and emailed you the confirmation. See you then!"
                  />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Outcome Summary
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Qualified buyer with bond pre-approval verified.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Viewing booked for Thu • 3:00 PM • Sea Point apartment.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      Outlook calendar & WhatsApp confirmation sent instantly.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.4em] text-sky-200">
                  Built for busy South African professionals
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Your always-on receptionist, scripted to sound like you.
                </h2>
                <p className="mt-4 text-base text-slate-100 sm:text-lg">
                  We layer proven playbooks on top of GoHighLevel to deliver an
                  AI receptionist that speaks your language, handles objections,
                  and keeps your deal pipeline full.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition hover:border-sky-400/60 hover:bg-slate-900/70"
                  >
                    <item.icon className="h-8 w-8 text-sky-300 transition group-hover:text-sky-200" />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-sky-200">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Built on GoHighLevel, refined for South African workflows.
              </h2>
              <p className="mt-4 text-base text-slate-100 sm:text-lg">
                We configure Conversation AI, call routing, and calendar
                automation inside GHL while layering on custom scripts, local
                knowledge, and quality control to deliver measurable ROI within
                weeks.
              </p>
              <div className="mt-10 space-y-6">
                {workflow.map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-sky-400/60 hover:bg-slate-900/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-200">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.headline}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-200">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-transparent p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-sky-100">
                  Why it wins
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  R15k receptionist vs. AgentLine
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-100">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-emerald-400" />
                    <span>
                      Fraction of the cost: plans from R1,290/month with usage
                      alerts and transparent billing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-emerald-400" />
                    <span>
                      Available always: no sick days, no after-hours penalties,
                      no outages during loadshedding.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-emerald-400" />
                    <span>
                      High-converting scripts: updated monthly using call
                      insights from your top-performing conversations.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-sky-100">
                  Expansion roadmap
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Proven in property, ready for more industries.
                </h3>
                <p className="mt-4 text-sm text-slate-200">
                  Real estate is our beachhead, but the same playbook adapts to
                  any appointment-heavy business. We prebuild playbooks for the
                  sectors below, switching on your vertical in days.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-white/15 bg-slate-950/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-slate-100"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="story"
          className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-sky-500/5 to-transparent p-10 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-100">
              Real-world impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Thabo closes more mandates with AgentLine.
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="space-y-5 text-base text-slate-100">
                <p>
                  Thabo, a Cape Town agent, used to lose leads while hopping
                  between showings. Voicemail messages piled up, and by the time
                  he called back, serious buyers had already moved on.
                </p>
                <p>
                  Once AgentLine went live, every buyer calling about his Sea
                  Point listings received a polished greeting in isiXhosa or
                  English, depending on the caller. The AI confirmed budgets,
                  bond pre-approval, and viewing preferences, then booked a
                  showing directly in Thabo’s synced calendar.
                </p>
                <p>
                  While he finished one viewing, AgentLine scheduled the next.
                  Thabo now receives concise summaries after each call, with key
                  details logged automatically into his CRM pipeline.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-100 shadow-xl shadow-sky-500/20">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Outcomes after 30 days
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 text-emerald-400" />
                    96% of inbound calls answered automatically within 8
                    seconds.
                  </li>
                  <li className="flex items-start gap-3">
                    <CalendarDays className="mt-1 h-5 w-5 text-emerald-400" />
                    18 viewings booked with zero manual admin.
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-emerald-400" />
                    Automated email + WhatsApp reminders cut no-shows by 43%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col gap-6 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-sky-100">
                Pricing
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Choose a plan that scales with every new mandate.
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
                Transparent, usage-based pricing with performance reviews every
                quarter. Upgrade, downgrade, or pause with 30 days’ notice.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/50 p-8 text-left transition ${
                    plan.highlighted
                      ? "shadow-2xl shadow-sky-500/30 ring-2 ring-sky-400/70"
                      : "hover:border-sky-400/50 hover:bg-slate-900/70"
                  }`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      {plan.name}
                    </p>
                    <p className="mt-4 text-4xl font-semibold text-white">
                      {plan.price}
                    </p>
                    <p className="mt-2 text-sm text-slate-200">{plan.blurb}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-100">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#book-demo"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-sky-500 text-slate-900 hover:bg-sky-300"
                        : "border border-white/25 text-slate-100 hover:border-sky-300 hover:text-sky-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-sky-100">
                  Questions
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Everything you need to know before switching on AgentLine.
                </h2>
                <p className="mt-4 text-sm text-slate-200">
                  We operate as your silent partner in the background. Our team
                  manages training, optimisations, and monthly reporting so you
                  can stay focused on closing.
                </p>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition hover:border-sky-400/60 hover:bg-slate-900/60"
                  >
                    <summary className="cursor-pointer text-lg font-semibold text-white">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm text-slate-200 group-open:text-slate-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="book-demo"
          className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10"
        >
          <div className="rounded-[2.5rem] border border-sky-500/60 bg-sky-500/10 p-10 text-center shadow-2xl shadow-sky-500/30 backdrop-blur">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to put a top-performing receptionist on autopilot?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-100 sm:text-lg">
              Tell us about your mandates or services, and we’ll design a custom
              AI playbook for your business. Setup includes call routing,
              scripts, calendar sync, and live QA support.
            </p>
            <form
              className="mx-auto mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2"
              action="https://formspree.io/f/xwpekoba"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="w-full rounded-full border border-transparent bg-white/15 px-6 py-3 text-sm text-white placeholder:text-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                required
                className="w-full rounded-full border border-transparent bg-white/15 px-6 py-3 text-sm text-white placeholder:text-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile or WhatsApp number"
                required
                className="w-full rounded-full border border-transparent bg-white/15 px-6 py-3 text-sm text-white placeholder:text-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
              <input
                type="text"
                name="business"
                placeholder="Business name & industry"
                className="w-full rounded-full border border-transparent bg-white/15 px-6 py-3 text-sm text-white placeholder:text-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
              <textarea
                name="context"
                placeholder="Which tasks do you want us to handle?"
                rows={3}
                className="sm:col-span-2 w-full rounded-3xl border border-transparent bg-white/15 px-6 py-4 text-sm text-white placeholder:text-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
              <button
                type="submit"
                className="sm:col-span-2 flex items-center justify-center gap-2 rounded-full bg-white px-10 py-3 text-base font-semibold text-slate-900 transition hover:bg-sky-200"
              >
                <PhoneCall className="h-5 w-5" />
                Secure your onboarding call
              </button>
            </form>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-200">
              Setup guarantee: if we don’t launch within 10 days, first month is
              on us.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-slate-300 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">AgentLine</p>
            <p className="mt-2 max-w-md text-slate-400">
              Powered by GoHighLevel. Crafted in South Africa for service pros
              who demand premium client experiences around the clock.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-slate-400 md:items-end">
            <Link
              href="mailto:hello@agentline.africa"
              className="flex items-center gap-2 hover:text-sky-200"
            >
              <Mail className="h-4 w-4" />
              hello@agentline.africa
            </Link>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} AgentLine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChatBubble({
  name,
  role,
  tone,
  message,
}: {
  name: string;
  role: string;
  tone: "light" | "brand";
  message: string;
}) {
  return (
    <div
      className={`rounded-3xl border p-4 ${
        tone === "brand"
          ? "border-sky-400/40 bg-sky-500/15 text-sky-100"
          : "border-white/10 bg-white/5 text-slate-200"
      }`}
    >
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-300">
        <span>{name}</span>
        <span>{role}</span>
      </div>
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
}
