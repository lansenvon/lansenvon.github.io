window.SITE_DATA = {
  lang: "en",
  resumeVersion: "20261126-en-m1",
  defaultDirection: "systems",
  ui: {
    prevProject: "Previous: ",
    allProjects: "All Projects",
    nextProject: "Next: ",
    rmsWindows: {
      "50": "50 ms window: sliding-window RMS computes the activity envelope from the most recent 50 ms of raw ADC samples.",
      "100": "100 ms window: sliding-window RMS computes the activity envelope from the most recent 100 ms of raw ADC samples.",
      "200": "200 ms window: sliding-window RMS computes the activity envelope from the most recent 200 ms of raw ADC samples."
    }
  },
  directions: {
    systems: {
      label: "Medical Device Systems",
      resumeLabel: "Download English CV",
      resume: "assets/resumes/Langcheng_Feng_CV_Medical_Device_Systems_Engineer.pdf",
      resumePlain: "",
      summary: "System integration, measurement modeling, and engineering verification",
      heroLead: "Bridges optical, mechanical, electrical, software, and test interfaces to drive prototype integration, root-cause debugging, and design verification.",
      hero: {
        src: "assets/images/concept/systems-integration-concept.webp",
        alt: "Engineering schematic of medical device system integration illustrating opto-mechatronic interfaces, measurement modeling, and prototype verification.",
        title: "System Integration & Verification",
        caption: "Engineering Schematic · Interfaces, Modeling & V&V",
        stages: ["Subsystem Interfaces", "Modeling & Calibration", "System Verification"]
      },
      orderLabel: "Systems R&D · 5 Engineering Cases",
      order: ["p01", "p06", "p04", "p05", "p09"]
    },
    optics: {
      label: "Laser & Optomechanical Systems",
      resumeLabel: "Download English CV",
      resume: "assets/resumes/Langcheng_Feng_CV_Medical_Device_Systems_Engineer.pdf",
      resumePlain: "",
      summary: "Medical laser sensing, optical alignment, and system integration",
      heroLead: "Collaborates with optical and electronics engineers on medical laser R&D—covering beam alignment, assembly optimization, driver control targets, and full-system integration.",
      hero: {
        src: "assets/images/concept/thulium-laser-integration-concept.webp",
        alt: "Engineering schematic of an LD-pumped thulium-doped fiber laser system.",
        title: "Laser R&D & Opto-Mechatronic Integration",
        caption: "Engineering Schematic · Medical Laser Integration",
        stages: ["Current Driver", "Pump LD", "Tm-Doped Fiber", "Output Coupler", "Delivery Fiber"]
      },
      orderLabel: "Laser & Optomechanics · 5 Engineering Cases",
      order: ["p04", "p05", "p06", "p01", "p09"]
    },
    biomedical: {
      label: "Biomedical & Lab Instrumentation",
      resumeLabel: "Download English CV",
      resume: "assets/resumes/Langcheng_Feng_CV_Medical_Device_Systems_Engineer.pdf",
      resumePlain: "",
      summary: "Lab instrumentation, image analysis, and automated workflows",
      heroLead: "Develops microfluidic incubation hardware, standardized chip cartridges, and automated microscopy platforms—alongside autofocus, MIC boundary search, and bio-signal processing algorithms.",
      hero: {
        src: "assets/images/concept/biomedical-culture-microscopy-concept.webp",
        alt: "Engineering schematic of thermal incubation equipment, standardized chip cartridge, automated microscopy platform, and image analysis workflow.",
        title: "Lab Equipment & Automated Microscopy",
        caption: "Engineering Schematic · Culture, Cartridge Transfer & Search",
        stages: ["Thermal Incubation", "Manual Transfer", "Automated Microscopy", "Image & Search"]
      },
      orderLabel: "Biomedical & Lab Instruments · 5 Engineering Cases",
      order: ["p01", "p06", "p04", "p05", "p09"]
    }
  },
  projects: {
    p06: { title: "Medical Laser Power Monitoring & Closed-Loop Control", path: "laser-power-measurement/" },
    p04: { title: "Thulium Laser R&D & Opto-Mechatronic Integration", path: "laser-optics-fiber/#thulium-laser" },
    p05: { title: "Diode Laser Fiber Coupling", path: "laser-optics-fiber/#diode-laser" },
    p09: { title: "Urodynamic EMG Signal Chain & Sliding-Window RMS", path: "emg-signal-processing/" },
    p01: { title: "Microfluidic Equipment & Automated Microscopy", path: "microfluidics-equipment/" }
  }
};
