
export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export interface CreateNotificationPayload {
  id?: string;
  title: string;
  message: string;
  createdAt:string;
  isRead:boolean;
}
