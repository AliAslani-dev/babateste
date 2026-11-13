export interface FreeTimeDTO {
  day_of_week: number;
  date: string;
  start_time: string;
  end_time: string;
  start_at: string;
  is_available: boolean;
}

export interface FreeTimesResponseDTO {
  free_times: FreeTimeDTO[];
}