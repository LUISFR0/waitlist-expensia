import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — EXPENSIA",
  description: "Política de privacidad y tratamiento de datos personales de la aplicación EXPENSIA.",
};

export default function PrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-sm leading-relaxed">
      <a href="/" className="text-green-500 text-xs mb-8 inline-block hover:underline">← Inicio</a>

      <h1 className="text-3xl font-bold mb-2">Política de privacidad</h1>
      <p className="text-gray-400 mb-10 text-xs">Última actualización: junio 2026</p>

      <section className="space-y-8 text-gray-300">

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">1. Información que recopilamos</h2>
          <p>EXPENSIA recopila la siguiente información para brindar el servicio:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong className="text-white">Datos de cuenta:</strong> nombre, correo electrónico e identificador de su cuenta de Google o Apple</li>
            <li><strong className="text-white">Datos financieros:</strong> gastos, montos, categorías, comercios y fechas que usted ingrese manualmente o mediante escaneo de tickets</li>
            <li><strong className="text-white">Datos fiscales:</strong> RFC, régimen fiscal y uso CFDI que usted proporcione voluntariamente</li>
            <li><strong className="text-white">Imágenes de tickets:</strong> fotos de recibos escaneados, procesadas localmente en su dispositivo</li>
            <li><strong className="text-white">Datos de uso:</strong> interacciones con la App para mejorar la experiencia (sin identificar)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">2. Cómo usamos su información</h2>
          <p>Usamos su información exclusivamente para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Proveer y mejorar las funcionalidades de la App</li>
            <li>Sincronizar sus datos entre dispositivos de forma segura</li>
            <li>Generar análisis financieros personalizados con inteligencia artificial</li>
            <li>Enviar notificaciones de recordatorio que usted haya activado</li>
            <li>Procesar su suscripción Premium</li>
          </ul>
          <p className="mt-2">No vendemos, alquilamos ni compartimos sus datos personales con terceros con fines publicitarios.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">3. Almacenamiento y seguridad</h2>
          <p>Sus datos se almacenan de forma local en su dispositivo (SQLite) y se sincronizan opcionalmente con nuestros servidores seguros en Supabase (infraestructura en AWS). Toda la transmisión de datos se realiza mediante cifrado TLS/HTTPS. Su información fiscal (RFC, régimen) nunca se comparte con terceros.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">4. Inteligencia Artificial</h2>
          <p>Las funciones de análisis IA envían resúmenes agregados de sus gastos (sin datos personales identificables) a modelos de lenguaje para generar recomendaciones. Estos datos no se usan para entrenar modelos de terceros y se procesan en tiempo real sin almacenamiento permanente en servidores de IA.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">5. Servicios de terceros</h2>
          <p>La App utiliza los siguientes servicios externos:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong className="text-white">Google Sign-In / Apple Sign-In:</strong> para autenticación</li>
            <li><strong className="text-white">Supabase:</strong> para almacenamiento en la nube y autenticación</li>
            <li><strong className="text-white">RevenueCat:</strong> para gestión de suscripciones</li>
            <li><strong className="text-white">Sentry:</strong> para reporte de errores (sin datos personales)</li>
            <li><strong className="text-white">Anthropic Claude:</strong> para análisis financiero IA (datos agregados únicamente)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">6. Sus derechos (LGPD México)</h2>
          <p>Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, usted tiene derecho a:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong className="text-white">Acceso:</strong> conocer qué datos tenemos sobre usted</li>
            <li><strong className="text-white">Rectificación:</strong> corregir datos incorrectos</li>
            <li><strong className="text-white">Cancelación:</strong> solicitar la eliminación de sus datos</li>
            <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento de sus datos</li>
          </ul>
          <p className="mt-2">Para ejercer estos derechos, contáctenos en <a href="mailto:hola@expensia.mx" className="text-green-500 hover:underline">hola@expensia.mx</a>. Atenderemos su solicitud en un plazo máximo de 20 días hábiles.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">7. Retención de datos</h2>
          <p>Conservamos sus datos mientras mantenga su cuenta activa. Al eliminar su cuenta, todos sus datos personales serán eliminados de nuestros servidores en un plazo máximo de 30 días. Los datos almacenados localmente en su dispositivo se eliminan al desinstalar la App.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">8. Menores de edad</h2>
          <p>EXPENSIA no está dirigida a menores de 18 años. No recopilamos datos de menores de forma intencional. Si detectamos que un menor ha proporcionado datos personales, los eliminaremos de inmediato.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">9. Cambios a esta política</h2>
          <p>Podemos actualizar esta política periódicamente. Le notificaremos sobre cambios significativos a través de la App o por correo electrónico. Le recomendamos revisarla regularmente.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">10. Contacto</h2>
          <p>Para preguntas sobre privacidad o ejercer sus derechos ARCO:</p>
          <p className="mt-1">📧 <a href="mailto:hola@expensia.mx" className="text-green-500 hover:underline">hola@expensia.mx</a></p>
        </div>

      </section>
    </main>
  );
}
