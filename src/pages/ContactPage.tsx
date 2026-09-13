import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";

const CONTACT_EMAIL = ((import.meta as any).env?.VITE_CONTACT_EMAIL as string | undefined) || "info@seraphic.me";
const CONTACT_PHONE_DISPLAY = "+5999 5142050";
const CONTACT_PHONE_HREF = "tel:+59995142050";

export function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const subject = `Poolbiking Caribbean inquiry — ${form.get("interest")}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Company / facility: ${form.get("company") || "Not provided"}`,
      `Island / country: ${form.get("location") || "Not provided"}`,
      `Interest: ${form.get("interest")}`,
      "",
      `${form.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email application should open with the inquiry prepared for you.");
  };

  return (
    <>
      <section className="pb-page-hero">
        <div className="pb-container">
          <div className="pb-eyebrow pb-eyebrow-light">Contact</div>
          <h1 className="pb-title">Tell us about your pool and the equipment you need.</h1>
          <p className="pb-copy">
            Send the facility type, location, intended use and approximate number of units. We can use that information to recommend suitable POOLBIKING models and prepare a quote.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container pb-contact-grid">
          <aside className="pb-contact-card">
            <div className="pb-eyebrow pb-eyebrow-light">Poolbiking Caribbean</div>
            <h2>Sales and product questions.</h2>
            <p>
              Contact us about equipment for hotels, fitness facilities, rehabilitation programs and other aquatic projects in the Caribbean.
            </p>

            <div className="pb-contact-list">
              <div className="pb-contact-line">
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <a href={CONTACT_PHONE_HREF}><span>{CONTACT_PHONE_DISPLAY}</span></a>
                </div>
              </div>
              <div className="pb-contact-line">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}><span>{CONTACT_EMAIL}</span></a>
                </div>
              </div>
              <div className="pb-contact-line">
                <CheckCircle2 size={20} />
                <div><strong>Useful details</strong><span>Facility type, pool environment, number of units and intended users</span></div>
              </div>
            </div>
          </aside>

          <div>
            <div className="pb-eyebrow">Request a quote</div>
            <h2 className="pb-title pb-title-sm">Tell us about the project.</h2>
            <p className="pb-copy" style={{ marginBottom: 34 }}>
              You do not need to choose a model before contacting us. Describe the pool and intended use, and we can help narrow the options.
            </p>

            <form className="pb-form" onSubmit={handleSubmit}>
              <div className="pb-form-row">
                <div className="pb-field">
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="pb-field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>

              <div className="pb-form-row">
                <div className="pb-field">
                  <label htmlFor="company">Company / facility</label>
                  <input id="company" name="company" placeholder="Hotel, gym, clinic..." />
                </div>
                <div className="pb-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Phone number" />
                </div>
              </div>

              <div className="pb-form-row">
                <div className="pb-field">
                  <label htmlFor="location">Island / country</label>
                  <input id="location" name="location" placeholder="Project location" />
                </div>
                <div className="pb-field">
                  <label htmlFor="interest">Primary interest *</label>
                  <select id="interest" name="interest" required defaultValue="Hotel / resort">
                    <option>Hotel / resort</option>
                    <option>Fitness facility</option>
                    <option>Rehabilitation</option>
                    <option>Private facility</option>
                    <option>Product purchase</option>
                    <option>Other aquatic project</option>
                  </select>
                </div>
              </div>

              <div className="pb-field">
                <label htmlFor="message">Project details *</label>
                <textarea id="message" name="message" required placeholder="Tell us about the pool, the users, the equipment you are considering and roughly how many units you may need." />
              </div>

              {status && <div className="pb-status">{status}</div>}

              <button type="submit" className="pb-button pb-button-aqua pb-button-lg" style={{ justifySelf: "start" }}>
                Prepare inquiry <Send size={17} />
              </button>
              <div className="pb-form-note">
                This form prepares an email to {CONTACT_EMAIL}. You can also use the phone number or email address shown on this page.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
