// ✅ همه وزن‌های اعلام‌شده در typography.ts باید اینجا باشن
import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    { path: "./fonts/IRANYekanX-Thin.ttf",       weight: "100", style: "normal" },
    { path: "./fonts/IRANYekanX-UltraLight.ttf",  weight: "200", style: "normal" },
    { path: "./fonts/IRANYekanX-Light.ttf",       weight: "300", style: "normal" },
    { path: "./fonts/IRANYekanX-Regular.ttf",     weight: "400", style: "normal" },
    { path: "./fonts/IRANYekanX-Medium.ttf",      weight: "500", style: "normal" },
    { path: "./fonts/IRANYekanX-DemiBold.ttf",    weight: "600", style: "normal" },
    { path: "./fonts/IRANYekanX-Bold.ttf",        weight: "700", style: "normal" },
    { path: "./fonts/IRANYekanX-ExtraBold.ttf",   weight: "800", style: "normal" },
    { path: "./fonts/IRANYekanX-Black.ttf",       weight: "900", style: "normal" },
    { path: "./fonts/IRANYekanX-Heavy.ttf",       weight: "950", style: "normal" },
    { path: "./fonts/IRANYekanX-ExtraBlack.ttf",  weight: "1000", style: "normal" },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
});
