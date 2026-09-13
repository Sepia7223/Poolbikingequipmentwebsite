import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";

const CONTACT_EMAIL = (import.meta as any).env?.VITE_CONTACT_EMAIL as string | undefined;

export function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (!CONTACT_EMAIL) {
      setStatus("The inquiry form is ready for preview. Add VITE_CONTACT_EMAIL to the deployment environment before launch to enable submissions.");
      return;
    }

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
          <div className="pb-eyebrow pb-eyebrow-light">Start a project</div>
          <h1 className="pb-title">Tell us what you want to build around the pool.</h1>
          <p className="pb-copy">
            Share the facility type, location and intended use. That gives us enough context to point you toward the right POOLBIKING models and prepare the next steps for a quote.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container pb-contact-grid">
          <aside className="pb-contact-card">
            <div className="pb-eyebrow pb-eyebrow-light">Poolbiking Caribbean</div>
            <h2>Commercial inquiries, without the guesswork.</h2>
            <p>
              We can help with product selection for hotels and resorts, fitness facilities, rehabilitation environments and specialist aquatic projects across the Caribbean.
            </p>

            <div className="pb-contact-list">
              <div className="pb-contact-line">
                <MapPin size={20} />
                <div><strong>Region</strong><span>Caribbean project inquiries and regional equipment planning</span></div>
              </div>
              <div className="pb-contact-line">
                <Mail size={20} />
                <div><strong>Inquiry type</strong><span>Sales, product specification, delivery planning and equipment questions</span></div>
              </div>
              <div className="pb-contact-line">
                <CheckCircle2 size={20} />
                <div><strong>Helpful information</strong><span>Facility type, pool environment, number of units and intended users</span></div>
              </div>
            </div>
          </aside>

          <div>
            <div className="pb-eyebrow">Request a quote</div>
            <h2 className="pb-title pb-title-sm">Give us the project basics.</h2>
            <p className="pb-copy" style={{ marginBottom: 34 }}>
              You do not need to know the exact model yet. Describe the project and the use case; the equipment can be narrowed from there.
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
                On the redesign preview branch, the recipient email is configured through the VITE_CONTACT_EMAIL deployment variable. No placeholder phone number, address or fake email is shown on the public page.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
