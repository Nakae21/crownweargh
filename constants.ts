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

  // --- FULL CAPS / SNAPBACK (NO NET) ---
{
  id: 50,
  name: "Premium Full - Black/Red",
  price: 50.00,
  category: 'full',
  image: "/images/cap_full_fabric_black_red.jpeg",
  description: "Premium full fabric snapback in black and red. Bold contrast with a clean structured finish."
},
{
  id: 51,
  name: "Premium Full - White/Black",
  price: 50.00,
  category: 'full',
  image: "/images/cap_full_fabric_navy.jpeg",
  description: "Premium full fabric snapback in white and black. Crisp two-tone design with a smooth structured fit."
},
{
  id: 52,
  name: "Premium Full - Red Snapback",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_r-r.jpeg",
  description: "Premium full fabric snapback in solid red. Clean, bold, and perfectly structured."
},
{
  id: 53,
  name: "Premium Full - White/SeaBlue",
  price: 50.00,
  category: 'full',
  image: "/images/cap_full_fabric_olive_seab.jpeg",
  description: "Premium full fabric snapback in white and sea blue. Fresh color blend with a smooth structured finish."
},
{
  id: 54,
  name: "Premium Full - Black/Blue",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_b-b.jpeg",
  description: "Premium full fabric snapback in black and blue. Sleek contrast with a clean structured look."
},
{
  id: 55,
  name: "Premium Full - Black/Blue",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_black-blue.jpeg",
  description: "Premium full fabric snapback in black and blue. Modern two-tone design with a firm structured fit."
},
{
  id: 56,
  name: "Premium Full - Black/Mauve",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_black-mauve.jpeg",
  description: "Premium full fabric snapback in black and mauve. Unique color combination with a clean structured finish."
},
{
  id: 57,
  name: "Premium Full - Black/Red",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_black-red.jpeg",
  description: "Premium full fabric snapback in black and red. Strong contrast with a bold structured style."
},
{
  id: 58,
  name: "Premium Full - Black/White",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_black-white.jpeg",
  description: "Premium full fabric snapback in black and white. Classic two-tone design with a sharp structured look."
},
{
  id: 59,
  name: "Premium Full - Black/Yellow",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_black-yellow.jpeg",
  description: "Premium full fabric snapback in black and yellow. Vibrant contrast with a clean structured finish."
},
{
  id: 60,
  name: "Premium Full - Black",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_black.jpeg",
  description: "Premium full fabric snapback in solid black. Minimal, sleek, and perfectly structured."
},
{
  id: 61,
  name: "Premium Full - Blue/Red",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_blue-red.jpeg",
  description: "Premium full fabric snapback in blue and red. Bold color mix with a smooth structured fit."
},
{
  id: 62,
  name: "Premium Full - Blue/Yellow",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_blue-yellow.jpeg",
  description: "Premium full fabric snapback in blue and yellow. Bright contrast with a sharp structured finish."
},
{
  id: 63,
  name: "Premium Full - Blue",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_blue.jpeg",
  description: "Premium full fabric snapback in solid blue. Clean, bold, and smoothly structured."
},
{
  id: 64,
  name: "Premium Full - Green/Black",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_green-black.jpeg",
  description: "Premium full fabric snapback in green and black. Strong two-tone look with a clean structured fit."
},
{
  id: 65,
  name: "Premium Full - Mauve/Yellow",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_mauve-yellow.jpeg",
  description: "Premium full fabric snapback in mauve and yellow. Unique vibrant blend with a firm structured finish."
},
{
  id: 66,
  name: "Premium Full - Red/Grey",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_red-grey.jpeg",
  description: "Premium full fabric snapback in red and grey. Balanced contrast with a clean structured design."
},
{
  id: 67,
  name: "Premium Full - White/Black",
  price: 50.00,
  category: 'full',
  image: "/images/Snapback/cap_full_white-black.jpeg",
  description: "Premium full fabric snapback in white and black. Crisp classic combination with a sharp structured finish."
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
