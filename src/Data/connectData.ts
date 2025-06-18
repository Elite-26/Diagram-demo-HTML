export interface ConnectData {
  id: string;
  from: string;
  to: string;
  type: string;
  data: Array<{
    name: string;
    summary: string;
    desTitle: string;
    description: string;
  }>;
}

export const connectData: ConnectData[] = [
  // Internal Interactions
  // DC Engineering
  {
    id: "g1316",
    from: "g642",
    to: "g1086",
    type: "internal",
    data: [
      {
        name: "DC Engineering --> DC Exit & Strategy (DCE&S)",
        summary: "Technical deployment & support",
        desTitle: "DC Engineering —— DCE&S:",
        description: "DC Engineering owns global standards and hardware design patterns; DCE&S applies these designs in site-specific exit or lifecycle scenarios. DCE&S consults Engineering for design feasibility and adaptations when standard patterns (e.g., Micro/Mini deployments) require tailoring due to location-specific constraints.",
      }
    ]
  },
  {
    id: "g1320",
    from: "g642",
    to: "g482",
    type: "internal",
    data: [
      {
        name: "DC Engineering --> Capacity & Placement Capacity",
        summary: "Design and Standards",
        desTitle: "DC Engineering —— Capacity:",
        description: "Capacity collects business-side demand and routes it to Engineering (and sometimes TS or Ops. TS is optional in project support. ) Engineering provides the \"what\" — meaning engineered solution requirements for new tech.",
      }
    ]
  },
  {
    id: "g1312",
    from: "g642",
    to: "g315",
    type: "internal",
    data: [
      {
        name: "EC Engineering --> Tech Support (TS)",
        summary: "Design and Standards",
        desTitle: "DC Engineering —— TS:",
        description: "DC Engineering defines and communicates what to deploy (design specs, standards). TS determines how to deploy, operate, and support the solution. Daily project and escalation coordination occurs.",
      }
    ]
  },
  //Capacity & Placement
  {
    id: "g1347",
    from: "g482",
    to: "g642",
    type: "internal",
    data: [
      {
        name: "Capacity & Placement --> DC Engineering",
        summary: "Capacity Planning & Req ",
        desTitle: "Capacity —— Engineering:",
        description: "Capacity team collects business-side demand and routes it to DC Engineering (and sometimes TS or Ops. TS is optional in project support.) DC Engineering provides the \"what\" — meaning engineered solution requirements for new tech.",
      }
    ]
  },
  {
    id: "g1339",
    from: "g482",
    to: "g315",
    type: "internal",
    data: [{
      name: "Capacity & Placement --> Tech Support (TS)",
      summary: "Capacity Planning & Req ",
      desTitle: "Capacity —— TS:",
      description: "Capacity team informs TS of demand. TS joins planning where power monitoring or TS-managed gear is involved.",
    }
    ]
  },
  {
    id: "g1343",
    from: "g482",
    to: "g1086",
    type: "internal",
    data: [
      {
        name: "Capacity & Placement --> DC Exit & Strategy (DCE&S)",
        summary: "Capacity Planning & Req ",
        desTitle: "Capacity —— DCE&S:",
        description: "Capacity team defines capacity strategy and requirements. DCE&S collaborates to determine feasibility and executes (e.g., merge, decom, build). ",
      }
    ]
  },
  {
    id: "g1351",
    from: "g482",
    to: "g786",
    type: "internal",
    data: [
      {
        name: "Capacity & Placement --> Operations & Logistics (DCO)",
        summary: "Capacity Planning & Req ",
        desTitle: "Capacity —— DCO:",
        description: "Capacity team collects business-side DC capacity demand and routes it to DCO for physical installation.",
      }
    ]
  },
  //HBX
  {
    id: "g1479",
    from: "g929",
    to: "g786",
    type: "internal",
    data: [
      {
        name: "Hardware Break Fix (HBX) <--> DC Operations & Logistics (DCO)",
        summary: "Hardware Break-Fix Support",
        desTitle: "HBX —— DCO:",
        description: "HBX handles the triage of hardware failure incidents and collaborates with vendors to arrange the necessary parts and field engineers. The DCO Logistics team oversees the management of spare part logistics across global data centers. When applicable, a DCO engineer performs the hands-on hardware part replacements or accompanies the vendor's field engineer if the replacement falls outside the DCO's scope.",
      }
    ]
  },

  // External Interactions
  //DC Engineering
  {
    id: "g1385",
    from: "g642",
    to: "g2", //15
    type: "external",
    data: [
      {
        name: "DC Engineering<--> Global Real Estate (GRE)",
        summary: "Facility Readiness",
        desTitle: "DC Engineering —— GRE:",
        description: "DC Engineering defines requirements and validates facility designs; GRE executes physical build and maintains operational readiness for DCS deployment.",
      }
    ]
  },
  {
    id: "g1406",
    from: "g642",
    to: "g2", //37
    type: "external",
    data: [
      {
        name: "DC Engineering <----> Global Security (GS)",
        summary: "Security Design Alignment",
        desTitle: "DC Engineering —— GS:",
        description: "GS and DC Engineering relationship is functionally similar to GRE and DC Engineering in the context of facility readiness and infrastructure support, just with a security focus. The interaction is project-based, typically triggered during new builds, expansions, or specific infrastructure projects.",
      }
    ]
  },
  {
    id: "g1433",
    from: "g642",
    to: "g2", //56
    type: "external",
    data: [
      {
        name: "DC Engineering <----> Supply Chain (SC)",
        summary: "Engineered Solution",
        desTitle: "DC Engineering —— SC:",
        description: "DC Engineering defines rack specs; interfaces with integrators; drives QA/QC and physical build requirements. SC coordinates with vendors; manages integrators; procures parts/materials Together, make ready-to-deploy racks.",
      }
    ]
  },
  {
    id: "g1456",
    from: "g642",
    to: "g2", //72
    type: "external",
    data: [
      {
        name: "DC Engineering <--> IP/CNS product owners and architects",
        summary: "Engineered Solution",
        desTitle: "DC Engineering —— IP/CNS product owners and architects:",
        description: "IP/CNS PO and Architects defines product specs, tech requirements, deployment guidance. DC Engineering translates IP hardware needs into physical infrastructure design.",
      }
    ]
  },
  //Capacity & Placement
  {
    id: "g1720",
    from: "g482",
    to: "g106", //115
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> Supply Chain (SC)",
        summary: "Forecasting and Orchestration",
        desTitle: "Capacity —— Supply Chain (SC):",
        description: "SC provides forecast demand data and metrics. Capacity team relies on this input for capacity planning and makes decisions that affect SC execution.",
      }
    ]
  },
  {
    id: "g1750",
    from: "g482",
    to: "g106", //131, 173, 192
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> Product Owners CNS (NPL, Compute Storage, etc.)",
        summary: "Capacity Management",
        desTitle: "Capacity —— Product Owners:",
        description: "Capacity team attends CNS call, discusses product fit, lifecycle, and readiness. Collaboration with VSI/PSI owners.",
      },
      {
        name: "Capacity & Placement <--> Lines of Business (CIB, AWM, etc.)",
        summary: "Capacity Management",
        desTitle: "Capacity —— LOBs:",
        description: "Capacity team manages LOB expectations, understands demand and strategy to enable accommodating LOB requirements.",
      },
      {
        name: "Capacity & Placement <--> Global Real Estate (GRE)",
        summary: "Capacity Management",
        desTitle: "Capacity —— GRE:",
        description: "Capacity interfaces at two levels—placement (site-level installs) and capacity (power/cooling limits). Coordinates with GRE on new deployments and demand requirements.",
      }
    ]
  },
  {
    id: "g1851",
    from: "g482",
    to: "g106", //214
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> Finance",
        summary: "Business Case Review/Approval",
        desTitle: "Capacity —— Finance:",
        description: "Capacity participates in weekly Business Case reviews, directly communicates with Finance, provides early signals to prevent unaligned hardware purchases.",
      }
    ]
  },
  {
    id: "g1767",
    from: "g482",
    to: "g106", //222
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> Project Management team (PMO)",
        summary: "Project Execution",
        desTitle: "Capacity —— Project Management team (PMO):",
        description: "Capacity team works with PMO for capacity strategy and demand requests execution. ",
      }
    ]
  },
  {
    id: "g1636",
    from: "g482",
    to: "g106", //249
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> IP International",
        summary: "Non-NADC Capacity Management and Strategy",
        desTitle: "Capacity —— IP International:",
        description: "Capacity team works with IP International for capacity strategy, refreshes, and modernization across EMEA/APAC, functions as a front door for IP International's data center capacity requests and guidance.",
      }
    ]
  },
  {
    id: "g1829",
    from: "g482",
    to: "g106", //265
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> IP Senior Management",
        summary: "Capacity Reporting",
        desTitle: "Capacity —— IP Senior Management:",
        description: "Capacity team is the dominant presenter in recurring IP exec calls and maintains metrics for visibility at top levels.",
      }
    ]
  },
  {
    id: "g1691",
    from: "g482",
    to: "g106", //284
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> IP Architects",
        summary: "Capacity Solution Planning",
        desTitle: "Capacity —— IP Architects:",
        description: "Managing design requirements and accommodation options.",
      }
    ]
  },
  {
    id: "g1783",
    from: "g482",
    to: "g106", //297
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> Verum Team",
        summary: "Data Hygiene",
        desTitle: "Capacity ——Verum:",
        description: "Placement owns location data and signs off changes in Verum.",
      }
    ]
  },
  {
    id: "g1799",
    from: "g482",
    to: "g106", //307
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> TPC, TAG",
        summary: "Device/Component Ownership",
        desTitle: "Capacity ——TPC, TAG:",
        description: "Management of TPC Entries. Management of TAG Products.",
      }
    ]
  },
  {
    id: "g1664",
    from: "g482",
    to: "g1255", //1274
    type: "external",
    data: [
      {
        name: "Capacity & Placement <--> Vendors / Integrators",
        summary: "Product management and deployment",
        desTitle: "Capacity —— Vendors / Integrators:",
        description: "Capacity provides install constraints, capacity context, or escalates to Engineering",
      }
    ]
  },
  //HBX
  {
    id: "g1607",
    from: "g929",
    to: "g1507", //4672, 4711, 4735, 4757
    type: "external",
    data: [
      {
        name: "Hardware Break Fix (HBX) <--> CPNS (Compute Platforms & Network Services)",
        summary: "Hardware Break-Fix Support",
        desTitle: "HBX ——CPNS:",
        description: "HBX collaborates with CPNS teams to support, triage, escalate, and manage infrastructure-level incidents related to Server, Network, and Storage hardware faults. This collaboration also extends to handling firmware upgrades and defining various operational, process and automation requirements."
      },
      {
        name: "Hardware Break Fix (HBX) <--> CB Athena Core Support Team",
        summary: "Hardware Break-Fix Support",
        desTitle: "HBX ——Athena:",
        description: "HBX collaborates with Athena team to support, triage, escalate, and manage infrastructure-level incidents related to Server hardware faults. This collaboration also includes defining various operational and process improvements."
      },
      {
        name: "Hardware Break Fix (HBX) <--> CTO Big Data & Hadoop Team",
        summary: "Hardware Break-Fix Support",
        desTitle: "HBX —— Big Data & Hadoop:",
        description: "HBX collaborates with Big Data & Hadoop team to support, triage, escalate, and manage infrastructure-level incidents related to Server hardware faults. This collaboration also includes defining various operational and process improvements."
      },
      {
        name: "Hardware Break Fix (HBX) <--> ETS SRE Team",
        summary: "Hardware Break-Fix Support",
        desTitle: "HBX —— ETS SRE:",
        description: "HBX collaborates with ETS SRE team to support, triage, escalate, and manage infrastructure-level incidents related to Server hardware faults. This collaboration also includes defining various operational and process improvements."
      }
    ]
  }
]