
export interface MyEventImage {
  id: number;
  eventId: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyEvent {
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
  createdAt: string;
  updatedAt: string;
  images: MyEventImage[];
}

export interface MyEvents {
  items: MyEvent[];
}
