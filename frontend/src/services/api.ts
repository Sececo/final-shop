const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function request(path:string, opts: RequestInit = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts
  });
  if (!res.ok) {
    console.error('API error', res.statusText);
    return null;
  }
  try { return await res.json(); } catch { return null; }
}

export default {
  get: (path:string) => request(path, { method: 'GET' }),
  post: (path:string, body:any) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path:string, body:any) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  del: (path:string) => request(path, { method: 'DELETE' }),
};

export async function fetchProducts(): Promise<any[]> {
  const res = await fetch(`${BASE}/api/products`);
  if (!res.ok) throw new Error('Error cargando productos');
  return res.json();
}

export async function fetchProductById(id:string|number): Promise<any> {
  const res = await fetch(`${BASE}/api/products/${id}`);
  if (!res.ok) throw new Error('Error cargando producto');
  return res.json();
}