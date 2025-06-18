export interface AnswerSegment {
  type: 'text' | 'bold' | 'break';
  content?: string;
}

export interface BlockData {
  id: string;
  lines: string[];
  contact: {
    team_lead_img: string;
    lead_name:string;
    contact_us: string;
    team_page: string;
  }
  data: {
    name: string;
    description: string;
    qa: Array<{
      question: string;
      answer: AnswerSegment[];
    }>;
  };
}

export const blockData: BlockData[] = [
  {
    id: "g642",
    lines: [
      "g1316", "g1320", "g1312", "g1347", "g1385", "g1406", "g1433", "g1456"
    ],
    contact: {
      team_lead_img: "/images/DC Engineering.png",
      lead_name: "Rob Cox",
      contact_us: "DCS_Engineering@resticted.group.com",
      team_page: "https://www.tripadvisor.com/Attraction_Products-g60763-New_York_City_New_York.html"
    },
    data: {
      name: "DC Engineering",
      description: "Owns global data center designs/standards, ensuring resilient DC environments through engineered solutions and project/program/product support.",
      qa: [
        {
          question: "What is the primary function of your team?",
          answer: [
            { type: "text", content: "The DCS Infrastructure and Engineering team focuses on designs and standards to ensure a stable, resilient datacenter environment for JPMC. This includes:" },
            { type: "break" },
            { type: "text", content: "1. Data center design and construction engagement," },
            { type: "break" },
            { type: "text", content: "2. Physical infrastructure (cable plant) design and build," },
            { type: "break" },
            { type: "text", content: "3. Product and platform development with Infrastructure Platforms hardware engineering teams," },
            { type: "break" },
            { type: "text", content: "4. Design of “engineered solutions” that includes offsite integration of compute/storage/build infrastructure, and product management for DCS." },
          ]
        },
        {
          question: "What is your team ultimately accountable for?",
          answer: [
            { type: "text", content: "Our team's primary goal is to focus on designs and standards to ensure a stable, resilient datacenter environment for JPMC. This includes " },
            { type: "bold", content: "project/program/product support " },
            { type: "text", content: "throughout DCS and ownership of  " },
            { type: "bold", content: "all engineered solutions " },
            { type: "text", content: "for product deployment at a global level." },
          ]
        },
        {
          question: "Which services, systems, or tools does your team directly own or manage?",
          answer: [
            { type: "text", content: "1. Physical IT infrastructure design and layout for new site builds (including Local Zone and Specialty sites), expansions, refresh areas - including spatial planning" },
            { type: "break" },
            { type: "text", content: "2. Physical IT project layout/design across compute/network/storage for IP teams and LOB teams" },
            { type: "break" },
            { type: "text", content: "3. Infrastructure cabling standards and deployment strategies (physical cable plant, tray design, product design)" },
            { type: "break" },
            { type: "text", content: "4. Engineered solutions within TAPS, DCOS, Verum – this includes pattern design" },
            { type: "break" },
            { type: "text", content: "5. Offsite integration (build) physical standards, quality control ownership (DCOSX/PhotoQA), product design and engineering" },
            { type: "break" },
            { type: "text", content: "6. Physical RFID infrastructure design, including deployment and use approach" },
            { type: "break" },
            { type: "text", content: "7. Product advisories – new or existing deployments" },
            { type: "break" },
            { type: "text", content: "8. Physical power monitoring infrastructure design, including power strip meters" },
            { type: "break" },
            { type: "text", content: "9. Datacenter product consumables standards and definition, including power strips, cabinets, patch cords, etc." },
            { type: "break" },
          ]
        },
        {
          question: "Are there services, tools, or processes where your team plays a supporting or contributing role, but is not the owner?",
          answer: [
            { type: "text", content: "1. We Support: RFID deployment and software tooling. Power Monitoring, go/DCS, DCS documentation." },
            { type: "break" },
            { type: "text", content: "2. Physical IT project layout/design across compute/network/storage for IP teams and LOB teams2. We Contribute: DCOS/DCOSX feature enhancements, tooling/telemetry/reporting, TAPS" },
            { type: "break" },
          ]
        },
      ]
    }
  },
  {
    id: "g482",
    lines: [
      "g1320", "g1343", "g1347", "g1339", "g1351", "g1720", "g1750", "g1851", "g1767", "g1636", "g1829", "g1691", "g1783", "g1799", "g1664"
    ],
    contact: {
      team_lead_img: "/images/Capacity & Placement.png",
      lead_name: "Mark Reichel",
      contact_us: "DCS_Capacity@resticted.group.com",
      team_page: "https://www.tripadvisor.com/Tourism-g33388-Denver_Colorado-Vacations.html"
    },
    data: {
      name: "Capacity & Placement",
      description: "Manages and allocates data center capacity, ensuring all capacity requirements are met for our customers and providing a clear path of execution for installations",
      qa: [
        {
          question: "What is the primary function of your team?",
          answer: [
            { type: "text", content: "The Capacity team manages and allocates Data Center capacity, collaborating with both external and internal stakeholders within DCS." }
          ]
        },
        {
          question: "What is your team ultimately accountable for?",
          answer: [
            { type: "text", content: "Our team is ultimately accountable for ensuring that all capacity requirements are met for our customers in our Data Centers and providing a clear path of execution for installations." }
          ]
        },
        {
          question: "Which services, systems, or tools does your team directly own or manage?",
          answer: [
            { type: "text", content: "Our team directly owns and manages:" },
            { type: "break" },
            { type: "text", content: "1. Physical hardware allocation" },
            { type: "break" },
            { type: "text", content: "2. Network Fabric allocation and triggers" },
            { type: "break" },
            { type: "text", content: "3. Demand and Strategy execution" },
          ]
        },
        {
          question: "Are there services, tools, or processes where your team plays a supporting or contributing role, but is not the owner?",
          answer: [
            { type: "text", content: "We play a supporting or contributing role:" },
            { type: "break" },
            { type: "text", content: "1.	Power Monitoring" },
            { type: "break" },
            { type: "text", content: "2.	Data and Analytics" },
            { type: "break" },
            { type: "text", content: "3.	Application Development" },
            { type: "break" },
            { type: "text", content: "4.	Process Improvement" },
            { type: "break" },
          ]
        },
      ]
    }
  },
  {
    id: "g929",
    lines: [
      "g1479", "g1607"
    ],
    contact: {
      team_lead_img: "/images/HBX.png",
      lead_name: "John Hamilton",
      contact_us: "DCS_HBX@resticted.group.com",
      team_page: "https://www.tripadvisor.com/Attractions-g298184-Activities-Tokyo_Tokyo_Prefecture_Kanto.html"
    },
    data: {
      name: "Hardware Breakdix (HBX)",
      description: "Delivers global 24/7 incident management and break-fix support for distributed server, network, and storage hardware across data centers and remote sites.",
      qa: [
        {
          question: "What is the primary function of your team?",
          answer: [
            { type: "text", content: "DCS HBX is a specialized Incident Management team offering 24/7, 365-days support for Distributed Server, Network, and Storage Hardware Break-Fix issues. This service is available across all Data Centers, Corporate Centers, and Remote locations worldwide." }
          ]
        },
        {
          question: "What is your team ultimately accountable for?",
          answer: [
            { type: "text", content: "•	Addressing and resolving the hardware failure issues for Distributed Servers, Network, and Storage assets." },
            { type: "break" },
            { type: "text", content: "•	Engagement and management of external vendors." }
          ]
        },
        {
          question: "Which services, systems, or tools does your team directly own or manage?",
          answer: [
            { type: "text", content: "•	HBXMS (Hardware Break-Fix Management System)" },
            { type: "break" },
            { type: "text", content: "•	HBX Incident Timeline Dashboard" }
          ]
        },
        {
          question: "Are there services, tools, or processes where your team plays a supporting or contributing role, but is not the owner?",
          answer: [
            { type: "text", content: "ServiceNow eBonding." }
          ]
        },
      ]
    }
  }
]
