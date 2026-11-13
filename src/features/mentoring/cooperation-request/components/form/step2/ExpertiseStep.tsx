"use client";

import CooperationStepDraft from "../CooperationStepDraft";

import { useState, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { Box, CircularProgress, Typography } from "@mui/material";

import {
  Form,
  FormField,
  FormNumberInput,
  FormTextarea,
  FormSubmitButton,
} from "@/components/ui/common/Form";
import { expertiseStepSchema, type ExpertiseStepFormValues } from "./expertiseStep.schema";
import PickerBottomSheet from "../../picker-bottom-sheet/PickerBottomSheet";
import { useExpertiseTags } from "@/features/mentoring/api";
import type { ExpertiseTag } from "@/features/mentoring/api";
import {
  formSx,
  headerWrapperSx,
  headerTitleSx,
  headerSubtitleSx,
  fieldsWrapperSx,
  fieldLabelSx,
  expertiseTriggerSx,
  expertiseTriggerIconSx,
  expertiseErrorSx,
  skillsWrapperSx,
  skillsInputSx,
  skillsTagsRowSx,
  skillTagSx,
  skillTagRemoveSx,
  skillsAddButtonSx,
  skillsErrorSx,
  bioCounterSx,
  submitWrapperSx,
} from "./ExpertiseStep.styles";

interface ExpertiseStepProps {
  onNext: (data: ExpertiseStepFormValues) => void;
  defaultValues?: Partial<ExpertiseStepFormValues>;
}

const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ExpertiseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 14c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Skills free-text tag input with + button ─────────────────────────────────

function SkillsTagInput({
  value,
  onChange,
  hasError,
  error,
  touched,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  hasError: boolean;
  error?: string;
  touched: boolean;
}) {
  const [inputVal, setInputVal] = useState("");

  const addTag = useCallback(() => {
    const trimmed = inputVal.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInputVal("");
  }, [inputVal, value, onChange]);

  const removeTag = (tag: string) => onChange(value.filter((t) => t !== tag));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !inputVal && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <Box>
      <Box sx={skillsWrapperSx(hasError)}>
        <Box
          component="button"
          type="button"
          onClick={addTag}
          sx={skillsAddButtonSx}
          aria-label="افزودن مهارت"
        >
          <PlusIcon />
        </Box>
        <Box
          component="input"
          value={inputVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="مهارت‌ها را وارد کنید"
          sx={skillsInputSx}
        />
      </Box>

      {value.length > 0 && (
        <Box sx={skillsTagsRowSx}>
          {value.map((tag) => (
            <Box key={tag} sx={skillTagSx}>
              <Box
                component="span"
                sx={skillTagRemoveSx}
                onClick={() => removeTag(tag)}
                aria-label={`حذف ${tag}`}
              >
                ×
              </Box>
              <span>{tag}</span>
            </Box>
          ))}
        </Box>
      )}

      {hasError && touched && error && (
        <Typography component="span" sx={skillsErrorSx}>
          {error}
        </Typography>
      )}
    </Box>
  );
}

// ─── Inner fields ─────────────────────────────────────────────────────────────

function ExpertiseFields({ tags }: { tags: ExpertiseTag[] }) {
  const [expertiseSheetOpen, setExpertiseSheetOpen] = useState(false);
  const { setValue, watch } = useFormContext<ExpertiseStepFormValues>();
  const bio = watch("bio") ?? "";

  const handleExpertiseSelect = (title: string) => {
    setValue("expertise", title, { shouldValidate: true, shouldDirty: true });
  };

  const options = tags.map((t) => ({ value: t.title, label: t.title }));

  return (
    <>
      <Box sx={fieldsWrapperSx}>
        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            میزان سابقه کاری
          </Typography>
          <FormNumberInput<ExpertiseStepFormValues>
            name="yearsOfExperience"
            persianDigits
            placeholder="مثال: ۱۵ سال"
            min={0}
            max={60}
            fullWidth
          />
        </Box>

        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            حوزه تخصص
          </Typography>
          <FormField<ExpertiseStepFormValues>
            name="expertise"
            render={({ field, error, invalid, touched }) => {
              const hasError = Boolean(invalid && touched);
              const selectedTitle = field.value as string;
              return (
                <Box>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setExpertiseSheetOpen(true)}
                    sx={expertiseTriggerSx(hasError, Boolean(selectedTitle))}
                  >
                    <span>{selectedTitle || "انتخاب کنید"}</span>
                    <Box component="span" sx={expertiseTriggerIconSx}>
                      <ChevronIcon />
                    </Box>
                  </Box>
                  {hasError && error && (
                    <Typography component="span" sx={expertiseErrorSx}>
                      {error}
                    </Typography>
                  )}
                </Box>
              );
            }}
          />
        </Box>

        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            مهارت و موضوعات برای منتورینگ
          </Typography>
          <FormField<ExpertiseStepFormValues>
            name="skills"
            render={({ field, error, invalid, touched }) => (
              <SkillsTagInput
                value={(field.value as string[]) ?? []}
                onChange={field.onChange}
                hasError={Boolean(invalid && touched)}
                error={error}
                touched={touched}
              />
            )}
          />
        </Box>

        <Box>
          <Typography variant="demiboldSm" component="label" sx={fieldLabelSx}>
            توضیح تجربه
          </Typography>
          <FormTextarea<ExpertiseStepFormValues>
            name="bio"
            placeholder="خلاصه‌ای از سوابق و تجربیات خود را بنویسید...."
            fullWidth
            minRows={5}
            maxLength={1500}
          />
          <Typography component="span" sx={bioCounterSx}>
            {bio.length} / ۱۵۰۰
          </Typography>
        </Box>
      </Box>

      <PickerBottomSheet
        open={expertiseSheetOpen}
        onClose={() => setExpertiseSheetOpen(false)}
        onSelect={handleExpertiseSelect}
        options={options}
        popularOptions={[]}
        searchPlaceholder="جستجوی حوزه تخصص…"
        popularSectionTitle=""
        allSectionTitle="همه حوزه‌ها"
        emptyText="حوزه‌ای یافت نشد"
        rowIcon={<ExpertiseIcon />}
        title="انتخاب حوزه تخصص"
      />
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ExpertiseStep({ onNext, defaultValues }: ExpertiseStepProps) {
  const { data: tags = [], isLoading } = useExpertiseTags();

  return (
    <Form<ExpertiseStepFormValues>
      schema={expertiseStepSchema}
      onSubmit={onNext}
      defaultValues={{
        yearsOfExperience: undefined as unknown as number,
        expertise: "",
        skills: [],
        bio: "",
        ...defaultValues,
      }}
      spacing={0}
      sx={formSx}
    >
      <CooperationStepDraft step="step2" />
      <Box sx={headerWrapperSx}>
        <Typography variant="boldLg" component="h2" sx={headerTitleSx}>
          تجربه و تخصص
        </Typography>
        <Typography variant="regularSm" component="p" sx={headerSubtitleSx}>
          لطفا اطلاعات مربوط سابقه کاری و حوزه‌ی تخصصی خود را وارد کنید.
        </Typography>
      </Box>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress size={28} />
        </Box>
      ) : (
        <ExpertiseFields tags={tags} />
      )}

      <Box sx={submitWrapperSx}>
        <FormSubmitButton
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
          disableWhenInvalid
        >
          مرحله بعدی
        </FormSubmitButton>
      </Box>
    </Form>
  );
}
