// Session fee in Tomans (placeholder — replace with API value)
export const SESSION_FEE = 1_500_000;
export const WALLET_BALANCE = 1_500_000;
export const SESSION_DURATION_MINUTES = 60;

export const CONSULTATION_TYPE_LABEL: Record<string, string> = {
  online: "آنلاین",
  "in-person": "حضوری",
};

// Format a number as Persian price string: ۱٬۵۰۰٬۰۰۰ تومان
export const formatPrice = (amount: number): string =>
  `${amount.toLocaleString("fa-IR")} تومان`;
