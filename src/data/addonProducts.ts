export interface AddonProduct {
  id: 'cloud-dma' | 'hwid-spoofer';
  name: string;
  description: string;
  buyUrl: string;
  highlights: string[];
}

export const ADDON_PRODUCTS: AddonProduct[] = [
  {
    id: 'cloud-dma',
    name: 'Cloud DMA',
    description:
      'Optional hardware-assisted path referenced in the misc module list for players who run supported DMA setups alongside Battlefield 6.',
    buyUrl: 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fcloud-dma',
    highlights: ['Pairs with the Cloud-DMA module option', 'Separate checkout from the main BF6 license', 'Review requirements on the seller page'],
  },
  {
    id: 'hwid-spoofer',
    name: 'HWID Spoofer',
    description:
      'Standalone utility for hardware identity changes when you move PCs or rebuild Windows—details and scope are listed at checkout.',
    buyUrl: 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fhwid-spoofer',
    highlights: ['For legitimate hardware changes—not ban recovery', 'Independent of Battlefield 6 cheat tiers', 'Confirm compatibility before purchase'],
  },
];