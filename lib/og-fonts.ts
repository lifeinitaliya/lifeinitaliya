import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Inter weights used by generated images (icons, Open Graph). */
export async function loadBrandFonts() {
  const load = (weight: 600 | 800) =>
    readFile(join(process.cwd(), `assets/fonts/Inter-${weight}.woff`));

  const [semibold, extrabold] = await Promise.all([load(600), load(800)]);

  return [
    { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "Inter", data: extrabold, weight: 800 as const, style: "normal" as const },
  ];
}
