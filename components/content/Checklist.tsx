"use client";

import { useId, useMemo, useSyncExternalStore } from "react";
import { Check } from "lucide-react";

import { t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface ChecklistProps {
  /** Storage key: ticked items are remembered in this browser. */
  id: string;
  groups: { title: string; items: string[] }[];
  locale?: Locale;
}

// Ticked items live in localStorage, falling back to memory when storage is
// unavailable (private mode, blocked site data).
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return memory.get(key) ?? null;
  }
}

function write(key: string, keys: string[]) {
  try {
    if (keys.length) localStorage.setItem(key, JSON.stringify(keys));
    else localStorage.removeItem(key);
  } catch {
    memory.set(key, JSON.stringify(keys));
  }
  listeners.forEach((listener) => listener());
}

/** Interactive planning checklist; progress is saved on this device. */
export function Checklist({ id, groups, locale = "en" }: ChecklistProps) {
  const dict = t(locale);
  const baseId = useId();
  const storageKey = `bsi-checklist:${id}`;
  const raw = useSyncExternalStore(
    subscribe,
    () => read(storageKey),
    () => null
  );
  const done = useMemo(() => {
    const valid = new Set(groups.flatMap((g) => g.items.map((item) => `${g.title}::${item}`)));
    try {
      const saved: unknown = JSON.parse(raw ?? "[]");
      return new Set(Array.isArray(saved) ? saved.filter((k) => valid.has(k)) : []);
    } catch {
      return new Set<string>();
    }
  }, [raw, groups]);
  const total = groups.reduce((sum, g) => sum + g.items.length, 0);

  const toggle = (key: string) => {
    const next = new Set(done);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    write(storageKey, [...next]);
  };

  return (
    <div className="!mt-8 border border-border bg-card">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
        <p className="text-sm font-semibold" aria-live="polite">
          {dict.checklistDone(done.size, total)}
        </p>
        <button
          type="button"
          onClick={() => write(storageKey, [])}
          disabled={done.size === 0}
          className="rounded-sm text-sm font-medium text-primary hover:underline disabled:cursor-default disabled:text-muted-foreground disabled:no-underline"
        >
          {dict.reset}
        </button>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-3">
        {groups.map((group) => (
          <fieldset key={group.title} className="bg-card px-5 py-5 sm:px-6">
            <legend className="float-left mb-3 w-full text-[11px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
              {group.title}
            </legend>
            <ul className="clear-left space-y-2.5">
              {group.items.map((item) => {
                const key = `${group.title}::${item}`;
                const id = `${baseId}-${key}`;
                const checked = done.has(key);
                return (
                  <li key={key}>
                    <label htmlFor={id} className="relative flex cursor-pointer items-start gap-3 text-[15px] leading-snug">
                      <input
                        id={id}
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(key)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden
                        className={cn(
                          "mt-0.5 flex size-[18px] shrink-0 items-center justify-center border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
                          checked ? "border-primary bg-primary text-white" : "border-foreground/40 bg-background"
                        )}
                      >
                        {checked && <Check className="size-3" strokeWidth={3} />}
                      </span>
                      <span className={cn(checked && "text-muted-foreground line-through")}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
