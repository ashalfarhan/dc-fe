export async function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then(res => {
    const content = res.headers.get('content-type') ?? '';
    if (content === 'application/json') {
      return res.json();
    }
    if (content.includes('text')) {
      return res.text();
    }
    return res.blob();
  });
}
