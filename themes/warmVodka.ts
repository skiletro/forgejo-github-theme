import { deepOverride, defineTheme } from "@lutinglt/gitea-github-theme/core";
import { githubDarkColor } from "./github";
import { rgba } from "../src/functions/color";
import colors from "./warmVodka.json";

// Shared defaults for local builds and the Nix package's partial palette overrides.
const {
  background0: background,
  background1: surface,
  background2: hover,
  background3: selected,
  foreground0: foreground,
  foreground1: muted,
  accent,
  "accent-hover": accentHover,
  "accent-active": accentActive,
  "box-border-color": border,
} = colors;

// Keep GitHub's semantic status, ANSI and syntax hues: coral is navigation/interaction,
// not a replacement for success, warning, failure or added/removed code.
const warmVodkaColor = deepOverride(githubDarkColor, {
  bgColor: {
    default: background,
    muted: surface,
    inset: background,
    emphasis: border,
    disabled: surface,
    neutral: { muted: rgba(muted, 0x26 / 0xff), emphasis: border },
    accent: { muted: rgba(accent, 0x1a / 0xff), emphasis: accent },
  },
  fgColor: { default: foreground, muted, neutral: muted, accent },
  borderColor: {
    default: border,
    muted: rgba(border, 0x99 / 0xff),
    emphasis: muted,
    disabled: rgba(border, 0x55 / 0xff),
    neutral: { muted: rgba(border, 0x99 / 0xff), emphasis: border },
    accent: { muted: rgba(accent, 0x66 / 0xff), emphasis: accent },
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
      bgColor: { rest: accent, hover: accentHover, active: accentActive },
      borderColor: { rest: accent, hover: accentHover },
    },
    invisible: { iconColor: { rest: muted } },
    danger: { bgColor: { rest: surface } },
  },
  themeExtra: { button: { primary: { fgColor: { accent } } } },
  overlay: { bgColor: surface, borderColor: border, backdrop: { bgColor: rgba(background, 0xbb / 0xff) } },
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
