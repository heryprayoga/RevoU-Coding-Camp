import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";
import { JSDOM } from "jsdom";

let html;
let dom;
let document;

beforeAll(() => {
  html = readFileSync(resolve(process.cwd(), "index.html"), "utf-8");
  dom = new JSDOM(html);
  document = dom.window.document;
});

describe("HTML document structure", () => {
  // Requirements 1.1
  it("has a valid DOCTYPE declaration", () => {
    expect(html.toLowerCase()).toMatch(/<!doctype html/);
  });

  // Requirements 1.1
  it("has a <header> element", () => {
    expect(document.querySelector("header")).not.toBeNull();
  });

  it("has a <main> element", () => {
    expect(document.querySelector("main")).not.toBeNull();
  });

  it("has at least one <section> element", () => {
    expect(document.querySelectorAll("section").length).toBeGreaterThanOrEqual(
      1,
    );
  });

  it("has a <footer> element", () => {
    expect(document.querySelector("footer")).not.toBeNull();
  });

  // Requirements 1.2
  it('has a <meta name="viewport"> tag', () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).not.toBeNull();
  });

  // Requirements 1.3
  it("loads Tailwind CSS via CDN (cdn.tailwindcss.com script tag)", () => {
    const scripts = Array.from(document.querySelectorAll("script[src]"));
    const hasTailwind = scripts.some((s) =>
      s.getAttribute("src").includes("cdn.tailwindcss.com"),
    );
    expect(hasTailwind).toBe(true);
  });
});
