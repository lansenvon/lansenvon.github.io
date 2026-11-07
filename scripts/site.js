(() => {
  "use strict";
  const data = window.SITE_DATA;
  const root = document.body.dataset.root || "";
  const focusKeys = Object.keys(data.directions);
  const urlFocus = new URLSearchParams(location.search).get("focus");
  let storedDirection = null;
  try { storedDirection = localStorage.getItem("portfolio-direction"); } catch {}
  let activeDirection = focusKeys.includes(urlFocus)
    ? urlFocus
    : (storedDirection || data.defaultDirection);
  if (!focusKeys.includes(activeDirection)) activeDirection = data.defaultDirection;
  let lastDispatchedDirection = null;

  function withFocus(path, key = activeDirection) {
    const url = new URL(path, location.href);
    url.searchParams.set("focus", key);
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function setDirection(key, updateUrl = true) {
    const direction = data.directions[key];
    if (!direction) return;
    activeDirection = key;
    const resumeQuery = data.resumeVersion ? `?v=${encodeURIComponent(data.resumeVersion)}` : "";
    try { localStorage.setItem("portfolio-direction", key); } catch {}
    document.querySelectorAll("[data-direction]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.direction === key));
    });
    document.querySelectorAll("[data-resume]").forEach((link) => {
      const isHome = link.hasAttribute("data-home-resume");
      link.href = `${root}${direction.resume}${resumeQuery}`;
      link.setAttribute("download", "");
      if (isHome) {
        const icon = link.querySelector('[aria-hidden="true"]');
        link.replaceChildren(document.createTextNode(`${direction.resumeLabel} `));
        if (icon) link.append(icon);
      }
      else {
        const label = link.querySelector("[data-resume-label]");
        if (label) label.textContent = direction.resumeLabel;
      }
    });
    document.querySelectorAll("[data-resume-plain]").forEach((link) => {
      link.href = `${root}${direction.resume.replace(/\.pdf$/, "_无头像版.pdf")}${resumeQuery}`;
    });
    document.querySelectorAll("[data-direction-label]").forEach((node) => { node.textContent = direction.label; });
    document.querySelectorAll("[data-direction-summary]").forEach((node) => { node.textContent = direction.summary; });
    document.querySelectorAll("[data-direction-lead]").forEach((node) => { node.textContent = direction.heroLead || ""; });
    // Homepage and review page share the direction, artwork and resume bindings.
    if (direction.hero) {
      const hero = direction.hero;
      document.querySelectorAll("[data-direction-hero]").forEach((img) => {
        const src = `${root}${hero.src}`;
        if (img.getAttribute("src") !== src) img.setAttribute("src", src);
        img.alt = hero.alt;
      });
      document.querySelectorAll("[data-hero-title]").forEach((node) => { node.textContent = hero.title; });
      document.querySelectorAll("[data-hero-caption]").forEach((node) => { node.textContent = hero.caption; });
      document.querySelectorAll("[data-hero-index]").forEach((node) => {
        node.textContent = `${String(focusKeys.indexOf(key) + 1).padStart(2, "0")} / ${String(focusKeys.length).padStart(2, "0")}`;
      });
      document.querySelectorAll("[data-hero-chain]").forEach((list) => {
        list.replaceChildren(...hero.stages.map((label) => {
          const item = document.createElement("li");
          item.textContent = label;
          return item;
        }));
      });
    }
    document.querySelectorAll("[data-case-order-label]").forEach((node) => { node.textContent = direction.orderLabel; });

    document.querySelectorAll("[data-focus-link]").forEach((link) => {
      link.href = withFocus(link.dataset.path || link.getAttribute("href"), key);
    });
    document.querySelectorAll('a[href*="focus="]').forEach((link) => {
      link.href = withFocus(link.getAttribute("href"), key);
    });

    const projectList = document.querySelector("[data-project-list]");
    if (projectList) {
      direction.order.forEach((id, index) => {
        const item = projectList.querySelector(`[data-project="${id}"]`);
        if (item) {
          item.style.setProperty("--project-order", index);
          projectList.append(item);
        }
      });
    }

    const pageProject = document.body.dataset.page;
    const currentProject = pageProject === "p04-p05" ? "p04" : pageProject;
    const nav = document.querySelector("[data-case-nav]");
    if (currentProject && nav) {
      // P04 and P05 share one case page, so page navigation skips the other section.
      const order = pageProject === "p04-p05"
        ? direction.order.filter((id) => id !== "p05")
        : direction.order;
      const index = order.indexOf(currentProject);
      nav.replaceChildren();
      if (index > 0) nav.append(projectNavLink(order[index - 1], "上一项目："));
      const directory = document.createElement("a");
      directory.className = "text-link";
      directory.href = withFocus(`${root}#projects`, key);
      directory.textContent = "全部项目";
      nav.append(directory);
      if (index >= 0 && index < order.length - 1) nav.append(projectNavLink(order[index + 1], "下一项目："));
    }

    if (lastDispatchedDirection !== key) {
      document.dispatchEvent(new CustomEvent("portfolio:direction", { detail: { key } }));
      lastDispatchedDirection = key;
    }

    if (updateUrl && new URLSearchParams(location.search).get("focus") !== key) {
      const url = new URL(location.href);
      url.searchParams.set("focus", key);
      try { history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`); } catch {}
    }
  }

  function projectNavLink(id, prefix) {
    const project = data.projects[id];
    const link = document.createElement("a");
    link.className = "text-link";
    link.href = withFocus(`../${project.path}`, activeDirection);
    link.textContent = `${prefix}${project.title}`;
    return link;
  }

  window.addEventListener("hashchange", () => setDirection(activeDirection, false));

  document.querySelectorAll("[data-direction]").forEach((button) => {
    button.addEventListener("click", () => setDirection(button.dataset.direction));
  });
  setDirection(activeDirection, false);
})();
