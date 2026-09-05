// Central brand / contact / content configuration.
// Copy is reused from the client's existing site (English B2B voice).

export const COMPANY = {
  legal: 'Wuxi Towel Textile Co., Ltd.',
  brand: 'WUXI TOWEL TEXTILE',
  brandSub: 'Professional Towel Manufacturer · Est. 2013',
  originLine: 'Est. 2013 · Wuxi, Jiangsu, China',
  tagline: 'Est. 2013 · Wuxi, Jiangsu, China — microfiber towel manufacturer & exporter',
  desc:
    'Microfiber towel manufacturer & exporter in Wuxi, China — weaving, dyeing, napping and printing quick-dry towels and cloths since 2013.'
};

export const CONTACT = {
  person: 'Tang Eva',
  role: 'Export Sales — Wuxi Towel Textile Co., Ltd.',
  email: 'eva_towel@outlook.com',
  whatsappDisplay: '+86 136 5617 0496',
  whatsappHref: 'https://wa.me/8613656170496',
  mailtoSubjectPrefix: 'Wholesale inquiry',
  location: 'Jiangsu, China · Ports: Shanghai / Yiwu / Ningbo',
  locationShort: 'Jiangsu, China (UTC+8)',
  terms: 'FOB · CFR · CIF · EXW · DDP'
};

// Home KPI band [value, bold label, detail]
export const KPI = [
  ['98', 'high-speed looms', 'weaving microfiber fabrics in-house'],
  ['10', 'napping & brushing machines', 'for soft, suede-like finishes'],
  ['300,000 m+', 'fabric capacity per month', 'across weave, dye and brush'],
  ['≈1,000,000', 'towels produced per year', 'with a 10-year partner mill']
];

// About capability band
export const CAPABILITY = [
  ['98', 'looms', 'weave microfiber fabric in-house'],
  ['10', 'napping machines', 'brush the suede-like finish'],
  ['300,000 m+', 'fabric per month', 'weave, dye and brush capacity'],
  ['≈1,000,000', 'towels per year', 'through the 10-year partner mill']
];

// Process steps [title, copy]
export const PROCESS = [
  ['Weave & dye', 'Microfiber yarn is woven and dyed in-house — solid colors or yarn-dyed stripes.'],
  ['Nap & finish', 'Brushed on napping machines for the soft, suede-like hand buyers expect.'],
  ['Print & customize', 'Sublimation, jacquard, knitted, embossed or embroidered — your logo, any of five ways.'],
  ['QC & pack', 'Lint, size and absorbency checks before cutting, folding and bagging.'],
  ['Ship worldwide', 'FOB, CFR, CIF, EXW or DDP from Shanghai, Yiwu and Ningbo — ~35 days on average.']
];

// Export market split [label, %]
export const MARKETS = [
  ['Eastern Europe', 60],
  ['South America', 20],
  ['Eastern Asia', 10],
  ['North America', 10]
];

// Why-us rows
export const WHY_ROWS = [
  {
    num: '01',
    img: '/assets/images/about-factory.png',
    imgAlt: 'Rows of looms in the weaving mill',
    title: 'Weave, dye, nap and print under one roof',
    points: [
      ['Vertical control', '98 looms and 10 napping machines mean no third-party delays between yarn and finished towel.'],
      ['Scale when you need it', 'More than 300,000 m of fabric and 100,000 towels a month, backed by a decade-long partner mill.']
    ]
  },
  {
    num: '02',
    flip: true,
    img: null,
    imgAlt: 'Custom printed microfiber towels',
    title: 'Your logo, five ways: sublimation, jacquard, knitted, embossed, embroidered',
    points: [
      ['Custom is the standard', 'Every product line is printable or woven with your brand — from 100-piece trial orders to container loads.'],
      ['Eco & OEM friendly', 'Recycled-polyester options across beach, sport and cleaning lines, with flexible MOQs for testing.']
    ]
  }
];

// Company teaser facts (home) [label, detail]
export const TEASER_FACTS = [
  ['Est. 2013 · Jiangsu, China', 'specialist microfiber towel exporter'],
  ['Markets', 'Eastern Europe 60% · South America 20% · East Asia 10% · North America 10%'],
  ['Team', '11–50 staff covering sales, QC and export logistics'],
  ['Payments', 'T/T and L/C accepted']
];

// About company snapshot [label, detail]
export const SNAPSHOT = [
  ['Company', 'Wuxi Towel Textile Co., Ltd.'],
  ['Founded', '2013 · Wuxi, Jiangsu, China'],
  ['Plant footprint', '1,001–2,000 m² + 10-year partner mill'],
  ['Production', '98 looms · 10 napping machines · 300,000 m+ fabric/month'],
  ['Platform record', '4.9/5 from 17 buyer reviews · 98.41% response rate']
];

export const TRUST = {
  reviews: '4.9/5 from 17 buyer reviews',
  reviewsShort: '4.9/5 (17 reviews)',
  response: '98.41% response rate · replies ≤ 2 h',
  replies: 'Replies ≤ 2 h'
};
