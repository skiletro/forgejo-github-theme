import { deepOverride, defineTheme } from "@lutinglt/gitea-github-theme/core";
import { githubDarkColor } from "./github";

// Visual reference: https://warm.vodka/ — original token overrides, not landing-page CSS.
const background = "#171416";
const surface = "#211d1f";
const border = "#3b3336";
const muted = "#b4a7aa";
const foreground = "#f4e8e8";
const accent = "#ff747e";
const hover = "#2b2528";
const selected = "#352d31";

// Keep GitHub's semantic status, ANSI and syntax hues: coral is navigation/interaction,
// not a replacement for success, warning, failure or added/removed code.
const warmVodkaColor = deepOverride(githubDarkColor, {
  bgColor: {
    default: background,
    muted: surface,
    inset: background,
    emphasis: border,
    disabled: surface,
    neutral: { muted: "#b4a7aa26", emphasis: border },
    accent: { muted: "#ff747e1a", emphasis: accent },
  },
  fgColor: { default: foreground, muted, neutral: muted, accent },
  borderColor: {
    default: border,
    muted: "#3b333699",
    emphasis: muted,
    disabled: "#3b333655",
    neutral: { muted: "#3b333699", emphasis: border },
    accent: { muted: "#ff747e66", emphasis: accent },
  },
  control: {
    bgColor: { rest: surface, hover, active: selected, disabled: surface, selected },
    fgColor: { rest: foreground, placeholder: muted },
    borderColor: { rest: border, emphasis: muted, selected: accent },
    iconColor: { rest: muted },
    transparent: {
      bgColor: { hover: surface, active: hover, selected },
      borderColor: { active: border },
    },
  },
  controlTrack: { bgColor: { rest: surface } },
  controlKnob: { bgColor: { rest: muted } },
  button: {
    default: { bgColor: { rest: surface, hover, active: selected } },
    primary: {
      fgColor: { rest: background },
      bgColor: { rest: accent, hover: "#ff929a", active: "#f0606c" },
      borderColor: { rest: accent, hover: "#ff929a" },
    },
    invisible: { iconColor: { rest: muted } },
    danger: { bgColor: { rest: surface } },
  },
  themeExtra: { button: { primary: { fgColor: { accent } } } },
  overlay: { bgColor: surface, borderColor: border, backdrop: { bgColor: `${background}bb` } },
  tooltip: { bgColor: surface, fgColor: foreground },
  avatar: { bgColor: surface, borderColor: border },
  counter: { borderColor: "transparent" },
  progressBar: { track: { bgColor: surface, borderColor: border } },
  underlineNav: { borderColor: { active: accent } },
  shadow: {
    floating: { small: "none" },
    inset: "none",
    resting: { small: "none", medium: "none" },
  },
  contribution: { default: { bgColor: { "0": surface } } },
  codeMirror: {
    fgColor: foreground,
    bgColor: background,
    gutters: { bgColor: background },
    gutterMarker: { fgColor: { default: background, muted } },
    lineNumber: { fgColor: muted },
    cursor: { fgColor: accent },
    selection: { bgColor: selected },
    activeline: { bgColor: surface },
    matchingBracket: { fgColor: foreground },
    lines: { bgColor: background },
  },
  diffBlob: {
    hunkNum: { bgColor: { rest: surface, hover: hover } },
    hunkLine: { bgColor: surface, fgColor: muted },
  },
});

export const warmVodkaTheme = defineTheme({ colorType: "github", themeColor: warmVodkaColor });
