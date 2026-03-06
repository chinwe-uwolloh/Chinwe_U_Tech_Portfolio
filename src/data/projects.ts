// Import all project images for proper Vite bundling
import solarisCover from "@/assets/projects/solaris-cover.jpg";
import solarisHeadbandNew from "@/assets/projects/solaris-headband-new.png";
import solarisScreen1 from "@/assets/projects/solaris-screen-1.jpg";
import solarisScreen2 from "@/assets/projects/solaris-screen-2.jpg";
import solarisScreen3 from "@/assets/projects/solaris-screen-3.jpg";

import thinkingcapzCover from "@/assets/projects/thinkingcapz-cover.jpg";
import thinkingcapzScreen1 from "@/assets/projects/thinkingcapz-screen-1.jpg";
import thinkingcapzScreen2 from "@/assets/projects/thinkingcapz-screen-2.jpg";
import thinkingcapzScreen3 from "@/assets/projects/thinkingcapz-screen-3.jpg";

import sparkCover from "@/assets/projects/spark-cover.jpg";
import sparkScreen1 from "@/assets/projects/spark-screen-1.jpg";
import sparkScreen2 from "@/assets/projects/spark-screen-2.jpg";
import sparkScreen3 from "@/assets/projects/spark-screen-3.jpg";
import sparkScreen4 from "@/assets/projects/spark-screen-4.jpg";

import duobuddyCover from "@/assets/projects/duobuddy-cover.jpg";
import duobuddyProblem from "@/assets/projects/duobuddy-problem.png";
import duobuddyFeatures1 from "@/assets/projects/duobuddy-features-1.png";
import duobuddyFeatures2 from "@/assets/projects/duobuddy-features-2.png";
import duobuddyValidation from "@/assets/projects/duobuddy-validation.png";
import duobuddyMarketing from "@/assets/projects/duobuddy-marketing.png";

import waterpureCover from "@/assets/projects/waterpure-cover.jpg";
import waterpureScreen1 from "@/assets/projects/waterpure-screen-1.jpg";

import spkakaCover from "@/assets/projects/spkaka-cover.jpg";

import anxoSlide01 from "@/assets/projects/anxo-slide-01.png";
import anxoSlide02 from "@/assets/projects/anxo-slide-02.png";
import anxoSlide03 from "@/assets/projects/anxo-slide-03.png";
import anxoSlide04 from "@/assets/projects/anxo-slide-04.png";
import anxoSlide05 from "@/assets/projects/anxo-slide-05.png";
import anxoSlide06 from "@/assets/projects/anxo-slide-06.png";
import anxoSlide07 from "@/assets/projects/anxo-slide-07.png";
import anxoSlide08 from "@/assets/projects/anxo-slide-08.png";
import anxoSlide09 from "@/assets/projects/anxo-slide-09.png";

export interface ProjectRoadmap {
  visuals?: {
    title: string;
    description: string;
    images: string[];
  };
  problem: string;
  solution: string;
  features: string[];
  audience: string;
  value: string;
  market: string;
  roadmap: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  image: string;
  coverImage: string;
  category: string;
  roadmap: ProjectRoadmap;
}

