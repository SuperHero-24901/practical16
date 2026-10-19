import { useState } from "react";

const initial = { name: "", category: "Electronics", price: "", stock: "" };

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState(initial);
  const change = (e) => setForm((old) => ({ ...old, [e.target.name]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    onAdd({ ...form, id: Date.now(), price: Number(form.price), stock: Number(form.stock) });
    setForm(initial);
  }

  const field = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-5"><p className="text-sm font-semibold text-indigo-600">PRODUCT DETAILS</p><h2 className="mt-1 text-xl font-bold">Add a new product</h2><p className="mt-1 text-sm text-slate-500">Fill in the details to add an item to your inventory.</p></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">Product name<input className={`${field} mt-2 font-normal`} name="name" value={form.name} onChange={change} placeholder="e.g. Wireless headphones" required /></label>
        <label className="text-sm font-semibold text-slate-700">Category<select className={`${field} mt-2 font-normal`} name="category" value={form.category} onChange={change}><option>Electronics</option><option>Accessories</option><option>Home & Living</option><option>Clothing</option><option>Stationery</option></select></label>
        <label className="text-sm font-semibold text-slate-700">Price (₹)<input className={`${field} mt-2 font-normal`} name="price" type="number" min="0.01" step="0.01" value={form.price} onChange={change} placeholder="2499" required /></label>
        <label className="text-sm font-semibold text-slate-700">Stock quantity<input className={`${field} mt-2 font-normal`} name="stock" type="number" min="0" value={form.stock} onChange={change} placeholder="25" required /></label>
        <div className="flex items-end"><button className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700">＋ Add product</button></div>
      </div>
    </form>
  );
}
