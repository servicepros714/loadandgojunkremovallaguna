// ─────────────────────────────────────────────────────────────
//  Load & Go Junk Removal Laguna — central business config
//  Edit everything about the business here. Components read
//  from this file only. (Portfolio rule: no email addresses.)
// ─────────────────────────────────────────────────────────────

const business = {
  name: 'Load & Go Junk Removal Laguna',
  shortName: 'Load & Go',
  tagline: 'Load it up. Watch it go.',

  // Phone — display + dialable formats
  phone: '(714) 410-6226',
  phoneHref: 'tel:+17144106226',
  smsHref: 'sms:+17144106226',

  // Location
  city: 'Laguna Beach',
  state: 'CA',
  stateFull: 'California',
  addressDisplay: 'Laguna Beach, CA',
  geo: { latitude: 33.5427, longitude: -117.7854 },

  // Website (update if the final domain differs)
  url: 'https://loadandgojunkremovallaguna.com',

  hours: 'Mon – Sun: By appointment',

  // Service area — copy rule: "[City] and nearby areas"
  serviceAreaLabel: 'Laguna Beach and nearby areas',
  serviceAreas: [
    'Laguna Beach',
    'Laguna Niguel',
    'Laguna Hills',
    'Laguna Woods',
    'Aliso Viejo',
    'Dana Point',
    'Newport Coast',
    'Corona del Mar',
    'Mission Viejo',
    'Irvine',
  ],

  // Optional: POST endpoint for estimate submissions (e.g. a GHL inbound
  // webhook). Leave empty to show the success screen without sending.
  estimateWebhook: '',

  // Reviews — paste real customer reviews here (name, area, text).
  // The Reviews section is hidden automatically while this list is empty.
  reviews: [],

  social: {
    google: '',
    yelp: '',
    facebook: '',
    instagram: '',
  },
};

export const services = [
  {
    icon: 'sofa',
    title: 'Furniture Removal',
    text: 'Couches, sectionals, dressers, patio sets, and that armchair nobody sits in. We carry it out from any room, any floor.',
  },
  {
    icon: 'fridge',
    title: 'Appliance Haul-Away',
    text: 'Fridges, washers, dryers, water heaters, and hot tubs disconnected and hauled off for proper recycling.',
  },
  {
    icon: 'garage',
    title: 'Garage Cleanouts',
    text: 'Get your parking spot back. We sort, load, and sweep out years of boxes, bikes, tools, and beach gear.',
  },
  {
    icon: 'home',
    title: 'Estate & Home Cleanouts',
    text: 'Respectful, thorough cleanouts for moves, downsizing, and estates. We set aside anything you want to keep.',
  },
  {
    icon: 'hammer',
    title: 'Construction Debris',
    text: 'Drywall, tile, lumber, cabinets, and remodel leftovers cleared from job sites and hillside homes alike.',
  },
  {
    icon: 'leaf',
    title: 'Yard Waste & Outdoor',
    text: 'Branches, old fencing, decking, planters, and overgrowth removed so your outdoor space is ready to enjoy.',
  },
  {
    icon: 'mattress',
    title: 'Mattress Disposal',
    text: 'Mattresses and box springs picked up and routed to recycling instead of the landfill whenever possible.',
  },
  {
    icon: 'box',
    title: 'Storage Unit Cleanouts',
    text: 'Stop paying rent on things you don’t use. We empty full or partial units and leave them broom-clean.',
  },
];

export const steps = [
  {
    title: 'Call or Book Online',
    text: 'Tell us what’s going and where it is. Send a photo or two and we can usually give you a price range right away.',
  },
  {
    title: 'Get Your Upfront Price',
    text: 'Our crew confirms the price on-site before we lift a thing. You approve it, or you owe nothing.',
  },
  {
    title: 'We Load & Go',
    text: 'We do all the lifting, loading, and sweep-up, then haul it off to donate, recycle, or dispose of responsibly.',
  },
];

export const pricingPoints = [
  'Price based on how much space your items take in our truck',
  'Labor, loading, hauling, and disposal fees all included',
  'Quote confirmed on-site before any work begins',
  'No hidden fees, fuel surcharges, or surprise add-ons',
  'Single-item pickups and minimum loads welcome',
  'Free, no-obligation estimates by phone or online',
];

export const whyUs = [
  { icon: 'clock', title: 'Same-Day & Next-Day', text: 'Openings most days of the week across Laguna Beach and nearby areas.' },
  { icon: 'tag', title: 'Upfront Pricing', text: 'You see the price before we start. What we quote is what you pay.' },
  { icon: 'recycle', title: 'Donate & Recycle First', text: 'Usable items go to local charities; metals and electronics get recycled.' },
  { icon: 'shield', title: 'Careful Crews', text: 'Floors, walls, and narrow canyon driveways treated with care on every job.' },
];

// Real job photos (public/images). Remove pairs to hide them;
// the section disappears entirely when this list is empty.
export const beforeAfter = [
  {
    title: 'Driveway Pile-Up',
    caption: 'Patio cushions, bins, a mattress, and household clutter cleared from the front of the house.',
    before: '/images/driveway-before.jpg',
    after: '/images/driveway-after.jpg',
  },
  {
    title: 'Garage Cleanout',
    caption: 'Old furniture, a mattress, scrap lumber, and glass hauled out so the car fits again.',
    before: '/images/garage-before.jpg',
    after: '/images/garage-after.jpg',
  },
  {
    title: 'Side Yard Haul-Away',
    caption: 'Bagged trash, a bed frame, and yard leftovers removed from the side of the house.',
    before: '/images/sideyard-before.jpg',
    after: '/images/sideyard-after.jpg',
  },
];

export const faqs = [
  {
    q: 'How much does junk removal cost?',
    a: 'Pricing is based on how much room your items take up in our truck, from a single item up to a full load. Labor, loading, and disposal are included. Call or book online and we’ll give you a free estimate, then confirm the exact price on-site before we start.',
  },
  {
    q: 'Do I need to move anything to the curb first?',
    a: 'No. Just point to what’s going and our crew handles the rest, whether it’s in the garage, the backyard, an upstairs bedroom, or down a set of hillside stairs.',
  },
  {
    q: 'Can you come the same day?',
    a: 'Often, yes. We keep room in the schedule for same-day and next-day jobs throughout Laguna Beach and nearby areas. Call early in the day for the best chance at a same-day slot.',
  },
  {
    q: 'What items can’t you take?',
    a: 'We can’t haul hazardous materials such as paint, chemicals, solvents, fuel, asbestos, or medical waste. If you’re unsure about an item, give us a call and we’ll let you know.',
  },
  {
    q: 'What happens to my stuff after you haul it away?',
    a: 'We sort every load. Items in good shape are donated, metals, cardboard, and electronics are recycled, and only what’s left goes to a licensed disposal facility.',
  },
  {
    q: 'Do I need to be home during the pickup?',
    a: 'Not always. For curbside or easy-access pickups, we can arrange a contactless job with payment by phone. We’ll confirm details when you book.',
  },
];

export default business;
