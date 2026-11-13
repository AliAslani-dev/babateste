
import { apiRequest } from "@/lib/api";

import { TOUR_ENDPOINTS } from "../endpoints/TourList.endpoint"
import type {
  TourListDataDTO,
  TourListMetaDTO,
} from "../dto/TourList.dto";

import {
  toTour,
  toTourPagination,
} from "../mappers/TourList.mapper";

import type { TourList } from "../model/TourList.model";

export const tourService = {
  async getTours(): Promise<TourList> {
    const response = await apiRequest<TourListDataDTO>({
      url: TOUR_ENDPOINTS.list,
      method: "GET",
    });

    // meta در نمونه API بیرون از data قرار دارد.
    const responseWithMeta = response as typeof response & {
      meta?: TourListMetaDTO;
    };

    return {
      items: response.data.items.map(toTour),
      pagination: responseWithMeta.meta
        ? toTourPagination(responseWithMeta.meta.pagination)
        : {
            currentPage: 1,
            perPage: response.data.items.length,
            total: response.data.items.length,
            lastPage: 1,
            hasMorePages: false,
          },
    };
  },
};
