export default async function fetcher(args: RequestInfo) {
  const res = await fetch(args);

  return res.json();
}
