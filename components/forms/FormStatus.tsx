import { CircleAlert, Info } from "lucide-react";

import type { FormState } from "@/lib/forms";
import { cn } from "@/lib/utils";

/** Announces the result of a form submission to all users. */
export function FormStatus({ state }: { state: FormState }) {
  return (
    <div role="status" aria-live="polite">
      {state.status !== "idle" && state.message && (
        <p
          className={cn(
            "flex gap-3 rounded-lg border p-4 text-sm leading-relaxed",
            state.status === "error"
              ? "border-destructive/30 bg-destructive/5 text-destructive"
              : "border-primary/20 bg-accent text-accent-foreground"
          )}
        >
          {state.status === "error" ? (
            <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
          ) : (
            <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
          )}
          {state.message}
        </p>
      )}
    </div>
  );
}
