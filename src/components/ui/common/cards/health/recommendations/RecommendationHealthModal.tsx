"use client";

import Image from "next/image";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { semanticColors } from "@/theme";

export interface RecommendationHealthModalProps {
  open: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

export default function RecommendationHealthModal({
  open,
  onClose,
  image,
  title,
  description,
}: RecommendationHealthModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "24px",
            boxShadow: "none",
            border: `1px solid ${semanticColors.border.default}`,
            maxWidth: { xs: "100%", sm: 480 },
            margin: { xs: "16px", sm: 0 },
          },
        },
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: semanticColors.text.secondary,
          zIndex: 1400,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          p: { xs: 3, sm: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflow: "hidden",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: "100%",
            height: 96,
            borderRadius: 16,
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "center",
            maxWidth: { xs: 200, sm: 240 },
            bgcolor: "transparent",
          }}
        >
          <Image
            src={image}
            alt={title}
            width={240}
            height={96}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Box>

        {/* Title */}
        <Box sx={{ order: 2 }}>
          <Typography
            variant="demiboldSm"
            sx={{
              color: semanticColors.text.primary,
              textAlign: "right",
              mb: 1,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="regularXs"
            sx={{
              color: semanticColors.text.secondary,
              textAlign: "right",
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}