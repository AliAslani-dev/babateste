"use client";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { CourseEpisode } from "@/features/education/api";

interface HeadlinesProps {
  episodes: CourseEpisode[];
  onNavigateToAbout?: () => void;
}

const toPersianDigits = (value: string | number): string =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const getEpisodeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "video":
      return <span style={{ fontSize: 18 }}>🎬</span>;
    case "pdf":
      return <span style={{ fontSize: 18 }}>📄</span>;
    case "audio":
      return <span style={{ fontSize: 18 }}>🎧</span>;
    default:
      return <span style={{ fontSize: 18 }}>📁</span>;
  }
};

const getEpisodeTypeLabel = (type: string): string => {
  switch (type.toLowerCase()) {
    case "video":
      return "ویدیو";
    case "pdf":
      return "فایل PDF";
    case "audio":
      return "صوت";
    default:
      return "فایل";
  }
};

export default function Headlines({
  episodes,
  onNavigateToAbout,
}: HeadlinesProps) {
  if (!episodes || episodes.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="mediumBase" color="text.secondary">
          سرفصلی برای این دوره ثبت نشده است.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Typography variant="boldLg" sx={{ mb: 1 }}>
        سرفصل‌های دوره ({toPersianDigits(episodes.length)} جلسه)
      </Typography>

      {episodes.map((episode, index) => (
        <Accordion
          key={episode.id}
          disableGutters
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                {toPersianDigits(index + 1)}
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="mediumBase" sx={{ fontWeight: 600 }}>
                  {episode.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 0.5,
                  }}
                >
                  {getEpisodeIcon(episode.type)}
                  <Typography variant="caption" color="text.secondary">
                    {getEpisodeTypeLabel(episode.type)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              component="a"
              href={episode.mediaUrl}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToAbout?.();
              }}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {getEpisodeIcon(episode.type)}
              <Typography variant="body2">
                مشاهده / دانلود {getEpisodeTypeLabel(episode.type)}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}