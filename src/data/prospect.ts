export type Industry = 'detailing' | 'pest' | 'cleaning';

export type Service = {
  title: string;
  description: string;
  confirmationRequired?: boolean;
};

export type Source = {
  label: string;
  url: string;
  supports: string;
};

export type Prospect = {
  slug: string;
  businessName: string;
  shortName: string;
  monogram: string;
  industry: Industry;
  city: string;
  state: string;
  phone: string;
  phoneHref: string;
  email?: string;
  address?: string;
  accent: string;
  accentSoft: string;
  ink: string;
  surface: string;
  visualVariant: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  review: {
    rating: number;
    count: number;
    status: 'verified-directory' | 'research-snapshot';
    sourceLabel: string;
  };
  services: Service[];
  process: Array<{ title: string; description: string }>;
  highlights: Array<{ label: string; value: string }>;
  serviceAreas: string[];
  faq: Array<{ question: string; answer: string; confirmationRequired?: boolean }>;
  websiteSituation: string;
  sources: Source[];
  ownerConfirmations: string[];
};

export const prospect: Prospect = {
  "slug": "midwest-pest-control",
  "businessName": "Midwest Pest Control",
  "shortName": "Midwest",
  "monogram": "MP",
  "industry": "pest",
  "city": "Tulsa",
  "state": "OK",
  "phone": "(918) 417-1137",
  "phoneHref": "+19184171137",
  "accent": "#d59a4a",
  "accentSoft": "#f3e8d3",
  "ink": "#17332a",
  "surface": "#f7f2e9",
  "visualVariant": "midwest",
  "heroKicker": "Pest-control concept · Tulsa",
  "heroTitle": "A calmer first step when something feels out of place.",
  "heroDescription": "A trust-led inspection request that collects the property, issue, and ZIP code before the business recommends next steps.",
  "primaryCta": "Request an inspection",
  "review": {
    "rating": 4.5,
    "count": 396,
    "status": "research-snapshot",
    "sourceLabel": "Google profile snapshot supplied for this concept"
  },
  "services": [
    {
      "title": "General pest-control enquiry",
      "description": "A verified business category with issue details collected before treatment claims are made."
    },
    {
      "title": "Property inspection request",
      "description": "A calm assessment-first path for homes or businesses.",
      "confirmationRequired": true
    },
    {
      "title": "Ongoing service enquiry",
      "description": "A place to ask about recurring plans without publishing an unverified schedule.",
      "confirmationRequired": true
    }
  ],
  "process": [
    {
      "title": "Describe the concern",
      "description": "Share the pest signs, property type, and ZIP code."
    },
    {
      "title": "Arrange an assessment",
      "description": "The business confirms availability and the right inspection path."
    },
    {
      "title": "Review the plan",
      "description": "Treatment scope, products, timing, and price are confirmed directly."
    }
  ],
  "highlights": [
    {
      "label": "Public location",
      "value": "Tulsa, OK"
    },
    {
      "label": "Verified contact",
      "value": "Phone"
    },
    {
      "label": "Concept focus",
      "value": "Assessment first"
    }
  ],
  "serviceAreas": [
    "Tulsa",
    "Nearby ZIP codes — confirm"
  ],
  "faq": [
    {
      "question": "Which pests are treated?",
      "answer": "The exact residential, commercial, termite, rodent, or wildlife service list requires owner confirmation.",
      "confirmationRequired": true
    },
    {
      "question": "How quickly can an inspection happen?",
      "answer": "No response-time promise was verified. The approved site should display only the business’s actual scheduling policy.",
      "confirmationRequired": true
    },
    {
      "question": "Are recurring plans available?",
      "answer": "A public review source refers to quarterly service, but current plan terms should be confirmed directly.",
      "confirmationRequired": true
    }
  ],
  "websiteSituation": "The listing had no current website in the supplied research; an older domain was reported as parked.",
  "sources": [
    {
      "label": "Google Maps listing search",
      "url": "https://www.google.com/maps/search/?api=1&query=Midwest%20Pest%20Control%20Tulsa%20OK%20918%20417%201137",
      "supports": "Business identity, location, public phone, and rating snapshot to recheck."
    },
    {
      "label": "MerchantCircle listing",
      "url": "https://www.merchantcircle.com/midewest-pest-control-tulsa-ok",
      "supports": "Tulsa identity and public phone."
    }
  ],
  "ownerConfirmations": [
    "Exact pest/service categories",
    "Residential/commercial availability",
    "Inspection and response timing",
    "Service radius",
    "Current rating and review count",
    "Recurring plan terms",
    "Permission to use team photos"
  ]
};
