import { createMapper } from "@/lib/api";
import type { CourseEpisodeDTO } from "../dto";
import type { CourseEpisode } from "../model";

export const toCourseEpisode = createMapper<CourseEpisodeDTO, CourseEpisode>(
  (dto) => ({
    id: dto.id,
    title: dto.title,
    type: dto.type,
    mediaUrl: dto.media_url,
  }),
);

export function toCourseEpisodes(dtos: CourseEpisodeDTO[]): CourseEpisode[] {
  return dtos.map((dto) => toCourseEpisode(dto));
}