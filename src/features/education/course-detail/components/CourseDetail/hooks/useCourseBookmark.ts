"use client";

import { useCallback, useEffect, useState } from "react";
import type { CourseDetail } from "@/features/education/api";

export interface BookmarkedCourse {
  pathname: string;
  course: CourseDetail;
}

const STORAGE_KEY = "bookmarked_courses";
const EVENT_NAME = "bookmarked_courses_changed";

function readAll(): BookmarkedCourse[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAll(list: BookmarkedCourse[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function useCourseBookmark(course: CourseDetail, pathname: string) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const check = () => {
      const list = readAll();
      setIsBookmarked(list.some((x) => x.pathname === pathname));
    };
    check();
    window.addEventListener(EVENT_NAME, check);
    window.addEventListener("storage", check);
    return () => {
      window.removeEventListener(EVENT_NAME, check);
      window.removeEventListener("storage", check);
    };
  }, [pathname]);

  const toggleBookmark = useCallback(() => {
    const list = readAll();
    const exists = list.some((x) => x.pathname === pathname);
    const next = exists
      ? list.filter((x) => x.pathname !== pathname)
      : [...list, { pathname, course }];
    writeAll(next);
  }, [course, pathname]);

  return { isBookmarked, toggleBookmark };
}

export function useBookmarkedCourses() {
  const [list, setList] = useState<BookmarkedCourse[]>([]);

  useEffect(() => {
    setList(readAll());
    const sync = () => setList(readAll());
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return list;
}

export { STORAGE_KEY as BOOKMARKS_STORAGE_KEY, EVENT_NAME as BOOKMARKS_EVENT };