"use client";

import { useEffect, useRef, useState } from "react";
import { Snackbar, Box, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { Notification } from "@/components/ui/common/notification";

interface InAppPayload {
  id: string;
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  time?: string;
}

const DISPLAY_MS = 6000;

export function InAppNotificationListener() {
  const router = useRouter();
  const [queue, setQueue] = useState<InAppPayload[]>([]);
  const [current, setCurrent] = useState<InAppPayload | null>(null);

  // ── Web Audio API refs ──
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const unlockedRef = useRef(false);

  // ۱. بارگذاری فایل صوتی و آماده‌سازی AudioContext
  useEffect(() => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioContextRef.current = ctx;

    fetch("/sounds/notification.wav")
      .then((res) => res.arrayBuffer())
      .then((buf) => ctx.decodeAudioData(buf))
      .then((decoded) => {
        audioBufferRef.current = decoded;
      })
      .catch((err) => console.error("[Sound] decode failed:", err));

    // ۲. آنلاک با اولین تعامل کاربر
    const unlock = () => {
      if (unlockedRef.current || !audioContextRef.current) return;
      const c = audioContextRef.current;
      if (c.state === "suspended") {
        c.resume().then(() => {
          unlockedRef.current = true;
          console.log("[Sound] AudioContext unlocked");
        });
      } else {
        unlockedRef.current = true;
      }
    };

    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      ctx.close();
    };
  }, []);

  // ۳. دریافت نوتیفیکیشن → صدا + صف
  useEffect(() => {
    const handler = (e: CustomEvent<InAppPayload>) => {
      // پخش صدا با Web Audio API
      const ctx = audioContextRef.current;
      const buffer = audioBufferRef.current;
      if (ctx && buffer) {
        if (ctx.state === "suspended") {
          ctx.resume().then(() => playBuffer(ctx, buffer));
        } else {
          playBuffer(ctx, buffer);
        }
      }
      setQueue((q) => [...q, e.detail]);
    };

    window.addEventListener("nova:in-app-notification", handler as EventListener);
    return () => window.removeEventListener("nova:in-app-notification", handler as EventListener);
  }, []);

  // ۴. نمایش بعدی + ویبره
  useEffect(() => {
    if (current || queue.length === 0) return;

    const [next, ...rest] = queue;
    setCurrent(next);
    setQueue(rest);

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate([80, 40, 80]);
    }
  }, [current, queue]);

  const handleClose = () => setCurrent(null);

  const handleClick = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(20);
    }
    if (current?.href) router.push(current.href);
    setCurrent(null);
  };

  const time =
    current?.time ??
    new Intl.DateTimeFormat("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

  return (
    <Snackbar
      open={!!current}
      autoHideDuration={DISPLAY_MS}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ mt: 2 }}
    >
      <Paper
        key={current?.id}
        onClick={handleClick}
        elevation={0}
        sx={{
          position: "relative",
          cursor: current?.href ? "pointer" : "default",
          borderRadius: 3,
          overflow: "hidden",
          minWidth: 300,
          maxWidth: 420,
          bgcolor: "background.paper",
          boxShadow: "0 8px 24px rgba(25, 118, 210, 0.25)",
          animation: "novaSlideIn 0.35s ease-out",
          "@keyframes novaSlideIn": {
            from: { opacity: 0, transform: "translateY(-12px) scale(0.98)" },
            to: { opacity: 1, transform: "translateY(0) scale(1)" },
          },
          transition: "transform 0.12s ease",
          "&:active": { transform: "scale(0.98)" },
        }}
      >
        <Box sx={{ position: "relative", height: 3, bgcolor: "grey.200", overflow: "hidden" }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "primary.main",
              animation: `novaShrink ${DISPLAY_MS}ms linear forwards`,
              "@keyframes novaShrink": {
                from: { width: "100%" },
                to: { width: "0%" },
              },
            }}
          />
        </Box>

        <Box>
          {current && (
            <Notification
              title={current.title}
              description={current.description}
              time={time}
              icon={current.icon}
            />
          )}
        </Box>
      </Paper>
    </Snackbar>
  );
}

// تابع کمکی برای پخش
function playBuffer(ctx: AudioContext, buffer: AudioBuffer) {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
}