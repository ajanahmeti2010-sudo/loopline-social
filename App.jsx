import { useEffect, useRef, useState } from 'react'
import { Calendar, Music2, Camera, Clapperboard, Palette, MessageCircle, Menu, X, ChevronDown, ArrowUpRight, Play } from 'lucide-react'
import { site, hero, stats, resultsSection, caseStudies, services, why, steps, packages, pricingNotes, about, budgets, faqs, legal } from './config.js'

const icons = { calendar: Calendar, music: Music2, camera: Camera, video: Clapperboard, palette: Palette, message: MessageCircle }
const nav = [['Results', '#work'], ['Services', '#services'], ['Process', '#process'], ['Pricing', '#pricing'], ['FAQ', '#faq']]

function bookingProps() {
  return site.bookingUrl ? { href: site.bookingUrl, target: '_blank', rel: 'noopener noreferrer' } : { href: '#contact' }
}

function Logo({ light }) {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold" aria-label={site.name + ' home'}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-signal text-ink">
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true"><path d="M9 22V10m0 12h9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" /></svg>
      </span>
      <span className={light ? 'text-bone' : 'text-ink'}>{site.name}</span>
    </a>
  )
}

function Button({ children, variant = 'solid', className = '', ...p }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5 '
  const v = variant === 'solid' ? 'bg-signal text-ink' : 'border border-bone/40 text-bone hover:border-bone'
  return <a className={base + v + ' ' + className} {...p}>{children}</a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo light />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map(([t, h]) => <a key={h} href={h} className="text-sm text-bone/80 hover:text-bone">{t}</a>)}
          <Button {...bookingProps()} className="!py-2.5 !text-sm">Free Consultation</Button>
        </nav>
        <button className="text-bone md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-bone/10 px-5 pb-5 md:hidden" aria-label="Mobile">
          {nav.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-lg text-bone">{t}</a>)}
          <Button {...bookingProps()} onClick={() => setOpen(false)}>Free Consultation</Button>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-24 text-bone">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="rise text-5xl font-extrabold leading-[1.02] sm:text-7xl">{hero.headline}</h1>
          <p className="rise mt-6 max-w-xl text-lg text-bone/75" style={{ animationDelay: '.15s' }}>{hero.sub}</p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '.3s' }}>
            <Button {...bookingProps()}>{hero.primaryCta}</Button>
            <Button variant="ghost" href="#work">{hero.secondaryCta}</Button>
          </div>
        </div>
        {/* Decorative feed mock: pure CSS, no images needed */}
        <div className="rise relative mx-auto h-[420px] w-full max-w-sm" style={{ animationDelay: '.45s' }} aria-hidden="true">
          <div className="absolute left-0 top-6 w-44 rotate-[-6deg] rounded-3xl bg-ink-2 p-3 ring-1 ring-bone/10">
            <div className="grid aspect-[9/14] place-items-center rounded-2xl bg-gradient-to-br from-signal/80 to-orange-300"><Play className="h-10 w-10 text-ink" /></div>
            <div className="mt-3 h-2 w-2/3 rounded bg-bone/20" /><div className="mt-2 h-2 w-1/2 rounded bg-bone/10" />
          </div>
          <div className="absolute right-0 top-0 w-48 rotate-[5deg] rounded-3xl bg-bone p-3 text-ink shadow-2xl">
            <div className="grid aspect-[9/14] place-items-center rounded-2xl bg-ink"><Play className="h-10 w-10 text-signal" /></div>
            <div className="mt-3 flex justify-between text-xs font-semibold"><span>Reel</span><span>Saved</span></div>
          </div>
          <div className="absolute bottom-0 left-10 rounded-2xl bg-signal px-5 py-4 font-display text-lg font-bold text-ink">Watch time up</div>
        </div>
      </div>
    </section>
  )
}

function Counter({ value }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const m = String(value).match(/^(\d[\d,]*(?:\.\d+)?)(.*)$/)
    if (!m) { setShown(value); return }
    const target = parseFloat(m[1].replace(/,/g, '')), suffix = m[2]
    const dec = m[1].includes('.') ? m[1].split('.')[1].length : 0
    const fmt = (n) => n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { setShown(value); return }
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1)
        setShown(p < 1 ? fmt(target * (1 - Math.pow(1 - p, 3))) : value)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])
  return <span ref={ref}>{shown}</span>
}

