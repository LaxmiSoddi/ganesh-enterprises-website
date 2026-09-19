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
    slug: "pipe-fittings",
    name: "Pipe Fittings",
    short:
      "Complete range of fittings — elbows, tees, couplers, unions, reducers and more for every pipeline.",
    description:
      "A complete range of pipe fittings to complete every pipeline — elbows, tees, couplers, unions, reducers, nipples, adaptors and more across PPR, HDPE, MDPE and GI product lines.",
    image: "/images/product-fittings.jpg",
    imageAlt: "Assorted plumbing pipe fittings including elbows, tees, couplers and reducers arranged on a light grey background",
    accent: "#1A4F8A",
    features: [
      "Elbows, tees, couplers, unions and reducers",
      "Compatible with PPR, HDPE, MDPE and GI lines",
      "Brass, PVC, PP and galvanized options",
      "Bulk quantities supplied as per requirement",
      "Specifications available on request",
    ],
    applications: [
      "Completing new pipeline installations",
      "Repairs and maintenance work",
      "Plumbing retrofit projects",
      "Dealer and contractor supply requirements",
    ],
  },

  
    {
    slug: "20mm-ppr-elbow",
    name: "20mm PPR Elbow",
    short:
      "20mm PPR elbow fitting for changing the direction of PPR water pipelines.",
    description:
      "20mm PPR elbows are used to change the direction of PPR piping systems while maintaining a secure connection between pipe sections. Suitable for residential, commercial and general plumbing installations.",
    image: "/images/20mmPPRelbow.jpeg",
    imageAlt: "20mm PPR elbow fitting for plumbing pipeline installation",
    accent: "#1F9D55",
    features: [
      "Designed for 20mm PPR pipe connections",
      "Used to change pipeline direction",
      "Suitable for PPR plumbing systems",
      "Easy to incorporate into pipeline installations",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Hot and cold water pipelines",
      "Apartment and commercial plumbing",
      "Pipeline repair and maintenance",
    ],
  },

  {
    slug: "20mm-ppr-collar",
    name: "20mm PPR Collar",
    short:
      "20mm PPR collar fitting for secure connection and installation of PPR pipeline components.",
    description:
      "20mm PPR collar is used as a fitting component in PPR pipeline installations, providing a suitable connection arrangement for plumbing systems. It can be used in residential, commercial and general water pipeline work.",
    image: "/images/20mmPPRcollar.jpeg",
    imageAlt: "20mm PPR collar fitting for plumbing pipeline installation",
    accent: "#1F9D55",
    features: [
      "Designed for 20mm PPR pipeline systems",
      "Suitable for PPR plumbing installations",
      "Used with compatible PPR pipeline components",
      "Suitable for residential and commercial applications",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Hot and cold water pipeline installations",
      "Commercial building plumbing",
      "Pipeline maintenance and repair",
    ],
  },

  {
    slug: "20mm-ppr-union",
    name: "20mm PPR Union",
    short:
      "20mm PPR union fitting for connecting and disconnecting sections of PPR pipelines.",
    description:
      "20mm PPR union is a plumbing fitting used to connect two sections of PPR pipeline while allowing convenient disconnection when required. It is suitable for plumbing installations where maintenance or removal of connected pipeline sections may be needed.",
    image: "/images/20mmPPRunion.jpeg",
    imageAlt: "20mm PPR union fitting for plumbing pipeline installation",
    accent: "#1F9D55",
    features: [
      "Designed for 20mm PPR pipe connections",
      "Allows convenient connection of pipeline sections",
      "Useful where future maintenance may be required",
      "Suitable for PPR plumbing systems",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Hot and cold water pipelines",
      "Commercial plumbing installations",
      "Pipeline repair and maintenance",
    ],
  },

  {
    slug: "20mm-ppr-fta",
    name: "20mm PPR FTA",
    short:
      "20mm PPR female threaded adaptor for connecting PPR pipelines to threaded plumbing components.",
    description:
      "20mm PPR FTA (Female Thread Adaptor) is used to provide a threaded connection between a PPR pipeline and compatible threaded plumbing components. It is suitable for various water supply and plumbing installations.",
    image: "/images/20mmPPRfta.jpeg",
    imageAlt: "20mm PPR female threaded adaptor for plumbing installation",
    accent: "#1F9D55",
    features: [
      "Designed for 20mm PPR pipeline connections",
      "Provides a female threaded connection",
      "Suitable for connecting compatible threaded components",
      "Useful in PPR plumbing installations",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Hot and cold water pipelines",
      "Water supply installations",
      "Commercial and building plumbing",
    ],
  },

  {
    slug: "water-meter-box",
    name: "Water Meter Box",
    short:
      "Water meter box for housing and protecting water meter installations.",
    description:
      "Water meter boxes are used to provide a designated enclosure for water meter installations. They help organize and protect the meter while providing convenient access for inspection and maintenance.",
    image: "/images/WaterMeterBox.jpeg",
    imageAlt: "Water meter box for water meter installation",
    accent: "#1A4F8A",
    features: [
      "Designed for water meter installations",
      "Provides an organized enclosure for the meter",
      "Provides convenient access for inspection",
      "Suitable for residential and utility installations",
      "Specifications available on request",
    ],
    applications: [
      "Residential water meter installations",
      "Building water supply systems",
      "Utility installations",
      "Water supply maintenance work",
    ],
  },

  {
    slug: "15mm-tap-cock",
    name: "15mm Tap Cock",
    short:
      "15mm tap cock for controlling water flow in plumbing and water supply installations.",
    description:
      "15mm tap cock is a plumbing fitting used to control water flow at the point of use. It is suitable for common water supply and plumbing installations in residential and other building applications.",
    image: "/images/15mm-tap-cock.jpeg",
    imageAlt: "15mm tap cock for water supply and plumbing installation",
    accent: "#1A4F8A",
    features: [
      "Designed for 15mm plumbing connections",
      "Used to control water flow",
      "Suitable for water supply installations",
      "Suitable for residential plumbing applications",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Water supply points",
      "Building plumbing installations",
      "Maintenance and replacement work",
    ],
  },

  {
    slug: "water-meter-nbeson",
    name: "Water Meter NBESON",
    short:
      "NBESON water meter for measuring water consumption in water supply installations.",
    description:
      "NBESON water meter is used for measuring water consumption in water supply systems. It is suitable for meter installations where monitoring and recording water usage is required.",
    image: "/images/water-meter-nbeson.jpeg",
    imageAlt: "NBESON water meter for water supply installation",
    accent: "#2563EB",
    features: [
      "Designed for water consumption measurement",
      "Suitable for water supply installations",
      "Used for monitoring water usage",
      "Suitable for meter installation applications",
      "Specifications available on request",
    ],
    applications: [
      "Residential water metering",
      "Building water supply systems",
      "Water distribution installations",
      "Meter replacement and maintenance",
    ],
  },

  {
    slug: "15mm-fcv",
    name: "15mm FCV",
    short:
      "15mm flow control valve for managing water flow in plumbing and water supply systems.",
    description:
      "15mm FCV (Flow Control Valve) is used to control and manage water flow within plumbing and water supply systems. It is suitable for applications where controlled water flow is required.",
    image: "/images/15mm-fcv.jpeg",
    imageAlt: "15mm flow control valve for plumbing and water supply",
    accent: "#475569",
    features: [
      "Designed for 15mm plumbing connections",
      "Used for controlling water flow",
      "Suitable for water supply systems",
      "Useful in plumbing installations",
      "Specifications available on request",
    ],
    applications: [
      "Residential plumbing",
      "Water supply systems",
      "Building plumbing installations",
      "Pipeline maintenance and replacement",
    ],
  },

  {
    slug: "20mm-ppr-ball-valve",
    name: "20mm PPR Ball Valve",
    short:
      "20mm PPR ball valve for controlling and isolating water flow in PPR pipeline systems.",
    description:
      "20mm PPR ball valve is used to control and isolate water flow in PPR plumbing systems. It provides a convenient shut-off point within water supply pipelines and is suitable for residential and commercial plumbing installations.",
    image: "/images/20mm-ppr-ball-valve.jpeg",
    imageAlt: "20mm PPR ball valve for water pipeline installation",
    accent: "#1F9D55",
    features: [
      "Designed for 20mm PPR pipeline systems",
      "Used to control and isolate water flow",
      "Suitable for PPR plumbing installations",
      "Convenient shut-off for water pipelines",
      "Specifications available on request",
    ],
    applications: [
      "Residential water supply",
      "Hot and cold water plumbing",
      "Apartment and commercial plumbing",
      "Pipeline maintenance and isolation",
    ],
  },

  {
    slug: "20mmPPRmta",
    name: "20mm PPR MTA",
    short:
      "20mm PPR male threaded adaptor with a brass threaded insert for plumbing connections.",
    description:
      "20mm PPR MTA is a PPR fitting with a brass male threaded insert, designed for connecting PPR pipe systems to compatible threaded plumbing components.",
    image: "/images/20mmPPRmta.jpeg",
    imageAlt: "20mm PPR MTA with green PPR body and brass male threaded insert",
    accent: "#1F9D55",
    features: [
      "20mm PPR fitting",
      "Brass male threaded insert",
      "Suitable for threaded plumbing connections",
      "Compatible with PPR pipe systems",
      "Specifications available on request",
    ],
    applications: [
      "PPR plumbing systems",
      "Water-supply connections",
      "Residential plumbing",
      "Commercial plumbing installations",
    ],
  },
];

export const getProductBySlug = (slug: string | undefined): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
