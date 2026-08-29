import { WasteEntry } from "@/types/kitchen";

export function totalWaste(entries: WasteEntry[]) {
  return entries.reduce(
    (total, entry) => total + entry.quantity,
    0
  );
}

export function productWaste(
  entries: WasteEntry[],
  productId: string
) {
  return entries
    .filter((entry) => entry.productId === productId)
    .reduce(
      (total, entry) => total + entry.quantity,
      0
    );
}
