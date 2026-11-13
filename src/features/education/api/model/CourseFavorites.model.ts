export interface CourseFavoriteImage {
  id: number;
  CourseId: number;
  imageUrl: string;
}

export interface CourseFavorite {
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
  CourseType: string;
  descriptions: string | null;
  plans: string | null;
  services: string | null;
  filterTags: string | null;
  images: CourseFavoriteImage[];
  isFave: boolean;
}
