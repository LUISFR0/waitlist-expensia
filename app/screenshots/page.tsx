// Marketing screenshots page — abre en browser, haz Cmd+Shift+4 para cada slide
// Dimensiones objetivo App Store: 1290x2796px (iPhone 15 Pro Max)

export default function ScreenshotsPage() {
  const slides = [
    {
      bg: 'from-[#0A0A0A] via-[#0d1a0d] to-[#0A0A0A]',
      badge: '📸 Escaneo con IA',
      headline: 'Tus tickets,\nregistrados\nen segundos.',
      sub: 'Apunta la cámara y la IA extrae monto, fecha y comercio automáticamente.',
      phone: '📱 ScanScreen',
      accent: '#22C55E',
    },
    {
      bg: 'from-[#0A0A0A] via-[#0a0a1a] to-[#0A0A0A]',
      badge: '🧾 Deducciones SAT',
      headline: 'Sabe exactamente\ncuánto puedes\ndeducir.',
      sub: 'Detecta automáticamente qué gastos son deducibles según tu régimen fiscal.',
      phone: '📊 Dashboard',
      accent: '#3B82F6',
    },
    {
      bg: 'from-[#0A0A0A] via-[#1a0a0a] to-[#0A0A0A]',
      badge: '🤖 Asesor IA',
      headline: 'Tu asesor\nfinanciero,\nsiempre contigo.',
      sub: 'Pregúntale cómo mejorar tus finanzas. Análisis real basado en tus datos.',
      phone: '💬 AsesorScreen',
      accent: '#F59E0B',
    },
    {
      bg: 'from-[#0A0A0A] via-[#0d1a0d] to-[#0A0A0A]',
      badge: '📊 Reportes fiscales',
      headline: 'Reporte para\ntu contador\nen un toque.',
      sub: 'Genera tu CSV mensual con todos los gastos deducibles clasificados.',
      phone: '📋 ReporteFiscal',
      accent: '#22C55E',
    },
    {
      bg: 'from-[#0A0A0A] via-[#0a0a1a] to-[#0A0A0A]',
      badge: '🏦 Importa tu banco',
      headline: 'Clasifica todo\ntu estado de\ncuenta solo.',
      sub: 'Sube tu PDF bancario y EXPENSIA clasifica cada movimiento automáticamente.',
      phone: '🏦 BankImport',
      accent: '#8B5CF6',
    },
    {
      bg: 'from-[#0A0A0A] via-[#1a0a0a] to-[#0A0A0A]',
      badge: '🔒 100% privado',
      headline: 'Tus finanzas,\nsolo tuyas.',
      sub: 'Funciona offline. Cifrado de extremo a extremo. Sin vender tus datos.',
      phone: '⚙️ Settings',
      accent: '#EF4444',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#000', color: '#fff' }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            width: '430px',
            height: '932px',
            background: `linear-gradient(180deg, #0A0A0A 0%, #0A0A0A 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 32px',
            position: 'relative',
            overflow: 'hidden',
            margin: '0 auto 32px',
            border: '1px solid #222',
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${slide.accent}22 0%, transparent 70%)`,
            borderRadius: '50%',
          }} />

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <img src="/logo.png" alt="Expensia" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
            <span style={{ fontWeight: 800, letterSpacing: '0.2em', fontSize: '14px', color: '#fff' }}>EXPENSIA</span>
          </div>

          {/* Badge */}
          <div style={{
            background: `${slide.accent}18`,
            border: `1px solid ${slide.accent}44`,
            color: slide.accent,
            fontSize: '12px',
            fontWeight: 700,
            padding: '6px 16px',
            borderRadius: '999px',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}>
            {slide.badge}
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: '36px',
            fontWeight: 900,
            lineHeight: 1.15,
            textAlign: 'center',
            whiteSpace: 'pre-line',
            margin: '0 0 16px',
            color: '#fff',
          }}>
            {slide.headline}
          </h2>

          {/* Sub */}
          <p style={{
            fontSize: '15px',
            lineHeight: 1.6,
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            margin: '0 0 48px',
            maxWidth: '320px',
          }}>
            {slide.sub}
          </p>

          {/* Phone mockup placeholder */}
          <div style={{
            width: '220px',
            height: '400px',
            background: '#111',
            border: '2px solid #333',
            borderRadius: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <span>{slide.phone.split(' ')[0]}</span>
            <span style={{ fontSize: '10px', color: '#555', letterSpacing: '0.1em' }}>
              {slide.phone.split(' ')[1]}
            </span>
          </div>

          {/* Slide number */}
          <div style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            color: '#333',
            fontSize: '11px',
          }}>
            {i + 1}/{slides.length}
          </div>
        </div>
      ))}

      <p style={{ textAlign: 'center', color: '#555', fontSize: '12px', padding: '32px' }}>
        Reemplaza los placeholders con screenshots reales del simulador en Figma o AppLaunchpad
      </p>
    </div>
  );
}
