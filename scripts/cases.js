(() => {
  'use strict';
  document.querySelectorAll('[data-case-tabs]').forEach((group) => {
    const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
    function activate(index, focus = false) {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        if (panels[i]) panels[i].hidden = !selected;
      });
      if (focus) tabs[index].focus();
    }
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(i));
      tab.addEventListener('keydown', (event) => {
        let next = i;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (i + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(next, true);
      });
    });
    activate(0);
  });
  document.querySelectorAll('[data-interval-label]').forEach((point) => {
    point.addEventListener('click', () => {
      const status = document.querySelector('[data-interval-status]');
      if (status) status.textContent = point.dataset.intervalLabel;
    });
  });
  const windowDescriptions = {
    '50': '50 ms 窗口：滑动 RMS 以最近 50 ms 的原始 ADC 样本计算活动包络。',
    '100': '100 ms 窗口：滑动 RMS 以最近 100 ms 的原始 ADC 样本计算活动包络。',
    '200': '200 ms 窗口：滑动 RMS 以最近 200 ms 的原始 ADC 样本计算活动包络。'
  };
  document.querySelectorAll('input[name="rms-window"]').forEach((input) => {
    input.addEventListener('change', () => {
      const description = document.querySelector('[data-window-description]');
      if (description && input.checked) description.textContent = windowDescriptions[input.value];
    });
  });
})();