function Results() {
  return (
    <section id="results" className="bg-bone">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-ink p-6 text-bone">
            <div className="font-display text-5xl font-extrabold text-signal"><Counter value={s.value} /></div>
            <p className="mt-3 text-sm text-bone/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-ink-2 py-24 text-bone">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">What we do for your business</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon] || Calendar
            return (
              <article key={s.title} className="group bg-ink-2 p-8 transition-colors hover:bg-ink">
                <Icon className="h-8 w-8 text-signal" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-bone/70">{s.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProfileLinks({ c }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={c.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-signal px-5 py-3 font-semibold text-ink">TikTok profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
      <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-bone/40 px-5 py-3 font-semibold">Instagram profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="bg-ink py-24 text-bone">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-3xl text-4xl font-bold sm:text-6xl">{resultsSection.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-bone/70">{resultsSection.intro}</p>
        <div className="mt-14 space-y-8">
          {caseStudies.map((c) => (
            <article key={c.name} className="rounded-3xl bg-ink-2 p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="text-sm text-signal">{c.handle}</p>
                  <h3 className="mt-1 text-3xl font-extrabold sm:text-4xl">{c.name}</h3>
                  <p className="mt-2 font-display text-xl text-bone/90">{c.headline}</p>
                  <div className="mt-5 space-y-4 text-bone/75">{c.description.map((p) => <p key={p}>{p}</p>)}</div>
                  <ul className="mt-6 space-y-2">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden="true"><path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>{h}
                      </li>
                    ))}
                  </ul>
                  {c.role && <p className="mt-6 text-bone/75"><span className="font-semibold text-bone">My role: </span>{c.role}</p>}
                  <div className="mt-8"><ProfileLinks c={c} /></div>
                </div>
                {c.style === 'counters' ? (
                  <div className="flex flex-col justify-center gap-8">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="border-l-4 border-signal pl-6">
                        <div className="font-display text-6xl font-extrabold leading-none sm:text-7xl"><Counter value={m.value} /></div>
                        <p className="mt-2 text-bone/70">{m.label}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid content-center gap-4 sm:grid-cols-2">
                    {c.metrics.map((m, i) => (
                      <div key={m.label} className={'rounded-2xl p-6 ' + (i === 0 ? 'bg-signal text-ink sm:col-span-2' : 'bg-ink ring-1 ring-bone/15')}>
                        <div className={'font-display font-extrabold ' + (i === 0 ? 'text-6xl' : 'text-5xl text-signal')}><Counter value={m.value} /></div>
                        <p className={'mt-2 ' + (i === 0 ? 'text-ink/80' : 'text-bone/70')}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        {resultsSection.note && <p className="mt-6 text-sm text-bone/50">{resultsSection.note}</p>}
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="bg-bone pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Why work with us</h2>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w) => (
            <div key={w.title} className="border-t-2 border-ink pt-4">
              <h3 className="text-xl font-bold">{w.title}</h3>
              <p className="mt-2 text-ink/70">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="bg-ink py-24 text-bone">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">How it works</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-ink-2 p-6">
              <span className="font-display text-4xl font-extrabold text-signal">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-bone/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Simple monthly packages</h2>
      <p className="mt-4 text-lg text-ink/70">Pick the plan that fits. No contracts to decode, just clear deliverables.</p>
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {packages.map((p) => (
          <article key={p.name} className={'relative flex flex-col rounded-3xl p-8 ' + (p.highlight ? 'bg-ink text-bone ring-4 ring-signal lg:-my-4 lg:py-12' : 'bg-white ring-1 ring-ink/10')}>
            {p.badge && <span className="absolute -top-4 left-8 rounded-full bg-signal px-4 py-1.5 text-sm font-bold text-ink">{p.badge}</span>}
            <h3 className="text-2xl font-extrabold">{p.name}</h3>
            <p className={'mt-1 ' + (p.highlight ? 'text-bone/70' : 'text-ink/60')}>{p.blurb}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-6xl font-extrabold">{p.price}</span>
              <span className={p.highlight ? 'text-bone/70' : 'text-ink/60'}>{p.period}</span>
            </div>
            <ul className={'mt-8 space-y-3 border-t pt-6 ' + (p.highlight ? 'border-bone/15' : 'border-ink/10')}>
              {p.features.map((f, i) => (
                <li key={f} className={'flex gap-3 ' + (i === 0 ? 'font-semibold' : '')}>
                  <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden="true"><path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>{f}
                </li>
              ))}
            </ul>
            <a href="#contact" className={'mt-auto inline-block w-full rounded-full px-5 py-3.5 text-center font-semibold ' + (p.highlight ? 'bg-signal text-ink' : 'bg-ink text-bone')} style={{ marginTop: '2rem' }}>Get started with {p.name}</a>
          </article>
        ))}
      </div>
      <ul className="mx-auto mt-12 max-w-2xl space-y-1 text-center text-ink/70">
        {pricingNotes.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section className="bg-ink-2 py-24 text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <h2 className="text-4xl font-bold sm:text-5xl">{about.title}</h2>
        <div className="space-y-5 text-lg text-bone/80">{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [msg, setMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form))
    const err = {}
    if (!d.name.trim()) err.name = 'Please enter your name.'
    if (!d.business.trim()) err.business = 'Please enter your business name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email)) err.email = 'Enter a valid email address.'
    if (!d.service) err.service = 'Choose a service.'
    if (d.message.trim().length < 10) err.message = 'Tell us a little more (at least 10 characters).'
    setErrors(err)
    if (Object.keys(err).length) return
    if (!site.web3formsKey) { setStatus('error'); setMsg('The form is not connected yet. Add your Web3Forms key in src/config.js, or email ' + site.email + ' directly.'); return }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...d, access_key: site.web3formsKey, subject: 'New inquiry from ' + d.name + ' (' + d.business + ')', from_name: site.name }),
      })
      const json = await res.json()
      if (json.success) { setStatus('done'); form.reset() } else { setStatus('error'); setMsg(json.message || 'Something went wrong. Please try again.') }
    } catch { setStatus('error'); setMsg('Network problem. Please try again or email ' + site.email + '.') }
  }

  const field = 'mt-1 w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-base'
  const Err = ({ k }) => errors[k] ? <p className="mt-1 text-sm text-red-700" role="alert">{errors[k]}</p> : null

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">Book a free consultation</h2>
          <p className="mt-4 text-lg text-ink/70">Tell us about your business. We'll reply with next steps.</p>
          <Button {...bookingProps()} className="mt-8 !bg-ink !text-bone">{site.bookingUrl ? 'Pick a time' : 'Fill in the form'}</Button>
          <p className="mt-6 text-ink/70">{site.email}{site.phone ? ' · ' + site.phone : ''}</p>
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8">
          {/* Hidden spam trap: real people never see or fill this */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
          <div><label htmlFor="name">Full name</label><input id="name" name="name" className={field} /><Err k="name" /></div>
          <div><label htmlFor="business">Business name</label><input id="business" name="business" className={field} /><Err k="business" /></div>
          <div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" className={field} /><Err k="email" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="phone">Phone (optional)</label><input id="phone" name="phone" type="tel" className={field} /></div>
            <div><label htmlFor="social">Social account (optional)</label><input id="social" name="social" placeholder="@yourbusiness" className={field} /></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="service">Service interested in</label>
              <select id="service" name="service" defaultValue="" className={field}><option value="" disabled>Choose one</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select><Err k="service" /></div>
            <div><label htmlFor="budget">Monthly budget (estimate)</label>
              <select id="budget" name="budget" defaultValue="Not sure yet" className={field}>{budgets.map((b) => <option key={b}>{b}</option>)}</select></div>
          </div>
          <div><label htmlFor="message">Message</label><textarea id="message" name="message" rows="4" className={field} /><Err k="message" /></div>
          <button disabled={status === 'sending'} className="w-full rounded-full bg-ink px-6 py-4 font-semibold text-bone disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
          <div aria-live="polite">
            {status === 'done' && <p className="rounded-xl bg-green-100 p-4 text-green-900">Thanks! Your message was sent. We'll reply by email soon.</p>}
            {status === 'error' && <p className="rounded-xl bg-red-100 p-4 text-red-900">{msg}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-ink py-24 text-bone">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-4xl font-bold sm:text-5xl">Questions, answered</h2>
        <div className="mt-10 divide-y divide-bone/15 border-y border-bone/15">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}<ChevronDown className={'h-5 w-5 shrink-0 transition-transform ' + (open === i ? 'rotate-180' : '')} />
              </button>
              {open === i && <p className="pb-5 text-bone/75">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [doc, setDoc] = useState(null)
  const links = [['Instagram', site.socials.instagram], ['TikTok', site.socials.tiktok]].filter(([, u]) => u)
  return (
    <footer className="bg-ink-2 py-14 text-bone/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4">
        <div><Logo light /><p className="mt-3 text-sm">{site.tagline}</p></div>
        <div><h3 className="font-semibold text-bone">Explore</h3><ul className="mt-3 space-y-2 text-sm">{nav.map(([t, h]) => <li key={h}><a href={h}>{t}</a></li>)}</ul></div>
        <div><h3 className="font-semibold text-bone">Services</h3><ul className="mt-3 space-y-2 text-sm">{services.slice(0, 4).map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul></div>
        <div><h3 className="font-semibold text-bone">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm"><li><a href={'mailto:' + site.email}>{site.email}</a></li>{site.phone && <li>{site.phone}</li>}{site.location && <li>{site.location}</li>}
            {links.map(([t, u]) => <li key={t}><a href={u} target="_blank" rel="noopener noreferrer">{t}</a></li>)}</ul></div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 px-5 text-sm">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className="flex gap-5"><button onClick={() => setDoc('privacy')}>Privacy Policy</button><button onClick={() => setDoc('terms')}>Terms of Service</button></span>
      </div>
      {doc && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-5" role="dialog" aria-modal="true" onClick={() => setDoc(null)}>
          <div className="max-w-lg rounded-2xl bg-bone p-8 text-ink" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold">{doc === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h3>
            <p className="mt-4">{legal[doc]}</p>
            <button className="mt-6 rounded-full bg-ink px-5 py-2 text-bone" onClick={() => setDoc(null)}>Close</button>
          </div>
        </div>
      )}
    </footer>
  )
}

export default function App() {
  return (<><Header /><main><Hero /><Results /><Work /><Services /><Why /><Process /><Pricing /><About /><Contact /><FAQ /></main><Footer /></>)
}
