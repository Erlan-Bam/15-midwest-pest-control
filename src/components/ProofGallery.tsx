import { useState } from 'react';
import { ArrowLeftRight, Camera, CheckCircle2, ImagePlus } from 'lucide-react';

type Props = {
  industry: 'detailing' | 'pest' | 'cleaning';
};

const galleryCopy = {
  detailing: ['Interior reset', 'Exterior finish', 'Paint detail'],
  pest: ['Entry-point inspection', 'Treatment process', 'Team & vehicle'],
  cleaning: ['Kitchen detail', 'Bathroom refresh', 'Living-space reset'],
};

export default function ProofGallery({ industry }: Props) {
  const [active, setActive] = useState(0);
  const items = galleryCopy[industry];

  return (
    <div className="proof-gallery">
      <div className={`proof-stage proof-${industry}`}>
        <div className="proof-grid" aria-hidden="true" />
        <div className="proof-orbit orbit-one" aria-hidden="true" />
        <div className="proof-orbit orbit-two" aria-hidden="true" />
        <span className="proof-icon" aria-hidden="true">
          <Camera size={34} strokeWidth={1.6} />
        </span>
        <p className="proof-label">Owner photo placeholder {String(active + 1).padStart(2, '0')}</p>
        <h3>{items[active]}</h3>
        <span className="proof-caption">
          <ImagePlus aria-hidden="true" size={17} />
          Add an approved, rights-cleared project image
        </span>
        <div className="proof-split" aria-label="Before and after image positions">
          <span>Before</span>
          <ArrowLeftRight aria-hidden="true" size={16} />
          <span>After</span>
        </div>
      </div>

      <div className="proof-tabs" role="tablist" aria-label="Concept gallery frames">
        {items.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? 'is-active' : ''}
            onClick={() => setActive(index)}
            key={item}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item}
            {active === index && <CheckCircle2 aria-hidden="true" size={17} />}
          </button>
        ))}
      </div>
    </div>
  );
}
