"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({ totalUsers: 0, adminUsers: 0, recentUsers: 0 });
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState("users");
  const [stocks, setStocks] = useState([]);
  const [stockForm, setStockForm] = useState(null); // null or { ticker, name, action, reason, ... }

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) { router.replace("/login"); return; }

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.isAdmin) { router.replace("/home"); return; }

    try {
      const [statsRes, usersRes, stocksRes] = await Promise.all([
        fetch("http://localhost:5000/api/admin/stats", { headers: { Authorization: `Bearer ${token}` } }),
        fetch("http://localhost:5000/api/admin/users", { headers: { Authorization: `Bearer ${token}` } }),
        fetch("http://localhost:5000/api/stocks/admin", { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      if (statsRes.status === 403 || usersRes.status === 403 || stocksRes.status === 403) {
        router.replace("/home");
        return;
      }

      const statsData = await statsRes.json();
      const usersData = await usersRes.json();
      const stocksData = await stocksRes.json();
      setStats(statsData);
      setUsers(usersData.users || []);
      setStocks(stocksData || []);
    } catch {
      setError("Failed to load admin data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u._id !== id));
        setStats((prev) => ({ ...prev, totalUsers: prev.totalUsers - 1 }));
        showToast("User deleted successfully");
      } else {
        showToast(data.message || "Delete failed", "error");
      }
    } catch {
      showToast("Connection error", "error");
    }
    setDeleteConfirm(null);
  };

  const handleToggleAdmin = async (id) => {
    // ... same as before
  };

  const handleStockSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const isEdit = !!stockForm._id;
    const url = isEdit ? `http://localhost:5000/api/stocks/${stockForm._id}` : "http://localhost:5000/api/stocks";
    
    try {
      const res = await fetch(url, {
        method: isEdit ? "PATCH" : "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(stockForm),
      });
      if (res.ok) {
        showToast(isEdit ? "Suggestion updated" : "Suggestion created");
        setStockForm(null);
        fetchData();
      } else {
        showToast("Operation failed", "error");
      }
    } catch {
      showToast("Connection error", "error");
    }
  };

  const handleStockDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/stocks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setStocks((prev) => prev.filter((s) => s._id !== id));
        showToast("Suggestion deleted");
      }
    } catch {
      showToast("Connection error", "error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const filtered = users.filter(
    (u) => u.name?.toLowerCase().includes(search.toLowerCase()) || u.email?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center font-sans">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-indigo-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-slate-400 text-sm">Loading admin panel…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all ${toast.type === "error" ? "bg-red-600" : "bg-green-600"}`}>
          {toast.msg}
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Delete User?</h3>
            <p className="text-slate-500 text-sm text-center mb-6">This action cannot be undone. The user account will be permanently deleted.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold">BharatInvesto</span>
          </Link>
          <span className="hidden sm:block text-slate-600">|</span>
          <span className="hidden sm:block text-amber-400 text-sm font-medium">🛡️ Admin Panel</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/home" className="text-sm text-slate-400 hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-slate-700">
            ← User Dashboard
          </Link>
          <button onClick={handleLogout} id="admin-logout" className="text-sm text-slate-400 hover:text-red-400 transition px-3 py-1.5 rounded-lg hover:bg-red-500/10">
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page title */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm">Manage users and stock suggestions.</p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button 
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "users" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Users
            </button>
            <button 
              onClick={() => setActiveTab("stocks")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "stocks" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Stock Suggestions
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {[
            { label: "Total Users", value: stats.totalUsers, icon: "👥", color: "from-indigo-500 to-indigo-700" },
            { label: "Admin Accounts", value: stats.adminUsers, icon: "🛡️", color: "from-amber-500 to-amber-700" },
            { label: "Active Suggestions", value: stats.totalSuggestions || 0, icon: "📈", color: "from-purple-500 to-purple-700" },
          ].map((s) => (
            <div key={s.label} className={`bg-gradient-to-r ${s.color} rounded-2xl p-6 text-white`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{s.icon}</span>
              </div>
              <p className="text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-white/70 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* User Management View */}
        {activeTab === "users" && (
          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-white font-bold">User Management</h2>
              {/* Search */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="admin-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search users…"
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-slate-200 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-slate-400 uppercase bg-slate-900/50">
                    <th className="text-left px-6 py-3 font-medium">User</th>
                    <th className="text-left px-6 py-3 font-medium hidden md:table-cell">Joined</th>
                    <th className="text-left px-6 py-3 font-medium">Role</th>
                    <th className="text-right px-6 py-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-400">
                        {search ? "No users match your search." : "No users found."}
                      </td>
                    </tr>
                  ) : (
                    filtered.map((u) => {
                      const initials = u.name ? u.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "U";
                      const joined = u.createdAt ? new Date(u.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—";
                      return (
                        <tr key={u._id} className="hover:bg-slate-700/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs font-bold">{initials}</span>
                              </div>
                              <div>
                                <p className="font-semibold text-white">{u.name}</p>
                                <p className="text-slate-400 text-xs">{u.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-400 text-xs hidden md:table-cell">{joined}</td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${u.isAdmin ? "bg-amber-400/15 text-amber-400" : "bg-slate-700 text-slate-300"}`}>
                              {u.isAdmin ? "🛡️ Admin" : "👤 User"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleToggleAdmin(u._id)}
                                className="text-xs px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition"
                                title={u.isAdmin ? "Revoke admin" : "Grant admin"}
                              >
                                {u.isAdmin ? "Revoke Admin" : "Make Admin"}
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(u._id)}
                                className="text-xs px-3 py-1.5 bg-red-900/30 hover:bg-red-600 text-red-400 hover:text-white rounded-lg transition"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-3 border-t border-slate-700 text-xs text-slate-400">
              Showing {filtered.length} of {users.length} users
            </div>
          </div>
        )}

        {/* Stock Suggestion Management View */}
        {activeTab === "stocks" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Market Suggestions</h2>
              <button 
                onClick={() => setStockForm({ ticker: "", name: "", action: "BUY", entryPrice: "", targetPrice: "", stopLoss: "", reason: "", chartUrl: "", confidence: 80, status: "Active" })}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2"
              >
                <span>+</span> New Suggestion
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stocks.length === 0 ? (
                <div className="col-span-full bg-slate-800 rounded-2xl p-12 text-center text-slate-400 border border-slate-700 border-dashed">
                  No stock suggestions posted yet.
                </div>
              ) : (
                stocks.map((s) => (
                  <div key={s._id} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-colors">
                    {s.chartUrl && (
                      <div className="h-40 w-full overflow-hidden bg-slate-900 border-b border-slate-700">
                        <img src={s.chartUrl} alt={s.ticker} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-white font-bold">{s.ticker}</h3>
                          <p className="text-slate-400 text-xs">{s.name}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${s.action === "BUY" ? "bg-green-500/10 text-green-500" : s.action === "SELL" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`}>
                          {s.action}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-2 text-xs text-slate-300 mb-4">
                        <p><span className="text-slate-500">Entry:</span> {s.entryPrice}</p>
                        <p><span className="text-slate-500">Target:</span> {s.targetPrice}</p>
                        <p><span className="text-slate-500">SL:</span> {s.stopLoss}</p>
                        <p><span className="text-slate-500">Status:</span> <span className={s.status === "Active" ? "text-indigo-400" : "text-green-400"}>{s.status}</span></p>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-slate-700">
                        <button 
                          onClick={() => setStockForm(s)}
                          className="flex-1 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleStockDelete(s._id)}
                          className="py-1.5 px-3 text-xs bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white rounded-lg transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Stock Form Modal */}
        {stockForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 text-white">
                <h3 className="text-xl font-bold">{stockForm._id ? "Edit Suggestion" : "New Stock Suggestion"}</h3>
                <button onClick={() => setStockForm(null)} className="text-slate-400 hover:text-white">✕</button>
              </div>

              <form onSubmit={handleStockSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Ticker Symbol</label>
                    <input 
                      type="text" 
                      value={stockForm.ticker} 
                      onChange={(e) => setStockForm({...stockForm, ticker: e.target.value})}
                      placeholder="e.g. RELIANCE"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Company Name</label>
                    <input 
                      type="text" 
                      value={stockForm.name} 
                      onChange={(e) => setStockForm({...stockForm, name: e.target.value})}
                      placeholder="e.g. Reliance Industries"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Action</label>
                    <select 
                      value={stockForm.action} 
                      onChange={(e) => setStockForm({...stockForm, action: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="BUY">BUY</option>
                      <option value="SELL">SELL</option>
                      <option value="HOLD">HOLD</option>
                      <option value="BREAKOUT">BREAKOUT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Entry Price</label>
                    <input 
                      type="text" 
                      value={stockForm.entryPrice} 
                      onChange={(e) => setStockForm({...stockForm, entryPrice: e.target.value})}
                      placeholder="2840"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Target</label>
                    <input 
                      type="text" 
                      value={stockForm.targetPrice} 
                      onChange={(e) => setStockForm({...stockForm, targetPrice: e.target.value})}
                      placeholder="3100"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Stop Loss</label>
                    <input 
                      type="text" 
                      value={stockForm.stopLoss} 
                      onChange={(e) => setStockForm({...stockForm, stopLoss: e.target.value})}
                      placeholder="2700"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Chart URL (TradingView / Imgur)</label>
                  <input 
                    type="text" 
                    value={stockForm.chartUrl} 
                    onChange={(e) => setStockForm({...stockForm, chartUrl: e.target.value})}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Reasoning & Technical Logic</label>
                  <textarea 
                    value={stockForm.reason} 
                    onChange={(e) => setStockForm({...stockForm, reason: e.target.value})}
                    rows={4}
                    placeholder="Explain the chart pattern, indicators, and logical reasoning..."
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                  <select 
                    value={stockForm.status} 
                    onChange={(e) => setStockForm({...stockForm, status: e.target.value})}
                    className="px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none"
                  >
                    <option value="Active">Active</option>
                    <option value="Target Hit">Target Hit</option>
                    <option value="SL Hit">SL Hit</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl transition">
                    {stockForm._id ? "Update Analysis" : "Post Analysis"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
