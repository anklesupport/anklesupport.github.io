"use strict";

(() => {
  const list = document.getElementById("publication-list");
  const status = document.getElementById("publication-status");

  function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ["https:", "http:"].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  function textElement(tag, value, className) {
    const element = document.createElement(tag);
    element.textContent = value;
    if (className) element.className = className;
    return element;
  }

  function renderPublication(publication) {
    const item = document.createElement("li");
    const title = textElement("h3", publication.title);
    const titleUrl = safeUrl(publication.url);
    if (titleUrl) {
      const link = textElement("a", publication.title);
      link.href = titleUrl;
      title.replaceChildren(link);
    }
    item.append(title);
    if (typeof publication.authors === "string" && publication.authors.trim()) {
      item.append(textElement("p", publication.authors));
    }
    const metadata = [publication.venue, publication.year]
      .filter(value => (typeof value === "string" || typeof value === "number") && String(value).trim());
    if (metadata.length) item.append(textElement("p", metadata.join(" · "), "publication-meta"));
    const links = document.createElement("div");
    links.className = "publication-links";
    for (const [field, label] of [["pdf", "PDF"], ["code", "Code"]]) {
      const url = safeUrl(publication[field]);
      if (!url) continue;
      const link = textElement("a", label);
      link.href = url;
      links.append(link);
    }
    if (links.childElementCount) item.append(links);
    return item;
  }

  async function loadPublications() {
    try {
      const response = await fetch("publish/publications.json");
      if (!response.ok) throw new Error("Publication data could not be loaded.");
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Publication data must be an array.");
      const publications = data.filter(item => item && typeof item.title === "string" && item.title.trim());
      if (!publications.length) return;
      list.replaceChildren(...publications.map(renderPublication));
      list.hidden = false;
      status.hidden = true;
    } catch {
      status.textContent = "The publication list is currently unavailable. Please try again later.";
    }
  }

  loadPublications();
})();
