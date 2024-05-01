import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  entry: CollectionEntry<"blog" | "builds">;
  activityTypeLabels?: boolean;
}

export default function Card({ entry, activityTypeLabels = false }: Props) {
  const { slug } = entry;
  const { title, pubDatetime, modDatetime, description } = entry.data;

  const headerProps = {
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  let href: string;
  let actitvityTypeLabel: string | undefined;

  switch (entry.collection) {
    case "blog":
      href = `/blog/${slug}`;
      actitvityTypeLabel = "blog";
      break;
    case "builds":
      href = `/builds/${slug}`;
      actitvityTypeLabel = "build";
      break;
    default:
      href = slug;
  }

  return (
    <li>
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <h3 {...headerProps}>{title}</h3>
      </a>
      <div className="flex flex-row items-center opacity-80">
        {activityTypeLabels && (
          <span className="mr-2 border px-1 text-xs">{actitvityTypeLabel}</span>
        )}
        <Datetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
          showTime={false}
        />
      </div>
      <p>{description}</p>
    </li>
  );
}
