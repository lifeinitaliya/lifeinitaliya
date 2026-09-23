"use client";

import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";

type Vote = "yes" | "no";

export function GuideFeedback() {
  // TODO: persist votes (e.g. a Supabase `guide_feedback` table) once the backend exists.
  const [vote, setVote] = useState<Vote | null>(null);

  return (
    <section
      aria-labelledby="feedback-title"
      className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <h2 id="feedback-title" className="text-lg font-semibold tracking-[-0.015em]">
        Was this guide useful?
      </h2>
      <div aria-live="polite">
        {vote ? (
          <p className="text-sm text-muted-foreground">
            Thanks for your feedback.
          </p>
        ) : (
          <div className="flex gap-2">
            {(["yes", "no"] as const).map((option) => (
              <Button
                key={option}
                variant="outline"
                size="lg"
                className="gap-2 px-4"
                onClick={() => setVote(option)}
              >
                {option === "yes" ? <ThumbsUp aria-hidden /> : <ThumbsDown aria-hidden />}
                {option === "yes" ? "Yes" : "No"}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
