export const prerender = false;
export function GET() {
  return new Response(JSON.stringify({ rendered: 'on-request', at: new Date().toISOString() }), { headers: { 'content-type': 'application/json' } });
}
