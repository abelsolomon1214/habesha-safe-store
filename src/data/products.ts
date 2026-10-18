export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Yirgacheffe Organic Coffee Beans",
    price: 850,
    category: "Coffee",
    description: "Bright, floral, and citrusy single-origin coffee beans freshly harvested from the highlands of Yirgacheffe.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Sidamo Dark Roast Coffee",
    price: 800,
    category: "Coffee",
    description: "Rich and complex dark roast with deep winey notes and a smooth chocolate finish.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Traditional Berbere Spice Blend",
    price: 450,
    category: "Spices",
    description: "The signature fiery and aromatic spice blend of Ethiopia, combining chili peppers, garlic, ginger, and sacred herbs.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Authentic Mitmita Hot Spice Mix",
    price: 500,
    category: "Spices",
    description: "An extra-hot, finely ground chili powder blend infused with cardamom, cloves, and salt for true spice lovers.",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Ethiopian White Honey (Tigray Honey)",
    price: 1200,
    category: "Spices",
    description: "Pristine, rare white honey harvested from the floral shrub blossoms of Tigray, renowned for its medicinal properties.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Handmade Clay Coffee Jebena",
    price: 950,
    category: "Crafts",
    description: "Traditional hand-molded clay coffee pot crafted by local artisans, essential for the authentic Ethiopian coffee ceremony.",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Traditional Habesha Kemis Scarf",
    price: 1500,
    category: "Crafts",
    description: "Hand-woven cotton shawl featuring traditional Ethiopian 'Tibeb' geometric border patterns.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Ceremonial Coffee Cups Set (Cini)",
    price: 1100,
    category: "Crafts",
    description: "A set of 6 traditional handleless ceramic coffee cups designed for serving guests during the daily coffee ritual.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
  },
];
