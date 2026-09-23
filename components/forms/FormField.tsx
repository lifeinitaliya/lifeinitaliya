import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  /** Receives the ids for aria-describedby so the control can reference hint and error. */
  children: (describedBy: string | undefined) => ReactNode;
}

export function FormField({
  id,
  label,
  optional,
  hint,
  error,
  className,
  children,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-[15px]">
        {label}
        {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children(describedBy)}
      {hint && (
        <p id={hintId} className="text-[13px] text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-[13px] font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/** Shared sizing for inputs on the public forms (the shadcn default is compact). */
export const fieldClass = "h-11 rounded-lg bg-card px-3.5 text-base md:text-[15px]";
export const textareaClass = "min-h-36 rounded-lg bg-card px-3.5 py-3 text-base leading-relaxed md:text-[15px]";
