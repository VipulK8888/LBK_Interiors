/**
 * LBK Surfaces - Dynamic Project Catalog Data Model
 * Structure ready for headless CMS or Admin API integration
 */

export const PROJECTS = [
  {
    id: "proj-1",
    slug: "penthouse-altamount",
    title: "THE PENTHOUSE AT ALTAMOUNT",
    category: "MARBLE",
    categoryLabel: "Marble Installation",
    location: "Altamount Road, South Mumbai",
    city: "Mumbai",
    year: "2025",
    area: "8,500 sq.ft",
    material: "Bookmatched Italian Statuario & Michael Angelo Marble",
    scope: "Continuous bookmatched living flooring, monolithic master bathroom with seamless dry-lay veining, and 45° mitred kitchen waterfall island.",
    featured: true,
    latest: true,
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    introImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    description: "An architectural penthouse demanding the highest standard of stone craftsmanship. Over 8,500 square feet of hand-selected Italian Statuario slabs were dry-laid in our warehouse prior to installation to ensure uninterrupted natural vein flow across wide-span corridors and living pavilions. Every joint was calibrated to sub-millimeter tolerances with custom-tinted epoxy infill.",
    craftsmanshipNotes: [
      "Sub-millimeter 0.8mm joint calibration with zero-height lip tolerance across 24-meter open spans.",
      "Flawless 4-way bookmatched focal layout in the grand living hall.",
      "45-degree hand-chamfered edge mitering on monolithic island counters and bathroom portals.",
      "Diamond pad mirror-polishing up to 10,000 grit finish with penetrative silane-siloxane sealing."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        caption: "Continuous Statuario grain progression throughout the open-plan gallery",
        orientation: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        caption: "Monolithic vanity carved from a single slab with bookmatched drawer fronts",
        orientation: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        caption: "Sub-millimeter edge detailing around flush brass threshold transitions",
        orientation: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        caption: "Full-height dry-lay bathroom marble with integrated hidden drain channel",
        orientation: "landscape"
      }
    ],
    video: {
      title: "Altamount Penthouse Installation Sequence",
      duration: "01:24",
      poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-concrete-and-wood-design-41584-large.mp4"
    },
    published: true
  },
  {
    id: "proj-2",
    slug: "pavilion-house-pune",
    title: "PAVILION HOUSE",
    category: "TILES",
    categoryLabel: "Large-Format Porcelain Slabs",
    location: "Boat Club Road, Pune",
    city: "Pune",
    year: "2025",
    area: "6,200 sq.ft",
    material: "3200 × 1600 mm Italian Porcelain Slim Slabs (6mm & 12mm)",
    scope: "Interior and exterior seamless flooring, floating step treads, and structural wall cladding with specialized vacuum-assisted suction installation.",
    featured: true,
    latest: true,
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    introImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85",
    description: "Pavilion House embraces modern minimalism through colossal continuous porcelain slabs measuring 3.2 meters by 1.6 meters. Handling these ultra-slender 6mm sheets required specialized mechanical lifting frames and laser leveling. The result is a nearly jointless floor surface that expands outdoor light into the interior volumes.",
    craftsmanshipNotes: [
      "Rigid vacuum-beam manipulation eliminating micro-fractures during slab lifting.",
      "Dual-buttering adhesive application with 100% void-free mortar contact.",
      "Precision waterjet mitering for seamless corner returns without plastic or metallic trim.",
      "Seamless indoor-to-veranda elevation transition with invisible slot drainage."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85",
        caption: "Seamless indoor-outdoor porcelain flooring with uninterrupted grid lines",
        orientation: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85",
        caption: "Slim 6mm slab wall cladding framed with recessed shadow reveals",
        orientation: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
        caption: "Large-format tile precision staircase wrapping around natural lightwell",
        orientation: "landscape"
      }
    ],
    video: {
      title: "Precision Slab Handling & Dry-Lay at Pavilion House",
      duration: "01:05",
      poster: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxurious-modern-house-42007-large.mp4"
    },
    published: true
  },
  {
    id: "proj-3",
    slug: "monolith-villa-alibaug",
    title: "THE MONOLITH VILLA",
    category: "GRANITE",
    categoryLabel: "Granite Staircase & Cladding",
    location: "Awas Beach, Alibaug / Mumbai",
    city: "Mumbai",
    year: "2024",
    area: "9,800 sq.ft",
    material: "Flamed & Leathered Absolute Jet Black Granite",
    scope: "Cantilevered solid granite staircase, thermal-flamed outdoor courtyard paving, and textured monolithic water feature walls.",
    featured: true,
    latest: true,
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    introImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=85",
    description: "Carved from monolithic blocks of South Indian Jet Black Granite, this coastal villa features an architectural cantilevered staircase suspended from reinforced masonry. Each solid tread weighs over 140 kilograms, anchored with concealed stainless tensile rods and finished with a leathered tactile texture underfoot.",
    craftsmanshipNotes: [
      "Engineering of hidden chemical-anchored internal steel brackets for floating cantilever treads.",
      "Custom dual-finish treatment: flamed anti-slip top surface with hand-honed bullnose edges.",
      "Seismic expansion joints disguised within monolithic shadow lines.",
      "Salt-spray resistant impregnation guarding against coastal humidity and efflorescence."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=85",
        caption: "Cantilevered jet black granite treads floating against board-marked concrete",
        orientation: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
        caption: "Tactile leathered granite surface reflecting soft architectural downlighting",
        orientation: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
        caption: "Hand-honed nosing detail with recessed LED illumination track",
        orientation: "portrait"
      }
    ],
    video: {
      title: "Cantilevered Granite Staircase Load Test & Reveal",
      duration: "00:58",
      poster: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architectural-interior-design-41585-large.mp4"
    },
    published: true
  },
  {
    id: "proj-4",
    slug: "koregaon-park-residence",
    title: "KOREGAON PARK RESIDENCE",
    category: "MARBLE",
    categoryLabel: "Travertine Wall Cladding",
    location: "Koregaon Park, Pune",
    city: "Pune",
    year: "2024",
    area: "5,400 sq.ft",
    material: "Roman Silver & Navona Travertine with Fluted Detailing",
    scope: "Full-height vertical fluted stone wall cladding, dry-hung mechanical installation, and master suite continuous stone bath.",
    featured: true,
    latest: false,
    coverImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=85",
    introImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    description: "An homage to timeless classical stonework reinterpreted for a contemporary Pune residence. Selected vein-cut Roman Travertine slabs were CNC-fluted into continuous vertical rhythms and hung on ventilated aluminum sub-frames to allow breathability while maintaining perfect vertical alignment across multi-storey volumes.",
    craftsmanshipNotes: [
      "Mechanically engineered concealed aluminum bracket fixing with non-staining elastomeric buffers.",
      "Custom vein matching across 32 continuous vertical panels spanning two floors.",
      "Resin-filled micro-pores preserving tactile natural stone character while facilitating maintenance.",
      "Seamless integration of concealed air conditioning grilles within stone reveals."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
        caption: "Fluted Roman travertine wall accentuating double-height living room volume",
        orientation: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        caption: "Corner mitre intersection showing continuous fluting profile",
        orientation: "portrait"
      }
    ],
    video: {
      title: "CNC Stone Milling and Mechanical Dry-Hang Process",
      duration: "01:12",
      poster: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxurious-modern-kitchen-with-marble-countertops-41586-large.mp4"
    },
    published: true
  },
  {
    id: "proj-5",
    slug: "sea-facing-duplex-worli",
    title: "SEA-FACING DUPLEX",
    category: "CIVIL & FINISHING",
    categoryLabel: "Civil & Finishing Work",
    location: "Worli Sea Face, Mumbai",
    city: "Mumbai",
    year: "2024",
    area: "7,100 sq.ft",
    material: "Botticino Fiorito Italian Marble & Engineered Stone Screed",
    scope: "Complete structural slab leveling, acoustic decoupling membranes, zero-tolerance screeding, and 7,100 sq.ft of seamless diamond-polished Botticino.",
    featured: false,
    latest: false,
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    introImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    description: "A comprehensive civil engineering and surface finishing challenge atop an oceanfront tower in Worli. Our civil team stripped irregular concrete substrates, installed German sound-damping underlayments, and cast rapid-hardening polymer-modified screeds before laying 7,100 square feet of Botticino Fiorito marble with zero lippage.",
    craftsmanshipNotes: [
      "Substrate tolerance held to less than 1.5mm deviation over 3-meter straight edge.",
      "Acoustic impact noise decoupling membrane certified to -21dB transmission reduction.",
      "Diamond paste wet-grinding through seven abrasive grades to reveal crystalline stone depth.",
      "Custom perimeter expansion joints matched to warm stone baseboards."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        caption: "Polished Botticino marble reflecting the Arabian sea horizon",
        orientation: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        caption: "Flush threshold transition between marble flooring and solid teak parquet",
        orientation: "portrait"
      }
    ],
    video: {
      title: "Screed Precision & Diamond Crystallization Polish",
      duration: "01:30",
      poster: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-concrete-and-wood-design-41584-large.mp4"
    },
    published: true
  },
  {
    id: "proj-6",
    slug: "the-sanctuary-spa-lonavala",
    title: "THE SANCTUARY RETREAT",
    category: "TILES",
    categoryLabel: "Bathroom Tiling & Wellness",
    location: "Tungarli Hills, Lonavala",
    city: "Lonavala",
    year: "2025",
    area: "4,200 sq.ft",
    material: "Handmade Moroccan Zellige & Large Calacatta Gold Porcelain",
    scope: "Curved steam room tiling, zero-barrier curbless showers, bookmatched porcelain vanities, and epoxy waterproof tile joints.",
    featured: true,
    latest: false,
    coverImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
    introImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85",
    description: "Crafted as a private hill retreat spa, this sanctuary combines the organic character of handmade zellige tiles with ultra-precise large-format Calacatta Gold porcelain. Every wet area incorporates heated floor underlays, multi-stage tanking waterproofing, and invisible concealed stainless slot gutters.",
    craftsmanshipNotes: [
      "Laser-calibrated compound fall gradients for rapid, puddling-free shower drainage.",
      "100% two-component epoxy grouting resisting mineral buildup and steam expansion.",
      "Curvilinear wall tiling around steam room benches with hand-mitred mosaic transitions.",
      "Integrated linear LED profiles recessed flush with porcelain surfaces."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85",
        caption: "Curbless walk-in shower with continuous vein-matched porcelain and slot drain",
        orientation: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
        caption: "Freestanding stone bathtub set upon textured flamed basalt flooring",
        orientation: "portrait"
      }
    ],
    video: {
      title: "Waterproof Tanking & Precision Slot Drain Execution",
      duration: "00:45",
      poster: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxurious-modern-house-42007-large.mp4"
    },
    published: true
  }
];

export const CATEGORIES = [
  { key: "ALL", label: "All Works" },
  { key: "TILES", label: "Tiles & Slabs" },
  { key: "MARBLE", label: "Italian Marble" },
  { key: "GRANITE", label: "Granite & Stone" },
  { key: "CIVIL & FINISHING", label: "Civil & Finishing" }
];
