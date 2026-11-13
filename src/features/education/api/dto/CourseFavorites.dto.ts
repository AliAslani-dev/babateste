export interface CourseFavoriteImageDto {
  id: number;
  Course_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface CourseFavoriteDto {
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
  Course_type: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  created_at: string;
  updated_at: string;
  filter_tags: string | null;
  images: CourseFavoriteImageDto[];
  is_fave: boolean;
  image_url?: string | null;
  short_descriptions?: string | null;
  total_hours?: number;
  total_learners?: number;
}

export interface CourseFavoritesResponseDto {
  items: CourseFavoriteDto[];
}

export interface CourseFavoriteActionResponseDto {
  // پاسخ عملیات افزودن و حذف
  data: unknown[];
}
