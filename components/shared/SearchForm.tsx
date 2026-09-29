import Form from "next/form";
import { Search } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  id?: string;
  /** Route the GET form submits to. */
  action?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  /** Extra query params to preserve, e.g. an active category filter. */
  hiddenFields?: Record<string, string | undefined>;
  required?: boolean;
  submitLabel?: string;
  className?: string;
}

export function SearchForm({
  id = "site-search",
  action = routes.search,
  label = "Search Life in Italia",
  placeholder = "What do you want to learn today?",
  defaultValue,
  hiddenFields = {},
  required = true,
  submitLabel = "Search",
  className,
}: SearchFormProps) {
  return (
    <Form
      action={action}
      role="search"
      className={cn(
        "group/search relative flex w-full items-center rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.12)] transition-[border-color,box-shadow] focus-within:border-primary/60 focus-within:ring-4 focus-within:ring-primary/10",
        className
      )}
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {Object.entries(hiddenFields).map(([name, value]) =>
        value ? <input key={name} type="hidden" name={name} value={value} /> : null
      )}
      <Search
        aria-hidden
        className="pointer-events-none absolute left-4 size-5 text-muted-foreground sm:left-5"
      />
      <input
        id={id}
        name="q"
        type="search"
        required={required}
        autoComplete="off"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-14 w-full min-w-0 rounded-xl bg-transparent pr-3 pl-12 text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:outline-none sm:h-16 sm:pl-14 sm:text-[17px] [&::-webkit-search-cancel-button]:hidden"
      />
      <button
        type="submit"
        className={cn(
          buttonVariants({ size: "xl" }),
          "mr-2 hidden hover:bg-primary/90 sm:inline-flex"
        )}
      >
        {submitLabel}
      </button>
    </Form>
  );
}
