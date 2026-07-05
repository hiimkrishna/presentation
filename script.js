/* ==========================================================================
   1. SLIDE DATA CONFIGURATION
   ========================================================================== */
const SLIDES_DATA = [
  {
    id: 1,
    tagline: "Progress Report",
    title: "My 20-Day Development Journey",
    description: "A clear look at what I have built, what I have learned, and how I transitioned from React basics to modern Next.js workflows.",
    footerText: "Use Left/Right Arrows or Click Navigation Below",
    type: "overview",
    phases: [
      { label: "Phase 1", title: "React Foundation", desc: "Learning React by rebuilding TyInteractive and replicating premium layouts." },
      { label: "Phase 2", title: "Next.js Transition", desc: "Moving to Next.js and completing a template conversion test for Mostafa Bhai." },
      { label: "Phase 3", title: "Advanced Concepts", desc: "Building the Northbeam Dashboard prototype to master app authentication." }
    ]
  },
  {
    id: 2,
    tagline: "Phase 1: React Basics",
    title: "TYInteractive Migration & Stripe Experiment",
    footerText: "React & Frontend Optimization",
    type: "split-showcase",
    cards: [
      {
        title: "TyInteractive SPA Rebuild",
        desc: "Converted our old WordPress website into a clean Single Page Application (SPA).",
        img: "./TYInteractive.png",
        alt: "TyInteractive Project Screenshot",
        bullets: [
          "Changed heavy PHP templates into reusable React components.",
          "Used React hooks to handle user interactions instantly."
        ]
      },
      {
        title: "Stripe Pricing Page Challenge",
        desc: "Recreated the complex Stripe pricing layout from scratch to test UI skills.",
        img: "./StripePricing.png",
        alt: "Stripe Pricing Project Screenshot",
        bullets: [
          "Learned browser window APIs and responsive tracking.",
          "Applied layout optimization tricks for fast browser rendering."
        ]
      }
    ]
  },
  {
    id: 3,
    tagline: "Phase 2: Next.js Framework",
    title: "Moving to Next.js & Mentor Evaluation",
    footerText: "Next.js Project Validation",
    type: "hero-split",
    img: "./DevFlow.png",
    alt: "HTML to Next.js Template Conversion Screenshot",
    content: {
      heading: "The Transition to Next.js",
      desc: "Moved into Next.js to leverage server-side features and modern file-based routing protocols.",
      evaluationTitle: "Mostafa Bhai's Evaluation Task",
      evaluationDesc: "Converted a raw HTML template into a full Next.js application structure to prove fundamental knowledge.",
      status: "Broken down flat HTML into modular layouts and pages."
    }
  },
  {
    id: 4,
    tagline: "Current Phase: Real-World Prototype",
    title: "Northbeam Dashboard & Authentication",
    footerText: "Active Practical Application",
    type: "dashboard-status",
    img: "./northBeams.png",
    alt: "Northbeam Prototype Screenshot",
    heading: "The Project: Northbeam Dashboard",
    desc: "Building a multi-page operational dashboard application prototype to study advanced global state and route shielding mechanisms.",
    focusTitle: "Active Focus: User Authentication",
    focusDesc: "Learning how to securely store user tokens, handle persistent logins, and protect secure dashboard layouts.",
    metrics: [
      { label: "Component Architecture", value: "100%", progress: "100%", color: "bg-teal-500" },
      { label: "Authentication Loops", value: "In Progress", progress: "45%", color: "bg-amber-500" }
    ]
  },
  {
    id: 5,
    tagline: "Next Steps",
    title: "Immediate Next Objectives",
    footerText: "Future Roadmap",
    type: "roadmap",
    steps: [
      { index: 1, title: "Complete Authentication", desc: "Finish the login security loops inside the Northbeam Dashboard prototype." },
      { index: 2, title: "Dynamic Data Binding", desc: "Connect the static layout fields to dynamic database endpoints for live testing." },
      { index: 3, title: "Mentor Code Review", desc: "Go through the entire codebase with Mostafa Bhai to clean and optimize my work before adding more features." }
    ]
  }
];

/* ==========================================================================
   2. MODULAR COMPONENT TEMPLATES
   ========================================================================= */
