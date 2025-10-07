let styleEl = document.createElement('style');
styleEl.innerHTML = `@supports (-webkit-touch-callout: none) {
  .progressier-install-banner, .progressier-widget {
    display: none !important;
  }
}`;
document.querySelector('body').appendChild(styleEl)
