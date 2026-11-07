/* Functional relationships and work statements, checked against the case pages
   and docs/tdfl-principle-review-2026-11-05.md. Artwork is schematic. */
window.ENGINEERING_DATA = {
  culture: {
    label: "实验设备", code: "CULTURE & IMAGING", title: "培养设备、卡托与程控显微", project: "p01", defaultNode: 3,
    relation: "培养后的芯片卡托由人工转移至程控显微平台，再进行图像采集与分析。",
    nodes: [
      { label: "培养与流体", short: "培养设备", icon: "culture", tone: "blue", function: "提供芯片培养所需的设备与流体条件。", work: "承担外围培养设备研发与多轮迭代，结合实验流程完成设备集成。" },
      { label: "标准化卡托", short: "芯片固定", icon: "cartridge", tone: "lilac", function: "承载芯片，衔接培养设备与后续显微观察。", work: "开展标准化卡托研发，使芯片承载、安装与显微观察接口相互适配。" },
      { label: "人工转移", short: "流程衔接", icon: "transfer", tone: "neutral", function: "将培养后的卡托移至显微平台。", work: "围绕实际实验操作衔接卡托与设备接口，组织培养和显微成像流程。" },
      { label: "程控显微", short: "采集与对焦", icon: "microscope", tone: "blue", function: "完成显微图像采集与焦面搜索。", work: "集成程控显微平台，独立实现图像预处理与自动对焦程序。" },
      { label: "MIC 边界搜索", short: "图像分析", icon: "search", tone: "green", function: "结合图像处理和搜索程序定位 MIC 边界。", work: "独立实现 MIC 边界搜索程序，联动显微采集与图像分析。" }
    ],
    evidence: [
      { tab: "研发交付", value: "设备 × 程序", label: "实验设备与显微成像联动", rows: [["设备", "外围培养设备 / 标准化卡托"], ["平台", "程控显微与图像采集"], ["独立程序", "预处理 / 自动对焦 / MIC 搜索"]] },
      { tab: "研究成果", value: "Small", label: "22(11) · 2026 · e06075", rows: [["论文主题", "水凝胶芯片标准化卡匣"], ["互连方法", "接触线钉扎与非接触互连"], ["专利", "微流控芯片与非接触互连 · 美国专利申请"]] }
    ]
  },
  power: {
    label: "功率监测", code: "POWER MONITORING", title: "从光学取样到功率闭环", project: "p06", defaultNode: 0,
    relation: "耦合器同时衔接激光输出与功率取样。改进取样及隔热安装后，解决 ADC 读数波动。",
    nodes: [
      { label: "耦合器取样", short: "光学接口", icon: "coupler", tone: "blue", function: "从激光输出链获取探测器所需的光学取样。", work: "重新设计耦合器，调整取样与探测器位置，完成样件打样和对照验证。" },
      { label: "热电堆", short: "探测与安装", icon: "detector", tone: "lilac", function: "将取样光转换为用于功率测量的响应信号。", work: "比较探测器响应特性，设计隔热安装，分析整机热环境对读数的影响。" },
      { label: "数字信号 / ADC", short: "信号采集", icon: "adc", tone: "blue", function: "完成信号采集与传输，为功率建模提供输入。", work: "针对线缆干扰改进信号传输，通过软硬件替换和工况对照定位采集问题。" },
      { label: "功率模型", short: "标定与补偿", icon: "model", tone: "sand", function: "结合探测器响应和标定工况建立功率对应关系。", work: "开展应用分析与补偿建模，以 25 个标定点覆盖功率和重复频率工况。" },
      { label: "功率闭环", short: "控制与验证", icon: "feedback", tone: "green", function: "将功率测量结果用于输出控制。", work: "完成新版耦合器与隔热安装验证，解决 ADC 读数波动，实现铥激光功率闭环。" }
    ],
    evidence: [
      { tab: "稳态波动", value: "0.63%", label: "5 Hz / 4 J 稳态功率波动中位数", range: true, rows: [["统计窗口", "240 s"], ["波动区间", "0.40%–1.03%"], ["交付", "耦合器样件 / 校准方案 / 检验规程"]] },
      { tab: "标定覆盖", value: "25 个", label: "功率模型标定点", rows: [["功率范围", "17.37–59.50 W"], ["频率范围", "5 Hz–2.5 kHz"], ["拟合灵敏度变化", "+9.5%"]] }
    ]
  },
  thulium: {
    label: "铥激光器", code: "LD-PUMPED TDFL", title: "恒流驱动、掺铥增益与光纤输出", project: "p04", defaultNode: 3,
    relation: "耦合器连接输出光纤，并向热电堆提供光学取样；采集与功率模型支撑输出功率闭环。",
    nodes: [
      { label: "恒流驱动板", short: "驱动电流", icon: "drive", tone: "blue", function: "按控制要求向 LD 提供驱动电流。", work: "负责系统需求、关键器件选型方向与电流波形目标，与电子工程师共同完成驱动控制开发和调试。" },
      { label: "LD 泵浦源", short: "泵浦能量", icon: "diode", tone: "lilac", function: "将电能转换为泵浦光，为掺铥增益介质提供能量。", work: "与光学工程师共同完成光路实施与装调，结合驱动波形、光学输出和热状态开展整机联调。" },
      { label: "掺铥光纤", short: "增益与激光振荡", icon: "fiber", tone: "sand", function: "掺铥光纤提供增益，与光学反馈共同形成激光振荡。", work: "与光学工程师共同完成光纤安装、固定、布局走线和工艺优化，排查熔接、发热、漏光及弯曲状态。" },
      { label: "耦合器", short: "输出与取样", icon: "coupler", tone: "blue", function: "连接激光输出与输出光纤，同时提供热电堆所需的取样条件。", work: "共同完成耦合器调试和输出异常排查；在功率监测项目中重新设计耦合器与探测器布置，解决读数波动。" },
      { label: "输出光纤", short: "光能传输", icon: "output", tone: "green", function: "将耦合进入的激光传输至输出端。", work: "与光学工程师共同完成输出验证，结合光学输出、电流波形和热状态推进整机联调。" }
    ],
    evidence: [
      { tab: "驱动联调", value: "约 500 → 190", unit: "mV", label: "电流波形过冲 / 振荡幅度", rows: [["协作", "与电子工程师联合调试"], ["工作", "控制需求 / 波形目标 / 整机集成"], ["交付", "技术设计文档 / 测试方案"]] },
      { tab: "光路实施", value: "装调与集成", label: "与光学工程师共同完成", rows: [["光路", "安装 / 固定 / 布局与走线"], ["排查", "熔接 / 发热 / 漏光 / 弯曲 / 耦合"], ["优化", "装配工艺与输出验证"]] }
    ]
  },
  coupling: {
    label: "光纤耦合", code: "DIODE LASER COUPLING", title: "光斑调整与光纤输出验证", project: "p05", defaultNode: 2,
    relation: "围绕激光器、镜片与光纤的匹配开展调整，并结合供电、散热和安装条件验证整机输出。",
    nodes: [
      { label: "激光器", short: "方案与器件", icon: "diode", tone: "blue", function: "提供耦合进入光纤的激光输出。", work: "评估方案与器件，搭建测试环境，比较不同器件与工作条件对光斑的影响。" },
      { label: "光学调整", short: "镜片与光斑", icon: "lens", tone: "lilac", function: "调整光束，使其与光纤入射条件相匹配。", work: "完成镜片及光斑调整，根据耦合测试结果优化光学参数。" },
      { label: "光纤耦合", short: "对准与匹配", icon: "coupler", tone: "sand", function: "将光束耦合进入光纤。", work: "开展光纤耦合调试，按输出测试结果优化耦合状态。" },
      { label: "整机安装", short: "结构与散热", icon: "mount", tone: "blue", function: "衔接光学系统与供电、散热、机械安装条件。", work: "配合供电、散热与安装调试，针对孔位匹配推进结构件加工和重新装配。" },
      { label: "输出验证", short: "耦合效率", icon: "output", tone: "green", function: "通过激光器与光纤输出功率评估耦合效果。", work: "完成光纤输出和整机安装验证，耦合效率达到 91% / 92%。" }
    ],
    evidence: [
      { tab: "耦合效率", value: "91% / 92%", label: "激光器至光纤输出耦合效率", rows: [["目标", ">88%"], ["调试", "镜片 / 光斑 / 光纤匹配"], ["验证", "重新装配与整机输出"]] }
    ]
  },
  emg: {
    label: "EMG 采集", code: "EMG ACQUISITION & RMS", title: "从表面电极到滑动 RMS 活动包络", project: "p09", defaultNode: 4,
    relation: "ADC 接收全波整流后的单极性信号。滑动 RMS 使用原始 ADC 样本，显示偏置在显示环节处理。",
    nodes: [
      { label: "表面电极", short: "肌电采集", icon: "electrode", tone: "neutral", function: "获取用于活动监测的表面肌电信号。", work: "梳理电极、模拟前端与软件处理之间的关系，与硬件工程师核对采集链。" },
      { label: "带通 / 工频陷波", short: "模拟前端", icon: "filter", tone: "blue", function: "对采集信号进行频带处理与工频干扰抑制。", work: "参与采集链问题定位，与硬件工程师共同完成采集和滤波改进。" },
      { label: "全波整流", short: "单极性信号", icon: "rectifier", tone: "lilac", function: "将双极性信号整流为 ADC 接收的单极性信号。", work: "核对整流与采样接口，确认 MCU 的实际输入信号形态。" },
      { label: "ADC", short: "采样与同步", icon: "adc", tone: "blue", function: "提供 RMS 计算使用的原始采样值。", work: "修正 ADC 时钟及中断与主循环之间的共享状态访问，完成软硬件联调。" },
      { label: "滑动 RMS", short: "活动包络", icon: "envelope", tone: "green", function: "以可配置时间窗计算肌电活动包络。", work: "独立实现 50 / 100 / 200 ms 时间窗，分离显示偏置与 RMS 计算，完成构建和实际测试。" }
    ],
    evidence: [
      { tab: "算法交付", value: "50 / 100 / 200", unit: "ms", label: "滑动 RMS 时间窗", rows: [["计算输入", "原始 ADC 样本"], ["程序修正", "ADC 时钟 / 共享状态访问"], ["验证", "主机侧测试 / ARM GCC 构建 / 实际测试"]] }
    ]
  }
};

