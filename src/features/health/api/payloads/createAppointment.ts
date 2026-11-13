import type { SessionType } from "../model";

export interface CreateCommentPayload {
  comment_text: string;
}

export interface CreateAppointmentPayload {
  start_time: string;
  end_time: string;
  descriptions: string | null;
  session_type: SessionType;
}