// lib/api/token-storage.ts
const TOKEN_KEY = "auth_token";

export const tokenStorage = {
  get(): string | null {
    if (typeof window === "undefined") {
      console.log("[tokenStorage.get] SSR — returning null");
      return null;
    }
    const token = localStorage.getItem(TOKEN_KEY);
    console.log("[tokenStorage.get]", {
      origin: window.location.origin,
      hasToken: !!token,
      tokenPreview: token?.slice(0, 15),
    });
    return token;
  },

  set(token: string): void {
    if (typeof window === "undefined") {
      console.warn("[tokenStorage.set] SSR — skipping");
      return;
    }
    if (!token || typeof token !== "string") {
      console.error("[tokenStorage.set] invalid token:", token);
      return;
    }
    try {
      localStorage.setItem(TOKEN_KEY, token);
      console.log("[tokenStorage.set] ✓ saved", {
        origin: window.location.origin,
        tokenPreview: token.slice(0, 15),
      });
    } catch (e) {
      console.error("[tokenStorage.set] failed:", e);
    }
  },

  clear(): void {
    if (typeof window === "undefined") return;
    console.trace("[tokenStorage.clear] called from:");
    localStorage.removeItem(TOKEN_KEY);
  },
};