import {
  Building2,
  CalendarDays,
  CloudSun,
  Compass,
  Landmark,
  Map,
  Plane,
  Sparkles,
  TrainFront,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import type { CategorySlug } from "@/lib/types";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  travel: Plane,
  cities: Building2,
  food: UtensilsCrossed,
  culture: Landmark,
  events: CalendarDays,
  "things-to-do": Compass,
  weather: CloudSun,
  transport: TrainFront,
  people: Users,
  lifestyle: Sparkles,
  tours: Map,
};
