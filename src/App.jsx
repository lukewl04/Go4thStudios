import { useEffect, useRef, useState } from 'react'
import './App.css'


const site = {
  name: 'Go4th Studio',
  email: 'YOUR-EMAIL@example.com',
  headlineStart: 'Be the business they ',
  headlineHighlight: 'find,',
  headlineEnd: ' trust and call.',
  intro:
    'When someone searches Google for a service you offer, your website should give them every reason to choose you. I build professional, search-friendly websites that make a strong first impression and turn more visitors into enquiries.',

  benefits: [
    {
      number: '01',
      title: 'Get found by local customers',
      text: 'Clear service pages, search-friendly content structure and the SEO essentials that help Google understand what you do and where you work.',
    },
    {
      number: '02',
      title: 'Look like the obvious choice',
      text: 'A polished, trustworthy online presence that makes your services easy to understand and helps customers feel confident getting in touch.',
    },
    {
      number: '03',
      title: 'Make every enquiry easy',
      text: 'Fast mobile pages, prominent contact details and simple calls to action that make it easy to phone, email or request a quote.',
    },
  ],

  projects: [
    {
      title: 'Smith & Sons Plumbing',
      type: 'Plumbing business · Website concept',
      url: 'https://euphonious-custard-3ebab1.netlify.app/',
      text: 'An approachable service-led website, with clear calls to action, customer review space and a straightforward contact journey.',
      tags: ['Clear service information', 'Click to call', 'Mobile-friendly'],
    },
    {
      title: 'Volt & Co Electrical',
      type: 'Electrical business · Website concept',
      url: 'https://volt-electrical.netlify.app/',
      text: 'A confident, high-contrast design that makes the business easy to recognise and encourages visitors to request a quote.',
      tags: ['Distinctive branding', 'Lead-focused layout', 'Responsive design'],
    },
  ],

  steps: [
    {
      number: '01',
      title: 'Tell me about your business',
      text: 'We discuss your services, the areas you cover and what you want your website to achieve. You get a clear, fixed quote.',
    },
    {
      number: '02',
      title: 'See your website take shape',
      text: 'I design and build the site, then send you a private preview. Two rounds of revisions are included.',
    },
    {
      number: '03',
      title: 'Launch with confidence',
      text: 'I help get your site live, set up your domain and hosting, and make sure you know how everything works.',
    },
  ],

  pricing: [
    {
      name: 'Starter',
      eyebrow: 'A strong first impression',
      price: '£300',
      note: 'one-off',
      description: 'Ideal for a small business that needs a professional presence online.',
      items: ['One-page website', 'Mobile-friendly layout', 'Contact form and click-to-call', 'Search-friendly page setup', 'Typical turnaround: around 3 days'],
    },
    {
      name: 'Business',
      eyebrow: 'Most popular',
      price: '£450',
      note: 'one-off',
      featured: true,
      description: 'More space to showcase your services and help local customers find you.',
      items: ['Up to 5 pages', 'Dedicated service information', 'Contact form and Google Maps', 'On-page SEO essentials', 'Domain and hosting setup', 'Typical turnaround: around 5 days'],
    },
    {
      name: 'Website Care',
      eyebrow: 'Optional ongoing support',
      price: '£25',
      note: 'per month',
      description: 'Keep your website looked after without having to manage it yourself.',
      items: ['Hosting management', 'Small content updates', 'Domain renewal management', 'Ongoing help when needed', 'Cancel anytime'],
    },
  ],

  faqs: [
    {
      question: 'Will my website appear first on Google?',
      answer:
        'No one can honestly guarantee the number-one spot. Every site is built with solid SEO foundations to support search visibility, but rankings also depend on competition, your Google Business Profile and ongoing local SEO work.',
    },
    {
      question: 'Do I need to provide the text and photos?',
      answer:
        'You can send over anything you already have. I can help organise your service information and suggest what content will make your website clearer and more useful to customers.',
    },
    {
      question: 'Are there any ongoing costs?',
      answer:
        'The website packages are one-off fees. Domains and any third-party services may have separate renewal costs. The optional care plan is £25 per month for ongoing website support.',
    },
    {
      question: 'How does payment work?',
      answer:
        'A 50% deposit secures the project. The remaining 50% is due when the agreed website is approved and ready to launch.',
    },
  ],
}
// ---------------------------------------------------------------

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="10.8" cy="10.8" r="6.7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4.3 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function TickIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Preview({ url, title }) {
  const frameRef = useRef(null)
  const [scale, setScale] = useState(0.35)
  const domain = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  useEffect(() => {
    const element = frameRef.current
    if (!element) return

    const update = () => setScale(element.clientWidth / 1280)
    update()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <a className="preview" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} demo website in a new tab`}>
      <div className="preview-browser" aria-hidden="true">
        <span className="browser-dots"><i /><i /><i /></span>
        <span className="browser-domain">{domain}</span>
        <span className="browser-open"><ArrowIcon diagonal /></span>
      </div>
      <div className="preview-frame" ref={frameRef} style={{ height: 790 * scale }}>
        <iframe
          src={url}
          title={`${title} website preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </a>
  )
}

