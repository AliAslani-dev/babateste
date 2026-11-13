
export interface TourFavoriteImage {
  id: number;
  tourId: number;
  imageUrl: string;
}

export interface TourFavorite {
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
  tourType: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  filterTags: string | null;
  images: TourFavoriteImage[];
  isFave: boolean;
}