/* The output coupler is shared by the laser and measurement projects. Both
   views use this topology; each keeps its own work emphasis and evidence. */
(() => {
  const data = window.ENGINEERING_DATA;
  const laser = data.thulium.nodes.map(node => ({ ...node }));
  const sensing = data.power.nodes.slice(1).map(node => ({ ...node }));
  laser[0].label = '恒流电源驱动板';
  laser[3].short = '输出连接 · 光学取样';
  sensing[0].label = '热电堆能量探测器';
  sensing[3].label = '控制调节';
  sensing[3].short = '功率反馈';
  const nodes = [...laser, ...sensing];
  const positions = [[20,85],[218,85],[416,85],[614,85],[812,85],[614,285],[416,285],[218,285],[20,285]];
  const edges = [
    { from:0, to:1, type:'signal', d:'M188 130H218', label:'驱动电流', x:203, y:73 },
    { from:1, to:2, type:'optical', d:'M386 130H416', label:'泵浦光', x:401, y:73 },
    { from:2, to:3, type:'optical', d:'M584 130H614', label:'激光输出', x:599, y:73 },
    { from:3, to:4, type:'optical', d:'M782 130H812', label:'输出传输', x:797, y:73 },
    { from:3, to:5, type:'optical', d:'M698 175V285', label:'光学取样', x:759, y:234 },
    { from:5, to:6, type:'signal', d:'M614 330H584' },
    { from:6, to:7, type:'signal', d:'M416 330H386' },
    { from:7, to:8, type:'signal', d:'M218 330H188' },
    { from:8, to:0, type:'signal', d:'M104 285V175', label:'控制反馈', x:164, y:234 }
  ];
  for (const key of ['power','thulium']) {
    data[key].nodes = nodes.map(node => ({ ...node }));
    data[key].defaultNode = 3;
    data[key].graph = {
      width:1000, height:420, nodeWidth:168, nodeHeight:90, positions, edges,
      labels:[{x:20,y:30,text:'激光产生与输出',type:'heading'}, {x:218,y:250,text:'功率测量与反馈',type:'heading'}],
      captions:[{text:'光学传输 / 取样',type:'optical'},{text:'采集 / 控制反馈',type:'signal'}],
      mobileInputs:['','来自 01 恒流电源驱动板','来自 02 LD 泵浦源','来自 03 掺铥光纤','来自 04 耦合器','取样支路 · 来自 04 耦合器','来自 06 热电堆能量探测器','来自 07 数字信号 / ADC','来自 08 功率模型'],
      feedback:'09 控制调节 → 01 恒流电源驱动板',
      context:'耦合器同时衔接激光输出与测量取样'
    };
    data[key].relation = '重新设计耦合器，调整光学取样、探测器布置与隔热安装，从硬件源头解决 ADC 读数波动，支撑铥激光功率闭环。';
  }
  data.power.title = '耦合器改进与功率闭环';
  data.power.nodes[3].work = '重新设计铥激光耦合器，调整取样和探测器位置，设计隔热安装；完成打样、对照测试与数据分析，解决 ADC 读数波动。';
  data.thulium.title = '铥激光器与功率监测系统';

  data.culture.graph = {
    width:1000,height:340,nodeWidth:168,nodeHeight:90,
    positions:[[20,100],[218,100],[416,100],[614,100],[812,100]],
    edges:[
      {from:0,to:1,type:'process',d:'M188 145H218'},
      {from:1,to:2,type:'process',d:'M386 145H416'},
      {from:2,to:3,type:'process',d:'M584 145H614'},
      {from:3,to:4,type:'signal',d:'M782 145H812'}
    ],
    labels:[{x:20,y:52,text:'培养与芯片承载',type:'heading'},{x:614,y:52,text:'显微成像与图像分析',type:'heading'},{x:797,y:229,text:'图像预处理 · 自动对焦',type:'note'}],
    captions:[{text:'实验操作流程',type:'process'},{text:'图像与软件处理',type:'signal'}],
    context:'标准化卡托衔接培养设备与显微平台'
  };
  data.culture.nodes[1].short = '培养与观察共用载体';
  data.culture.nodes[2].short = '培养完成后转移';
  data.culture.nodes[3].short = '图像采集 · 自动对焦';
  data.coupling.graph = {
    width:1000,height:340,nodeWidth:168,nodeHeight:90,
    positions:[[55,78],[285,78],[515,78],[285,225],[745,78]],
    edges:[
      {from:0,to:1,type:'optical',d:'M223 123H285'},
      {from:1,to:2,type:'optical',d:'M453 123H515'},
      {from:2,to:4,type:'optical',d:'M683 123H745'},
      {from:3,to:1,type:'support',d:'M369 225V168'},
      {from:3,to:2,type:'support',d:'M453 270H599V168'}
    ],
    labels:[{x:55,y:36,text:'光学耦合与输出验证',type:'heading'},{x:708,y:257,text:'供电 · 散热 · 机械安装',type:'note'}],
    captions:[{text:'光学传输',type:'optical'},{text:'装配与适配',type:'support'}],
    mobileInputs:['','来自 01 激光器','来自 02 光学调整','工程适配 · 支撑光学调整与光纤耦合','来自 03 光纤耦合'],
    context:'光学调试与整机安装共同决定耦合效果'
  };
  data.coupling.nodes[4].label='光纤输出验证';
  data.emg.graph = {
    width:1000,height:340,nodeWidth:168,nodeHeight:90,
    positions:[[20,100],[218,100],[416,100],[614,100],[812,100]],
    edges:[
      {from:0,to:1,type:'signal',d:'M188 145H218'},
      {from:1,to:2,type:'signal',d:'M386 145H416'},
      {from:2,to:3,type:'signal',d:'M584 145H614'},
      {from:3,to:4,type:'signal',d:'M782 145H812'}
    ],
    labels:[{x:20,y:52,text:'模拟采集与整流',type:'heading'},{x:614,y:52,text:'数字采样与软件计算',type:'heading'},{x:599,y:229,text:'整流后单极性信号',type:'note'}],
    captions:[{text:'信号传递与计算',type:'signal'}],
    context:'原始 ADC 样本用于 RMS，显示偏置单独处理'
  };
})();

