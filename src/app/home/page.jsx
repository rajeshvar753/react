"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock Watchlist (Can be dynamic later)
const STOCKS = [
  { name: "Reliance Industries", symbol: "RELIANCE", price: "₹2,847", change: "+1.23%", trend: "up" },
  { name: "Tata Power", symbol: "TATAPOWER", price: "₹412", change: "+2.87%", trend: "up" },
  { name: "HDFC Bank", symbol: "HDFCBANK", price: "₹1,625", change: "-0.45%", trend: "down" },
  { name: "Infosys", symbol: "INFY", price: "₹1,432", change: "+0.92%", trend: "up" },
  { name: "Adani Ports", symbol: "ADANIPORTS", price: "₹1,189", change: "-1.12%", trend: "down" },
  { name: "SBI", symbol: "SBIN", price: "₹768", change: "+1.67%", trend: "up" },
];

const NAV_LINKS = [
  { label: "Dashboard", href: "/home", icon: "📊" },
  { label: "Portfolio", href: "#", icon: "💼" },
  { label: "Research", href: "#", icon: "📈" },
  { label: "Expert Logic", href: "#", icon: "🧠" },
  { label: "Alerts", href: "#", icon: "🔔" },
];

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [picks, setPicks] = useState([]);
  const [selectedPick, setSelectedPick] = useState(null);
  const [loadingPicks, setLoadingPicks] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { router.replace("/login"); return; }

    const fetchPicks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/stocks", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setPicks(data);
        }
      } catch (err) {
        console.error("Failed to fetch suggestions:", err);
      } finally {
        setLoadingPicks(false);
      }
    };

    fetchPicks();

    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const initials = user?.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "U";

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* ── Sidebar ── */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-indigo-950 to-slate-900 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-9 h-9 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base">B</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">BharatInvesto</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${link.href === "/home" ? "bg-indigo-600 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
            >
              <span className="text-base">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          {user?.isAdmin && (
            <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-amber-300 hover:bg-amber-400/10 hover:text-amber-200 transition-colors mt-4">
              <span>🛡️</span>
              Admin Panel
            </Link>
          )}
        </nav>

        {/* User profile bottom */}
        <div className="px-3 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl">
            <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{user?.name || "User"}</p>
              <p className="text-slate-400 text-xs truncate">{user?.email || ""}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            id="dashboard-logout"
            className="mt-2 w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Main content ── */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={() => setSidebarOpen(true)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Dashboard</h1>
              <p className="text-xs text-slate-400">Market open · NSE/BSE Live · {currentTime} IST</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/Pricing" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-100 transition">
              ⚡ Upgrade to Pro
            </Link>
            <div className="w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white">
            <p className="text-indigo-200 text-sm mb-1">Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"},</p>
            <h2 className="text-2xl font-bold mb-1">{user?.name || "Investor"} 👋</h2>
            <p className="text-indigo-200 text-sm">Here's your market overview for today. Markets are active.</p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Portfolio Value", value: "₹4,85,200", change: "+₹12,400 today", up: true, icon: "💼" },
              { label: "Today's P&L", value: "+₹3,240", change: "+2.4% gain", up: true, icon: "📈" },
              { label: "Active Stocks", value: "12", change: "Across 4 sectors", up: null, icon: "📊" },
              { label: "Pending Alerts", value: "3", change: "2 buy signals", up: null, icon: "🔔" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{stat.icon}</span>
                  {stat.up !== null && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                      {stat.up ? "↑" : "↓"}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className={`text-xs ${stat.up === true ? "text-green-600" : stat.up === false ? "text-red-500" : "text-slate-400"}`}>{stat.change}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Market watch */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Watchlist</h3>
                <span className="text-xs text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full">● Live</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-slate-400 uppercase bg-slate-50">
                      <th className="text-left px-6 py-3 font-medium">Stock</th>
                      <th className="text-right px-6 py-3 font-medium">Price</th>
                      <th className="text-right px-6 py-3 font-medium">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {STOCKS.map((s) => (
                      <tr key={s.symbol} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3">
                          <p className="font-semibold text-slate-900">{s.symbol}</p>
                          <p className="text-xs text-slate-400">{s.name}</p>
                        </td>
                        <td className="px-6 py-3 text-right font-semibold text-slate-900">{s.price}</td>
                        <td className="px-6 py-3 text-right">
                          <span className={`font-semibold text-xs px-2 py-1 rounded-full ${s.trend === "up" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                            {s.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Expert Technical Suggestions */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-indigo-50/30">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-xl">🎯</span> Expert Picks
                </h3>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full uppercase">Technical Logic</span>
              </div>
              <div className="p-4 space-y-4 overflow-y-auto max-h-[600px]">
                {loadingPicks ? (
                  <div className="py-12 text-center text-slate-400 text-sm italic">Loading latest analysis…</div>
                ) : picks.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-sm italic">No active suggestions for today. Check back later!</div>
                ) : (
                  picks.map((p) => (
                    <div 
                      key={p._id} 
                      onClick={() => setSelectedPick(p)}
                      className="group bg-slate-50 hover:bg-white rounded-2xl p-4 border border-transparent hover:border-indigo-100 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">{p.ticker}</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{p.name}</p>
                        </div>
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg ${p.action === "BUY" ? "bg-green-100 text-green-700" : p.action === "SELL" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                          {p.action}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                        <div className="bg-white/50 p-2 rounded-xl text-center">
                          <p className="text-slate-400 mb-0.5">Target</p>
                          <p className="font-bold text-slate-900">{p.targetPrice}</p>
                        </div>
                        <div className="bg-white/50 p-2 rounded-xl text-center">
                          <p className="text-slate-400 mb-0.5">Stop Loss</p>
                          <p className="font-bold text-red-500">{p.stopLoss}</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 italic mb-3">"{p.reason}"</p>
                      
                      {/* Confidence bar */}
                      <div>
                        <div className="flex justify-between text-[10px] font-medium text-slate-400 mb-1.5">
                          <span>Confidence Level</span>
                          <span className="text-indigo-600 font-bold">{p.confidence}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full transition-all duration-1000 ${p.confidence >= 85 ? "bg-green-500" : p.confidence >= 70 ? "bg-indigo-500" : "bg-amber-400"}`} style={{ width: `${p.confidence}%` }} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
        {/* ── Detail Modal ── */}
        {selectedPick && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setSelectedPick(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 z-10 transition-colors"
                id="close-modal"
              >
                ✕
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Chart & Info */}
                <div className="bg-slate-50 p-6 lg:p-8 border-r border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                      {selectedPick.ticker[0]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">{selectedPick.ticker}</h3>
                      <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{selectedPick.name}</p>
                    </div>
                  </div>

                  {selectedPick.chartUrl ? (
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner mb-6 bg-slate-900 aspect-video flex items-center justify-center relative group">
                      <img 
                        src={selectedPick.chartUrl} 
                        alt="Technical Chart" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end p-4">
                        <span className="text-[10px] text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">Chart Analysis</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border-2 border-dashed border-slate-200 aspect-video flex flex-col items-center justify-center mb-6 text-slate-400">
                      <svg className="w-10 h-10 mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      </svg>
                      <p className="text-xs font-medium uppercase tracking-wider">No chart provided</p>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Entry Range</p>
                      <p className="text-lg font-black text-slate-900">{selectedPick.entryPrice}</p>
                    </div>
                    <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg text-center text-white">
                      <p className="text-[10px] text-indigo-200 uppercase font-bold mb-1">Target Price</p>
                      <p className="text-lg font-black">{selectedPick.targetPrice}</p>
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Stop Loss</p>
                      <p className="text-lg font-black text-red-500">{selectedPick.stopLoss}</p>
                    </div>
                  </div>
                </div>

                {/* Right: reasoning */}
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-none pr-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Logic & Technical Reasoning</h4>
                    </div>
                    <div className="text-slate-600 leading-relaxed text-sm">
                      <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 italic relative">
                        <span className="absolute -top-3 left-6 text-4xl text-indigo-100 font-serif">"</span>
                        {selectedPick.reason}
                        <span className="absolute bottom-0 right-6 text-4xl text-indigo-100 font-serif">"</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-slate-100 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Signal Confidence</p>
                        <p className="text-xl font-black text-indigo-600">{selectedPick.confidence}%</p>
                      </div>
                      <span className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest ${selectedPick.action === "BUY" ? "bg-green-600 text-white shadow-lg shadow-green-200" : "bg-amber-500 text-white shadow-lg shadow-amber-200"}`}>
                        {selectedPick.action} SIGNAL
                      </span>
                    </div>
                    <button className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
                      Add to Watchlist 📥
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}