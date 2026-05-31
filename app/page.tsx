'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error desconocido');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Algo salió mal, intenta de nuevo.');
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0f766e]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center gap-6">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-[#0f766e]/20 border border-[#0f766e]/40 text-[#2dd4bf] text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
          Próximamente
        </span>

        {/* Logo / App name */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#14b8a6] flex items-center justify-center shadow-lg shadow-[#0f766e]/30">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 16C6 10.477 10.477 6 16 6s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16z" stroke="white" strokeWidth="2"/>
              <path d="M16 10v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            EXPENSIA
          </h1>
          <p className="text-[#2dd4bf] text-sm font-medium tracking-widest uppercase">
            Control financiero inteligente
          </p>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-white/90">
            Tus gastos, bajo control.{' '}
            <span className="text-[#2dd4bf]">Sin esfuerzo.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-md">
            La app para rastrear tus gastos, escanear tickets, calcular deducciones fiscales
            y alcanzar tus metas de ahorro — todo desde tu celular.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 w-full text-left">
          {[
            { icon: '📸', label: 'Escaneo de tickets con IA' },
            { icon: '🧾', label: 'Facturas CFDI del SAT' },
            { icon: '📊', label: 'Reportes fiscales RESICO' },
            { icon: '🔒', label: '100% offline y privado' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-sm text-white/70 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Form or Success */}
        {status === 'success' ? (
          <div className="w-full bg-[#0f766e]/20 border border-[#0f766e]/50 rounded-2xl px-6 py-8 flex flex-col items-center gap-3">
            <div className="text-4xl">🎉</div>
            <p className="text-lg font-bold text-white">¡Ya estás en la lista!</p>
            <p className="text-white/50 text-sm">
              Te avisaremos en cuanto EXPENSIA esté disponible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#0f766e] transition"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#0f766e] transition"
            />
            {status === 'error' && (
              <p className="text-red-400 text-sm text-left px-1">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6] text-white font-bold py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 shadow-lg shadow-[#0f766e]/30"
            >
              {status === 'loading' ? 'Registrando...' : 'Unirme a la lista de espera →'}
            </button>
            <p className="text-white/30 text-xs">
              Sin spam. Solo te avisamos cuando lancemos.
            </p>
          </form>
        )}

        {/* Footer */}
        <p className="text-white/20 text-xs mt-4">
          © 2025 EXPENSIA · Hecho en México 🇲🇽
        </p>
      </div>
    </main>
  );
}
