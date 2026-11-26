/**
 * d3im3r Tailwind CSS Preset (v3 compatible)
 * Usage in tailwind.config.js:
 *   presets: [require('path/to/tokens/tailwind.preset.js')]
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        'app-bg': 'var(--app-bg)',
        'app-panel': 'var(--app-panel)',
        'app-grid': 'var(--app-grid)',
        'app-text': 'var(--app-text)',
        'app-muted': 'var(--app-muted)',
        'app-green': 'var(--app-green)',
        'app-cyan': 'var(--app-cyan)',
        'app-orange': 'var(--app-orange)',
        'app-red': 'var(--app-red)',
      },
    },
  },
};
