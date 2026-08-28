import type { ImageMetadata } from 'astro';
import ironBacon from '../assets/images/iron-bacon.jpg';
import chickenGrip from '../assets/images/chicken-grip.jpg';
import veggieTank from '../assets/images/veggie-tank.jpg';

export interface MenuItem {
  code: string;
  name: string;
  subtitle: string;
  desc: string;
  ingredients: string;
  price: string;
  tag: string;
  tagClass: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const signatures: MenuItem[] = [
  {
    code: 'NR. 01',
    name: 'Iron Bacon',
    subtitle: 'Knuspriger Schweinebauchbraten',
    desc: 'Ein kulinarisches Kunstwerk: saftiges, aromatisches, zartes Fleisch mit bröselig krachender Kruste. Ein Kulturerbe, serviert in unserem Bánh Mì — sehr zu empfehlen mit hausgemachtem Paté.',
    ingredients: 'Gurke · Karotte · Rettich · Mango · Koriander · +2€ Paté',
    price: '8,90 €',
    tag: 'SIGNATURE',
    tagClass: 'bg-amber text-chalk',
    image: ironBacon,
    imageAlt: 'Iron Bacon Bánh Mì mit knusprigem Schweinebauch',
  },
  {
    code: 'NR. 02',
    name: 'Chicken Grip',
    subtitle: 'Doppelt frittiertes Hähnchen',
    desc: 'Außen knusprig, innen zart und juicy, mit einer himmlischen Marinade — entstanden aus einem ganzen Leben Kochen von der Mutter eines unserer Gründer.',
    ingredients: 'Gurke · Karotte · Rettich · Mango · Koriander',
    price: '8,00 €',
    tag: 'HAUSGEMACHT',
    tagClass: 'bg-chili text-cream',
    image: chickenGrip,
    imageAlt: 'Chicken Grip Bánh Mì mit doppelt frittiertem Hähnchen',
  },
  {
    code: 'NR. 03',
    name: 'Veggie Tank',
    subtitle: 'Herzhaft, leicht, voller Geschmack',
    desc: 'Ein veganes Patty, dessen Harmonie aus dem Zusammenspiel der einzelnen Zutaten entsteht — inspiriert von der Ernährung buddhistischer Mönche, mit unserer eigenen Note.',
    ingredients: 'Gurke · Karotte · Rettich · Mango · Koriander · Veganes Paté',
    price: '8,00 €',
    tag: 'VEGAN',
    tagClass: 'bg-[#7fae63] text-chalk',
    image: veggieTank,
    imageAlt: 'Veggie Tank Bánh Mì mit veganem Patty',
  },
];

export interface Drink {
  name: string;
  desc: string;
  price: string;
}

export const drinks: Drink[] = [
  { name: 'Silky Milky', desc: 'Frische Sojamilch', price: '3,00 €' },
  { name: 'Citrus Footprint', desc: 'Zitronen-Eistee', price: '3,50 €' },
  { name: 'Midnight Brew', desc: 'Schwarzer Bohnentee', price: '3,00 €' },
  { name: 'Underground Sip', desc: 'Vietnamesischer Kaffee', price: '3,00 €' },
];

export interface ThanksEntry {
  name: string;
  note: string;
}

export const thanksList: ThanksEntry[] = [
  { name: 'Pham Van Khoi', note: 'für den Start an dieser Lage' },
  { name: 'Julia Le Gia', note: 'für unser Design & die Detailliebe' },
  { name: 'Dinh Hong Phuc', note: 'für Allroundfähigkeiten von Anfang an' },
  { name: 'Nguyen Thi Kim Nhung', note: 'für Know-how & Rezepturen' },
];

export const marqueeItems: string[] = [
  'Knuspriger Schweinebauch',
  'Eingelegte Karotte & Rettich',
  'Frische Mango',
  'Koriander',
  'Hausgemachtes Paté',
  'Fischsauce & Mayo',
];

export const navLinks = [
  { href: '#karte', label: 'Karte' },
  { href: '#geschichte', label: 'Geschichte' },
  { href: '#besuch', label: 'Besuch' },
];