function SearchJourney() {
  return (
    <div className="journey" aria-label="Illustration of how a customer finds and contacts a business">
      <div className="journey-heading">
        <span className="journey-kicker">FROM SEARCH TO ENQUIRY</span>
        <span className="journey-indicator"><span /> Customer journey</span>
      </div>
      <div className="journey-search">
        <SearchIcon />
        <span>plumber near me</span>
        <span className="journey-search-button">Search</span>
      </div>
      <div className="journey-connector"><span /></div>
      <div className="journey-result">
        <div className="journey-result-icon">4</div>
        <div className="journey-result-copy">
          <span className="journey-result-label">YOUR BUSINESS WEBSITE</span>
          <strong>Professional. Local. Easy to contact.</strong>
          <p>Helpful service pages, a great mobile experience and clear next steps.</p>
          <div className="journey-result-chips"><span>Services</span><span>Areas covered</span><span>Contact</span></div>
        </div>
      </div>
      <div className="journey-connector"><span /></div>
      <div className="journey-outcome">
        <span className="journey-outcome-icon"><TickIcon /></span>
        <div>
          <strong>A simpler path to an enquiry</strong>
          <span>From first impression to phone call</span>
        </div>
        <ArrowIcon diagonal />
      </div>
      <p className="journey-disclaimer">Illustrative customer journey, not a Google ranking claim.</p>
    </div>
  )
}

function ContactForm({ selectedPlan, onPlanChange }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    setStatus('sending')
    setError('')

    // Vite's local preview doesn't process Netlify Forms submissions.
    if (import.meta.env.DEV) {
      setStatus('error')
      setError('This form can receive enquiries once the website is deployed to Netlify. Local preview does not deliver messages.')
      return
    }

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })

      if (!response.ok) throw new Error('Your message could not be sent.')

      form.reset()
      onPlanChange('Not sure yet')
      setStatus('success')
    } catch (submissionError) {
      setStatus('error')
      setError('Something went wrong sending your enquiry. Please try again or contact me by email.')
    }
  }

  return (
    <form
      name="go4th-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="go4th-contact" />
      <p className="contact-trap" aria-hidden="true">
        <label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="form-heading">
        <span className="form-eyebrow">FREE, NO-OBLIGATION QUOTE</span>
        <h3>Tell me about your project.</h3>
        <p>Just a few details to get started. I'll get back to you with the next steps.</p>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Your name <span>*</span></label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="John Smith" required maxLength={100} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email address <span>*</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="john@example.com" required maxLength={254} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-business">Business name</label>
          <input id="contact-business" name="business" type="text" autoComplete="organization" placeholder="Your business name" maxLength={120} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-phone">Phone number <small>(optional)</small></label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="07..." maxLength={35} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-service">What do you need? <span>*</span></label>
          <select id="contact-service" name="service" defaultValue="" required>
            <option value="" disabled>Choose a service</option>
            <option>New website</option>
            <option>Website redesign</option>
            <option>Website maintenance</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="contact-plan">Interested in a package?</label>
          <select id="contact-plan" name="plan" value={selectedPlan} onChange={(event) => onPlanChange(event.target.value)}>
            <option>Not sure yet</option>
            <option>Starter</option>
            <option>Business</option>
            <option>Website Care</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Tell me about your project <span>*</span></label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What does your business do, and what would you like your website to achieve?"
          required
          minLength={10}
          maxLength={4000}
        />
      </div>

      <button className="btn btn-dark form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending your enquiry...' : 'Request my free quote'}
        {status !== 'sending' && <ArrowIcon diagonal />}
      </button>
      <p className="form-privacy">Your details will only be used to respond to your enquiry.</p>

      <div className="form-feedback" role="status" aria-live="polite">
        {status === 'success' && (
          <p className="form-success">Thanks for getting in touch. Your enquiry has been sent successfully.</p>
        )}
        {status === 'error' && <p className="form-error">{error}</p>}
      </div>
    </form>
  )
}

