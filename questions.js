// questions.js — Quiz data for NCEES Study Hub
// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW QUIZ — just paste a new object before the ];
//
// SECTIONS:
//   "general"       → General Topics
//   "hydraulics"    → Hydraulics & Hydrology
//   "environmental" → Environmental Engineering
//   "conceptual"    → Special Topics / Conceptual
//   "practice"      → Practice Exams
//   "simulation"    → Simulation Exams
//
// QUESTION TYPES:
//   type:"single"  → multiple choice (one answer)
//   type:"multi"   → multiple choice (select all)
//   type:"fill"    → fill in the blank
//
// WITH IMAGE:
//   img:"keyname"  → must be registered in IMG_MAP in images.js
//
// TEMPLATE:
// {
//   id: 4,
//   section: "hydraulics",
//   category: "Closed Conduit Flow",
//   title: "Closed Conduit — Quiz 1",
//   subtitle: "Pipe flow, head loss, Hazen-Williams",
//   tag: "Quiz 4",
//   questions: [
//     {
//       id:1, type:"single",
//       text:"Question text, <strong>bold</strong> supported",
//       choices:["(A) ...","(B) ...","(C) ...","(D) ..."],
//       correct:0,
//       ref:"§ Reference",
//       solution:"<p>Explanation.</p><p class='sol-answer'>∴ Answer A</p>"
//     }
//   ]
// },
// ─────────────────────────────────────────────────────────────

