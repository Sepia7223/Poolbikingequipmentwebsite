import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Copy, Mail, Phone, X } from "lucide-react";
import { equipmentData } from "../data/equipment";
import { buildInquiryBody, sanitizeProductIds } from "../data/discovery";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "../data/contact";

const interests = [
  "Hotel / resort",
  "Senior living / care residence",
  "Fitness facility",
  "Rehabilitation",
  "Private facility",
  "Product purchase",
  "Other aquatic project",
];
const validIds = equipmentData.map((item) => item.id);

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const requestedProducts = searchParams.get("products") || "";
  const requestedInterest = searchParams.get("interest") || "";
  const [selectedIds, setSelectedIds] = useState(() =>
    sanitizeProductIds(requestedProducts.split(","), validIds),
  );
  const [interest, setInterest] = useState(
    interests.includes(requestedInterest)
      ? requestedInterest
      : "Hotel / resort",
  );
  const [prepared, setPrepared] = useState<{
    subject: string;
    body: string;
  } | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const review = useRef<HTMLDivElement>(null);
  const messagePreview = useRef<HTMLTextAreaElement>(null);
  const selectedProducts = selectedIds.map(
    (id) => equipmentData.find((item) => item.id === id)!,
  );

  useEffect(() => {
    setSelectedIds(sanitizeProductIds(requestedProducts.split(","), validIds));
    setPrepared(null);
  }, [requestedProducts]);
  useEffect(() => {
    setInterest(
      interests.includes(requestedInterest)
        ? requestedInterest
        : "Hotel / resort",
    );
    setPrepared(null);
  }, [requestedInterest]);
  useEffect(() => {
    if (prepared) review.current?.focus();
  }, [prepared]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as Record<string, string>;
    setPrepared({
      subject: `Poolbiking Caribbean inquiry — ${fields.interest}`,
      body: buildInquiryBody(
        fields,
        selectedProducts.map((item) => item.name),
      ),
    });
    setCopyStatus("");
  };
  const copyInquiry = async () => {
    if (!prepared) return;
    try {
      await navigator.clipboard.writeText(
        `${prepared.subject}\n\n${prepared.body}`,
      );
      setCopyStatus(
        "Inquiry copied. Paste it into an email and send it when you’re ready.",
      );
    } catch {
      messagePreview.current?.focus();
      messagePreview.current?.select();
      setCopyStatus(
        "Copy isn’t available here. The message is selected so you can copy it manually.",
      );
    }
  };

  return (
    <>
      <section className="pb-page-hero">
        <div className="pb-container">
          <div className="pb-eyebrow pb-eyebrow-light">
            Let’s talk about your pool
          </div>
          <h1 className="pb-title">
            An idea is all
            <br />
            you need to start.
          </h1>
          <p className="pb-copy">
            Tell us what you have in mind. We’ll help you explore the equipment
            and the next steps for your Caribbean pool project.
          </p>
        </div>
      </section>
      <section className="pb-section">
        <div className="pb-container pb-contact-grid">
          <aside className="pb-contact-card">
            <div className="pb-eyebrow pb-eyebrow-light">
              A conversation, not a commitment
            </div>
            <h2>Let’s find your starting point.</h2>
            <p>
              Whether you have a shortlist or a first idea, we can talk through
              the equipment, your facility and delivery planning.
            </p>
            <div className="pb-contact-list">
              <div className="pb-contact-line">
                <Phone size={20} />
                <div>
                  <strong>Give us a call</strong>
                  <a href={CONTACT_PHONE_HREF}>
                    <span>{CONTACT_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
              <div className="pb-contact-line">
                <Mail size={20} />
                <div>
                  <strong>Email us directly</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                </div>
              </div>
              <div className="pb-contact-line">
                <CheckCircle2 size={20} />
                <div>
                  <strong>A useful first conversation</strong>
                  <span>
                    Your pool, intended users, equipment options and project
                    location.
                  </span>
                </div>
              </div>
            </div>
          </aside>
          <div>
            <div className="pb-eyebrow">Your project</div>
            <h2 className="pb-title pb-title-sm">Make it your own.</h2>
            <p className="pb-copy pb-contact-intro">
              Just the essentials to get started. Fields marked * are required.
            </p>
            {selectedProducts.length > 0 && (
              <div className="pb-inquiry-shortlist">
                <h3>Equipment you’re interested in</h3>
                {selectedProducts.map((item) => (
                  <div key={item.id}>
                    <img src={item.image} alt="" />
                    <Link to={`/equipment/${item.id}`}>{item.name}</Link>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedIds((ids) =>
                          ids.filter((id) => id !== item.id),
                        );
                        setPrepared(null);
                      }}
                      aria-label={`Remove ${item.name} from inquiry`}
                    >
                      <X size={17} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <form
              className="pb-form"
              onSubmit={handleSubmit}
              onChange={() => {
                setPrepared(null);
                setCopyStatus("");
              }}
            >
              <div className="pb-form-row">
                <div className="pb-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={120}
                    placeholder="Your name"
                  />
                </div>
                <div className="pb-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={200}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="pb-form-row">
                <div className="pb-field">
                  <label htmlFor="company">Company / facility</label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Hotel, gym, clinic…"
                  />
                </div>
                <div className="pb-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="Include your country code"
                  />
                </div>
              </div>
              <div className="pb-form-row">
                <div className="pb-field">
                  <label htmlFor="location">Island / country</label>
                  <input
                    id="location"
                    name="location"
                    autoComplete="country-name"
                    maxLength={120}
                    placeholder="Where is your project?"
                  />
                </div>
                <div className="pb-field">
                  <label htmlFor="interest">Primary interest *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                    required
                  >
                    {interests.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="pb-field">
                <label htmlFor="quantity">Approximate number of units</label>
                <select id="quantity" name="quantity" defaultValue="">
                  <option value="">Not sure yet — help me plan</option>
                  <option>1–2</option>
                  <option>3–5</option>
                  <option>6–10</option>
                  <option>11–20</option>
                  <option>More than 20</option>
                </select>
              </div>
              <div className="pb-field">
                <label htmlFor="message">
                  What would you like to explore? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2500}
                  placeholder="Tell us about your pool, who will use it and what you’d like to offer."
                />
              </div>
              <p className="pb-form-note" id="email-explanation">
                This form prepares an email for you to review and send. Your
                inquiry is only sent when you send it from your email app.
              </p>
              <button
                type="submit"
                className="pb-button pb-button-aqua pb-button-lg"
                aria-describedby="email-explanation"
              >
                Prepare email inquiry <ArrowRight size={17} />
              </button>
            </form>
            {prepared && (
              <div
                ref={review}
                tabIndex={-1}
                className="pb-inquiry-review"
                aria-labelledby="inquiry-ready"
              >
                <h3 id="inquiry-ready">Your inquiry is ready to review.</h3>
                <p>
                  It hasn’t been sent yet. Open your email app or copy the
                  message and email it to{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <label htmlFor="inquiry-preview">Prepared message</label>
                <textarea
                  ref={messagePreview}
                  id="inquiry-preview"
                  readOnly
                  value={prepared.body}
                  rows={9}
                />
                <div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(prepared.subject)}&body=${encodeURIComponent(prepared.body)}`}
                    className="pb-button pb-button-aqua"
                  >
                    <Mail size={17} /> Open email app
                  </a>
                  <button
                    type="button"
                    className="pb-button pb-button-outline"
                    onClick={copyInquiry}
                  >
                    <Copy size={17} /> Copy inquiry
                  </button>
                </div>
                <p role="status">{copyStatus}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
