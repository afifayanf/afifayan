import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Settings, Save, ArrowLeft, Terminal, LayoutDashboard, Globe, AlertCircle, Database } from "lucide-react";
import { Link } from "react-router";

export default function Admin() {
  const [annuseEnabled, setAnnuseEnabled] = useState(false);
  const [annuseMessage, setAnnuseMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load existing settings
    setAnnuseEnabled(localStorage.getItem("annuseEnabled") === "true");
    setAnnuseMessage(localStorage.getItem("annuseMessage") || "Welcome to Afifayan Portfolio! Exciting updates coming soon.");
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API/Network request
    setTimeout(() => {
      localStorage.setItem("annuseEnabled", annuseEnabled.toString());
      localStorage.setItem("annuseMessage", annuseMessage);
      
      // Dispatch custom event to update announcement bar in real-time if open in same tab
      window.dispatchEvent(new Event("annuseUpdated"));
      
      setIsSaving(false);
      setSaved(true);
      
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff3333] selection:text-white pb-20">
      {/* Admin Navbar */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 font-['Orbitron'] font-bold text-xl text-[#ff6b6b]">
              <Terminal className="w-5 h-5" />
              <span>ADMIN_SYS</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 mt-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="w-8 h-8 text-[#ff6b6b]" />
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Control Center</h1>
        </div>

        {/* Note about Supabase */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-8 flex gap-4 items-start">
          <Database className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-400 mb-1">Persistent Storage Recommended</h3>
            <p className="text-blue-200/70 text-sm">
              Currently, admin settings are saved locally in your browser to simulate the `/public/annuse` functionality. 
              To apply these changes permanently for all visitors, consider connecting a backend database like Supabase.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sidebar Navigation (Mock) */}
          <div className="space-y-2">
            {[
              { label: "Announcements", icon: <Globe className="w-4 h-4" />, active: true },
              { label: "Site Settings", icon: <Settings className="w-4 h-4" />, active: false },
              { label: "Security", icon: <AlertCircle className="w-4 h-4" />, active: false },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? "bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Settings Area */}
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Settings className="w-32 h-32" />
              </div>

              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                Announcement Bar Configuration
              </h2>

              <div className="space-y-6 relative z-10">
                {/* Enable Toggle */}
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                  <div>
                    <h3 className="font-medium">Enable Global Announcement</h3>
                    <p className="text-sm text-gray-400">Shows a banner at the top of the site for all visitors.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={annuseEnabled}
                      onChange={(e) => setAnnuseEnabled(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff6b6b]"></div>
                  </label>
                </div>

                {/* Message Input */}
                <div className="space-y-3">
                  <label className="block font-medium text-sm text-gray-300">
                    Announcement Message (/public/annuse content)
                  </label>
                  <textarea
                    value={annuseMessage}
                    onChange={(e) => setAnnuseMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#ff6b6b] transition-colors resize-none placeholder:text-gray-600"
                    placeholder="Enter your announcement text here..."
                  />
                  <p className="text-xs text-gray-500 flex justify-end">
                    {annuseMessage.length} characters
                  </p>
                </div>

                {/* Save Button */}
                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-[#ff6b6b] hover:bg-[#ff3333] text-white px-6 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                  
                  {saved && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-green-400 font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Settings updated successfully
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
