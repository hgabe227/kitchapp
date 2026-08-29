export type Product = {
  id: string;
  name: string;
  category: string;
  unit: string;
  quantity: number;
  mandatory: number;
  location: string;
  supplier: string;
  avgDaily: number;
};

export type Movement = {
  id: string;
  productId: string;
  type: "in" | "out";
  quantity: number;
  date: string;
};

export type WasteEntry = {
  id: string;
  productId: string;
  quantity: number;
  reason: string;
  date: string;
};

export type Meal = {
  id: string;
  name: string;
  ingredients: string[];
  servings: number;
};

export type MealPlan = Record<string, string>;
