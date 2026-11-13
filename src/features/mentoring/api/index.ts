// ─── Service ───
export { mentorsService, cooperationRequestService } from "./services";

// ─── Query hooks ───
export {
  useMentors,
  useMentorDetail,
  useCreateSession,
  useExpertiseTags,
} from "./queries";

//mutation hooks
export {
  useSubmitCooperationRequest,
} from "./mutations";
export type{CooperationRequestInput}from "./mutations"
//keys
export { mentorsKeys, cooperationKeys } from "./queries";

// ─── Types ───
export type {
  Mentor,
  MentorsPage,
  PaginationMeta,
  MentorDetail,
  MentorExperience,
  MentorEducation,
  Session,
  CooperationRequest,
  ExpertiseTag,
} from "./model";
export type {
  CreateSessionRequestDTO,
  CooperationRequestResponseDTO,
  ExpertiseTagDTO,
  PaginationMetaDTO,
  ExpertiseTagsDataDTO,
  ExpertiseTagsResponseDTO,
} from "./dto";

//payload
export type { CooperationRequestPayload } from "./payloads";
