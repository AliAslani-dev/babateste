export interface AddMedicinePayload {
  title: string;
  amount: string;
  should_take_at_morning: boolean;
  should_take_at_noon: boolean;
  should_take_at_night: boolean;
  start_date: string;
  end_date?: string;
  reminder: boolean;
  descriptions: string;
}
