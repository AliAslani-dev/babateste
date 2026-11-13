export interface TourImage {
  id: number;
  eventId: number;
  imageUrl: string;
}
export interface Tour {
  id: number;
  title: string;
  thumbnail: string;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  usedCapacity: number;
  status: string;
  priceInIrt: number;
  priceText: string;
  eventType: string;
  descriptions: string;
  plans: string;
  services: string;
  images: TourImage[];
  createdAt: string;
  updatedAt: string;
  is_fave:boolean;
}

export interface TourPagination {
  currentPage: number;
  perPage: number;
  total: number;
  lastPage: number;
  hasMorePages: boolean;
}

export interface TourList {
  items: Tour[];
  pagination: TourPagination;
}
