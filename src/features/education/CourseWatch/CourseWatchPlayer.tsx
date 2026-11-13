"use client";

import { Box, Typography } from "@mui/material";
import { CourseEpisode } from "../api";

import {
  playerWrapperStyles,
  playerVideoStyles,
  playerInfoBarStyles,
  playerTitleStyles,
  playerBadgeStyles,
} from "./CourseWatchPlayer.styles";

interface CourseWatchPlayerProps {
  episode: CourseEpisode;
  courseTitle: string;
  episodeIndex: number;
  totalEpisodes: number;
}

const toFa = (n: number) =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export function CourseWatchPlayer({
  episode,
  courseTitle,
  episodeIndex,
  totalEpisodes,
}: CourseWatchPlayerProps) {
  return (
    <Box sx={playerWrapperStyles}>
      <Box
        component="video"
        key={episode.id}
        controls
        controlsList="nodownload"
        playsInline
        autoPlay
        src={episode.mediaUrl}
        sx={playerVideoStyles}
      />

      <Box sx={playerInfoBarStyles}>
        <Typography variant="boldBase" sx={playerTitleStyles}>
          {courseTitle} — {episode.title}
        </Typography>
        <Box sx={playerBadgeStyles}>
          {toFa(episodeIndex + 1)} / {toFa(totalEpisodes)}
        </Box>
      </Box>
    </Box>
  );
}