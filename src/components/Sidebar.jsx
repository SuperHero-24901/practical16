export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-slate-950 p-6 text-white md:flex">
      <div className="mb-10 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-500 text-xl font-black">P</div>
        <div><p className="text-lg font-bold">Productly</p><p className="text-xs text-slate-400">INVENTORY STUDIO</p></div>
      </div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Workspace</p>
      <div className="rounded-xl bg-indigo-500/20 px-4 py-3 font-medium text-indigo-200">▦ Product inventory</div>
      <div className="mt-auto rounded-2xl border border-slate-800 p-4">
        <p className="font-semibold">Starter workspace</p>
        <p className="mt-1 text-sm text-slate-400">Manage your products with ease.</p>
      </div>
    </aside>
  );
}
