
export interface EventFavoriteImageDto {
  id: number;
  event_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface EventFavoriteDto {
  id: number;
  title: string;
  thumbnail: string | null;
  start_time: string;
  end_time: string;
  location: string;
  capacity: number;
  used_capacity: number;
  status: string;
  price_in_irt: string;
  price_text: string;
  event_type: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  created_at: string;
  updated_at: string;
  filter_tags: string | null;
  images: EventFavoriteImageDto[];
  is_fave: boolean;
}

export interface EventFavoritesResponseDto {
  items: EventFavoriteDto[];
}

export interface EventFavoriteActionResponseDto {
  // پاسخ عملیات افزودن و حذف
  data: unknown[];
}
