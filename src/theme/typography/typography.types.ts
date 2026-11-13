// src/theme/typography/typography.types.ts
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    thinSm: CSSProperties;
    thinXs: CSSProperties;
    thin2xs: CSSProperties;

    ultraLightSm: CSSProperties;
    ultraLightXs: CSSProperties;
    ultraLight2xs: CSSProperties;

    lightSm: CSSProperties;
    lightXs: CSSProperties;
    light2xs: CSSProperties;

    regular2xl: CSSProperties;
    regularXl: CSSProperties;
    regularLg: CSSProperties;
    regularBase: CSSProperties;
    regularSm: CSSProperties;
    regularXs: CSSProperties;
    regular2xs: CSSProperties;

    medium2xl: CSSProperties;
    mediumXl: CSSProperties;
    mediumLg: CSSProperties;
    mediumBase: CSSProperties;
    mediumSm: CSSProperties;
    mediumXs: CSSProperties;
    medium2xs: CSSProperties;

    demibold2xl: CSSProperties;
    demiboldXl: CSSProperties;
    demiboldLg: CSSProperties;
    demiboldBase: CSSProperties;
    demiboldSm: CSSProperties;
    demiboldXs: CSSProperties;

    bold2xl: CSSProperties;
    boldXl: CSSProperties;
    boldLg: CSSProperties;
    boldBase: CSSProperties;
    boldSm: CSSProperties;
    bold2xs: CSSProperties;
    bold3xs: CSSProperties;

    extraBold4xl: CSSProperties;
    extraBold2xl: CSSProperties;
    extraBoldXl: CSSProperties;
    extraBoldLg: CSSProperties;
    extraBoldBase: CSSProperties;
    extraBoldSm: CSSProperties;

    heavy4xl: CSSProperties;
    heavy2xl: CSSProperties;
    heavyXl: CSSProperties;
    heavyLg: CSSProperties;
    heavyBase: CSSProperties;
    heavySm: CSSProperties;

    extraBlack4xl: CSSProperties;
    extraBlack2xl: CSSProperties;
    extraBlackXl: CSSProperties;
    extraBlackLg: CSSProperties;
    extraBlackBase: CSSProperties;
    extraBlackSm: CSSProperties;
  }

  interface TypographyVariantsOptions {
    thinSm?: CSSProperties;
    thinXs?: CSSProperties;
    thin2xs?: CSSProperties;

    ultraLightSm?: CSSProperties;
    ultraLightXs?: CSSProperties;
    ultraLight2xs?: CSSProperties;

    lightSm?: CSSProperties;
    lightXs?: CSSProperties;
    light2xs?: CSSProperties;

    regular2xl?: CSSProperties;
    regularXl?: CSSProperties;
    regularLg?: CSSProperties;
    regularBase?: CSSProperties;
    regularSm?: CSSProperties;
    regularXs?: CSSProperties;
    regular2xs?: CSSProperties;

    medium2xl?: CSSProperties;
    mediumXl?: CSSProperties;
    mediumLg?: CSSProperties;
    mediumBase?: CSSProperties;
    mediumSm?: CSSProperties;
    mediumXs?: CSSProperties;
    medium2xs?: CSSProperties;

    demibold2xl?: CSSProperties;
    demiboldXl?: CSSProperties;
    demiboldLg?: CSSProperties;
    demiboldBase?: CSSProperties;
    demiboldSm?: CSSProperties;
    demiboldXs?: CSSProperties;

    bold2xl?: CSSProperties;
    boldXl?: CSSProperties;
    boldLg?: CSSProperties;
    boldBase?: CSSProperties;
    boldSm?: CSSProperties;
    bold2xs?: CSSProperties;
    bold3xs?: CSSProperties;

    extraBold4xl?: CSSProperties;
    extraBold2xl?: CSSProperties;
    extraBoldXl?: CSSProperties;
    extraBoldLg?: CSSProperties;
    extraBoldBase?: CSSProperties;
    extraBoldSm?: CSSProperties;

    heavy4xl?: CSSProperties;
    heavy2xl?: CSSProperties;
    heavyXl?: CSSProperties;
    heavyLg?: CSSProperties;
    heavyBase?: CSSProperties;
    heavySm?: CSSProperties;

    extraBlack4xl?: CSSProperties;
    extraBlack2xl?: CSSProperties;
    extraBlackXl?: CSSProperties;
    extraBlackLg?: CSSProperties;
    extraBlackBase?: CSSProperties;
    extraBlackSm?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    thinSm: true;
    thinXs: true;
    thin2xs: true;

    ultraLightSm: true;
    ultraLightXs: true;
    ultraLight2xs: true;

    lightSm: true;
    lightXs: true;
    light2xs: true;

    regular2xl: true;
    regularXl: true;
    regularLg: true;
    regularBase: true;
    regularSm: true;
    regularXs: true;
    regular2xs: true;

    medium2xl: true;
    mediumXl: true;
    mediumLg: true;
    mediumBase: true;
    mediumSm: true;
    mediumXs: true;
    medium2xs: true;

    demibold2xl: true;
    demiboldXl: true;
    demiboldLg: true;
    demiboldBase: true;
    demiboldSm: true;
    demiboldXs: true;

    bold2xl: true;
    boldXl: true;
    boldLg: true;
    boldBase: true;
    boldSm: true;
    bold2xs: true;
    bold3xs: true;

    extraBold4xl: true;
    extraBold2xl: true;
    extraBoldXl: true;
    extraBoldLg: true;
    extraBoldBase: true;
    extraBoldSm: true;

    heavy4xl: true;
    heavy2xl: true;
    heavyXl: true;
    heavyLg: true;
    heavyBase: true;
    heavySm: true;

    extraBlack4xl: true;
    extraBlack2xl: true;
    extraBlackXl: true;
    extraBlackLg: true;
    extraBlackBase: true;
    extraBlackSm: true;
  }
}
