// ============================================================================
// PRODUCT CATALOG — Ganesh Enterprises
// ----------------------------------------------------------------------------
// ✏️  EDIT THIS FILE to refine descriptions, features and applications.
//     No technical specifications, standards or dimensions are invented here —
//     specification fields intentionally render as "available on request".
// ============================================================================

export interface Product {
  slug: string;
  name: string;
  /** Short card description. */
  short: string;
  /** Page description. */
  description: string;
  image: string;
  imageAlt: string;
  /** Accent dot color for UI chips. */
  accent: string;
  features: string[];
  applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "ppr-pipes",
    name: "PPR Pipes",
    short:
      "Polypropylene random copolymer pipes for hot and cold water plumbing systems, with matching fittings.",
    description:
      "PPR (Polypropylene Random Copolymer) pipes are widely used in modern plumbing systems for hot and cold water distribution. Supplied along with a matching range of PPR fittings for complete pipeline installations.",
    image: "/images/product-ppr.jpg",
    imageAlt: "Green PPR pipes with matching PPR pipe fittings arranged on a light grey studio background",
    accent: "#1F9D55",
    features: [
      "Suitable for hot and cold water plumbing lines",
      "Heat-fusion jointing for leak-proof connections",
      "Rigid, lightweight and easy to install",
      "Available with a matching range of PPR fittings",
      "Specifications available on request",
    ],
    applications: [
      "Residential hot and cold water lines",
      "Apartment and commercial building plumbing",
      "Hospital, hotel and institutional plumbing",
      "Industrial water distribution lines",
    ],
  },
  {
    slug: "hdpe-pipes",
    name: "HDPE Pipes",
    short:
      "High-density polyethylene pipes for water supply, irrigation and underground distribution networks.",
    description:
      "HDPE (High-Density Polyethylene) pipes are flexible, tough and commonly used for water supply, irrigation and underground distribution lines. Offered in straight lengths and coils as per requirement.",
    image: "/images/hdpe-pipes-63mm.jpeg",
    imageAlt: "Black HDPE pipe coils and straight HDPE pipe sections on a light grey studio background",
    accent: "#0A1E36",
    features: [
      "Flexible and tough for underground laying",
      "Suitable for water supply and irrigation lines",
      "Available in coils and straight lengths",
      "Jointing options as per project requirement",
      "Specifications available on request",
    ],
    applications: [
      "Municipal and rural water supply schemes",
      "Agricultural irrigation systems",
      "Underground cable ducting",
      "Industrial effluent and transfer lines",
    ],
  },
  {
    slug: "mdpe-pipes",
    name: "MDPE Pipes",
    short:
      "Medium-density polyethylene pipes for gas distribution and water supply networks.",
    description:
      "MDPE (Medium-Density Polyethylene) pipes offer a balance of strength and flexibility, commonly used for gas distribution and water supply networks. Available with compatible MDPE fittings.",
    image: "/images/product-mdpe.jpg",
    imageAlt: "Blue MDPE polyethylene pipe coils and straight pipe sections on a light grey studio background",
    accent: "#1D6FD1",
    features: [
      "Balanced strength and flexibility",
      "Commonly used for gas and water distribution",
      "Available with compatible MDPE fittings",
      "Supplied in coils and straight lengths",
      "Specifications available on request",
    ],
    applications: [
      "Piped gas distribution networks",
      "Water supply distribution lines",
      "Utility and infrastructure projects",
      "Service connections and metering lines",
    ],
  },
  {
    slug: "gi-pipes",
    name: "GI Pipes",
    short:
      "Galvanized iron steel pipes with zinc coating for plumbing, structural and general purpose lines.",
    description:
      "GI (Galvanized Iron) pipes are steel pipes with a protective zinc coating, traditionally used in plumbing, water lines and general purpose applications. Supplied with a range of GI fittings and accessories.",
    image: "/images/product-gi.jpg",
    imageAlt: "Galvanized iron GI steel pipes with threaded ends stacked neatly on a light grey studio background",
    accent: "#8FA0B3",
    features: [
      "Zinc-coated steel for corrosion resistance",
      "Rigid lines for plumbing and water supply",
      "Threaded ends for standard GI fittings",
      "Wide range of GI fittings and accessories",
      "Specifications available on request",
    ],
    applications: [
      "Building plumbing and water lines",
      "Fire-fighting and riser pipelines",
      "Structural and scaffolding applications",
      "General purpose industrial lines",
    ],
  },

    {
    slug: "supreme-cpvc-pipes",
    name: "Supreme CPVC Pipes & Fittings",
    short:
      "Supreme CPVC pipes and fittings for reliable hot and cold water plumbing systems.",
    description:
      "Supreme CPVC pipes and fittings are suitable for hot and cold water plumbing systems, providing a complete range of pipes and fittings for residential, commercial and general plumbing applications.",
    image: "/images/supreme-cpvc-main.jpeg",
    imageAlt: "Supreme CPVC pipes and fittings",
    accent: "#1F9D55",
    features: [
      "Suitable for hot and cold water plumbing lines",
      "Wide range of compatible CPVC fittings",
      "Suitable for residential and commercial plumbing",
      "Lightweight and easy to install",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Hot and cold water supply lines",
      "Apartment and commercial building plumbing",
      "General plumbing installations",
    ],
  },

    {
    slug: "puc-products",
    name: "PUC Products",
    short:
      "PUC pipes and fittings for drainage and general plumbing applications.",
    description:
      "PUC pipes and fittings suitable for drainage, plumbing and general pipeline applications, available in different sizes and configurations.",
    image: "/images/puc-pipes.jpeg",
    imageAlt: "PUC pipes",
    accent: "#1F9D55",
    features: [
      "Suitable for drainage applications",
      "Available in different sizes",
      "Range of compatible fittings",
      "Suitable for general plumbing requirements",
      "Specifications available on request",
    ],
    applications: [
      "Drainage systems",
      "Plumbing installations",
      "Wastewater pipelines",
      "General pipeline applications",
    ],
  },

    {
    slug: "pipes",
    name: "Pipes",
    short:
      "Pipes for underground drainage, water supply and column pipe applications.",
    description:
      "A range of pipes suitable for underground drainage, water supply and column pipe applications for residential, commercial and general pipeline requirements.",
    image: "/images/pipes-main.jpeg",
    imageAlt: "Pipes",
    accent: "#1F9D55",
    features: [
      "Suitable for underground drainage applications",
      "Suitable for water supply requirements",
      "Column pipe options available",
      "Available in different sizes",
      "Specifications available on request",
    ],
    applications: [
      "Underground drainage",
      "Water supply systems",
      "Borewell and column pipe applications",
      "General pipeline installations",
    ],
  },

  {
    slug: "di",
    name: "DI",
    short:
      "DI valves for water supply and pipeline control applications.",
    description:
      "DI valves suitable for water supply, pipeline control and general infrastructure requirements.",
    image: "/images/80mm-di-sluice-valve.jpeg",
    imageAlt: "80mm DI Sluice Valve",
    accent: "#1F9D55",
    features: [
      "Available in different sizes",
      "Suitable for water supply applications",
      "Suitable for pipeline control",
      "Suitable for infrastructure requirements",
      "Specifications available on request",
    ],
    applications: [
      "Water supply pipelines",
      "Pipeline control systems",
      "Infrastructure projects",
      "General pipeline applications",
    ],
  },

  {
    slug: "electrofusion-welding-machine",
    name: "Electrofusion Welding Machine",
    short:
      "Automatic electrofusion welding machine for HDPE and compatible pipe jointing applications.",
    description:
      "Electrofusion welding machine suitable for controlled and reliable pipe jointing applications, with automatic and manual operating modes.",
    image: "/images/electrofusion-machine-automatic-200-ee.jpeg",
    imageAlt: "Electrofusion Welding Machine Automatic 200 EE",
    accent: "#1F9D55",
    features: [
      "Welding range: 20–200mm",
      "Automatic operation with barcode support",
      "Manual data entry available",
      "Input cable: 3.5 metres",
      "Output cable: 3.5 metres",
      "Joint data memory: 2,000 welds",
    ],
    applications: [
      "HDPE pipe jointing",
      "Electrofusion pipe connections",
      "Pipeline installation work",
      "Water supply pipeline applications",
    ],
  },

  {
    slug: "20mm-ppr-prince-heating-machine",
    name: "20mm PPR Prince Heating Machine",
    short:
      "PPR heating machine for socket-fusion jointing of PPR pipes and fittings.",
    description:
      "20mm PPR Prince heating machine designed for heat-fusion jointing of PPR pipes and fittings. The heating process softens the pipe and fitting surfaces so they can be joined to form a strong, sealed connection.",
    image: "/images/20mm-ppr-prince-heating-machine.jpeg",
    imageAlt: "20mm PPR Prince Heating Machine",
    accent: "#1F9D55",
    features: [
      "Suitable for PPR pipe and fitting jointing",
      "Socket-fusion heating method",
      "Thermostat-controlled heating",
      "Designed for 20mm PPR applications",
      "Suitable for plumbing installation work",
      "Compact and practical heating equipment",
    ],
    applications: [
      "20mm PPR pipe jointing",
      "PPR plumbing installations",
      "Hot and cold water plumbing",
      "Residential plumbing work",
      "Commercial plumbing installations",
      "PPR pipe and fitting repair work",
    ],
  },

];

export const getProductBySlug = (slug: string | undefined): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
