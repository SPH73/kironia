import Airtable from "airtable";

export default defineEventHandler(async () => {
  const { atApiKey } = useRuntimeConfig().private;
  const { atBaseId } = useRuntimeConfig().public;
  const base = new Airtable({ apiKey: atApiKey }).base(atBaseId);

  const table = base("herbs");

  const records = await table.select(
   { filterByFormula: "NOT({display} = 'false')", view: "Grid view", sort: [{field: "commonName", direction: "asc"}] }
  ).firstPage();
  if (!records) {
    throw Error("Unable to fetch herb info");
  }
  // console.log('airtable seeds', records)

  return records;
});
