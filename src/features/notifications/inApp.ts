export interface InAppPayload {
  id: string;
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

export function showInAppNotification(payload: InAppPayload) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("nova:in-app-notification", { detail: payload })
  );
}