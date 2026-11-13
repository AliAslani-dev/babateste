export interface TourImageDTO {
  id: number;
  event_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}
export interface TourDTO {
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
  is_fave:boolean;
  images: TourImageDTO[];
}

export interface TourPaginationDTO {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  has_more_pages: boolean;
}

export interface TourListDataDTO {
  items: TourDTO[];
}

export interface TourListMetaDTO {
  pagination: TourPaginationDTO;
}
