'use client';

import Image from 'next/image';

const REQUIRED_COSTS = [
  { emoji: '🔴', name: 'Apple Developer', usd: '$99', mxn: '~$1,732', tipo: 'Anual', note: 'Requerido para publicar en App Store' },
  { emoji: '🔴', name: 'Google Play Developer', usd: '$25', mxn: '~$438', tipo: 'Una sola vez', note: 'Pago único para publicar en Play Store' },
  { emoji: '🔴', name: 'Anthropic (Claude IA)', usd: '$10', mxn: '~$175', tipo: 'Por uso', note: 'Asesor IA + insights. ~3,000 consultas' },
  { emoji: '🟡', name: 'Dominio expensia.mx', usd: '—', mxn: '~$200', tipo: 'Anual', note: 'Recomendado para Terms y Privacy propios' },
];

const FREE_SERVICES = [
  { name: 'Supabase', limit: '50K usuarios / 500MB DB / 2GB bandwidth', breaks: '~5,000 usuarios activos' },
  { name: 'RevenueCat', limit: 'Hasta $2,500 MRR', breaks: '~250 suscriptores mensuales' },
  { name: 'OCR.Space', limit: '25,000 scans/mes', breaks: '~1,000 usuarios × 25 scans' },
  { name: 'Vercel (waitlist)', limit: '100GB bandwidth', breaks: 'No aplica para este volumen' },
  { name: 'Sentry', limit: '5,000 errores/mes', breaks: 'No aplica para este volumen' },
  { name: 'Resend (emails)', limit: '3,000 emails/mes', breaks: 'Campañas masivas' },
];

const GROWTH_COSTS = [
  { milestone: '25 suscriptores Premium ($149/mes)', action: '—', cost: '¡Recuperas la inversión inicial! 🎉', green: true },
  { milestone: '1,000 usuarios activos', action: 'Supabase Pro', cost: '$25/mes', green: false },
  { milestone: '250 suscriptores', action: 'RevenueCat cobra 1% del revenue', cost: '~$37/mes', green: false },
  { milestone: '5,000 usuarios escaneando', action: 'OCR.Space paid plan', cost: '~$15/mes', green: false },
  { milestone: 'Total operación a escala', action: '', cost: '~$75/mes', green: true },
];

export default function CostosPage() {
  return (
    <div style={{ background: '#fff', color: '#0a0a0a', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <style>{`
        @media print { .no-print { display: none !important; } body { background: white !important; } }
        table { border-collapse: collapse; width: 100%; }
        th { background: #f9fafb; color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; padding: 10px 14px; text-align: left; border-bottom: 2px solid #e5e7eb; }
        td { padding: 12px 14px; border-bottom: 1px solid #f3f4f6; font-size: 14px; vertical-align: top; }
        tr:last-child td { border-bottom: none; }
      `}</style>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 32px' }}>

        {/* Print button */}
        <div className="no-print" style={{ marginBottom: 32, textAlign: 'center' }}>
          <button
            onClick={() => window.print()}
            style={{ background: '#22C55E', color: '#000', border: 'none', borderRadius: 10, padding: '12px 32px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
          >
            🖨️ Imprimir / Guardar como PDF
          </button>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '3px solid #22C55E', paddingBottom: 20, marginBottom: 32 }}>
          <Image src="/logo.png" alt="Expensia" width={48} height={48} style={{ borderRadius: 12 }} />
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.15em' }}>EXPENSIA</div>
            <div style={{ fontSize: 12, color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Presupuesto de Lanzamiento</div>
          </div>
          <div style={{ marginLeft: 'auto', color: '#999', fontSize: 13 }}>Junio 2026</div>
        </div>

        {/* Required costs */}
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid #e5e7eb' }}>
          Costos obligatorios para lanzar
        </h2>
        <table style={{ marginBottom: 32 }}>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>USD</th>
              <th>MXN</th>
              <th>Tipo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            {REQUIRED_COSTS.map(r => (
              <tr key={r.name}>
                <td><span style={{ marginRight: 6 }}>{r.emoji}</span>{r.name}</td>
                <td style={{ fontWeight: 600 }}>{r.usd}</td>
                <td style={{ fontWeight: 600 }}>{r.mxn}</td>
                <td style={{ color: '#666' }}>{r.tipo}</td>
                <td style={{ color: '#888', fontSize: 12 }}>{r.note}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ fontWeight: 700 }}>TOTAL INVERSIÓN INICIAL</td>
              <td style={{ fontWeight: 700, color: '#16a34a' }}>~$134 USD</td>
              <td style={{ fontWeight: 700, color: '#16a34a' }}>~$2,545 MXN</td>
              <td colSpan={2} style={{ color: '#666', fontSize: 12 }}>Incluye primer año de Apple Developer</td>
            </tr>
          </tbody>
        </table>

        {/* Free services */}
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid #e5e7eb' }}>
          Servicios incluidos gratis
        </h2>
        <table style={{ marginBottom: 32 }}>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Límite gratuito</th>
              <th>Se rompe con...</th>
            </tr>
          </thead>
          <tbody>
            {FREE_SERVICES.map(f => (
              <tr key={f.name}>
                <td><span style={{ color: '#22C55E', fontWeight: 700, marginRight: 8 }}>✓</span>{f.name}</td>
                <td>{f.limit}</td>
                <td style={{ color: '#999', fontSize: 12 }}>{f.breaks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Growth costs */}
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid #e5e7eb' }}>
          Costos futuros (cuando haya ingresos)
        </h2>
        <table style={{ marginBottom: 32 }}>
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Acción necesaria</th>
              <th>Costo mensual</th>
            </tr>
          </thead>
          <tbody>
            {GROWTH_COSTS.map((g, i) => (
              <tr key={i} style={g.green ? { background: '#f0fdf4' } : {}}>
                <td style={g.green ? { fontWeight: 700 } : {}}>{g.milestone}</td>
                <td style={{ color: '#666' }}>{g.action}</td>
                <td style={{ fontWeight: 700, color: g.green ? '#16a34a' : '#0a0a0a' }}>{g.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ROI note */}
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: 16, fontSize: 13, color: '#166534', marginBottom: 40 }}>
          <strong>ROI del lanzamiento:</strong> Con solo 18 suscriptores al plan mensual ($149 MXN) o 5 al plan anual ($999 MXN),
          se recupera el 100% de la inversión inicial de ~$2,545 MXN.
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#999' }}>
          <span>EXPENSIA · Documento interno · Junio 2026</span>
          <span>Precios USD/MXN a TC ~$17.50</span>
        </div>
      </div>
    </div>
  );
}
