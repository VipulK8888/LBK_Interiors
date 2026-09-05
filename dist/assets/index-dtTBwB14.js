(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function A(){const a=document.querySelector(".site-header"),e=document.querySelector("#mobile-menu-btn"),i=document.querySelector("#mobile-nav-drawer"),t=document.querySelectorAll(".nav-link, .mobile-nav-link"),s=()=>{a&&(window.scrollY>40?a.classList.add("scrolled"):a.classList.remove("scrolled"))};window.addEventListener("scroll",s,{passive:!0}),s(),e&&i&&(e.addEventListener("click",()=>{i.classList.contains("open")?o():r()}),t.forEach(n=>{n.addEventListener("click",()=>{o()})}));function r(){e.classList.add("active"),i.classList.add("open"),document.body.style.overflow="hidden"}function o(){e&&e.classList.remove("active"),i&&i.classList.remove("open"),document.body.style.overflow=""}window.addEventListener("hashchange",u),u();function u(){const n=window.location.hash||"#home",c=n.split("/")[0];t.forEach(h=>{const g=h.getAttribute("href");g&&(g===n||g===c)?h.classList.add("active"):h.classList.remove("active")})}}const m=[{id:"proj-1",slug:"penthouse-altamount",title:"THE PENTHOUSE AT ALTAMOUNT",category:"MARBLE",categoryLabel:"Marble Installation",location:"Altamount Road, South Mumbai",city:"Mumbai",year:"2025",area:"8,500 sq.ft",material:"Bookmatched Italian Statuario & Michael Angelo Marble",scope:"Continuous bookmatched living flooring, monolithic master bathroom with seamless dry-lay veining, and 45° mitred kitchen waterfall island.",featured:!0,latest:!0,coverImage:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",introImage:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",description:"An architectural penthouse demanding the highest standard of stone craftsmanship. Over 8,500 square feet of hand-selected Italian Statuario slabs were dry-laid in our warehouse prior to installation to ensure uninterrupted natural vein flow across wide-span corridors and living pavilions. Every joint was calibrated to sub-millimeter tolerances with custom-tinted epoxy infill.",craftsmanshipNotes:["Sub-millimeter 0.8mm joint calibration with zero-height lip tolerance across 24-meter open spans.","Flawless 4-way bookmatched focal layout in the grand living hall.","45-degree hand-chamfered edge mitering on monolithic island counters and bathroom portals.","Diamond pad mirror-polishing up to 10,000 grit finish with penetrative silane-siloxane sealing."],gallery:[{url:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",caption:"Continuous Statuario grain progression throughout the open-plan gallery",orientation:"landscape"},{url:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",caption:"Monolithic vanity carved from a single slab with bookmatched drawer fronts",orientation:"portrait"},{url:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",caption:"Sub-millimeter edge detailing around flush brass threshold transitions",orientation:"portrait"},{url:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",caption:"Full-height dry-lay bathroom marble with integrated hidden drain channel",orientation:"landscape"}],video:{title:"Altamount Penthouse Installation Sequence",duration:"01:24",poster:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-concrete-and-wood-design-41584-large.mp4"},published:!0},{id:"proj-2",slug:"pavilion-house-pune",title:"PAVILION HOUSE",category:"TILES",categoryLabel:"Large-Format Porcelain Slabs",location:"Boat Club Road, Pune",city:"Pune",year:"2025",area:"6,200 sq.ft",material:"3200 × 1600 mm Italian Porcelain Slim Slabs (6mm & 12mm)",scope:"Interior and exterior seamless flooring, floating step treads, and structural wall cladding with specialized vacuum-assisted suction installation.",featured:!0,latest:!0,coverImage:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",introImage:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85",description:"Pavilion House embraces modern minimalism through colossal continuous porcelain slabs measuring 3.2 meters by 1.6 meters. Handling these ultra-slender 6mm sheets required specialized mechanical lifting frames and laser leveling. The result is a nearly jointless floor surface that expands outdoor light into the interior volumes.",craftsmanshipNotes:["Rigid vacuum-beam manipulation eliminating micro-fractures during slab lifting.","Dual-buttering adhesive application with 100% void-free mortar contact.","Precision waterjet mitering for seamless corner returns without plastic or metallic trim.","Seamless indoor-to-veranda elevation transition with invisible slot drainage."],gallery:[{url:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85",caption:"Seamless indoor-outdoor porcelain flooring with uninterrupted grid lines",orientation:"landscape"},{url:"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85",caption:"Slim 6mm slab wall cladding framed with recessed shadow reveals",orientation:"portrait"},{url:"https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",caption:"Large-format tile precision staircase wrapping around natural lightwell",orientation:"landscape"}],video:{title:"Precision Slab Handling & Dry-Lay at Pavilion House",duration:"01:05",poster:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxurious-modern-house-42007-large.mp4"},published:!0},{id:"proj-3",slug:"monolith-villa-alibaug",title:"THE MONOLITH VILLA",category:"GRANITE",categoryLabel:"Granite Staircase & Cladding",location:"Awas Beach, Alibaug / Mumbai",city:"Mumbai",year:"2024",area:"9,800 sq.ft",material:"Flamed & Leathered Absolute Jet Black Granite",scope:"Cantilevered solid granite staircase, thermal-flamed outdoor courtyard paving, and textured monolithic water feature walls.",featured:!0,latest:!0,coverImage:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",introImage:"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=85",description:"Carved from monolithic blocks of South Indian Jet Black Granite, this coastal villa features an architectural cantilevered staircase suspended from reinforced masonry. Each solid tread weighs over 140 kilograms, anchored with concealed stainless tensile rods and finished with a leathered tactile texture underfoot.",craftsmanshipNotes:["Engineering of hidden chemical-anchored internal steel brackets for floating cantilever treads.","Custom dual-finish treatment: flamed anti-slip top surface with hand-honed bullnose edges.","Seismic expansion joints disguised within monolithic shadow lines.","Salt-spray resistant impregnation guarding against coastal humidity and efflorescence."],gallery:[{url:"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=85",caption:"Cantilevered jet black granite treads floating against board-marked concrete",orientation:"landscape"},{url:"https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",caption:"Tactile leathered granite surface reflecting soft architectural downlighting",orientation:"portrait"},{url:"https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",caption:"Hand-honed nosing detail with recessed LED illumination track",orientation:"portrait"}],video:{title:"Cantilevered Granite Staircase Load Test & Reveal",duration:"00:58",poster:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-modern-architectural-interior-design-41585-large.mp4"},published:!0},{id:"proj-4",slug:"koregaon-park-residence",title:"KOREGAON PARK RESIDENCE",category:"MARBLE",categoryLabel:"Travertine Wall Cladding",location:"Koregaon Park, Pune",city:"Pune",year:"2024",area:"5,400 sq.ft",material:"Roman Silver & Navona Travertine with Fluted Detailing",scope:"Full-height vertical fluted stone wall cladding, dry-hung mechanical installation, and master suite continuous stone bath.",featured:!0,latest:!1,coverImage:"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=85",introImage:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",description:"An homage to timeless classical stonework reinterpreted for a contemporary Pune residence. Selected vein-cut Roman Travertine slabs were CNC-fluted into continuous vertical rhythms and hung on ventilated aluminum sub-frames to allow breathability while maintaining perfect vertical alignment across multi-storey volumes.",craftsmanshipNotes:["Mechanically engineered concealed aluminum bracket fixing with non-staining elastomeric buffers.","Custom vein matching across 32 continuous vertical panels spanning two floors.","Resin-filled micro-pores preserving tactile natural stone character while facilitating maintenance.","Seamless integration of concealed air conditioning grilles within stone reveals."],gallery:[{url:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",caption:"Fluted Roman travertine wall accentuating double-height living room volume",orientation:"landscape"},{url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",caption:"Corner mitre intersection showing continuous fluting profile",orientation:"portrait"}],video:{title:"CNC Stone Milling and Mechanical Dry-Hang Process",duration:"01:12",poster:"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=85",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-luxurious-modern-kitchen-with-marble-countertops-41586-large.mp4"},published:!0},{id:"proj-5",slug:"sea-facing-duplex-worli",title:"SEA-FACING DUPLEX",category:"CIVIL & FINISHING",categoryLabel:"Civil & Finishing Work",location:"Worli Sea Face, Mumbai",city:"Mumbai",year:"2024",area:"7,100 sq.ft",material:"Botticino Fiorito Italian Marble & Engineered Stone Screed",scope:"Complete structural slab leveling, acoustic decoupling membranes, zero-tolerance screeding, and 7,100 sq.ft of seamless diamond-polished Botticino.",featured:!1,latest:!1,coverImage:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",introImage:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",description:"A comprehensive civil engineering and surface finishing challenge atop an oceanfront tower in Worli. Our civil team stripped irregular concrete substrates, installed German sound-damping underlayments, and cast rapid-hardening polymer-modified screeds before laying 7,100 square feet of Botticino Fiorito marble with zero lippage.",craftsmanshipNotes:["Substrate tolerance held to less than 1.5mm deviation over 3-meter straight edge.","Acoustic impact noise decoupling membrane certified to -21dB transmission reduction.","Diamond paste wet-grinding through seven abrasive grades to reveal crystalline stone depth.","Custom perimeter expansion joints matched to warm stone baseboards."],gallery:[{url:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",caption:"Polished Botticino marble reflecting the Arabian sea horizon",orientation:"landscape"},{url:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",caption:"Flush threshold transition between marble flooring and solid teak parquet",orientation:"portrait"}],video:{title:"Screed Precision & Diamond Crystallization Polish",duration:"01:30",poster:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-concrete-and-wood-design-41584-large.mp4"},published:!0},{id:"proj-6",slug:"the-sanctuary-spa-lonavala",title:"THE SANCTUARY RETREAT",category:"TILES",categoryLabel:"Bathroom Tiling & Wellness",location:"Tungarli Hills, Lonavala",city:"Lonavala",year:"2025",area:"4,200 sq.ft",material:"Handmade Moroccan Zellige & Large Calacatta Gold Porcelain",scope:"Curved steam room tiling, zero-barrier curbless showers, bookmatched porcelain vanities, and epoxy waterproof tile joints.",featured:!0,latest:!1,coverImage:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",introImage:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85",description:"Crafted as a private hill retreat spa, this sanctuary combines the organic character of handmade zellige tiles with ultra-precise large-format Calacatta Gold porcelain. Every wet area incorporates heated floor underlays, multi-stage tanking waterproofing, and invisible concealed stainless slot gutters.",craftsmanshipNotes:["Laser-calibrated compound fall gradients for rapid, puddling-free shower drainage.","100% two-component epoxy grouting resisting mineral buildup and steam expansion.","Curvilinear wall tiling around steam room benches with hand-mitred mosaic transitions.","Integrated linear LED profiles recessed flush with porcelain surfaces."],gallery:[{url:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85",caption:"Curbless walk-in shower with continuous vein-matched porcelain and slot drain",orientation:"landscape"},{url:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",caption:"Freestanding stone bathtub set upon textured flamed basalt flooring",orientation:"portrait"}],video:{title:"Waterproof Tanking & Precision Slot Drain Execution",duration:"00:45",poster:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",videoUrl:"https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxurious-modern-house-42007-large.mp4"},published:!0}],k=[{key:"ALL",label:"All Works"},{key:"TILES",label:"Tiles & Slabs"},{key:"MARBLE",label:"Italian Marble"},{key:"GRANITE",label:"Granite & Stone"},{key:"CIVIL & FINISHING",label:"Civil & Finishing"}];class R{constructor(){this.modalEl=null,this.videoEl=null,this.titleEl=null,this.init()}init(){this.createModalDOM(),this.attachEventListeners()}createModalDOM(){const e=document.createElement("div");e.className="video-modal-backdrop",e.id="video-lightbox-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.innerHTML=`
      <div class="video-modal-dialog">
        <button class="video-modal-close" id="video-modal-close" aria-label="Close Video">
          <span>Close</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <video class="video-element" id="lightbox-video-element" controls playsinline preload="metadata">
          <source src="" type="video/mp4">
          Your browser does not support video playback.
        </video>
      </div>
    `,document.body.appendChild(e),this.modalEl=e,this.videoEl=e.querySelector("#lightbox-video-element")}attachEventListeners(){const e=this.modalEl.querySelector("#video-modal-close");e&&e.addEventListener("click",()=>this.close()),this.modalEl.addEventListener("click",i=>{i.target===this.modalEl&&this.close()}),window.addEventListener("keydown",i=>{i.key==="Escape"&&this.modalEl.classList.contains("active")&&this.close()})}open(e,i=""){this.videoEl&&(this.videoEl.src=e,this.modalEl.classList.add("active"),document.body.style.overflow="hidden",this.videoEl.play().catch(()=>{}))}close(){this.modalEl&&(this.modalEl.classList.remove("active"),document.body.style.overflow="",this.videoEl&&(this.videoEl.pause(),this.videoEl.currentTime=0,this.videoEl.src=""))}}const E=new R;function C(){const a=m.slice(0,4),e=m.filter(t=>t.latest).slice(0,3),i=m.slice(0,3);return`
    <div class="page-view-container">
      
      <!-- =================================================================
           SECTION 1 — FULL-WIDTH HERO WITH KINETIC TILE ANIMATION
           ================================================================= -->
      <section class="hero-section" id="hero">
        <div class="hero-background-media">
          <video 
            class="hero-video-element" 
            id="hero-bg-video" 
            autoplay 
            loop 
            muted 
            playsinline 
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88"
          >
            <source src="/assets/tiles-animation.mp4" type="video/mp4">
          </video>
          <div class="hero-overlay-gradient"></div>
        </div>

        <!-- Live 3D Animation Status Indicator & Control -->
        <div class="hero-animation-pill reveal-init">
          <span class="pulse-dot-green"></span>
          <span>3D Surface Assembly In Motion</span>
          <button class="hero-anim-ctrl-btn" id="hero-anim-toggle" aria-label="Toggle Animation Playback">
            <span id="hero-toggle-icon">⏸ Pause</span>
          </button>
        </div>

        <div class="site-container hero-content">
          <div class="label-eyebrow" style="color: rgba(248, 246, 242, 0.75);">
            Atelier for Architectural Stone & Surfaces
          </div>
          <h1 class="hero-headline reveal-init">
            <span>CRAFTING</span>
            <span>SPACES</span>
            <span>WITH PRECISION</span>
          </h1>

          <div class="hero-supporting-group reveal-init stagger-2">
            <p class="hero-description">
              Luxury tile, marble and granite installation for refined residential and commercial spaces.
            </p>
            <div>
              <a href="#work" class="editorial-link editorial-link-light">
                EXPLORE OUR WORK <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 2 — INTRODUCTION (ASYMMETRIC EXPLORE OUR CRAFT)
           ================================================================= -->
      <section class="editorial-section" id="intro">
        <div class="site-container">
          <div class="intro-grid">
            <div class="intro-typography reveal-init">
              <span class="label-eyebrow">The Atelier</span>
              <h2 class="heading-section intro-heading">
                EXPLORE<br>OUR CRAFT
              </h2>
              <p class="intro-paragraph">
                We believe exceptional surfaces are born at the intersection of geology and exacting craftsmanship. Our team collaborates with India’s leading architects, interior designers, and discerning homeowners to install imported Italian marble, colossal porcelain slabs, and monolithic granite with microscopic precision.
              </p>
              <a href="#about" class="editorial-link">
                ABOUT US <span class="arrow">→</span>
              </a>
            </div>

            <div class="intro-image-wrapper reveal-init stagger-2">
              <div class="intro-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85" 
                  alt="Precision Large-Format Surface Work" 
                  class="intro-image"
                />
              </div>
              <div class="image-caption-subtle">
                01 / Architectural Surface Alignment · Altamount Penthouse
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 2B — KINETIC ATELIER: 3D SURFACE ASSEMBLY (INTERACTIVE ANIMATION)
           ================================================================= -->
      <section class="editorial-section kinetic-atelier-section" id="kinetic-atelier">
        <div class="site-container">
          <div class="kinetic-header-row reveal-init">
            <div>
              <span class="label-eyebrow" style="color: var(--accent-stone-light);">Atelier Kinetics · Live 3D Simulation</span>
              <h2 class="heading-section" style="color: var(--text-inverse);">
                KINETIC DRY-LAY —<br>3D SURFACE ASSEMBLY
              </h2>
            </div>
            <p class="text-editorial-lead" style="color: rgba(248, 246, 242, 0.75); max-width: 48ch;">
              Experience the choreography of architectural surface installation. Watch how large-format porcelain slabs, Italian Statuario, and monolithic granite levitate, rotate in 360°, and bed into seamless floorplates with sub-millimeter tolerances.
            </p>
          </div>

          <!-- Interactive Viewport Frame -->
          <div class="kinetic-viewport-container reveal-init stagger-2">
            <span class="corner-cross corner-tl"></span>
            <span class="corner-cross corner-tr"></span>
            <span class="corner-cross corner-bl"></span>
            <span class="corner-cross corner-br"></span>

            <div class="kinetic-hud-top">
              <div class="hud-badge">
                <span class="pulse-dot-green"></span>
                <span>● 3D KINETIC DRY-LAY SIMULATION</span>
              </div>
              <div class="hud-coords">
                ELEVATION: +480.0M · PENTHOUSE PAVILION
              </div>
            </div>

            <video 
              class="kinetic-video" 
              id="kinetic-feature-video" 
              autoplay 
              loop 
              muted 
              playsinline
              poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            >
              <source src="/assets/tiles-animation.mp4" type="video/mp4">
            </video>

            <!-- Bottom Interactive Controls & Phase Synchronizer -->
            <div class="kinetic-controls-bar">
              <div class="kinetic-phases-tabs" id="kinetic-phases-tabs">
                <button class="phase-btn active" data-time="0">01 / LEVITATION</button>
                <button class="phase-btn" data-time="4">02 / 360° RADIAL</button>
                <button class="phase-btn" data-time="10">03 / INTERSECTION</button>
                <button class="phase-btn" data-time="15">04 / SUB-MILLIMETER FINISH</button>
              </div>

              <div class="kinetic-action-buttons">
                <button class="kinetic-btn" id="kinetic-play-pause-btn" aria-label="Play or pause animation">
                  <span id="kinetic-play-icon">⏸</span> Pause
                </button>
                <button class="kinetic-btn" id="kinetic-replay-btn" aria-label="Replay animation">
                  ↺ Replay
                </button>
                <select class="speed-select" id="kinetic-speed-select" aria-label="Playback Speed">
                  <option value="0.5">0.5x Slow-Mo</option>
                  <option value="1.0" selected>1.0x Real-Time</option>
                  <option value="1.5">1.5x Speed</option>
                </select>
                <button class="kinetic-btn" id="kinetic-fullscreen-btn" aria-label="Expand view">
                  ⛶ Expand
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 3 — SECONDARY IMAGE + STATEMENT
           ================================================================= -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline); border-bottom: var(--border-hairline);">
        <div class="site-container">
          <div class="statement-grid">
            <div class="statement-image-frame reveal-init">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" 
                alt="Detailed Stone Craftsmanship" 
                class="statement-image"
              />
            </div>

            <div class="statement-typography reveal-init stagger-2">
              <span class="label-eyebrow">Philosophy of Execution</span>
              <h2 class="statement-heading">
                WHERE DETAIL<br>BECOMES<br>DESIGN
              </h2>
              <p class="statement-body">
                Precision installation, carefully prepared surfaces and refined finishing transform premium materials into architectural spaces. Every joint, chamfered corner, and bookmatched vein reflects an uncompromising devotion to the art of the surface.
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 4 — FEATURED WORK (SELECTED WORK ASYMMETRIC)
           ================================================================= -->
      <section class="editorial-section" id="featured-work">
        <div class="site-container">
          <div class="section-header-row reveal-init">
            <div>
              <span class="label-eyebrow">Portfolio</span>
              <h2 class="heading-section">SELECTED WORK</h2>
            </div>
            <a href="#work" class="editorial-link">
              ALL PROJECTS <span class="arrow">→</span>
            </a>
          </div>

          <div class="work-asymmetric-grid">
            ${a.map((t,s)=>`
              <article class="work-card reveal-init stagger-${s+1}" data-slug="${t.slug}">
                <div class="work-card-image-wrap">
                  <img src="${t.coverImage}" alt="${t.title}" class="work-card-img" loading="lazy" />
                  <div class="work-card-hover-overlay">
                    <span class="work-card-hover-text">VIEW PROJECT →</span>
                  </div>
                </div>
                <div class="work-card-meta">
                  <span class="work-card-tag">${t.categoryLabel}</span>
                  <h3 class="work-card-title">${t.title}</h3>
                  <span class="work-card-location">${t.location}</span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 5 — MATERIALS (MARBLE, TILES, GRANITE, STONE)
           ================================================================= -->
      <section class="editorial-section materials-section" id="materials">
        <div class="site-container">
          <div class="reveal-init">
            <span class="label-eyebrow">Elements</span>
            <h2 class="heading-section">
              MATERIALS<br>THAT DEFINE<br>THE SPACE
            </h2>
          </div>

          <div class="materials-grid">
            
            <a href="#work?cat=MARBLE" class="material-panel reveal-init stagger-1">
              <div>
                <span class="material-number">01</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85" alt="Italian Statuario Marble" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">MARBLE</h3>
                <p class="material-desc">Italian Statuario, Michael Angelo, Calacatta Gold & Travertine. Master dry-lay bookmatching and diamond crystallization polishing.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE MARBLE <span class="arrow">→</span></span>
              </div>
            </a>

            <a href="#work?cat=TILES" class="material-panel reveal-init stagger-2">
              <div>
                <span class="material-number">02</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85" alt="Large Format Porcelain Slabs" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">TILES</h3>
                <p class="material-desc">Continuous 3200×1600mm porcelain slim slabs, artisan terracotta, handmade zellige, and acoustic floor tiles.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE TILES <span class="arrow">→</span></span>
              </div>
            </a>

            <a href="#work?cat=GRANITE" class="material-panel reveal-init stagger-3">
              <div>
                <span class="material-number">03</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85" alt="Granite & Basalt" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">GRANITE</h3>
                <p class="material-desc">Dense South Indian Jet Black, flamed outdoor paving, leathered cantilever stair treads, and monolithic kitchen countertops.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE GRANITE <span class="arrow">→</span></span>
              </div>
            </a>

            <a href="#work?cat=CIVIL & FINISHING" class="material-panel reveal-init stagger-4">
              <div>
                <span class="material-number">04</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=85" alt="Architectural Stone & Travertine" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">STONE</h3>
                <p class="material-desc">Ventilated fluted stone wall claddings, Roman Navona Travertine, Brazilian Quartzite, and zero-defect civil leveling screeds.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE FINISHING <span class="arrow">→</span></span>
              </div>
            </a>

          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 6 — CRAFTSMANSHIP IN DETAIL (WORKMANSHIP)
           ================================================================= -->
      <section class="editorial-section" id="craftsmanship">
        <div class="site-container">
          <div class="craft-detail-layout">
            <div class="reveal-init">
              <span class="label-eyebrow">Workmanship</span>
              <h2 class="heading-section">
                PRECISION<br>IN EVERY DETAIL
              </h2>
              <p class="text-editorial-lead" style="margin-top: 1.5rem;">
                True luxury is defined by the unseen: sub-millimeter joint lines, laser-calibrated elevations, and hand-finished 45° miters that allow continuous stone grain to fold seamlessly around architectural edges.
              </p>

              <div class="craft-specs-list">
                <div class="craft-spec-item">
                  <span class="craft-spec-title">0.8mm Joint Tolerances</span>
                  <span class="craft-spec-text">Zero lippage across continuous floorplates using mechanical tensioners.</span>
                </div>
                <div class="craft-spec-item">
                  <span class="craft-spec-title">45° Mitred Edge Waterfalls</span>
                  <span class="craft-spec-text">Micro-chamfered resin-bonded seams with invisible glue joints.</span>
                </div>
                <div class="craft-spec-item">
                  <span class="craft-spec-title">Cantilever Engineering</span>
                  <span class="craft-spec-text">Concealed high-tensile steel anchors for floating stone steps.</span>
                </div>
                <div class="craft-spec-item">
                  <span class="craft-spec-title">Diamond Crystallization</span>
                  <span class="craft-spec-text">Mirror wet-buffing up to 10,000 grit without synthetic wax buildup.</span>
                </div>
              </div>
            </div>

            <div class="craft-composition reveal-init stagger-2">
              <div class="craft-img-primary">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" alt="Sub-millimeter stone joint detail" />
              </div>
              <div class="craft-img-secondary">
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85" alt="Polished marble edge transition" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 7 — LARGE IMAGE STATEMENT (BUILT AROUND YOUR VISION)
           ================================================================= -->
      <section class="statement-fullwidth">
        <div class="statement-bg-media">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88" 
            alt="Monolithic Architectural Stone Living" 
            class="statement-bg-img"
          />
        </div>

        <div class="statement-content reveal-init">
          <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.7);">Architecture & Craft</span>
          <h2 class="statement-fullwidth-title">
            BUILT AROUND<br>YOUR VISION
          </h2>
          <p class="statement-fullwidth-p">
            From material selection and warehouse dry-laying to final diamond crystallization, every surface is executed to complement the architecture around it.
          </p>
          <a href="#services" class="editorial-link editorial-link-light" style="margin-top: 1rem;">
            OUR APPROACH <span class="arrow">→</span>
          </a>
        </div>
      </section>


      <!-- =================================================================
           SECTION 8 — OUR APPROACH (4 NUMBERED STAGES)
           ================================================================= -->
      <section class="editorial-section" id="approach">
        <div class="site-container">
          <div class="reveal-init">
            <span class="label-eyebrow">Execution Philosophy</span>
            <h2 class="heading-section">OUR APPROACH</h2>
          </div>

          <div class="approach-grid">
            <div class="approach-step reveal-init stagger-1">
              <span class="approach-num">01</span>
              <h3 class="approach-title">PREPARATION</h3>
              <p class="approach-desc">
                Proper surface preparation and site readiness. Laser humidity testing, acoustic decoupling membranes, and polymer leveling screeds.
              </p>
            </div>

            <div class="approach-step reveal-init stagger-2">
              <span class="approach-num">02</span>
              <h3 class="approach-title">PRECISION</h3>
              <p class="approach-desc">
                Accurate alignment, levels, joints and placement. Continuous warehouse dry-matching and CAD alignment coordinates prior to installation.
              </p>
            </div>

            <div class="approach-step reveal-init stagger-3">
              <span class="approach-num">03</span>
              <h3 class="approach-title">CRAFTSMANSHIP</h3>
              <p class="approach-desc">
                Detailed installation and finishing. Dual-buttering adhesives, precision waterjet mitering, and sub-millimeter calibrated joints.
              </p>
            </div>

            <div class="approach-step reveal-init stagger-4">
              <span class="approach-num">04</span>
              <h3 class="approach-title">FINAL DETAIL</h3>
              <p class="approach-desc">
                Inspection and refinement before completion. Diamond crystallization polishing, silane sealing, and micro-tolerance verification.
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 9 — PROJECTS IN MOTION (CINEMATIC VIDEO LIGHTBOX)
           ================================================================= -->
      <section class="editorial-section" style="background-color: var(--bg-dark); color: var(--text-inverse);">
        <div class="site-container">
          <div class="section-header-row reveal-init" style="border-bottom-color: rgba(248, 246, 242, 0.15);">
            <div>
              <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.6);">Cinematic Documentation</span>
              <h2 class="heading-section" style="color: var(--text-inverse);">PROJECTS<br>IN MOTION</h2>
            </div>
            <span class="text-meta" style="color: rgba(248, 246, 242, 0.5);">CLICK TO PLAY FILM</span>
          </div>

          <div class="motion-grid">
            <!-- Featured 3D Kinetic Simulation as First Item -->
            <div class="motion-card reveal-init stagger-1" data-video="/assets/tiles-animation.mp4" data-title="3D Kinetic Surface Assembly & Virtual Dry-Lay">
              <video class="motion-poster" autoplay loop muted playsinline style="object-fit: cover;">
                <source src="/assets/tiles-animation.mp4" type="video/mp4">
              </video>
              <div class="motion-overlay">
                <div class="motion-title">3D KINETIC SURFACE ASSEMBLY</div>
                <div class="motion-play-btn" aria-label="Play Video">
                  <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div class="motion-info">
                  <span class="text-meta" style="color: rgba(255,255,255,0.7);">3D Kinetic Simulation</span>
                  <span class="motion-duration">00:19</span>
                </div>
              </div>
            </div>

            ${i.slice(1,3).map((t,s)=>`
              <div class="motion-card reveal-init stagger-${s+2}" data-video="${t.video.videoUrl}" data-title="${t.video.title}">
                <img src="${t.video.poster}" alt="${t.video.title}" class="motion-poster" loading="lazy" />
                <div class="motion-overlay">
                  <div class="motion-title">${t.title}</div>
                  <div class="motion-play-btn" aria-label="Play Video">
                    <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <div class="motion-info">
                    <span class="text-meta" style="color: rgba(255,255,255,0.7);">${t.categoryLabel}</span>
                    <span class="motion-duration">${t.video.duration}</span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 10 — LATEST WORK (3 CAREFULLY SELECTED PROJECTS)
           ================================================================= -->
      <section class="editorial-section" id="latest-work">
        <div class="site-container">
          <div class="section-header-row reveal-init">
            <div>
              <span class="label-eyebrow">Recent Handover</span>
              <h2 class="heading-section">LATEST WORK</h2>
            </div>
            <a href="#work" class="editorial-link">
              VIEW ALL PROJECTS <span class="arrow">→</span>
            </a>
          </div>

          <div class="latest-grid">
            ${e.map((t,s)=>`
              <article class="latest-card reveal-init stagger-${s+1}" data-slug="${t.slug}">
                <div class="latest-image-frame">
                  <img src="${t.introImage||t.coverImage}" alt="${t.title}" class="latest-img" loading="lazy" />
                </div>
                <div class="latest-meta">
                  <h3 class="latest-title">${t.title}</h3>
                  <div class="latest-specs">${t.material} · ${t.city}</div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 11 — PROFESSIONAL CLIENTS (ARCHITECTS, BUILDERS, DESIGNERS)
           ================================================================= -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline);">
        <div class="site-container">
          <div class="pro-clients-grid">
            <div class="reveal-init">
              <div class="pro-target-tags">
                <span class="pro-pill">BUILDERS</span>
                <span class="pro-pill">ARCHITECTS</span>
                <span class="pro-pill">INTERIOR DESIGNERS</span>
                <span class="pro-pill">PROPERTY OWNERS</span>
              </div>
              <h2 class="heading-section" style="margin-bottom: 1.5rem;">
                BUILT FOR<br>PROJECTS THAT<br>DEMAND MORE
              </h2>
              <p class="text-editorial-lead" style="margin-bottom: 2.5rem;">
                We provide professional tile, marble, granite and finishing execution for projects where precision, coordination and quality matter. From turnkey villa flooring to bespoke penthouses, our project managers speak the language of technical blueprints and exacting tolerances.
              </p>
              <a href="#contact" class="editorial-link">
                DISCUSS YOUR PROJECT <span class="arrow">→</span>
              </a>
            </div>

            <div class="pro-image-frame reveal-init stagger-2">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" 
                alt="Architectural collaboration and stone finishing" 
                class="pro-image"
              />
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 12 — FINAL CTA
           ================================================================= -->
      <section class="cta-final-section" id="final-cta">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Inquiries</span>
            <h2 class="cta-headline">
              HAVE A<br>PROJECT IN MIND?
            </h2>
            <p class="text-editorial-lead">
              Let's create a finished surface worthy of the space. Contact our team to review drawings, schedule a site assessment, or arrange a private warehouse dry-lay consultation.
            </p>

            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                START A PROJECT <span class="arrow">→</span>
              </a>
              <a href="https://wa.me/919820012345?text=Hello%20LBK%20Surfaces,%20I%20would%20like%20to%20discuss%20a%20luxury%20surface%20installation%20project." target="_blank" rel="noopener noreferrer" class="editorial-link">
                WHATSAPP <span class="arrow">→</span>
              </a>
              <a href="tel:+919820012345" class="editorial-link">
                CALL <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `}function O(a){a.querySelectorAll(".work-card, .latest-card").forEach(l=>{l.addEventListener("click",()=>{const p=l.dataset.slug;p&&(window.location.hash=`#project/${p}`)})}),a.querySelectorAll(".motion-card").forEach(l=>{l.addEventListener("click",()=>{const p=l.dataset.video,v=l.dataset.title;p&&E.open(p,v)})});const t=a.querySelector("#hero-bg-video"),s=a.querySelector("#hero-anim-toggle"),r=a.querySelector("#hero-toggle-icon");t&&s&&s.addEventListener("click",l=>{l.stopPropagation(),t.paused?(t.play(),r&&(r.textContent="⏸ Pause")):(t.pause(),r&&(r.textContent="▶ Play"))});const o=a.querySelector("#kinetic-feature-video"),u=a.querySelectorAll("#kinetic-phases-tabs .phase-btn"),n=a.querySelector("#kinetic-play-pause-btn");a.querySelector("#kinetic-play-icon");const c=a.querySelector("#kinetic-replay-btn"),h=a.querySelector("#kinetic-speed-select"),g=a.querySelector("#kinetic-fullscreen-btn");if(o&&(o.addEventListener("timeupdate",()=>{const l=o.currentTime;let p=0;l>=15?p=3:l>=10?p=2:l>=4?p=1:p=0,u.forEach((v,y)=>{y===p?v.classList.add("active"):v.classList.remove("active")})}),u.forEach(l=>{l.addEventListener("click",()=>{const p=parseFloat(l.dataset.time);o.currentTime=p,o.paused&&(o.play(),n&&(n.innerHTML='<span id="kinetic-play-icon">⏸</span> Pause'))})}),n&&n.addEventListener("click",()=>{o.paused?(o.play(),n.innerHTML='<span id="kinetic-play-icon">⏸</span> Pause'):(o.pause(),n.innerHTML='<span id="kinetic-play-icon">▶</span> Play')}),c&&c.addEventListener("click",()=>{o.currentTime=0,o.play(),n&&(n.innerHTML='<span id="kinetic-play-icon">⏸</span> Pause')}),h&&h.addEventListener("change",l=>{o.playbackRate=parseFloat(l.target.value)}),g&&g.addEventListener("click",()=>{E.open("/assets/tiles-animation.mp4","3D Kinetic Surface Assembly & Virtual Dry-Lay Simulation")})),"IntersectionObserver"in window){const l=new IntersectionObserver(p=>{p.forEach(v=>{const y=v.target;v.isIntersecting?y.play().catch(()=>{}):y.pause()})},{threshold:.15});t&&l.observe(t),o&&l.observe(o)}}function I(a="ALL"){const e=a==="ALL"?m:m.filter(i=>i.category===a);return`
    <div class="page-view-container">
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Portfolio</span>
          <h1 class="heading-huge" style="margin-bottom: 1rem;">OUR WORK</h1>
          <p class="text-editorial-lead">
            A collection of surfaces crafted with precision. Monolithic marble floors, continuous porcelain slabs, cantilevered stone stairs, and meticulous civil finishing.
          </p>

          <div class="filter-bar" id="category-filter-bar">
            ${k.map(i=>`
              <button 
                class="filter-btn ${i.key===a?"active":""}" 
                data-category="${i.key}"
              >
                ${i.label}
              </button>
            `).join("")}
          </div>
        </div>
      </header>

      <section class="site-container" style="padding-bottom: 8rem;">
        <div class="portfolio-editorial-grid" id="portfolio-grid">
          ${x(e)}
        </div>
      </section>
    </div>
  `}function x(a){return a.length===0?`
      <div style="grid-column: 1 / -1; padding: 4rem 0; text-align: center;">
        <p class="text-editorial-lead" style="margin: 0 auto;">No projects currently listed in this category.</p>
      </div>
    `:a.map((e,i)=>{let t="1 / span 12",s="16 / 10",r="0";const o=i%5;return o===0?(t="1 / span 12",s="21 / 9"):o===1?(t="1 / span 7",s="4 / 3"):o===2?(t="8 / span 5",s="3 / 4",r="4rem"):o===3?(t="1 / span 5",s="1 / 1",r="2rem"):o===4&&(t="6 / span 7",s="16 / 10"),`
      <article 
        class="work-card reveal-init portfolio-item-transition" 
        data-slug="${e.slug}"
        style="grid-column: ${t}; margin-top: ${r};"
      >
        <div class="work-card-image-wrap" style="aspect-ratio: ${s};">
          <img src="${e.coverImage}" alt="${e.title}" class="work-card-img" loading="lazy" />
          <div class="work-card-hover-overlay">
            <span class="work-card-hover-text">VIEW PROJECT →</span>
          </div>
        </div>
        <div class="work-card-meta">
          <span class="work-card-tag">${e.categoryLabel}</span>
          <h2 class="work-card-title">${e.title}</h2>
          <div class="work-card-location">${e.material} · ${e.city}</div>
        </div>
      </article>
    `}).join("")}function T(a,e,i){a.querySelectorAll(".filter-btn").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.category;o!==e&&i(o)})}),a.querySelectorAll(".work-card").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.slug;o&&(window.location.hash=`#project/${o}`)})})}function N(a){const e=m.find(r=>r.slug===a)||m[0],i=m.findIndex(r=>r.slug===e.slug),t=m[(i+1)%m.length],s=m[(i-1+m.length)%m.length];return`
    <div class="page-view-container project-detail-view">
      
      <!-- HERO HEADER -->
      <section class="project-detail-hero">
        <img src="${e.coverImage}" alt="${e.title}" class="project-detail-hero-img" />
        <div class="project-detail-hero-overlay"></div>
        
        <div class="site-container" style="position: relative; z-index: 2; width: 100%;">
          <div style="margin-bottom: 1.5rem;">
            <a href="#work" class="editorial-link editorial-link-light">
              ← ALL PROJECTS
            </a>
          </div>
          <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.7);">
            ${e.categoryLabel} · ${e.city}
          </span>
          <h1 class="heading-huge" style="color: var(--text-inverse); max-width: 15ch;">
            ${e.title}
          </h1>
        </div>
      </section>


      <!-- PROJECT SPECS BAR -->
      <div class="project-specs-bar">
        <div class="site-container" style="display: contents;">
          <div class="spec-block">
            <span class="spec-label">Location</span>
            <span class="spec-value">${e.location}</span>
          </div>
          <div class="spec-block">
            <span class="spec-label">Material</span>
            <span class="spec-value">${e.material}</span>
          </div>
          <div class="spec-block">
            <span class="spec-label">Scope of Work</span>
            <span class="spec-value">${e.scope}</span>
          </div>
          <div class="spec-block">
            <span class="spec-label">Floorplate</span>
            <span class="spec-value">${e.area} · ${e.year}</span>
          </div>
        </div>
      </div>


      <!-- NARRATIVE OVERVIEW -->
      <section class="editorial-section">
        <div class="site-container">
          <div class="project-narrative-section">
            <div class="reveal-init">
              <span class="label-eyebrow">Project Overview</span>
              <h2 class="heading-section">
                TRANSFORMING<br>RAW GEOLOGY<br>INTO ARCHITECTURE
              </h2>
            </div>
            <div class="reveal-init stagger-2">
              <p class="text-editorial-lead" style="max-width: 100%; font-size: 1.15rem; line-height: 1.85;">
                ${e.description}
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- EDITORIAL PHOTOGRAPHY SEQUENCE -->
      <section class="site-container project-gallery-sequence">
        
        <!-- Full-Width Landscape Frame -->
        ${e.gallery[0]?`
          <div class="gallery-fullwidth reveal-init">
            <img src="${e.gallery[0].url}" alt="${e.gallery[0].caption}" loading="lazy" />
          </div>
          <div class="image-caption-subtle" style="margin-top: -3.5rem; margin-bottom: 2rem;">
            ${e.gallery[0].caption}
          </div>
        `:""}

        <!-- Asymmetric Duo Frame -->
        ${e.gallery[1]&&e.gallery[2]?`
          <div class="gallery-duo-asymmetric reveal-init">
            <div>
              <div class="gallery-duo-frame">
                <img src="${e.gallery[1].url}" alt="${e.gallery[1].caption}" loading="lazy" />
              </div>
              <div class="image-caption-subtle">${e.gallery[1].caption}</div>
            </div>
            <div style="margin-top: 3rem;">
              <div class="gallery-duo-frame" style="aspect-ratio: 1 / 1;">
                <img src="${e.gallery[2].url}" alt="${e.gallery[2].caption}" loading="lazy" />
              </div>
              <div class="image-caption-subtle">${e.gallery[2].caption}</div>
            </div>
          </div>
        `:""}

        <!-- Third Landscape or Portrait if available -->
        ${e.gallery[3]?`
          <div class="gallery-fullwidth reveal-init" style="aspect-ratio: 21 / 10;">
            <img src="${e.gallery[3].url}" alt="${e.gallery[3].caption}" loading="lazy" />
          </div>
          <div class="image-caption-subtle" style="margin-top: -3.5rem; margin-bottom: 2rem;">
            ${e.gallery[3].caption}
          </div>
        `:""}

      </section>


      <!-- CRAFTSMANSHIP DETAILS -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline); border-bottom: var(--border-hairline);">
        <div class="site-container">
          <div class="reveal-init" style="margin-bottom: 3.5rem;">
            <span class="label-eyebrow">Technical Execution</span>
            <h2 class="heading-section">CRAFTSMANSHIP DETAILS</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem;">
            ${e.craftsmanshipNotes.map((r,o)=>`
              <div class="reveal-init stagger-${o+1}" style="border-top: 1px solid rgba(22, 21, 20, 0.15); padding-top: 1.5rem;">
                <span class="text-meta" style="color: var(--accent-stone); margin-bottom: 0.5rem; display: block;">0${o+1} / CALIBRATION</span>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">${r}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>


      <!-- PROJECT VIDEO IN MOTION -->
      ${e.video?`
        <section class="editorial-section" style="background-color: var(--bg-dark); color: var(--text-inverse);">
          <div class="site-container">
            <div class="section-header-row reveal-init" style="border-bottom-color: rgba(248, 246, 242, 0.15);">
              <div>
                <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.6);">Process Documentation</span>
                <h2 class="heading-section" style="color: var(--text-inverse);">PROJECT FILM</h2>
              </div>
              <span class="text-meta" style="color: rgba(248, 246, 242, 0.5);">${e.video.duration}</span>
            </div>

            <div class="motion-card reveal-init" style="aspect-ratio: 21 / 9; max-width: 100%; margin-top: 2rem;" data-video="${e.video.videoUrl}" data-title="${e.video.title}">
              <img src="${e.video.poster}" alt="${e.video.title}" class="motion-poster" />
              <div class="motion-overlay">
                <div class="motion-title">${e.video.title}</div>
                <div class="motion-play-btn" aria-label="Play Project Film">
                  <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div class="motion-info">
                  <span class="text-meta" style="color: rgba(255,255,255,0.7);">${e.title}</span>
                  <span class="motion-duration">${e.video.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      `:""}


      <!-- NEXT & PREVIOUS PROJECT BAR -->
      <section class="site-container" style="padding: 4rem 0; border-bottom: var(--border-hairline);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
          <a href="#project/${s.slug}" class="editorial-link">
            ← PREVIOUS: ${s.title}
          </a>
          <a href="#project/${t.slug}" class="editorial-link">
            NEXT: ${t.title} →
          </a>
        </div>
      </section>


      <!-- FINAL PROJECT CTA -->
      <section class="cta-final-section">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Collaboration</span>
            <h2 class="cta-headline">
              READY TO START<br>YOUR PROJECT?
            </h2>
            <p class="text-editorial-lead">
              Our master stonemasons and technical directors are ready to review your architectural drawings and specifications.
            </p>
            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                DISCUSS YOUR PROJECT <span class="arrow">→</span>
              </a>
              <a href="#work" class="editorial-link">
                BACK TO PORTFOLIO <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `}function P(a){const e=a.querySelector(".motion-card");e&&e.addEventListener("click",()=>{const i=e.dataset.video,t=e.dataset.title;i&&E.open(i,t)})}const M=[{id:"luxury-tiles",number:"01",title:"LUXURY TILES",subtitle:"Artisan Ceramic & Handcrafted Glazes",summary:"Precision installation of designer Italian & Spanish ceramics, handcrafted zellige, and acoustic-backed tiles with flawless geometric calibration.",details:"From bespoke geometric tessellations to handmade artisanal clay glazes, luxury tile installation requires meticulous care to prevent chipping and ensure continuous alignment. We employ laser alignment grids, specialized diamond-blade wet cutters, and color-matched epoxy grouting.",specs:["Joint Widths down to 1.0mm","Laser Grid Calibration","Anti-efflorescence Waterproof Underlay","Zero Edge Chipping"],image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85"},{id:"marble-installation",number:"02",title:"MARBLE INSTALLATION",subtitle:"Italian & Imported Natural Stone",summary:"Master dry-lay layout, grain bookmatching, sub-millimeter leveling, and diamond mirror-crystallization polishing of Statuario, Michael Angelo, and Botticino.",details:"Imported marble represents the pinnacle of architectural luxury. We conduct full dry-lays in our temperature-controlled facility prior to site delivery, harmonizing natural veining across entire floorplates before precision bedding with polymer-modified adhesive systems.",specs:["Full Warehouse Dry-Lay Vein Matching","0.8mm Joint Tolerance","Multi-stage Diamond Crystallization","Penetrative Silane Sealing"],image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"},{id:"granite-work",number:"03",title:"GRANITE WORK",subtitle:"Monolithic & High-Traffic Surfaces",summary:"Heavy-duty granite installation for monolithic kitchen islands, exterior courtyards, and reception portals with flamed, leathered, or mirror finishes.",details:"Dense natural granites demand diamond tooling and structural substrate prep. Whether delivering leathered tactile finishes for tactile stair treads or thermal-flamed outdoor paving, we engineer stone assemblies that endure for generations.",specs:["Thermal Flamed & Leathered Finishes","Concealed Chemical Anchoring","Hydrophobic Stain Sealing","Heavy Dynamic Load Resistance"],image:"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=85"},{id:"large-format-tiles",number:"04",title:"LARGE-FORMAT TILE INSTALLATION",subtitle:"Up to 3200 × 1600 mm Porcelain Slabs",summary:"Vacuum-assisted mechanical crane manipulation, zero-void dual-buttering, and calibrated expansion joints for continuous porcelain slabs.",details:"Handling oversized porcelain slabs up to 3.2m in length requires specialized mechanical handling frames and certified lifting protocols. We guarantee 100% void-free mortar contact, eliminating hollow spots and cracking under point loads.",specs:["Slab Handling up to 3200×1600mm","100% Void-Free Dual Buttering","Internal Stress Relief Relief Cuts","Invisible Shadow Reveal Transitions"],image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85"},{id:"staircases",number:"05",title:"MARBLE & GRANITE STAIRCASES",subtitle:"Cantilevered, Floating & Spiral Treads",summary:"Solid stone step fabrication, cantilevered tread engineering, bullnose edge profiling, and concealed LED lighting track integrations.",details:"A stone staircase is a sculptural centrepiece. We execute floating cantilever treads anchored with hidden structural steel cores, seamless mitered box risers, and integrated non-slip tactile grooves carved directly into the stone.",specs:["Concealed Structural Steel Anchors","Integrated Recessed LED Channels","Continuous Grain Across Treads & Risers","Precision Mitred Return Faces"],image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"},{id:"wall-cladding",number:"06",title:"WALL CLADDING",subtitle:"Dry-Hung & Mechanical Ventilated Stone",summary:"Concealed aluminum bracket anchoring, vertical fluted stone panels, bookmatched feature walls, and acoustic decoupling reveals.",details:"Vertical stone installation requires engineering precision. Our dry-hung mechanical anchoring systems allow differential thermal movement and air ventilation while preserving razor-straight alignments across multi-storey elevations.",specs:["Concealed Aluminum Sub-Frame Fixing","Fluted & 3D Textured Stone Profiling","Full Seismic Isolation Buffers","Flush Architectural Reveals"],image:"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=85"},{id:"premium-flooring",number:"07",title:"PREMIUM FLOORING",subtitle:"Seamless Zero-Lippage Large Pavilions",summary:"High-precision floor leveling, decoupled acoustic underlayments, laser-verified flatness, and bespoke border inlays.",details:"We achieve flawless expansive floors by pairing high-performance polymer leveling screeds with calibrated mechanical tile leveling spacers, ensuring zero edge lippage across even the largest open-concept residences.",specs:["Zero-Lippage Mechanical Leveling","Laser Elevation Tolerance ±1mm / 3m","Acoustic Decoupling Underlayments","Flush Teak & Brass Threshold Inlays"],image:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85"},{id:"bathroom-tiling",number:"08",title:"BATHROOM TILING",subtitle:"Curbless Showers & Monolithic Wet Rooms",summary:"Complete multi-ply waterproof tanking, laser-graded compound fall slopes, hidden slot drainage, and bespoke stone vanities.",details:"Luxury bathrooms demand zero water penetration and immaculate geometry. We engineer curbless walk-in showers with concealed stainless slot gutters and 100% two-component epoxy grouting for lifetime moisture resistance.",specs:["Dual-Layer Elastomeric Tanking Membrane","Concealed Integrated Linear Slot Drains","Two-Component Anti-Fungal Epoxy Grout","Monolithic Stone Basin Carving"],image:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85"},{id:"civil-finishing",number:"09",title:"CIVIL & FINISHING WORK",subtitle:"Substrate Remediation & Engineering",summary:"Structural concrete leveling, rapid-drying polymer screeds, moisture barrier primers, and expansion joint engineering.",details:"A flawless stone surface begins beneath the surface. Our specialized civil engineering division inspects, repairs, and prepares concrete slabs to international flatness standards before any stone or tile touches the floor.",specs:["Rapid-Cure Polymer Screed Systems","Moisture Vapor Barrier Testing & Priming","Engineered Perimeter Expansion Joints","Substrate Crack Decoupling"],image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85"}];function q(){return`
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Disciplines & Specializations</span>
          <h1 class="heading-huge" style="margin-bottom: 1rem;">SURFACE DISCIPLINES</h1>
          <p class="text-editorial-lead">
            From millimeter-precise bookmatched Italian marble to continuous 3.2-meter porcelain slabs, our multidisciplinary stonemasons and civil finishing specialists execute complex architectural surfaces with zero compromise.
          </p>
        </div>
      </header>

      <section class="site-container" style="padding-bottom: 8rem;">
        <div class="services-catalog-list">
          ${M.map((a,e)=>`
            <article class="service-item-row reveal-init stagger-${e%3+1}" id="${a.id}">
              <div class="service-number">${a.number}</div>

              <div class="service-title-col">
                <span class="label-eyebrow">${a.subtitle}</span>
                <h3 class="heading-sub">${a.title}</h3>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 1rem;">
                  ${a.summary}
                </p>
                <div style="margin-top: 1.5rem;">
                  <a href="#contact" class="editorial-link">
                    INQUIRE ABOUT THIS DISCIPLINE <span class="arrow">→</span>
                  </a>
                </div>
              </div>

              <div class="service-specs-col">
                <span class="text-meta" style="color: var(--accent-stone); display: block; margin-bottom: 0.75rem;">
                  TECHNICAL SPECIFICATIONS
                </span>
                <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
                  ${a.specs.map(i=>`
                    <li style="font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                      <span style="width: 4px; height: 4px; background: var(--accent-stone); border-radius: 50%;"></span>
                      ${i}
                    </li>
                  `).join("")}
                </ul>
              </div>

              <div class="service-img-preview">
                <img src="${a.image}" alt="${a.title}" loading="lazy" />
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="cta-final-section">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Consultation</span>
            <h2 class="cta-headline">
              HAVE A COMPLEX<br>SURFACE TO EXECUTE?
            </h2>
            <p class="text-editorial-lead">
              Our engineering team is available for architectural specification reviews, mockups, and warehouse dry-lays.
            </p>
            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                DISCUSS SPECIFICATIONS <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `}function D(){return`
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Studio & Atelier</span>
          <h1 class="heading-huge" style="margin-bottom: 1.5rem; max-width: 14ch;">
            CRAFTED WITH EXPERIENCE. FINISHED WITH PRECISION.
          </h1>
          <p class="text-editorial-lead" style="max-width: 55ch; font-size: 1.2rem;">
            LBK Surfaces was founded on a singular architectural conviction: that natural stone and porcelain surfaces achieve true beauty only through uncompromising installation discipline.
          </p>
        </div>
      </header>

      <!-- EDITORIAL PHILOSOPHY SPREAD -->
      <section class="editorial-section">
        <div class="site-container">
          <div class="intro-grid">
            <div class="intro-typography reveal-init">
              <span class="label-eyebrow">The Philosophy</span>
              <h2 class="heading-section intro-heading">
                THE DISCIPLINE<br>OF THE SURFACE
              </h2>
              <p class="intro-paragraph">
                In contemporary luxury architecture, surfaces are no longer mere decorative coverings—they are structural spatial volumes. An uneven joint line or broken vein pattern disrupts the entire harmony of a space.
              </p>
              <p class="intro-paragraph">
                We bridge the critical gap between raw quarry extraction and finished architectural handovers. By maintaining strict control over substrate civil engineering, warehouse dry-matching, laser leveling, and diamond crystallization, we eliminate the guesswork that typically plagues stone projects.
              </p>
            </div>

            <div class="intro-image-wrapper reveal-init stagger-2">
              <div class="intro-image-frame" style="aspect-ratio: 4 / 5;">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" 
                  alt="Warehouse dry lay and laser inspection" 
                  class="intro-image"
                />
              </div>
              <div class="image-caption-subtle">
                Warehouse Dry-Lay Pavilion · Altamount Marble Selection
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- THREE PILLARS OF EXCELLENCE -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline); border-bottom: var(--border-hairline);">
        <div class="site-container">
          <div class="reveal-init" style="margin-bottom: 3.5rem;">
            <span class="label-eyebrow">Guiding Standards</span>
            <h2 class="heading-section">OUR CODE OF EXECUTION</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3.5rem;">
            <div class="reveal-init stagger-1">
              <span class="approach-num">01</span>
              <h3 class="heading-sub" style="margin-bottom: 1rem;">SUB-MILLIMETER TOLERANCE</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
                We operate with specialized European mechanical leveling spacers and laser levels, holding joint tolerances to 0.8mm with zero surface lippage across 25-meter spans.
              </p>
            </div>

            <div class="reveal-init stagger-2">
              <span class="approach-num">02</span>
              <h3 class="heading-sub" style="margin-bottom: 1rem;">WAREHOUSE DRY-MATCHING</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
                Every natural stone slab is physically pre-arranged in our temperature-controlled warehouse under natural daylight. Architects and clients review vein transitions before a single cut is made.
              </p>
            </div>

            <div class="reveal-init stagger-3">
              <span class="approach-num">03</span>
              <h3 class="heading-sub" style="margin-bottom: 1rem;">DIAMOND CRYSTALLIZATION</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
                We reject quick-fix surface waxes. Our finishing technicians perform multi-grade diamond abrasive wet-grinding up to 10,000 grit, delivering deep natural refractive clarity that lasts generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- WORKSHOP & TEAM -->
      <section class="editorial-section">
        <div class="site-container">
          <div class="statement-grid">
            <div class="statement-image-frame reveal-init" style="aspect-ratio: 1 / 1;">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" 
                alt="Master stonemason team" 
                class="statement-image"
              />
            </div>

            <div class="statement-typography reveal-init stagger-2">
              <span class="label-eyebrow">Legacy of Artisans</span>
              <h2 class="heading-section">
                MASTER STONEMASONS &<br>SITE DIRECTORS
              </h2>
              <p class="statement-body" style="margin-top: 1rem;">
                Our master installation technicians represent generations of traditional stone carving knowledge fused with cutting-edge German vacuum rigging and Italian waterjet technology. Every project is overseen on-site by a dedicated Project Director who coordinates seamlessly with structural engineers and design teams.
              </p>
              <div style="margin-top: 2rem;">
                <a href="#contact" class="editorial-link">
                  SCHEDULE A STUDIO VISIT <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-final-section">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Collaboration</span>
            <h2 class="cta-headline">
              LET'S BUILD<br>TOGETHER
            </h2>
            <p class="text-editorial-lead">
              Whether you are an architect designing a private residence or a developer executing a flagship project, we bring unmatched precision to your surfaces.
            </p>
            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                START A PROJECT <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `}const w=[{id:"art-1",slug:"art-of-bookmatched-statuario",title:"THE ART OF BOOKMATCHED STATUARIO IN CONTEMPORARY ARCHITECTURE",date:"OCTOBER 2025",readTime:"6 MIN READ",author:"Editorial Studio",coverImage:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",excerpt:"Why true architectural bookmatching requires dry-laying every slab in a controlled space before a single cut is made on site.",content:`
      <p class="article-lead">Natural stone is a geological narrative millions of years in the making. In high-end architectural interiors, the practice of bookmatching—mirroring consecutive marble slabs cut from the same block—elevates raw geological material into monumental art.</p>
      
      <h3>The Warehouse Dry-Lay: The Crucial Phase</h3>
      <p>True precision cannot be achieved through CAD drawings alone. Natural veining drifts by centimeters from the top of a block to the base. At LBK Surfaces, our process mandates a physical dry-lay where consecutive 3-meter slabs are laid flat in our Mumbai facility under balanced natural daylight. Here, master stonemasons and architects walk the floor, adjusting orientation until the visual balance is calibrated to perfection.</p>
      
      <blockquote>
        "The difference between ordinary masonry and architectural stonework is measured in tenths of a millimeter and the humility to listen to the stone's natural grain."
      </blockquote>

      <h3>Sub-Millimeter Joints and Zero-Height Lippage</h3>
      <p>Once dry-matched, the challenge shifts to site execution. Large-span floors require acoustic decoupling underlayments and rapid-curing polymer screeds. Using precision diamond cutting systems and custom-mixed epoxy resins that match the stone’s mineral matrix, our technicians achieve 0.8mm joints that visually melt into the background.</p>
    `},{id:"art-2",slug:"large-format-porcelain-slabs",title:"ENGINEERING THE CONTINUOUS SLAB: HANDLING 3200×1600MM PORCELAIN",date:"SEPTEMBER 2025",readTime:"5 MIN READ",author:"Technical Practice",coverImage:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",excerpt:"Overcoming thermal expansion, deflection, and void-free dual buttering in continuous slim slab installations.",content:`
      <p class="article-lead">The modern quest for jointless surfaces has catalyzed the rise of ultra-large format porcelain slabs measuring up to 3.2 meters by 1.6 meters. However, handling 6mm and 12mm ceramic sheets requires an entirely different engineering methodology than traditional tiles.</p>
      
      <h3>Zero Voids: The Rule of Dual Buttering</h3>
      <p>A single void beneath a large-format tile creates a point of vulnerability where concentrated pressure can cause catastrophic failure. We utilize specialized dual-buttering techniques combined with electric orbital vibrating compactors to expel 100% of trapped air, ensuring continuous adhesive bedding throughout the slab's entire surface area.</p>
      
      <h3>Mechanical Handling Frames</h3>
      <p>Manual carrying of 3-meter slabs causes flexural stress and micro-fissures. Our installation crews operate vacuum-assisted suction beam rigs that support the slab along its critical structural axes, ensuring safe transport from freight lifts to final placement.</p>
    `},{id:"art-3",slug:"cantilevered-granite-staircases",title:"CANTILEVERED STONE: BALANCING GRAVITY AND MASS IN FLOATING STAIRS",date:"AUGUST 2025",readTime:"7 MIN READ",author:"Structural Masonry",coverImage:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",excerpt:"How hidden steel cores and high-density natural granite create staircases that appear to float weightlessly in space.",content:`
      <p class="article-lead">Suspended staircases represent one of the most daring dialogues between weight and weightlessness in architecture. Transforming dense South Indian Jet Black granite into floating steps requires rigorous structural coordination.</p>
      
      <h3>Concealed Engineering</h3>
      <p>Each tread, weighing upwards of 140 kilograms, is carved with internal receiving channels that sleeve over precision-welded structural steel box tines anchored deep within reinforced concrete shear walls. High-performance chemical epoxies anchor the assembly, dampening dynamic vibrational frequencies caused by footfall.</p>
      
      <h3>Tactile Surface Treatments</h3>
      <p>For residential comfort, the top surface receives a flame-textured and water-brushed leathered finish, providing optimal friction while preserving the rich, deep charcoal tones of the granite.</p>
    `}];function $(a=null){if(a){const e=w.find(i=>i.slug===a)||w[0];return H(e)}return`
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Monograph & Editorial</span>
          <h1 class="heading-huge" style="margin-bottom: 1rem;">INSIGHTS</h1>
          <p class="text-editorial-lead">
            Essays on architectural stonework, sub-millimeter tolerances, material science, and the physics of the surface.
          </p>
        </div>
      </header>

      <section class="site-container" style="padding-bottom: 8rem; padding-top: 4rem;">
        <div style="display: flex; flex-direction: column; gap: 6rem;">
          ${w.map((e,i)=>`
            <article class="intro-grid reveal-init stagger-${i+1}" style="border-top: var(--border-hairline); padding-top: 3.5rem;">
              <div class="intro-typography">
                <span class="text-meta" style="color: var(--accent-stone); display: block; margin-bottom: 0.75rem;">
                  ${e.date} · ${e.readTime}
                </span>
                <h2 class="heading-section" style="font-size: clamp(1.6rem, 2.2vw, 2.4rem); margin-bottom: 1rem;">
                  ${e.title}
                </h2>
                <p class="intro-paragraph" style="margin-bottom: 1.5rem;">
                  ${e.excerpt}
                </p>
                <a href="#article/${e.slug}" class="editorial-link">
                  READ ESSAY <span class="arrow">→</span>
                </a>
              </div>

              <div class="intro-image-wrapper">
                <div class="intro-image-frame" style="aspect-ratio: 16 / 10;">
                  <img src="${e.coverImage}" alt="${e.title}" class="intro-image" loading="lazy" />
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

    </div>
  `}function H(a){return`
    <div class="page-view-container">
      
      <header class="project-detail-hero" style="min-height: 60vh;">
        <img src="${a.coverImage}" alt="${a.title}" class="project-detail-hero-img" />
        <div class="project-detail-hero-overlay"></div>
        <div class="site-container" style="position: relative; z-index: 2; width: 100%;">
          <div style="margin-bottom: 1.5rem;">
            <a href="#articles" class="editorial-link editorial-link-light">
              ← BACK TO INSIGHTS
            </a>
          </div>
          <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.7);">
            ${a.date} · ${a.readTime} · By ${a.author}
          </span>
          <h1 class="heading-section" style="color: var(--text-inverse); max-width: 16ch; font-size: clamp(2rem, 3.5vw, 3.8rem);">
            ${a.title}
          </h1>
        </div>
      </header>

      <article class="site-container-narrow editorial-section">
        <div style="font-size: 1.08rem; line-height: 1.85; color: var(--text-secondary);" class="article-body-content">
          ${a.content}
        </div>

        <div style="margin-top: 4rem; padding-top: 2rem; border-top: var(--border-hairline);">
          <a href="#articles" class="editorial-link">
            ← ALL ARTICLES
          </a>
        </div>
      </article>

    </div>
  `}let b=null;function L(){b&&b.disconnect(),b=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&(i.target.classList.add("revealed"),b.unobserve(i.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"}),document.querySelectorAll(".reveal-init, .reveal-curtain-wrap, .slow-zoom-in").forEach(e=>b.observe(e))}function F(a){let e=document.querySelector("#toast-notice");e||(e=document.createElement("div"),e.id="toast-notice",e.className="toast-notice",document.body.appendChild(e)),e.textContent=a,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},4e3)}function B(){return`
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Direct Contact & Estimates</span>
          <h1 class="heading-huge" style="margin-bottom: 1.5rem;">
            LET'S CREATE SOMETHING BEAUTIFUL.
          </h1>
          <p class="text-editorial-lead">
            Contact our project desk to schedule an architectural consultation, request an itemized rate estimate, or share drawings for tender evaluation.
          </p>
        </div>
      </header>

      <section class="site-container">
        <div class="contact-layout">
          
          <!-- LEFT: DIRECT DETAILS -->
          <div class="contact-direct-info reveal-init">
            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">PHONE</span>
              <a href="tel:+919820012345" style="font-size: 1.2rem; font-weight: 500;">+91 98200 12345</a>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Mon — Sat, 9:00 AM — 7:30 PM IST</span>
            </div>

            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">WHATSAPP INQUIRIES</span>
              <a href="https://wa.me/919820012345?text=Hello%20LBK%20Surfaces,%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noopener noreferrer" style="font-size: 1.2rem; font-weight: 500;">
                +91 98200 12345 →
              </a>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Instant drawing review & site video dispatch</span>
            </div>

            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">EMAIL</span>
              <a href="mailto:inquire@lbksurfaces.com" style="font-size: 1.2rem; font-weight: 500;">inquire@lbksurfaces.com</a>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Tenders, technical RFPs & BOQ specifications</span>
            </div>

            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">ATELIER & WAREHOUSE LOCATIONS</span>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                <strong>Mumbai Atelier:</strong> Laxmi Industrial Estate, New Link Rd, Andheri West, Mumbai, 400053<br><br>
                <strong>Dry-Lay Warehouse:</strong> Bhiwandi Stone Logistics Park, Mumbai-Nashik Expressway<br><br>
                <strong>Pune Studio:</strong> Kalyani Nagar, Pune, Maharashtra 411006
              </p>
            </div>
          </div>

          <!-- RIGHT: INQUIRY FORM -->
          <div class="reveal-init stagger-2">
            <form class="inquiry-form" id="inquiry-form">
              
              <div class="form-row-2col">
                <div class="form-group">
                  <label for="form-name" class="form-label">Full Name *</label>
                  <input type="text" id="form-name" class="form-input" required placeholder="Ar. Rajesh Verma / Sameer Mehta" />
                </div>
                <div class="form-group">
                  <label for="form-phone" class="form-label">Phone Number *</label>
                  <input type="tel" id="form-phone" class="form-input" required placeholder="+91 98765 43210" />
                </div>
              </div>

              <div class="form-row-2col">
                <div class="form-group">
                  <label for="form-email" class="form-label">Email Address *</label>
                  <input type="email" id="form-email" class="form-input" required placeholder="contact@studio.com" />
                </div>
                <div class="form-group">
                  <label for="form-project-type" class="form-label">Project Type *</label>
                  <select id="form-project-type" class="form-select" required>
                    <option value="" disabled selected>Select Specialization</option>
                    <option value="Italian Marble Installation">Italian Marble Installation & Polishing</option>
                    <option value="Large-Format Tile Slabs">Large-Format Porcelain Slabs (3200x1600)</option>
                    <option value="Granite Staircase / Paving">Granite Staircase & Countertops</option>
                    <option value="Wall Cladding">Stone Wall Cladding (Fluted / Mechanical)</option>
                    <option value="Luxury Bathroom Tiling">Luxury Bathroom / Wet Room Tiling</option>
                    <option value="Complete Civil & Finishing">Complete Civil Screed & Finishing Work</option>
                    <option value="Multiple Surface Scope">Full Residence / Commercial Scope</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="form-location" class="form-label">Project Location & City *</label>
                <input type="text" id="form-location" class="form-input" required placeholder="e.g. Bandra West, Mumbai or Boat Club Rd, Pune" />
              </div>

              <div class="form-group">
                <label for="form-message" class="form-label">Project Details / Estimated Area (Sq.Ft)</label>
                <textarea id="form-message" class="form-textarea" placeholder="Describe the architectural scope, approx floor area, preferred materials, and expected timeline..."></textarea>
              </div>

              <!-- DRAG-AND-DROP BLUEPRINTS / PHOTOS -->
              <div class="form-group">
                <label class="form-label">UPLOAD PROJECT PHOTOS / PLANS (OPTIONAL)</label>
                <div class="dropzone-container" id="file-dropzone">
                  <svg class="dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <div class="dropzone-text">
                    <strong>Click to upload</strong> or drag and drop architectural drawings, floor plans, or site photos (PDF, DWG, PNG, JPG up to 25MB)
                  </div>
                  <input type="file" id="file-input" multiple style="display: none;" accept="image/*,.pdf,.dwg" />
                </div>
                <div class="dropzone-preview-list" id="dropzone-preview-list"></div>
              </div>

              <div style="margin-top: 1rem;">
                <button type="submit" class="nav-cta-btn" style="padding: 16px 36px; font-size: 0.8rem;">
                  REQUEST A QUOTE <span class="arrow" style="margin-left: 6px;">→</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  `}function U(a){const e=a.querySelector("#inquiry-form"),i=a.querySelector("#file-dropzone"),t=a.querySelector("#file-input"),s=a.querySelector("#dropzone-preview-list");let r=[];i&&t&&(i.addEventListener("click",()=>t.click()),i.addEventListener("dragover",n=>{n.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",n=>{n.preventDefault(),i.classList.remove("drag-over"),n.dataTransfer.files&&n.dataTransfer.files.length>0&&o(n.dataTransfer.files)}),t.addEventListener("change",()=>{t.files&&t.files.length>0&&o(t.files)}));function o(n){for(let c=0;c<n.length;c++)r.push(n[c]);u()}function u(){if(!s)return;s.innerHTML=r.map((c,h)=>`
      <div class="file-preview-pill">
        <span>📎 ${c.name} (${(c.size/1024).toFixed(0)} KB)</span>
        <button type="button" data-index="${h}" class="remove-file-btn" style="color: red; font-size: 10px; cursor: pointer;">✕</button>
      </div>
    `).join(""),s.querySelectorAll(".remove-file-btn").forEach(c=>{c.addEventListener("click",h=>{h.stopPropagation();const g=parseInt(c.dataset.index);r.splice(g,1),u()})})}e&&e.addEventListener("submit",n=>{n.preventDefault();const c=e.querySelector("#form-name").value,h=e.querySelector("#form-project-type").value;F(`Thank you, ${c}. Your inquiry for "${h}" has been received. Our project desk will contact you within 4 hours.`),e.reset(),r=[],u()})}let d=null,f="ALL";function j(a){d=a,window.addEventListener("hashchange",S),S()}function S(){if(!d)return;const e=(window.location.hash||"#home").replace(/^#/,""),[i,t]=e.split("?"),s=i.split("/"),r=s[0]||"home",o=s[1]||null;if(t){const n=new URLSearchParams(t);n.has("cat")&&(f=n.get("cat"))}switch(window.scrollTo({top:0,behavior:"instant"}),r){case"home":document.title="LBK SURFACES — Atelier for Architectural Stone & Luxury Surfaces",d.innerHTML=C(),O(d);break;case"work":document.title="Our Work — LBK Surfaces Architectural Portfolio",d.innerHTML=I(f),T(d,f,n=>{f=n,d.innerHTML=I(f),T(d,f,c=>{f=c,S()}),L()});break;case"project":if(o)document.title=`${o.replace(/-/g," ").toUpperCase()} — LBK Surfaces Project Case Study`,d.innerHTML=N(o),P(d);else{window.location.hash="#work";return}break;case"services":document.title="Surface Disciplines & Capabilities — LBK Surfaces",d.innerHTML=q();break;case"about":document.title="About the Atelier & Philosophy — LBK Surfaces",d.innerHTML=D();break;case"articles":case"article":document.title="Monograph Insights & Essays — LBK Surfaces",d.innerHTML=$(o);break;case"contact":document.title="Inquire & Request Quote — LBK Surfaces",d.innerHTML=B(),U(d);break;default:window.location.hash="#home";return}const u=d.querySelector(".page-view-container");u&&requestAnimationFrame(()=>{u.classList.add("page-loaded")}),setTimeout(()=>{L()},50)}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#app-view");A(),j(a),window.addEventListener("scroll",()=>{const e=document.querySelector(".hero-image");if(e&&window.scrollY<window.innerHeight){const i=window.scrollY*.25;e.style.transform=`translateY(${i}px) scale(1.05)`}},{passive:!0})});
