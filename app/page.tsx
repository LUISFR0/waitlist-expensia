'use client';

import { useState } from 'react';
import Image from 'next/image';

const FEATURES = [
  {
    icon: '📸',
    title: 'Escanea tus tickets',
    desc: 'Apunta la cámara y la IA lee el monto, fecha y comercio al instante.',
  },
  {
    icon: '🧾',
    title: 'Deducciones automáticas',
    desc: 'Detecta qué gastos son deducibles según tu régimen fiscal (RESICO, honorarios, etc.).',
  },
  {
    icon: '🤖',
    title: 'Asesor financiero IA',
    desc: 'Pregúntale a Claude cómo optimizar tus finanzas. Análisis real, no genérico.',
  },
  {
    icon: '📊',
    title: 'Reporte fiscal en un toque',
    desc: 'Genera tu reporte CSV/PDF mensual listo para tu contador.',
  },
  {
    icon: '🏦',
    title: 'Importa tu banco',
    desc: 'Sube tu estado de cuenta y clasifica todos tus movimientos automáticamente.',
  },
  {
    icon: '🔒',
    title: 'Offline y privado',
    desc: 'Tus datos viven en tu celular. Sin vender tu información a nadie.',
  },
];

const REGIMES = ['RESICO', 'Honorarios', 'Act. Empresarial', 'Sueldos y Salarios', 'Plataformas Digitales', 'Arrendamiento'];

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
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#22C55E]/10 rounded-full blur-[130px]" />
        <div className="absolute top-[60%] -left-40 w-[400px] h-[400px] bg-[#22C55E]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* ── Nav ── */}
        <nav className="flex items-center justify-between max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Expensia" width={32} height={32} className="rounded-lg" />
            <span className="font-extrabold text-lg tracking-widest">EXPENSIA</span>
          </div>
          <a
            href="#registro"
            className="bg-[#22C55E] hover:bg-[#16a34a] text-black text-sm font-bold px-5 py-2 rounded-full transition-all"
          >
            Unirme →
          </a>
        </nav>

        {/* ── Hero ── */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center gap-8">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
            🇲🇽 Hecho para México · Próximamente
          </span>

          {/* Logo + nombre */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-[22px] overflow-hidden shadow-2xl shadow-[#22C55E]/20 border border-white/10">
              <Image src="/logo.png" alt="Expensia logo" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent">
                EXPENSIA
              </h1>
              <p className="text-[#22C55E] text-sm font-semibold tracking-[0.2em] uppercase mt-1">
                Finanzas inteligentes para México
              </p>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white/90">
              Deja de perder dinero por no<br />
              <span className="text-[#22C55E]">llevar tus finanzas en orden.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Escanea tickets, detecta deducciones fiscales y entiende a dónde va tu dinero — todo en tu celular y sin complicaciones.
            </p>
          </div>

          {/* Regímenes */}
          <div className="flex flex-wrap justify-center gap-2">
            {REGIMES.map(r => (
              <span key={r} className="bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-3 py-1.5 rounded-full">
                {r}
              </span>
            ))}
          </div>

          {/* ── Registro form ── */}
          <div id="registro" className="w-full max-w-md scroll-mt-20">
            {status === 'success' ? (
              <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-2xl px-6 py-10 flex flex-col items-center gap-3">
                <div className="text-5xl">🎉</div>
                <p className="text-xl font-bold text-white">¡Estás dentro!</p>
                <p className="text-white/50 text-sm text-center">
                  Eres parte de los primeros en probar EXPENSIA. Te avisamos al lanzar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Tu nombre (opcional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#22C55E]/60 focus:bg-white/8 transition text-sm"
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#22C55E]/60 focus:bg-white/8 transition text-sm"
                />
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-left px-1">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#22C55E] hover:bg-[#16a34a] active:scale-[0.98] text-black font-extrabold py-4 rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-[#22C55E]/25 text-base"
                >
                  {status === 'loading' ? 'Registrando...' : 'Quiero acceso anticipado →'}
                </button>
                <div className="flex items-center justify-center gap-4 text-white/30 text-xs">
                  <span>✓ Gratis para siempre</span>
                  <span>·</span>
                  <span>✓ Sin spam</span>
                  <span>·</span>
                  <span>✓ Cancela cuando quieras</span>
                </div>
              </form>
            )}
          </div>

          {/* Store badges */}
          <div className="flex items-center gap-3 opacity-50">
            {/* App Store */}
            <div className="flex items-center gap-2.5 border border-white/20 rounded-xl px-4 py-2.5 bg-white/[0.03]">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="leading-tight">
                <div className="text-[9px] text-white/50 uppercase tracking-wide">Disponible en</div>
                <div className="text-xs font-bold text-white">App Store</div>
              </div>
            </div>
            {/* Google Play */}
            <div className="flex items-center gap-2.5 border border-white/20 rounded-xl px-4 py-2.5 bg-white/[0.03]">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M4.077 2.205C3.42 2.56 3 3.24 3 4.03v15.94c0 .79.42 1.47 1.077 1.825l.093.05 8.924-8.924v-.21L4.17 2.155l-.093.05z" fill="#4FC3F7"/>
                <path d="M15.073 15.89l-2.98-2.98v-.21l2.98-2.98 3.38 1.92c.965.548.965 1.44 0 1.988l-3.38 1.92-.001-.002-.001.002z" fill="#FFD54F"/>
                <path d="M15.074 15.888L12.094 12.9 4.077 20.916c.318.337.8.545 1.36.545a1.9 1.9 0 0 0 .934-.244l8.703-4.93z" fill="#F06292"/>
                <path d="M4.077 3.084L12.094 11.1l2.98-2.98-8.703-4.93A1.9 1.9 0 0 0 5.437 2.94c-.56 0-1.042.208-1.36.545z" fill="#81C784"/>
              </svg>
              <div className="leading-tight">
                <div className="text-[9px] text-white/50 uppercase tracking-wide">Disponible en</div>
                <div className="text-xs font-bold text-white">Google Play</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features grid ── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">Todo lo que necesitas para tus finanzas</h3>
            <p className="text-white/40 mt-2">Construido específicamente para profesionistas que facturan en México.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(f => (
              <div
                key={f.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[#22C55E]/30 hover:bg-white/[0.05] transition-all group"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="font-bold text-white mb-1 group-hover:text-[#22C55E] transition-colors">{f.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Social proof / urgency ── */}
        <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="bg-gradient-to-br from-[#22C55E]/10 to-transparent border border-[#22C55E]/20 rounded-3xl px-8 py-12 space-y-6">
            <div className="text-4xl">🚀</div>
            <h3 className="text-2xl font-bold">Los primeros en entrar, los primeros en ahorrar</h3>
            <p className="text-white/50 leading-relaxed">
              Los usuarios de la lista de espera obtienen <strong className="text-[#22C55E]">3 meses de Premium gratis</strong> al lanzar.
              No hay catch — es nuestra forma de agradecer tu confianza desde el inicio.
            </p>
            <a
              href="#registro"
              className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-black font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#22C55E]/25 text-base"
            >
              Quiero mis 3 meses gratis →
            </a>
            <p className="text-white/25 text-xs">Sin tarjeta de crédito requerida.</p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/[0.06] py-8">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Expensia" width={20} height={20} className="rounded-md opacity-70" />
              <span className="text-white/30 text-sm font-semibold tracking-widest">EXPENSIA</span>
              <span className="text-white/20 text-sm">· Hecho en México 🇲🇽</span>
            </div>
            <div className="flex items-center gap-6 text-white/30 text-sm">
              <a href="/terminos" className="hover:text-white/60 transition">Términos</a>
              <a href="/privacidad" className="hover:text-white/60 transition">Privacidad</a>
              <a href="mailto:hola@expensia.mx" className="hover:text-white/60 transition">Contacto</a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