export const projects: Project[] = [
  {
    id: "solaris",
    name: "Solaris",
    tagline: "Regaining Independence with Brainwave Power",
    image: "",
    coverImage: solarisHeadbandNew,
    category: "HealthTech / Cognitive Enhancement",
    roadmap: {
      visuals: {
        title: "Product Screens & Hardware",
        description: "View the Solaris EEG headband, The Vault memory storage, Task Buddy shopping assistant, and NaviGuide AR navigation interface.",
        images: [
          solarisCover,
          solarisScreen1,
          solarisScreen2,
          solarisScreen3
        ]
      },
      problem: "Alzheimer's affects 6.7 million Americans (projected to reach 13 million by 2050), with 11 million unpaid caregivers contributing 18 billion hours annually. Only 15-20% of diagnosed individuals use any technological assistance. Current solutions are fragmented, complex, and don't address the core need for preserving independence and memory while reducing caregiver burden.",
      solution: "Solaris is an AI-powered cognitive enhancement system combining a feather-light EEG headset with a comprehensive mobile app ecosystem. The system strengthens memory through real-time brainwave feedback, provides emotional support, and integrates with daily tasks to help Alzheimer's patients maintain independence longer while giving caregivers peace of mind.",
      features: [
        "Graphene-Based EEG Sensor - Advanced, non-invasive brainwave monitoring for cognitive feedback",
        "The Vault - Secure digital repository for photos, videos, notes, and health information with smart memory triggers",
        "Task Buddy - AI assistant providing step-by-step guidance for daily activities like shopping using arrows, audio, and video",
        "NaviGuide AR Navigation - Real-time AR directions with safe zone GPS alerts to caregivers if boundaries crossed",
        "Real-time Brainwave Feedback - Immediate cognitive prompts and memory support based on brain activity",
        "Caregiver Dashboard - Live access to patient status, location, and health updates",
        "Emotional Tracking - AI monitors emotional states and provides calming exercises or emergency contact support",
        "Extended Battery Life - 24+ hours of continuous monitoring with wireless connectivity"
      ],
      audience: "Primary: Alzheimer's patients in early to mid-stages (ages 60-85) seeking to maintain independence. Their adult children (ages 35-60) who serve as primary caregivers and decision-makers. Secondary: Memory care facilities, neurologists, geriatric care specialists, and healthcare providers managing Alzheimer's patients. Total addressable market: 6.7M patients + 11M caregivers in the US alone.",
      value: "Solaris uniquely combines real-time cognitive enhancement with practical daily living support. Competitors like iMediSync and Muse offer brainwave monitoring but lack immediate memory prompts and seamless phone integration. Our system is the only solution providing AR navigation, task guidance, and emotional tracking in one comprehensive platform, enabling patients to maintain independence 2-3 years longer than without assistance.",
      market: "Phase 1: Beta test with 100 patient-caregiver pairs through partnership with 2 memory care facilities. Measure independence metrics, caregiver satisfaction, and cognitive improvement. Phase 2: Launch direct-to-consumer via website and Amazon, targeting caregiver communities. Phase 3: Establish partnerships with neurologists and geriatric clinics for prescription recommendations. Phase 4: Negotiate insurance coverage with Medicare and major providers. Validation through clinical studies published in neurology journals.",
      roadmap: "Phase 1 (Months 1-9): Clinical validation with 100 users, FDA clearance as Class II medical device, refine AI algorithms. Phase 2 (Year 1): Consumer launch at $799 device + $29/month subscription for AI services. Target 5,000 units in year one. Phase 3 (Year 2): Add integration with smart home devices, medication reminders, expand to mild cognitive impairment (MCI) market. Phase 4 (Years 3-5): International expansion, introduce family communication features, develop partnerships with pharmaceutical companies for clinical trials. Vision: Become the standard cognitive enhancement platform for aging populations worldwide."
    }
  },
  {
    id: "thinking-capz",
    name: "Thinking CAPZ",
    tagline: "Revolution for Neurodivergent Education",
    image: "",
    coverImage: thinkingcapzCover,
    category: "EdTech / Accessibility",
    roadmap: {
      visuals: {
        title: "Platform Interface",
        description: "See the Thinking CAPZ login, learning style assessment, CAPZ AI Tutor chatbot, and Quantum Quizzes adaptive learning system.",
        images: [
          thinkingcapzCover,
          thinkingcapzScreen1,
          thinkingcapzScreen2,
          thinkingcapzScreen3
        ]
      },
      problem: "7.3 million students (15% of public school attendees) receive special education services, yet current educational assistance lacks tailored content. Neurodivergent learners face significant struggles: lower test scores, difficulty in specific learning areas compared to neurotypical peers, and one-size-fits-all solutions that don't address their unique needs. Students diagnosed with ADHD, Autism, Dyslexia, and other conditions fall through the cracks of traditional education.",
      solution: "Thinking CAPZ is a revolutionary EdTech platform offering personalized learning paths for neurodiverse learners. Through an immersive onboarding process, the platform identifies each student's unique learning style, then delivers customized content via an AI tutor avatar, interactive quizzes, and multimedia formats (video, audio, visual, text) that adapt to how each brain learns best.",
      features: [
        "Smart Pad Onboarding - Engaging questionnaire that deduces unique learning styles and preferences",
        "CAPZ AI Tutor - Friendly avatar chatbot providing personalized, conversational learning with encouragement and adaptive resources",
        "Quantum Quizzes - Customized pop quizzes delivered at optimal pace with instant feedback for efficient learning",
        "Multi-Format Content - Transform lessons into video, audio, visual, or text based on learning preferences",
        "Adaptive Learning Paths - Curriculum adjusts difficulty and presentation based on real-time performance",
        "Progress Analytics - Track improvement across subjects with detailed insights for students and parents",
        "Sensory-Friendly Interface - Customizable colors, fonts, sounds to reduce overstimulation",
        "Parent/Teacher Dashboard - Monitor progress, adjust settings, and receive recommendations for support"
      ],
      audience: "Primary: Neurodivergent students ages 8-18 with ADHD, Autism, Dyslexia, Dyscalculia, and other learning differences. Secondary: Parents of neurodivergent children seeking effective educational tools. Tertiary: Special education teachers, IEP coordinators, and schools with inclusive education programs. Market size: 7.3M students in special education + millions of undiagnosed neurodivergent learners.",
      value: "Thinking CAPZ is the first truly personalized platform built specifically for neurodivergent brains, not adapted from neurotypical education. Unlike competitors (Khan Academy, IXL) that offer one approach, CAPZ provides multiple pathways to the same learning goal. The AI tutor provides emotional support and encouragement crucial for neurodivergent confidence. Our founder's lived experience with ADHD and Autism ensures authentic understanding of user needs.",
      market: "Phase 1: Beta launch with 500 students from special education programs in 3 school districts. Measure learning outcomes, engagement, and parent/teacher satisfaction. Phase 2: Direct-to-consumer subscription at $19.99/month targeting parent communities (Facebook groups, Reddit, autism/ADHD forums). Phase 3: Pilot B2B partnerships with 10 school districts offering site licenses. Phase 4: Seek endorsements from special education organizations (CHADD, Autism Society). Validation through academic studies showing improved test scores and engagement.",
      roadmap: "Phase 1 (Year 1): Launch with core subjects (Math, Reading, Writing) for grades 3-8. Achieve 1,000 paying subscribers. Phase 2 (Year 2): Add Science and Social Studies, expand to grades K-12, reach 10,000 users. Phase 3 (Year 3): Introduce career/vocational modules for high school, develop IEP integration tools, secure 20 school district contracts. Phase 4 (Years 4-5): International expansion, add college prep content, create community features for peer support. Vision: Set a new standard for inclusive, neurodivergent-first education technology, proving every brain can thrive with the right approach."
    }
  },
  {
    id: "spark",
    name: "Spark",
    tagline: "Reigniting Campus Pride and Student Engagement",
    image: "",
    coverImage: sparkCover,
    category: "EdTech / Campus Engagement",
    roadmap: {
      visuals: {
        title: "App Screens & Features",
        description: "Explore the Spark app: profile badges, event discovery, challenges, rewards marketplace, and competitive leaderboards.",
        images: [
          sparkCover,
          sparkScreen1,
          sparkScreen2,
          sparkScreen3,
          sparkScreen4
        ]
      },
      problem: "College campuses face three critical challenges: (1) Disconnected Campus - Students feel isolated from campus culture and opportunities. (2) Low Event Turnout - Campus events and activities suffer from poor attendance. (3) Missed Opportunities - Students aren't aware of valuable experiences, networking, and growth opportunities. Traditional communication channels (emails, posters) are ineffective at driving engagement.",
      solution: "Spark is a gamified campus engagement app that transforms student participation into an exciting, rewarding experience. Students earn points, unlock badges, and climb leaderboards by attending events, completing challenges, and engaging with campus life. The app creates a vibrant digital community that drives real-world participation and builds lasting campus pride.",
      features: [
        "Points System - Earn Spark points for attending events, completing challenges, and participating in campus activities",
        "Challenges - Weekly and monthly challenges encouraging students to explore campus, try new activities, and connect with peers",
        "Rewards Marketplace - Redeem points for campus perks (dining credits, bookstore discounts, priority registration, exclusive merch)",
        "Leaderboards - Compete with friends, organizations, and across campus for top rankings and recognition",
        "Badge System - Unlock achievement badges and level up in categories like Social Justice, Athletics, Academic Excellence",
        "Event Discovery - Personalized event recommendations based on interests and engagement history",
        "Social Features - Share achievements, create teams, and challenge friends to beat your scores",
        "Organization Dashboards - Campus departments and student orgs can create events and track engagement"
      ],
      audience: "Primary: College students (ages 18-24) at small to mid-sized universities (2,000-10,000 students), starting with HBCUs and private institutions. Focus on students seeking community, involvement, and campus connection. Secondary: University administrators, student affairs departments, student organization leaders, and campus event coordinators seeking to boost attendance and engagement. Initially targeting Philander Smith University as pilot institution.",
      value: "Spark uniquely combines behavioral psychology (gamification) with genuine campus culture building. Unlike generic event apps (Presence, CampusGroups), Spark makes participation fun and rewarding, not just informational. The points-to-perks system creates real value for students while reducing marketing costs for universities. Our focus on HBCU culture and community values differentiates us from one-size-fits-all solutions.",
      market: "Phase 1: Launch at Philander Smith University with full student body access (800 students). Partner with 10 campus departments and student organizations. Target 60% adoption rate in first semester. Phase 2: Expand to 3 additional HBCUs, collect success metrics (event attendance increases, student retention correlation). Phase 3: Present case study to HBCU conference and NASPA (Student Affairs Administrators). Phase 4: Secure university contracts at $10K-$25K annually per institution. Validate through student retention studies and engagement analytics.",
      roadmap: "Phase 1 (Semester 1): Pilot at Philander Smith, onboard 10 campus partners, achieve 60% student adoption. Phase 2 (Year 1): Refine features based on feedback, launch at 3 more HBCUs, reach 3,200 active users. Phase 3 (Year 2): Expand to 20 institutions, introduce premium features for universities (advanced analytics, custom branding). Phase 4 (Years 3-5): Scale to 100+ colleges, add AI-powered personalization, corporate sponsorship marketplace, alumni engagement features. Vision: Become the leading student engagement platform for universities nationwide, helping institutions build vibrant campus communities."
    }
  },
  {
    id: "duo-buddy",
    name: "Duo Buddy",
    tagline: "Real Conversations, Authentic Accents, True Fluency",
    image: "",
    coverImage: duobuddyCover,
    category: "EdTech / Language Learning",
    roadmap: {
      visuals: {
        title: "Product Features & Strategy",
        description: "Explore Duo Buddy's problem statement, key features, app interface, validation plan, and go-to-market strategy.",
        images: [
          duobuddyProblem,
          duobuddyFeatures1,
          duobuddyFeatures2,
          duobuddyValidation,
          duobuddyMarketing
        ]
      },
      problem: "Duolingo users struggle with scripted, robotic practice that lacks authentic accents and real conversation skills. Features like Stories and Roleplay miss spontaneity and genuine human interaction, leaving learners feeling unprepared and disconnected. Without immersive dialogue, users lack the confidence and cultural authenticity needed for real-world conversations.",
      solution: "Duo Buddy pairs language learners for live video conversations with AI-guided prompts and real-time feedback. The platform uses a smart matching algorithm based on proficiency, interests, and time zones to create relevant practice sessions. AI provides context-based prompts, pronunciation guidance, and grammar corrections during immersive video calls.",
      features: [
        "Smart Matching Algorithm - Pairs users based on proficiency, interests, and time zone for optimal practice sessions",
        "Immersive Video Calls - Split-screen interface with live conversation on one side and AI prompts on the other, plus audio-only option",
        "AI-Driven Prompts & Feedback - Real-time pronunciation and grammar corrections with context-based conversation guidance",
        "Milestone Incentives - Unlock XP, gems, and free trials for Duo Super/Max after achieving practice milestones (e.g., 5 sessions)",
        "Session Recaps - Detailed summaries of key corrections and learning points after each conversation",
        "Scenario Selection - Choose conversation topics to practice specific contexts (travel, business, casual, etc.)"
      ],
      audience: "Primary: Duolingo's 74+ million active users seeking authentic conversation practice. Target demographic includes intermediate to advanced language learners ages 18-45 who have mastered basics but struggle with real conversations. Secondary audience includes language enthusiasts in English-speaking countries wanting to practice with native speakers.",
      value: "Duo Buddy uniquely bridges the gap between app-based learning and real conversation by combining human interaction with AI guidance. Unlike competitors (HelloTalk, Tandem), it provides structured AI feedback during live conversations, not just text chat. The gamification through Duolingo's existing reward system creates seamless integration and drives consistent engagement.",
      market: "Launch as a Duolingo premium feature (Super/Max tier) to leverage existing user base. Pilot program with 1,000 beta users across 5 languages (Spanish, French, German, Japanese, Korean). Partner with language learning communities on Reddit and Discord for initial validation. Collect user feedback through surveys and usage analytics. Success metrics: 70%+ completion rate for first session, 50%+ return for 5+ sessions.",
      roadmap: "Phase 1 (Months 1-6): MVP launch with 5 core languages and basic matching. Phase 2 (Months 7-12): Add 10 more languages, improve AI feedback accuracy, introduce group conversations (3-4 people). Phase 3 (Year 2): Implement video recording for self-review, add professional conversation prep (job interviews, presentations). Phase 4 (Year 3): Expand to 50+ languages, create language exchange communities, integrate with Duolingo curriculum for seamless progression. Long-term vision: Become the standard for authentic conversation practice in language learning."
    }
  },
  {
    id: "waterpure",
    name: "WaterPure",
    tagline: "Revolutionizing Water and Skincare",
    image: "",
    coverImage: waterpureCover,
    category: "Consumer Product / Water Filtration",
    roadmap: {
      visuals: {
        title: "Product & App Interface",
        description: "View the WaterPure filtration device and mobile app with water quality monitoring and maintenance features.",
        images: [
          waterpureCover,
          waterpureScreen1
        ]
      },
      problem: "80% of adolescents globally suffer from acne, with contaminated water being a significant but overlooked contributor. Impure water leads to clogged pores, skin irritation, and mental health struggles. Adolescents waste time and money on ineffective skincare routines while harmful trends (chemical peels, DIY masks, excessive cleansing) make problems worse. The root cause—contaminated water—is ignored in skincare discussions.",
      solution: "WaterPure is a smart water filtration system that removes 99.9% of impurities (bacteria, heavy metals, microplastics) through multi-layer filtration. Connected to an interactive mobile app, it monitors filter performance, provides water quality analytics, sends maintenance alerts, and gamifies clean water usage to engage adolescents in healthier skincare routines from the source.",
      features: [
        "Multi-Layer Filtration - Activated carbon, reverse osmosis, UV sterilization, and mineral enhancer for comprehensive purification",
        "99.9% Impurity Removal - Eliminates bacteria, heavy metals, microplastics, chlorine, and other skin-damaging contaminants",
        "Smart Mobile App - Real-time monitoring, personalized water quality insights, and maintenance alerts",
        "IoT-Enabled Sensors - Track filter status, water usage, and quality metrics via Bluetooth/Wi-Fi",
        "Gamified Engagement - Earn points for consistent use, track skin improvements, share progress with friends",
        "Replaceable Cartridges - Easy-to-swap filters with app reminders for timely replacement",
        "Eco-Friendly Design - Sustainable materials reduce plastic waste compared to bottled water",
        "Compact & Sleek - Space-efficient design that fits countertops or connects to existing plumbing"
      ],
      audience: "Primary: Adolescents ages 13-19 and their parents, particularly those struggling with acne and skin issues. Target middle to upper-middle-class households concerned about health and willing to invest in quality solutions. Secondary: Dermatologists and skincare professionals who can recommend WaterPure as foundational skincare. Tertiary: Health-conscious millennials (25-35) interested in preventive wellness. Geographic focus: Urban and suburban areas with known water quality issues.",
      value: "WaterPure uniquely connects water quality to skin health, addressing the root cause competitors (Brita, PUR) ignore. Our smart app engages adolescents through gamification, turning water filtration from boring to exciting. Unlike expensive skincare products that treat symptoms, WaterPure prevents issues at the source. The combination of medical-grade filtration with teen-friendly technology creates a differentiated, compelling solution. Cost savings: eliminates need for expensive acne treatments ($50-$200/month).",
      market: "Phase 1: Crowdfunding campaign (Kickstarter) targeting 1,000 early adopters, raise $250K for initial production. Phase 2: Partner with 5 dermatology clinics for patient recommendations and case studies. Phase 3: Launch direct-to-consumer e-commerce, target parenting forums and skincare communities. Phase 4: Retail partnerships with Target, Walmart, CVS. Phase 5: B2B sales to schools, gyms, and community centers. Validate through before/after skin improvement studies and dermatologist endorsements.",
      roadmap: "Phase 1 (Year 1): Manufacturing setup, crowdfunding launch, deliver 1,000 units, collect user testimonials and skin improvement data. Phase 2 (Year 2): E-commerce launch, secure 3 retail partnerships, expand to 10,000 units sold, achieve profitability. Phase 3 (Year 3): Launch subscription model for replacement filters ($15/month), introduce WaterPure Pro for whole-home filtration. Phase 4 (Years 4-5): International expansion, develop partnerships with skincare brands for co-marketing, introduce WaterPure Shower filter line. Vision: Become the leading brand connecting water quality to skin health, helping millions achieve clear skin naturally."
    }
  },
  {
    id: "spkaka",
    name: "S.P.K.A.K.A.",
    tagline: "Smart Prosthetic Knee for Above-Knee Amputees - Restoring Independence",
    image: "",
    coverImage: spkakaCover,
    category: "Medical Device / Prosthetics",
    roadmap: {
      visuals: {
        title: "Product Design & System Architecture",
        description: "See the S.P.K.A.K.A. prosthetic knee design, gait cycle analysis, and IoT system architecture with sensors and mobile integration.",
        images: [
          spkakaCover
        ]
      },
      problem: "In the US, 185,000 people have lower-limb amputations, with over 48,000 being above-knee amputees. Current prosthetic solutions like C-Leg and M3 are uncomfortable, time-consuming to adjust, bulky, and prohibitively expensive (often $50,000+). These limitations prevent many amputees from accessing quality prosthetics, significantly impacting their independence and quality of life.",
      solution: "S.P.K.A.K.A. is a smart, affordable prosthetic knee that uses advanced sensors and AI to adapt to the user's movement patterns in real-time. The device provides natural gait, reduces adjustment time, and offers a lightweight, compact design at a fraction of traditional prosthetic costs. It restores independence through intuitive, responsive movement.",
      features: [
        "Adaptive Movement AI - Real-time adjustment to user's gait pattern using machine learning algorithms",
        "Lightweight Design - Compact, ergonomic form factor that reduces strain and improves comfort",
        "Quick Calibration - Automated setup process reduces fitting time from hours to minutes",
        "Smart Sensors - Multi-axis sensors detect terrain changes and adjust resistance automatically",
        "Mobile App Integration - Track usage, monitor battery, adjust settings, and receive maintenance alerts",
        "Affordable Manufacturing - Cost-effective materials and production methods to reduce price by 60-70%",
        "Long Battery Life - 48+ hours of continuous use with quick-charge capability"
      ],
      audience: "Primary: 48,000+ above-knee amputees in the US, focusing on veterans, accident survivors, and diabetic patients. Age range 25-65, typically covered by insurance or VA benefits. Secondary: Prosthetic clinics, rehabilitation centers, and orthopedic hospitals seeking cost-effective solutions for patients. International markets in developing countries with limited access to expensive prosthetics.",
      value: "S.P.K.A.K.A. delivers enterprise-level prosthetic performance at consumer-friendly prices ($15,000-$20,000 vs $50,000+). The AI-driven adaptation eliminates lengthy manual adjustments, getting users mobile faster. Unlike competitors, our smart sensors learn individual movement patterns, providing truly personalized support. The combination of affordability, comfort, and advanced technology democratizes access to quality prosthetics.",
      market: "Phase 1: Partner with 3-5 prosthetic clinics for clinical trials with 50 patients. Collect data on comfort, mobility, and user satisfaction. Phase 2: Seek FDA 510(k) clearance based on clinical trial results. Phase 3: Launch direct-to-clinic B2B sales model, targeting VA hospitals and rehabilitation centers. Phase 4: Expand insurance coverage partnerships with major providers. Validation through peer-reviewed medical journals and prosthetist endorsements.",
      roadmap: "Phase 1 (Year 1): Complete clinical trials, achieve FDA clearance, establish manufacturing partnerships. Phase 2 (Year 2): Launch with 5 partner clinics, fit 200+ patients, refine based on feedback. Phase 3 (Year 3): Scale production, expand to 50+ clinics nationwide, secure insurance coverage from 3 major providers. Phase 4 (Year 4-5): International expansion, introduce pediatric version, develop full prosthetic leg system. Long-term: Advance AI capabilities for sports and high-activity use cases, integrate with health monitoring systems."
    }
  },
  {
    id: "anxo",
    name: "Anxo",
    tagline: "A DreamWorks Animated Character Journey of Self-Love",
    image: "",
    coverImage: anxoSlide01,
    category: "Creative Character / Animation",
    roadmap: {
      visuals: {
        title: "Character Concepts",
        description: "Explore Anxo's visual development and character design evolution for this DreamWorks animated concept.",
        images: [
          anxoSlide01,
          anxoSlide02,
          anxoSlide03,
          anxoSlide04,
          anxoSlide05,
          anxoSlide06,
          anxoSlide07,
          anxoSlide08,
          anxoSlide09
        ]
      },
      problem: "Anxo's internal conflict: A character struggling with self-doubt, external pressures, and the journey to discover authentic self-love. The character represents individuals who feel invisible, undervalued, or disconnected from their true worth. Anxo's world mirrors the emotional landscape of learning to love oneself despite obstacles, criticism, and internal negative voices.",
      solution: "Anxo's journey is a transformative narrative of self-discovery and empowerment. Through challenges, mentorship, and pivotal moments of realization, Anxo learns that self-love isn't selfish—it's essential. The character evolves from insecurity to confidence, discovering that loving yourself enables you to love others authentically and live with purpose.",
      features: [
        "Visual Design - Distinctive character design that physically transforms as self-love grows (color palette shifts, posture changes, expressive animation)",
        "Emotional Arc - Three-act structure: Act 1 (self-doubt), Act 2 (discovery), Act 3 (empowerment and authentic self-love)",
        "Relatable Struggles - Universal themes of imposter syndrome, comparison culture, seeking external validation",
        "Mentor Figure - Wise guide who helps Anxo realize self-worth comes from within",
        "Symbolic Challenges - Visual metaphors for internal battles (dark shadows, broken mirrors, climbing mountains)",
        "Transformation Moments - Key scenes where Anxo makes breakthroughs in self-acceptance",
        "Audience Connection - Character designed to resonate with viewers facing similar self-worth struggles"
      ],
      audience: "Primary: Adolescents and young adults (ages 12-25) navigating identity formation, self-esteem issues, and social pressures. Secondary: Parents, educators, and mental health advocates seeking positive media representation of self-love and emotional growth. Tertiary: Animation enthusiasts and DreamWorks fans who appreciate character-driven storytelling with emotional depth.",
      value: "Anxo offers authentic representation of the self-love journey, avoiding toxic positivity while celebrating real growth. Unlike superficial 'love yourself' messages, Anxo's story shows the messy, difficult, beautiful process of developing genuine self-worth. The character's vulnerability makes the eventual triumph more powerful and believable, creating lasting emotional impact for viewers.",
      market: "Pitch to DreamWorks Animation as a feature film or limited series concept. Present character bible, story treatment, and visual development. Emphasize alignment with DreamWorks' legacy of emotionally resonant stories (Kung Fu Panda, How to Train Your Dragon). Target release window: Mental Health Awareness Month (May) or back-to-school season. Cross-promotion with mental health organizations and educational institutions.",
      roadmap: "Phase 1: Character Development - Complete character bible, backstory, personality traits, and visual design variations. Phase 2: Story Treatment - Develop full three-act narrative, key scenes, emotional beats, and supporting cast. Phase 3: Visual Pitch - Create concept art, character studies, environment designs, and mood boards. Phase 4: Pitch Presentation - Present to DreamWorks creative executives with animatic or proof-of-concept short. Phase 5: Development - If greenlit, work through story development, screenplay, and production. Vision: Create an iconic character whose journey of self-love inspires millions, establishing Anxo as a cultural touchstone for authentic self-worth narratives."
    }
  }
];
