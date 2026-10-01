// FIN 437 Exam 1 — question bank
// Sourced from: 9/30 exam review notes, site due diligence deck (9/16-9/18),
// team members deck (9/21), class notes 9/09-9/21.
// Each question carries a concept tag; the engine uses tags to target weak areas.

const CONCEPTS = {
  units:      { name: "Units of Measure",        blurb: "43,560 / 27 / 1,613 — the conversion constants." },
  wetland:    { name: "Wetlands & Jurisdiction", blurb: "The 0.2-acre limit, isolated vs. connected, mitigation." },
  sitemath:   { name: "Site Math",               blurb: "Acreage, soil volume, cost calculations." },
  parking:    { name: "Parking Layout",          blurb: "Bays, drive aisles, stall counts, return on parking." },
  stages:     { name: "Development Stages 1–3",  blurb: "Inception, idea refinement, feasibility." },
  dd:         { name: "Due Diligence",           blurb: "What it is, what services it includes, bad outcomes." },
  team:       { name: "The Development Team",    blurb: "Who's on it, ranking factors, how you interact." },
  precon:     { name: "Pre-Construction",        blurb: "What pre-con is and why it drives cost and schedule." },
  risk:       { name: "Risk & Contracts",        blurb: "Defining risk, contract language, liability." },
  ch12:       { name: "Chapter 12 Reading",      blurb: "Concept stage, site control dilemma, residual analysis, growth models." },
  chain:      { name: "Chain of Command",        blurb: "Who hires whom, equity vs. debt, the cast of characters." }
};

