import { createMapper } from "@/lib/api";
import type { TeacherDTO } from "../dto";
import type { Teacher } from "../model";

export const toTeacher = createMapper<TeacherDTO, Teacher>((dto) => ({
  id: dto.id,
  fullName: dto.fullname,
  profileImage: dto.profile_picture_url,
  descriptions: dto.descriptions,
}));