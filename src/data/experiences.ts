export interface Experience {
  organization: string;
  role: string;
  period: string;
  achievements: string[];
  logo?: string;
  categories: string[];
}

export const experiences: Experience[] = [
  {
    organization: "Northern Kentucky University",
    role: "Software Engineer",
    period: "September 2025 - Present",
    achievements: [
      "Led end-to-end design and deployment of the MCRC Project platform, building scalable AI pipelines and microservice architecture, enabling 14,000+ simultaneous users with sub-200ms response times",
      "Architected automated content transformation and feature delivery systems, integrating advanced AI inference for dynamic media generation, reducing update cycle from 72 hours to 7 minutes, achieving 92.98% uptime in production",
      "Engineered comprehensive security, analytics, and monitoring frameworks, supporting interactive storytelling and real-time engagement, driving 62% growth in platform interactions and seamless scaling across 6 global regions"
    ],
    logo: "/src/assets/logos/consultant-software-engineer.png",
    categories: ["SOFTWARE ENGINEERING", "AI & AUTOMATION WORKFLOWS"]
  },
  {
    organization: "Microsoft",
    role: "Explore Software Engineering/Product Management Intern",
    period: "May-August 2023",
    achievements: [
      "Engineered CoConspirator AI chatbot using Python LangChain and Azure AI Services, improving query efficiency 30% via RAG architecture",
      "Architected validation system with conditional logic and OpenAI LLM converting natural language to JSON for supply chain optimization",
      "Spearheaded patent development identifying technical differentiators, securing stakeholder endorsement through high-fidelity wireframes"
    ],
    logo: "/src/assets/logos/microsoft.png",
    categories: ["SOFTWARE ENGINEERING", "AI & AUTOMATION WORKFLOWS", "PROJECT MANAGEMENT", "PRODUCT MARKETING"]
  },
  {
    organization: "Philander Smith University",
    role: "Google Developer Students Club Co-Lead",
    period: "August 2022 - 2024",
    achievements: [
      "Led core team meetings boosting operational efficiency 30%, overseeing equipment allocation for 100+ student developers",
      "Orchestrated bi-weekly OOP and ML mini-hackathons, increasing active participation 40% through hands-on skill development",
      "Established scalable program structure delivering technical workshops, competitions, and industry networking for campus developers"
    ],
    logo: "/src/assets/logos/google.png",
    categories: ["SELFLESS LEADERSHIP", "PROJECT MANAGEMENT"]
  },
  {
    organization: "Philander Smith University",
    role: "Computer Science Organization (CSO) Vice-President",
    period: "August 2022 - 2023",
    achievements: [
      "Streamlined board operations with new protocols boosting club productivity 25%, leading strategic meetings and resource allocation",
      "Coordinated 15+ technical events expanding CS engagement and creating industry connection pathways",
      "Captained CSO Robotics team directing technical strategy, planning, and competition prep ensuring consistent performance"
    ],
    logo: "/src/assets/logos/philander-smith.png",
    categories: ["SELFLESS LEADERSHIP", "PROJECT MANAGEMENT"]
  },
  {
    organization: "Microsoft",
    role: "Product Management Intern - Core Authentication",
    period: "May-August 2024",
    achievements: [
      "Led security optimization re-engineering token access workflows, reducing critical vulnerabilities across 1000+ Substrate apps",
      "Architected EntraID-to-STI mapping using Python, resolving 40% unmapped entities achieving 95% tracking accuracy",
      "Utilized KQL querying against token telemetry logs, building Power BI dashboards uncovering IP patterns for decommissioning roadmap"
    ],
    logo: "/src/assets/logos/microsoft.png",
    categories: ["DATA ANALYSIS", "PROJECT MANAGEMENT", "PRODUCT MARKETING"]
  },
  {
    organization: "JPMorgan Chase Data for Good Hackathon",
    role: "3rd Place Team Leader",
    period: "Spring 2023",
    achievements: [
      "Directed 4-person team conducting EDA using Python (Pandas, Matplotlib) on 50,000+ data points quantifying DC health disparities",
      "Translated research into policy recommendations designing nonprofit prototype enabling 25% health resource delivery improvement",
      "Secured 3rd Place presenting visualizations to JPMorgan executives demonstrating impact-driven analytics for underserved communities"
    ],
    logo: "/src/assets/logos/jpmorgan.png",
    categories: ["DATA ANALYSIS", "PROJECT MANAGEMENT", "SELFLESS LEADERSHIP"]
  },
  {
    organization: "Arkansas Summer Research Institute (ASRI)",
    role: "Data Science Research Program",
    period: "Summer 2023",
    achievements: [
      "Executed data science research applying ML techniques (regression, classification, clustering) achieving measurable insights",
      "Developed methodologies integrating visualization and hypothesis testing, presenting findings demonstrating rigorous scientific approach",
      "Implemented feature engineering and validation ensuring reproducibility and statistical significance across analysis workflows"
    ],
    logo: "/src/assets/logos/asri.png",
    categories: ["DATA ANALYSIS", "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING"]
  },
  {
    organization: "Philander Smith University",
    role: "Girls Who Code - Founder & President",
    period: "August 2022 - September 2023",
    achievements: [
      "Founded Girls Who Code chapter recruiting 40+ members, creating sustainable programming supporting women in technology",
      "Hosted optimization workshops and whiteboarding sessions (C++, JavaScript) enabling 15+ members to secure internships",
      "Increased engagement 35% via Meta recruiter collaboration organizing industry talks connecting students to careers"
    ],
    logo: "/src/assets/logos/girls-who-code.png",
    categories: ["SELFLESS LEADERSHIP", "PROJECT MANAGEMENT"]
  },
  {
    organization: "Social Justice Institute",
    role: "Fellow",
    period: "April 2023 - May 2024",
    achievements: [
      "Authored policy analysis on gerrymandering and inequities translating complex issues into actionable recommendations",
      "Engaged in organizing and advocacy deepening knowledge of global justice challenges advocating for systemic change",
      "Applied critical thinking analyzing legislative impacts contributing to evidence-based strategies for underserved communities"
    ],
    logo: "/src/assets/logos/social-justice.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "HBCU First",
    role: "Mentor",
    period: "April 2021 - 2024",
    achievements: [
      "Provided guidance to 20+ HBCU mentees increasing success through personalized development plans and industry navigation",
      "Participated in 30+ weekly sessions with Fortune 500 leaders translating insights into actionable technical career guidance",
      "Connected mentees to opportunities facilitating 10+ placements at Microsoft, Amazon, Meta via strategic networking"
    ],
    logo: "/src/assets/logos/hbcu-first.jpeg",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "LinkedIn",
    role: "Career Coach & Community Mentor",
    period: "2021 - 2024",
    achievements: [
      "I am passionate about giving back to the community, especially aspiring technologists. I understand the challenges these students face trying to succeed in the tech industry, I've been there, and that's why I'm so passionate about guiding them.",
      "Successfully impacted over 300+ aspiring technologists",
      "Offered 200+ résumé reviews, 80+ 1-1 video conferencing for career advice, 50+ mock technical interview preparation",
      "Assisted over 30 students secure internships at top tech companies such as Microsoft, Amazon, Meta, and Dell",
      "I am grateful for all the experiences I have gained over the past 4 years and I do not take it for granted. That's why I always lead with empathy while guiding and impacting the people I mentor."
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "Grace Hopper Celebration",
    role: "Scholar (3x Recipient)",
    period: "2022, 2023, 2024",
    achievements: [
      "Selected 3 consecutive years for world's largest women in tech conference (25,000+ attendees) demonstrating technical excellence",
      "Attended tracks on Predictive Modeling, Product-Led Growth, Cloud Architecture translating insights into practical applications",
      "Leveraged recruitment opportunities securing Microsoft pipeline expanding network with 50+ FAANG leaders"
    ],
    logo: "/src/assets/logos/grace-hopper.jpeg",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "Richard Tapia Celebration Conference",
    role: "Scholar (3x Recipient)",
    period: "2022, 2023, 2024",
    achievements: [
      "Earned 3 consecutive scholarships to premier diversity conference recognized for leadership in underrepresented computing",
      "Participated in High-Performance Computing and Data Governance workshops mastering distributed systems and privacy frameworks",
      "Attended strategy sessions expanding network with 40+ industry leaders securing mentorship relationships"
    ],
    logo: "/src/assets/logos/tapia-conference.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "Amazon",
    role: "Beyond The Yard Conference Scholar",
    period: "August 2022",
    achievements: [
      "Selected for Amazon-hosted HBCU conference participating in Cloud Computing and Product Management workshops on AWS solutions",
      "Networked with Amazon leadership gaining insights into corporate culture, technical pathways, and infrastructure best practices",
      "Engaged in panels extracting strategies for balancing corporate careers with entrepreneurial ventures and financial planning"
    ],
    logo: "/src/assets/logos/amazon.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "HBCU 20x20",
    role: "Scholar",
    period: "2023",
    achievements: [
      "Selected for prestigious HBCU scholarship supporting technical education and leadership at historically Black institutions",
      "Participated in workshops and mentorship sessions building strategic thinking and communication skills for technical careers",
      "Networked with Fortune 500 leaders accessing opportunities and connections supporting career advancement"
    ],
    logo: "/src/assets/logos/hbcu-20x20-app.jpeg",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "Microsoft",
    role: "New Technologists Software Engineering/Product Management Intern",
    period: "June-August 2022",
    achievements: [
      "Engineered MentorMatch using React/Recoil and Firebase supporting first-gen students via scalable mentor-matching platform",
      "Implemented Customer Driven Engineering conducting 30+ interviews achieving validated 80% MVP adoption improvement",
      "Served as Scrum Master directing technical planning and Agile sprints ensuring on-time delivery maintaining code quality"
    ],
    logo: "/src/assets/logos/microsoft.png",
    categories: ["SOFTWARE ENGINEERING", "PROJECT MANAGEMENT", "SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "NASA MINDS",
    role: "Project Team Leader & Software Engineer",
    period: "October 2022 - March 2024",
    achievements: [
      "Led team designing ISS inventory tracking using RFID and GPS-level precision achieving 2023 Finalist status",
      "Authored 'NASA Inventory Tracking In Space: REALM Simultaneous Transmission' detailing hardware/software ISS specifications",
      "Designed Exercise VIS applying Systems Engineering (requirements, trade-offs, risk assessment) for Artemis Mission"
    ],
    logo: "/src/assets/logos/nasa.png",
    categories: ["SOFTWARE ENGINEERING", "PROJECT MANAGEMENT", "SELFLESS LEADERSHIP"]
  },
  {
    organization: "Arkansas Governor's Cup 2024 - 1st Place",
    role: "Thinking CAPZ - Team Leader and Chief Product Officer",
    period: "Spring 2024",
    achievements: [
      "Led cross-functional team to 1st Place ($20K) developing Thinking CAPZ via Scrum, architecting AI tutor with media conversion and personalized learning tracks; directed product roadmap, financial forecasting, and stakeholder presentations",
      "Executed Scrum sprints with SmartPad diagnostics and CAPZ A.I. Tutor features, applying design thinking and user persona development to track learning efficacy and visualize user journeys achieving 25% subject mastery improvement",
      "Conducted market research and risk analysis building 5-year ROI forecast projecting $500K Year 1 revenue with dynamic pricing strategy"
    ],
    logo: "/src/assets/logos/governors-cup-newest.png",
    categories: ["SOFTWARE ENGINEERING", "AI & AUTOMATION WORKFLOWS", "PROJECT MANAGEMENT", "PRODUCT MARKETING", "SELFLESS LEADERSHIP"]
  },
  {
    organization: "UIPD HBCU Pitch Fest 2023 - 1st Place",
    role: "S.P.K.A.K.A. - Team Leader & Artificial Intelligence Innovator",
    period: "Summer 2023",
    achievements: [
      "Won 1st Place ($10K) developing AI prosthetic knee reducing cost from $60K to $507 (99%) improving mobility 80%",
      "Engineered adaptive algorithms in C++ using TensorFlow Lite on ESP32 enabling real-time terrain adjustment enhancing stability",
      "Conducted ethnographic research translating patient needs into specs boosting productivity 50%+ via Scrum and Agile"
    ],
    logo: "/src/assets/logos/uipd-hbcu-engage.png",
    categories: ["SOFTWARE ENGINEERING", "AI & AUTOMATION WORKFLOWS", "PRODUCT MARKETING", "PROJECT MANAGEMENT", "SELFLESS LEADERSHIP"]
  },
  {
    organization: "Arkansas Governor's Cup 2025",
    role: "Solaris - Chief Product Architect",
    period: "Spring 2025",
    achievements: [
      "Architected EEG headband using Neural Networks for brainwave analysis enabling patient to regain 80% confidence post-decline",
      "Designed AR app with low-latency processing integrating graphene sensors targeting $11B market with 55% Gross Margin",
      "Created go-to-market strategy and IP protection for EEG-AR tech securing Finalist recognition in competition"
    ],
    logo: "/src/assets/logos/governors-cup.png",
    categories: ["SOFTWARE ENGINEERING", "AI & AUTOMATION WORKFLOWS", "PRODUCT MARKETING"]
  },
  {
    organization: "HBCU Founders Initiative 2024 - 3rd Place",
    role: "WaterPure - Product Manager & IoT Engineer",
    period: "Fall 2024",
    achievements: [
      "Won 3rd Place pitching IoT water filtration with mobile app validating $1.7B TAM and $10/month pricing",
      "Developed 5-year pro forma demonstrating profitability via optimized supply chain and tiered subscription for alerts",
      "Created social impact marketing focused on environmental concerns securing business model validation from judges"
    ],
    logo: "/src/assets/logos/hbcu-founders-initiative.png",
    categories: ["SOFTWARE ENGINEERING", "PRODUCT MARKETING", "DATA ANALYSIS"]
  },
  {
    organization: "Science Venture Studio",
    role: "Commercialization Fellow",
    period: "February-May 2024",
    achievements: [
      "Executed research on federal contracting (AFWERX, USDA SBIR) identifying multi-million dollar gaps for ag-tech commercialization",
      "Led SBIR Phase I proposal with technical objectives, budgets, timelines coordinating stakeholder letters from rural leaders",
      "Refined Gumption pitch analyzing differentiators creating investor-focused decks for federal agency audiences"
    ],
    logo: "/src/assets/logos/science-venture-studio.jpeg",
    categories: ["PRODUCT MARKETING", "PROJECT MANAGEMENT"]
  },
  {
    organization: "Capital One",
    role: "Tech Mini Mester Program Participant",
    period: "July-August 2022",
    achievements: [
      "Engineered rules-based chatbot using Python with conditional logic demonstrating AI automation for customer service",
      "Competed in 3-Day NFT Challenge applying Design Thinking building prototype showcasing rapid ideation-to-implementation",
      "Completed workshops on AWS Cloud, GitHub version control, Cyber Secure Coding mastering infrastructure and security"
    ],
    logo: "/src/assets/logos/capital-one.png",
    categories: ["SOFTWARE ENGINEERING", "AI & AUTOMATION WORKFLOWS"]
  },
  {
    organization: "DreamWorks Animation",
    role: "HBCU Launch Fellow",
    period: "Spring 2023",
    achievements: [
      "Developed 'Anxo' character using Blender creating 3D animation for non-binary character navigating anxiety with depth",
      "Applied Design Thinking crafting compelling arc demonstrating narrative structure and character development mastery",
      "Aligned design with DreamWorks' diverse mission showcasing technical animation and cultural sensitivity"
    ],
    logo: "/src/assets/logos/dreamworks.png",
    categories: ["AI & AUTOMATION WORKFLOWS", "SELFLESS LEADERSHIP"]
  },
  {
    organization: "St. Anthony's St Cecilia Parish Choir",
    role: "Choirmaster & Program Manager",
    period: "2018-2021",
    achievements: [
      "Led Program and Event Management overseeing 10+ annual productions for 5,000+ parishioners managing complex logistics",
      "Directed 200+ member ensemble scoping timelines managing multi-thousand budgets delivering events on-time under-budget",
      "Implemented scalable rehearsal system elevating performance reliability 40% over three years via process optimization",
      "Formalized Event Governance chairing board meetings establishing transparent evaluation framework for community growth",
      "Directed daily 4-hour technical training as lead soprano ensuring continuous skill development among key performers"
    ],
    logo: "/src/assets/logos/choir.png",
    categories: ["PROJECT MANAGEMENT", "SELFLESS LEADERSHIP"]
  },
  {
    organization: "Meta",
    role: "Above and Beyond CS - Technical Development",
    period: "August-November 2022",
    achievements: [
      "Completed 4-month DSA curriculum achieving 50% increase in interview problem-solving speed via rigorous practice",
      "Executed 100+ hours covering dynamic programming, graph algorithms, system design achieving coding fluency",
      "Mastered algorithmic patterns and complexity analysis applying best practices securing competitive internships"
    ],
    logo: "/src/assets/logos/meta.png",
    categories: ["SOFTWARE ENGINEERING"]
  },
  {
    organization: "Meta",
    role: "UX/UI Design Summit Fellow",
    period: "July-November 2022",
    achievements: [
      "Completed 5-month UX fellowship mastering User Experience principles, design systems, and WCAG 2.1 accessibility standards",
      "Conducted heuristic evaluations identifying usability issues recommending evidence-based improvements enhancing engagement",
      "Designed high-fidelity Figma wireframes applying user-centered methodologies and iterative testing for optimal usability"
    ],
    logo: "/src/assets/logos/meta.png",
    categories: ["PRODUCT MARKETING"]
  },
  {
    organization: "NASA MITTIC",
    role: "Student Researcher - Space To Pitch Competition",
    period: "September-November 2023",
    achievements: [
      "Developed VR gaming accessory using NASA's Floating Ultrasonic System amplifying realism via haptic feedback",
      "Collaborated on 5-member team translating space-tech research into consumer application with enhanced UX",
      "Applied systems thinking presenting viable product connecting NASA technology transfer to gaming market"
    ],
    logo: "/src/assets/logos/nasa.png",
    categories: ["SOFTWARE ENGINEERING", "PROJECT MANAGEMENT"]
  },
  {
    organization: "TMCF The Pitch Competition",
    role: "Beyond The Game Website - Top 4 Finalist",
    period: "Summer 2022",
    achievements: [
      "Completed Design Thinking and Business Model Canvas translating strategy into technical implementation for pitch",
      "Designed 'Beyond the Game' website using HTML/CSS/JavaScript showcasing value proposition and product vision",
      "Achieved Top 4 Finalist of 16 teams demonstrating integration of technical execution with business storytelling"
    ],
    logo: "/src/assets/logos/tmcf.png",
    categories: ["SOFTWARE ENGINEERING", "PRODUCT MARKETING"]
  },
  {
    organization: "Southern Bancorp Champions of Change Pitch Competition - 1st Place",
    role: "Team Leader",
    period: "2023",
    achievements: [
      "Won 1st Place ($2K) leading FinTech solution for Black homeownership conducting research translating pain points to product",
      "Designed prototype and flows using Figma applying Lean Canvas articulating MVP validating value proposition",
      "Synthesized socio-economic data into resonant pitch deck demonstrating storytelling mastery securing competitive win"
    ],
    logo: "/src/assets/logos/southern-bancorp-new.png",
    categories: ["PRODUCT MARKETING", "SELFLESS LEADERSHIP", "DATA ANALYSIS"]
  },
  {
    organization: "Black Venture Consortium",
    role: "Product Management Frameworks Scholar",
    period: "2024",
    achievements: [
      "Mastered frameworks (Kano, Circles, SWOT, Porter's Five Forces) and LAUNCH from IDEA for systematic development",
      "Developed product roadmaps applying prioritization frameworks and stakeholder management for strategic delivery",
      "Achieved proficiency in Jira, Trello, Asana for agile backlog, sprint planning, and cross-functional coordination"
    ],
    logo: "/src/assets/logos/bvcc.jpeg",
    categories: ["PROJECT MANAGEMENT", "PRODUCT MARKETING"]
  },
  {
    organization: "CodePath",
    role: "Mobile App Development (Android) - Flashcard App",
    period: "February 2022",
    achievements: [
      "Developed Android flashcard app using Kotlin and Android SDK implementing intuitive UI/UX for learning workflows",
      "Utilized Room persistence for robust data management ensuring reliable CRUD operations and user content integrity",
      "Received certificate demonstrating mastery of mobile development fundamentals, architecture patterns, and best practices"
    ],
    logo: "/src/assets/logos/codepath.png",
    categories: ["SOFTWARE ENGINEERING"]
  },
  {
    organization: "AFROTECH Conference",
    role: "Attendee",
    period: "2022, 2023",
    achievements: [
      "Attended premier Black tech conference (15,000+) focusing on Venture Capital, FinTech, Strategic Entrepreneurship",
      "Networked with leaders, founders, investors from Fortune 500 and startups expanding connections and VC knowledge",
      "Gained insights on startups, capital raising, corporate careers translating learnings into entrepreneurial strategies"
    ],
    logo: "/src/assets/logos/afrotech.png",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "Social Justice Institute",
    role: "Fellow - Policy Research",
    period: "April 2023",
    achievements: [
      "Authored policy analysis on gerrymandering applying research methodology examining structural democratic barriers",
      "Deepened knowledge of justice issues including voting rights, equity, systemic reform translating research to advocacy",
      "Applied analytical thinking leveraging evidence-based approaches for policy addressing inequality and change"
    ],
    logo: "/src/assets/logos/social-justice.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "Rabbitholeathon 4.0",
    role: "Keynote Speaker",
    period: "January 26-28, 2023",
    achievements: [
      "Delivered keynote to 200+ entrepreneurs on 'Product Strategy' and Agile Roadmapping frameworks in Austin, Texas",
      "Taught methodologies translating customer insights into prioritized features, sprint planning, iterative development",
      "Shared Microsoft internship expertise demonstrating thought leadership in product management for startup audiences"
    ],
    logo: "/src/assets/logos/rabbitholeathon.jpeg",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "HBCU Founder Initiatives",
    role: "Featured Alumni Speaker",
    period: "2025",
    achievements: [
      "Featured speaker leveraging 2024 3rd Place win sharing insights on translating innovation into business ventures",
      "Mentored HBCU founders on product development, financial modeling, pitch prep, GTM strategies from competition experience",
      "Demonstrated entrepreneurship thought leadership inspiring next generation HBCU founders pursuing technical startups"
    ],
    logo: "/src/assets/logos/hbcu-founders-initiative.png",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "Arkansas Governor's Cup",
    role: "Conference Attendee & Panelist",
    period: "2024, 2025",
    achievements: [
      "Attended entrepreneurial conference engaging with VCs, accelerators, founders discussing growth strategies and fundraising",
      "Expert panelist on translating 2024 1st Place ($20K) win into viable strategy sharing post-competition commercialization insights",
      "Demonstrated thought leadership in product development, financial modeling, GTM advising on leveraging competition wins"
    ],
    logo: "/src/assets/logos/governors-cup-logo.png",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "NRF Foundation New York",
    role: "Attendee",
    period: "2022, 2023",
    achievements: [
      "Attended NRF conferences analyzing e-commerce adoption, omnichannel strategies, digital transformation in retail",
      "Studied supply chain optimization and inventory systems understanding logistics driving operational efficiency",
      "Learned AI in consumer tech including personalization engines, recommendation systems, predictive analytics for conversion"
    ],
    logo: "/src/assets/logos/nrf-foundation.png",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "National Sales Network",
    role: "Conference Attendee & Pitch Finalist",
    period: "2024",
    achievements: [
      "Achieved finalist status at national sales conference demonstrating mastery of product positioning and sales strategy",
      "Attended workshops on consultative selling, value-based pricing, enterprise cycles learning B2B relationship building",
      "Networked with Fortune 500 professionals gaining insights on scaling sales organizations and GTM execution"
    ],
    logo: "/src/assets/logos/national-sales-network.png",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "HBCU Tech E-Leadership Summit",
    role: "Attendee - San Francisco",
    period: "2024",
    achievements: [
      "Engaged with C-suite executives in Digital Transformation sessions addressing enterprise AI adoption and technology strategy",
      "Learned Ethical AI frameworks balancing advancement with privacy, bias mitigation, and societal impact considerations",
      "Discussed technical leadership connecting HBCU talent to Silicon Valley advancing diversity in executive roles"
    ],
    logo: "/src/assets/logos/hbcu-tech-summit.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "HP Future of Work Conference",
    role: "Attendee (3x)",
    period: "2022, 2023, 2024",
    achievements: [
      "Attended 3 consecutive conferences exploring emerging technologies, hybrid models, product roadmaps for workplace solutions",
      "Studied AI and workforce management including automation, productivity analytics, collaborative tech transforming efficiency",
      "Translated insights into product strategies considering remote work trends, digital transformation, human-centered design"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    categories: ["SELFLESS LEADERSHIP", "PRODUCT MARKETING"]
  },
  {
    organization: "100 Black Men of America",
    role: "Conference Attendee",
    period: "2022",
    achievements: [
      "Engaged in mentorship discussions learning strategies leveraging technical skills for social impact in underserved communities",
      "Participated in empowerment sessions on wealth creation, financial literacy, entrepreneurship for intergenerational prosperity",
      "Built connections with Black professionals expanding network focused on mentorship, education access, next generation opportunities"
    ],
    logo: "/src/assets/logos/100-black-men-new.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
  {
    organization: "Philander Smith University",
    role: "Division of Student Affairs - Front Desk Intern",
    period: "September 2021 - 2024",
    achievements: [
      "Managed 100+ daily communications scheduling VP appointments maintaining professional office operations",
      "Assisted fundraising projects and recruitment initiatives supporting enrollment growth and development campaigns",
      "Managed confidential applications ensuring data privacy compliance and organized record-keeping across campus"
    ],
    logo: "/src/assets/logos/philander-smith.png",
    categories: ["PROJECT MANAGEMENT"]
  },
  {
    organization: "EducationUSA Lagos",
    role: "Advising Center Intern",
    period: "November 2020 - June 2021",
    achievements: [
      "Delivered PowerPoint presentations for workshops guiding 200+ Nigerian students through US college applications",
      "Hosted weekly forums on application strategies, essay writing, financial aid maximizing admission and funding success",
      "Provided personalized advising on complex requirements supporting 50+ students secure US university admission"
    ],
    logo: "/src/assets/logos/education-usa.png",
    categories: ["SELFLESS LEADERSHIP"]
  },
];
