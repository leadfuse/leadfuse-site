/* LEADFUSE careers: the roles. Read by /careers/ (the cards) and /careers/apply/ (the form).

   FLIP A SEAT HERE. "open" shows the Open now badge. "pool" shows Talent pool and the line
   "Not hiring right now. Apply and we'll reach out when a seat opens."
   Change the word, commit, push. Both pages follow within a few minutes. */
window.LF_ROLE_STATUS = {
  "phone-setter":   "open",
  "dm-setter":      "open",
  "closer":         "pool",
  "video-editor":   "pool",
  "media-buyer":    "pool",
  "ghl-specialist": "pool",
  "other":          "pool"
};

/* What each card and the application form say for each role.
   slug   = the link (/careers/apply/?role=slug) and the App tag "talent | slug". Never rename a posted slug.
   title  = the card headline. label = how the form and the App name the role.
   sales  = true adds "Sales seats are paid on cash collected." to the pay line.
   english = "required" or "optional" on the form.
   loom   = the three questions the applicant answers in the Loom (shown on the form's Loom step).
   proof  = the form's optional proof question for this role. */
window.LF_ROLES = [
  {
    slug: "phone-setter",
    title: "Phone Setter",
    label: "Phone Setter",
    sales: true,
    english: "required",
    does: "You call new applicants within minutes of them applying. You find out if they fit, confirm the calls that are booked, and keep the calendar full.",
    fit: [
      "You'd rather talk than text.",
      "A no doesn't ruin your day. You make the next call.",
      "You show up on time, every shift."
    ],
    loom: [
      "Why would you be good on the phone with a shop owner?",
      "Tell me about a time you got told no. What did you do next?",
      "A lead picks up and says \"I'm busy.\" What do you say?"
    ],
    proof: { q: "If you've set or closed before, what was your set rate or close rate?", hint: "Skip it if you haven't. If you have, be ready to show proof." }
  },
  {
    slug: "dm-setter",
    title: "DM Setter, Instagram",
    label: "DM Setter, Instagram",
    sales: true,
    english: "required",
    does: "You start real conversations with shop owners in Instagram DMs. No spam. No messages that sound like a script. You book a call with the ones who fit.",
    fit: [
      "You write like a real person, not a bot.",
      "You ask good questions and listen to the answers.",
      "You follow up without being pushy."
    ],
    loom: [
      "Read me the first DM you'd send a detailing shop owner. Why that message?",
      "Tell me about a time someone ignored you. What did you do next?",
      "A shop owner asks \"how much?\" in his second message. What do you send back?"
    ],
    proof: { q: "If you've set or closed before, what was your set rate or close rate?", hint: "Skip it if you haven't. If you have, be ready to show proof." }
  },
  {
    slug: "closer",
    title: "Closer",
    label: "Closer",
    sales: true,
    english: "required",
    does: "You run the free discovery call with shop owners. You find out what's broken, then tell them the truth about fit and price. Even when the truth is no.",
    fit: [
      "You've closed high-ticket deals on the phone or on Zoom.",
      "You'd rather lose a sale than close a bad fit.",
      "You want your calls reviewed so you get better."
    ],
    loom: [
      "Tell me about the biggest deal you've closed. How did the call go?",
      "Tell me about a time you told a buyer he wasn't a fit. What happened?",
      "An owner says \"I need to think about it.\" What do you say?"
    ],
    proof: { q: "If you've set or closed before, what was your set rate or close rate?", hint: "Skip it if you haven't. If you have, be ready to show proof." }
  },
  {
    slug: "video-editor",
    title: "Video Editor",
    label: "Video Editor",
    sales: false,
    english: "optional",
    does: "You edit short-form ads from footage our clients shoot in their shops. Hooks first. Every second has to earn the next one.",
    fit: [
      "You cut fast in Premiere, Final Cut or CapCut.",
      "You know the first 3 seconds decide if anyone watches.",
      "You take notes and turn edits around quickly."
    ],
    loom: [
      "Show me one edit you're proud of. Why do the first 3 seconds work?",
      "How would you cut a 60 second ceramic coating clip into a 20 second ad?",
      "Tell me about feedback you got on an edit. What did you change?"
    ],
    proof: { q: "Link to your best edits.", hint: "A portfolio, a Drive folder or YouTube." }
  },
  {
    slug: "media-buyer",
    title: "Media Buyer, Meta",
    label: "Media Buyer, Meta",
    sales: false,
    english: "optional",
    does: "You run and audit Meta campaigns for detailing and protection shops. You're judged on booked jobs, not on how many leads came in.",
    fit: [
      "You've spent real money on Meta ads and can show what happened.",
      "You care what a booked job costs, not what a click costs.",
      "You can explain a bad week in plain words."
    ],
    loom: [
      "Share your screen on a campaign you ran. What worked, and what did you turn off?",
      "Leads are coming in but nobody books. Where do you look first?",
      "How do you tell an upset client about a bad week?"
    ],
    proof: { q: "Link to an account or campaign you're proud of, or describe the result.", hint: "" }
  },
  {
    slug: "ghl-specialist",
    title: "GoHighLevel Specialist",
    label: "GoHighLevel Specialist",
    sales: false,
    english: "required",
    does: "You build and fix client CRMs in GoHighLevel. Workflows, calendars, pipelines and A2P texting, set up right and kept clean.",
    fit: [
      "You've built real workflows in GoHighLevel.",
      "You know why A2P registrations get rejected.",
      "You write down what you build so the next person gets it."
    ],
    loom: [
      "Share your screen on a workflow you built. What does it do, and why did you build it that way?",
      "A client's texts stopped sending. How do you find out why?",
      "Tell me about a build you got wrong. How did you fix it?"
    ],
    proof: { q: "Link to a build you've done.", hint: "Screenshots, a Loom or a snapshot." }
  },
  {
    slug: "other",
    title: "Don't See Your Role?",
    label: "Something else",
    sales: false,
    english: "required",
    does: "Tell us what you'd do here. If you see something we should fix, show us how you'd fix it.",
    fit: [
      "You can show work you've done before.",
      "You can name the problem you'd solve for us.",
      "You're coachable. You want feedback."
    ],
    loom: [
      "What would you do at LEADFUSE? Be specific.",
      "Show me proof you've done that work before.",
      "Tell me about feedback that changed how you work."
    ],
    proof: { q: "Got proof of your work? Link it or describe it.", hint: "" }
  }
];
