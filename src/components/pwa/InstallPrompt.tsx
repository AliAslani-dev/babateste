// src/components/pwa/InstallPrompt.tsx
"use client";

import { useEffect, useState } from "react";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (localStorage.getItem("pwa-install-dismissed") === "1") return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShow(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    localStorage.setItem("pwa-install-dismissed", "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        bottom: `calc(var(--bottom-nav-height, 56px) + var(--safe-bottom, 0px) + 16px)`,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: 400,
        p: 2,
        borderRadius: 2,
        zIndex: 9998,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* ✅ اینجا variantها رو حذف کردم و با sx استایل دادم */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "text.primary",
            mb: 0.5,
            lineHeight: 1.4,
          }}
        >
          تجربه بهتر با نصب اپلیکیشن
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            color: "text.secondary",
            lineHeight: 1.4,
          }}
        >
          دسترسی سریع‌تر، حتی بدون اینترنت
        </Typography>
      </Box>
      <Button
        size="small"
        variant="contained"
        onClick={handleInstall}
        sx={{ flexShrink: 0 }}
      >
        نصب
      </Button>
      <IconButton
        size="small"
        onClick={handleDismiss}
        sx={{ flexShrink: 0 }}
      >
        ✕
      </IconButton>
    </Paper>
  );
}