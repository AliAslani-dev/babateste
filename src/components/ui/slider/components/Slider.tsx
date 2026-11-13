"use client";

import { Box } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SliderProps } from "./Slider.types";

import {
  sliderStyles,
  sliderViewportStyles,
  sliderTrackStyles,
  sliderItemStyles,
  sliderControlsStyles,
  sliderPaginationInsideStyles,
  sliderPaginationOutsideStyles,
  sliderTrackWrapperStyles,
} from "./Slider.styles";

import SliderArrow from "./SliderArrow";
import SliderPagination from "./SliderPagination";

export default function Slider<T>({
  items,
  renderSlide,
  showArrows = false,
  showPagination = true,
  paginationVariant = "small",
  paginationPosition = "inside",
  defaultIndex = 0,
  activeIndex: controlledIndex,
  onIndexChange,
  loop = false,
  slidesPerView = 1,
  slidesToScroll = slidesPerView,
  swipeDirection = "ltr",
  autoPlay = false,
  autoPlayInterval = 4000,
}: SliderProps<T>) {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef<number | null>(null);
  const isControlled = controlledIndex !== undefined;

  const activeIndex = isControlled ? controlledIndex : internalIndex;
  const totalPages = Math.max(
    1,
    Math.ceil((items.length - slidesPerView) / slidesToScroll) + 1,
  );

  const canGoPrevious = loop || activeIndex > 0;

  const canGoNext = loop || activeIndex < totalPages - 1;
  const setIndex = useCallback(
    (index: number) => {
      if (items.length === 0) return;

      let nextIndex = index;

      if (loop) {
        if (nextIndex < 0) {
          nextIndex = totalPages - 1;
        }

        if (nextIndex >= totalPages) {
          nextIndex = 0;
        }
      } else {
        nextIndex = Math.max(0, Math.min(nextIndex, totalPages - 1));
      }

      if (!isControlled) {
        setInternalIndex(nextIndex);
      }

      onIndexChange?.(nextIndex);
    },
    [items.length, loop, isControlled, onIndexChange, totalPages],
  );

  const handlePrevious = () => {
    setIndex(activeIndex - 1);
  };

  const handleNext = () => {
    setIndex(activeIndex + 1);
  };

  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    dragCurrentX.current = clientX;
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (dragStartX.current === null) return;

    dragCurrentX.current = clientX;
  };

  const handleDragEnd = () => {
    if (dragStartX.current === null || dragCurrentX.current === null) {
      return;
    }

    const distance = dragCurrentX.current - dragStartX.current;

    const threshold = 50;

    if (Math.abs(distance) >= threshold) {
      const swipedNext =
        swipeDirection === "rtl" ? distance > 0 : distance < 0;

      if (swipedNext) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    dragStartX.current = null;
    dragCurrentX.current = null;
    setIsDragging(false);
  };

  useEffect(() => {
    if (items.length === 0) return;

    if (activeIndex >= totalPages) {
      setIndex(totalPages - 1);
    }
  }, [activeIndex, totalPages, setIndex]);
  useEffect(() => {
    if (!autoPlay || items.length <= slidesPerView) {
      return;
    }

    const intervalId = setInterval(() => {
      setIndex(activeIndex + 1);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [
    autoPlay,
    autoPlayInterval,
    activeIndex,
    items.length,
    slidesPerView,
    setIndex,
  ]);
  if (items.length === 0) {
    return null;
  }

  const slideWidth = 100 / slidesPerView;

  // RTL: با direction: rtl روی ترک، translateX مثبت باعث می‌شود
  // اسلاید بعدی از سمت چپ وارد شود و قبلی به راست برود
  const slideOffset =
    slidesToScroll === slidesPerView
      ? slideWidth
      : slideWidth * slidesToScroll;
  const trackTransform = `translateX(${activeIndex * slideOffset}%)`;
  return (
    <Box sx={sliderStyles}>
      <Box sx={sliderViewportStyles}>
        <Box
          sx={{
            ...sliderTrackWrapperStyles,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={(event) => {
            handleDragStart(event.clientX);
          }}
          onMouseMove={(event) => {
            if (isDragging) {
              handleDragMove(event.clientX);
            }
          }}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => {
            if (isDragging) {
              handleDragEnd();
            }
          }}
          onTouchStart={(event) => {
            handleDragStart(event.touches[0].clientX);
          }}
          onTouchMove={(event) => {
            handleDragMove(event.touches[0].clientX);
          }}
          onTouchEnd={handleDragEnd}
        >
          <Box
            sx={{
              ...sliderTrackStyles,
              transform: trackTransform,
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  ...sliderItemStyles,
                  width: slidesPerView === 1 ? "100%" : "auto",
                  minWidth: slidesPerView === 1 ? "100%" : "auto",
                  maxWidth: slidesPerView === 1 ? "100%" : "none",
                  flex: slidesPerView === 1 ? "0 0 100%" : "0 0 auto",
                }}
              >
                {renderSlide(item, index)}
              </Box>
            ))}
          </Box>
        </Box>

        {showPagination && paginationPosition === "inside" && (
          <Box sx={sliderPaginationInsideStyles}>
            <SliderPagination
              count={totalPages}
              activeIndex={activeIndex}
              variant={paginationVariant}
              onChange={setIndex}
            />
          </Box>
        )}
      </Box>

      {showArrows && (
        <Box sx={sliderControlsStyles}>
          <SliderArrow
            direction="next"
            disabled={!canGoNext}
            onClick={handleNext}
          />

          <SliderArrow
            direction="previous"
            disabled={!canGoPrevious}
            onClick={handlePrevious}
          />
        </Box>
      )}

      {showPagination && paginationPosition === "outside" && (
        <Box sx={sliderPaginationOutsideStyles}>
          <SliderPagination
            count={totalPages}
            activeIndex={activeIndex}
            variant={paginationVariant}
            onChange={setIndex}
          />
        </Box>
      )}
    </Box>
  );
}
