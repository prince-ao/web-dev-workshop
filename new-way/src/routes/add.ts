/** @type {import('@sveltejs/kit').ReqeustHandler} */
export async function get({ url }: { url: any }) {
  return {
    status: 200,
    body: Number(url.searchParams.get("current")) + 1,
  };
}
