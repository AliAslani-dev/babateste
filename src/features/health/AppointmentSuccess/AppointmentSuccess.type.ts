export interface AppointmentSuccess {
  id: number;
  title: string;
  thumbnail: string;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  usedCapacity: number;
  priceText: string;
}