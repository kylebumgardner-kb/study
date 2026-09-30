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
  risk:       { name: "Risk & Contracts",        blurb: "Defining risk, contract language, liability." }
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
    why:"58 ÷ 60 = 0.97 → 0 bays. Two feet short of a single double-loaded bay. If you rounded 0.97 up to 1 you got this wrong — that's exactly the instinct being tested. In practice you'd go single-loaded (42 ft) and get one row of 16, but with double-loaded bays the answer is zero." }
];
