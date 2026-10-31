import type { ForumPost } from './types';

const toneByCategory: Record<string, ForumPost['categoryTone']> = {
  'MW4 Discussion': 'purple',
  'Gameplay Questions': 'blue',
  'Product Questions': 'purple',
  'Setup & Support': 'green',
  'Game Updates': 'orange',
  'Features & Customization': 'blue',
  'Account & PC Questions': 'green',
  'PC Performance & Support': 'orange',
};

function post(input: Omit<ForumPost, 'categoryTone'>): ForumPost {
  return { ...input, categoryTone: toneByCategory[input.category] ?? 'purple' };
}

export const enForumPosts: ForumPost[] = [
  post({
    slug: 'modern-warfare-4-cheats-working-after-launch',
    category: 'MW4 Discussion',
    title: 'Are any Modern Warfare 4 cheats confirmed working after launch?',
    excerpt:
      'Launch-week updates make old screenshots and claims hard to judge. Here are sensible checks to make before trusting a compatibility claim.',
    author: 'QueueGoblin',
    age: '',
    published: '2026-10-26',
    commentsCount: 5,
    upvotes: 41,
    body: [
      'Has anyone figured out how to tell whether a MW4 tool listing is actually current? The game just launched and every other page seems to have a screenshot with a big "working" label slapped on it. That doesn\'t tell me when it was tested or what version it was tested on.',
      'Not asking anyone to promise anything. Just curious what people check before trusting a status page instead of wasting an evening troubleshooting something outdated.',
    ],
    comments: [
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Date of the last update, supported game version, and an actual changelog would be my first three checks. A static screenshot could be from a totally different build.',
      },
      {
        author: 'lowammo',
        age: '',
        score: 0,
        body: 'Also, "undetected" isn\'t the same as "works." People mash those two together like they\'re interchangeable lol.',
      },
      {
        author: 'QueueGoblin',
        age: '',
        score: 0,
        body: 'Exactly. A tool opening successfully doesn\'t prove the important part either.',
      },
      {
        author: 'SundayGrind',
        age: '',
        score: 0,
        body: 'I\'d look for a [current status and known issues](/cheats/) listing and [support contact](/support/) before paying for anything. If the listing can\'t say what it supports, I\'m not doing the detective work for them.',
      },
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'And check the [Modern Warfare 4 launch patch notes](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes) separately. A game patch can fix ordinary game bugs without saying anything about third-party tools. Don\'t read extra meaning into it.',
      },
    ],
  }),
  post({
    slug: 'mw4-esp-vs-minimap',
    category: 'Gameplay Questions',
    title: 'ESP vs the normal minimap in MW4: what is the actual difference?',
    excerpt:
      'A plain-language discussion of ESP terminology, in-game information, and why third-party overlays should not be confused with built-in HUD features.',
    author: 'minimapEnjoyer',
    age: '',
    published: '2026-08-14',
    commentsCount: 5,
    upvotes: 28,
    body: [
      'I keep seeing ESP and wallhack used like they\'re the same thing. Is ESP basically just the minimap with extra info, or does the term mean something different? I know people use the words loosely in clips, so I\'m trying to separate the game\'s normal HUD from what third-party tools advertise.',
    ],
    comments: [
      {
        author: 'oldschoolFPS',
        age: '',
        score: 0,
        body: 'At a basic level, ESP usually means an overlay that exposes information about players or objects beyond the normal view. A wallhack usually refers to seeing information through geometry. People often overlap the terms, but they aren\'t perfect synonyms.',
      },
      {
        author: 'minimapEnjoyer',
        age: '',
        score: 0,
        body: 'Got it. So the normal red dot or ping isn\'t automatically "ESP" just because it gives info?',
      },
      {
        author: 'oldschoolFPS',
        age: '',
        score: 0,
        body: 'Right. Use the game\'s own HUD and its official descriptions as the baseline. Third-party overlays are a separate category and can violate the game\'s rules.',
      },
      {
        author: 'scopeGremlin',
        age: '',
        score: 0,
        body: 'Gaming vocabulary has been a mess since forever. Every thumbnail calls everything a wallhack now lol.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Worth adding: a feature list isn\'t proof that a tool works as advertised or is safe for an account. Treat those as separate questions.',
      },
    ],
  }),
  post({
    slug: 'compare-mw4-cheat-listings',
    category: 'Product Questions',
    title: 'How do you compare MW4 cheat listings without trusting "undetected" banners?',
    excerpt:
      'Compare documentation, compatibility notes, support access, billing terms, and update history instead of relying on a single marketing badge.',
    author: 'tabbedOut',
    age: '',
    published: '2026-09-19',
    commentsCount: 5,
    upvotes: 33,
    body: [
      'Trying to compare listings and honestly the biggest red flag is the giant "undetected" text with no other details. What do you actually look for when comparing these pages? I\'d rather read boring documentation than trust a flashy banner, but not sure what else belongs on the checklist.',
    ],
    comments: [
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Update history, refund terms, subscription length, supported OS/game version, and a real support route. Compare [full feature and compatibility details](/cheats/) before you trust a badge. I\'d also check whether they explain limitations rather than only listing advantages.',
      },
      {
        author: 'tabbedOut',
        age: '',
        score: 0,
        body: 'Do you treat a Discord invite as support? Some pages basically have nothing else.',
      },
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Not on its own. A chat link tells you where a chat might happen, not how quickly they\'ll answer or what support includes.',
      },
      {
        author: 'oneMoreRound',
        age: '',
        score: 0,
        body: 'Price matters too, but compare the same duration. A cheap monthly price isn\'t the same thing as a lifetime price. Also read what "lifetime" actually means in the [FAQ](/faq/).',
      },
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Big one: no seller can honestly guarantee zero risk just by writing "undetected." The enforcement system can change, and marketing copy isn\'t independent verification.',
      },
    ],
  }),
  post({
    slug: 'before-buying-modern-warfare-4-tool',
    category: 'Product Questions',
    title: 'Before buying a Modern Warfare 4 tool, what should I verify first?',
    excerpt:
      'A practical pre-purchase checklist for checking scope and terms before spending money on a third-party gaming tool.',
    author: 'heldForReview',
    age: '',
    published: '2026-10-06',
    commentsCount: 5,
    upvotes: 36,
    body: [
      'What\'s your must-check list before buying a third-party MW4 tool? I don\'t need a sales pitch, just the stuff that saves you from buying something that doesn\'t match your setup or finding out the terms are different from what you assumed.',
    ],
    comments: [
      {
        author: 'ctrlAltDefeat',
        age: '',
        score: 0,
        body: 'Platform first. PC and console support are not interchangeable, and "Call of Duty supported" is too vague. Look for the exact title and version.',
      },
      {
        author: 'heldForReview',
        age: '',
        score: 0,
        body: 'Yeah, the page I\'m looking at is not super clear on version details.',
      },
      {
        author: 'ctrlAltDefeat',
        age: '',
        score: 0,
        body: 'Then ask [support](/support/) before buying. If the answer is vague, that\'s an answer too.',
      },
      {
        author: 'menuDiver',
        age: '',
        score: 0,
        body: 'Also check whether it auto-renews, how long the license lasts, what happens if the product is temporarily unavailable, and how you contact support. Boring stuff, but boring stuff costs money.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'I\'d add account risk to that list. Even a detailed seller page can\'t guarantee you\'ll avoid enforcement. Check the game\'s official rules and decide whether that risk is acceptable before installing anything.',
      },
    ],
  }),
  post({
    slug: 'mw4-third-party-tool-not-launching',
    category: 'Setup & Support',
    title: 'A third-party MW4 utility won\'t launch. What should I check without disabling Windows security?',
    excerpt:
      'Start with version and documentation checks, then gather useful error details. Avoid risky "fixes" that disable security tools or change anti-cheat protections.',
    author: 'rebootEnjoyer',
    age: '',
    published: '2026-07-31',
    commentsCount: 5,
    upvotes: 22,
    body: [
      'General troubleshooting question: a third-party MW4 utility won\'t open and gives almost no useful error. What\'s the sane order of checks? I\'m not looking for a workaround that involves turning off Defender or messing with anti-cheat services. That sounds like a great way to make a normal problem much worse.',
    ],
    comments: [
      {
        author: 'logsPls',
        age: '',
        score: 0,
        body: 'Start by writing down the exact error and checking the tool\'s documented OS and game-version requirements. "Doesn\'t work" is hard to diagnose; the actual message matters.',
      },
      {
        author: 'rebootEnjoyer',
        age: '',
        score: 0,
        body: 'It\'s basically just closing after I launch it. No message.',
      },
      {
        author: 'logsPls',
        age: '',
        score: 0,
        body: 'Then check the official product instructions and the [status listing](/cheats/), and confirm you got the installer from the legitimate source. Don\'t grab random DLLs or "fixed loaders" from a file host.',
      },
      {
        author: 'quietPC',
        age: '',
        score: 0,
        body: 'Also check Windows Event Viewer if you\'re comfortable with it, and note the time it closes. That can give you an error to pass to support. Don\'t upload personal logs publicly without checking them first.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'If it requires disabling security features or tampering with game protection, I\'d stop there. At minimum it\'s a security risk, and it\'s not something I\'d tell another player to do blindly.',
      },
    ],
  }),
  post({
    slug: 'mw4-october-25-update-tool-compatibility',
    category: 'Game Updates',
    title: 'Did the October 25 MW4 patch change anything about third-party tool compatibility?',
    excerpt:
      'The October 25 patch notes describe game fixes and adjustments, but they do not establish whether any third-party tool is compatible or undetected.',
    author: 'PatchGoblin',
    age: '',
    published: '2026-10-27',
    commentsCount: 5,
    upvotes: 39,
    body: [
      'I saw the [October 25 launch patch notes](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes) and now a few pages are posting vague "updated" labels. Does the official patch note tell us anything about third-party tool support, or are people just connecting dots because the dates line up?',
    ],
    comments: [
      {
        author: 'changelogReader',
        age: '',
        score: 0,
        body: 'The official notes list game fixes and adjustments. That isn\'t the same as a statement that some external tool works. I wouldn\'t infer compatibility from the patch date alone.',
      },
      {
        author: 'PatchGoblin',
        age: '',
        score: 0,
        body: 'That\'s what I thought. "Updated today" can mean they changed a web page, too.',
      },
      {
        author: 'smallPrintEnjoyer',
        age: '',
        score: 0,
        body: 'Exactly. Look for a specific version number and a clear explanation of what was tested. If those aren\'t there, the status is still unconfirmed from the reader\'s point of view.',
      },
      {
        author: 'pingSpikes',
        age: '',
        score: 0,
        body: 'And read the official notes for the actual game changes. A tool seller\'s [latest product status](/cheats/) page is a different source with a different incentive.',
      },
      {
        author: 'changelogReader',
        age: '',
        score: 0,
        body: 'Even a claimed compatibility test doesn\'t prove there\'s no account risk. Those are separate things.',
      },
    ],
  }),
  post({
    slug: 'mw4-skin-changer-cosmetic-visibility',
    category: 'Features & Customization',
    title: 'Do skin changers make cosmetics visible to everyone or only on your own screen?',
    excerpt:
      'A cosmetic feature discussion focused on local display versus other players\' views, with a reminder not to assume support for a game that the product page does not explicitly list.',
    author: 'camoCollector',
    age: '',
    published: '2026-09-08',
    commentsCount: 5,
    upvotes: 26,
    body: [
      'Question about skin changers in general: if a cosmetic appears on your screen, does that mean everyone else in the match sees it too? Or can it be client-side only? I\'m not assuming every tool works the same, just trying to understand what a listing should explain before anyone buys one.',
    ],
    comments: [
      {
        author: 'localOnlyMaybe',
        age: '',
        score: 0,
        body: 'It depends on the game and implementation. A local visual change isn\'t proof that the server or other players see the same thing.',
      },
      {
        author: 'camoCollector',
        age: '',
        score: 0,
        body: 'So a screenshot doesn\'t settle it, basically.',
      },
      {
        author: 'localOnlyMaybe',
        age: '',
        score: 0,
        body: 'Right. It shows what was on that screen at that moment. It doesn\'t automatically establish multiplayer visibility or which titles are supported.',
      },
      {
        author: 'patchNotesDad',
        age: '',
        score: 0,
        body: 'I\'d look for the exact game listed on the [skin changer feature details](/skin-changer/) page and a clear explanation of limitations. If it just says "all games" with no actual compatibility list, ask support before spending money.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'And cosmetic manipulation in online games can still violate the game\'s rules. "Only skins" isn\'t a universal exemption.',
      },
    ],
  }),
  post({
    slug: 'skin-changer-hvci-core-isolation-tpm-secure-boot',
    category: 'Setup & Support',
    title: 'HVCI, Core Isolation, TPM and Secure Boot are listed as requirements. Should I change them?',
    excerpt:
      'If a product lists Windows security requirements, verify them in its official documentation and do not disable protections just to force compatibility.',
    author: 'settingsMenuMaze',
    age: '',
    published: '2026-08-27',
    commentsCount: 5,
    upvotes: 24,
    body: [
      'The [skin changer](/skin-changer/) page lists HVCI, Core Isolation, TPM and Secure Boot. I know those are Windows/security related, but I don\'t want to blindly flip BIOS or security settings because some tool says so. Is the right move just to verify the requirements and ask support if my PC doesn\'t meet them?',
    ],
    comments: [
      {
        author: 'biosIsNotAPlayground',
        age: '',
        score: 0,
        body: 'Yes. Verify the exact requirement from the official documentation first. Don\'t change firmware settings unless you understand what you\'re changing and have a reason to do so.',
      },
      {
        author: 'settingsMenuMaze',
        age: '',
        score: 0,
        body: 'That\'s the part I needed to hear. The instructions online are all over the place.',
      },
      {
        author: 'supportTicket42',
        age: '',
        score: 0,
        body: 'The listed requirements are a compatibility statement, not a reason to switch off security. If the tool conflicts with protections already enabled, ask the provider what is supported instead of following a random forum post.',
      },
      {
        author: 'windowedMode',
        age: '',
        score: 0,
        body: 'Also worth separating "my PC meets the requirement" from "the product supports this game." Those are two different checks.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'And if the only suggested fix is disabling a security feature, I would not treat that as a routine setup step.',
      },
    ],
  }),
  post({
    slug: 'hwid-spoofer-what-it-changes',
    category: 'Account & PC Questions',
    title: 'What does an HWID spoofer actually change, and does it remove an account ban?',
    excerpt:
      'An HWID spoofer is commonly described as changing device identifiers, but that should not be confused with reversing an account-level penalty or guaranteeing access again.',
    author: 'hardwareCurious',
    age: '',
    published: '2026-10-12',
    commentsCount: 5,
    upvotes: 31,
    body: [
      'Can someone explain HWID spoofing in normal language? I see listings talk about changing hardware identifiers and "ban recovery," but that sounds like people might be mixing up a device restriction with an account ban. Are those actually the same thing?',
    ],
    comments: [
      {
        author: 'plainEnglishPC',
        age: '',
        score: 0,
        body: 'No, they\'re not automatically the same. HWID usually refers to hardware or device identifiers. An account penalty is a separate enforcement action, and changing an identifier doesn\'t inherently reverse the account decision.',
      },
      {
        author: 'hardwareCurious',
        age: '',
        score: 0,
        body: 'So "gets you unbanned" is too broad a claim unless they can specify what kind of restriction they mean?',
      },
      {
        author: 'plainEnglishPC',
        age: '',
        score: 0,
        body: 'I\'d treat it as a claim to verify, and I\'d start with official appeal/support channels for an actual account penalty. Don\'t assume a device tool can undo an account action.',
      },
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Also check which games and anti-cheat systems the [HWID Spoofer](/hwid-spoofer/) page explicitly supports. A list for other titles is not proof of support for MW4.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Trying to evade a game\'s enforcement can lead to more trouble. Official appeal routes are the sensible option if you think a penalty is mistaken.',
      },
    ],
  }),
  post({
    slug: 'ugc-tool-account-recovery-or-mw4-cheat',
    category: 'Product Questions',
    title: 'What is "UGC" on this product page: a MW4 gameplay tool or an account appeal workspace?',
    excerpt:
      'When a listing describes both account-recovery workflows and gameplay features, ask for a clear scope statement rather than assuming it is a MW4-compatible product.',
    author: 'whatEvenIsUGC',
    age: '',
    published: '2026-07-29',
    commentsCount: 5,
    upvotes: 19,
    body: [
      'I\'m confused by the term UGC on a product listing. The description talks about account recovery and appeal workflows, but the same page also has gameplay-tool language. Is this meant to be a Modern Warfare 4 cheat, or something else? I don\'t want to guess from a product name.',
    ],
    comments: [
      {
        author: 'readTheFinePrint',
        age: '',
        score: 0,
        body: 'I\'d ask the provider for a plain list of what the product actually does and which games it supports. The [UGC](/ugc/) page\'s account-recovery description alone doesn\'t establish MW4 compatibility.',
      },
      {
        author: 'whatEvenIsUGC',
        age: '',
        score: 0,
        body: 'Yeah, that\'s the part that threw me. The name doesn\'t explain the use case at all.',
      },
      {
        author: 'readTheFinePrint',
        age: '',
        score: 0,
        body: 'Then don\'t treat it as a MW4 gameplay tool until the product page or support confirms that directly. Requirements and compatibility are separate fields, too.',
      },
      {
        author: 'menuDiver',
        age: '',
        score: 0,
        body: 'A clear product page should say its purpose in one sentence, then list features, supported products, requirements and limitations. If you have to decode it, the page needs work.',
      },
      {
        author: 'accountHelpFirst',
        age: '',
        score: 0,
        body: 'For an actual account restriction, use the game\'s official appeal process. Automation tools aren\'t a guarantee that an appeal will succeed.',
      },
    ],
  }),
  post({
    slug: 'mw4-aim-assist-vs-aimbot',
    category: 'Gameplay Questions',
    title: 'Aim assist vs aimbot in MW4: why do people use the terms interchangeably?',
    excerpt:
      'Aim assist is a game-designed input feature; an aimbot is a third-party tool category that automates aiming. The terms are not interchangeable.',
    author: 'stickDriftEnjoyer',
    age: '',
    published: '2026-09-29',
    commentsCount: 5,
    upvotes: 30,
    body: [
      'Can we retire the habit of calling every good controller clip an aimbot? I know what the words mean in theory, but people throw them around whenever somebody wins a gunfight. What\'s the clean distinction, and where should a normal player start if they just want their aim to feel less awful?',
    ],
    comments: [
      {
        author: 'settingsNerd',
        age: '',
        score: 0,
        body: 'Aim assist is built into a game to help controller input behave more consistently. An aimbot is a third-party automation tool intended to aim for the player. They\'re not the same thing.',
      },
      {
        author: 'stickDriftEnjoyer',
        age: '',
        score: 0,
        body: 'Thank you. Sometimes I watch a clip and the comments are already writing a court case lol.',
      },
      {
        author: 'settingsNerd',
        age: '',
        score: 0,
        body: 'For normal tuning, use the game\'s own settings, practice range if available, and one change at a time. Don\'t copy a random "best settings" list without testing it on your setup.',
      },
      {
        author: 'keyboardEnjoyer',
        age: '',
        score: 0,
        body: 'And a killcam isn\'t perfect evidence by itself. It can look weird because of latency, perspective, or the clip starting halfway through a fight.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'If you\'re comparing your aim to a [third-party tool](/blog/are-modern-warfare-4-cheats-safe/), remember that automation can violate game rules. You don\'t need one to start with sensitivity and recoil practice.',
      },
    ],
  }),
  post({
    slug: 'mw4-third-party-cheat-ban-risk',
    category: 'Account & PC Questions',
    title: 'Can third-party MW4 cheats get an account flagged even when a seller says "safe"?',
    excerpt:
      'No third-party seller banner can guarantee that an account will never be flagged. Players should check the official rules and understand the risk before installing anything.',
    author: 'lastMatchMaybe',
    age: '',
    published: '2026-10-24',
    commentsCount: 5,
    upvotes: 44,
    body: [
      'Honest question: if a seller calls a MW4 tool "safe" or "undetected," how much confidence should that actually give you? I keep seeing absolute wording, but anti-cheat systems update and the terms can be vague. Not asking for a bypass, just trying to understand the risk side before making a dumb decision.',
    ],
    comments: [
      {
        author: 'policyReader',
        age: '',
        score: 0,
        body: 'I\'d give the banner very little weight. It\'s a seller\'s claim, not a guarantee from the game publisher and not proof that your account can\'t be actioned later.',
      },
      {
        author: 'lastMatchMaybe',
        age: '',
        score: 0,
        body: 'That\'s what I figured. "No reports yet" and "can\'t get detected" aren\'t the same statement either.',
      },
      {
        author: 'policyReader',
        age: '',
        score: 0,
        body: 'Exactly. And even a product that launches normally can still violate the game rules. Check the official policy and the [stated limitations on the product page](/cheats/), and assume there\'s risk rather than treating a marketing label as insurance.',
      },
      {
        author: 'saltyLobby',
        age: '',
        score: 0,
        body: 'If a page literally guarantees zero bans forever, I\'m closing the tab. Nothing online works like that.',
      },
      {
        author: 'accountHelpFirst',
        age: '',
        score: 0,
        body: 'If you\'re worried about an existing enforcement action, use official support or appeals. Avoid tools or sellers that promise they can erase every kind of ban.',
      },
    ],
  }),
  post({
    slug: 'monthly-vs-lifetime-cheat-license',
    category: 'Product Questions',
    title: 'Monthly vs lifetime licenses: what should I compare before choosing?',
    excerpt:
      'Compare license terms and what happens if support or compatibility changes; don\'t assume "lifetime" means guaranteed forever under every condition.',
    author: 'invoicePending',
    age: '',
    published: '2026-08-03',
    commentsCount: 5,
    upvotes: 27,
    body: [
      'When a tool offers monthly and lifetime access, how do you decide which makes sense? I know it depends on the person, but I\'m mostly wondering what fine print people check. "Lifetime" sounds straightforward until you start asking whose lifetime and what happens after an update.',
    ],
    comments: [
      {
        author: 'oneMonthAtATime',
        age: '',
        score: 0,
        body: 'Compare the actual term first. Monthly should say when it renews or expires. Lifetime should explain what lifetime access covers and whether support/updates are included.',
      },
      {
        author: 'invoicePending',
        age: '',
        score: 0,
        body: 'Would you ever pay lifetime up front for a product that launched recently?',
      },
      {
        author: 'oneMonthAtATime',
        age: '',
        score: 0,
        body: 'Personally I\'d be cautious. A longer license doesn\'t remove compatibility uncertainty or account risk. I\'m not saying monthly is automatically good either; the terms matter more than the label.',
      },
      {
        author: 'spreadsheetWarrior',
        age: '',
        score: 0,
        body: 'Calculate the break-even point, then ask whether you\'d still choose it if updates paused or your setup stopped being supported. If that answer is no, at least factor it into the decision.',
      },
      {
        author: 'quietPC',
        age: '',
        score: 0,
        body: 'And save a copy of the terms you bought under. It\'s easier to resolve billing confusion when you have the exact wording.',
      },
    ],
  }),
  post({
    slug: 'mw4-overlay-stutter-troubleshooting',
    category: 'PC Performance & Support',
    title: 'MW4 stutters after I install an overlay. How do I narrow down the cause?',
    excerpt:
      'Isolate the problem methodically: record settings, test one change at a time, check game and driver updates, and remove untrusted overlays if the issue persists.',
    author: 'frametimeFan',
    age: '',
    published: '2026-10-18',
    commentsCount: 5,
    upvotes: 29,
    body: [
      'My frame pacing got noticeably worse after I added an overlay to my PC setup. Not blaming MW4 yet because I changed a couple of things around the same time. What\'s the clean way to isolate it instead of randomly changing every graphics setting and forgetting what I did?',
    ],
    comments: [
      {
        author: 'graphPaperGPU',
        age: '',
        score: 0,
        body: 'Write down the current settings first. Then test with the overlay removed or disabled using its normal uninstall/exit process, restart the game, and compare the same map or workload. Change one variable at a time.',
      },
      {
        author: 'frametimeFan',
        age: '',
        score: 0,
        body: 'I definitely changed three things at once, so that\'s on me.',
      },
      {
        author: 'graphPaperGPU',
        age: '',
        score: 0,
        body: 'We\'ve all done it. Check [Modern Warfare 4 game performance help](https://support.activision.com/uk/en/modern-warfare-4) and your GPU driver version too. Keep an eye on frametime, not just the average FPS number.',
      },
      {
        author: 'safeModePlease',
        age: '',
        score: 0,
        body: 'If the overlay came from an unfamiliar download or asks you to run unknown drivers, remove it and scan the system. A few frames aren\'t worth trusting a mystery executable.',
      },
      {
        author: 'queueGoblin',
        age: '',
        score: 0,
        body: 'Also make sure you aren\'t comparing a quiet training area to a chaotic multiplayer match. Same test conditions, otherwise the numbers are basically vibes.',
      },
    ],
  }),
];
