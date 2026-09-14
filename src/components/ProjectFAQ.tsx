import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

const questions = [
  {
    title: "Where should I start if I’m new to aquatic fitness?",
    answer:
      "Start with your facility type in the equipment finder. It gives you a small selection to explore. You can compare models or contact us before deciding — you don’t need a finished equipment list.",
  },
  {
    title: "What do you need to check whether a model fits my pool?",
    answer:
      "Share the pool depth, floor surface, water treatment, access to the water and intended users. Photos and an approximate number of units help us discuss the setup. Compatibility needs to be checked for the specific model and pool.",
  },
  {
    title: "Can I use the equipment in the sea?",
    answer:
      "The catalogue includes the Ibiza, a beach and sea model with large transport wheels and a sacrificial anode. Tell us about the site so we can discuss the equipment and care requirements for that setting.",
  },
  {
    title: "How do I get pricing and delivery information for my island?",
    answer:
      "Add the models you’re considering to a comparison, then choose ‘Ask about my shortlist’. Include your island and approximate quantity. We’ll use those details to discuss current pricing, availability and delivery planning.",
  },
  {
    title: "Can I ask for help without choosing a model?",
    answer:
      "Yes. Tell us what you want to offer, who will use the pool and where the project is based. We can help you narrow the range and identify the practical details to check.",
  },
];

export function ProjectFAQ() {
  return (
    <section className="pb-section pb-faq-section">
      <div className="pb-container pb-faq-grid">
        <div>
          <div className="pb-eyebrow">Before you dive in</div>
          <h2 className="pb-title pb-title-md">
            Good questions.
            <br />
            Clear next steps.
          </h2>
          <p className="pb-copy">
            A pool project has a few moving parts. Let’s make choosing the
            equipment easier.
          </p>
          <Link to="/contact" className="pb-text-link">
            Ask us a question <ArrowRight size={16} />
          </Link>
        </div>
        <div className="pb-faq-list">
          {questions.map((item) => (
            <details key={item.title}>
              <summary>
                {item.title}
                <Plus size={19} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
