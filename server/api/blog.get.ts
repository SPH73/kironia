import Airtable from "airtable";

export default defineEventHandler(async () => {
  const { atApiKey } = useRuntimeConfig().private;
  const { atBaseId } = useRuntimeConfig().public;
  const base = new Airtable({ apiKey: atApiKey }).base(atBaseId);

  const table = base("blog");

  const records = await table
    .select({ filterByFormula: "NOT({display} = 'false')" })
    .firstPage();
  if (!records) {
    throw Error("Unable to fetch articles");
  }
  // console.log('airtable blog', records)

  return records;
});
