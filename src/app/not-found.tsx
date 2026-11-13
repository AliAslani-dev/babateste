"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Typography, Box } from "@mui/material";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function UnderConstructionPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
      }}
    >
      <Typography variant="h1" align="center">
         داریم می سازیم
      </Typography>

      <Box sx={{ width: 300, height: 300 }}>
        <DotLottieReact
          src="/animations/UnderConstruction.json"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Button  onClick={() => router.back()}>برگرد</Button>
    </Box>
  );
}
