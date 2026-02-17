import { Code2, Shield } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center ring-2 ring-[#06080f]">
          <Shield className="w-2.5 h-2.5 text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold leading-tight tracking-tight">
          <span className="text-white">Larios</span>{' '}
          <span className="gradient-text">Digital</span>
        </span>
        <span className="text-[9px] text-slate-500 font-medium tracking-[0.2em] uppercase">Systems</span>
      </div>
    </div>
  );
}
