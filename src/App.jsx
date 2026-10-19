import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProductForm from "./components/ProductForm";
import ProductGrid from "./components/ProductGrid";

const seed = [
  { id: 1, name: "Studio Wireless Headphones", category: "Electronics", price: 3499, stock: 18 },
  { id: 2, name: "Everyday Tote Bag", category: "Accessories", price: 899, stock: 32 },
  { id: 3, name: "Desk Organizer Set", category: "Home & Living", price: 649, stock: 4 },
];

export default function App() {
  const [products, setProducts] = useState(seed);
  const addProduct = (product) => setProducts((old) => [product, ...old]);
  const inventoryValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  return <div className="min-h-screen md:flex"><Sidebar /><main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10"><header className="mb-8 flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-semibold text-indigo-600">WORKSPACE / INVENTORY</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Product inventory</h1><p className="mt-2 text-slate-500">A clear view of the products your business carries.</p></div><div className="rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-sm">● Live workspace</div></header>
  <section className="mb-8 grid gap-4 sm:grid-cols-3"><Stat title="Total products" value={products.length} note="Items in your catalog" icon="▦"/><Stat title="Units in stock" value={products.reduce((s,p)=>s+p.stock,0)} note="Across all products" icon="□"/><Stat title="Inventory value" value={new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(inventoryValue)} note="Price × available stock" icon="₹"/></section>
  <div className="grid items-start gap-6 xl:grid-cols-[0.9fr_1.1fr]"><ProductForm onAdd={addProduct}/><section><div className="mb-4 flex items-center justify-between"><div><h2 className="text-xl font-bold">Your products</h2><p className="mt-1 text-sm text-slate-500">Recently added items appear first.</p></div><span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">{products.length} items</span></div><ProductGrid products={products}/></section></div></main></div>;
}
function Stat({ title, value, note, icon }) { return <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500">{title}</p><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">{icon}</span></div><p className="mt-3 text-2xl font-black tracking-tight">{value}</p><p className="mt-1 text-xs text-slate-500">{note}</p></div>; }
