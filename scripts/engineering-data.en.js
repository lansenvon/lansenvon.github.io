/* Complete English functional relationships and work statements across all 5 systems (M1).
   Artwork is schematic. Facts and boundaries aligned with facts_glossary.json. */
window.ENGINEERING_UI = {
  selectSystemAria: "Select engineering system",
  hint: "Select a node to inspect my work",
  nodesAria: "System functional nodes",
  nodeAriaSuffix: ", view function and my work",
  resultsAria: "Project results",
  evidenceTabsAria: "Results and deliverables",
  funcLabel: "Function",
  workLabel: "My Work",
  viewFullProject: "View full project ↗",
  viewPowerLoop: "View coupler redesign & power loop ↗",
  viewThulium: "View thulium laser integration ↗",
  powerRangeAria: "Power fluctuation range 0.40% to 1.03%, median 0.63%"
};

window.ENGINEERING_DATA = {
  culture: {
    label: "Lab Equipment",
    code: "CULTURE & IMAGING",
    title: "Incubator, Cartridge & Automated Microscopy",
    project: "p01",
    defaultNode: 3,
    relation: "After thermal incubation, the standardized chip cartridge is manually transferred to the automated microscopy stage for imaging and analysis.",
    nodes: [
      {
        label: "Incubation & Fluidics",
        short: "Culture unit",
        icon: "culture",
        tone: "blue",
        function: "Regulate temperature, humidity, and fluidic perfusion conditions during chip incubation.",
        work: "Developed peripheral incubation equipment across multi-generation prototypes, aligning hardware integration with experimental protocols."
      },
      {
        label: "Standard Cartridge",
        short: "Shared carrier",
        icon: "cartridge",
        tone: "lilac",
        function: "Hold the hydrogel chip consistently across incubation and downstream microscopy.",
        work: "Developed standardized chip cartridges in SolidWorks so chip seating, mounting, and optical observation interfaces match seamlessly."
      },
      {
        label: "Manual Transfer",
        short: "Post-culture handoff",
        icon: "transfer",
        tone: "neutral",
        function: "Transfer the incubated chip cartridge onto the microscopy stage.",
        work: "Engineered quick-release locating features on the cartridge for direct, repeatable placement onto the microscopy stage."
      },
      {
        label: "Automated Microscopy",
        short: "Imaging & autofocus",
        icon: "microscope",
        tone: "blue",
        function: "Perform motorized image acquisition and focal-plane search.",
        work: "Integrated the automated microscopy platform and independently built image preprocessing and autofocus routines."
      },
      {
        label: "MIC Boundary Search",
        short: "Image analysis",
        icon: "search",
        tone: "green",
        function: "Locate the Minimum Inhibitory Concentration (MIC) boundary using model inference and search logic.",
        work: "Independently built MIC boundary search software coupling microscopy capture, neural-network inference outputs, and motorized stage motion."
      }
    ],
    evidence: [
      {
        tab: "R&D Delivery",
        value: "HW × SW",
        label: "Lab equipment & microscopy workflow",
        rows: [
          ["Hardware", "Incubation unit / standardized cartridge"],
          ["Platform", "Automated microscopy & imaging"],
          ["Software", "Preprocessing / autofocus / MIC search"]
        ]
      },
      {
        tab: "Publication",
        value: "Small",
        label: "22(11) · 2026 · e06075",
        rows: [
          ["Topic", "Standardized hydrogel-chip cartridge"],
          ["Mechanism", "Contact-line pinning & non-contact interconnect"],
          ["Patent", "U.S. patent application (co-inventor)"]
        ]
      }
    ]
  },
  power: {
    label: "Power Sensing",
    code: "POWER MONITORING",
    title: "From Optical Sampling to Power Loop",
    project: "p06",
    defaultNode: 0,
    relation: "The output coupler connects the delivery fiber while sampling light for the thermopile detector. Redesigning sampling geometry and thermal isolation eliminated ADC fluctuations.",
    nodes: [
      {
        label: "Coupler Sampling",
        short: "Optical tap",
        icon: "coupler",
        tone: "blue",
        function: "Extract a consistent optical sample from the laser output path for power sensing.",
        work: "Redesigned the coupler sampling geometry and detector placement, completing prototype fabrication and controlled comparison tests."
      },
      {
        label: "Thermopile Detector",
        short: "Sensing & mount",
        icon: "detector",
        tone: "lilac",
        function: "Convert sampled optical energy into a thermal response signal for power measurement.",
        work: "Evaluated detector response characteristics, engineered thermally isolated mounting, and analyzed system-level thermal impact on readings."
      },
      {
        label: "Digital Signal / ADC",
        short: "Acquisition",
        icon: "adc",
        tone: "blue",
        function: "Digitize and transmit detector readings as inputs to the power model.",
        work: "Migrated long analog runs to proximate digital transmission with ferrite EMI suppression, isolating acquisition faults via A/B hardware swaps."
      },
      {
        label: "Power Model",
        short: "Calibration",
        icon: "model",
        tone: "sand",
        function: "Map detector readings to output power across operating regimes.",
        work: "Developed empirical power models and calibrated across 25 operating points spanning power and pulse-frequency ranges against a reference power meter."
      },
      {
        label: "Control Feedback",
        short: "Closed-loop",
        icon: "feedback",
        tone: "green",
        function: "Feed measured output power back to regulate laser drive control.",
        work: "Verified the redesigned coupler and thermal isolation to eliminate ADC fluctuations and close the thulium laser power loop."
      }
    ],
    evidence: [
      {
        tab: "Steady-State",
        value: "0.63%",
        label: "5 Hz / 4 J median steady-state fluctuation",
        range: true,
        rows: [
          ["Window", "240 s steady-state window"],
          ["Range", "0.40%–1.03%"],
          ["Deliverables", "Coupler prototype / calibration & test protocols"]
        ]
      },
      {
        tab: "Calibration",
        value: "25 pts",
        label: "Power-model calibration points",
        rows: [
          ["Power Range", "17.37–59.50 W"],
          ["Freq Range", "5 Hz–2.5 kHz"],
          ["Sensitivity Shift", "+9.5% fitted sensitivity change"]
        ]
      }
    ]
  },
  thulium: {
    label: "Thulium Laser",
    code: "LD-PUMPED TDFL",
    title: "Current Drive, Tm-Doped Gain & Fiber Output",
    project: "p04",
    defaultNode: 3,
    relation: "The output coupler feeds the delivery fiber and taps an optical sample to the thermopile; acquisition and power modeling close the output power loop.",
    nodes: [
      {
        label: "Current Driver",
        short: "Pump drive",
        icon: "drive",
        tone: "blue",
        function: "Supply controlled drive current to the pump laser diode per waveform targets.",
        work: "Defined driver control requirements, key component direction, and waveform targets; collaborated with electronics engineers on development and debugging."
      },
      {
        label: "Pump LD",
        short: "Pump energy",
        icon: "diode",
        tone: "lilac",
        function: "Convert electrical power into optical pump energy for the thulium-doped fiber.",
        work: "Collaborated with optical engineers on pump alignment and verified pump-to-output behavior across drive currents with electronics engineers."
      },
      {
        label: "Tm-Doped Fiber",
        short: "Optical gain",
        icon: "fiber",
        tone: "sand",
        function: "Provide optical gain and form laser oscillation with optical feedback.",
        work: "Worked with optical engineers on fiber mounting, fixation, routing, and assembly refinement; isolated splice, heating, leakage, and bend faults."
      },
      {
        label: "Output Coupler",
        short: "Output & tap",
        icon: "coupler",
        tone: "blue",
        function: "Couple laser output into the delivery fiber while tapping a sample for the thermopile.",
        work: "Jointly debugged coupler alignment and output faults; later redesigned coupler sampling and detector mounting to resolve power reading fluctuations."
      },
      {
        label: "Delivery Fiber",
        short: "Beam output",
        icon: "output",
        tone: "green",
        function: "Transmit coupled laser energy to the clinical output port.",
        work: "Worked with optical engineers on delivery-fiber alignment and power testing, integrating optical output, current waveforms, and thermal state."
      }
    ],
    evidence: [
      {
        tab: "Driver Debug",
        value: "~0.50 → 0.19",
        unit: "A",
        label: "Current overshoot / ringing (~500 → 190 mV on 1 V/A probe)",
        rows: [
          ["Collaboration", "Joint debugging with electronics engineers"],
          ["Scope", "Control requirements / waveform targets / integration"],
          ["Deliverables", "Technical design docs / test protocols"]
        ]
      },
      {
        tab: "Optics Build",
        value: "Alignment",
        label: "Joint execution with optical engineers",
        rows: [
          ["Assembly", "Mounting / fixation / fiber routing"],
          ["Fault Isolation", "Splice / thermal / leakage / bend / coupling"],
          ["Refinement", "Assembly process & output verification"]
        ]
      }
    ]
  },
  coupling: {
    label: "Fiber Coupling",
    code: "DIODE LASER COUPLING",
    title: "Beam Shaping & Fiber Output Verification",
    project: "p05",
    defaultNode: 2,
    relation: "Matched laser diode, shaping lenses, and fiber input parameters while verifying output under real power, thermal, and mechanical mounting conditions.",
    nodes: [
      {
        label: "Diode Laser",
        short: "Source & eval",
        icon: "diode",
        tone: "blue",
        function: "Emit the semiconductor laser beam to be shaped and coupled into fiber.",
        work: "Evaluated architectures and components, built test benches, and compared beam quality across devices and operating points."
      },
      {
        label: "Beam Shaping",
        short: "Lens alignment",
        icon: "lens",
        tone: "lilac",
        function: "Collimate and focus the beam to match the fiber numerical aperture and core.",
        work: "Adjusted lens positions and focal planes to converge incident spot size and geometry."
      },
      {
        label: "Fiber Coupling",
        short: "Core alignment",
        icon: "coupler",
        tone: "sand",
        function: "Align the focused beam onto the fiber endface for high coupling efficiency.",
        work: "Performed precision endface alignment and iterative coupling optimization against output power measurements."
      },
      {
        label: "System Mount",
        short: "Mech & thermal",
        icon: "mount",
        tone: "blue",
        function: "Integrate the optical assembly with power delivery, cooling, and chassis mounting.",
        work: "Coordinated power, thermal, and mechanical integration; drove bracket rework and reassembly to resolve hole-alignment tolerances."
      },
      {
        label: "Output Test",
        short: "Efficiency check",
        icon: "output",
        tone: "green",
        function: "Verify net laser-to-fiber coupling efficiency on the assembled unit.",
        work: "Completed reassembly and full-unit power verification, achieving 91% / 92% coupling efficiency (target >88%)."
      }
    ],
    evidence: [
      {
        tab: "Efficiency",
        value: "91% / 92%",
        label: "Laser-to-fiber coupling efficiency",
        rows: [
          ["Target", ">88%"],
          ["Tuning", "Lens / spot geometry / fiber alignment"],
          ["Verification", "Bracket rework, reassembly & output test"]
        ]
      }
    ]
  },
  emg: {
    label: "EMG Chain",
    code: "EMG ACQUISITION & RMS",
    title: "From Surface Electrodes to Sliding-Window RMS Envelope",
    project: "p09",
    defaultNode: 4,
    relation: "The ADC receives full-wave rectified unipolar signals. Sliding-window RMS operates on raw ADC samples, while display offset is handled separately in the UI layer.",
    nodes: [
      {
        label: "Surface Electrodes",
        short: "Bio-potential",
        icon: "electrode",
        tone: "neutral",
        function: "Capture surface electromyography (EMG) signals for pelvic-floor activity monitoring.",
        work: "Mapped the end-to-end path from electrodes and analog front end to firmware processing with hardware engineers."
      },
      {
        label: "Bandpass & Notch",
        short: "Analog front end",
        icon: "filter",
        tone: "blue",
        function: "Condition the signal bandwidth and reject 50/60 Hz mains interference.",
        work: "Participated in acquisition-chain troubleshooting and worked with hardware engineers to refine filtering and signal conditioning."
      },
      {
        label: "Full-Wave Rectifier",
        short: "Unipolar signal",
        icon: "rectifier",
        tone: "lilac",
        function: "Convert the bipolar bio-potential waveform into a unipolar signal suitable for ADC sampling.",
        work: "Verified rectification and sampling interfaces to confirm the actual unipolar waveform entering the MCU."
      },
      {
        label: "MCU ADC",
        short: "Timing & sync",
        icon: "adc",
        tone: "blue",
        function: "Digitize the rectified EMG waveform to supply raw samples for envelope calculation.",
        work: "Fixed MCU ADC clock configuration and ISR/main-loop shared-state concurrency defects, completing hardware-software integration debugging."
      },
      {
        label: "Sliding RMS",
        short: "Activity envelope",
        icon: "envelope",
        tone: "green",
        function: "Compute a smooth EMG activity envelope over a configurable time window.",
        work: "Independently implemented 50 / 100 / 200 ms sliding-window RMS in C++, decoupled display offset from RMS calculation, and completed builds and on-device testing."
      }
    ],
    evidence: [
      {
        tab: "Algorithm Delivery",
        value: "50 / 100 / 200",
        unit: "ms",
        label: "Configurable sliding-window RMS",
        rows: [
          ["Computation Input", "Raw ADC samples (offset-decoupled)"],
          ["Firmware Fixes", "ADC clock / ISR shared-state access"],
          ["Verification", "Host regression / ARM GCC build / on-device test"]
        ]
      }
    ]
  }
};

