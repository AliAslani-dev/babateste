export interface EventImage {
  id: number;
  eventId: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: number;
  title: string;
  thumbnail: string | null;
  startTime: string;
  endTime: string;
  location: string;
  capacity: number;
  usedCapacity: number;
  status: string;
  priceInIrt: number;
  priceText: string;
  eventType: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  createdAt: string;
  updatedAt: string;
  images: EventImage[];
  filterTag:string;
  is_fave:boolean;
}

export interface EventsList {
  items: Event[];
}