function App() {
  const [selectedPlan, setSelectedPlan] = useState('Not sure yet')
  const subject = encodeURIComponent('Website enquiry — Go4th Studio')
  const mail = `mailto:${site.email}?subject=${subject}`

  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo" aria-label="Go4th Studio, back to top">
            <span className="logo-mark">4<span>↗</span></span>
            <span className="logo-wordmark">Go4th<span>Studio</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#why">Why Go4th</a>
            <a href="#work">Our work</a>
            <a href="#process">The process</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-dark btn-nav" href="#contact">Let's talk <ArrowIcon diagonal /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> WEBSITES FOR LOCAL BUSINESSES</span>
              <h1 id="hero-heading">{site.headlineStart}<span className="hero-accent">{site.headlineHighlight}</span>{site.headlineEnd}</h1>
              <p className="hero-sub">{site.intro}</p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-accent">Get a free quote <ArrowIcon diagonal /></a>
                <a href="#work" className="btn btn-outline-light">See example websites <ArrowIcon /></a>
              </div>
              <p className="hero-footnote">Straightforward pricing <span /> Designed for mobile <span /> Built for local search</p>
            </div>
            <SearchJourney />
          </div>
        </section>

        <div className="value-strip" aria-label="Key benefits">
          <div className="container value-strip-inner">
            <span><TickIcon /> Get found</span>
            <span><TickIcon /> Build trust</span>
            <span><TickIcon /> Win more enquiries</span>
            <span><TickIcon /> No unnecessary complexity</span>
          </div>
        </div>

        <section className="section why-section" id="why">
          <div className="container">
            <div className="section-header two-col-heading">
              <div>
                <span className="section-label">THE DIFFERENCE</span>
                <h2>Your website should do more than <em>look good.</em></h2>
              </div>
              <p>Potential customers are comparing businesses in seconds. Give them a reason to find yours, trust what they see and take the next step.</p>
            </div>
            <div className="benefit-grid">
              {site.benefits.map((benefit) => (
                <article className="benefit-card" key={benefit.number}>
                  <span className="benefit-number">{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                  <span className="benefit-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-header">
              <span className="section-label">SELECTED CONCEPTS</span>
              <h2>See what your business could look like.</h2>
              <p>Different businesses. Different styles. The same focus on clarity, credibility and making it easy to get in touch.</p>
            </div>
            <div className="projects">
              {site.projects.map((project) => (
                <article className="project" key={project.title}>
                  <Preview url={project.url} title={project.title} />
                  <div className="project-details">
                    <div className="project-meta">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link">
                      Explore the demo <ArrowIcon diagonal />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">These are demonstration websites created to show design capabilities, not commissioned client projects.</p>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-header section-header-centered">
              <span className="section-label">SIMPLE FROM START TO FINISH</span>
              <h2>Getting online shouldn't be complicated.</h2>
              <p>A clear process, direct communication and no confusing technical talk.</p>
            </div>
            <div className="steps-grid">
              {site.steps.map((step) => (
                <article className="step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-header section-header-centered">
              <span className="section-label">CLEAR, UPFRONT PRICING</span>
              <h2>Professional websites. No surprise fees.</h2>
              <p>Choose what fits your business today. Every project starts with a clear scope and a fixed quote.</p>
            </div>
            <div className="pricing-grid">
              {site.pricing.map((plan) => (
                <article key={plan.name} className={`price-card ${plan.featured ? 'price-card-featured' : ''}`}>
                  <div className="price-card-top">
                    <span className="plan-eyebrow">{plan.eyebrow}</span>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                    <div className="price-amount"><strong>{plan.price}</strong><span>{plan.note}</span></div>
                  </div>
                  <ul>
                    {plan.items.map((item) => <li key={item}><TickIcon /> <span>{item}</span></li>)}
                  </ul>
                  <a className={`btn ${plan.featured ? 'btn-accent' : 'btn-outline-dark'}`} href="#contact" onClick={() => setSelectedPlan(plan.name)}>
                    Enquire about {plan.name.toLowerCase()} <ArrowIcon diagonal />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">Website projects: 50% upfront and 50% on approval. Domain and third-party renewal fees may be separate. Timelines are estimates and depend on content and feedback.</p>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="section-label">GOOD TO KNOW</span>
              <h2>A few things you might be wondering.</h2>
              <p>No jargon or unrealistic promises. Just clear answers before you commit.</p>
            </div>
            <div className="faqs">
              {site.faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div className="contact-intro">
              <span className="section-label">LET'S WORK TOGETHER</span>
              <h2 id="contact-heading">Your next customer could be one search away.</h2>
              <p>Whether you need your first website or a better one, tell me about your business and what you're looking to achieve.</p>
              <div className="contact-reasons">
                <div><TickIcon /><span>Free, no-obligation quote</span></div>
                <div><TickIcon /><span>Clear, upfront pricing</span></div>
                <div><TickIcon /><span>Direct contact from start to finish</span></div>
              </div>
              <div className="contact-email-block">
                <span>Prefer email?</span>
                <a href={mail}>{site.email} <ArrowIcon diagonal /></a>
              </div>
            </div>
            <ContactForm selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="Go4th Studio, back to top">
              <span className="logo-mark">4<span>↗</span></span>
              <span className="logo-wordmark">Go4th<span>Studio</span></span>
            </a>
            <p>Websites built to help local businesses get noticed and get enquiries.</p>
          </div>
          <div className="footer-links">
            <a href="#why">Why Go4th</a>
            <a href="#work">Our work</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <span>Independent web design studio</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
