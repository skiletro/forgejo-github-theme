import { css } from "@lutinglt/gitea-github-theme/core";

// Series-scoped finishes only. Spacing, grids, navigation and responsive layouts stay upstream.
export default css`
  :root {
    --fonts-monospace: "SFMono-Regular", Consolas, "Liberation Mono", monospace, var(--fonts-emoji);
    --fonts-proportional: var(--fonts-monospace);
    --border-radius: 0;
    --color-selection-bg: #ff747e;
    --color-selection-fg: #160f11;
  }

  /* Tint only Forgejo's brand marks; repository, organization and user avatars keep their colors. */
  #navbar-logo img,
  .navbar-drawer-header img,
  .theme-home-hero > img.logo,
  img.signin-logo {
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }

  .github-footer .footer-logo {
    color: var(--color-text);
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .ui.header,
  .ui.menu,
  .ui.button,
  .ui.form input,
  .ui.form textarea,
  .ui.form select,
  .ui.label.commit-sign-badge.gitea-github-theme-commit-sign-badge,
  .gitea-github-theme-sha {
    font-family: var(--fonts-monospace);
  }

  /* Success actions keep their semantic green fill, not the coral primary's dark text. */
  .ui.green.button,
  .ui.green.buttons .button {
    color: var(--github-fgColor-onEmphasis);
  }

  .ui.label.issue-state-label:is(.green, .red, .purple),
  .issue-content-left .badge:is(.tw-bg-green, .tw-bg-red, .tw-bg-purple),
  .repository.view.issue .comment-list .timeline-item.comment.merge.box .timeline-avatar.text {
    color: var(--github-fgColor-onEmphasis) !important;
  }

  :where(a, button, summary, input, textarea, select, [tabindex]):focus-visible {
    outline: 2px solid var(--github-fgColor-accent);
    outline-offset: 2px;
  }

  a:hover {
    text-decoration-color: var(--github-fgColor-accent);
  }

  .theme-control:not(.primary):not(.danger):not(.disabled):not(:disabled):not([aria-disabled="true"]):hover,
  .ui.button:not(.primary):not(.red):not(.green):not(.disabled):not(:disabled):hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-body);
  }

  .theme-control:not(.primary):not(.danger):not(.disabled):not(:disabled):not([aria-disabled="true"]):hover > svg,
  .ui.button:not(.primary):not(.red):not(.green):not(.disabled):not(:disabled):hover svg {
    color: inherit;
  }

  /* These floating surfaces use fixed radii in the shared component styles. */
  :root .navbar-drawer,
  :root .theme-search-syntax,
  :root .theme-dropdown[data-theme-dropdown="actions"] > .theme-dropdown-panel {
    border: 1px solid var(--color-light-border);
    border-radius: 0;
    box-shadow: none;
  }
`;
