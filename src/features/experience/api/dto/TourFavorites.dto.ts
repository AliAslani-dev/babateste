
export interface TourFavoriteImageDto {
  id: number;
  tour_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface TourFavoriteDto {
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
  tour_type: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  created_at: string;
  updated_at: string;
  filter_tags: string | null;
  images: TourFavoriteImageDto[];
  is_fave: boolean;
}

export interface TourFavoritesResponseDto {
  items: TourFavoriteDto[];
}

export interface TourFavoriteActionResponseDto {
  // پاسخ عملیات افزودن و حذف
  data: unknown[];
}
