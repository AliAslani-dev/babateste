"use client";

import { forwardRef, useState } from "react";
import { Box } from "@mui/material";

import Input from "../Input";
import type { SearchInputProps } from "../Input.types";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    { onClear, onSearch, value, onChange, ...rest },
    ref
  ) {
    const [internalValue, setInternalValue] = useState("");
    const currentValue = value ?? internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) setInternalValue(e.target.value);
      onChange?.(e);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue("");
      } else {
        // کنترل‌شده: باید به والد بگیم مقدار خالی شد
        onChange?.({
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>);
      }
      onClear?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.(String(currentValue));
      }
    };

    return (
      <Input
        ref={ref}
        sx={{
          marginTop : "5px"
        }}
        type="search"
        placeholder="جستجو..."
        startIcon={<SearchIcon />}
        endIcon={
          currentValue ? (
            <Box
              component="button"
              type="button"
              onClick={handleClear}
              aria-label="پاک کردن"
              sx={{
                background: "transparent",
                border: 0,
                padding: 0,
                cursor: "pointer",
                color: "inherit",
                display: "flex",
                alignItems: "center",
          
              }}
            >
              <ClearIcon />
            </Box>
          ) : null
        }
        value={value}
        defaultValue={value === undefined ? internalValue : undefined}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  }
);

export default SearchInput;