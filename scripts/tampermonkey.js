// ==UserScript==
// @name         WGAuto
// @namespace    https://github.com/Danz-Pro/WGAuto
// @version      1.0
// @description  Wayground Join Room Auto-Answer Cheat — 100% Correct Answers
// @author       Danz-Pro
// @match        https://wayground.com/*
// @match        https://quizizz.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/Danz-Pro/WGAuto@main/dist/bundle.js';
  script.onload = () => console.log('[WGAuto] v1.0 Script loaded');
  script.onerror = () => console.error('[WGAuto] Failed to load script');
  document.head.appendChild(script);
})();
