window.SITE_DATA = {
  resumeVersion: "20261107-qr",
  defaultDirection: "systems",
  directions: {
    systems: {
      label: "医疗器械系统研发",
      resumeLabel: "下载系统研发简历",
      resume: "assets/resumes/冯朗成_医疗器械系统工程师_简历.pdf",
      summary: "系统集成、激光测量与工程验证",
      heroLead: "衔接光、机、电、软与测试接口，推进样机集成、问题定位与工程验证。",
      hero: {
        src: "assets/images/concept/systems-integration-concept.webp",
        alt: "医疗器械系统集成的工程概念图，呈现光机电接口、测量建模和样机验证场景。",
        title: "系统集成与整机验证",
        caption: "工程概念图 · 接口、测量与验证",
        stages: ["跨模块接口", "测量与建模", "整机联调验证"]
      },
      orderLabel: "系统研发方向 · 5 项工程案例",
      order: ["p01", "p06", "p04", "p05", "p09"]
    },
    optics: {
      label: "医疗激光光机电",
      resumeLabel: "下载光机电方向简历",
      resume: "assets/resumes/冯朗成_医疗激光光机电系统工程师_简历.pdf",
      summary: "医疗激光测量、光路装调与系统集成",
      heroLead: "与光学、电子工程师共同开展医疗激光器研发，完成光路装调、工艺优化、驱动控制开发与整机集成。",
      hero: {
        src: "assets/images/concept/thulium-laser-integration-concept.webp",
        alt: "LD 泵浦掺铥光纤激光器的工程概念图。",
        title: "激光器研发与光机电集成",
        caption: "工程概念图 · 医疗激光光机电集成",
        stages: ["恒流驱动板", "LD 泵浦源", "掺铥光纤", "耦合器", "输出光纤"]
      },
      orderLabel: "医疗激光光机电 · 5 项工程案例",
      order: ["p04", "p05", "p06", "p01", "p09"]
    },
    biomedical: {
      label: "生物医学与实验设备",
      resumeLabel: "下载生物医学与实验设备简历",
      resume: "assets/resumes/冯朗成_生物医学信号与实验设备工程师_简历.pdf",
      summary: "实验设备、图像分析与自动化",
      heroLead: "承担外围培养设备、标准化卡托与显微成像联动研发，独立实现图像预处理、自动对焦与 MIC 边界搜索程序。",
      hero: {
        src: "assets/images/concept/biomedical-culture-microscopy-concept.webp",
        alt: "温控培养设备、标准化卡托、程控显微平台与图像分析流程的工程概念图。",
        title: "实验设备与程控显微",
        caption: "工程概念图 · 培养、卡托转移与图像搜索",
        stages: ["温控培养", "人工转移卡托", "程控显微", "图像与搜索"]
      },
      orderLabel: "生物医学与实验设备 · 5 项工程案例",
      order: ["p01", "p06", "p04", "p05", "p09"]
    }
  },
  projects: {
    p06: { title: "医疗激光功率监测与闭环", path: "laser-power-measurement/" },
    p04: { title: "铥激光器研发与光机电集成", path: "laser-optics-fiber/#thulium-laser" },
    p05: { title: "半导体激光器光纤耦合", path: "laser-optics-fiber/#diode-laser" },
    p09: { title: "尿动力仪 EMG 采集链与滑动 RMS 算法", path: "emg-signal-processing/" },
    p01: { title: "微流控设备集成与程控显微", path: "microfluidics-equipment/" }
  }
};