/* Shared 9-node coupler topology for Thulium Laser & Power Monitoring, plus graph layouts for all 5 systems. */
(() => {
  const data = window.ENGINEERING_DATA;
  const laser = data.thulium.nodes.map(node => ({ ...node }));
  const sensing = data.power.nodes.slice(1).map(node => ({ ...node }));
  laser[0].label = "Current Driver Board";
  laser[3].short = "Output · Optical tap";
  sensing[0].label = "Thermopile Detector";
  sensing[3].label = "Control Feedback";
  sensing[3].short = "Power loop";
  const nodes = [...laser, ...sensing];
  const positions = [[20,85],[218,85],[416,85],[614,85],[812,85],[614,285],[416,285],[218,285],[20,285]];
  const edges = [
    { from:0, to:1, type:"signal", d:"M188 130H218", label:"Drive current", x:203, y:73 },
    { from:1, to:2, type:"optical", d:"M386 130H416", label:"Pump light", x:401, y:73 },
    { from:2, to:3, type:"optical", d:"M584 130H614", label:"Laser beam", x:599, y:73 },
    { from:3, to:4, type:"optical", d:"M782 130H812", label:"Delivery", x:797, y:73 },
    { from:3, to:5, type:"optical", d:"M698 175V285", label:"Optical tap", x:759, y:234 },
    { from:5, to:6, type:"signal", d:"M614 330H584" },
    { from:6, to:7, type:"signal", d:"M416 330H386" },
    { from:7, to:8, type:"signal", d:"M218 330H188" },
    { from:8, to:0, type:"signal", d:"M104 285V175", label:"Feedback", x:164, y:234 }
  ];
  for (const key of ["power", "thulium"]) {
    data[key].nodes = nodes.map(node => ({ ...node }));
    data[key].defaultNode = 3;
    data[key].graph = {
      width: 1000, height: 420, nodeWidth: 168, nodeHeight: 90, positions, edges,
      labels: [
        { x: 20, y: 30, text: "LASER GENERATION & OUTPUT", type: "heading" },
        { x: 218, y: 250, text: "POWER SENSING & FEEDBACK", type: "heading" }
      ],
      captions: [
        { text: "Optical path / sampling", type: "optical" },
        { text: "Acquisition / feedback", type: "signal" }
      ],
      mobileInputs: [
        "",
        "From 01 Current Driver Board",
        "From 02 Pump LD",
        "From 03 Tm-Doped Fiber",
        "From 04 Output Coupler",
        "Sampling branch · From 04 Output Coupler",
        "From 06 Thermopile Detector",
        "From 07 Digital Signal / ADC",
        "From 08 Power Model"
      ],
      feedback: "09 Control Feedback → 01 Current Driver Board",
      context: "One coupler bridges laser delivery and optical power sampling"
    };
    data[key].relation = "Redesigned the coupler optical tap, detector placement, and thermal isolation to eliminate ADC fluctuations at the hardware root cause and close the power loop.";
  }
  data.power.title = "Coupler Redesign & Closed-Loop Power Control";
  data.power.nodes[3].work = "Redesigned the thulium laser output coupler, adjusted sampling and detector geometry, and engineered thermal isolation; verified prototypes via A/B testing to eliminate ADC reading fluctuations.";
  data.thulium.title = "Thulium Laser & Power Monitoring System";

  data.culture.graph = {
    width: 1000, height: 340, nodeWidth: 168, nodeHeight: 90,
    positions: [[20,100],[218,100],[416,100],[614,100],[812,100]],
    edges: [
      { from: 0, to: 1, type: "process", d: "M188 145H218" },
      { from: 1, to: 2, type: "process", d: "M386 145H416" },
      { from: 2, to: 3, type: "process", d: "M584 145H614" },
      { from: 3, to: 4, type: "signal", d: "M782 145H812" }
    ],
    labels: [
      { x: 20, y: 52, text: "INCUBATION & CHIP CARRIER", type: "heading" },
      { x: 614, y: 52, text: "MICROSCOPY & ANALYSIS", type: "heading" },
      { x: 797, y: 229, text: "Preprocessing · Autofocus", type: "note" }
    ],
    captions: [
      { text: "Experimental workflow", type: "process" },
      { text: "Imaging & software", type: "signal" }
    ],
    context: "Standardized cartridge bridges incubation hardware and microscopy"
  };

  data.coupling.graph = {
    width: 1000, height: 340, nodeWidth: 168, nodeHeight: 90,
    positions: [[55,78],[285,78],[515,78],[285,225],[745,78]],
    edges: [
      { from: 0, to: 1, type: "optical", d: "M223 123H285" },
      { from: 1, to: 2, type: "optical", d: "M453 123H515" },
      { from: 2, to: 4, type: "optical", d: "M683 123H745" },
      { from: 3, to: 1, type: "support", d: "M369 225V168" },
      { from: 3, to: 2, type: "support", d: "M453 270H599V168" }
    ],
    labels: [
      { x: 55, y: 36, text: "OPTICAL COUPLING & VERIFICATION", type: "heading" },
      { x: 708, y: 257, text: "Power · Cooling · Mounting", type: "note" }
    ],
    captions: [
      { text: "Optical path", type: "optical" },
      { text: "Mechanical & thermal fit", type: "support" }
    ],
    mobileInputs: [
      "",
      "From 01 Diode Laser",
      "From 02 Beam Shaping",
      "System fit · Supports optics & fiber coupling",
      "From 03 Fiber Coupling"
    ],
    context: "Optical alignment and chassis integration jointly determine efficiency"
  };

  data.emg.graph = {
    width: 1000, height: 340, nodeWidth: 168, nodeHeight: 90,
    positions: [[20,100],[218,100],[416,100],[614,100],[812,100]],
    edges: [
      { from: 0, to: 1, type: "signal", d: "M188 145H218" },
      { from: 1, to: 2, type: "signal", d: "M386 145H416" },
      { from: 2, to: 3, type: "signal", d: "M584 145H614" },
      { from: 3, to: 4, type: "signal", d: "M782 145H812" }
    ],
    labels: [
      { x: 20, y: 52, text: "ANALOG CONDITIONING & RECTIFICATION", type: "heading" },
      { x: 614, y: 52, text: "DIGITAL SAMPLING & ENVELOPE", type: "heading" },
      { x: 599, y: 229, text: "Rectified unipolar signal", type: "note" }
    ],
    captions: [{ text: "Signal conditioning & processing", type: "signal" }],
    context: "Raw ADC samples feed RMS; display offset is isolated in UI rendering"
  };
})();