// type: "mc" (one answer), "multi" (several/none correct), "tf", "num" (numeric entry)
const QUESTIONS = [

  // ---------- UNITS ----------
  { id:"u1", concept:"units", type:"mc",
    q:"How many square feet are in one acre?",
    choices:["27,000","43,560","1,613","5,280"], answer:1,
    why:"43,560 sq ft per acre. Write it in the margin the second you get the exam." },

  { id:"u2", concept:"units", type:"mc",
    q:"One cubic yard equals how many cubic feet?",
    choices:["9","27","36","43.56"], answer:1,
    why:"27 cubic feet. It's 3×3×3 — a yard on each side." },

  { id:"u3", concept:"units", type:"mc",
    q:"One acre of soil at one foot of depth equals approximately how many cubic yards?",
    choices:["1,613","43,560","27","160"], answer:0,
    why:"1,613 cu yd. It comes straight from 43,560 ÷ 27 — rebuild it that way if you blank." },

  { id:"u4", concept:"units", type:"num",
    q:"What is 0.2 acres expressed in square feet?",
    answer:8712, tolerance:0,
    hint:"Divide 43,560 by 5. Shortcut: divide by 10, then double.",
    why:"8,712 sq ft. This is the most important derived number on the exam — every wetland size question compares against it." },

  { id:"u5", concept:"units", type:"mc",
    q:"Quantities of dirt or soil are measured in:",
    choices:["Square feet","Cubic yards","Acres","Linear feet"], answer:1,
    why:"Cubic yards. Cubic feet is only the intermediate step — you convert to yards by dividing by 27." },

  { id:"u6", concept:"units", type:"mc",
    q:"The cost of handling, moving, importing, or exporting dirt is expressed as:",
    choices:["$ per square foot","$ per cubic yard","$ per acre","$ per linear foot"], answer:1,
    why:"$ per cubic yard — matching the unit dirt is measured in." },

  { id:"u7", concept:"units", type:"num",
    q:"How many square feet is a 2.5 acre site?",
    answer:108900, tolerance:0,
    hint:"43,560 × 2, then add half of 43,560.",
    why:"87,120 + 21,780 = 108,900 sq ft. Break multiplication into pieces instead of doing it long-hand." },

  { id:"u8", concept:"units", type:"mc",
    q:"A building footprint of 21,780 sq ft is what fraction of an acre?",
    choices:["One quarter","One half","One fifth","Three quarters"], answer:1,
    why:"Exactly half. 21,780 is one of the benchmarks worth writing down before you start." },

  { id:"u9", concept:"units", type:"multi",
    q:"Which of the following are measured in acres? (Several, one, or none may be correct.)",
    choices:["Land masses","Building footprints","Quantities of soil","Drive aisle width"],
    answers:[0],
    why:"Only land masses. Footprints are square feet, soil is cubic yards, aisle width is linear feet." },

  // ---------- WETLANDS ----------
  { id:"w1", concept:"wetland", type:"num",
    q:"You pace off a wetland at 90 ft × 60 ft. How many square feet is it?",
    answer:5400, tolerance:0,
    hint:"9 × 6 = 54, then put the two zeros back.",
    why:"5,400 sq ft. Strip the zeros, multiply the small numbers, restore the zeros." },

  { id:"w2", concept:"wetland", type:"mc",
    q:"A wetland measures 5,400 sq ft. Is it more or less than 0.2 acres?",
    choices:["More than 0.2 acres","Less than 0.2 acres","Exactly 0.2 acres","Not enough information"], answer:1,
    why:"Less. 0.2 acres = 8,712 sq ft, and 5,400 is comfortably under it. No division needed — just compare." },

  { id:"w3", concept:"wetland", type:"num",
    q:"You pace a wetland at 80 ft × 95 ft. How many square feet?",
    answer:7600, tolerance:0,
    hint:"8 × 95 = 760, then add the zero.",
    why:"7,600 sq ft — still under 8,712, so under 0.2 acres." },

  { id:"w4", concept:"wetland", type:"tf",
    q:"An isolated wetland of 0.3 acres can be filled without mitigation.",
    answer:false,
    why:"False. 0.3 exceeds the 0.2-acre limit, so it's jurisdictional and requires mitigation or replacement." },

  { id:"w5", concept:"wetland", type:"mc",
    q:"A wetland measures 70 ft × 100 ft and is connected to a creek that runs off-site. Is it jurisdictional?",
    choices:[
      "No — 7,000 sq ft is under the 0.2-acre limit",
      "Yes — connection to other waters makes it jurisdictional regardless of size",
      "No — only wetlands over one acre are jurisdictional",
      "Not enough information to decide"],
    answer:1,
    why:"This is the trap. The 0.2-acre limit only applies to ISOLATED wetlands. Connected means jurisdictional at any size. Check connectivity before you check size." },

  { id:"w6", concept:"wetland", type:"multi",
    q:"A wetland is jurisdictional when: (Several, one, or none may be correct.)",
    choices:[
      "It is connected to other waters",
      "It is isolated and over 0.2 acres",
      "It is isolated and under 0.2 acres",
      "It sits on a site larger than one acre"],
    answers:[0,1],
    why:"Both A and B. Connected = jurisdictional regardless of size; isolated only escapes if it's under 0.2 acres. Site size is irrelevant." },

  { id:"w7", concept:"wetland", type:"tf",
    q:"Mitigation of a jurisdictional wetland can only be done off-site at a wetlands bank.",
    answer:false,
    why:"False. Mitigation involves replacement at another location ON site, OR off-site at a wetlands bank. Both are options." },

  { id:"w8", concept:"wetland", type:"mc",
    q:"What does 'step it off conservatively' mean when pacing a wetland?",
    choices:[
      "Round your measurement down to stay under the limit",
      "Round your measurement up, so you don't understate the impact",
      "Measure it exactly with a tape",
      "Take the average of three attempts"],
    answer:1,
    why:"Round UP. Under-measuring could put you below 0.2 acres when the real wetland is above it — you'd budget to fill something you're not allowed to fill and find out late." },

  { id:"w9", concept:"wetland", type:"mc",
    q:"A wetland survey identifies and quantifies potential wetlands as defined under which law?",
    choices:["The Clean Air Act","The Clean Water Act","The Endangered Species Act","The National Environmental Policy Act"],
    answer:1,
    why:"The federal Clean Water Act — that's the wording from the due diligence deck." },

  { id:"w10", concept:"wetland", type:"mc",
    q:"An isolated wetland measures 100 ft × 100 ft. Can the developer plow it over?",
    choices:[
      "Yes — 10,000 sq ft is under the limit",
      "No — 10,000 sq ft exceeds 8,712 sq ft, so it's over 0.2 acres",
      "Yes — isolated wetlands are never jurisdictional",
      "No — isolated wetlands always require mitigation"],
    answer:1,
    why:"10,000 > 8,712, so it's over 0.2 acres and jurisdictional despite being isolated. Both conditions have to be met to fill it." },

  // ---------- SITE MATH ----------
  { id:"s1", concept:"sitemath", type:"num",
    q:"You have 3 acres of unsuitable soil at 2 feet of depth. How many cubic yards must be removed?",
    answer:9678, tolerance:0,
    hint:"acres × depth in feet × 1,613.",
    why:"3 × 2 × 1,613 = 9,678 cu yd. (1,600×6 = 9,600, plus 13×6 = 78.)" },

  { id:"s2", concept:"sitemath", type:"num",
    q:"You have 4 acres of unsuitable soil at 18 INCHES of depth. How many cubic yards must be removed?",
    answer:9678, tolerance:0,
    hint:"Convert inches to feet first. 18 inches = 1.5 ft.",
    why:"4 × 1.5 × 1,613 = 9,678 cu yd. The inches-to-feet conversion is the whole trick — if you used 18, you were off by 12×." },

  { id:"s3", concept:"sitemath", type:"num",
    q:"9,678 cubic yards of soil must be removed at $15 per cubic yard. What is the cost in dollars?",
    answer:145170, tolerance:0,
    hint:"Break it up: ×10, then ×5, then add.",
    why:"96,780 + 48,390 = $145,170." },

  { id:"s4", concept:"sitemath", type:"mc",
    q:"A developer wants a 'balanced site.' What does that mean?",
    choices:[
      "The budget for sitework equals the budget for vertical construction",
      "Cut and fill are roughly equal, so dirt doesn't have to be hauled in or out",
      "The site has an equal mix of wetlands and buildable land",
      "Parking spaces are evenly distributed across the site"],
    answer:1,
    why:"Cut equals fill. Importing and exporting dirt both cost money, so a balanced site avoids that expense entirely." },

  { id:"s5", concept:"sitemath", type:"mc",
    q:"You're given a soil area in square feet rather than acres. What do you do?",
    choices:[
      "Multiply by 1,613 directly",
      "Multiply by depth to get cubic feet, then divide by 27",
      "Divide by 43,560, then multiply by 27",
      "Multiply by 27, then divide by depth"],
    answer:1,
    why:"sq ft × depth = cubic feet, then ÷27 = cubic yards. 1,613 only works when you START from acres." },

  { id:"s6", concept:"sitemath", type:"tf",
    q:"A skilled developer should be able to spot and roughly quantify negative site features before the engineers begin their assessment.",
    answer:true,
    why:"True. He made a point of this — the developer walks the site in Stage One, and quantifying issues early feeds the sitework budget." },

  // ---------- PARKING ----------
  { id:"p1", concept:"parking", type:"mc",
    q:"A parking bay consists of:",
    choices:[
      "A single row of spaces",
      "A row of spaces + a drive aisle + a row of spaces on the other side",
      "The drive aisle only",
      "The entire parking lot"],
    answer:1,
    why:"A double-loaded bay = spaces + drive aisle + spaces. It's the repeating building block you tile across a site." },

  { id:"p2", concept:"parking", type:"mc",
    q:"When calculating how many parking bays fit in a given site depth, you should:",
    choices:[
      "Round up to the nearest whole bay",
      "Round down to the nearest whole bay",
      "Round to the nearest whole bay",
      "Keep the decimal"],
    answer:1,
    why:"Round DOWN. A partial bay has no pavement to park on. (Note this is the opposite direction from wetland pacing — both are conservative, they just point different ways.)" },

  { id:"p3", concept:"parking", type:"num",
    q:"A parking row is 180 ft long and stalls are 9 ft wide. How many spaces fit in that row?",
    answer:20, tolerance:0,
    hint:"Row length ÷ stall width.",
    why:"180 ÷ 9 = 20 spaces." },

  { id:"p4", concept:"parking", type:"num",
    q:"Stalls are 18 ft deep and the drive aisle is 24 ft wide. How deep is one double-loaded bay, in feet?",
    answer:60, tolerance:0,
    hint:"Two rows of stalls plus the aisle between them.",
    why:"18 + 24 + 18 = 60 ft." },

  { id:"p5", concept:"parking", type:"num",
    q:"A lot is 180 ft long × 130 ft deep. Stalls 9 ft wide, 18 ft deep; aisles 24 ft. Plus 6 additional spaces at the end. How many total spaces?",
    answer:86, tolerance:0,
    hint:"Spaces per row, then how many full 60 ft bays fit in the depth, then 2 rows per bay.",
    why:"180÷9 = 20 per row. 130÷60 = 2.16 → 2 bays → 4 rows. 20×4 = 80, plus 6 = 86 spaces." },

  { id:"p6", concept:"parking", type:"num",
    q:"A lot is 200 ft long × 125 ft deep. Stalls 9 ft wide, 18 ft deep; aisles 24 ft. No additional parking. How many spaces?",
    answer:88, tolerance:0,
    hint:"Round the spaces-per-row down too — you can't have a partial stall.",
    why:"200÷9 = 22.2 → 22 per row. 125÷60 = 2.08 → 2 bays → 4 rows. 22×4 = 88 spaces." },

  { id:"p7", concept:"parking", type:"mc",
    q:"Why is parking described as having the single highest return?",
    choices:[
      "Parking is subsidized by most municipalities",
      "There's effectively no remaining upfront cost and minimal maintenance, so revenue is nearly pure profit",
      "Parking spaces appreciate faster than buildings",
      "Parking requires no permitting"],
    answer:1,
    why:"Once built, there's no upfront cost left to recover and little maintenance — so revenue drops almost entirely to the bottom line." },

  { id:"p8", concept:"parking", type:"num",
    q:"88 spaces at $4/day with 80% occupancy. What is daily revenue in dollars?",
    answer:280, tolerance:0,
    hint:"Find occupied spaces first, rounding down. Then multiply by the rate.",
    why:"88 × 0.80 = 70.4 → 70 occupied. 70 × $4 = $280/day. Partial cars don't pay." },

  { id:"p9", concept:"parking", type:"multi",
    q:"To calculate the return on a parking area, you would need to know: (Several, one, or none may be correct.)",
    choices:["Number of spaces","The rate charged","The utilization/occupancy rate","The time period (daily, monthly, annual)"],
    answers:[0,1,2,3],
    why:"All four. This is exactly the kind of 'several or all correct' item he warned about — evaluate each option on its own." },

  // ---------- STAGES ----------
  { id:"g1", concept:"stages", type:"tf",
    q:"Stage One is focused on a specific site, while Stage Two is focused on a general location.",
    answer:false,
    why:"False — it's reversed. Stage One (Inception) is a LOCATION; Stage Two (Idea Refinement) is a specific SITE. Watch for questions that flip a pair he taught together." },

  { id:"g2", concept:"stages", type:"mc",
    q:"Stage Two, Idea Refinement, is best described as:",
    choices:[
      "Securing construction financing",
      "Finding and controlling the right piece of dirt while making an initial determination of feasibility",
      "Selecting the general contractor",
      "Completing the pro forma"],
    answer:1,
    why:"That's nearly his exact wording from the 9/16 notes." },

  { id:"g3", concept:"stages", type:"mc",
    q:"During which stage should the developer walk the site?",
    choices:[
      "Stage One, before the engineers begin their assessment",
      "Stage Three, after feasibility is proven",
      "Stage Four, during contract negotiation",
      "Stage Five, at formal commitment"],
    answer:0,
    why:"Stage One. The developer walks it before engineers start, so negative features get spotted before anyone is paid to look." },

  { id:"g4", concept:"stages", type:"mc",
    q:"Which stage is 'Proving the Concept'?",
    choices:["Stage One","Stage Two","Stage Three — Feasibility","Stage Four"],
    answer:2,
    why:"Stage Three, Feasibility — confirming the numbers actually work." },

  { id:"g5", concept:"stages", type:"tf",
    q:"A pro forma is required content on this exam.",
    answer:false,
    why:"False — he said this twice, in capital letters: NO PRO FORMA on Exam 1. Don't spend study time there." },

  // ---------- DUE DILIGENCE ----------
  { id:"d1", concept:"dd", type:"mc",
    q:"Due diligence is best defined as:",
    choices:[
      "The period of time allowed for investigation into the physical and legal characteristics of a site",
      "The negotiation of the construction contract",
      "The marketing study for a proposed project",
      "The process of obtaining construction financing"],
    answer:0,
    why:"Physical AND legal characteristics — both halves matter, and 'deciding if it's feasible' is the purpose." },

  { id:"d2", concept:"dd", type:"multi",
    q:"Due diligence includes which of the following? (Several, one, or none may be correct.)",
    choices:["Phase 1 Environmental Site Assessment","Geotechnical exploration","Wetland survey","Signing the construction contract"],
    answers:[0,1,2],
    why:"A, B, and C. Signing the construction contract is Stage Four — well past due diligence." },

  { id:"d3", concept:"dd", type:"multi",
    q:"A site assessment requires the services of: (Several, one, or none may be correct.)",
    choices:["A geotechnical engineer","An environmental testing firm","An interior decorator","A permit expeditor"],
    answers:[0,1],
    why:"Geotechnical engineer and environmental testing firm. The other two come much later." },

  { id:"d4", concept:"dd", type:"tf",
    q:"Negative due diligence outcomes can usually be overcome, but at a cost to the developer.",
    answer:true,
    why:"True — that's his phrasing. They can be overcome, but there's a cost and a schedule impact." },

  { id:"d5", concept:"dd", type:"mc",
    q:"When a negative due diligence outcome surfaces, what must the developer do?",
    choices:[
      "Wait for the engineer's final report before acting",
      "Immediately start the process of determining the cost and schedule impact",
      "Terminate the contract automatically",
      "Notify the lender before doing anything else"],
    answer:1,
    why:"Immediately start determining cost and schedule. He was explicit about the word 'immediately.'" },

  { id:"d6", concept:"dd", type:"multi",
    q:"Examples of bad biological survey outcomes include: (Several, one, or none may be correct.)",
    choices:["Bald eagle nests","Gopher tortoises","Endangered plants","Skinks"],
    answers:[0,1,2,3],
    why:"All four were his examples. When every option looks right, that's often because it is — he warned that several or all may be correct." },

  { id:"d7", concept:"dd", type:"mc",
    q:"What does an opportunities and constraints analysis do?",
    choices:[
      "Identifies unusual portions of the site and site assets such as access points and views",
      "Determines the seismic site class",
      "Calculates the return on parking",
      "Establishes the construction schedule"],
    answer:0,
    why:"It identifies unusual portions of the site plus assets like access points and views." },

  { id:"d8", concept:"dd", type:"mc",
    q:"Geotechnical engineering is the branch of civil engineering that studies:",
    choices:[
      "How soils interact with the structures built upon them",
      "How water moves across a site",
      "How traffic patterns affect access",
      "How zoning affects density"],
    answer:0,
    why:"Soils interacting with structures — that's the deck's exact definition." },

  { id:"d9", concept:"dd", type:"multi",
    q:"Which are methods of soils analysis? (Several, one, or none may be correct.)",
    choices:[
      "Soil borings with Standard Penetration Testing",
      "Excavated test pits",
      "Cone Penetration Testing",
      "Ground Penetrating Radar"],
    answers:[0,1,2,3],
    why:"All four. Ground Penetrating Radar falls under geophysical methods, which the deck lists as a soils analysis technique." },

  // ---------- TEAM ----------
  { id:"t1", concept:"team", type:"multi",
    q:"Which factors were used to rank development team members on the 1–10 scale? (Several, one, or none may be correct.)",
    choices:[
      "Potential to cause schedule impacts",
      "Importance of being local to the site",
      "Importance of asset class experience",
      "Potential to cause budget impacts"],
    answers:[0,1,2,3],
    why:"All four, plus contract agreement language, cost as a share of total hard costs, and likelihood of legal liability from miscues." },

  { id:"t2", concept:"team", type:"multi",
    q:"Which of these are members of the real estate development team? (Several, one, or none may be correct.)",
    choices:["Surveyor","Traffic engineer","Landscape architect","Permit expeditor"],
    answers:[0,1,2,3],
    why:"All four appear on his list, along with the geotechnical engineer, environmental testing firm, civil site engineer, attorney, GC, architect, and the various contractors." },

  { id:"t3", concept:"team", type:"mc",
    q:"How is RISK defined?",
    choices:[
      "The chance that a project will run over budget",
      "The possibility that an action, decision, or event will lead to a bad or negative outcome",
      "The likelihood of a lawsuit",
      "The variance between projected and actual returns"],
    answer:1,
    why:"That's his definition nearly word for word." },

  { id:"t4", concept:"team", type:"mc",
    q:"What are the two things a developer is responsible for regarding risk?",
    choices:[
      "Avoiding it and insuring it",
      "Identifying it and quantifying it",
      "Transferring it and documenting it",
      "Pricing it and hedging it"],
    answer:1,
    why:"Identifying risk and quantifying risk — the same two-step pattern as spotting site issues and putting a number on them." },

  { id:"t5", concept:"team", type:"mc",
    q:"Which economic factor was called out as having an impact on residential development?",
    choices:[
      "Increased interest rates",
      "Falling unemployment",
      "Currency exchange rates",
      "Commodity futures"],
    answer:0,
    why:"Increased interest rates — he tied it to the Fed raising rates the prior week." },

  // ---------- PRECON ----------
  { id:"c1", concept:"precon", type:"mc",
    q:"Pre-construction is best described as:",
    choices:[
      "The collection of multiple tasks, services, and information that outside team members provide prior to construction",
      "The period after the building permit is issued",
      "The developer's initial site walk",
      "The completed pro forma"],
    answer:0,
    why:"That's nearly his exact wording from the review sheet." },

  { id:"c2", concept:"precon", type:"tf",
    q:"Pre-construction services are provided after construction begins.",
    answer:false,
    why:"False — pre-con is everything PRIOR to construction. The name is the definition." },

  { id:"c3", concept:"precon", type:"mc",
    q:"Why is interaction with the development team during pre-con so important?",
    choices:[
      "It determines the marketing strategy",
      "It drives the cost and the scheduling of the project",
      "It sets the lease rates",
      "It establishes the ownership structure"],
    answer:1,
    why:"Cost and scheduling. Decisions are still cheap to change on paper; the same change in the field costs money and time." },

  { id:"c4", concept:"precon", type:"mc",
    q:"'Free-con' refers to:",
    choices:[
      "Pre-construction services a contractor provides at no charge to win position on the project",
      "A contract with no penalty clauses",
      "Free land contributed by a municipality",
      "A permit issued without fee"],
    answer:0,
    why:"The GC provides pre-con effort without charging, because they're buying position on the job rather than donating labor." },

  // ---------- RISK / CONTRACTS ----------
  { id:"r1", concept:"risk", type:"mc",
    q:"Why is contract agreement language important?",
    choices:[
      "It determines the project's tax treatment",
      "It allocates risk, so when something goes wrong it's clear who absorbs the cost",
      "It sets the construction schedule",
      "It establishes the architect's fee"],
    answer:1,
    why:"Contracts allocate risk. Vague language turns a construction problem into a dispute about who pays." },

  { id:"r2", concept:"risk", type:"tf",
    q:"Formal agreements are a major topic on this exam.",
    answer:false,
    why:"False. He said there's nothing on formal agreements, and no problems on professional skills." },

  { id:"r3", concept:"risk", type:"mc",
    q:"On this exam, a multiple choice question may have:",
    choices:[
      "Exactly one correct answer",
      "Several correct answers, or none at all",
      "Always two correct answers",
      "At most one correct answer"],
    answer:1,
    why:"Several or none. Evaluate every option independently as its own true/false — don't stop at the first one that looks right." },

  // ---------- SOIL DRILLS (added 9/30) ----------

  { id:"s7", concept:"sitemath", type:"num",
    q:"A 6-acre site needs 6 INCHES of topsoil stripped across the whole thing. How many cubic yards?",
    answer:4839, tolerance:0,
    hint:"6 inches = 0.5 ft. Multiply acres × depth first — it often simplifies.",
    why:"6 × 0.5 = 3 acre-feet. 1,613 × 3 = 4,839 cu yd." },

  { id:"s8", concept:"sitemath", type:"num",
    q:"2.5 acres of soft soil at 4 feet deep. How many cubic yards?",
    answer:16130, tolerance:0,
    hint:"2.5 × 4 gives a clean number. Then × 1,613.",
    why:"2.5 × 4 = 10 acre-feet. 1,613 × 10 = 16,130 cu yd — just move the decimal." },

  { id:"s9", concept:"sitemath", type:"num",
    q:"A 10-acre parcel needs 2 ft removed from exactly HALF its area. How many cubic yards?",
    answer:16130, tolerance:0,
    hint:"Find the affected acreage first, then apply depth.",
    why:"Half of 10 = 5 acres. 5 × 2 = 10 acre-feet. 1,613 × 10 = 16,130 cu yd." },

  { id:"s10", concept:"sitemath", type:"num",
    q:"An area measuring 300 ft × 200 ft must be dug 3 ft deep. How many cubic yards? (Round to the nearest whole yard.)",
    answer:6667, tolerance:2,
    hint:"You're starting in FEET, not acres. Do NOT use 1,613. Multiply to cubic feet, then divide by 27.",
    why:"300 × 200 = 60,000 sq ft. × 3 = 180,000 cu ft. ÷ 27 = 6,666.7 → 6,667 cu yd. Using 1,613 here would be wrong by a factor of 43,560 — 1,613 only works when you START from acres." },

  { id:"s11", concept:"sitemath", type:"num",
    q:"A detention pond is 200 ft × 90 ft and averages 6 ft deep. How many cubic yards of excavation?",
    answer:4000, tolerance:0,
    hint:"Dimensions in feet → cubic feet → ÷ 27.",
    why:"200 × 90 = 18,000 sq ft. × 6 = 108,000 cu ft. ÷ 27 = 4,000 exactly. (27 × 4 = 108, so 27 × 4,000 = 108,000.)" },

  { id:"s12", concept:"sitemath", type:"num",
    q:"You must remove 3 acres at 2 ft AND import 3 acres at 2 ft of structural fill. Removal costs $10/cu yd, import costs $14/cu yd. What is the total dirt cost in dollars?",
    answer:232272, tolerance:0,
    hint:"Each side is 6 acre-feet. Price them separately, then add.",
    why:"6 acre-ft × 1,613 = 9,678 cu yd each way. Removal: 9,678 × 10 = $96,780. Import: 9,678 × 14 = $135,492. Total $232,272. This is the balanced-site argument in dollars — unbalanced, you pay twice for the same volume of dirt." },

  { id:"s13", concept:"sitemath", type:"num",
    q:"Your dirt budget is $100,000 and the hauler charges $11 per cubic yard. Roughly how many cubic yards can you afford? (Round DOWN to the nearest whole yard.)",
    answer:9090, tolerance:1,
    hint:"Divide. On a budget question, round down — you can't overspend.",
    why:"100,000 ÷ 11 = 9,090.9 → 9,090 cu yd. (11 × 9,000 = 99,000; 11 × 90 = 990.)" },

  { id:"s14", concept:"units", type:"num",
    q:"A trench holds 540 cubic feet of dirt. How many cubic yards is that?",
    answer:20, tolerance:0,
    hint:"Divide by 27.",
    why:"540 ÷ 27 = 20 cu yd exactly." },

  // ---------- WETLAND NEAR-MISS (added 9/30) ----------

  { id:"w11", concept:"wetland", type:"mc",
    q:"You pace an isolated wetland at 95 ft × 88 ft. Is it over or under the 0.2-acre jurisdictional threshold?",
    choices:[
      "Over — it exceeds 8,712 sq ft",
      "Under — it is below 8,712 sq ft",
      "Exactly at the threshold",
      "You cannot tell without knowing the depth"],
    answer:1,
    why:"95 × 88 = 8,360 sq ft, which is UNDER 8,712 — about 0.192 acres. This one is dangerous: rounding to 100 × 90 gives 9,000 and says 'over,' which is backwards. When he hands you exact dimensions, multiply them out — (95×80) + (95×8) = 7,600 + 760 = 8,360." },

  { id:"w12", concept:"wetland", type:"mc",
    q:"A wetland measures 60 ft × 70 ft and drains into a creek at the property line. Is it jurisdictional?",
    choices:[
      "No — 4,200 sq ft is well under the 0.2-acre limit",
      "Yes — it is connected to other waters, so size does not matter",
      "Only if the creek is navigable",
      "No — creeks are exempt from wetland rules"],
    answer:1,
    why:"Connected wetlands are jurisdictional at ANY size. The 0.2-acre threshold only applies to ISOLATED wetlands. Check connectivity BEFORE you check size, every time — otherwise you do the arithmetic perfectly and answer the wrong question." },

  // ---------- PARKING DRILLS (added 9/30) ----------

  { id:"p10", concept:"parking", type:"num",
    q:"A lot is 270 ft long × 190 ft deep. Stalls 9 ft wide, 18 ft deep; aisles 24 ft. No additional parking. How many spaces?",
    answer:180, tolerance:0,
    hint:"270 ÷ 9 is clean. Then how many full 60 ft bays fit in 190 ft?",
    why:"270 ÷ 9 = 30 per row. 190 ÷ 60 = 3.16 → 3 bays → 6 rows. 30 × 6 = 180 spaces." },

  { id:"p11", concept:"parking", type:"num",
    q:"A lot is 315 ft long × 240 ft deep, plus an additional end row of 11 spaces. Stalls 9 ft wide, 18 ft deep; aisles 24 ft. How many total spaces?",
    answer:291, tolerance:0,
    hint:"240 ÷ 60 comes out even. Don't forget the extra row at the end.",
    why:"315 ÷ 9 = 35 per row. 240 ÷ 60 = 4 bays → 8 rows. 35 × 8 = 280, plus 11 = 291 spaces." },

  { id:"p12", concept:"parking", type:"num",
    q:"A lot is 400 ft long × 121 ft deep. Stalls 9 ft wide, 18 ft deep; aisles 24 ft. How many spaces?",
    answer:176, tolerance:0,
    hint:"121 ft is bait. How many COMPLETE 60 ft bays actually fit?",
    why:"400 ÷ 9 = 44.4 → 44 per row. 121 ÷ 60 = 2.016 → 2 bays → 4 rows. 44 × 4 = 176. The extra foot buys you nothing — a third bay needs 180 ft." },

  { id:"p13", concept:"parking", type:"num",
    q:"A lot is 96 ft long × 130 ft deep. Stalls 9 ft wide, 18 ft deep; aisles 24 ft. How many spaces?",
    answer:40, tolerance:0,
    hint:"96 ÷ 9 is not a whole number. An 11th stall would need 99 ft.",
    why:"96 ÷ 9 = 10.67 → 10 per row (not 11). 130 ÷ 60 = 2.16 → 2 bays → 4 rows. 10 × 4 = 40 spaces." },

  { id:"p14", concept:"parking", type:"num",
    q:"Stalls are 18 ft deep and the drive aisle is 24 ft. How deep is a SINGLE-loaded bay, in feet?",
    answer:42, tolerance:0,
    hint:"Single-loaded means parking on only one side of the aisle.",
    why:"18 + 24 = 42 ft, holding 1 row. It's less efficient — same 24 ft of asphalt aisle, half the cars — so developers avoid it unless the site shape forces it." },

  { id:"p15", concept:"parking", type:"num",
    q:"An 88-space lot charges $4/day and runs at 80% occupancy. What is the daily revenue in dollars?",
    answer:280, tolerance:0,
    hint:"Find occupied spaces first, and round that DOWN — partial cars don't pay.",
    why:"88 × 0.80 = 70.4 → 70 occupied. 70 × $4 = $280/day." },

  { id:"p16", concept:"parking", type:"num",
    q:"An 86-space lot charges $120/month per space and stays 90% leased. What is the monthly revenue in dollars?",
    answer:9240, tolerance:0,
    hint:"86 × 0.90, rounded down. Then × 120 — break it into ×100 and ×20.",
    why:"86 × 0.90 = 77.4 → 77 leased. 77 × 120 = 7,700 + 1,540 = $9,240." },

  { id:"p17", concept:"parking", type:"num",
    q:"You need $200,000/year from a lot charging $6/day, operating 250 days, at 80% occupancy. How many SPACES do you need?",
    answer:168, tolerance:1,
    hint:"Revenue per occupied space per year first. Then work back through the occupancy rate. Careful which way you round.",
    why:"$6 × 250 = $1,500 per occupied space per year. 200,000 ÷ 1,500 = 133.3 → 134 occupied needed. 134 ÷ 0.8 = 167.5 → 168 spaces. Round UP here — this asks how many you NEED, not how many FIT. Building 167 leaves you short of the target." },

  { id:"p18", concept:"parking", type:"multi",
    q:"A site is 200 ft deep and one more bay would require 240 ft. Which of these could get more spaces without acquiring more land?",
    choices:[
      "Add a single-loaded bay along the edge (42 ft instead of 60)",
      "Use angled parking, which narrows the required aisle",
      "Add perpendicular end parking at the short ends of the lot",
      "Build a parking deck"],
    answers:[0,1,2,3],
    why:"All four work. The first and third are the cheap answers and the ones his diagram hints at — he drew 'additional parking' at one end. A deck multiplies spaces on the same footprint but at far higher cost." },

  { id:"p19", concept:"parking", type:"mc",
    q:"A lot is 150 ft long × 58 ft deep. Using 60 ft double-loaded bays, how many spaces fit?",
    choices:[
      "16 spaces — one full row",
      "0 spaces — no complete bay fits",
      "32 spaces — one bay, two rows",
      "8 spaces"],
    answer:1,
    why:"58 ÷ 60 = 0.97 → 0 bays. Two feet short of a single double-loaded bay. If you rounded 0.97 up to 1 you got this wrong — that's exactly the instinct being tested. In practice you'd go single-loaded (42 ft) and get one row of 16, but with double-loaded bays the answer is zero." },

  // ---------- CHAPTER 12 READING ----------
  { id:"ch1", concept:"ch12", type:"mc",
    q:"At the concept stage, where does the project exist?",
    choices:[
      "In a signed option agreement with the landowner",
      "Only in the mind of the developer, expressed in a spreadsheet",
      "In preliminary drawings produced by the architect",
      "As a recorded plat with the county"],
    answer:1,
    why:"Only in the developer's mind, expressed in a spreadsheet. At this point the spreadsheet IS the project." },

  { id:"ch2", concept:"ch12", type:"mc",
    q:"In Stage Two, which way does the search run?",
    choices:[
      "The site is looking for an idea",
      "The idea is looking for a site",
      "The lender is looking for both",
      "The broker matches existing ideas to existing sites"],
    answer:1,
    why:"The idea is looking for a site. Note the direction — the idea comes first, then the hunt for dirt. Reversing this is a classic miss." },

  { id:"ch3", concept:"ch12", type:"mc",
    q:"The biggest challenge at idea refinement is:",
    choices:["Securing construction financing","Effective communication","Obtaining entitlements","Balancing the site"],
    answer:1,
    why:"Effective communication. The developer has to sell a vision that exists only in a spreadsheet." },

  { id:"ch4", concept:"ch12", type:"mc",
    q:"Residual analysis determines:",
    choices:[
      "The leftover land at the edge of a site after the footprint is set",
      "The value of the improvements to be built, less direct and indirect costs",
      "The remaining contingency in the pro forma after bidding",
      "The soil remaining after cut and fill are balanced"],
    answer:1,
    why:"Value of the improvements minus direct and indirect costs. What's left over — the residual — is what the land is worth to this developer for this project." },

  { id:"ch5", concept:"ch12", type:"mc",
    q:"What does residual analysis imply about land value?",
    choices:[
      "Land value sets a ceiling on what can be built",
      "Land value is derived from what can profitably be built on it",
      "Land value and construction cost move independently",
      "Land value is fixed by comparable sales regardless of use"],
    answer:1,
    why:"Land value is DERIVED from what can profitably be built — not the other way around. That's the whole conceptual point." },

  { id:"ch6", concept:"ch12", type:"mc",
    q:"Which is NOT one of the four early urban growth models?",
    choices:["Concentric Zone theory","Axial theory","Residual Sector theory","Multiple Nuclei theory"],
    answer:2,
    why:"'Residual Sector theory' is invented. The four are Concentric Zone, Axial, Sector, and Multiple Nuclei." },

  { id:"ch7", concept:"ch12", type:"mc",
    q:"How does the reading treat 'edge cities'?",
    choices:[
      "As one of the four classical growth models",
      "As a later settlement pattern, beyond the four classical models",
      "As a zoning classification for suburban commercial land",
      "As the outer boundary of a metropolitan statistical area"],
    answer:1,
    why:"A LATER pattern, not one of the four. Don't let it get smuggled into the list — the fourth model is Multiple Nuclei." },

  { id:"ch8", concept:"ch12", type:"mc",
    q:"Which three forces does the reading say are rapidly affecting settlement patterns and land uses?",
    choices:[
      "Interest rates, tax policy, and labor supply",
      "Technology, growth management policies, and the changing role of central cities",
      "Population growth, immigration, and transportation cost",
      "Zoning, entitlements, and public opinion"],
    answer:1,
    why:"Technology, growth management policies, and the changing role of central cities." },

  { id:"ch9", concept:"ch12", type:"mc",
    q:"The site control dilemma is best stated as:",
    choices:[
      "Whether to option or to lease the land",
      "Tie up the site early for maximum profit but greater risk, or late for less risk and less upside",
      "Whether the developer or lender holds title during entitlement",
      "Whether to buy the whole parcel or only the buildable portion"],
    answer:1,
    why:"Buy early = more upside, more risk. Buy late = less risk, less upside. That tension is the whole point." },

  { id:"ch10", concept:"ch12", type:"mc",
    q:"How is the dilemma of controlling the site resolved?",
    choices:["A right of first refusal","The option to buy land","A joint venture with the landowner","A feasibility contingency in the purchase contract"],
    answer:1,
    why:"The option to buy land — control without ownership while feasibility gets tested. This is exactly what 'tie up the land' means in the Stage Two slides." },

  { id:"ch11", concept:"ch12", type:"mc",
    q:"Once a site's feasibility has been demonstrated, the landowner's price is expected to:",
    choices:["Stay fixed by the earlier agreement","Go up","Fall, because the developer now has leverage","Be renegotiated by the broker"],
    answer:1,
    why:"Go up. That's precisely why the developer wants control BEFORE proving feasibility — it's the engine of the whole dilemma." },

  { id:"ch12", concept:"ch12", type:"mc",
    q:"Marketing, financial, and construction management all get involved during idea refinement so the developer can:",
    choices:[
      "Begin competitive bidding",
      "Feel confident putting funds at risk in Stage Three",
      "Satisfy the lender's underwriting checklist",
      "Release drawings at 90%"],
    answer:1,
    why:"So he can feel confident putting funds at risk in Stage Three. He must be convinced of feasibility before spending begins." },

  { id:"ch13", concept:"ch12", type:"mc",
    q:"The 'fine line' the reading warns the developer about is between:",
    choices:["Optimism and fraud","Effective communication and shallow promotion","Due diligence and analysis paralysis","Cut and fill"],
    answer:1,
    why:"A fine line between effective communication and shallow promotion. Sell the vision without overselling it — a quotable line." },

  { id:"ch14", concept:"ch12", type:"mc",
    q:"Regarding the public sector, the reading stresses that developers must understand:",
    choices:[
      "Only the written zoning ordinance",
      "The human and organizational sides, plus financial depth and political clout — theirs and their competitors'",
      "Primarily the permitting fee schedule",
      "The election calendar for local offices"],
    answer:1,
    why:"The human and organizational sides, and both their own and their competitors' financial depth and political clout." },

  { id:"ch15", concept:"ch12", type:"mc",
    q:"According to the reading's framing sentence, optimal land uses are continually changed by:",
    choices:["Interest rates and construction cost inflation","Social, cultural, and economic forces","Federal and state regulation","Technology alone"],
    answer:1,
    why:"Social, cultural, and economic forces — and the developer must respond to these changes." },

  { id:"ch16", concept:"ch12", type:"mc",
    q:"The textbook's two outcomes of Stage Two are:",
    choices:[
      "Proceed to bidding, or renegotiate the land price",
      "The idea evolves into a feasible concept, or it is abandoned before large expenditures",
      "Option the land, or purchase it outright",
      "A go decision, or a deferral pending market study"],
    answer:1,
    why:"Evolve or abandon — the textbook's version of 'a quick and decisive NO.'" },

  { id:"ch17", concept:"ch12", type:"tf",
    q:"In Stage Two, a site is identified first and the developer then searches for an idea to put on it.",
    answer:false,
    why:"Reversed. The IDEA is looking for a site." },

  { id:"ch18", concept:"ch12", type:"tf",
    q:"Buying land early gives the developer less upside but less risk.",
    answer:false,
    why:"Backwards. Buy early = MORE upside and MORE risk." },

  { id:"ch19", concept:"ch12", type:"tf",
    q:"An option lets the developer control a site without owning it.",
    answer:true,
    why:"Exactly — the right to purchase at a fixed price while feasibility is tested." },

  { id:"ch20", concept:"ch12", type:"tf",
    q:"Residual analysis works forward from land cost to determine what can be built.",
    answer:false,
    why:"It runs the other way: from the value of what can be built, minus costs, to what the land is worth." },

  { id:"ch21", concept:"ch12", type:"tf",
    q:"There are four early urban growth models, and 'edge cities' is the fourth.",
    answer:false,
    why:"Edge cities is a later pattern. The fourth model is Multiple Nuclei." },

  { id:"ch22", concept:"ch12", type:"tf",
    q:"At the concept stage the project exists only in the developer's mind, expressed in a spreadsheet.",
    answer:true,
    why:"Correct — that's the book's language." },

  { id:"ch23", concept:"ch12", type:"id",
    q:"Determining the value of improvements to be constructed, then deducting direct and indirect costs, to arrive at what the land is worth for this project.",
    answer:"residual analysis", accept:["residual"],
    hint:"What's left over after you subtract costs from value.",
    why:"Residual analysis. Land value is derived from what can profitably be built." },

  { id:"ch24", concept:"ch12", type:"id",
    q:"The device that resolves the site control dilemma by securing the right to purchase at a fixed price while feasibility is tested.",
    answer:"option to buy land", accept:["option","an option","land option","option to buy","purchase option"],
    hint:"It's how you 'tie up' a site.",
    why:"The option to buy land — control without ownership." },

  { id:"ch25", concept:"ch12", type:"id",
    q:"The later settlement pattern that follows the four classical urban growth models.",
    answer:"edge cities", accept:["edge city"],
    why:"Edge cities. Keep it separate from the four models themselves." },

  { id:"ch26", concept:"ch12", type:"id",
    q:"The growth model named for rings expanding outward from a central point.",
    answer:"concentric zone theory", accept:["concentric zone","concentric zones","concentric"],
    why:"Concentric Zone theory — the first of the four." },

  { id:"ch27", concept:"ch12", type:"id",
    q:"The growth model built on multiple separate centers rather than one core.",
    answer:"multiple nuclei theory", accept:["multiple nuclei","multiple nucleii"],
    why:"Multiple Nuclei theory — the fourth model, and the one edge cities is often confused with." },

  { id:"ch28", concept:"ch12", type:"id",
    q:"The quality the developer must possess regarding the project before Stage Three funds are put at risk.",
    answer:"convinced of its feasibility", accept:["convinced of feasibility","feasibility","convinced"],
    hint:"'He must be ___ before putting funds at risk.'",
    why:"He must be convinced of its feasibility. That's the Stage Three spending gate." },

  { id:"ch29", concept:"ch12", type:"id",
    q:"The phrase describing the boundary a developer must not cross when selling the vision of a project.",
    answer:"a fine line between effective communication and shallow promotion",
    accept:["fine line between effective communication and shallow promotion","effective communication and shallow promotion","shallow promotion"],
    hint:"A fine line between two things.",
    why:"'A fine line between effective communication and shallow promotion.'" },

  { id:"ch30", concept:"ch12", type:"multi",
    q:"Which are among the four early urban growth models? (Several, one, or none may be correct.)",
    choices:["Concentric Zone theory","Sector theory","Edge cities","Axial theory"],
    answers:[0,1,3],
    why:"Concentric Zone, Sector, and Axial are three of the four — Multiple Nuclei is the fourth. Edge cities is a later pattern, not a classical model." },

  // ---------- CHAIN OF COMMAND ----------
  { id:"k1", concept:"chain", type:"mc",
    q:"In the chain of command, subcontractors are hired by:",
    choices:["The developer","The general contractor","The construction lender","The civil engineer"],
    answer:1,
    why:"The general contractor. Developer → hires GC → hires subs." },

  { id:"k2", concept:"chain", type:"mc",
    q:"How many general contractors does the developer hire on a project?",
    choices:["One","Two, to maintain competitive tension","One per CSI division","As many as there are major trades"],
    answer:0,
    why:"Exactly ONE. The GC then hires and manages every sub." },

  { id:"k3", concept:"chain", type:"mc",
    q:"Equity capital is best characterized as:",
    choices:[
      "Repaid with interest, no ownership, paid back first",
      "Ownership percentage, paid after the lender is repaid, higher risk and higher return",
      "Ownership percentage, paid before the lender, lower risk",
      "A loan convertible to ownership at the lender's option"],
    answer:1,
    why:"Equity buys ownership and gets paid LAST — after the lender. Higher risk, higher return." },

  { id:"k4", concept:"chain", type:"mc",
    q:"Which party gets paid back FIRST?",
    choices:["The equity investor","The bank/lender","The general contractor's retainage","The developer's promoted interest"],
    answer:1,
    why:"The lender. Debt gets paid first; equity gets paid last. The cleanest one-liner: equity buys ownership and gets paid last; debt buys nothing and gets paid first." },

  { id:"k5", concept:"chain", type:"mc",
    q:"The broker's role on a project spans:",
    choices:[
      "Only the front end, providing market intelligence",
      "Only the back end, selling or leasing the finished building",
      "Market intelligence on the front end, and selling or leasing the finished building",
      "Negotiating the general contract on the developer's behalf"],
    answer:2,
    why:"Both ends — market intel up front, then sale or lease at the finish." },

  { id:"k6", concept:"chain", type:"mc",
    q:"Which of the following is a subcontractor rather than a direct developer hire?",
    choices:["The architect","The civil engineer","The site/grading contractor","The attorney"],
    answer:2,
    why:"The site/grading contractor is a sub under the GC. The study guide flags this as the most-missed point in the whole chain of command." },

  { id:"k7", concept:"chain", type:"mc",
    q:"Why is a loan agreement a Stage Five formal commitment?",
    choices:[
      "Because debt must be committed before any design work begins",
      "Because the lender is repaid first and takes no ownership, so the commitment is contractual and binding",
      "Because lenders require a signed GC contract as a precondition",
      "Because Stage Five is when the option is exercised"],
    answer:1,
    why:"The lender is repaid first and takes no ownership — the relationship is purely contractual, which is what makes it a formal commitment." },

  { id:"k8", concept:"chain", type:"mc",
    q:"Which best explains why the course front-loads Stages One through Five?",
    choices:[
      "They occupy the majority of a project's calendar time",
      "Nothing is fully committed yet, so that's where the real decision-making lives",
      "They are the stages a junior analyst is most likely to work on",
      "Stages Six through Eight are covered in a later course"],
    answer:1,
    why:"Nothing is fully committed yet, so that's where the real decision-making lives. Stages 7–8 get light treatment." },

  { id:"k9", concept:"chain", type:"mc",
    q:"The economic factor identified as most affecting residential development:",
    choices:["Unemployment","Increased interest rates","Material cost inflation","Household formation rates"],
    answer:1,
    why:"Increased interest rates — noted in the 9/21 class. If there's a current-events question, that's the one." },

  { id:"k10", concept:"chain", type:"tf",
    q:"The developer hires the general contractor, and the general contractor hires the subcontractors.",
    answer:true,
    why:"Correct — that's the chain exactly." },

  { id:"k11", concept:"chain", type:"tf",
    q:"Debt capital receives a percentage of ownership in the project.",
    answer:false,
    why:"Debt receives NO ownership — just repayment with interest. Equity receives ownership." },

  { id:"k12", concept:"chain", type:"tf",
    q:"The equity investor is paid only after the lender has been repaid.",
    answer:true,
    why:"Correct. Equity is last in line, which is why it demands a higher return." },

  { id:"k13", concept:"chain", type:"tf",
    q:"A developer typically hires two general contractors to preserve competitive tension through construction.",
    answer:false,
    why:"The developer hires exactly ONE GC." },

  { id:"k14", concept:"chain", type:"tf",
    q:"The broker's involvement ends once the site is acquired.",
    answer:false,
    why:"The broker also sells or leases the finished building — involvement runs to both ends." },

  { id:"k15", concept:"chain", type:"tf",
    q:"The developer's two responsibilities regarding risk are to identify it and to eliminate it.",
    answer:false,
    why:"Identify and QUANTIFY. Risk is never eliminated — it's priced." },

  { id:"k16", concept:"chain", type:"tf",
    q:"AIA publishes 33 standard forms and CSI has 254 divisions.",
    answer:false,
    why:"Reversed — and this is the cheapest point to lose on the exam. AIA publishes 254 forms; CSI has 33 divisions." },

  { id:"k17", concept:"chain", type:"tf",
    q:"General contractors typically need 4–6 weeks to prepare a bid.",
    answer:true,
    why:"4–6 weeks. Worth having cold." },

  { id:"k18", concept:"chain", type:"tf",
    q:"A preliminary civil engineer site layout costs roughly $2,000.",
    answer:true,
    why:"About $2,000 — cheap relative to what it de-risks." },

  { id:"k19", concept:"chain", type:"id",
    q:"Capital that is repaid with interest, receives no ownership, and is paid back before equity.",
    answer:"debt capital", accept:["debt","debt financing","bank financing","loan","lender financing"],
    why:"Debt capital. Buys nothing, gets paid first." },

  { id:"k20", concept:"chain", type:"id",
    q:"The party hired directly by the developer to deliver the building, who in turn hires and manages all trades.",
    answer:"general contractor", accept:["gc","the general contractor","gen contractor"],
    why:"The General Contractor — the single direct hire in the chain." },

  { id:"k21", concept:"chain", type:"id",
    q:"The team member who provides market intelligence on the front end and sells or leases the finished building.",
    answer:"broker", accept:["the broker","real estate broker"],
    why:"The broker — involved at both ends of the project." },

  { id:"k22", concept:"chain", type:"id",
    q:"The subcontractor most commonly mistaken for a direct developer hire.",
    answer:"site grading contractor", accept:["site contractor","grading contractor","site/grading contractor","site and grading contractor"],
    hint:"It's the one that moves dirt.",
    why:"The site/grading contractor — a sub under the GC. The most-missed point in the chain of command." },

  { id:"k23", concept:"chain", type:"id",
    q:"Capital provided in exchange for a percentage of ownership, paid only after the lender is repaid.",
    answer:"equity capital", accept:["equity","equity investment","equity investor"],
    why:"Equity capital. Buys ownership, gets paid last, demands the higher return." },

  { id:"k24", concept:"chain", type:"num",
    q:"How many standard forms does AIA publish?",
    answer:254, tolerance:0,
    hint:"It's the bigger of the two numbers — CSI has the smaller one.",
    why:"254 AIA forms. CSI has 33 divisions. Reversing these two is the classic cheap miss." },

  { id:"k25", concept:"chain", type:"num",
    q:"How many divisions are in the CSI Standard Scope of Work?",
    answer:33, tolerance:0,
    hint:"The smaller of the two numbers.",
    why:"33 CSI divisions. AIA publishes 254 forms." },

  { id:"k26", concept:"chain", type:"multi",
    q:"Which of these are hired DIRECTLY by the developer? (Several, one, or none may be correct.)",
    choices:["The general contractor","The site/grading contractor","The architect","The framing subcontractor"],
    answers:[0,2],
    why:"The GC and the architect are direct developer hires. The site/grading contractor and the framers are subs under the GC." },

  { id:"k27", concept:"chain", type:"multi",
    q:"Which statements about equity are correct? (Several, one, or none may be correct.)",
    choices:[
      "It receives a percentage of ownership",
      "It is paid after the lender is repaid",
      "It carries higher risk and higher return",
      "It is repaid with interest on a fixed schedule"],
    answers:[0,1,2],
    why:"The first three. Repayment with interest on a fixed schedule describes debt, not equity." },

  { id:"k28", concept:"chain", type:"id",
    q:"The three functions that join together at feasibility.",
    answer:"marketing financial construction management",
    accept:["marketing financial and construction management","marketing finance construction management","marketing financial construction"],
    hint:"Three departments — one sells it, one funds it, one builds it.",
    why:"Marketing, financial, and construction management." },

  { id:"k29", concept:"chain", type:"mc",
    q:"Which career point did the professor NOT make in the 9/21 professional development class?",
    choices:[
      "Hustle and prep always wins over intellect",
      "A career doesn't have to be linear",
      "Specialize early and stay in your lane",
      "Be a 'yes' person"],
    answer:2,
    why:"'Specialize early' is invented — the opposite of 'a career doesn't have to be linear.' The five were: build your network, hustle beats intellect, build your personal brand daily, careers aren't linear, be a 'yes' person." },

  { id:"k30", concept:"chain", type:"mc",
    q:"The evergreen warning the professor closed with:",
    choices:[
      "Trust but verify",
      "If it seems too good to be true, it probably is",
      "Measure twice, cut once",
      "Never fall in love with a deal"],
    answer:1,
    why:"'If it seems too good to be true, it probably is.' Pairs naturally with 'don't judge a book by its cover — it's a FOOL'S GAME.'" }
];
