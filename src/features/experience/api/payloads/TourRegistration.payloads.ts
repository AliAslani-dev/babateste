export interface ParticipatorPayload {
  name: string;
  phone_number: string;
}

export interface SignupPayload {
  tickets_count: number;
  participators?: ParticipatorPayload[];
}

export interface SignupVariables {
  eventId: number;
  payload: SignupPayload;
}
