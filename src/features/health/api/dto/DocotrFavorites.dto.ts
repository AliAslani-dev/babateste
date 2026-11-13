export interface DoctorFavoriteImageDto {
  id: number;
  Doctor_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface DoctorFavoriteDto {
  name: string;
  profile_picture_url: string | null;
  speciality_text: string | null;
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
  Doctor_type: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  created_at: string;
  updated_at: string;
  filter_tags: string | null;
  images: DoctorFavoriteImageDto[];
  is_fave: boolean;
}

export interface DoctorFavoritesResponseDto {
  items: DoctorFavoriteDto[];
}

export interface DoctorFavoriteActionResponseDto {
  // پاسخ عملیات افزودن و حذف
  data: unknown[];
}
