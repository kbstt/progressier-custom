let styleEl = document.createElement('style');
styleEl.innerHTML = `@supports (-webkit-touch-callout: none) and (pointer: coarse) {
  .progressier-install-banner, .progressier-widget{
    display: none !important;
  }
}`;
document.querySelector('body').appendChild(styleEl)
