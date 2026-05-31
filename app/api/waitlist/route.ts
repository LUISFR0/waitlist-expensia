import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const NOTIFY_EMAIL = 'nesb.agency@gmail.com';

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: 'Configuración incompleta en el servidor' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    );

    const { email, name } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Correo inválido' }, { status: 400 });
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ email: email.toLowerCase().trim(), name: name?.trim() || null });

    if (dbError) {
      if (dbError.code === '23505') {
        return NextResponse.json({ error: 'Este correo ya está registrado' }, { status: 409 });
      }
      throw dbError;
    }

    // Notify nesb.agency@gmail.com
    await resend.emails.send({
      from: 'EXPENSIA Waitlist <onboarding@resend.dev>',
      to: NOTIFY_EMAIL,
      subject: `Nuevo registro en la lista de espera`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;background:#0a0a0a;color:white;padding:32px;border-radius:16px;">
          <h2 style="color:#2dd4bf;margin:0 0 16px">Nuevo registro en EXPENSIA 🎉</h2>
          <p style="color:#fff;margin:0 0 8px"><strong>Email:</strong> ${email}</p>
          ${name ? `<p style="color:#fff;margin:0 0 8px"><strong>Nombre:</strong> ${name}</p>` : ''}
          <p style="color:#666;margin:24px 0 0;font-size:12px">EXPENSIA Waitlist · ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
        </div>
      `,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: 'EXPENSIA <onboarding@resend.dev>',
      to: email,
      subject: `¡Ya estás en la lista de EXPENSIA!`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;background:#0a0a0a;color:white;padding:32px;border-radius:16px;">
          <div style="text-align:center;margin-bottom:24px;">
            <div style="display:inline-block;background:linear-gradient(135deg,#0f766e,#14b8a6);border-radius:16px;padding:16px;margin-bottom:12px;">
              <span style="font-size:32px;">💸</span>
            </div>
            <h1 style="color:white;margin:0;font-size:28px;font-weight:800;">EXPENSIA</h1>
          </div>
          <h2 style="color:#2dd4bf;text-align:center;margin:0 0 16px">¡Ya estás en la lista!</h2>
          <p style="color:#aaa;text-align:center;line-height:1.6;">
            ${name ? `Hola ${name}, g` : 'G'}racias por registrarte. Te avisaremos en cuanto EXPENSIA esté disponible para iOS y Android.
          </p>
          <div style="margin:24px 0;padding:16px;background:#ffffff0d;border-radius:12px;border:1px solid #ffffff1a;">
            <p style="color:#fff;margin:0 0 8px;font-weight:600;">¿Qué incluye EXPENSIA?</p>
            <ul style="color:#aaa;margin:0;padding-left:20px;line-height:2;">
              <li>Escaneo de tickets con IA</li>
              <li>Facturas CFDI del SAT</li>
              <li>Reportes fiscales RESICO</li>
              <li>Metas de ahorro</li>
              <li>100% offline y privado</li>
            </ul>
          </div>
          <p style="color:#444;text-align:center;font-size:12px;margin:24px 0 0;">
            © 2025 EXPENSIA · Hecho en México 🇲🇽
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[waitlist]', err);
    return NextResponse.json({ error: 'Error interno, intenta más tarde' }, { status: 500 });
  }
}
