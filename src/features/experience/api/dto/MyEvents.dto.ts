export interface MyEventImageDTO {
  id: number;
  event_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface MyEventDTO {
  id: number;
  title: string;
  thumbnail: string;
  start_time: string;
  end_time: string;
  location: string;
  capacity: number;
  used_capacity: number;
  status: string;
  price_in_irt: number;
  price_text: string;
  event_type: string;
  descriptions: string;
  plans: string;
  services: string;
  created_at: string;
  updated_at: string;
  images?: MyEventImageDTO[];
}

export interface MyEventsResponseDTO {
  success: boolean;
  status: number;
  message: string;
  data: {
    items: MyEventDTO[];
  };
}
