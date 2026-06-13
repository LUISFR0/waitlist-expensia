export default function PressPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <div>
        <a href="/" className="text-green-500 text-xs hover:underline">← Inicio</a>
        <h1 className="text-4xl font-black mt-4 mb-2">Kit de Prensa · EXPENSIA</h1>
        <p className="text-white/40">Lanzamiento: 22 de junio de 2026</p>
      </div>

      {/* ── PRODUCT HUNT ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#22C55E]">🐱 Product Hunt</h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Nombre</p>
            <p className="font-bold text-lg">EXPENSIA</p>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Tagline (60 chars)</p>
            <p className="font-mono text-sm bg-black/40 p-3 rounded-lg">
              La app de gastos e impuestos para profesionistas en México
            </p>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Descripción</p>
            <p className="text-white/70 text-sm leading-relaxed bg-black/40 p-3 rounded-lg">
              EXPENSIA es la primera app de finanzas personales diseñada para el sistema fiscal mexicano.
              Escanea tickets con IA, detecta gastos deducibles según tu régimen del SAT (RESICO, honorarios, actividad empresarial),
              consulta a un asesor financiero con inteligencia artificial y genera reportes para tu contador en un toque.
              Funciona offline, no vende tus datos y tiene soporte completo para RFC, CFDI y todos los regímenes del SAT.
            </p>
          </div>
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Topics</p>
            <p className="font-mono text-sm bg-black/40 p-3 rounded-lg">
              Finance · Productivity · iOS · Artificial Intelligence · Mexico
            </p>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#22C55E]">📸 Instagram</h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Post 1 — Anuncio de lanzamiento</p>
            <pre className="text-white/70 text-sm leading-relaxed bg-black/40 p-4 rounded-lg whitespace-pre-wrap font-sans">
{`Ya llegó EXPENSIA 🇲🇽💚

La app que los freelancers y profesionistas mexicanos estaban esperando.

✅ Escanea tickets con la cámara
✅ Detecta gastos deducibles automáticamente
✅ Asesor financiero con IA
✅ Reportes para tu contador en 1 toque
✅ Compatible con RESICO, Honorarios, Act. Empresarial y más

Disponible gratis en el App Store 👇
Link en bio

#finanzaspersonales #RESICO #Mexico #freelance #contabilidad #SAT #deducibles #emprendedor #productividad`}
            </pre>
          </div>

          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Post 2 — Feature (OCR)</p>
            <pre className="text-white/70 text-sm leading-relaxed bg-black/40 p-4 rounded-lg whitespace-pre-wrap font-sans">
{`¿Sigues guardando tickets en una caja? 😅

Con EXPENSIA apuntas la cámara al ticket y en 3 segundos ya está registrado con monto, fecha y comercio.

La IA también detecta si es deducible según tu régimen fiscal del SAT.

Sin teclear. Sin excusas. 📸

Descárgala gratis — link en bio 👆

#RESICO #tickets #deducibles #finanzas #freelancemexico #contabilidad`}
            </pre>
          </div>

          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Post 3 — Feature (Asesor IA)</p>
            <pre className="text-white/70 text-sm leading-relaxed bg-black/40 p-4 rounded-lg whitespace-pre-wrap font-sans">
{`¿Cuánto llevas de deducible este mes? 🤔

Con EXPENSIA puedes preguntarle a tu asesor financiero con IA y te da un análisis real de tus gastos, no uno genérico.

"¿En qué estoy gastando de más?"
"¿Cuánto puedo deducir?"
"¿Cómo mejorar mi flujo de efectivo?"

Respuestas en segundos, basadas en tus datos reales 🤖

Link en bio 👆

#asesoria #finanzasinteligentes #IA #freelance #Mexico`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── TWITTER/X ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#22C55E]">𝕏 Twitter / X</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Thread de lanzamiento</p>
            <div className="space-y-3">
              {[
                "🧵 Lancé EXPENSIA, la app de finanzas personales para profesionistas en México.\n\nLo que construí y por qué →",
                "1/ El problema:\n\nLos freelancers mexicanos perdemos miles de pesos en deducciones porque no llevamos control de nuestros gastos.\n\nLas apps gringas no entienden RESICO, RFC ni CFDI.",
                "2/ La solución:\n\nESCANEA cualquier ticket con la cámara → la IA extrae monto, fecha y comercio.\n\nDetecta automáticamente si es DEDUCIBLE según tu régimen del SAT.",
                "3/ También tiene:\n\n→ Asesor financiero con IA (Claude)\n→ Reporte fiscal mensual en CSV\n→ Importar estados de cuenta\n→ Presupuestos y metas de ahorro\n→ 100% offline y privado",
                "4/ Construido con:\n\n→ React Native\n→ Supabase (auth + sync)\n→ SQLite offline-first\n→ Claude API (IA)\n→ RevenueCat (suscripciones)\n\nTardé X meses. Aquí está 👇",
                "5/ Disponible GRATIS en el App Store 🇲🇽\n\nSi eres freelancer, médico, abogado, consultor o tienes negocio en México — esta es tu app.\n\nDescárgala → [link]\n\nRT si conoces a alguien que la necesite 🙏",
              ].map((tweet, i) => (
                <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <pre className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-sans">{tweet}</pre>
                  <p className="text-white/20 text-xs mt-2">{tweet.length} chars</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LINKEDIN ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#22C55E]">💼 LinkedIn</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <pre className="text-white/70 text-sm leading-relaxed bg-black/40 p-4 rounded-lg whitespace-pre-wrap font-sans">
{`Hoy lancé EXPENSIA, la app de finanzas personales diseñada para el sistema fiscal mexicano. 🇲🇽

Después de meses de desarrollo, llegó el día.

EL PROBLEMA QUE RESUELVE:
Los profesionistas independientes en México (RESICO, honorarios, actividad empresarial) pierden miles de pesos cada año en deducciones que nunca comprueban porque no llevan un control de sus gastos.

Las apps financieras existentes están hechas para el mercado gringo — no entienden RFC, CFDI, ni los regímenes del SAT.

LO QUE HACE EXPENSIA:
📸 Escanea tickets con la cámara y la IA extrae monto, fecha y comercio
🧾 Detecta qué gastos son deducibles según tu régimen fiscal
🤖 Asesor financiero con IA que analiza tus finanzas en segundos
📊 Genera reporte CSV mensual listo para tu contador
🏦 Importa estados de cuenta bancarios automáticamente

PARA QUIÉN ES:
→ Freelancers y consultores
→ Médicos, abogados, arquitectos
→ Negocios en RESICO
→ Cualquier profesionista que quiera controlar sus finanzas

Disponible gratis en el App Store: [link]

Si lo descargas, me encantaría tu feedback. 🙏

#finanzas #emprendimiento #Mexico #RESICO #freelance #productividad #fintech`}
          </pre>
        </div>
      </section>

      {/* ── EMAIL WAITLIST ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#22C55E]">📧 Email al Waitlist</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="space-y-2 mb-4">
            <p className="text-xs text-white/40">Asunto:</p>
            <p className="font-mono text-sm bg-black/40 p-3 rounded-lg">
              🎉 Ya llegó EXPENSIA — Descárgala hoy + 3 meses Premium gratis
            </p>
          </div>
          <pre className="text-white/70 text-sm leading-relaxed bg-black/40 p-4 rounded-lg whitespace-pre-wrap font-sans">
{`Hola [nombre],

El día llegó. EXPENSIA ya está disponible en el App Store. 🚀

Como parte de nuestra lista de espera, tienes 3 meses de Premium completamente gratis — sin tarjeta de crédito.

→ DESCARGAR EXPENSIA: [App Store link]

¿Qué incluye tu período Premium gratuito?
• Escaneos de tickets ilimitados
• Asesor financiero con IA
• Importación de estados de cuenta
• Reporte fiscal mensual en CSV
• Sync en la nube ilimitado

Para activar tus 3 meses gratis, descarga la app y usa el código:
[CODIGO_FUNDADOR]

Gracias por confiar en EXPENSIA desde el inicio. Tu feedback en los próximos días es lo más valioso que nos puedes dar.

¿Dudas? Responde este email y te contesto personalmente.

Luis
Fundador de EXPENSIA 🇲🇽`}
          </pre>
        </div>
      </section>
    </main>
  );
}
