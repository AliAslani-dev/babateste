import type { RouteTitles } from "./navbarUp.types";

export const routeTitles: RouteTitles = {
  //health
  "/health": "سلامت",
  "/health/my-medicine": "داروهای من",
  "/health/medicine": "افزودن دارو",
  "/health/blood-pressure": "ثبت فشارخون",
  "/health/doctors-list": "پزشکان",
  "/health/doctors-list/doctor-detail/[id]/appointment": "انتخاب نوبت",
  "/health/doctors-list/doctor-detail/[id]/appointment/confirm": "انتخاب نوبت",
  "/health/doctors-list/doctor-detail/[id]/appointment/appointment-success":
    "انتخاب نوبت",
  //mentoring
  "/mentoring": "منتورینگ",
  "/mentoring/cooperation-request/city-picker": "جستجوی شهر",
  "/mentoring/cooperation-request/expertise-picker": "انتخاب حوزه تخصص",
  "/mentoring/cooperation-request": "درخواست همکاری",
  "/mentoring/request-consultation": "درخواست مشاوره",
  "/mentoring/request-consultation/mentor-profile/[id]/appointment":
    "درخواست مشاوره",

  //education
  "/education": "آموزش",
  "/education/course-list": "همه دوره ها",

  //experience
  "/experience": "سفر و تجربه",
  "/experience/tours-list": "سفر",
  "/experience/events-list": "رویداد",
  "/experience/tours-list/tour-detail/[id]/registration": "ثبت‌نام تور",
  "/experience/tours-list/tour-detail/[id]/registration-review": "ثبت‌نام تور",
  "/experience/tours-list/tour-detail/[id]/registration-success": "ثبت نام تور",
  "/experience/events-list/event-detail/[id]/registration": "ثبت‌نام رویداد",
  "/experience/events-list/event-detail/[id]/registration-review":
    "ثبت‌نام رویداد",
  "/experience/events-list/event-detail/[id]/registration-success":
    "ثبت نام رویداد",
  "/experience/my-plans": "برنامه های من",

  //profile
  "/profile/personal-info": "اطلاعات شخصی",
  //profile
  "/profile/settings": "تنظیمات",

  //profile
  "/profile/privacy": "حریم خصوصی",

"/profile/favorites":"موارد ذخیره شده",
    //profile
  "/profile/notifications": "اعلان ها",

  //profile
  "/services": "خدمات",

  //notifications
  "/notifications": "اعلان",
  //my courses
  "/education/my-courses": "دوره های من",
};
