export interface DiProduct {
  name: string;
  image: string;
  description: string;
}

export const DI_PRODUCTS: DiProduct[] = [
  {
    name: "65mm DI Valve",
    image: "/images/65mm-di-valve.jpeg",
    description:
      "65mm DI valve suitable for water supply and pipeline control applications.",
  },
  {
    name: "55mm DI Valve",
    image: "/images/55mm-di-valve.jpeg",
    description:
      "55mm DI valve suitable for water supply and pipeline control applications.",
  },

  {
    name: "80mm DI Sluice Valve",
    image: "/images/80mm-di-sluice-valve.jpeg",
    description:
      "80mm DI valve suitable for water supply and pipeline control applications.",
  },
];