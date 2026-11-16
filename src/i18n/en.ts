import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'BF6 Cheats',
    domain: 'bf6cheat.org',
    title: 'Battlefield 6 Cheats for PC | ESP & Aimbot Features',
    description:
      'Explore Battlefield 6 cheats for PC, compare ESP and aimbot features, review compatibility, and find product details before checkout.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: '/', label: 'Home', mobileLabel: 'Return to homepage' },
    { href: `${productBase}`, label: 'Hack plans', mobileLabel: 'View hack plans' },
    { href: '/blog/', label: 'Guides', mobileLabel: 'Read setup guides' },
    { href: '/forum/', label: 'Discussions', mobileLabel: 'Join player discussions' },
    { href: '/reviews/', label: 'Ratings', mobileLabel: 'See player ratings' },
    { href: '/faq/', label: 'Q&A', mobileLabel: 'Open pre-purchase Q&A' },
  ],
  hero: {
    status: 'Battlefield 6 online',
    eyebrow: 'PC tools for large-scale combat',
    titleLine1: 'Battlefield 6 Cheats for PC',
    titleLine2: '',
    subtitle:
      'Battlefield 6 hacks built for Conquest, Breakthrough, Rush, and REDSEC—aimbot tuning, ESP wallhack, vehicle tags, and radar so you read pushes and flanks instead of guessing.',
    ctaPrimary: 'Compare hack plans',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Modes',
    modes: ['Conquest', 'Breakthrough', 'Rush', 'REDSEC'],
    metrics: [
      { label: 'Player feedback', strong: '127+ reviews' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Support', strong: '24/7' },
      { label: 'Capture-friendly', strong: 'Stream-safe' },
    ],
  },
  features: {
    eyebrow: 'Feature set',
    title: 'Battlefield 6 hack modules',
    subtitle:
      'BF6 hacks that cover infantry fights and armor pushes—aimbot, wallhack, vehicle ESP, and radar with configs you can swap between modes.',
    items: [
      {
        title: 'BF6 Aimbot',
        subtitle: 'Smooth tracking, per kit',
        desc: 'Battlefield 6 aimbot with smoothness, FOV, and bone priority tuned for ARs, LMGs, DMRs, and sidearms across open lanes and CQB.',
        bullets: [
          'Smoothness and FOV sliders',
          'Bone priority: head, chest, or closest',
          'Separate profiles for AR, LMG, DMR, and pistol',
          'Lead on moving infantry and light vehicles',
          'Presets for Conquest, Breakthrough, Rush, and REDSEC',
        ],
        tags: ['bf6 aimbot', 'battlefield 6 cheats', 'smoothness'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'ESP / Wallhack',
        subtitle: 'Infantry through cover',
        desc: 'Player boxes, skeletons, health, distance, and team colors through smoke, debris, and compound walls.',
        bullets: [
          'Player boxes, skeletons, HP and distance',
          'Squad and team color filters',
          'Alerts when enemies crest or drop from sight',
        ],
        tags: ['battlefield 6 wallhack', 'esp', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Vehicle ESP',
        subtitle: 'Tanks, transports, air',
        desc: 'Tags for ground vehicles, helicopters, and jets with distance and health so you know what is rolling into your sector.',
        bullets: [
          'Ground and air vehicle markers',
          'Occupant hints where supported',
          'Pairs with infantry ESP and radar',
        ],
        tags: ['vehicle esp', 'bf6 hacks', 'armor awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: '2D Radar',
        subtitle: 'Sector awareness',
        desc: 'Compact mini-radar for nearby infantry, vehicle blips, and objective pressure without staring at the full map.',
        bullets: ['Enemy dots on mini-radar', 'Objective and sector markers', 'Works alongside ESP wallhack'],
        tags: ['2d radar', 'mini-map', 'rotations'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Config system',
        subtitle: 'Cloud presets',
        desc: 'Save aimbot, ESP, and radar settings per mode. Sync configs across PCs from the portal.',
        bullets: [
          'Cloud backup for aimbot and ESP profiles',
          'Hot-swap presets between modes',
          'Export and import for squad mates',
        ],
        tags: ['cloud config', 'presets', 'battlefield 6 cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Stream-safe capture',
        subtitle: 'Clean feed on record',
        desc: 'Overlays stay on your display while OBS, Game Bar, and common capture tools see a normal game picture.',
        bullets: [
          'OBS and Game Bar friendly modes',
          'Toggle visibility per module',
          'Setup notes in the customer portal',
        ],
        tags: ['stream-safe', 'OBS', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Mode presets',
        subtitle: 'Conquest to REDSEC',
        desc: 'Defaults for large-scale Conquest, linear Breakthrough, fast Rush, and REDSEC firefights—adjust after your first match.',
        bullets: [
          'Conquest and Breakthrough layouts',
          'Rush and REDSEC tighter ranges',
          'Conservative defaults you can raise later',
        ],
        tags: ['Conquest', 'Breakthrough', 'REDSEC'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Loader updates',
        subtitle: 'After game patches',
        desc: 'Discord #status and the site banner call out when Battlefield 6 or anti-cheat builds change—grab the matching portal build before you queue.',
        bullets: [
          'Portal downloads for current builds',
          'Discord #status for patch windows',
          'Config library stays versioned',
        ],
        tags: ['patch updates', 'loader', 'status'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'Support channel',
        subtitle: 'Setup help',
        desc: 'Discord staff walk through loader steps, weapon configs, and license moves when you are stuck mid-setup.',
        bullets: ['24/7 Discord coverage', 'Ticket templates on Support', 'FAQ for common errors'],
        tags: ['24/7 support', 'discord', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Battlefield 6 hacks with fast updates',
    subtitle:
      'Patch days break cheap loaders and leave you in ticket queues. We ship builds quickly, keep aimbot defaults readable for large maps, and answer on Discord around the clock.',
    usLabel: 'Battlefield 6 Hacks',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Loader updates after patches',
        desc: 'New builds usually go out within hours of a major Battlefield 6 or anti-cheat update. Check Discord #status before you queue.',
        descAlt:
          'After a big BF6 or anti-cheat patch, refreshed loader builds typically land within hours—confirm #status on Discord before you queue.',
      },
      {
        title: 'Readable aimbot defaults',
        desc: 'Smoothness, FOV, and bone priority start conservative for Conquest and Breakthrough. Tighten them when you are comfortable.',
        descAlt:
          'Out of the box, aimbot smoothness, FOV, and bone priority stay modest on Conquest and Breakthrough so you can raise them once you are used to the menu.',
      },
      {
        title: 'Discord support',
        desc: 'Real people help with loader setup, weapon configs, and license moves. Coverage is 24/7.',
      },
      {
        title: 'External loader + stream-safe modes',
        desc: 'External loader with capture-friendly options so overlays stay off your stream feed.',
      },
      {
        title: 'Cloud configs',
        desc: 'Save Conquest, Rush, and per-weapon settings and load them on another PC.',
      },
      {
        title: 'License moves',
        desc: 'Hardware resets and PC changes go through Discord or the portal instead of locking you to one machine forever.',
        descAlt:
          'Need a new rig or fresh Windows install? HWID resets and license transfers run through the portal or Discord instead of tying you to a single PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Usual time to ship a loader after a major Battlefield 6 update.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Discord help for setup, configs, and checkout questions.',
      },
      {
        value: '127+',
        title: 'Reviews',
        desc: 'Written feedback from PC players using aimbot, ESP, and radar on bf6cheat.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Get running in',
    titleHighlight: 'three steps',
    intro:
      'Pick a plan, download the loader from your portal, load a mode preset, then launch Battlefield 6 through EA App or Steam. Discord help is there if something looks off.',
    ctaPrimary: 'Open product hub',
    ctaSecondary: 'Battlefield 6 setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Choose a plan and download',
        desc: 'Finish checkout, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load a preset',
        desc: 'Run the loader, pick Conquest or REDSEC defaults, and tune aimbot and ESP to taste.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch BF6 on EA App or Steam, and use your saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after Battlefield 6 updates before you launch.',
    items: [
      'Windows 10 & 11',
      'EA App or Steam',
      'Battlefield 6 client',
      'Auto updater',
      'Config cloud sync',
      'Discord support',
      'License reset',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Plans',
    title: 'Battlefield 6 hack tiers',
    subtitle:
      'Complete suite, focused aimbot, or ESP and wallhack—pick the BF6 hacks package that matches how you play.',
    viewAll: 'Compare all plans',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        tier: 'Full suite',
        name: 'Complete',
        title: 'Complete Battlefield 6 Hacks',
        desc: 'Full battlefield 6 hacks bundle—aimbot, ESP wallhack, vehicle ESP, 2D radar, cloud configs, and priority patch notes.',
        features: ['Aimbot + weapon profiles', 'ESP / wallhack', 'Vehicle ESP', '2D radar', 'Cloud configs', 'Stream-safe modes'],
        more: 38,
        href: `${productBase}complete/`,
        variant: 'popular',
      },
      {
        badge: 'Combat focus',
        tier: 'Aim',
        name: 'Aimbot',
        title: 'Battlefield 6 Aimbot',
        desc: 'Battlefield 6 aimbot with smooth tracking, FOV control, and per-weapon presets for infantry fights across all major modes.',
        features: ['Smooth aimbot', 'FOV and bone priority', 'AR / LMG / DMR profiles', 'Mode presets', 'Cloud backup'],
        more: 12,
        href: `${productBase}aimbot/`,
        variant: 'essential',
      },
      {
        badge: 'Awareness',
        tier: 'Vision',
        name: 'ESP & Wallhack',
        title: 'Battlefield 6 ESP & Wallhack',
        desc: 'Player ESP, wallhack, vehicle tags, and radar—read sectors and armor pushes without guessing what is on the other side of cover.',
        features: ['Player ESP / wallhack', 'Vehicle ESP', '2D radar', 'Team filters', 'Stream-safe overlay'],
        more: 18,
        href: `${productBase}esp-wallhack/`,
        variant: 'essential',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Battlefield 6 hack products',
    subtitle: 'Module packages (Complete, Aimbot, ESP & Wallhack) plus weekly, monthly, and lifetime keys for PC on EA App or Steam.',
    viewAll: 'View all plans',
    get: 'View plan',
    explore: 'Explore',
    items: [
      {
        badge: 'Most popular',
        category: 'Full suite',
        title: 'Complete',
        subtitle: 'Aimbot, ESP, radar, vehicles',
        desc: 'Everything in one Battlefield 6 hacks package—aimbot, wallhack, vehicle ESP, radar, and cloud configs.',
        features: ['Full aimbot suite', 'ESP / wallhack', 'Vehicle ESP', '2D radar', 'Cloud configs'],
        more: 38,
        href: `${productBase}complete/`,
      },
      {
        badge: 'Combat',
        category: 'Aimbot',
        title: 'Aimbot',
        subtitle: 'Tracking and weapon profiles',
        desc: 'Battlefield 6 aimbot with smoothness, FOV, and kit-specific presets for large maps and CQB.',
        features: ['Smooth aimbot', 'Per-weapon profiles', 'Mode presets', 'Cloud backup'],
        more: 12,
        href: `${productBase}aimbot/`,
      },
      {
        badge: 'Vision',
        category: 'ESP',
        title: 'ESP & Wallhack',
        subtitle: 'Infantry and vehicle awareness',
        desc: 'Player wallhack, vehicle ESP, and mini-radar for reading pushes in Conquest, Breakthrough, Rush, and REDSEC.',
        features: ['Player ESP', 'Vehicle tags', '2D radar', 'Team filters'],
        more: 18,
        href: `${productBase}esp-wallhack/`,
      },
    ],
  },
  forumHome: {
    eyebrow: 'Community',
    title: 'Battlefield 6 forums',
    subtitle: 'Config shares, patch-day notes, and mode tips from players running aimbot and ESP on PC.',
    viewAll: 'Browse forums',
  },
  reviews: {
    totalLabel: '127+ reviews',
  },
  toolkit: {
    eyebrow: 'Menu layout',
    title: 'Battlefield 6 cheat menu, organized',
    subtitle: 'Modules are grouped so you can tune aimbot and ESP between deployments without hunting through tabs.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Tracking that adapts per weapon', desc: 'Smoothness, FOV, sticky aim, and bone priority in one aimbot panel.' },
      { num: '02', label: 'ESP', title: 'Wallhack that stays readable', desc: 'Boxes, skeletons, distance, health, and squad color filters.' },
      { num: '03', label: 'Vehicles', title: 'Armor and air on your radar', desc: 'Ground and air tags with distance for combined-arms fights.' },
      { num: '04', label: 'Radar', title: 'Sector picture at a glance', desc: '2D mini-radar with infantry and vehicle blips.' },
      { num: '05', label: 'Weapons', title: 'Per-weapon aimbot profiles', desc: 'Save AR, LMG, DMR, and sidearm presets and swap with hotkeys.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Conquest, Breakthrough, Rush, and REDSEC presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From plan to',
    titleHighlight: 'in-game tools.',
    subtitle: 'Choose a tier, download the loader, enable modules, and save configs for your next BF6 session.',
    ctaLabel: 'View plans',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on bf6cheat.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick a tier',
        desc: 'Choose Complete, Aimbot, or ESP & Wallhack based on the modules you need.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and configure',
        desc: 'Download from the portal, enable modules, and test in a custom or low-stakes match first.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When settings feel right, save Conquest and REDSEC presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Check Discord and the portal status before you queue ranked or event modes after a Battlefield 6 update.' },
      { num: '02', title: 'Start slow', desc: 'Use default aimbot smoothness and ESP range first, then raise them if you need more aggression.' },
      { num: '03', title: 'Discord help', desc: 'Stuck on the loader or configs? Ask in Discord and staff will walk you through it.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Battlefield 6 cheats support – loader, checkout & help',
    subtitle: 'Loader, checkout, and account help for PC players.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each plan includes.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Loader errors, license moves, and account issues.',
        linkLabel: 'support@bf6cheat.org',
        href: 'mailto:support@bf6cheat.org',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, risk, and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Support online 24/7.',
        linkLabel: 'Contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on bf6cheat.org.' },
      { title: 'Platform', desc: 'Windows 10 or 11, EA App or Steam, and your Battlefield 6 build.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Battlefield 6 cheats FAQ',
    subtitle: 'Compatibility, risk, plans, and setup—straight answers before you checkout.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Battlefield 6 cheats are online?',
        a: 'The live status banner is on bf6cheat.org and in the Discord #status channel. Always check after a Battlefield 6 or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide, and config library via our secure checkout. Follow the guide before launching Battlefield 6.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party battlefield 6 cheats?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Battlefield 6 on Windows 10/11 64-bit through EA App or Steam only. Console and macOS are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the license reset in your portal or open a Discord ticket. Limits depend on your plan.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'Complete, Aimbot, and ESP & Wallhack plans live on our battlefield6 hacks product hub with feature lists and checkout when you are ready.',
      },
    ],
  },
  footer: {
    tagline: 'Battlefield 6 cheats for PC: aimbot, ESP, wallhack, and radar.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}complete/`, label: 'Complete cheats', ariaLabel: 'Complete plan' },
      { href: `${productBase}`, label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Battlefield 6 guides', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Community forums', ariaLabel: 'Forums' },
      { href: '/reviews/', label: 'Player reviews', ariaLabel: 'Reviews' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Battlefield 6 – forums, checkout paths for PC players',
      description:
        'We publish tier comparisons, setup notes, and live status for PC players comparing aimbot, ESP, and wallhack modules before checkout.',
      sections: [
        {
          heading: 'Battlefield 6: Who we are',
          paragraphs: [
            'Battlefield 6 Hacks is an independent PC resource for aimbot, ESP, wallhack, vehicle tags, and radar products tied to EA’s large-scale shooter. We explain what each plan includes, how the loader works, and where to check live status before you queue.',
            'Product and game names on this site are for identification only. We do not represent EA, DICE, or any game publisher.',
          ],
        },
        {
          heading: 'What we offer',
          paragraphs: [
            'Complete, Aimbot, and ESP & Wallhack tiers cover different module sets on Windows 10 and 11. The forums and FAQ walk through configs, patch-day checks, and conservative presets for Conquest, Breakthrough, Rush, and REDSEC.',
            'Pages refresh when the loader or anti-cheat landscape changes. Always read the homepage status banner and Discord #status before you launch a session.',
          ],
        },
        {
          heading: 'How we stay accurate',
          paragraphs: [
            'Module lists on each product page mirror what the operator portal ships today—not outdated forum screenshots. When a patch lands, we update compatibility notes and link to setup threads that match the current build.',
            'If something on the site disagrees with your portal download, treat the portal as source of truth and open a support ticket with your order email.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use Discord or email for loader errors, compatibility, and checkout questions. Include your order email, platform (EA App or Steam), and Windows version so staff can reproduce the issue quickly.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy – cookies, contact data when you browse',
      description:
        'Your privacy matters when you browse product pages. This overview explains how bf6cheat.org handles analytics, cookies, contact messages, and secure checkout.',
      sections: [
        {
          heading: 'Privacy: Information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser, and approximate region through Google Analytics when it is enabled. Checkout runs on external pages operated by the seller. We do not store payment card numbers on bf6cheat.org.',
            'If you email support, we keep the address and message content until your ticket is resolved. Data-related requests should mention the email you used so we can locate prior threads.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which product pages people use so we can fix broken links and improve content. We do not sell personal data or share it with ad networks beyond standard analytics processors configured in our account settings.',
            'Support tickets are used only to answer loader, license, and checkout questions. Delete requests are handled manually—see the section below on retention.',
          ],
        },
        {
          heading: 'Cookies and similar tech',
          paragraphs: [
            'We use basic analytics cookies to understand traffic patterns. You can block cookies in your browser; core pages remain readable without them.',
            'Third-party checkout pages may set their own cookies when you leave this site to complete a purchase. Review the seller’s notices before paying.',
          ],
        },
        {
          heading: 'Your choices and retention',
          paragraphs: [
            'You can opt out of analytics by using private browsing modes or blocking Google Analytics. For questions about data we hold, contact us through the Support page with the subject line “Data request”.',
            'Analytics logs rotate on the provider’s schedule. Support emails are kept for a reasonable period after closure, then archived or deleted unless law requires longer retention.',
          ],
        },
        {
          heading: 'Policy updates',
          paragraphs: [
            'We may revise this policy when tooling or checkout partners change. Material updates will be reflected on this page; continued use of the site after changes means you accept the revised terms.',
            'Purchase and refund rules remain in Terms & Conditions. For billing disputes, use Support rather than this page.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for Battlefield 6 Hacks | License & Refunds',
      description:
        'Terms for buying Battlefield 6 cheats on bf6cheat.org — license use, delivery, refunds, and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using bf6cheat.org or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Battlefield 6 cheat plans (Complete, Aimbot, ESP & Wallhack) through a portal and Windows loader for EA App and Steam on PC.',
            'Product pages list what is included when you buy. Features can change when Battlefield 6 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. bf6cheat.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Battlefield 6.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. Device limits depend on your plan and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Battlefield 6 on EA App or Steam on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Battlefield 6 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue competitive modes while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Battlefield 6 Hacks Support | Loader & Checkout',
      description:
        'Battlefield 6 Hacks support for loader setup, license moves, and checkout help at bf6cheat.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Shop hack plans',
    browseCheatsMobile: 'Shop plans',
    homeAria: 'Battlefield 6 Hacks home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Battlefield 6 Hacks on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
