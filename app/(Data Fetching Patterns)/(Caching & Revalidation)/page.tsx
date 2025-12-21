// app/products/page.tsx
async function getProducts() {
  const res = await fetch("https://api.example.com/products", {
    // Don't cache, always fetch fresh
    cache: "no-store",
  });
  return res.json();
}

// OR

async function getCachedProducts() {
  const res = await fetch("https://api.example.com/products", {
    // Cache for 60 seconds (ISR)
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Products() {
  const products = await getCachedProducts();
  return <div>{/* render products */}</div>;
}
