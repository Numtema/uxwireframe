export function Sidebar({ activeItem, onNavigate }: { activeItem?: string; onNavigate?: (item: string) => void }) {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-5 py-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
          NL
        </div>
        <div>
          <p className="text-sm text-slate-500">Plateforme</p>
          <h1 className="text-lg font-semibold">Nümtema Learn</h1>
        </div>
      </div>

      <nav className="space-y-2">
        <SidebarItem label="Dashboard" active={activeItem === "Dashboard"} onClick={() => onNavigate?.("dashboard")} />
        <SidebarItem label="Catalogue" active={activeItem === "Catalogue"} onClick={() => onNavigate?.("catalog")} />
        <SidebarItem label="Mes formations" active={activeItem === "Mes formations"} onClick={() => onNavigate?.("dashboard")} />
        <SidebarItem label="Progression" active={activeItem === "Progression"} onClick={() => onNavigate?.("dashboard")} />
        <SidebarItem label="Certificats" active={activeItem === "Mes certificats"} onClick={() => onNavigate?.("certificates")} />
        <SidebarItem label="Historique" active={activeItem === "Historique"} onClick={() => onNavigate?.("payment-history")} />
        <SidebarItem label="Notifications" active={activeItem === "Notifications"} onClick={() => onNavigate?.("notifications")} />
        <SidebarItem label="Messages" active={activeItem === "Messages"} onClick={() => onNavigate?.("messaging")} />
      </nav>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Autre
        </p>
        <div className="space-y-2">
          <SidebarItem label="Paramètres" active={activeItem === "Paramètres"} onClick={() => onNavigate?.("profile")} />
          <SidebarItem label="Support" active={activeItem === "Support"} onClick={() => onNavigate?.("support")} />
        </div>
      </div>

      <div className="mt-auto pt-10">
        <div 
          onClick={() => onNavigate?.("profile")}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 cursor-pointer hover:bg-slate-100 transition"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-300 text-sm font-semibold text-slate-700">
              L
            </div>
            <div>
              <p className="font-medium">Lionel</p>
              <p className="text-sm text-slate-500">Étudiant</p>
            </div>
          </div>
          <button className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-white">
            Déconnexion
          </button>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center rounded-2xl px-3 py-3 text-left text-sm font-medium transition ${
        active
          ? "bg-slate-900 text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {label}
    </button>
  );
}
