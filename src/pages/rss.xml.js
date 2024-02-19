import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Kochbuch | Rezepte",
    description: "Die besten Rezepte der Welt",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>de-de</language>`,
  });
}