var QUIZZES = [
  {
    id:1,
    section:"general",
    category:"Materials (NCEES)",
    title:"Geotechnical Engineering",
    subtitle:"Soil classification, permeability, weight-volume relationships",
    tag:"Quiz 1",
    questions:[
      {
        id:1,type:"single",
        text:"Based on the borehole log shown, the standard penetration test N value (blow count) for <strong>Sample 5</strong> is most nearly:",
        img:"borehole",imgAlt:"Borehole log - Hollow Stem Auger",
        choices:["(A) 6","(B) 10","(C) 14","(D) 18"],correct:2,
        ref:"§ SPT / Borehole Log Reading",
        solution:"<p>For the SPT N-value, sum the blow counts from the <strong>last two 6-inch increments</strong> only (first increment is seating).</p><p>Sample #5: <strong>6 + 8 = 14</strong>.</p><p class='sol-answer'>∴ Answer C (N = 14)</p>"
      },
      {
        id:2,type:"single",
        text:"The sampler most widely used for collecting an <strong>undisturbed</strong> soil sample is:",
        choices:["(A) Rock Core Sampler","(B) Split Barrel Sampler","(C) Auger Sampler","(D) Shelby Tube"],correct:3,
        ref:"§ Samplers",
        solution:"<p>The <strong>Shelby Tube</strong> (thin-walled tube sampler) minimizes disturbance during push-in sampling. The Split Barrel is used for SPT (disturbed samples).</p><p class='sol-answer'>∴ Answer D</p>"
      },
      {
        id:3,type:"single",
        text:"Using AASHTO classification, classify a soil with <strong>65% passing No. 200 sieve</strong>, liquid limit of <strong>48</strong>, and plasticity index of <strong>17</strong>.",
        choices:["(A) A-4","(B) A-6","(C) A-7-5","(D) A-7-6"],correct:2,
        ref:"§ 3.7.3 AASHTO Classification",
        solution:"<p>LL=48 exceeds A-4 max (LL≤40). Check A-7 subgroup: LL − 30 = 48 − 30 = 18. Since PI=17 &lt; 18 → <strong>A-7-5</strong>.</p><p class='sol-answer'>∴ Answer C (A-7-5)</p>"
      },
      {
        id:4,type:"single",
        text:"Organic soil: % passing #4=98%, #40=96%, #200=90%, LL=64, PL=44. The <strong>USCS symbol</strong> is:",
        choices:["(A) GM","(B) OL","(C) ML","(D) OH"],correct:3,
        ref:"§ 3.7.2 USCS",
        solution:"<p>Step 1: &gt;50% passes No.200 → fine-grained. Step 2: PI=20, plot (LL=64, PI=20) → below A-line, LL&gt;50. Step 3: Organic sample → first letter O → <strong>OH</strong>.</p><p class='sol-answer'>∴ Answer D (OH)</p>"
      },
      {
        id:5,type:"single",
        text:"Lab data: % passing #4=98%, #40=65%, #200=25%, LL=34, PL=20. The <strong>USCS symbol</strong> is:",
        choices:["(A) GP","(B) SW","(C) SC","(D) SP"],correct:2,
        ref:"§ 3.7.2 USCS",
        solution:"<p>Coarse-grained (75% &gt; No.200). Sand=73% &gt; Gravel=2%. &gt;12% fines → use Atterberg. PI=14, (LL=34, PI=14) above A-line → <strong>SC</strong> (Clayey Sand).</p><p class='sol-answer'>∴ Answer C (SC)</p>"
      },
      {
        id:6,type:"fill",
        text:"Fill in the blank:",
        fillText:"According to USCS classification, <strong>Fat clay</strong> is a type of clay soil where liquid limit is equal or more than __BLANK6__ %.",
        correctFill:"50",altFills:["50"],
        ref:"§ 3.7.2 USCS — Fat Clay",
        solution:"<p>Per USCS, <strong>Fat clay (CH)</strong> is defined as an inorganic clay of high plasticity with liquid limit ≥ <strong>50%</strong>.</p><p class='sol-answer'>∴ Answer: 50</p>"
      },
      {
        id:7,type:"single",
        text:"Sieve: #4=65%, #40=40%, #200=25%. LL=35, PL=13. The soil name using USCS is:",
        choices:["(A) GC","(B) SC","(C) CH","(D) CL"],correct:1,
        ref:"§ 3.7.2 USCS",
        solution:"<p>Coarse-grained, sand dominant. &gt;12% fines. PI=22, (LL=35, PI=22) above A-line → <strong>SC</strong> (Clayey Sand).</p><p class='sol-answer'>∴ Answer B (SC)</p>"
      },
      {
        id:8,type:"single",
        text:"Which soil has <strong>none to slight</strong> potential for frost heave?",
        choices:["(A) MH","(B) CL","(C) CH","(D) GW"],correct:3,
        ref:"§ 3.17.3 Frost Susceptibility",
        solution:"<p><strong>GW (Well-graded Gravel)</strong> allows free drainage — water cannot migrate to cause frost heave. Silts and clays have high frost-heave potential.</p><p class='sol-answer'>∴ Answer D (GW)</p>"
      },
      {
        id:9,type:"multi",
        text:"For flow of water through a porous soil medium, total head at any point can be represented by the sum of: <strong>Select all that apply.</strong>",
        choices:["(A) Elevation head","(B) Pressure head","(C) Velocity head","(D) Total head","(E) All of the above"],
        correctMulti:[0,1],
        ref:"§ Groundwater / Total Head",
        solution:"<p>Total head = <strong>elevation head + pressure head</strong>. Velocity head is neglected in groundwater as insignificant.</p><p class='sol-answer'>∴ Correct: A and B only</p>"
      },
      {
        id:10,type:"single",
        text:"A soil sample was tested in the apparatus shown. The coefficient of permeability (inches per minute) is most nearly:",
        img:"perm",imgAlt:"Constant-head permeameter apparatus",
        choices:["(A) 0.02","(B) 0.14","(C) 0.21","(D) 0.44"],correct:2,
        ref:"§ 3.8.5.1 Laboratory Permeability Tests",
        solution:"<div class='formula'>k = QL / (A·h·t)\nA = π(3)²/4 = 7.07 in²\nk = (10×6) / (7.07×20×2) = 0.21 in/min</div><p class='sol-answer'>∴ Answer C (0.21)</p>"
      },
      {
        id:11,type:"single",
        text:"Clay sample: diameter=2.5 in, height=8 in. Falling-head permeameter, standpipe area=0.22 in². Head drops 32→13.5 in in 2 hr 12 min. Hydraulic conductivity (in/min):",
        choices:["(A) 2.34×10⁻³","(B) 5.6×10⁻³","(C) 6.8×10⁻³","(D) 9.34×10⁻³"],correct:0,
        ref:"§ 3.8.5.1 Falling-Head Permeability",
        solution:"<div class='formula'>k = (aL/At)·ln(h₁/h₂)\na=0.22 in², A=4.91 in², L=8 in, t=132 min\nk = (0.22×8)/(4.91×132) × ln(32/13.5) ≈ 2.34×10⁻³ in/min</div><p class='sol-answer'>∴ Answer A</p>"
      },
      {
        id:12,type:"single",
        text:"Soil: Gs=2.65, moist unit weight=115 lb/ft³, moisture content=12%. <strong>Dry unit weight</strong> (pcf) is most nearly:",
        choices:["(A) 103","(B) 107","(C) 111","(D) 115"],correct:0,
        ref:"§ 3.8.3 Weight-Volume Relationships",
        solution:"<div class='formula'>γ_d = γ/(1+w) = 115/1.12 ≈ 102.7 pcf</div><p class='sol-answer'>∴ Answer A (103)</p>"
      },
      {
        id:13,type:"single",
        text:"Gs=2.65, water content=29% for a <strong>saturated</strong> soil. Void ratio is most nearly:",
        choices:["(A) 0.58","(B) 0.77","(C) 0.98","(D) 1.28"],correct:1,
        ref:"§ 3.8.3 Weight-Volume Relationships",
        solution:"<div class='formula'>S·e = w·Gs → e = 0.29×2.65 = 0.77</div><p class='sol-answer'>∴ Answer B (0.77)</p>"
      },
      {
        id:14,type:"single",
        text:"Moist unit weight=116 lb/ft³ at moisture content 15%. Gs=2.67. <strong>Saturated unit weight</strong> (pcf) is most nearly:",
        choices:["(A) 116.2","(B) 121.8","(C) 125.6","(D) 132.6"],correct:2,
        ref:"§ 3.8.3 Weight-Volume Relationships",
        solution:"<div class='formula'>e = (1+w)·Gs·γw/γ − 1 = (1.15×2.67×62.4)/116 − 1 = 0.65\nγ_sat = (Gs+e)·γw/(1+e) = (2.67+0.65)×62.4/1.65 ≈ 125.6 pcf</div><p class='sol-answer'>∴ Answer C (125.6)</p>"
      },
      {
        id:15,type:"single",
        text:"Water content=25%, bulk density=120 lb/ft³, Gs=2.75. <strong>Degree of saturation</strong> (%) is most nearly:",
        choices:["(A) 75.0","(B) 82.5","(C) 87.5","(D) 92.5"],correct:2,
        ref:"§ 3.8.3 Weight-Volume Relationships",
        solution:"<div class='formula'>e = (1.25×2.75×62.4)/120 − 1 = 0.79\nS = w·Gs/e = 0.25×2.75/0.79 = 87.5%</div><p class='sol-answer'>∴ Answer C (87.5%)</p>"
      },
      {
        id:16,type:"single",
        text:"Shear strength can be measured from:",
        choices:["(A) Vane shear test","(B) Direct shear test","(C) Triaxial Test","(D) All of the above"],correct:3,
        ref:"§ 3.6.6 / In Situ Tests",
        solution:"<p>All three — vane shear, direct shear, and triaxial — are standard methods for measuring shear strength.</p><p class='sol-answer'>∴ Answer D</p>"
      },
      {
        id:17,type:"single",
        text:"A compaction curve is a plot of:",
        choices:["(A) Bulk unit weight vs moisture content","(B) Dry unit weight vs moisture content","(C) Max dry unit weight vs optimum moisture content","(D) All of the above"],correct:1,
        ref:"§ Compaction",
        solution:"<p>The Proctor curve plots <strong>dry unit weight vs moisture content</strong> to find optimum moisture for max dry density.</p><p class='sol-answer'>∴ Answer B</p>"
      },
      {
        id:18,type:"single",
        text:"Standard Proctor test: mold+sample=9.07 lb, mold=5.06 lb. Moisture test: wet+tare=239.69 g, dry+tare=225.27 g, can=25.26 g. <strong>Dry density (pcf)</strong> and <strong>moisture content (%)</strong> are most nearly:",
        choices:["(A) 112.2, 7.2","(B) 115.5, 7.8","(C) 120.2, 8.3","(D) 125.3, 8.9"],correct:0,
        ref:"§ 3.8.3 / Standard Proctor",
        solution:"<div class='formula'>w = 14.42/200.01×100 = 7.2%\nγ_moist = 4.01/(1/30) = 120.3 pcf\nγ_d = 120.3/1.072 ≈ 112.2 pcf</div><p class='sol-answer'>∴ Answer A (112.2 pcf, 7.2%)</p>"
      }
    ]
  },
  {
    id:2,
    section:"general",
    category:"Materials (NCEES)",
    title:"Concrete Materials",
    subtitle:"Mix design, strength, admixtures, cement types",
    tag:"Quiz 2",
    questions:[
      {
        id:1,type:"single",
        text:"Design strength is <strong>4000 psi</strong>. Two consecutive samples measured <strong>4400 psi</strong> and <strong>3800 psi</strong>. The third sample must be at least:",
        choices:["(a) 4000 psi","(b) 3800 psi","(c) 3600 psi","(d) 3200 psi"],correct:1,
        ref:"§ Concrete Acceptance Criteria",
        solution:"<div class='formula'>(3800+4400+X)/3 ≥ 4000  →  X ≥ 3800 psi</div><p>No single sample may fall below f'c−500=3500 psi. X=3800 satisfies both.</p><p class='sol-answer'>∴ Answer B (3800 psi)</p>"
      },
      {
        id:2,type:"single",
        text:"Fineness modulus of sands A, B, C are <strong>2.3, 2.5, 2.7</strong>. Which statement is correct?",
        choices:["(a) B is finer than A","(b) C is finer than B","(c) A is finer than C","(d) Both a and b"],correct:2,
        ref:"§ Fineness Modulus",
        solution:"<p>Larger FM = coarser aggregate. A=2.3 is finest, C=2.7 is coarsest.</p><p class='sol-answer'>∴ Answer C (A is finer than C)</p>"
      },
      {
        id:3,type:"single",
        text:"Mix water was increased for workability. Which modification preserves <strong>required concrete strength</strong>?",
        choices:["(A) Addition of cement amount","(B) Addition of fine aggregate","(C) Addition of coarse aggregate","(D) Reduction of coarse aggregate"],correct:0,
        ref:"§ W/C Ratio and Workability",
        solution:"<p>Strength is controlled by w/c ratio. More water → must add cement proportionally to keep same w/c.</p><p class='sol-answer'>∴ Answer A</p>"
      },
      {
        id:4,type:"single",
        text:"Which of the following affects compressive strength (f'c) of concrete?",
        choices:["(a) Type of coarse aggregate","(b) Amount of water used","(c) Curing of concrete","(d) All of above"],correct:3,
        ref:"§ Factors Affecting f'c",
        solution:"<p>All three affect f'c: aggregate type (bond), water amount (w/c ratio), and curing (hydration completeness).</p><p class='sol-answer'>∴ Answer D</p>"
      },
      {
        id:5,type:"fill",
        text:"Fill in the blank:",
        fillText:"Calcium chloride used as an additive in concrete to __BLANK5__ cement hydration.",
        correctFill:"accelerate",altFills:["accelerate","speed up","speed","hasten"],
        ref:"§ Admixtures — Accelerators",
        solution:"<p>Calcium chloride (CaCl₂) is an <strong>accelerator</strong> — it speeds up cement hydration, enabling faster strength gain.</p><p class='sol-answer'>∴ Answer: accelerate</p>"
      },
      {
        id:6,type:"fill",
        text:"Fill in the blank:",
        fillText:"The cement __BLANK6__ is a chemical reaction between water and cement that produces heat.",
        correctFill:"hydration",altFills:["hydration"],
        ref:"§ Cement Hydration",
        solution:"<p>Cement <strong>hydration</strong> is the exothermic reaction between water and cement that produces C-S-H gel and heat.</p><p class='sol-answer'>∴ Answer: hydration</p>"
      },
      {
        id:7,type:"fill",
        text:"Fill in the blank:",
        fillText:"The higher Fineness Modulus of aggregates means the aggregate size is __BLANK7__.",
        correctFill:"larger",altFills:["larger","coarser","bigger"],
        ref:"§ Fineness Modulus",
        solution:"<p>Higher FM = <strong>larger (coarser)</strong> aggregate.</p><p class='sol-answer'>∴ Answer: larger</p>"
      },
      {
        id:8,type:"fill",
        text:"Fill in the blank:",
        fillText:"The tensile strength of concrete is directly measured by __BLANK8__ test.",
        correctFill:"split tensile",altFills:["split tensile","splitting tensile","split-tensile","split tensile test"],
        ref:"§ Tensile Strength Testing",
        solution:"<p>The <strong>split tensile test</strong> (ASTM C496) loads a cylinder along its diameter to directly measure tensile strength.</p><p class='sol-answer'>∴ Answer: split tensile</p>"
      },
      {
        id:9,type:"single",
        text:"What is the main reason for using <strong>fly ash</strong> in concrete?",
        choices:["(a) Reducing cement volume","(b) Higher stiffness","(c) Faster gain of compressive strength","(d) Lighter concrete"],correct:0,
        ref:"§ Supplementary Cementitious Materials",
        solution:"<p>Primary reason: <strong>reduce cement volume</strong> (partial replacement), lowering cost and heat of hydration. Fly ash delays early strength.</p><p class='sol-answer'>∴ Answer A</p>"
      },
      {
        id:10,type:"single",
        text:"What cement type should be used for foundations exposed to <strong>heavy sulfate concentration</strong>?",
        choices:["(a) I","(b) III","(c) IV","(d) V"],correct:3,
        ref:"§ Portland Cement Types",
        solution:"<p><strong>Type V</strong> has very low C₃A, making it highly sulfate-resistant. Type I=general; III=high early strength; IV=low heat.</p><p class='sol-answer'>∴ Answer D (Type V)</p>"
      },
      {
        id:11,type:"single",
        text:"Ready-mixed 4000-psi concrete arrives with slump less than specified 6 in. Most appropriate corrective action:",
        choices:[
          "(A) Decrease water before truck leaves plant.",
          "(B) Increase water in truck at jobsite before pouring.",
          "(C) Increase drum rotation speed while truck is in transit.",
          "(D) Add an admixture in the truck at the jobsite before pouring."
        ],correct:3,
        ref:"§ Ready-Mix Concrete Field Adjustments",
        solution:"<p>Adding water alters w/c ratio — not permitted. High drum speed is a safety risk. Add a <strong>plasticizer/superplasticizer</strong> at jobsite to increase slump without changing w/c.</p><p class='sol-answer'>∴ Answer D</p>"
      },
      {
        id:12,type:"single",
        text:"Which is <strong>NOT correct</strong> about fly ash effects on concrete properties?",
        choices:["(a) Increase of workability","(b) Earlier gain strength","(c) Reduction of air content","(d) Reduction in water"],correct:1,
        ref:"§ Fly Ash Effects",
        solution:"<p>Fly ash <strong>delays</strong> strength gain (slower early strength), not earlier. The other options are correct effects.</p><p class='sol-answer'>∴ Answer B</p>"
      },
      {
        id:13,type:"single",
        img:"q13",imgAlt:"ASTM C39 cylinder strength table",
        text:"Standard ASTM C39 data for three 4×8 cylinders from one pour (f'c=4000 psi). Acceptable if no single test falls below f'c by more than 500 psi AND average of three ≥ f'c. Which statement is most correct?",
        choices:[
          "(A) Concrete is acceptable despite cylinder 2 not meeting f'c",
          "(B) Not acceptable since cylinders 1 and 2 don't meet f'c",
          "(C) Acceptable despite cylinders 1 and 2 not meeting f'c",
          "(D) Not acceptable despite cylinder 2 exceeding f'c"
        ],correct:0,
        ref:"§ ASTM C39 Acceptance Criteria",
        solution:"<div class='formula'>Cyl 1: 50,456/12.57 = 4015 psi (> f'c ✓)\nCyl 2: 48,598/12.57 = 3867 psi (< f'c by 133 psi, within 500 ✓)\nCyl 3: 52,420/12.57 = 4171 psi (> f'c ✓)\nAverage: 4018 psi > 4000 psi ✓</div><p>Concrete is <strong>acceptable</strong>.</p><p class='sol-answer'>∴ Answer A</p>"
      },
      {
        id:14,type:"single",
        text:"Coarse aggregate water content=<strong>6%</strong>, SSD content=<strong>4.5%</strong>. Mix water should be:",
        choices:["(A) Kept unchanged","(B) Reduced by 1.5% of aggregate weight","(C) Reduced by 4.5% of aggregate weight","(D) Reduced by 6% of aggregate weight"],correct:1,
        ref:"§ Aggregate Moisture Correction (SSD)",
        solution:"<div class='formula'>Extra water = 6% − 4.5% = 1.5%</div><p>Reduce mix water by <strong>1.5%</strong> of aggregate weight.</p><p class='sol-answer'>∴ Answer B</p>"
      },
      {
        id:15,type:"single",
        text:"No concrete beams available to check flexural strength of pavement. Appropriate action:",
        choices:[
          "(A) Core 18\" long 6×6 beam and run flexural test",
          "(B) Core 6\"×12\" cylinder and run split tensile test",
          "(C) Core 6\"×12\" cylinder and run compressive test",
          "(D) Reject the concrete pavement"
        ],correct:1,
        ref:"§ Pavement Acceptance / Flexural Strength",
        solution:"<p>Standard alternative: <strong>core a 6×12 cylinder and run split tensile test</strong>. Correlates to flexural strength.</p><p class='sol-answer'>∴ Answer B</p>"
      },
      {
        id:16,type:"single",
        text:"Cored cylinders from a structure are adequate — most accurate statement:",
        choices:[
          "(A) Average of 3 cores > 110% of f'c and no single core < 85% of f'c",
          "(B) Average of 3 cores ≥ 85% of f'c and no single core < 75% of f'c",
          "(C) Average of 3 cores > 85% of MR and no single core < 75% of MR",
          "(D) Average of 3 cores > 85% of f'c and no single core < 75% of f'c"
        ],correct:1,
        ref:"§ ACI 318 Core Adequacy Criteria",
        solution:"<p>Per ACI 318: average ≥ <strong>85% of f'c</strong> AND no single core &lt; <strong>75% of f'c</strong>.</p><p class='sol-answer'>∴ Answer B</p>"
      }
    ]
  }
,

  {
    id:3,
    section:"general",
    category:"Materials (NCEES)",
    title:"Geotechnical Engineering — Part 2",
    subtitle:"Compaction, grain size, soil classification, pipe materials",
    tag:"Quiz 1 Part 2",
    questions:[
      {
        id:19,type:"single",
        text:"The moisture content of soil at which the <strong>maximum dry unit weight</strong> is attained is generally referred to as:",
        choices:["(A) Optimum moisture content","(B) Maximum moisture content","(C) Minimum moisture content","(D) None of the above"],correct:0,
        ref:"§ Compaction / Proctor Test",
        solution:"<p>In the unit weight vs. moisture content plot, maximum dry density is attained at a moisture content called the <strong>optimum moisture content (OMC)</strong>.</p><p class='sol-answer'>∴ Answer A</p>"
      },
      {
        id:20,type:"single",
        img:"q20",imgAlt:"Compaction test data table and blank plot",
        text:"A set of laboratory compaction test data is tabulated below (ASTM D 698 Standard Proctor test). Plot the data and determine: The <strong>maximum dry unit weight (pcf)</strong> and <strong>optimum moisture content (%)</strong> are most nearly:",
        choices:["(A) 120, 12.5","(B) 118.5, 10.5","(C) 118.5, 12.5","(D) 120, 15.5"],correct:2,
        ref:"§ ASTM D698 Standard Proctor",
        solution:"<p>Plotting the five data points and drawing a smooth curve through them:</p><img src=IMG_Q20C alt='Compaction curve solution' style='max-width:100%;border-radius:6px;border:1px solid var(--border);margin:8px 0;'><p><strong>Maximum dry unit weight = 118.5 pcf</strong> (peak of curve)<br><strong>Optimum moisture content = 12.5%</strong> (moisture at peak)</p><p class='sol-answer'>∴ Answer C (118.5 pcf, 12.5%)</p>"
      },
      {
        id:21,type:"fill",
        text:"Fill in the blank. Figure shows the grain size distribution curves for three soils A, B and C.",
        img:"q21",imgAlt:"Grain size distribution curves for soils A, B and C",
        fillText:"Among these three soils, Soil __BLANK21__ has the largest fine content. 70% of Soil C passing through 0.075mm (#200) while other soil passing is negligible.",
        correctFill:"C",altFills:["c","C","soil c","Soil C"],
        ref:"§ Grain Size Distribution",
        solution:"<p>From the grain size distribution chart, <strong>Soil C</strong> extends the furthest to the right (smallest grain sizes) and has the highest percentage passing the No. 200 sieve (~70%), indicating the largest fine content.</p><p class='sol-answer'>∴ Answer: C</p>"
      },
      {
        id:22,type:"single",
        text:"What Liquid Limit (LL) and Plasticity Index (PI) values would be associated with a soil classified <strong>CH</strong>?",
        choices:["A) LL = 12 and PI = 38","B) LL = 63 and PI = 38","C) LL = 63 and PI = 11","D) LL = 40 and PI = 11"],correct:1,
        ref:"§ USCS — CH Classification",
        solution:"<p><strong>CH (Fat Clay)</strong> requires LL ≥ 50 and plots above the A-line on the plasticity chart.</p><p>LL=63 is high (>50 ✓). PI=38 is high and plots above the A-line (PI &gt; 0.73×(LL−20) = 31.4 ✓). CH soils are characterized by high plasticity and significant volume changes with moisture.</p><p class='sol-answer'>∴ Answer B (LL=63, PI=38)</p>"
      },
      {
        id:23,type:"single",
        text:"Classify a soil using USCS with: % passing No. 4 sieve = 95%, % passing No. 200 sieve = 11%, Cu = 16 and Cc = 3.6, LL = 40 and PL = 30.",
        choices:["(A) SP-SM","(B) SP-SC","(C) SP","(D) SM"],correct:0,
        ref:"§ 3.7.2 USCS Classification",
        solution:"<p>% fines = 11%, % Gravel = 5%, % Sands = 84%. Cu=16 and Cc=3.6. PI = 40−30 = 10.</p><p>Sand-dominant, fines between 5–12% → borderline. Cu≥6 but Cc not between 1–3 → not SW criteria met fully. PI=10 plots above A-line (above ML/CL boundary). Classification: <strong>SP-SM</strong> (Poorly Graded Sand with Silt).</p><p class='sol-answer'>∴ Answer A (SP-SM)</p>"
      },
      {
        id:24,type:"single",
        text:"Which of the following methods is <strong>NOT</strong> a corrosion protection method of a wastewater treatment plant?",
        choices:["(A) Cathodic Protection","(B) Protective coating","(C) pH control","(D) Cement without lining"],correct:3,
        ref:"§ Corrosion Protection / TSS 4.9.5",
        solution:"<p>The correct answer is <strong>cement without lining</strong>. Cathodic protection, protective coating, and pH control are all valid corrosion protection methods.</p><p>Lining protects pipe from corrosion — cement <em>without</em> lining provides no corrosion protection. Orthophosphate (TSS 4.9.5) acts as a corrosion inhibitor by forming a protective film inside pipes.</p><p class='sol-answer'>∴ Answer D</p>"
      },
      {
        id:25,type:"single",
        text:"Which of the following pipe materials is recommended by the Chlorine Institute to carry <strong>liquid or dry gaseous chlorine under pressure</strong>?",
        choices:["(A) Schedule 80 steel","(B) PVC","(C) Ductile Iron","(D) None of the above"],correct:0,
        ref:"§ TSS 4.4.4.8 Pipe Material",
        solution:"<p>Chlorine is a highly corrosive hazardous material. Per TSS 4.4.4.8 and the Chlorine Institute:</p><p>Pipes carrying elemental liquid or gaseous chlorine under pressure must be <strong>Schedule 80 seamless steel tubing</strong>. PVC, rubber, polyethylene, and other materials recommended by the Chlorine Institute must never be used for chlorine solution piping.</p><p class='sol-answer'>∴ Answer A (Schedule 80 steel)</p>"
      },
      {
        id:26,type:"single",
        text:"A sewer pipeline is planned in a <strong>wetland</strong>; what should be the pipe material?",
        choices:["(A) Copper","(B) Cast Iron","(C) Polyethylene","(D) Concrete"],correct:2,
        ref:"§ Pipe Materials for Wetland Environments",
        solution:"<p><strong>Polyethylene (HDPE/PE)</strong> is the most suitable choice for sewer pipelines in wetland environments due to its corrosion resistance, flexibility, and environmental sustainability.</p><p>Cast iron is susceptible to corrosion in high-moisture environments. Copper can be toxic to aquatic organisms. Concrete requires specialized equipment and may cause ecological disruption.</p><p class='sol-answer'>∴ Answer C (Polyethylene)</p>"
      },
      {
        id:27,type:"single",
        text:"Which of the following can <strong>NOT</strong> be used as force main for potable water transmission?",
        choices:["(A) VCP","(B) Ductile Iron","(C) Steel","(D) PVC"],correct:0,
        ref:"§ Force Main Pipe Materials",
        solution:"<p><strong>VCP (Vitrified Clay Pipe)</strong> is not used for force mains in potable water transmission systems. While VCP is durable and corrosion-resistant, it is not suitable for pressurized systems — it is only used for gravity sewer applications.</p><p>Ductile iron, steel, and PVC are all appropriate for pressurized force main applications.</p><p class='sol-answer'>∴ Answer A (VCP)</p>"
      }
    ]
  }

];

// ── Section definitions (controls home page order/labels) ─────
var SECTIONS = [
  { id:"general",       label:"General Topics",              icon:"📚", color:"var(--accent)"  },
  { id:"hydraulics",    label:"Hydraulics & Hydrology",      icon:"💧", color:"#00d4aa"        },
  { id:"environmental", label:"Environmental Engineering",   icon:"🌿", color:"#22c97a"        },
  { id:"conceptual",    label:"Special Topics / Conceptual", icon:"🧠", color:"#f5c542"        },
  { id:"practice",      label:"Practice Exams",              icon:"📝", color:"#f08030"        },
  { id:"simulation",    label:"Simulation Exams",            icon:"🎯", color:"#f04f5e"        }
];
