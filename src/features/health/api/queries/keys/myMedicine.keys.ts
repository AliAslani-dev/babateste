export const myMedicineKeys = {
  all: ["my-medicine"] as const,
  editing: () => [...myMedicineKeys.all, "editing"] as const,
  medications: () => [...myMedicineKeys.all, "medications"] as const,
  medicationsPage: (page: number) =>
    [...myMedicineKeys.medications(), page] as const,
};
