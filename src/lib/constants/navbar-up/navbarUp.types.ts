export type RouteTitleKey =
  //health
  | "/health"
  | "/health/my-medicine"
  | "/health/medicine"
  | "/health/blood-pressure"
  | "/health/doctors-list"
  | "/health/doctors-list/doctor-detail/[id]/appointment"
  | "/health/doctors-list/doctor-detail/[id]/appointment/confirm"
  | "/health/doctors-list/doctor-detail/[id]/appointment/appointment-success"
  //mentoring
  | "/mentoring"
  | "/mentoring/cooperation-request"
  | "/mentoring/cooperation-request/city-picker"
  | "/mentoring/cooperation-request/expertise-picker"
  | "/mentoring/request-consultation"
  | "/mentoring/request-consultation/mentor-profile/[id]/appointment"
  //education
  | "/education"
  | "/education/course-list"
  //experience
  | "/experience"
  | "/experience/tours-list"
  | "/experience/events-list"
  | "/experience/tours-list/tour-detail/[id]/registration"
  | "/experience/tours-list/tour-detail/[id]/registration-review"
  | "/experience/tours-list/tour-detail/[id]/registration-success"
  | "/experience/my-plans"
  | "/experience/events-list/event-detail/[id]/registration"
  | "/experience/events-list/event-detail/[id]/registration-review"
  | "/experience/events-list/event-detail/[id]/registration-success"
  //profile
  | "/profile/personal-info"
  |"/profile/favorites"

  //profile
  | "/profile/settings"

  //profile
  | "/profile/privacy"

  //profile
  | "/profile/notifications"

  //notifications
  | "/notifications"

  //notifications
  | "/services"

  //my courses
  | "/education/my-courses";

export type RouteTitles = Record<RouteTitleKey, string>;
