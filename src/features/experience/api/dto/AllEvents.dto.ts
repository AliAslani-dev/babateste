export interface EventImageDto {
  id: number;
  event_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface EventDto {
  id: number;
  title: string;
  thumbnail: string | null;
  start_time: string;
  end_time: string;
  location: string;
  capacity: number;
  used_capacity: number;
  status: string;
  price_in_irt: number;
  price_text: string;
  event_type: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  created_at: string;
  updated_at: string;
  images: EventImageDto[];
  filter_tags:string;
  is_fave:boolean;

}

export interface GetEventsResponseDto {
  success: boolean;
  status: number;
  message: string;
  data: {
    items: EventDto[];
  };
}
