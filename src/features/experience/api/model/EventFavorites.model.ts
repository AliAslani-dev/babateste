
export interface EventFavoriteImage {
  id: number;
  eventId: number;
  imageUrl: string;
}

export interface EventFavorite {
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
  eventType: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  filterTags: string | null;
  images: EventFavoriteImage[];
  isFave: boolean;
}
