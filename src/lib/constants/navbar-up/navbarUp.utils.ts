import { routeTitles } from "./navbarUp.data";

export function getRouteTitle(pathname: string): string {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  // مسیرهای داینامیک ثبت‌نام تور
  let dynamicPath = normalizedPath.replace(
    /^(\/experience\/tours-list\/tour-detail)\/[^/]+(\/registration(?:-review|-success)?)$/,
    "$1/[id]$2",
  );

  // مسیرهای داینامیک مشاوره منتور
  dynamicPath = dynamicPath.replace(
    /^(\/mentoring\/request-consultation\/mentor-profile)\/[^/]+(\/appointment)$/,
    "$1/[id]$2",
  );

  // مسیرهای داینامیک ثبت‌نام رویداد
  dynamicPath = dynamicPath.replace(
    /^(\/experience\/events-list\/event-detail)\/[^/]+(\/registration(?:-review|-success)?)$/,
    "$1/[id]$2",
  );
  // مسیرهای داینامیک نوبت پزشک
  dynamicPath = dynamicPath.replace(
    /^(\/health\/doctors-list\/doctor-detail)\/[^/]+(\/appointment(?:\/(?:confirm|appointment-success))?)$/,
    "$1/[id]$2",
  );

  // تطبیق مسیر داینامیک
  if (dynamicPath in routeTitles) {
    return routeTitles[dynamicPath as keyof typeof routeTitles];
  }

  // عنوان پیش‌فرض: آخرین بخش مسیر
  const pathSegments = normalizedPath.split("/").filter(Boolean);

  return pathSegments.at(-1) ?? "";
}
