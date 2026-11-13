// src/theme/typography/typography.ts
// ═══════════════════════════════════════════════════════════
//   TYPOGRAPHY SYSTEM
//  فونت: IRANYekanX
//  وزن‌های موجود:
//    Thin(100), UltraLight(200), Light(300), Regular(400),
//    Medium(500), DemiBold(600), Bold(700), ExtraBold(800),
//    Black(900), Heavy(950), ExtraBlack(1000)
// ═══════════════════════════════════════════════════════════

const FONT_FAMILY = [
  "var(--font-iran-yekan)",
  "IRANYekanX",
  "system-ui",
  "Arial",
  "sans-serif",
].join(",");

const baseStyles = {
  fontFamily: FONT_FAMILY,
  letterSpacing: "0%",
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
};

export const fontWeights = {
  thin: 100,
  ultralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  demibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  heavy: 950,
  extrablack: 1000,
} as const;

const fontSize = {
  "3xs": "0.5rem",
  "2xs": "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2.25rem",
};

const lineHeight = {
  4: 1.6,
  5: 1.55,
  6: 1.5,
  7: 1.4,
};

const thin = {
  thinSm: {
    ...baseStyles,
    fontWeight: fontWeights.thin,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[6],
  },
  thinXs: {
    ...baseStyles,
    fontWeight: fontWeights.thin,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[5],
  },
  thin2xs: {
    ...baseStyles,
    fontWeight: fontWeights.thin,
    fontSize: fontSize["2xs"],
    lineHeight: lineHeight[4],
  },
};

const ultraLight = {
  ultraLightSm: {
    ...baseStyles,
    fontWeight: fontWeights.ultralight,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[6],
  },
  ultraLightXs: {
    ...baseStyles,
    fontWeight: fontWeights.ultralight,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[5],
  },
  ultraLight2xs: {
    ...baseStyles,
    fontWeight: fontWeights.ultralight,
    fontSize: fontSize["2xs"],
    lineHeight: lineHeight[4],
  },
};

const light = {
  lightSm: {
    ...baseStyles,
    fontWeight: fontWeights.light,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[6],
  },
  lightXs: {
    ...baseStyles,
    fontWeight: fontWeights.light,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[5],
  },
  light2xs: {
    ...baseStyles,
    fontWeight: fontWeights.light,
    fontSize: fontSize["2xs"],
    lineHeight: lineHeight[4],
  },
};

const regular = {
  regular2xl: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  regularXl: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[7],
  },
  regularLg: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  regularBase: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  regularSm: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
  regularXs: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[4],
  },
  regular2xs: {
    ...baseStyles,
    fontWeight: fontWeights.normal,
    fontSize: fontSize["2xs"],
    lineHeight: lineHeight[4],
  },
};

const medium = {
  medium2xl: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  mediumXl: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[7],
  },
  mediumLg: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  mediumBase: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  mediumSm: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
  mediumXs: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[4],
  },
  medium2xs: {
    ...baseStyles,
    fontWeight: fontWeights.medium,
    fontSize: fontSize["2xs"],
    lineHeight: lineHeight[5],
  },
};

const demibold = {
  demibold2xl: {
    ...baseStyles,
    fontWeight: fontWeights.demibold,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  demiboldXl: {
    ...baseStyles,
    fontWeight: fontWeights.demibold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[6],
  },
  demiboldLg: {
    ...baseStyles,
    fontWeight: fontWeights.demibold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  demiboldBase: {
    ...baseStyles,
    fontWeight: fontWeights.demibold,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  demiboldSm: {
    ...baseStyles,
    fontWeight: fontWeights.demibold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
  demiboldXs: {
    ...baseStyles,
    fontWeight: fontWeights.demibold,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[4],
  },
};

const bold = {
  bold2xl: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  boldXl: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[6],
  },
  boldLg: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  boldBase: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  boldSm: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
  bold2xs: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize["2xs"],
    lineHeight: lineHeight[4],
  },
  bold3xs: {
    ...baseStyles,
    fontWeight: fontWeights.bold,
    fontSize: fontSize["3xs"],
    lineHeight: lineHeight[4],
  },
};

const extraBold = {
  extraBold4xl: {
    ...baseStyles,
    fontWeight: fontWeights.extrabold,
    fontSize: fontSize["4xl"],
    lineHeight: lineHeight[7],
  },
  extraBold2xl: {
    ...baseStyles,
    fontWeight: fontWeights.extrabold,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  extraBoldXl: {
    ...baseStyles,
    fontWeight: fontWeights.extrabold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[6],
  },
  extraBoldLg: {
    ...baseStyles,
    fontWeight: fontWeights.extrabold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  extraBoldBase: {
    ...baseStyles,
    fontWeight: fontWeights.extrabold,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  extraBoldSm: {
    ...baseStyles,
    fontWeight: fontWeights.extrabold,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
};

const heavy = {
  heavy4xl: {
    ...baseStyles,
    fontWeight: fontWeights.heavy,
    fontSize: fontSize["4xl"],
    lineHeight: lineHeight[7],
  },
  heavy2xl: {
    ...baseStyles,
    fontWeight: fontWeights.heavy,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  heavyXl: {
    ...baseStyles,
    fontWeight: fontWeights.heavy,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[6],
  },
  heavyLg: {
    ...baseStyles,
    fontWeight: fontWeights.heavy,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  heavyBase: {
    ...baseStyles,
    fontWeight: fontWeights.heavy,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  heavySm: {
    ...baseStyles,
    fontWeight: fontWeights.heavy,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
};

const extraBlack = {
  extraBlack4xl: {
    ...baseStyles,
    fontWeight: fontWeights.extrablack,
    fontSize: fontSize["4xl"],
    lineHeight: lineHeight[7],
  },
  extraBlack2xl: {
    ...baseStyles,
    fontWeight: fontWeights.extrablack,
    fontSize: fontSize["2xl"],
    lineHeight: lineHeight[7],
  },
  extraBlackXl: {
    ...baseStyles,
    fontWeight: fontWeights.extrablack,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[6],
  },
  extraBlackLg: {
    ...baseStyles,
    fontWeight: fontWeights.extrablack,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[6],
  },
  extraBlackBase: {
    ...baseStyles,
    fontWeight: fontWeights.extrablack,
    fontSize: fontSize.base,
    lineHeight: lineHeight[5],
  },
  extraBlackSm: {
    ...baseStyles,
    fontWeight: fontWeights.extrablack,
    fontSize: fontSize.sm,
    lineHeight: lineHeight[5],
  },
};

export const typography = {
  fontFamily: FONT_FAMILY,

  h1: extraBold.extraBold4xl,
  h2: extraBold.extraBold2xl,
  h3: bold.bold2xl,
  h4: bold.boldXl,
  h5: demibold.demiboldXl,
  h6: demibold.demiboldLg,
  body1: medium.mediumBase,
  body2: medium.mediumSm,
  button: demibold.demiboldBase,
  caption: regular.regularXs,

  ...thin,
  ...ultraLight,
  ...light,
  ...regular,
  ...medium,
  ...demibold,
  ...bold,
  ...extraBold,
  ...heavy,
  ...extraBlack,
};
