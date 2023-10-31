import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';

// ----------------------------------------------------------------------

const LICENSES = ['Basic', 'Standard', 'Custom'];

export const _homePlans = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: [
    '2 months support',
    'JavaScript version',
    'TypeScript version',
    'Design Resources',
  ],
  // options: ['2 months development time', '12 months support', '6 months of support'],
  options: ['Simple Project Configuration', 'Up to 2 months of Development services', 'Custom package with Custom pricing'],
  icons: [
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_sketch.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_figma.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_js.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_ts.svg',
  ],
}));

export const _pricingPlans = [
  {
    subscription: 'basic',
    icon: <PlanFreeIcon />,
    price: 20000,
    caption: 'Get your MVP launched',
    lists: [
      { text: '2 months of development', isAvailable: true },
      { text: '1 engineer', isAvailable: true },
      { text: 'Up to 3 weeks support', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true },
    ],
    labelAction: 'current plan',
  },
  {
    subscription: 'standard',
    icon: <PlanStarterIcon />,
    price: 60000,
    caption: 'Production Ready',
    lists: [
      { text: '4 months of development', isAvailable: true },
      { text: '2 engineers', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: 'custom',
    icon: <PlanPremiumIcon />,
    price: 400000,
    caption: 'Startup as a service',
    lists: [
      { text: '6 months of development', isAvailable: true },
      { text: '5 engineers', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];
