"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

import { FilterBar } from "@/components/ui/common/FilterBar";

import PlanListGrid from "./components/PlansListGrid";
import { useFilteredPlans} from "./hooks/useFilteredPlans";
import { Plan_CHIPS, ALL_CHIP_ID } from "./types/plans.types";

export default function PlansListPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [activeChips, setActiveChips] = useState<string[]>([ALL_CHIP_ID]);

  const {
    Plans: filteredPlans,
    isLoading,
    isError,
    refetch,
  } = useFilteredPlans({
    search,
    activeChipIds: activeChips,
    allChipId: ALL_CHIP_ID,
  });

  const handlePlanClick = (planId: string) => {
    router.push(`/experience/my-plans/plan-detail/${planId}`);
  };

  return (
    <Box>
      <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        onSearchSubmit={(value) => console.log("search:", value)}
        chips={Plan_CHIPS}
        activeChipIds={activeChips}
        onChipChange={setActiveChips}
        allChipId={ALL_CHIP_ID}
        onFilterClick={() => console.log("open filter")}
        onSortClick={() => console.log("open sort")}
      />

      <PlanListGrid
        plans={filteredPlans}
        onBookmarkClick={(id) => console.log("bookmark:", id)}
        onCardClick={handlePlanClick}
      />
    </Box>
  );
}
