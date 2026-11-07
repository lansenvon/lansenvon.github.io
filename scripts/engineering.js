(() => {
  'use strict';
  const systems = window.ENGINEERING_DATA;
  const root = document.body.dataset.root || '';
  const directionSystem = { systems: 'power', optics: 'thulium', biomedical: 'culture' };
  let activeDirection = new URLSearchParams(location.search).get('focus');
  if (!window.SITE_DATA.directions[activeDirection]) {
    try { activeDirection = localStorage.getItem('portfolio-direction'); } catch {}
  }
  if (!window.SITE_DATA.directions[activeDirection]) activeDirection = 'systems';
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function renderGraph(data, prefix) {
    const graph = data.graph;
    const edgeTypes = ['optical','signal','process','support'];
    const markers = edgeTypes.map(type => `<marker id="${prefix}-${type}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 9 5 1 9" class="arrow-${type}" fill="none" stroke-width="1.5"/></marker>`).join('');
    const edges = graph.edges.map(edge => `<g class="network-edge edge-${edge.type}" data-from="${edge.from}" data-to="${edge.to}"><path d="${edge.d}" marker-end="url(#${prefix}-${edge.type})"/>${edge.label ? `<text x="${edge.x}" y="${edge.y}" text-anchor="middle">${escape(edge.label)}</text>` : ''}</g>`).join('');
    const labels = graph.labels.map(label => `<text x="${label.x}" y="${label.y}" class="network-${label.type}">${escape(label.text)}</text>`).join('');
    return `<svg class="network-lines" viewBox="0 0 ${graph.width} ${graph.height}" preserveAspectRatio="none" aria-hidden="true"><defs>${markers}</defs>${edges}${labels}</svg>${data.nodes.map((node,i)=>{
      const [x,y] = graph.positions[i];
      const input = graph.mobileInputs?.[i];
      return `<button type="button" class="system-node" style="--nx:${x/graph.width*100}%;--ny:${y/graph.height*100}%;--nw:${graph.nodeWidth/graph.width*100}%;--nh:${graph.nodeHeight/graph.height*100}%" data-node="${i}" aria-pressed="false" aria-label="${escape(node.label)}，查看功能与我的工作">${input ? `<span class="node-mobile-input">${escape(input)}</span>` : ''}<span class="node-number">${String(i+1).padStart(2,'0')}</span><strong>${escape(node.label)}</strong><span class="node-short">${escape(node.short)}</span></button>`;
    }).join('')}`;
  }

  // Native buttons remain the pointer, touch and keyboard targets at all sizes.
  function tabKeys(event, buttons, index, select) {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + buttons.length) % buttons.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = buttons.length - 1;
    else return;
    event.preventDefault();
    select(next);
    buttons[next].focus();
  }

  document.querySelectorAll('[data-engineering]').forEach((host, instance) => {
    const keys = host.dataset.engineering === 'all' ? Object.keys(systems) : host.dataset.engineering.split(' ');
    const sync = host.hasAttribute('data-sync-direction');
    let key = keys.includes(directionSystem[activeDirection]) ? directionSystem[activeDirection] : keys[0];
    const states = Object.fromEntries(keys.map(k => [k, { node: systems[k].defaultNode, evidence: 0 }]));
    const prefix = `engineering-${instance}`;
    const mount = host.querySelector('.engineering-mount');
    if (!mount) return;
    mount.innerHTML = `<div class="engineering-board">${keys.length > 1 ? `<div class="system-tabs" role="tablist" aria-label="选择项目系统">${keys.map((k,i) => `<button type="button" role="tab" id="${prefix}-tab-${k}" aria-controls="${prefix}-panel" data-system="${k}"><span>${String(i+1).padStart(2,'0')}</span>${escape(systems[k].label)}</button>`).join('')}</div>` : ''}<div class="system-panel" id="${prefix}-panel" ${keys.length > 1 ? 'role="tabpanel"' : ''}><div class="system-heading"><div><p class="system-code"></p><h3></h3><p class="system-context"></p></div><p class="system-hint">点选节点，查看承担工作 <span aria-hidden="true">↙</span></p></div><div class="system-layout"><div class="system-explorer"><div class="system-canvas"><div class="system-nodes" role="group" aria-label="系统功能节点"></div><p class="network-feedback"></p><div class="network-legend"></div><p class="system-relation"></p></div><div class="node-detail" aria-live="polite" aria-atomic="true"></div></div><aside class="system-evidence" aria-label="项目结果"><div class="evidence-tabs" role="tablist" aria-label="结果与交付"></div><div class="evidence-panel" id="${prefix}-evidence" role="tabpanel" tabindex="0"></div><div class="system-case-links"><a class="system-case-link" data-engineering-link></a><a class="system-case-link" data-engineering-related></a></div></aside></div></div></div>`;
    const panel = mount.querySelector('.system-panel');
    const tabs = [...mount.querySelectorAll('[data-system]')];
    const nodes = mount.querySelector('.system-nodes');
    const evidenceTabs = mount.querySelector('.evidence-tabs');
    const evidencePanel = mount.querySelector('.evidence-panel');
    const link = mount.querySelector('[data-engineering-link]');
    const related = mount.querySelector('[data-engineering-related]');
    const detail = mount.querySelector('.node-detail');
    const mobile = window.matchMedia('(max-width: 700px)');
    function placeDetail() {
      const selected = nodes.querySelector('[aria-pressed="true"]');
      if (mobile.matches && selected) selected.after(detail);
      else mount.querySelector('.system-explorer').append(detail);
    }
    mobile.addEventListener('change', placeDetail);

    function setLink() {
      const project = window.SITE_DATA.projects[systems[key].project];
      const url = new URL(`${root}projects/${project.path}`, location.href);
      url.searchParams.set('focus', activeDirection);
      link.href = `${url.pathname}${url.search}${url.hash}`;
      const local = url.pathname === location.pathname;
      link.hidden = local;
      link.textContent = '查看完整项目 ↗';
      related.hidden = !['power','thulium'].includes(key);
      if (!related.hidden) {
        const other = key === 'thulium' ? 'p06' : 'p04';
        const relatedUrl = new URL(`${root}projects/${window.SITE_DATA.projects[other].path}`, location.href);
        relatedUrl.searchParams.set('focus', activeDirection);
        related.href = `${relatedUrl.pathname}${relatedUrl.search}${relatedUrl.hash}`;
        related.textContent = key === 'thulium' ? '查看耦合器改进与功率闭环 ↗' : '查看铥激光器研发与集成 ↗';
      }
    }

    function selectNode(index) {
      states[key].node = index;
      const node = systems[key].nodes[index];
      nodes.querySelectorAll('button').forEach((b,i) => {
        b.setAttribute('aria-pressed', String(i === index));
      });
      nodes.querySelectorAll('.network-edge').forEach(edge=>{
        edge.classList.toggle('edge-active', Number(edge.dataset.from) === index || Number(edge.dataset.to) === index);
      });
      detail.innerHTML = `<div class="node-detail-title"><span>${String(index+1).padStart(2,'0')}</span><h4>${escape(node.label)}</h4></div><div class="node-detail-row"><strong>功能</strong><p>${escape(node.function)}</p></div><div class="node-detail-row"><strong>我的工作</strong><p>${escape(node.work)}</p></div>`;
      placeDetail();
    }

    function selectEvidence(index) {
      states[key].evidence = index;
      const entry = systems[key].evidence[index];
      evidenceTabs.querySelectorAll('button').forEach((button,i) => {
        button.setAttribute('aria-selected', String(i === index));
        button.tabIndex = i === index ? 0 : -1;
      });
      evidencePanel.setAttribute('aria-labelledby', `${prefix}-evidence-${key}-${index}`);
      evidencePanel.innerHTML = `<p class="evidence-value">${escape(entry.value)}${entry.unit ? `<small>${escape(entry.unit)}</small>` : ''}</p><p class="evidence-label">${escape(entry.label)}</p>${entry.range ? '<div class="evidence-range" role="img" aria-label="功率波动区间 0.40% 至 1.03%，中位数 0.63%"><i></i><span>0.40%</span><b>0.63%</b><span>1.03%</span></div>' : ''}<dl class="evidence-ledger">${entry.rows.map(([a,b])=>`<div><dt>${escape(a)}</dt><dd>${escape(b)}</dd></div>`).join('')}</dl>`;
    }

    function selectSystem(next) {
      key = next;
      host.dataset.activeSystem = key;
      const data = systems[key];
      tabs.forEach(tab => {
        const selected = tab.dataset.system === key;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      if (tabs.length) panel.setAttribute('aria-labelledby', `${prefix}-tab-${key}`);
      mount.querySelector('.system-code').textContent = data.code;
      mount.querySelector('.system-heading h3').textContent = data.title;
      mount.querySelector('.system-context').textContent = data.graph.context;
      mount.querySelector('.system-relation').textContent = data.relation;
      nodes.style.setProperty('--network-ratio', `${data.graph.width} / ${data.graph.height}`);
      nodes.innerHTML = renderGraph(data, `${prefix}-${key}`);
      mount.querySelector('.network-legend').innerHTML = data.graph.captions.map(item=>`<span class="legend-${item.type}">${escape(item.text)}</span>`).join('');
      const feedback = mount.querySelector('.network-feedback');
      feedback.textContent = data.graph.feedback || '';
      feedback.hidden = !data.graph.feedback;
      const nodeButtons = [...nodes.querySelectorAll('button')];
      nodeButtons.forEach((button,i)=>{
        button.addEventListener('click',()=>selectNode(i));
        button.addEventListener('keydown',event=>tabKeys(event,nodeButtons,i,selectNode));
      });
      evidenceTabs.innerHTML = data.evidence.map((entry,i)=>`<button type="button" role="tab" id="${prefix}-evidence-${key}-${i}" aria-controls="${prefix}-evidence">${escape(entry.tab)}</button>`).join('');
      const resultButtons = [...evidenceTabs.querySelectorAll('button')];
      resultButtons.forEach((button,i)=>{
        button.addEventListener('click',()=>selectEvidence(i));
        button.addEventListener('keydown',event=>tabKeys(event,resultButtons,i,selectEvidence));
      });
      selectNode(states[key].node);
      selectEvidence(states[key].evidence);
      setLink();
    }
    tabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>selectSystem(tab.dataset.system));
      tab.addEventListener('keydown',event=>tabKeys(event,tabs,i,index=>selectSystem(keys[index])));
    });
    document.addEventListener('portfolio:direction', event => {
      activeDirection = event.detail.key;
      if (sync && keys.includes(directionSystem[activeDirection])) selectSystem(directionSystem[activeDirection]);
      else setLink();
    });
    selectSystem(key);
  });

  // A small, stable navigation bar follows the reader without hiding anchors.
  const menu = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('#primary-navigation');
  const header = document.querySelector('.site-header');
  function closeMenu() { if (menu) menu.setAttribute('aria-expanded','false'); }
  if (menu && nav) {
    menu.hidden = false;
    header.classList.add('nav-enhanced');
    menu.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(menu.getAttribute('aria-expanded') !== 'true')));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
    document.addEventListener('click',event=>{if(!header.contains(event.target)) closeMenu();});
  }
  const sections = [...document.querySelectorAll('main > section[id]')];
  if (nav && sections.length && 'IntersectionObserver' in window) {
    const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
    function updateNavigation() {
      let current = '';
      for (const section of sections) if (section.getBoundingClientRect().top <= 180) current = section.id;
      navLinks.forEach(a=>{
        if (a.hash === `#${current}`) a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      });
    }
    let scheduled = false;
    document.addEventListener('scroll',()=>{
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(()=>{updateNavigation();scheduled=false;});
    },{passive:true});
    updateNavigation();
  }
})();
