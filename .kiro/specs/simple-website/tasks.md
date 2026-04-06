# Implementation Plan: Simple Website

## Overview

Build a self-contained `index.html` single-page website with Tailwind CSS (CDN) and Vanilla JS modules for smooth scrolling, mobile menu toggling, contact form validation, and dynamic footer year.

## Tasks

- [x] 1. Create `index.html` with page structure and static sections
  - Write valid HTML5 document with `<!DOCTYPE html>`, semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`), and `<meta name="viewport">`
  - Add Tailwind CSS CDN link in `<head>`
  - Implement Nav with logo, links, and hamburger button (`aria-label`, `aria-expanded`, `id="hamburger"`, `id="nav-links"`)
  - Implement Hero section (`id="hero"`) with headline, paragraph, and CTA button linking to `#features`; apply `min-h-screen`
  - Implement Features section (`id="features"`) with at least 3 cards (icon, title, description); apply responsive grid (`md:grid-cols-3`)
  - Implement Contact form (`id="contact-form"`) with name/email/message fields, matching `<label for>` / `id` pairs, and inline error `<span>` elements
  - Implement `<footer>` with copyright text and `<span id="copyright-year">`
  - Apply Tailwind responsive prefixes for layout breakpoints
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.4, 3.1, 3.2, 4.1, 4.2, 5.1, 6.1, 7.1, 7.2, 7.3_

- [-] 2. Implement JS modules in inline `<script>` block
  - [x] 2.1 Implement `FooterYear.init()` — query `#copyright-year`, set `textContent` to `new Date().getFullYear()`; log warning and exit if element missing
    - _Requirements: 6.2_

  - [x] 2.2 Implement `MobileMenu.init()` — query `#hamburger` and `#nav-links`; on click toggle hidden class and `aria-expanded`; guard against missing elements
    - _Requirements: 2.4, 2.5, 7.4_

  - [ ]\* 2.3 Write property test for MobileMenu toggle consistency (Property 2)
    - **Property 2: Mobile menu toggle is consistent**
    - **Validates: Requirements 2.5, 7.4**

  - [-] 2.4 Implement `SmoothScroller.init()` — query all `<a href="#...">` anchors; on click call `preventDefault` and `scrollIntoView({ behavior: 'smooth' })`; skip silently if target not found
    - _Requirements: 2.3, 3.3_

  - [ ]\* 2.5 Write property test for SmoothScroller (Property 1)
    - **Property 1: Smooth scroll targets correct section**
    - **Validates: Requirements 2.3, 3.3**

  - [~] 2.6 Implement `Validator.init()` — query `#contact-form`; on submit run `validateRequired` and `validateEmail`; show inline errors on failure; show success message and call `form.reset()` on all-pass
    - Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
    - _Requirements: 5.2, 5.3, 5.4_

  - [ ]\* 2.7 Write property test for Validator rejects invalid input (Property 3)
    - **Property 3: Form validation rejects invalid input**
    - **Validates: Requirements 5.2, 5.3**

  - [ ]\* 2.8 Write property test for Validator valid submission resets state (Property 4)
    - **Property 4: Valid form submission resets state**
    - **Validates: Requirements 5.4**

  - [~] 2.9 Wire all modules — call `FooterYear.init()`, `MobileMenu.init()`, `SmoothScroller.init()`, `Validator.init()` inside a `DOMContentLoaded` listener

- [~] 3. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [~] 4. Write unit tests for structural and DOM requirements
  - [~] 4.1 Write unit tests for HTML document structure
    - Verify DOCTYPE, semantic elements, viewport meta, Tailwind CDN link
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ]\* 4.2 Write unit tests for Nav DOM structure
    - Verify logo, links, hamburger button with `aria-label` and `aria-expanded`
    - _Requirements: 2.1, 2.4, 7.2_

  - [ ]\* 4.3 Write unit tests for Hero DOM structure
    - Verify headline, paragraph, CTA button, `min-h-screen` class
    - _Requirements: 3.1, 3.2_

  - [ ]\* 4.4 Write unit tests for Features section
    - Verify minimum 3 cards each with icon, title, description; responsive grid classes present
    - _Requirements: 4.1, 4.2_

  - [ ]\* 4.5 Write unit tests for Contact form structure
    - Verify all fields present with matching `label for`/`id` pairs and inline error spans
    - _Requirements: 5.1, 7.3_

  - [ ]\* 4.6 Write unit tests for Footer
    - Verify copyright text and current year rendered
    - _Requirements: 6.1, 6.2_

- [~] 5. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Property tests use [fast-check](https://github.com/dubzzz/fast-check) with a minimum of 100 iterations each
- All JS runs after `DOMContentLoaded`; all modules guard against missing DOM elements
