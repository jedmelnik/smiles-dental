export const site = {
  name: "Smiles Dental Care",
  shortName: "Smiles Dental Care",
  tagline: "Get a healthy, gorgeous smile",
  phone: "(650) 563-1180",
  phoneHref: "tel:+16505631180",
  address: {
    street: "100 W El Camino Real",
    suite: "Suite 63A",
    city: "Mountain View",
    state: "CA",
    zip: "94040",
    full: "100 W El Camino Real Suite 63A, Mountain View, CA 94040",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=100+W+El+Camino+Real+Suite+63A,+Mountain+View,+CA+94040",
  mapsEmbed:
    "https://www.google.com/maps?q=Smiles+Dental+Care,+100+W+El+Camino+Real+Suite+63A,+Mountain+View,+CA+94040&output=embed",
  mapsPlace:
    "https://www.google.com/maps/place/Smiles+Dental+Care/@37.3829005,-122.0769449,15z",
  serviceArea: "Mountain View, Palo Alto, and the surrounding Peninsula",
  sourceUrl: "https://smilesdental.com/",
  hours: [
    { day: "Monday", time: "8:00am - 5:00pm" },
    { day: "Tuesday", time: "8:00am - 5:00pm" },
    { day: "Wednesday", time: "8:00am - 5:00pm" },
    { day: "Thursday", time: "8:00am - 5:00pm" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Patients", href: "/patients" },
  { label: "Reviews", href: "/reviews" },
  { label: "Smile Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export type SocialNetwork =
  | "facebook"
  | "x"
  | "yelp"
  | "google";

export const socialLinks: {
  network: SocialNetwork;
  href: string;
  label: string;
}[] = [
  {
    network: "facebook",
    href: "https://www.facebook.com/smilesdentalcaremountainview/",
    label: "Facebook",
  },
  {
    network: "x",
    href: "https://twitter.com/smilesdentaldds",
    label: "X (Twitter)",
  },
  {
    network: "yelp",
    href: "https://www.yelp.com/biz/smiles-dental-care-mountain-view",
    label: "Yelp",
  },
  {
    network: "google",
    href: "https://www.google.com/maps/place/Smiles+Dental+Care/@37.3829005,-122.0769449,15z",
    label: "Google",
  },
];

export const serviceCategories = [
  {
    slug: "routine",
    title: "Routine Dental Care",
    summary:
      "Cleanings, exams, emergency care, root canals, and extractions that keep smiles healthy at every stage of life.",
    icon: "/images/icons/icon-routine-dental-care.png",
    image: "/images/preventive.jpg",
    imageAlt: "Dental hygienist tools prepared for a preventive visit",
    items: [
      "Dental cleaning and examinations",
      "Emergency dental care",
      "Root canal treatment",
      "Tooth extraction",
      "Care for dental anxiety",
    ],
  },
  {
    slug: "cosmetic",
    title: "Cosmetic Dental Services",
    summary:
      "Composite fillings, bonding, crowns, veneers, and smile makeovers that enhance brightness, shape, and confidence.",
    icon: "/images/icons/icon-cosmetic-dental-services.png",
    image: "/images/cosmetic.jpg",
    imageAlt: "Bright smile after cosmetic dental care",
    items: [
      "Composite fillings",
      "Dental bonding",
      "Dental crowns and bridges",
      "Dental veneers and laminates",
      "Smile makeover",
    ],
  },
  {
    slug: "implants",
    title: "Dental Implant Services",
    summary:
      "From candidacy consults through restoration, implants replace missing teeth with a stable, natural-feeling solution.",
    icon: "/images/icons/icon-dental-implants.png",
    image: "/images/general.jpg",
    imageAlt: "Close view of healthy teeth suitable for restorative planning",
    items: [
      "Dental implants overview",
      "Implant candidate evaluation",
      "Options for replacing missing teeth",
      "The dental implant procedure",
      "Post-op care for dental implants",
    ],
  },
  {
    slug: "dentures",
    title: "Denture Services",
    summary:
      "Full and partial dentures, implant-supported options, and practical guidance for adjusting to a new smile.",
    icon: "/images/icons/icon-dentures.png",
    image: "/images/office.jpg",
    imageAlt: "Smiles Dental Care treatment room",
    items: [
      "Dentures and partial dentures",
      "Implant-supported dentures",
      "Adjusting to new dentures",
      "Denture care",
      "What to expect when getting dentures",
    ],
  },
  {
    slug: "invisalign",
    title: "Almost Invisible Braces",
    summary:
      "Invisalign clear aligners for teens and adults - a discreet path to a straighter smile without traditional brackets.",
    icon: "/images/icons/icon-clear-braces.png",
    image: "/images/hero-mission.jpg",
    imageAlt: "Patient smiling during a dental consultation",
    items: [
      "Invisalign",
      "Invisalign for teens",
      "Clear aligner alternatives for teens",
      "Invisalign vs traditional braces",
    ],
  },
  {
    slug: "whitening",
    title: "Teeth Whitening Services",
    summary:
      "Professional whitening in the office or take-home kits that brighten your smile for photos, events, and everyday life.",
    icon: "/images/icons/icon-teeth-whitening.png",
    image: "/images/hero-reviews.jpg",
    imageAlt: "Person smiling with a bright, healthy smile",
    items: [
      "Professional teeth whitening",
      "Teeth whitening at the dentist",
      "Improve your smile for senior pictures",
    ],
  },
  {
    slug: "emergency",
    title: "Dental Emergency Help",
    summary:
      "Sudden pain, a chipped tooth, or a sports injury - call us for prompt care that protects your smile.",
    icon: "/images/icons/icon-dental-emergency.png",
    image: "/images/hero-services.jpg",
    imageAlt: "Colorful toothbrushes ready for daily oral care",
    items: [
      "Emergency dentist",
      "What to do if you chip a tooth",
      "Mouth guards for sports",
      "Emergency dentist vs. emergency room",
    ],
  },
] as const;

export const mission = {
  statement: [
    {
      title: "Happy Patient!",
      detail: "So happy they stay with us and refer others!",
    },
    {
      title: "Healthy Patient!",
      detail: "If they are not healthy, let's help them get healthy!",
    },
    {
      title: "Educated Patient!",
      detail: "Pictures, pamphlets, educational videos, and more.",
    },
  ],
  values: [
    "Take great care of the patient - WOW them!",
    "Take great care of each other!",
    "Be polite! Be respectful! Be helpful!",
    "Do quality work!",
  ],
} as const;

export const doctors = [
  {
    name: "Dr. William S. Hall",
    role: "Mountain View Dentist",
    image: "/images/doctors/dr-hall.jpg",
    imageAlt: "Portrait of Dr. William S. Hall",
    bio: [
      "Dr. Hall graduated with honors in 1983 from Loma Linda University in Southern California. He served as President for both the Dental Student Association and the University Student Counsel.",
      "Dr. Hall's focus in the practice is on restorative and cosmetic dentistry for adults using the latest technology and materials. He has studied with top dentists in the U.S. and understands the importance of keeping up with the latest techniques.",
      "Dr. Hall also believes that great customer service is the foundation of any good business. How we treat our patients is as important as what we do. Caring, respect, and understanding are always given freely.",
    ],
    memberships: [
      "American Dental Association",
      "California Dental Association",
      "Mid-Peninsula Dental Society",
    ],
  },
  {
    name: "Dr. Yasemin Erdogan",
    role: "Doctor of Dental Surgery",
    image: "/images/doctors/dr-erdogan.jpg",
    imageAlt: "Portrait of Dr. Yasemin Erdogan",
    bio: [
      "Dr. Erdogan was born and raised in the western part of Turkey. Her initial dental training was at the University of Marmara, where she received a Bachelor of Dental Surgery (B.D.S.) and graduated with honors. Afterwards, she attended a Prosthodontics Residency/PhD program at the University of Istanbul and practiced as a general dentist for two years before relocating to the United States, where she obtained a second dental degree from the University of Michigan School of Dentistry.",
      "She has been calling Mountain View her home since 2017 and enjoys common dental procedures including implants, removable dentures, and implant-supported dentures.",
      "During her free time, Dr. Erdogan plays tennis, travels, hikes, rides horses, cooks, and spends time with her family. She looks forward to caring for you and your family members.",
    ],
    memberships: [] as string[],
  },
  {
    name: "Dr. Yasmin Yasini",
    role: "Doctor of Dental Surgery",
    image: "/images/doctors/dr-yasini.png",
    imageAlt: "Portrait of Dr. Yasmin Yasini",
    bio: [
      "Dr. Yasmin Yasini has been in the dental field since 2009. She earned her Doctor of Dental Surgery from the University of the Pacific Arthur A. Dugoni School of Dentistry as well as her Bachelor of Science in Dental Hygiene.",
      "Her philosophy has always been to help patients live healthy, pain-free lives while having the most beautiful smiles possible. She was born to use her calming presence and patience to provide a better experience for those with dental anxiety, and she takes pride in a delicate approach to dentistry.",
      "She is an expert in general dentistry and loves utilizing the latest technologies and minimally invasive techniques. Outside the office, she enjoys traveling, swimming, jet skiing, and reading.",
    ],
    memberships: [] as string[],
  },
  {
    name: "Dr. Rob Van den Berg",
    role: "Orthodontist",
    image: "/images/doctors/dr-rob.jpg",
    imageAlt: "Portrait of Dr. Rob Van den Berg",
    bio: [
      "Dr. Rob Van den Berg has been an orthodontic specialist since 1996. He received his Specialty Degree in Orthodontics and Masters in Oral Biology from the University of California, San Francisco in 1996, and his dental degree from the University of Amsterdam in 1986.",
      "He joined the faculty of the UCSF Orthodontics Department from 1996 to 1999, then joined the clinical faculty of Invisalign in 1999. He has taught thousands of doctors and residents across the United States in basic and advanced Invisalign concepts, consults with Invisalign R&D, and has authored several Invisalign patents.",
      "By embracing today's advanced techniques, he aims to deliver care that is more convenient and comfortable than ever before.",
    ],
    memberships: [
      "American Dental Association",
      "California Dental Association",
      "Contra Costa Dental Society",
      "Invisalign Speakers Bureau",
      "Invisalign Elite Provider",
      "Invisalign Teen Provider",
    ],
  },
] as const;

export const insuranceProviders = [
  "Ameritas Group",
  "Cigna",
  "Delta Dental",
  "Guardian",
  "MetLife",
  "Principal",
  "United Concordia Dental",
] as const;

export const membershipPlan = {
  premium: "$399",
  value: "$624",
  headline: "No insurance, no problem",
  summary:
    "An annual in-office membership plan that gives individuals and families without dental insurance affordable access to quality care at Smiles Dental Care.",
  included: [
    "Comprehensive and six-month recall exam",
    "Annual digital x-rays (4 bitewings and 2 periapical, 1 set per year)",
    "Two preventive teeth cleanings (deep cleaning not included)",
    "Individualized patient care",
  ],
  highlights: [
    "No yearly maximums",
    "No deductibles",
    "No claim forms",
    "No pre-authorization required",
    "No waiting periods",
    "Walk-ins welcome",
  ],
  discounts: [
    { label: "Fillings and extractions", value: "15% off" },
    { label: "Periodontics and root canals", value: "15% off" },
    { label: "Crowns and veneers", value: "15% off" },
    { label: "Dental implants", value: "15% off" },
    { label: "Dentures and partials", value: "15% off" },
  ],
  note: "This program is an in-office discount plan, not a dental insurance plan. It cannot be used with another dental plan or offer, and applies only at Smiles Dental Care.",
} as const;

export const newPatientSpecial = {
  title: "New Patient Special",
  offer:
    "Complimentary Sonicare electric toothbrush or take-home whitening kit",
  finePrint:
    "Valid for patients using their dental insurance for a new patient cleaning, exam, or x-rays.",
} as const;

export const galleryPairs = [
  {
    id: "12",
    before: "/images/gallery/before-12.jpg",
    after: "/images/gallery/after-12.jpg",
    alt: "Smile transformation case 12",
  },
  {
    id: "11",
    before: "/images/gallery/before-11.jpg",
    after: "/images/gallery/after-11.jpg",
    alt: "Smile transformation case 11",
  },
  {
    id: "10",
    before: "/images/gallery/before-10.jpg",
    after: "/images/gallery/after-10.jpg",
    alt: "Smile transformation case 10",
  },
  {
    id: "9",
    before: "/images/gallery/before-9.jpg",
    after: "/images/gallery/after-9.jpg",
    alt: "Smile transformation case 9",
  },
] as const;

/** Reviews on the live site load from Google / Yelp widgets - link out rather than invent quotes. */
export const reviewDestinations = [
  {
    network: "google" as const,
    title: "Google reviews",
    href: site.mapsPlace,
    summary: "Read recent patient feedback on Google Maps.",
  },
  {
    network: "yelp" as const,
    title: "Yelp reviews",
    href: "https://www.yelp.com/biz/smiles-dental-care-mountain-view",
    summary: "See what Mountain View patients say on Yelp.",
  },
  {
    network: "facebook" as const,
    title: "Facebook",
    href: "https://www.facebook.com/smilesdentalcaremountainview/",
    summary: "Follow the practice and community updates on Facebook.",
  },
] as const;
