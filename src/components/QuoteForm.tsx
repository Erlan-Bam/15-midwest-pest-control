import { useEffect, useId, useRef, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Home,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from 'lucide-react';

type Industry = 'detailing' | 'pest' | 'cleaning';

type Props = {
  businessName: string;
  industry: Industry;
  services: string[];
};

const propertyLabels: Record<Industry, { label: string; options: string[] }> = {
  detailing: {
    label: 'Vehicle type',
    options: ['Car / sedan', 'SUV / crossover', 'Truck', 'Van', 'Other vehicle'],
  },
  pest: {
    label: 'Property type',
    options: ['House', 'Apartment / unit', 'Commercial property', 'Other property'],
  },
  cleaning: {
    label: 'Property type',
    options: ['House', 'Apartment / condo', 'Office / commercial', 'Specialty space'],
  },
};

export default function QuoteForm({ businessName, industry, services }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const property = propertyLabels[industry];

  useEffect(() => {
    if (submitted) {
      successRef.current?.scrollIntoView({ block: 'center' });
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div ref={successRef} className="form-success" role="status" aria-live="polite">
        <span className="success-icon" aria-hidden="true">
          <Check size={28} strokeWidth={2.4} />
        </span>
        <p className="success-eyebrow">Preview interaction complete</p>
        <h3>This request was not sent.</h3>
        <p>Preview form — connect to email or CRM after owner approval.</p>
        <button type="button" onClick={() => setSubmitted(false)}>
          Reset preview form
        </button>
      </div>
    );
  }

  return (
    <form
      className="quote-form"
      aria-label={`Preview quote form for ${businessName}`}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="preview-form-note">
        <Check aria-hidden="true" size={17} />
        Preview form — connect to email or CRM after owner approval.
      </div>

      <div className="form-grid two-col">
        <label>
          <span><UserRound aria-hidden="true" size={16} /> Name</span>
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span><Phone aria-hidden="true" size={16} /> Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required placeholder="(555) 555-0123" />
        </label>
      </div>

      <label>
        <span><Mail aria-hidden="true" size={16} /> Email</span>
        <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
      </label>

      <fieldset>
        <legend>What can the team help with?</legend>
        <div className="service-options">
          {services.map((service, index) => (
            <label className="service-option" key={service}>
              <input
                type="radio"
                name="service"
                value={service}
                defaultChecked={index === 0}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid two-col">
        <label>
          <span><Home aria-hidden="true" size={16} /> {property.label}</span>
          <select name="property" defaultValue="" required>
            <option value="" disabled>Select one</option>
            {property.options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span><MapPin aria-hidden="true" size={16} /> ZIP code</span>
          <input name="zip" inputMode="numeric" autoComplete="postal-code" required placeholder="ZIP code" />
        </label>
      </div>

      <label>
        <span><CalendarDays aria-hidden="true" size={16} /> Preferred date</span>
        <input name="date" type="date" min="2026-01-01" />
      </label>

      <label>
        <span>Details</span>
        <textarea
          name="notes"
          rows={4}
          placeholder={
            industry === 'detailing'
              ? 'Vehicle condition, location, and the result you want…'
              : industry === 'pest'
                ? 'What have you noticed, and where?'
                : 'Rooms, size, priorities, and anything the team should know…'
          }
        />
      </label>

      <button className="submit-button" type="submit" aria-describedby={`${formId}-helper`}>
        Preview request
        <ArrowRight aria-hidden="true" size={19} />
      </button>
      <p id={`${formId}-helper`} className="form-helper">
        Demo only. No information leaves this browser.
      </p>
    </form>
  );
}
