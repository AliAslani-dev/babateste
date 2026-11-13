"use client";

import { Box, Typography } from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useFormContext, useWatch } from "react-hook-form";

import { WALLET_BALANCE, formatPrice } from "../constants/review.constants";
import type { ReviewFormValues } from "../schema/review.schema";
import type { PaymentMethod as PaymentMethodType } from "../types/review.types";
import {
  sectionSx,
  sectionTitleSx,
  paymentOptionsWrapperSx,
  paymentOptionSx,
  paymentOptionIconSx,
  radioCircleSx,
  radioInnerDotSx,
} from "./Review.styles";
import type { ReactNode } from "react";

interface Option {
  value: PaymentMethodType;
  label: string;
  subtitle?: string;
  icon: ReactNode;
}

const OPTIONS: Option[] = [
  {
    value: "online",
    label: "پرداخت آنلاین",
    subtitle: "درگاه امن بانکی",
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    value: "wallet",
    label: "استفاده از کیف پول",
    subtitle: `موجودی ${formatPrice(WALLET_BALANCE)}`,
    icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 20 }} />,
  },
];

export default function PaymentMethod() {
  const { setValue } = useFormContext<ReviewFormValues>();
  const selected = useWatch<ReviewFormValues, "paymentMethod">({ name: "paymentMethod" });

  return (
    <Box sx={sectionSx}>
      <Typography variant="demiboldSm" sx={sectionTitleSx}>
        شیوه پرداخت
      </Typography>

      <Box sx={paymentOptionsWrapperSx}>
        {OPTIONS.map((opt) => (
          <Box
            key={opt.value}
            sx={paymentOptionSx(selected === opt.value)}
            onClick={() => setValue("paymentMethod", opt.value, { shouldValidate: true })}
          >
            {/* Radio — right side in RTL */}
            <Box sx={radioCircleSx(selected === opt.value)}>
              {selected === opt.value && <Box sx={radioInnerDotSx} />}
            </Box>

            {/* Label + subtitle — fills space */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", textAlign: "right" }}>
              <Typography variant="demiboldSm">
                {opt.label}
              </Typography>
              {opt.subtitle && (
                <Typography variant="regularXs" color="text.secondary">
                  {opt.subtitle}
                </Typography>
              )}
            </Box>

            {/* Icon box — left side in RTL */}
            <Box sx={paymentOptionIconSx}>
              {opt.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
