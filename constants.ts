import { Product } from './types';

// =========================================================================================
// HOW TO ADD YOUR OWN PRODUCT IMAGES:
// 1. Create a folder named 'images' inside your project's 'public' folder.
// 2. Add your image files there (e.g., my_cap.jpg).
// 3. Update the 'image' property below to match your filename (e.g., 'images/my_cap.jpg').
// 4. If the image is not found, a placeholder with the product name will be shown.
// =========================================================================================

export const PRODUCTS: Product[] = [
  // --- TRUCKER CAPS (NET BACK) ---
  {
    id: 1,
    name: "Classic Black",
    price: 40.00,
    category: 'trucker',
    image: "/images/classicb.jpeg",
    description: "The essential all-black trucker cap with mesh back. Stealth, sleek, and versatile."
  },
  {
    id: 2,
    name: "White & Black",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_black.jpg",
    description: "High contrast monochrome. White foam front with black mesh back."
  },
  {
    id: 3,
    name: "White & Royal Blue",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_blue.jpg",
    description: "Crisp white front with a vibrant royal blue mesh and bill."
  },
  {
    id: 4,
    name: "White & Red",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_red.jpg",
    description: "Bold red mesh and bill paired with a clean white front."
  },
  {
    id: 5,
    name: "White & Green",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_green.jpg",
    description: "Fresh kelly green mesh back. Perfect for a nature-inspired look."
  },
  {
    id: 6,
    name: "White & Yellow",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_yellow.jpg",
    description: "Sunny and energetic. White front with bright yellow details."
  },
  {
    id: 7,
    name: "White & Orange",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_orange.jpg",
    description: "Citrus orange mesh back for a pop of color."
  },
  {
    id: 8,
    name: "White & Grey",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_grey.jpg",
    description: "Neutral grey tones. Understated and professional."
  },
  {
    id: 9,
    name: "White & Brown",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_brown.jpg",
    description: "Earth tone brown mesh. Rugged and grounded."
  },
  {
    id: 10,
    name: "White & Light Blue",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_lightblue.jpg",
    description: "Sky blue mesh. Light, airy, and chill."
  },
  {
    id: 11,
    name: "White & Maroon",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_maroon.jpg",
    description: "Deep maroon mesh. Sophisticated streetwear."
  },
  {
    id: 12,
    name: "White & Olive",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_white_olive.jpg",
    description: "Muted olive green. A tactical aesthetic."
  },
  {
    id: 13,
    name: "White & Camo",
    price: 45.00,
    category: 'trucker',
    image: "/images/cap_white_camo.jpg",
    description: "Woodland camouflage mesh back. Stand out by blending in."
  },
  {
    id: 14,
    name: "Full Yellow (Mesh)",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_full_yellow.jpg",
    description: "All-over bright yellow with mesh back. For those who aren't afraid to be seen."
  },
  {
    id: 15,
    name: "Full Beige (Mesh)",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_full_beige.jpg",
    description: "Sand/Beige tone with mesh back. The perfect neutral base."
  },
  {
    id: 16,
    name: "Red & Black",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_red_black.jpg",
    description: "Aggressive red front with black mesh. A power combination."
  },
  {
    id: 17,
    name: "Yellow & Black",
    price: 40.00,
    category: 'trucker',
    image: "/images/cap_yellow_black.jpg",
    description: "Yellow front with black mesh. Warning tape vibes."
  },

  // --- FULL CAPS/snapback (NO NET) ---
  {
    id: 50,
    name: "Premium Full - Black/Red",
    price: 50.00,
    category: 'full',
    image: "/images/cap_full_fabric_black_red.jpeg",
    description: "Solid cotton structure with no mesh. Premium full fabric fit."
  },
  {
    id: 51,
    name: "Premium Full - White/Black",
    price: 50.00,
    category: 'full',
    image: "/images/cap_full_fabric_navy.jpeg",
    description: "Deep navy blue full fabric cap. Smooth texture, superior quality."
  },
  {
    id: 52,
    name: "Premium Full - Beige",
    price: 50.00,
    category: 'full',
    image: "/images/cap_full_fabric_beige.jpeg",
    description: "Soft structure full cap in sand beige. Casual and clean without the net."
  },
  {
    id: 53,
    name: "Premium Full - White/SeaBlue",
    price: 50.00,
    category: 'full',
    image: "/images/cap_full_fabric_olive_seab.jpeg",
    description: "Solid olive green fabric. Rugged look, soft feel."
  },

  // --- GRAPHIC TEES ---
  {
    id: 101,
    name: "Own Your Crown - Black",
    price: 80.00,
    category: 'tshirt',
    image: "/images/tee_own_crown_black.jpg",
    description: "Signature 'Own Your Crown' graphic on premium black heavyweight cotton."
  },
  {
    id: 102,
    name: "Own Your Crown - White",
    price: 80.00,
    category: 'tshirt',
    image: "/images/tee_own_crown_white.jpg",
    description: "Signature 'Own Your Crown' graphic on crisp white cotton."
  },
  {
    id: 103,
    name: "Breathe Believe Begin - Black",
    price: 80.00,
    category: 'tshirt',
    image: "/images/tee_breathe_black.jpg",
    description: "Motivational typography print. 'Breathe Believe Begin' on black."
  },
  {
    id: 104,
    name: "Breathe Believe Begin - White",
    price: 80.00,
    category: 'tshirt',
    image: "/images/tee_breathe_white.jpg",
    description: "Motivational typography print. 'Breathe Believe Begin' on white."
  }
];
