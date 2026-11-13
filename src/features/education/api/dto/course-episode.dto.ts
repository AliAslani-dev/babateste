export interface CourseEpisodeDTO {
  id: number;
  title: string;
  type: string;
  media_url: string;
}

export interface CourseEpisodesResponseDTO {
  episodes: CourseEpisodeDTO[];
}