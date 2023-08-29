import type { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ClientOptions } from "@notionhq/client/build/src/Client";
import { Client } from "@notionhq/client";

type ResultType = Array<
  Pick<
    DatabaseObjectResponse,
    "properties" | "cover" | "created_time" | "last_edited_time"
  >
>;

export const getNotionItems = async (options: ClientOptions) => {
  const notion = new Client(options);

  const response = await notion.databases.query({
    database_id: import.meta.env.DATABASE_ID,
  });

  const data = response.results as ResultType;

  return data.map((page) => ({
    created_time: page.created_time,
    last_edited_time: page.last_edited_time,
    cover: page.cover?.type === "external" && page.cover.external.url,
    properties: {
      title: (page.properties?.title as any).title[0].plain_text,
      subtitle: (page.properties?.subtitle as any).rich_text[0].plain_text,
      description: (page.properties?.description as any).rich_text[0]
        .plain_text,
      smallText: (page.properties?.smallText as any).rich_text[0].plain_text,
      percent: (page.properties.percent as any).number,
      startDate: (page.properties.startDate as any).date.start,
      endDate: (page.properties?.endDate as any).date.start,
      active: (page.properties?.active as any).formula.boolean,
      disabled: (page.properties?.disabled as any).checkbox,
    },
  }));
};
