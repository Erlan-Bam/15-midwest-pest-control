import { useId, useState } from 'react';
import { ChevronDown, CircleHelp, ClipboardCheck } from 'lucide-react';

type Faq = {
  question: string;
  answer: string;
  confirmationRequired?: boolean;
};

type Props = {
  items: Faq[];
};

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const groupId = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${groupId}-panel-${index}`;
        const buttonId = `${groupId}-button-${index}`;

        return (
          <article className={`faq-item ${open ? 'is-open' : ''}`} key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-controls={panelId}
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="faq-question">
                  <CircleHelp aria-hidden="true" size={20} strokeWidth={1.9} />
                  {item.question}
                </span>
                <ChevronDown className="faq-chevron" aria-hidden="true" size={21} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-panel"
              hidden={!open}
            >
              <p>{item.answer}</p>
              {item.confirmationRequired && (
                <span className="confirm-pill">
                  <ClipboardCheck aria-hidden="true" size={15} />
                  Owner confirmation needed
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
