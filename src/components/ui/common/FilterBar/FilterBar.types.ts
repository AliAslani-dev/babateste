import type { MouseEvent } from "react";

export interface FilterChipItem {
  id: string;
  label: string;
}

export interface FilterBarProps {
  /* ── Search ── */
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: (value: string) => void;

  /* ── Chips (Multi Select) ── */
  chips: FilterChipItem[];
  activeChipIds?: string[];
  onChipChange?: (chipIds: string[]) => void;

  /**
   * id چیپ «همه» — اگه پاس داده بشه، منطق انتخاب همه پیاده‌سازی میشه.
   * یعنی وقتی این چیپ فعاله، بقیه غیرفعالن و برعکس.
   */
  allChipId?: string;

  /* ── Filter ── */
  filterLabel?: string;
  onFilterClick?: () => void;

  /* ── Sort ── */
  sortLabel?: string;
  onSortClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}