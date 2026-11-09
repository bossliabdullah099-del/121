import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  MessageSquare,
  Sun,
  Moon,
  ShieldCheck,
  Shield,
  User as UserIcon,
  LogOut,
  Sliders,
  Code2,
  Coins,
  Gift,
} from 'lucide-react';
import { User, ActiveTab } from '../types';

interface HeaderProps {
  currentUser: User | null;
  activeTab?: ActiveTab;
  setActiveTab?: (tab: ActiveTab) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
  onLogout: () => void;
  onOpenPolyglot?: () => void;
  credits?: number;
  onOpenDailyCredits?: () => void;
  onOpenPrivacy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentUser,
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  onOpenAuth,
  onOpenAdmin,
  onLogout,
  onOpenPolyglot,
  credits = 15,
  onOpenDailyCredits,
  onOpenPrivacy,
}) => {
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('BOSS AURA AI');

  const models = [
    { name: 'BOSS AURA AI Polyglot', desc: 'Principal Engineer across all 30+ coding languages with direct, relevant answers', badge: 'Default' },
    { name: 'BOSS AURA AI Pro (Reasoning)', desc: 'Deep algorithmic & architectural reasoning (Gemini Pro)', badge: 'Pro' },
    { name: 'BOSS AURA AI Flash', desc: 'Ultra-fast low latency code & conversational engine', badge: 'Fast' },
  ];

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
      isDarkMode ? 'bg-[#131314]/90 border-[#2e2f33] text-white' : 'bg-white/90 border-gray-200 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
        {/* Left: Brand & Daily Credit & Model Selector */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            id="brand-logo"
            onClick={() => setActiveTab?.('chat')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-blue-500 via-indigo-600 to-amber-400 shadow-md group-hover:scale-105 transition-transform shrink-0 border border-blue-500/30">
              <img
                src="/assets/aistudio/Boss_AI__Cyberpunk_Robot_King_f79838d8.png"
                alt="Boss AI Logo"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                  BOSS AURA AI
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-blue-500/20 text-amber-300 border border-amber-500/40 tracking-wider">
                  BEST CODER
                </span>
              </div>
            </div>
          </div>

          {/* Top Left: Credit Option */}
          {onOpenDailyCredits && (
            <button
              id="topleft-daily-credit-btn"
              onClick={onOpenDailyCredits}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all hover:scale-105 shadow-xs ${
                isDarkMode
                  ? 'bg-gradient-to-r from-amber-950/70 via-orange-950/50 to-yellow-950/70 hover:from-amber-900/80 hover:to-yellow-900/80 border-amber-500/40 text-amber-300 ring-1 ring-amber-500/20'
                  : 'bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-amber-300 text-amber-900 shadow-xs'
              }`}
              title="Credit: Claim hourly refills, daily check-in, and 12-hour missions"
            >
              <Coins className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="inline">Credit</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold border border-amber-500/30">
                {credits} CR
              </span>
            </button>
          )}

          {/* Model Switcher Dropdown */}
          <div className="relative hidden lg:block">
            <button
              id="model-dropdown-trigger"
              onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                isDarkMode
                  ? 'bg-[#1e1f20] hover:bg-[#28292a] border-[#37393b] text-gray-200'
                  : 'bg-gray-100 hover:bg-gray-200/80 border-gray-300/80 text-gray-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="truncate max-w-[150px]">{selectedModel}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            {modelDropdownOpen && (
              <div
                className={`absolute top-full left-0 mt-1.5 w-64 rounded-2xl shadow-xl border p-1.5 z-50 animate-in fade-in-50 ${
                  isDarkMode ? 'bg-[#1e1f20] border-[#37393b]' : 'bg-white border-gray-200'
                }`}
              >
                {models.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => {
                      setSelectedModel(m.name);
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-start justify-between ${
                      selectedModel === m.name
                        ? isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                        : isDarkMode ? 'hover:bg-[#28292a] text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{m.name}</div>
                      <div className="text-[11px] opacity-70 mt-0.5">{m.desc}</div>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-500/20 font-bold ml-2">
                      {m.badge}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Coding Studio button (Renamed from Polyglot Studio) */}
          {onOpenPolyglot && (
            <button
              id="header-code-studio-btn"
              onClick={onOpenPolyglot}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isDarkMode
                  ? 'bg-blue-950/40 hover:bg-blue-900/50 border-blue-500/40 text-blue-300'
                  : 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700'
              }`}
              title="Open Coding Studio (Watch Ad or 1 Credit)"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Coding Studio</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500/20 font-mono font-bold text-blue-400">
                25+
              </span>
            </button>
          )}
        </div>

        {/* Right: Theme, Admin badge, and Auth */}
        <div className="flex items-center gap-2">
          {/* Privacy Policy Button */}
          {onOpenPrivacy && (
            <button
              id="header-privacy-policy-btn"
              onClick={onOpenPrivacy}
              className={`p-2 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-medium ${
                isDarkMode
                  ? 'hover:bg-[#28292a] text-gray-300 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Privacy Policy · Boss Aura AI"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline text-[11px]">Privacy</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode ? 'hover:bg-[#28292a] text-amber-300' : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Account / Admin Badge */}
          {currentUser ? (
            <div className="flex items-center gap-2">
              {currentUser.isSuperAdmin && (
                <button
                  id="admin-dashboard-btn"
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30 hover:brightness-110 transition-all"
                  title="Super Admin Dashboard"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Boss Admin</span>
                  <Sliders className="w-3 h-3 ml-1 opacity-70" />
                </button>
              )}

              {currentUser.isGuest && (
                <button
                  id="guest-upgrade-btn"
                  onClick={onOpenAuth}
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
                  title="Signed in as Guest · Click to sign in or save account"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Guest</span>
                  <span className="text-[10px] opacity-75 underline ml-1">Sign In</span>
                </button>
              )}

              <div className="flex items-center gap-2 pl-1">
                <img
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80'}
                  alt={currentUser.name}
                  className={`w-8 h-8 rounded-full object-cover border-2 ${currentUser.isGuest ? 'border-emerald-500' : 'border-blue-500'}`}
                  referrerPolicy="no-referrer"
                />
                <div className="hidden lg:flex flex-col text-left">
                  <span className="text-xs font-semibold leading-tight truncate max-w-[120px]">
                    {currentUser.name}
                  </span>
                  <span className="text-[10px] opacity-60 truncate max-w-[120px]">
                    {currentUser.isGuest ? 'Guest Session' : currentUser.email}
                  </span>
                </div>
                <button
                  id="logout-btn"
                  onClick={onLogout}
                  title={currentUser.isGuest ? "Exit Guest Mode" : "Sign Out"}
                  className={`p-1.5 rounded-lg opacity-70 hover:opacity-100 transition-opacity ${
                    isDarkMode ? 'hover:bg-[#28292a]' : 'hover:bg-gray-100'
                  }`}
                >
                  <LogOut className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          ) : (
            <button
              id="header-sign-in-btn"
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95 shadow-sm transition-all"
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>Sign In / Admin</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
