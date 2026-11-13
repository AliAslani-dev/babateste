export interface DoctorFavoriteImage {
  id: number;
  DoctorId: number;
  imageUrl: string;
}

export interface DoctorFavorite {
  id: number;
  title: string;
  thumbnail: string | null;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  usedCapacity: number;
  status: string;
  priceInIrt: string;
  priceText: string;
  DoctorType: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  filterTags: string | null;
  images: DoctorFavoriteImage[];
  isFave: boolean;
  name: string;
  profilePictureUrl: string | null;
  specialityText: string | null;
}
