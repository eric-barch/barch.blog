import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForBuild } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const builds = await getCollection("builds").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return builds.map(post => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForBuild(props as CollectionEntry<"builds">),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