const Components = {
  Header: (tagline, title, description) => `
    <div>
      <div class="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-2">${tagline}</div>
      <h1 class="${description ? 'text-4xl' : 'text-3xl'} font-bold text-white ${description ? 'mb-4' : 'mb-6'}">${title}</h1>
      ${description ? `<p class="text-slate-400 text-lg max-w-2xl">${description}</p>` : ''}
    </div>
  `,

  Footer: (current, total, text) => `
    <div class="flex justify-between items-center text-sm text-slate-500 border-t border-slate-800 pt-4">
      <div>Slide ${current} of ${total}</div>
      <div>${text}</div>
    </div>
  `,

  OverviewType: (slide) => `
    <div id="slide${slide.id}" class="slide">
      ${Components.Header(slide.tagline, slide.title, slide.description)}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        ${slide.phases.map(p => `
          <div class="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl">
            <div class="text-teal-400 font-bold text-xl mb-2">${p.label}</div>
            <h3 class="text-white font-semibold text-lg mb-1">${p.title}</h3>
            <p class="text-slate-400 text-sm">${p.desc}</p>
          </div>
        `).join('')}
      </div>
      ${Components.Footer(slide.id, SLIDES_DATA.length, slide.footerText)}
    </div>
  `,

  SplitShowcaseType: (slide) => `
    <div id="slide${slide.id}" class="slide">
      ${Components.Header(slide.tagline, slide.title)}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        ${slide.cards.map(c => `
          <div class="bg-slate-800/30 p-5 rounded-xl border border-slate-700/30 space-y-4">
            <div class="border-l-2 border-teal-500 pl-4">
              <h4 class="text-white font-semibold text-lg">${c.title}</h4>
              <p class="text-slate-400 text-sm mt-1">${c.desc}</p>
            </div>
            <div class="w-full h-56 bg-slate-900 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center">
              <img src="${c.img}" alt="${c.alt}" class="w-full h-full object-cover" />
            </div>
            <ul class="list-disc list-inside text-slate-400 text-xs space-y-1 pl-2">
              ${c.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      ${Components.Footer(slide.id, SLIDES_DATA.length, slide.footerText)}
    </div>
  `,

  HeroSplitType: (slide) => `
    <div id="slide${slide.id}" class="slide">
      ${Components.Header(slide.tagline, slide.title)}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto items-center max-w-5xl mx-auto">
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold text-white mb-2">${slide.content.heading}</h3>
            <p class="text-slate-400 text-sm">${slide.content.desc}</p>
          </div>
          <div class="border-t border-slate-700/50 pt-4">
            <h3 class="text-lg font-semibold text-teal-400 mb-1">${slide.content.evaluationTitle}</h3>
            <p class="text-slate-400 text-sm mb-3">${slide.content.evaluationDesc}</p>
            <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
              <span class="text-emerald-400 font-semibold">✓ Done:</span> ${slide.content.status}
            </div>
          </div>
        </div>
        <div class="w-full h-80 bg-slate-900 rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center">
          <img src="${slide.img}" alt="${slide.alt}" class="w-full h-full object-cover" />
        </div>
      </div>
      ${Components.Footer(slide.id, SLIDES_DATA.length, slide.footerText)}
    </div>
  `,

  DashboardStatusType: (slide) => `
    <div id="slide${slide.id}" class="slide">
      ${Components.Header(slide.tagline, slide.title)}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto items-center">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-white">${slide.heading}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">${slide.desc}</p>
          <div class="bg-teal-950/30 border border-teal-800/50 p-4 rounded-lg">
            <div class="text-teal-400 font-semibold text-sm mb-1">${slide.focusTitle}</div>
            <p class="text-slate-400 text-xs">${slide.focusDesc}</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="w-full h-56 bg-slate-900 rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center">
            <img src="${slide.img}" alt="${slide.alt}" class="w-full h-full object-cover" />
          </div>
          <div class="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl space-y-3">
            ${slide.metrics.map(m => `
              <div class="space-y-1">
                <div class="flex justify-between text-xs text-slate-400">
                  <span>${m.label}</span><span>${m.value}</span>
                </div>
                <div class="w-full bg-slate-700 h-1.5 rounded-full">
                  <div class="${m.color} h-1.5 rounded-full" style="width: ${m.progress}"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      ${Components.Footer(slide.id, SLIDES_DATA.length, slide.footerText)}
    </div>
  `,

  RoadmapType: (slide) => `
    <div id="slide${slide.id}" class="slide">
      ${Components.Header(slide.tagline, slide.title)}
      <div class="space-y-4 my-auto max-w-2xl mx-auto w-full">
        ${slide.steps.map(s => `
          <div class="flex items-start bg-slate-800/40 p-4 rounded-lg border border-slate-700/40">
            <div class="bg-slate-900 text-teal-400 font-bold rounded-md px-3 py-1 mr-4">${s.index}</div>
            <div>
              <h4 class="text-white font-semibold">${s.title}</h4>
              <p class="text-slate-400 text-sm mt-0.5">${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
      ${Components.Footer(slide.id, SLIDES_DATA.length, slide.footerText)}
    </div>
  `
};

/* ==========================================================================
   3. ENGINE & APPLICATION CONTROLLER
   ========================================================================== */
const SliderController = (() => {
  let currentSlide = 1;
  const totalSlides = SLIDES_DATA.length;

  function renderApp() {
    const container = document.getElementById("slides-container");
    container.innerHTML = SLIDES_DATA.map(slide => {
      switch(slide.type) {
        case "overview":         return Components.OverviewType(slide);
        case "split-showcase":   return Components.SplitShowcaseType(slide);
        case "hero-split":       return Components.HeroSplitType(slide);
        case "dashboard-status": return Components.DashboardStatusType(slide);
        case "roadmap":          return Components.RoadmapType(slide);
        default:                 return '';
      }
    }).join('');
  }

  function showSlide(index) {
    if (index < 1 || index > totalSlides) return;
    
    document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
    const activeSlide = document.getElementById(`slide${index}`);
    if (activeSlide) activeSlide.classList.add("active");
    
    currentSlide = index;
  }

  return {
    init: () => {
      renderApp();
      showSlide(1);
      
      // Global Keyboard Event Setup
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") SliderController.next();
        if (e.key === "ArrowLeft") SliderController.prev();
      });
    },
    next: () => { if (currentSlide < totalSlides) showSlide(currentSlide + 1); },
    prev: () => { if (currentSlide > 1) showSlide(currentSlide - 1); }
  };
})();

// Initialize slide rendering once DOM tree finishes mounting
document.addEventListener("DOMContentLoaded", SliderController.init);