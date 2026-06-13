export const metadata = {
  title: 'Costos de Lanzamiento — EXPENSIA',
};

export default function CostosPage() {
  return (
    <html lang="es">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; background: #fff; color: #0a0a0a; padding: 48px; max-width: 800px; margin: 0 auto; }
          @media print {
            body { padding: 24px; }
            .no-print { display: none; }
          }
          .header { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; border-bottom: 2px solid #22C55E; padding-bottom: 24px; }
          .logo { width: 48px; height: 48px; border-radius: 12px; }
          .brand { font-size: 28px; font-weight: 900; letter-spacing: 0.15em; color: #0a0a0a; }
          .doc-title { font-size: 13px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
          .date { margin-left: auto; font-size: 13px; color: #999; }
          h2 { font-size: 16px; font-weight: 700; color: #0a0a0a; margin: 32px 0 12px; padding-bottom: 6px; border-bottom: 1px solid #e5e7eb; }
          table { width: 100%; border-collapse: collapse; font-size: 14px; }
          th { text-align: left; padding: 10px 14px; background: #f9fafb; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #666; border-bottom: 2px solid #e5e7eb; }
          td { padding: 12px 14px; border-bottom: 1px solid #f3f4f6; vertical-align: top; }
          tr:last-child td { border-bottom: none; }
          .badge { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; }
          .red { background: #ef4444; }
          .yellow { background: #f59e0b; }
          .total-row td { font-weight: 700; background: #f0fdf4; color: #16a34a; border-top: 2px solid #22C55E; }
          .free-table td:first-child { display: flex; align-items: center; gap: 8px; }
          .checkmark { color: #22C55E; font-weight: 700; }
          .note { margin-top: 32px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; font-size: 13px; color: #166534; }
          .note strong { font-weight: 700; }
          .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #999; display: flex; justify-content: space-between; }
          .print-btn { display: block; margin: 0 auto 32px; padding: 12px 32px; background: #22C55E; color: #fff; border: none; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }
          .print-btn:hover { background: #16a34a; }
          .growth-table tr:last-child td { background: #f0fdf4; font-weight: 700; color: #16a34a; }
        `}</style>
      </head>
      <body>

        <button className="print-btn no-print" onClick={() => typeof window !== 'undefined' && window.print()}>
          Imprimir / Guardar como PDF
        </button>

        <div className="header">
          <img src="/logo.png" alt="Expensia" className="logo" />
          <div>
            <div className="brand">EXPENSIA</div>
            <div className="doc-title">Presupuesto de Lanzamiento</div>
          </div>
          <div className="date">Junio 2026</div>
        </div>

        <h2>Costos obligatorios para lanzar</h2>
        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Precio USD</th>
              <th>Precio MXN</th>
              <th>Tipo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="badge red" />Apple Developer</td>
              <td>$99</td>
              <td>~$1,732</td>
              <td>Anual</td>
              <td>Requerido para publicar en App Store</td>
            </tr>
            <tr>
              <td><span className="badge red" />Google Play Developer</td>
              <td>$25</td>
              <td>~$438</td>
              <td>Una sola vez</td>
              <td>Pago único para publicar en Play Store</td>
            </tr>
            <tr>
              <td><span className="badge red" />Anthropic (Claude IA)</td>
              <td>$10</td>
              <td>~$175</td>
              <td>Por uso</td>
              <td>Asesor IA + insights. ~3,000 consultas</td>
            </tr>
            <tr>
              <td><span className="badge yellow" />Dominio expensia.mx</td>
              <td>—</td>
              <td>~$200</td>
              <td>Anual</td>
              <td>Recomendado para Terms y Privacy propios</td>
            </tr>
            <tr className="total-row">
              <td><strong>TOTAL INVERSIÓN INICIAL</strong></td>
              <td><strong>~$134 USD</strong></td>
              <td><strong>~$2,545 MXN</strong></td>
              <td colSpan={2}>Incluye primer año de Apple Developer</td>
            </tr>
          </tbody>
        </table>

        <h2>Servicios incluidos gratis</h2>
        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Límite gratuito</th>
              <th>Se rompe con...</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Supabase', '50K usuarios / 500MB DB / 2GB bandwidth', '~5,000 usuarios activos'],
              ['RevenueCat', 'Hasta $2,500 MRR', '~250 suscriptores mensuales'],
              ['OCR.Space', '25,000 scans/mes', '~1,000 usuarios escaneando 25 tickets'],
              ['Vercel (waitlist)', '100GB bandwidth', 'No aplica para este volumen'],
              ['Sentry', '5,000 errores/mes', 'No aplica para este volumen'],
              ['Resend (emails)', '3,000 emails/mes', 'Campañas masivas'],
            ].map(([srv, limit, breaks]) => (
              <tr key={srv}>
                <td><span className="checkmark">✓</span> {srv}</td>
                <td>{limit}</td>
                <td style={{color: '#999', fontSize: '12px'}}>{breaks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Costos futuros (cuando haya ingresos)</h2>
        <table className="growth-table">
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Acción necesaria</th>
              <th>Costo mensual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25 suscriptores Premium ($149/mes)</td>
              <td>—</td>
              <td style={{color: '#16a34a', fontWeight: 700}}>Recuperas la inversión inicial 🎉</td>
            </tr>
            <tr>
              <td>1,000 usuarios activos</td>
              <td>Supabase Pro</td>
              <td>$25/mes</td>
            </tr>
            <tr>
              <td>250 suscriptores</td>
              <td>RevenueCat cobra 1% del revenue</td>
              <td>~$37/mes</td>
            </tr>
            <tr>
              <td>5,000 usuarios scaneando</td>
              <td>OCR.Space paid plan</td>
              <td>~$15/mes</td>
            </tr>
            <tr>
              <td><strong>Total operación a escala</strong></td>
              <td></td>
              <td><strong>~$75/mes</strong></td>
            </tr>
          </tbody>
        </table>

        <div className="note">
          <strong>ROI del lanzamiento:</strong> Con solo 18 suscriptores al plan mensual ($149 MXN) o 5 al plan anual ($999 MXN),
          se recupera el 100% de la inversión inicial de ~$2,545 MXN. El modelo de negocio es altamente eficiente en capital.
        </div>

        <div className="footer">
          <span>EXPENSIA · Documento interno · Junio 2026</span>
          <span>Precios USD/MXN calculados a TC ~$17.50</span>
        </div>

      </body>
    </html>
  );
}
