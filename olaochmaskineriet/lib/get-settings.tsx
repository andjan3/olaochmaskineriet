import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getSettings() {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/settings`, sbParams);
  console.log("daaaata", data);

  if (!data) {
    throw new Error("Not Found");
  }

  return data.data;
}
