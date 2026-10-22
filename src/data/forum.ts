export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
}

export const forumCategories = [
  { name: 'Setup & Loader', tone: 'blue', icon: 'settings' },
  { name: 'Aimbot', tone: 'orange', icon: 'featureAimbot' },
  { name: 'ESP & Wallhack', tone: 'green', icon: 'featureEsp' },
  { name: 'Purchasing', tone: 'purple', icon: 'instantDelivery' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'General', tone: 'purple', icon: 'users' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'first-loader-setup-windows-11',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'First-time loader setup on Windows 11 — what am I missing?',
    excerpt: 'Clean install, ran as admin, still stuck at “waiting for game window”. Anyone got a checklist?',
    author: 'bf6_rookie_09',
    age: '3 hours ago',
    commentsCount: 5,
    upvotes: 94,
    flair: 'Setup help',
    body: [
      'Picked up a week key for Battlefield 6 and I cannot get past the loader screen. Game launches fine through EA App, but the client just sits on waiting for game window.',
      'I disabled overlay apps, ran the loader as administrator, and rebooted twice. Do I need to change fullscreen settings or borderless before inject?',
    ],
    comments: [
      {
        author: 'conquest_grind',
        age: '2 hours ago',
        score: 31,
        body: 'Switch to borderless windowed first. Fullscreen exclusive blocked inject for me until I changed it in video settings.',
      },
      {
        author: 'loader_wizard',
        age: '2 hours ago',
        score: 22,
        body: 'Start loader AFTER the main menu loads, not at the splash. Also close RGB software if it hooks the game.',
        replies: [
          {
            author: 'bf6_rookie_09',
            age: '1 hour ago',
            score: 8,
            body: 'Borderless + launch order fixed it. Thanks, menu inject worked on second try.',
          },
          {
            author: 'loader_wizard',
            age: '58 min. ago',
            score: 5,
            body: 'Nice. Save that profile so you do not tweak twelve things next session.',
          },
        ],
      },
      {
        author: 'still_stuck_x',
        age: '1 hour ago',
        score: -2,
        body: 'Did all that and still nothing. Support ticket open 24h with no reply which is annoying.',
      },
    ],
  },
  {
    slug: 'aimbot-smoothness-and-fov-sweet-spot',
    category: 'Aimbot',
    categoryTone: 'orange',
    title: 'Smoothness vs FOV — what actually looks natural in Breakthrough?',
    excerpt: 'Higher smooth feels lazy, lower smooth snaps on stream clips. Looking for a sane starting point.',
    author: 'soft_aim_dad',
    age: '5 hours ago',
    commentsCount: 5,
    upvotes: 118,
    flair: 'Tuning',
    body: [
      'Running Pro with aim assist features in large maps. I keep changing smoothness every match because killcam moments look either robotic or like I forgot how to aim.',
      'What FOV circle and smooth values do you leave alone for hours without second-guessing? Mostly AR and LMG at medium range.',
    ],
    comments: [
      {
        author: 'recoil_lab',
        age: '4 hours ago',
        score: 44,
        body: 'FOV 8–12 and smooth around 14–18 for AR. Drop smooth if you play aggressive CQC, raise it if you hold lanes.',
      },
      {
        author: 'stats_or_bust',
        age: '3 hours ago',
        score: 19,
        body: 'Bone priority chest at range, head only inside 15m. Looks less snap-heavy on replays.',
        replies: [
          {
            author: 'soft_aim_dad',
            age: '2 hours ago',
            score: 11,
            body: 'Tried chest priority — KD went up and it feels less obvious. Good call.',
          },
        ],
      },
      {
        author: 'honest_player',
        age: '2 hours ago',
        score: 7,
        body: 'Nothing saves bad positioning. These settings help but you still need cover discipline.',
      },
      {
        author: 'ranked_sweat',
        age: '90 min. ago',
        score: 3,
        body: 'Share your exact numbers bro, stop being vague lol',
      },
    ],
  },
  {
    slug: 'esp-boxes-too-bright-at-night-maps',
    category: 'ESP & Wallhack',
    categoryTone: 'green',
    title: 'Player ESP boxes way too bright on night maps',
    excerpt: 'Default colors blow out my vision on Hourglass night. How do you tone it down without losing readability?',
    author: 'night_owl_esp',
    age: '7 hours ago',
    commentsCount: 4,
    upvotes: 67,
    body: [
      'Love having names and distance on, but the box outline is neon green and hurts after one round.',
      'Is there a recommended opacity or a second color profile for dark maps? Single monitor 1440p if that matters.',
    ],
    comments: [
      {
        author: 'vision_tweak',
        age: '6 hours ago',
        score: 28,
        body: 'Drop outline alpha to ~60% and use a dull teal. Keep distance text white, names soft yellow.',
      },
      {
        author: 'ultrawide_mike',
        age: '5 hours ago',
        score: 14,
        body: 'Two configs: “day” and “night”. Swap with hotkey before deploy. Takes 2 sec once saved.',
        replies: [
          {
            author: 'night_owl_esp',
            age: '4 hours ago',
            score: 9,
            body: 'Night profile saved. Eyes thank you.',
          },
        ],
      },
      {
        author: 'minimal_esp',
        age: '3 hours ago',
        score: 6,
        body: 'Skeleton off, corner boxes only. Less glow, still see peeks.',
      },
    ],
  },
  {
    slug: 'vehicle-esp-worth-it-on-conquest',
    category: 'ESP & Wallhack',
    categoryTone: 'green',
    title: 'Is vehicle ESP worth turning on for Conquest?',
    excerpt: 'Tanks and transports clutter the screen. Does it actually help or just noise?',
    author: 'armor_main',
    age: '10 hours ago',
    commentsCount: 5,
    upvotes: 52,
    flair: 'Feature talk',
    body: [
      'I mostly play infantry but squad keeps yelling about helis. Vehicle ESP shows everything including abandoned jeeps.',
      'Do you filter to occupied only, or leave all vehicles for mine placement? Worried about FPS on 1060.',
    ],
    comments: [
      {
        author: 'pilot_killer',
        age: '9 hours ago',
        score: 21,
        body: 'Occupied + air only for me. Ground spawns off unless I am engineer that round.',
      },
      {
        author: 'fps_watch',
        age: '8 hours ago',
        score: 12,
        body: 'On a 1060 I would skip skeleton and limit vehicle range to 200m. Stable 70fps vs stutter.',
      },
      {
        author: 'armor_main',
        age: '7 hours ago',
        score: 4,
        body: 'Filters helped but icons still overlap in cap zones. Needs tighter UI options imo.',
        replies: [
          {
            author: 'pilot_killer',
            age: '6 hours ago',
            score: 8,
            body: 'Shrink icon scale to 0.8 in misc tab — overlap got tolerable for me.',
          },
        ],
      },
      {
        author: 'vanilla_chad',
        age: '5 hours ago',
        score: -1,
        body: 'Just learn spawn timers like the rest of us',
      },
    ],
  },
  {
    slug: 'weekly-vs-monthly-key-value',
    category: 'Purchasing',
    categoryTone: 'purple',
    title: 'Weekly vs monthly key — which is better value?',
    excerpt: 'Trying the software for a weekend event vs committing for a season pass grind.',
    author: 'budget_squad',
    age: '12 hours ago',
    commentsCount: 4,
    upvotes: 89,
    body: [
      'Friend said grab weekly to test stability after the last patch wave. I play maybe 4 nights a week.',
      'Is monthly always the smarter buy if you already know your rig runs it, or do people stack weeklies during sale periods?',
    ],
    comments: [
      {
        author: 'long_sub_gang',
        age: '11 hours ago',
        score: 33,
        body: 'If you play more than 10 sessions a month, monthly wins on price per day. Weekly is for patch uncertainty weeks.',
      },
      {
        author: 'refund_story',
        age: '10 hours ago',
        score: 9,
        body: 'Bought month, game down for 3 days after update — felt bad but support extended 72h. Still salty but fair.',
      },
      {
        author: 'budget_squad',
        age: '9 hours ago',
        score: 5,
        body: 'Went monthly. Checkout was instant, key in email under a minute.',
        replies: [
          {
            author: 'long_sub_gang',
            age: '8 hours ago',
            score: 4,
            body: 'Welcome. Pin the status page before big EA patches.',
          },
        ],
      },
    ],
  },
  {
    slug: 'payment-pending-no-key-yet',
    category: 'Purchasing',
    categoryTone: 'purple',
    title: 'Payment went through but no license key after 20 minutes',
    excerpt: 'Card charged, order shows complete, inbox empty. Normal delay or should I panic?',
    author: 'anxious_buyer',
    age: '1 day ago',
    commentsCount: 3,
    upvotes: 41,
    flair: 'Billing',
    body: [
      'Ordered a 7-day Battlefield 6 package with card. Dashboard says paid, nothing in spam either.',
      'How long does delivery usually take? Do I open a ticket or wait the full hour first?',
    ],
    comments: [
      {
        author: 'instant_mostly',
        age: '22 hours ago',
        score: 18,
        body: 'Usually under 5 min. Check portal login — key sometimes lands there before email.',
      },
      {
        author: 'support_fan',
        age: '20 hours ago',
        score: 11,
        body: 'Mine took 40 min during a patch weekend. Ticket got answer in ~2h with key resent.',
        replies: [
          {
            author: 'anxious_buyer',
            age: '18 hours ago',
            score: 6,
            body: 'Key showed in portal, email never came. All good now.',
          },
        ],
      },
    ],
  },
  {
    slug: 'patch-day-menu-not-opening',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'After today’s BF6 patch — menu key does nothing',
    excerpt: 'Game updated this morning, loader says compatible but INSERT is dead in match.',
    author: 'patch_victim',
    age: '6 hours ago',
    commentsCount: 5,
    upvotes: 103,
    flair: 'Patch day',
    body: [
      'Auto-update hit overnight. New build number on the status banner looked green so I played ranked.',
      'Overlay never opens, no crash, just silent failure. Re-download loader or wait for a micro fix?',
    ],
    comments: [
      {
        author: 'status_checker',
        age: '5 hours ago',
        score: 38,
        body: 'Always redownload when build hash changes. Old loader folder is not enough.',
      },
      {
        author: 'patch_victim',
        age: '4 hours ago',
        score: 12,
        body: 'Fresh loader fixed menu. Wish the banner updated faster though.',
        replies: [
          {
            author: 'status_checker',
            age: '4 hours ago',
            score: 15,
            body: 'They usually post within a few hours. Bot lobby test before ranked saves accounts.',
          },
        ],
      },
      {
        author: 'late_to_party',
        age: '3 hours ago',
        score: 7,
        body: 'Same here, thought I got banned for a second lol',
      },
      {
        author: 'zero_patience',
        age: '2 hours ago',
        score: -3,
        body: 'Third patch this month that broke my night. considering quitting',
      },
    ],
  },
  {
    slug: 'how-long-wait-after-game-update',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'How long do you wait after a game update before injecting?',
    excerpt: 'Some people hop in instantly, others wait a day. What’s the safe routine?',
    author: 'patient_gamer',
    age: '2 days ago',
    commentsCount: 4,
    upvotes: 76,
    body: [
      'I usually check the status feed and Discord pins before launching. Still nervous after a buddy flagged a warning last season.',
      'Do you wait for community “green light” posts or trust the official status dot alone?',
    ],
    comments: [
      {
        author: 'risk_manager',
        age: '2 days ago',
        score: 29,
        body: 'Official status + fresh loader download + one bot match. If anything feels off, close and wait.',
      },
      {
        author: 'yolo_queue',
        age: '1 day ago',
        score: 5,
        body: 'I inject same hour if banner green. Never had issue but ymmv',
      },
      {
        author: 'patient_gamer',
        age: '1 day ago',
        score: 8,
        body: 'Adopted the bot match rule. One weird stutter and I bail for the day.',
        replies: [
          {
            author: 'risk_manager',
            age: '1 day ago',
            score: 6,
            body: 'Smart. Patch days are not the time to hero queue.',
          },
        ],
      },
    ],
  },
  {
    slug: 'save-config-profiles-between-pcs',
    category: 'General',
    categoryTone: 'purple',
    title: 'Saving aimbot + ESP configs between two PCs',
    excerpt: 'Desktop and laptop — export/import or cloud sync?',
    author: 'dual_rig',
    age: '1 day ago',
    commentsCount: 5,
    upvotes: 58,
    flair: 'Configs',
    body: [
      'Built a nice recoil + ESP layout on my desktop. Laptop install is stock and I hate re-tuning every weekend.',
      'Is there an export file in the config folder or do I screenshot settings like a caveman?',
    ],
    comments: [
      {
        author: 'cloud_sync_user',
        age: '23 hours ago',
        score: 24,
        body: 'Cloud tab in menu syncs profiles if you use same license login. Took me forever to find it.',
      },
      {
        author: 'dual_rig',
        age: '22 hours ago',
        score: 10,
        body: 'Cloud pull worked on laptop. Names matched desktop slots.',
        replies: [
          {
            author: 'cloud_sync_user',
            age: '21 hours ago',
            score: 7,
            body: 'Rename profiles “desktop” / “laptop” so you do not overwrite by accident.',
          },
        ],
      },
      {
        author: 'manual_backup',
        age: '20 hours ago',
        score: 9,
        body: 'Copy the whole config directory as backup anyway. Cloud glitched once during outage.',
      },
      {
        author: 'lazy_config',
        age: '18 hours ago',
        score: 2,
        body: 'i just use one pc now too much hassle haha',
      },
    ],
  },
  {
    slug: 'obs-game-capture-showing-overlay',
    category: 'General',
    categoryTone: 'purple',
    title: 'OBS game capture still picking up the overlay?',
    excerpt: 'Stream proof enabled but VOD review shows boxes. Testing wrong or wrong capture mode?',
    author: 'small_streamer',
    age: '8 hours ago',
    commentsCount: 5,
    upvotes: 71,
    flair: 'Streaming',
    body: [
      'Toggle says stream proof on. Recorded 2 min clip with game capture, watched back — faint player boxes visible.',
      'Display capture vs game capture? Dual PC not an option right now.',
    ],
    comments: [
      {
        author: 'obs_nerd',
        age: '7 hours ago',
        score: 34,
        body: 'Use game capture, same GPU, run a 30s test recording before going live. Display capture often ignores stream proof.',
      },
      {
        author: 'small_streamer',
        age: '6 hours ago',
        score: 14,
        body: 'Switched to game capture only — clean on replay. Thx',
        replies: [
          {
            author: 'obs_nerd',
            age: '6 hours ago',
            score: 9,
            body: 'Also hide preview sources when testing. Easy to fool yourself.',
          },
        ],
      },
      {
        author: 'paranoid_stream',
        age: '5 hours ago',
        score: 11,
        body: 'Record, rewatch on phone. If you see it, viewers will on VOD.',
      },
      {
        author: 'hater_101',
        age: '4 hours ago',
        score: -4,
        body: 'maybe dont cheat on stream genius',
      },
    ],
  },
  {
    slug: 'defender-exclusion-for-loader',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Windows Defender — add exclusion or leave it?',
    excerpt: 'Quarantine pop-up once. Exclude folder or rely on built-in bypass?',
    author: 'secure_pc',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 63,
    body: [
      'Loader got flagged once, restored from quarantine, still works. Read mixed advice about exclusions making things worse.',
      'What do you do on a clean Win 11 install for Battlefield 6 sessions?',
    ],
    comments: [
      {
        author: 'it_guy_gaming',
        age: '3 days ago',
        score: 26,
        body: 'Exclude the loader folder only, not entire drive. Download from official panel each update.',
      },
      {
        author: 'no_touch_defender',
        age: '2 days ago',
        score: 8,
        body: 'Never excluded, just restore + allow. Zero issues 6 weeks.',
        replies: [
          {
            author: 'secure_pc',
            age: '2 days ago',
            score: 5,
            body: 'Trying no exclusion first. Folder whitelist if it acts up again.',
          },
        ],
      },
      {
        author: 'fresh_install',
        age: '2 days ago',
        score: 4,
        body: 'Virtual machine for testing, real rig for play. Overkill but safe.',
      },
    ],
  },
  {
    slug: 'triggerbot-vs-full-aim-sniper',
    category: 'Aimbot',
    categoryTone: 'orange',
    title: 'Triggerbot only for sniping — enough for long range?',
    excerpt: 'Want help on bolt actions without full lock looking obvious.',
    author: 'scope_creep',
    age: '1 day ago',
    commentsCount: 3,
    upvotes: 47,
    body: [
      'Full aimbot feels heavy on SVK at 150m+. Thinking triggerbot with high smooth manual aim.',
      'Anyone run trigger-only loadouts on Recon? Does it play nice with hold breath?',
    ],
    comments: [
      {
        author: 'recon_main',
        age: '22 hours ago',
        score: 19,
        body: 'Trigger + low assist FOV works. You still aim, it just fires on valid target. Looks cleaner.',
      },
      {
        author: 'clip_review',
        age: '20 hours ago',
        score: 11,
        body: 'Record yourself. Full lock snipes stand out in killcam even with smooth maxed.',
        replies: [
          {
            author: 'scope_creep',
            age: '19 hours ago',
            score: 7,
            body: 'Switched to trigger only — feels more like my old muscle memory.',
          },
        ],
      },
    ],
  },
  {
    slug: 'skeleton-esp-fps-drop-1080ti',
    category: 'ESP & Wallhack',
    categoryTone: 'green',
    title: 'Skeleton ESP melting FPS on 1080 Ti',
    excerpt: 'Drops from 110 to 70 when skeleton on in 64-player Breakthrough.',
    author: 'old_gpu_warrior',
    age: '4 days ago',
    commentsCount: 5,
    upvotes: 55,
    body: [
      'Boxes and names are fine. Skeleton on everyone in cap zone tanks frametime.',
      'Is there a max skeleton count or distance slider I missed? Or just leave it off on big modes?',
    ],
    comments: [
      {
        author: 'fps_tuner',
        age: '4 days ago',
        score: 22,
        body: 'Cap skeleton range at 75m and max 8 players. Huge win on older cards.',
      },
      {
        author: 'old_gpu_warrior',
        age: '3 days ago',
        score: 9,
        body: 'Limits helped — back to ~95 fps average.',
        replies: [
          {
            author: 'fps_tuner',
            age: '3 days ago',
            score: 6,
            body: 'Also drop shadow quality in game. Double win.',
          },
        ],
      },
      {
        author: 'minimalist_esp',
        age: '3 days ago',
        score: 13,
        body: 'Skeleton off always. Corner box + health bar tells enough.',
      },
      {
        author: 'upgrade_when',
        age: '2 days ago',
        score: 2,
        body: 'time for a new gpu tbh',
      },
    ],
  },
  {
    slug: 'head-vs-chest-bone-priority',
    category: 'Aimbot',
    categoryTone: 'orange',
    title: 'Head vs chest bone priority at range',
    excerpt: 'Headshots whiff when target strafes — chest more consistent?',
    author: 'tactical_tim',
    age: '2 days ago',
    commentsCount: 4,
    upvotes: 82,
    flair: 'Debate',
    body: [
      'Head priority looks sick when it connects but I lose trades at 40m+ on moving targets.',
      'Do you run chest past a certain distance or use dynamic bone selection if the menu has it?',
    ],
    comments: [
      {
        author: 'headshot_or_bust',
        age: '2 days ago',
        score: 15,
        body: 'Head only, lower smooth. Takes practice but TTK is worth it.',
      },
      {
        author: 'consistency_wins',
        age: '1 day ago',
        score: 27,
        body: 'Chest default, head under 20m. K/D stabilized hard after switch.',
        replies: [
          {
            author: 'tactical_tim',
            age: '1 day ago',
            score: 12,
            body: 'Testing chest default tonight. Already fewer empty bursts.',
          },
        ],
      },
      {
        author: 'mixed_bones',
        age: '1 day ago',
        score: 8,
        body: 'Dynamic if you have it — head when stationary, chest when velocity high.',
      },
    ],
  },
  {
    slug: 'new-pc-license-transfer-hwid',
    category: 'General',
    categoryTone: 'purple',
    title: 'New PC — reset HWID or just login again?',
    excerpt: 'Built a new rig, old license says device mismatch.',
    author: 'fresh_build_2026',
    age: '5 days ago',
    commentsCount: 4,
    upvotes: 49,
    body: [
      'Same account, new motherboard and SSD. Loader complains about hardware ID.',
      'Is self-service reset in the panel once a month or do I need support every time?',
    ],
    comments: [
      {
        author: 'hwid_once',
        age: '5 days ago',
        score: 20,
        body: 'Panel has reset button — used mine once when I swapped RAM sticks and it re-triggered. Took 10 min.',
      },
      {
        author: 'fresh_build_2026',
        age: '4 days ago',
        score: 11,
        body: 'Reset worked. Remember to deactivate old session first if option shows.',
        replies: [
          {
            author: 'hwid_once',
            age: '4 days ago',
            score: 7,
            body: 'Yep. Do not reset spam — they flag abuse.',
          },
        ],
      },
      {
        author: 'unlucky_reset',
        age: '3 days ago',
        score: -1,
        body: 'Support took 2 days for me. Self reset button was greyed out, no idea why.',
      },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

export function getFeaturedForumPosts(limit: number): ForumPost[] {
  return [...forumPosts].sort((a, b) => b.upvotes - a.upvotes).slice(0, limit);
}

export function getRelatedForumPosts(slugs: string[], limit = 6): ForumPost[] {
  const picked: ForumPost[] = [];
  for (const slug of slugs) {
    const post = getForumPost(slug);
    if (post) picked.push(post);
    if (picked.length >= limit) break;
  }
  return picked;
}