/* Retained for the archived static-figure build script. New workbenches use
   topology and text, while publication illustrations are generated separately. */
window.ENGINEERING_ICONS = {
  drive: '<rect x="9" y="15" width="62" height="47" rx="5"/><path d="M18 47h10V30h20v17h14M18 23h8m31 0h6"/><path d="M26 62v6m29-6v6"/>',
  diode: '<rect x="12" y="22" width="48" height="36" rx="7"/><path d="M27 30v20l18-10-18-10zm18 0v20M6 40h20m20 0h27m-9-8 9 8-9 8"/>',
  fiber: '<path d="M5 49h13c12 0 6-28 18-28s6 38 18 38 6-38-6-38-6 38-18 38-6-38 6-38 6 28 18 28h21"/>',
  coupler: '<rect x="20" y="19" width="40" height="40" rx="8"/><path d="M4 39h16m40 0h16M40 59v16M29 39h22"/><circle cx="40" cy="39" r="6"/>',
  output: '<path d="M5 31h30c18 0 12 23 30 23h10M5 39h28c14 0 12 23 30 23h12"/><rect x="5" y="26" width="14" height="18" rx="3"/><path d="m66 49 9 9-9 9"/>',
  detector: '<circle cx="40" cy="36" r="22"/><circle cx="40" cy="36" r="12"/><path d="M40 58v13M15 71h50M6 21l9 5m-7 8 7 1m-9 9 9-3"/>',
  adc: '<path d="M10 64V17M10 64h62M17 55h12V43h12V31h12V20h16"/><g fill="currentColor" stroke="none"><circle cx="17" cy="55" r="3"/><circle cx="29" cy="43" r="3"/><circle cx="41" cy="31" r="3"/><circle cx="53" cy="20" r="3"/></g>',
  model: '<path d="M12 14v51h58M18 57 65 22"/><g fill="currentColor" stroke="none"><circle cx="22" cy="52" r="3"/><circle cx="32" cy="48" r="3"/><circle cx="43" cy="36" r="3"/><circle cx="53" cy="33" r="3"/><circle cx="63" cy="21" r="3"/></g>',
  feedback: '<path d="M16 32a26 26 0 0 1 45-12l6 7m0-15v15H52M64 48a26 26 0 0 1-45 12l-6-7m0 15V53h15M28 40l8 8 17-18"/>',
  electrode: '<circle cx="43" cy="24" r="14"/><circle cx="43" cy="60" r="14"/><circle cx="43" cy="24" r="6"/><circle cx="43" cy="60" r="6"/><path d="M29 24H14L5 31m24 29H14L5 67"/>',
  filter: '<path d="M8 60h64M12 59c13 0 10-35 23-35h13c13 0 8 35 21 35M24 15v8m32-8v8M24 55v12m32-12v12"/>',
  rectifier: '<path d="M8 62h64M12 60q7-60 14 0 7-60 14 0 7-60 14 0 7-60 14 0"/>',
  envelope: '<path d="M8 62h64M10 59c15 0 15-36 30-36s15 36 30 36"/>',
  lens: '<path d="M8 23 40 33l32 4M8 57 40 47l32-4M5 40h70"/><ellipse cx="40" cy="40" rx="8" ry="28"/>',
  mount: '<path d="M15 26h50v32H15zM9 58h62v9H9zM27 26V13h26v13M26 37h28M26 47h28"/>',
  culture: '<rect x="13" y="12" width="54" height="57" rx="6"/><rect x="22" y="27" width="25" height="32" rx="3"/><path d="M55 33v20M30 20h20M18 69v5m44-5v5"/>',
  cartridge: '<rect x="10" y="20" width="60" height="42" rx="6"/><rect x="21" y="29" width="38" height="23" rx="3"/><path d="M26 34h28M26 41h28M26 48h28"/>',
  transfer: '<rect x="5" y="30" width="19" height="24" rx="3"/><rect x="56" y="30" width="19" height="24" rx="3"/><path d="M30 42h20m-7-7 7 7-7 7M19 63h42"/>',
  microscope: '<path d="m38 12 16 8-14 26-16-8zM49 33c22 4 20 32-4 32H15M17 56h29M34 65v7M18 72h43"/>',
  search: '<rect x="10" y="13" width="49" height="47" rx="3"/><path d="M21 23h14m-14 9h10m-10 9h8"/><circle cx="51" cy="47" r="14"/><path d="m62 58 12 12"/>'
};
