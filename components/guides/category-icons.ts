import {
  Cpu,
  GraduationCap,
  ListChecks,
  Plane,
  Sprout,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import type { CategorySlug } from "@/lib/types";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  travel: Plane,
  technology: Cpu,
  education: GraduationCap,
  lifestyle: Sprout,
  finance: Wallet,
  "how-to": ListChecks,
};
