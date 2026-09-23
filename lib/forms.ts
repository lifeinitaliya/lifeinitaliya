/** Shared result shape for form Server Actions. */
export interface FormState<Field extends string = string> {
  /**
   * `unavailable` means the input was valid but the backend that would
   * receive it (email, Supabase) isn't connected yet — nothing was sent.
   */
  status: "idle" | "error" | "success" | "unavailable";
  message: string;
  fieldErrors?: Partial<Record<Field, string>>;
  /** Echoed text values so the form keeps its input after submitting. */
  values?: Partial<Record<Field, string>>;
}

export const idleState: FormState = { status: "idle", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (value: string) => EMAIL_PATTERN.test(value) && value.length <= 254;

export const isHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export const text = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();

export const wordCount = (value: string) => value.split(/\s+/).filter(Boolean).length;
