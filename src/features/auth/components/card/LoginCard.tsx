"use client";

import { Box, Typography } from "@mui/material";

import { FormInput, FormSubmitButton } from "@/components/ui/common/Form";
import {
  loginCardSx,
  loginCardTitleSx,
  loginCardDescriptionSx,
  loginCardInputSx,
} from "../../styles";
import type { LoginFormValues } from "../../schemas/login.schema";

export default function LoginCard() {
  return (
    <Box sx={loginCardSx}>
      <Typography variant="boldLg" sx={loginCardTitleSx}>
        خوش آمدید!
      </Typography>

      <Typography variant="regularSm" sx={loginCardDescriptionSx}>
        برای ورود، لطفاً شماره موبایل خود را وارد کنید.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <FormInput<LoginFormValues>
          name="phone"
          placeholder="شماره موبایل"
          type="text"
          inputMode="numeric"
          persianDigits
          dir="ltr"
          autoComplete="tel"
          fullWidth
          sx={{
            ...loginCardInputSx,
            "& .MuiFormHelperText-root": {
              minHeight: "20px",
              marginTop: "4px",
              marginInline: 0,
            },
          }}
        />

        <FormSubmitButton
          color="primary"
          appearance="solid"
          size="lg"
          shape="pill"
          fullWidth
        >
          ادامه
        </FormSubmitButton>
      </Box>
    </Box>
  );
}
