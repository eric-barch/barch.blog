import type { CollectionEntry } from "astro:content";
import publishedFilter from "./publishedFilter";

const getSortedEntries = <T>(
  entries: CollectionEntry<"blog" | "builds">[]
): T[] => {
  if (!entries) return [] as T[];

  const publishedEntries = entries.filter(publishedFilter);

  const sortedEntries = publishedEntries.sort((a, b) => {
    const aDate = new Date(a.data.modDatetime ?? a.data.pubDatetime);
    const bDate = new Date(b.data.modDatetime ?? b.data.pubDatetime);
    return bDate.getTime() - aDate.getTime();
  });

  return sortedEntries as unknown as T[];
};

export default getSortedEntries;
