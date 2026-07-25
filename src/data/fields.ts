import type { CareerField, TimelineEntry, Testimonial } from "@/types";

export const CAREER_FIELDS: CareerField[] = [
  {
    slug: "software-engineering",
    name: "Software Engineering",
    category: "Technology",
    icon: "Code",
    color: "from-cyan-500 via-blue-600 to-indigo-600",
    shortDesc: "Architect, build, and maintain high-impact digital solutions, cloud systems, and scalable applications.",
    longExplanation: "Software Engineering combines algorithmic thinking, system design, and product engineering to craft scalable applications powering modern software ecosystems. Engineers build everything from low-latency web services to distributed cloud enterprise systems.",
    keySkills: ["TypeScript / JavaScript", "System Architecture", "React / Next.js", "Python & Node.js", "SQL & NoSQL Databases", "Git & CI/CD"],
    topCareers: [
      { title: "Full-Stack Developer", description: "Build end-to-end web applications across client interfaces and backend architectures.", demandLevel: "High" },
      { title: "Backend Solutions Architect", description: "Design microservices, API gateways, and distributed cloud infrastructure.", demandLevel: "High" },
      { title: "Mobile Systems Engineer", description: "Craft high-performance native and cross-platform apps for mobile devices.", demandLevel: "High" }
    ],
    salaryRange: {
      local: { entry: "PKR 100K - 180K/mo", mid: "PKR 250K - 450K/mo", senior: "PKR 600K - 1.2M+/mo", currency: "PKR" },
      international: { entry: "$70K - $95K/yr", mid: "110K - $160K/yr", senior: "$170K - $250K+/yr", currency: "USD" }
    },
    pros: [
      "Extremely high demand locally and for global remote jobs",
      "Fast compensation growth and remote work flexibility",
      "Abundant open-source and self-directed learning paths"
    ],
    cons: [
      "Rapidly changing stack requires continuous re-skilling",
      "High competitive intensity for junior remote engineering roles",
      "Screen fatigue and high deadline pressures"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS in Computer Science or Software Engineering from FAST, NUST, ITU, COMSATS, or LUMS.", institutions: ["FAST-NUST", "LUMS", "NUST", "GIKI"] },
      { level: "Certifications & Bootcamps", duration: "6-12 Months", description: "Self-driven projects, AWS/GCP certifications, and open-source contributions." }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "High expansion driven by AI integration, cloud adoption, and enterprise digital transformations worldwide.",
      emergingRoles: ["AI Integration Engineer", "Platform & Developer Experience Engineer", "Distributed Edge Specialist"],
      automationRisk: "Low"
    },
    relatedFields: ["data-science-ai", "cybersecurity", "cloud-devops"],
    timeline: [
      {
        id: 1,
        title: "Entry-Level Developer",
        date: "0–2 years",
        content: "Ship products, learn production systems, and master developer tooling.",
        category: "Foundational",
        icon: "Code",
        relatedIds: [2],
        status: "completed",
        energy: 100,
      },
      {
        id: 2,
        title: "Mid-Level Engineer",
        date: "2–5 years",
        content: "Own features, improve architecture, and mentor junior teammates.",
        category: "Growth",
        icon: "FileText",
        relatedIds: [1, 3],
        status: "completed",
        energy: 85,
      },
      {
        id: 3,
        title: "Senior Technical Lead",
        date: "5–8 years",
        content: "Lead complex systems, define platform strategy, and steer cross-team delivery.",
        category: "Leadership",
        icon: "User",
        relatedIds: [2, 4],
        status: "in-progress",
        energy: 70,
      },
      {
        id: 4,
        title: "Principal / Architect",
        date: "8+ years",
        content: "Shape long-term product direction, coach engineering leaders, and scale teams.",
        category: "Vision",
        icon: "Calendar",
        relatedIds: [3],
        status: "pending",
        energy: 35,
      },
    ],
  },
  {
    slug: "data-science-ai",
    name: "Data Science & AI",
    category: "Technology",
    icon: "Brain",
    color: "from-purple-500 via-indigo-600 to-cyan-500",
    shortDesc: "Extract intelligence from complex data pipelines and build cutting-edge machine learning models.",
    longExplanation: "Data Science and Artificial Intelligence empower organizations to parse vast datasets, train predictive models, and deploy generative AI applications. It combines linear algebra, statistical modelling, deep learning, and robust engineering.",
    keySkills: ["Python (PyTorch, TensorFlow)", "Statistical Analysis", "MLOps & Vector DBs", "SQL & Data Warehousing", "Feature Engineering", "Data Visualization"],
    topCareers: [
      { title: "Machine Learning Engineer", description: "Train, tune, and deploy enterprise AI models into production.", demandLevel: "High" },
      { title: "AI Research Scientist", description: "Pioneer new neural architectures, LLM fine-tuning methods, and vision models.", demandLevel: "High" },
      { title: "Data Platform Engineer", description: "Build real-time ETL pipelines and multi-terabyte data lakes.", demandLevel: "High" }
    ],
    salaryRange: {
      local: { entry: "PKR 120K - 200K/mo", mid: "PKR 300K - 550K/mo", senior: "PKR 700K - 1.5M+/mo", currency: "PKR" },
      international: { entry: "$85K - $110K/yr", mid: "$130K - $180K/yr", senior: "$190K - $300K+/yr", currency: "USD" }
    },
    pros: [
      "At the absolute forefront of current tech innovation",
      "Lucrative research and enterprise consulting opportunities",
      "High impact across healthcare, fintech, and e-commerce"
    ],
    cons: [
      "Requires solid mathematical, linear algebra, and calculus foundation",
      "Data cleaning and prep can take up substantial time",
      "Model deployment and drift monitoring can be challenging"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS in Data Science, Artificial Intelligence, or Statistics/Math.", institutions: ["NUST", "FAST", "LUMS", "PU"] },
      { level: "Master's Degree (Optional)", duration: "2 Years", description: "MS in Machine Learning or Data Science for specialized research." }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "Explosive growth due to LLM adoption, agentic systems, and predictive enterprise analytics.",
      emergingRoles: ["GenAI Systems Architect", "AI Ethics & Safety Officer", "LLMOps Specialist"],
      automationRisk: "Low"
    },
    relatedFields: ["software-engineering", "cloud-devops"],
    timeline: [
      {
        id: 1,
        title: "Junior Data Analyst",
        date: "0–2 years",
        content: "Explore datasets, build reporting workflows, and learn ML fundamentals.",
        category: "Launch",
        icon: "Calendar",
        relatedIds: [2],
        status: "completed",
        energy: 95,
      },
      {
        id: 2,
        title: "Machine Learning Engineer",
        date: "2–5 years",
        content: "Deploy models, automate pipelines, and improve model quality in production.",
        category: "Scaling",
        icon: "Code",
        relatedIds: [1, 3],
        status: "completed",
        energy: 80,
      },
      {
        id: 3,
        title: "AI Specialist",
        date: "5–8 years",
        content: "Own generative AI systems, research new model approaches, and influence product strategy.",
        category: "Specialization",
        icon: "FileText",
        relatedIds: [2, 4],
        status: "in-progress",
        energy: 65,
      },
      {
        id: 4,
        title: "AI Strategy Leader",
        date: "8+ years",
        content: "Lead AI initiative portfolios, mentor research teams, and drive business impact.",
        category: "Leadership",
        icon: "User",
        relatedIds: [3],
        status: "pending",
        energy: 40,
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Defense",
    category: "Technology",
    icon: "ShieldAlert",
    color: "from-blue-600 via-cyan-500 to-teal-400",
    shortDesc: "Safeguard digital assets, defend against sophisticated cyber threats, and conduct vulnerability research.",
    longExplanation: "Cybersecurity focuses on securing networks, endpoints, applications, and cloud environments against malicious breaches. Security engineers conduct penetration testing, build SOC detection systems, and ensure regulatory compliance.",
    keySkills: ["Network Security & Protocols", "Penetration Testing (Ethical Hacking)", "Incident Response & Forensics", "SIEM Tools", "Cryptography", "Cloud Security"],
    topCareers: [
      { title: "Penetration Tester / Red Teamer", description: "Simulate advanced attacks to uncover security vulnerabilities before exploits happen.", demandLevel: "High" },
      { title: "SOC Security Analyst", description: "Monitor real-time threat intelligence and neutralize cyber attacks.", demandLevel: "High" },
      { title: "Cloud Security Architect", description: "Design zero-trust architectures for cloud workloads.", demandLevel: "High" }
    ],
    salaryRange: {
      local: { entry: "PKR 90K - 160K/mo", mid: "PKR 220K - 400K/mo", senior: "PKR 550K - 1.1M+/mo", currency: "PKR" },
      international: { entry: "$75K - $100K/yr", mid: "$120K - $165K/yr", senior: "$175K - $260K+/yr", currency: "USD" }
    },
    pros: [
      "High job security — cyber defense is critical for every company",
      "Fast-paced problem solving and exciting field dynamics",
      "Strong demand across defense, banking, and global tech sectors"
    ],
    cons: [
      "On-call shifts during security breaches and incidents",
      "High stress when managing critical infrastructure alerts",
      "Requires continuous certification renewals (CEH, CISSP, OSCP)"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS in Cybersecurity or Computer Science.", institutions: ["Air University", "NUST", "FAST", "Bahria"] },
      { level: "Industry Certifications", duration: "3-6 Months", description: "OSCP, CompTIA Security+, CEH, CISSP certifications." }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "Surging demand fueled by increased cyber warfare threats, cloud migration, and IoT device proliferation.",
      emergingRoles: ["Quantum Security Analyst", "Zero-Trust Architect", "AI Security Threat Auditor"],
      automationRisk: "Low"
    },
    relatedFields: ["software-engineering", "cloud-devops"]
  },
  {
    slug: "cloud-devops",
    name: "Cloud Computing & DevOps",
    category: "Technology",
    icon: "Server",
    color: "from-indigo-600 via-cyan-500 to-blue-500",
    shortDesc: "Automate infrastructure, manage cloud environments (AWS/Azure/GCP), and build robust CI/CD pipelines.",
    longExplanation: "Cloud & DevOps bridges software development and system operations. Professionals automate software deployments, manage Kubernetes clusters, ensure 99.99% uptime, and optimize cloud infrastructure expenditure.",
    keySkills: ["Docker & Kubernetes", "Terraform / Infrastructure as Code", "AWS / Azure / GCP", "CI/CD (GitHub Actions, Jenkins)", "Linux Systems Administration", "Monitoring (Prometheus, Grafana)"],
    topCareers: [
      { title: "DevOps Engineer", description: "Automate delivery pipelines and maintain deployment reliability.", demandLevel: "High" },
      { title: "Site Reliability Engineer (SRE)", description: "Ensure enterprise platforms remain scalable, fast, and fault-tolerant.", demandLevel: "High" },
      { title: "Cloud Infrastructure Engineer", description: "Provision and secure hybrid multi-cloud environments.", demandLevel: "High" }
    ],
    salaryRange: {
      local: { entry: "PKR 100K - 170K/mo", mid: "PKR 250K - 480K/mo", senior: "PKR 650K - 1.3M+/mo", currency: "PKR" },
      international: { entry: "$80K - $105K/yr", mid: "$125K - $170K/yr", senior: "$180K - $270K+/yr", currency: "USD" }
    },
    pros: [
      "Crucial bridge discipline in high demand worldwide",
      "Excellent compensation packages and global mobility",
      "Direct oversight over core platform infrastructure"
    ],
    cons: [
      "Responsible for major system downtimes or outages",
      "On-call rotations can interrupt personal time",
      "Steep learning curve across vast cloud toolchains"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Computer Science, Information Technology, or Telecom Engineering.", institutions: ["NUST", "FAST", "COMSATS", "UET"] },
      { level: "Cloud Certifications", duration: "3-6 Months", description: "AWS Certified Solutions Architect, CKA (Kubernetes), Azure Administrator." }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "Continuous expansion as organizations migrate legacy monoliths to serverless and multi-cloud architectures.",
      emergingRoles: ["FinOps Cost Optimization Specialist", "Cloud Platform Engineer", "DevSecOps Architect"],
      automationRisk: "Low"
    },
    relatedFields: ["software-engineering", "cybersecurity"]
  },
  {
    slug: "electrical-engineering",
    name: "Electrical & Electronics Engineering",
    category: "Engineering",
    icon: "Zap",
    color: "from-amber-500 via-orange-500 to-indigo-600",
    shortDesc: "Design power systems, microelectronics, renewable energy grids, and embedded hardware systems.",
    longExplanation: "Electrical & Electronics Engineering powers modern civilization — from microchips and EV battery management to smart national electrical grids and high-voltage power transmission systems.",
    keySkills: ["Circuit Design & PCB Layout", "Embedded Systems (C/C++)", "Power Systems & Smart Grids", "MATLAB & Simulink", "Renewable Energy Tech", "Signal Processing"],
    topCareers: [
      { title: "Embedded Systems Engineer", description: "Design firmware and hardware circuits for IoT and consumer products.", demandLevel: "High" },
      { title: "Renewable Energy Specialist", description: "Develop solar, wind, and smart microgrid energy solutions.", demandLevel: "High" },
      { title: "Power Distribution Engineer", description: "Manage high-voltage electrical grids and industrial automation.", demandLevel: "Medium" }
    ],
    salaryRange: {
      local: { entry: "PKR 70K - 120K/mo", mid: "PKR 180K - 320K/mo", senior: "PKR 450K - 850K+/mo", currency: "PKR" },
      international: { entry: "$65K - $85K/yr", mid: "$95K - $135K/yr", senior: "$145K - $210K+/yr", currency: "USD" }
    },
    pros: [
      "Fundamental engineering domain with timeless demand",
      "Crucial role in the global transition to renewable energy and EVs",
      "Hands-on hardware creation combined with software"
    ],
    cons: [
      "Hardware iterations require physical prototyping capital",
      "Slower initial salary growth in local conventional industries",
      "Strict safety codes and complex mathematical standards"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Electrical or Electronics Engineering accredited by PEC.", institutions: ["UET Lahore/Taxila", "NUST", "GIKI", "NED University"] }
    ],
    futureOutlook: {
      growth: "Good",
      description: "High growth in EV electronics, semiconductor design, and solar/wind renewable integration.",
      emergingRoles: ["EV Powertrain Engineer", "VLSI Semiconductor Designer", "Smart Grid AI Analyst"],
      automationRisk: "Low"
    },
    relatedFields: ["mechanical-engineering", "aerospace-engineering"]
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering & Robotics",
    category: "Engineering",
    icon: "Cog",
    color: "from-blue-600 via-indigo-500 to-purple-600",
    shortDesc: "Design thermal systems, heavy machinery, automotive components, and autonomous robotics.",
    longExplanation: "Mechanical Engineering applies thermodynamics, materials science, and structural mechanics to design machines, heating/cooling infrastructure, robotics, and industrial production plants.",
    keySkills: ["CAD Modeling (SolidWorks/AutoCAD)", "Finite Element Analysis (ANSYS)", "Thermodynamics & Fluid Dynamics", "Robotics Kinematics", "CNC Manufacturing & 3D Printing", "Mechatronics"],
    topCareers: [
      { title: "Robotics & Automation Engineer", description: "Build industrial robotic arms, automated guide vehicles, and sensors.", demandLevel: "High" },
      { title: "HVAC & Thermal Systems Engineer", description: "Design efficient climate control systems for massive commercial complexes.", demandLevel: "Medium" },
      { title: "Automotive Systems Engineer", description: "Develop vehicle chassis, engine components, and electric drivetrains.", demandLevel: "Medium" }
    ],
    salaryRange: {
      local: { entry: "PKR 65K - 110K/mo", mid: "PKR 160K - 300K/mo", senior: "PKR 400K - 800K+/mo", currency: "PKR" },
      international: { entry: "$65K - $85K/yr", mid: "$90K - $130K/yr", senior: "$140K - $200K+/yr", currency: "USD" }
    },
    pros: [
      "Versatile career foundation applicable across dozens of industries",
      "Tangible physical outputs and creative machinery design",
      "Growing opportunities in industrial automation and mechatronics"
    ],
    cons: [
      "Requires physical presence on manufacturing or plant sites",
      "Traditional plant jobs can have slower early advancement locally",
      "High responsibility for physical safety compliance"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Mechanical or Mechatronics Engineering (PEC Accredited).", institutions: ["UET Lahore", "NUST", "GIKI", "NED University", "PIEAS"] }
    ],
    futureOutlook: {
      growth: "Good",
      description: "Transformation underway driven by Industry 4.0 automation, humanoid robotics, and advanced additive manufacturing.",
      emergingRoles: ["Additive Manufacturing Specialist", "Autonomous Vehicle Mechanical Designer", "Robotics Mechatronics Engineer"],
      automationRisk: "Low"
    },
    relatedFields: ["electrical-engineering", "aerospace-engineering"]
  },
  {
    slug: "civil-engineering",
    name: "Civil & Infrastructure Engineering",
    category: "Engineering",
    icon: "Building2",
    color: "from-emerald-500 via-teal-600 to-cyan-600",
    shortDesc: "Design mega-structures, sustainable smart cities, transportation networks, and mega water systems.",
    longExplanation: "Civil Engineering shapes the physical world around us. Engineers plan, design, and manage the construction of skyscrapers, bridges, dams, highways, transit systems, and water treatment works.",
    keySkills: ["Structural Analysis (ETABS/SAP2000)", "BIM (Building Information Modeling)", "Geotechnical Engineering", "Transportation Planning", "Project Management (PMP)", "Surveying & GIS"],
    topCareers: [
      { title: "Structural Engineering Specialist", description: "Analyze earthquake resilience and load capacities for high-rise buildings.", demandLevel: "High" },
      { title: "Infrastructure Project Manager", description: "Oversee multi-million dollar highway, airport, or railway construction.", demandLevel: "High" },
      { title: "Environmental & Water Engineer", description: "Design sustainable urban drainage and clean water distribution.", demandLevel: "Medium" }
    ],
    salaryRange: {
      local: { entry: "PKR 60K - 100K/mo", mid: "PKR 150K - 280K/mo", senior: "PKR 350K - 750K+/mo", currency: "PKR" },
      international: { entry: "$60K - $80K/yr", mid: "$85K - $125K/yr", senior: "$135K - $195K+/yr", currency: "USD" }
    },
    pros: [
      "Visible long-lasting real-world impact on infrastructure",
      "High demand across Gulf countries (UAE, KSA) for mega projects",
      "Strong entrepreneurial potential for private construction firms"
    ],
    cons: [
      "Site work requires endurance under harsh weather conditions",
      "Cyclical industry closely linked to real estate market trends",
      "High structural safety liabilities"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Civil Engineering from a PEC recognized institution.", institutions: ["UET Lahore", "NUST (NICE)", "NED University", "UET Peshawar"] }
    ],
    futureOutlook: {
      growth: "Good",
      description: "Steady global expansion driven by sustainable urban development, mega Gulf developments (NEOM), and climate resilience infrastructure.",
      emergingRoles: ["Smart City Infrastructure Designer", "BIM Integration Manager", "Climate-Resilient Structural Specialist"],
      automationRisk: "Low"
    },
    relatedFields: ["mechanical-engineering"]
  },
  {
    slug: "biomedical-engineering",
    name: "Biomedical Engineering",
    category: "Engineering",
    icon: "HeartPulse",
    color: "from-rose-500 via-purple-600 to-indigo-600",
    shortDesc: "Bridge healthcare and technology by engineering medical equipment, prosthetics, and diagnostic tools.",
    longExplanation: "Biomedical Engineering merges engineering principles with biological sciences. Practitioners develop artificial organs, medical imaging devices (MRI, CT), surgical robotics, and advanced neural prosthetics.",
    keySkills: ["Biomedical Instrumentation", "Medical Signal & Image Processing", "Biomechanics & Biomaterials", "Regulatory Standards (FDA/ISO)", "Embedded Medical Devices", "Tissue Engineering"],
    topCareers: [
      { title: "Medical Device R&D Engineer", description: "Design wearable health monitors and surgical instruments.", demandLevel: "High" },
      { title: "Clinical Systems Engineer", description: "Manage high-tech medical machinery inside hospital surgical centers.", demandLevel: "Medium" },
      { title: "Biomaterials Research Scientist", description: "Develop bio-compatible implants and synthetic tissue scaffolds.", demandLevel: "High" }
    ],
    salaryRange: {
      local: { entry: "PKR 70K - 110K/mo", mid: "PKR 160K - 290K/mo", senior: "PKR 380K - 750K+/mo", currency: "PKR" },
      international: { entry: "$68K - $88K/yr", mid: "$95K - $135K/yr", senior: "$145K - $210K+/yr", currency: "USD" }
    },
    pros: [
      "Deeply meaningful work that saves and improves human lives directly",
      "High innovation potential with AI integration in diagnostic tools",
      "Growing biomedical manufacturing export market"
    ],
    cons: [
      "Strict regulatory approvals lengthen product deployment timelines",
      "Local clinical R&D budgets can be limited compared to western nations",
      "Requires mastering both biology and rigorous engineering"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Biomedical Engineering.", institutions: ["NED University", "UET Lahore", "Riphah", "NUST"] }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "Rapid expansion driven by aging populations, AI-driven diagnostics, and robotic surgery innovations.",
      emergingRoles: ["Neural Interface Engineer", "AI Medical Imaging Specialist", "Bio-Print Tissue Developer"],
      automationRisk: "Low"
    },
    relatedFields: ["electrical-engineering", "data-science-ai"]
  },
  {
    slug: "commercial-pilot",
    name: "Commercial Aviation & Piloting",
    category: "Aviation",
    icon: "Plane",
    color: "from-cyan-400 via-blue-500 to-indigo-700",
    shortDesc: "Command commercial airliners, cargo aircraft, or executive jets across international skyways.",
    longExplanation: "Commercial Aviation requires elite training in aerodynamics, meteorology, flight computer navigation, and high-pressure decision making to safely transport passengers and cargo globally.",
    keySkills: ["Flight Crew Resource Management (CRM)", "Instrument Flight Rules (IFR)", "Advanced Aerodynamics", "Aviation Meteorology", "Emergency Management", "Flight Computer Systems"],
    topCareers: [
      { title: "Commercial Airline Pilot (Captain / First Officer)", description: "Fly passenger airliners for international and regional airlines.", demandLevel: "High" },
      { title: "Cargo Flight Captain", description: "Operate heavy long-haul freight freighters (FedEx, DHL, Emirates SkyCargo).", demandLevel: "High" },
      { title: "Corporate / Private Jet Aviator", description: "Fly VIP charters and business aviation aircraft.", demandLevel: "Medium" }
    ],
    salaryRange: {
      local: { entry: "PKR 250K - 400K/mo", mid: "PKR 600K - 1.2M/mo", senior: "PKR 1.8M - 3.5M+/mo", currency: "PKR" },
      international: { entry: "$60K - $90K/yr", mid: "$120K - $190K/yr", senior: "$220K - $380K+/yr", currency: "USD" }
    },
    pros: [
      "Extremely prestigious, high-paying career with global travel perks",
      "Clear structured career progression from First Officer to Senior Captain",
      "No desk job routine — sky as your office window"
    ],
    cons: [
      "Very high initial training cost (PPL/CPL licenses)",
      "Strict medical fitness standards required throughout your career",
      "Irregular flight schedules, jet lag, and time away from family"
    ],
    educationPaths: [
      { level: "Pilot Licenses (PPL + CPL + IR)", duration: "1.5 - 2.5 Years", description: "Private Pilot License, Commercial Pilot License, Instrument Rating from approved flight academies.", institutions: ["Rawalpindi Flying Club", "Karachi Aero Club", "Askari Aviation", "Emirates Flight Training Academy"] },
      { level: "Aviation Degree (Optional)", duration: "4 Years", description: "BS Aviation Management or Aeronautics alongside flying." }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "Severe global pilot shortage over the next 15 years as air travel demands soar post-pandemic.",
      emergingRoles: ["eVTOL Air Taxi Captain", "Flight Operations Safety Controller", "Sim Training Instructor"],
      automationRisk: "Low"
    },
    relatedFields: ["air-traffic-control", "aerospace-engineering"]
  },
  {
    slug: "aerospace-engineering",
    name: "Aerospace & Avionics Engineering",
    category: "Aviation",
    icon: "Rocket",
    color: "from-indigo-600 via-purple-600 to-cyan-400",
    shortDesc: "Design aircraft, satellites, propulsion systems, space probes, and autonomous drone fleets.",
    longExplanation: "Aerospace Engineering involves designing, testing, and manufacturing aircraft, spacecraft, missiles, and defense systems. Avionics engineers focus on radar, navigation, and automated guidance systems.",
    keySkills: ["Aerodynamics & Computational Fluid Dynamics (CFD)", "Propulsion & Jet Engines", "Avionics Systems & Radar", "Orbital Mechanics", "Flight Control Systems", "Composite Aircraft Materials"],
    topCareers: [
      { title: "Aerodynamic Design Specialist", description: "Optimize drag coefficients and wing designs using high-performance CFD clusters.", demandLevel: "High" },
      { title: "Avionics Systems Architect", description: "Design flight guidance computers, radar, and cockpit electronic displays.", demandLevel: "High" },
      { title: "Satellite Systems Engineer", description: "Develop low-earth orbit payloads, satellite platforms, and solar arrays.", demandLevel: "High" }
    ],
    salaryRange: {
      local: { entry: "PKR 80K - 140K/mo", mid: "PKR 200K - 380K/mo", senior: "PKR 500K - 1.0M+/mo", currency: "PKR" },
      international: { entry: "$75K - $95K/yr", mid: "$110K - $155K/yr", senior: "$165K - $240K+/yr", currency: "USD" }
    },
    pros: [
      "Incredible technology frontier — aviation, space, and defense systems",
      "Highly prestigious engineering specialization",
      "Rising opportunities in commercial space and UAV drone tech"
    ],
    cons: [
      "Defense and space sectors overseas often require security clearance/citizenship",
      "R&D projects take years before physical flight deployment",
      "Extremely rigorous mathematical modeling standards"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Aerospace or Avionics Engineering.", institutions: ["NUST (SMME/CAAE)", "Institute of Space Technology (IST)", "Air University", "GIKI"] }
    ],
    futureOutlook: {
      growth: "Excellent",
      description: "Surging space economy (commercial satellites, moon missions) and unmanned aerial defense systems.",
      emergingRoles: ["Commercial Spacecraft Systems Lead", "Autonomous Drone Fleet Architect", "Hypersonic Propulsion Researcher"],
      automationRisk: "Low"
    },
    relatedFields: ["commercial-pilot", "mechanical-engineering"]
  },
  {
    slug: "air-traffic-control",
    name: "Air Traffic Control & Airspace",
    category: "Aviation",
    icon: "Radio",
    color: "from-blue-500 via-teal-500 to-indigo-600",
    shortDesc: "Manage airspace safety, coordinate flight vectors, and control airport runway traffic in real-time.",
    longExplanation: "Air Traffic Controllers manage safe spacing between flying aircraft, guide plane landings/takeoffs, handle weather emergencies, and keep international flight corridors flowing safely.",
    keySkills: ["Airspace Management", "Radar Navigation", "Radio Telecommunications", "High-Stress Crisis Management", "Aviation Regulations (ICAO)", "Spatial Reasoning"],
    topCareers: [
      { title: "Area Radar Controller", description: "Direct high-altitude airliner traffic across national and international airspace sectors.", demandLevel: "High" },
      { title: "Tower Flight Controller", description: "Manage runway takeoffs, taxi routes, and visual landings at international hubs.", demandLevel: "High" },
      { title: "Airspace Operations Specialist", description: "Design flight routing corridors and airspace capacity models.", demandLevel: "Medium" }
    ],
    salaryRange: {
      local: { entry: "PKR 120K - 200K/mo", mid: "PKR 280K - 500K/mo", senior: "PKR 650K - 1.4M+/mo", currency: "PKR" },
      international: { entry: "$85K - $120K/yr", mid: "$140K - $185K/yr", senior: "$190K - $250K+/yr", currency: "USD" }
    },
    pros: [
      "Exceptional job security — civil aviation authority core operational role",
      "Very competitive salaries and early retirement benefits in many countries",
      "Immediate, impactful work without bringing homework home"
    ],
    cons: [
      "High cognitive stress during complex weather delays or air emergencies",
      "Strict shifts including night, weekend, and holiday tower coverage",
      "Mandatory medical and psychological re-certifications"
    ],
    educationPaths: [
      { level: "ATC Certification & Training", duration: "1.5 - 2 Years", description: "Civil Aviation Authority ATC Cadence Program or Diploma in Aviation Operations.", institutions: ["Civil Aviation Authority (CAA) Academy", "Air University", "International Aviation Academies"] }
    ],
    futureOutlook: {
      growth: "Good",
      description: "Growing global airspace density requires next-gen digital tower controllers and AI-assisted traffic management.",
      emergingRoles: ["Digital Remote Tower Controller", "Unmanned Airspace Manager (UTM)", "NextGen Flight Vector Analyst"],
      automationRisk: "Medium"
    },
    relatedFields: ["commercial-pilot", "aviation-management"]
  },
  {
    slug: "aviation-management",
    name: "Aviation Operations & Airport Management",
    category: "Aviation",
    icon: "ShieldCheck",
    color: "from-teal-400 via-blue-600 to-indigo-700",
    shortDesc: "Lead airline fleets, airport infrastructure operations, aviation logistics, and regulatory compliance.",
    longExplanation: "Aviation Operations managers ensure smooth airport ground handling, airline fleet scheduling, cargo logistics, safety compliance, and passenger terminal experiences across global transportation networks.",
    keySkills: ["Airport Terminal Operations", "Airline Fleet Logistics", "ICAO & FAA Regulatory Compliance", "Aviation Safety Management Systems (SMS)", "Supply Chain & Cargo Logistics", "Commercial Aviation Finance"],
    topCareers: [
      { title: "Airport Operations Manager", description: "Oversee daily terminal, runway, security, and gate operations.", demandLevel: "High" },
      { title: "Airline Fleet Scheduler", description: "Optimize aircraft routes, crew pairings, and maintenance windows.", demandLevel: "High" },
      { title: "Aviation Safety Auditor", description: "Ensure strict international safety standards across airlines and maintenance hangars.", demandLevel: "Medium" }
    ],
    salaryRange: {
      local: { entry: "PKR 80K - 130K/mo", mid: "PKR 190K - 350K/mo", senior: "PKR 450K - 900K+/mo", currency: "PKR" },
      international: { entry: "$65K - $85K/yr", mid: "$95K - $135K/yr", senior: "$145K - $210K+/yr", currency: "USD" }
    },
    pros: [
      "Dynamic operational environment combining business and aviation",
      "Strong employment prospects in expanding Gulf and Asian aviation hubs",
      "Diverse career trajectories across airlines, airports, and logistics giants"
    ],
    cons: [
      "Operations run 24/7 requiring crisis response capability",
      "Sensitive to international trade, travel restrictions, and fuel price swings",
      "High multi-stakeholder management complexity"
    ],
    educationPaths: [
      { level: "Bachelor's Degree", duration: "4 Years", description: "BS Aviation Management, Airport Operations, or Supply Chain Management.", institutions: ["Air University", "Superior University", "University of Management & Technology", "EMIRATES Aviation University"] }
    ],
    futureOutlook: {
      growth: "Good",
      description: "Expanding airport infrastructures across Asia-Pacific and Middle East drive continuous administrative demand.",
      emergingRoles: ["Sustainable Airport Energy Lead", "Biometric Terminal Flow Director", "Cargo Drone Logistics Manager"],
      automationRisk: "Low"
    },
    relatedFields: ["air-traffic-control", "commercial-pilot"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Zainab Malik",
    field: "Data Science & AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "CareerScope AI guided me from electrical engineering basics to AI research. The skill gap roadmap was spot on for my FAST master's prep!",
    location: "Lahore, Pakistan"
  },
  {
    name: "Bilal Chaudhry",
    field: "Cloud & DevOps",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "The salary insights for local vs international remote roles gave me the confidence to negotiate my first remote DevOps offer in USD.",
    location: "Islamabad, Pakistan"
  },
  {
    name: "Ayesha Tariq",
    field: "Aerospace Engineering",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    quote: "I was torn between CS and Avionics. The Career Compass quiz highlighted my passion for satellite propulsion. Currently at IST!",
    location: "Karachi, Pakistan"
  }
];
