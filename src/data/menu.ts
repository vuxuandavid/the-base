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
  pateNote?: string;
  price: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const signatures: MenuItem[] = [
  {
    code: 'NR. 01',
    name: 'Iron Bacon',
    subtitle: 'Knuspriger Schweinebauchbraten',
    desc: 'Ein kulinarisches Kunstwerk: saftiges, aromatisches, zartes Fleisch mit bröselig krachender Kruste. Ein Kulturerbe, serviert in unserem Bánh Mì. Sehr zu empfehlen mit unserem hausgemachten Paté, das euch sicher ein WOW entlockt.',
    ingredients: 'Gurke · Karotte · Rettich · Mango · Koriander · Mayo · Fischsauce · +2€ Paté',
    pateNote: 'vietnamesische Leberpastete. Passt hervorragend zu unseren Bánh Mì mit Fleisch.',
    price: '8,90 €',
    image: ironBacon,
    imageAlt: 'Iron Bacon Bánh Mì mit knusprigem Schweinebauch',
  },
  {
    code: 'NR. 02',
    name: 'Chicken Grip',
    subtitle: 'Doppelt frittiertes Hähnchen',
    desc: 'Außen knusprig, innen zart und juicy, mit einer himmlischen Marinade, entstanden aus einem ganzen Leben Kochen von der Mutter eines unserer Gründer.',
    ingredients: 'Gurke · Karotte · Rettich · Mango · Koriander · Mayo · +2€ Paté',
    pateNote: 'vietnamesische Leberpastete. Passt hervorragend zu unseren Bánh Mì mit Fleisch.',
    price: '8,00 €',
    image: chickenGrip,
    imageAlt: 'Chicken Grip Bánh Mì mit doppelt frittiertem Hähnchen',
  },
  {
    code: 'NR. 03',
    name: 'Veggie Tank',
    subtitle: 'Herzhaft, leicht, voller Geschmack',
    desc: 'Ein veganes Patty, dessen Harmonie aus dem Zusammenspiel der einzelnen Zutaten entsteht, inspiriert von der Ernährung buddhistischer Mönche, mit unserer eigenen Note.',
    ingredients: 'Gurke · Karotte · Rettich · Mango · Koriander · Mayo · Hoisin · Veganes Paté',
    pateNote: 'Die Basis aus unserem veganen Paté besteht aus Cashewnüssen.',
    price: '8,00 €',
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
  { name: 'Citrus Footprint', desc: 'Zitronen-Eistee', price: '3,50 €' },
  { name: 'Underground Sip', desc: 'Vietnamesischer Kaffee', price: '3,00 €' },
];

export interface ThanksEntry {
  name: string;
  note: string;
}

export const thanksList: ThanksEntry[] = [
  {
    name: 'Pham Van Khoi',
    note: 'Ohne dich hätten wir nicht in dieser tollen Lage gestartet. Durch dein Management können wir weiterhin Zeit in die Verbesserung unserer Produkte investieren.',
  },
  {
    name: 'Julia Le Gia',
    note: 'Durch deine Überlegung kam es zu unserem Design, und deine Detailliebe machte unseren Laden zu dem, was er ist.',
  },
  {
    name: 'Dinh Hong Phuc',
    note: 'Danke Bruderherz, dass du uns geholfen hast, ohne Lohn, bis unser Umsatz gefestigt war. Deine Allroundfähigkeiten helfen sehr dabei, den Laden und die Vorbereitung zu pushen.',
  },
  {
    name: 'Nguyen Thi Kim Nhung',
    note: 'Der Dank für Phuc gebührt auch dir. Darüber hinaus danke für deine Mitarbeit und dass du uns mit deinem Know-how fürs Kochen bei der Erstellung unserer Rezepturen geholfen hast.',
  },
];

export const marqueeItems: string[] = [
  'Fastfood mit Handwerk und Leidenschaft',
];

export const navLinks = [
  { href: '/#karte', label: 'Karte' },
  { href: '/#geschichte', label: 'Geschichte' },
  { href: '/#besuch', label: 'Besuch' },
  { href: '/#faq', label: 'FAQ' },
];

export const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];
