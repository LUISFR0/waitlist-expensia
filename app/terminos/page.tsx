import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de uso — EXPENSIA",
  description: "Términos y condiciones de uso de la aplicación EXPENSIA.",
};

export default function TerminosPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-sm leading-relaxed">
      <a href="/" className="text-green-500 text-xs mb-8 inline-block hover:underline">← Inicio</a>

      <h1 className="text-3xl font-bold mb-2">Términos de uso</h1>
      <p className="text-gray-400 mb-10 text-xs">Última actualización: junio 2026</p>

      <section className="space-y-8 text-gray-300">

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">1. Aceptación de los términos</h2>
          <p>Al descargar, instalar o utilizar la aplicación EXPENSIA ("la App"), usted acepta quedar vinculado por estos Términos de uso. Si no está de acuerdo con alguna parte de estos términos, no utilice la App.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">2. Descripción del servicio</h2>
          <p>EXPENSIA es una aplicación de control de gastos personales dirigida a profesionistas en México. Permite registrar gastos, escanear tickets, calcular deducciones fiscales y obtener análisis financieros personalizados.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">3. Cuenta de usuario</h2>
          <p>Para usar EXPENSIA debe iniciar sesión con una cuenta de Google o Apple. Usted es responsable de mantener la confidencialidad de su cuenta y de todas las actividades que ocurran bajo ella. Debe notificarnos de inmediato sobre cualquier uso no autorizado de su cuenta.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">4. Uso aceptable</h2>
          <p>Usted se compromete a usar EXPENSIA únicamente para fines lícitos y personales. Queda prohibido:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Usar la App para actividades fraudulentas o ilegales</li>
            <li>Intentar acceder a cuentas de otros usuarios</li>
            <li>Realizar ingeniería inversa o modificar la App</li>
            <li>Usar la App para enviar spam o contenido malicioso</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">5. Suscripción y pagos</h2>
          <p>EXPENSIA ofrece un plan gratuito con funcionalidades limitadas y un plan Premium con acceso completo. Los pagos se procesan a través de la App Store de Apple y están sujetos a sus términos y condiciones. Las suscripciones se renuevan automáticamente salvo que se cancelen al menos 24 horas antes del fin del período vigente.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">6. Inteligencia Artificial</h2>
          <p>La App incluye funciones de análisis financiero con inteligencia artificial. Estos análisis son orientativos y no constituyen asesoría financiera, contable o fiscal profesional. Para decisiones importantes consulte a un profesional certificado.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">7. Propiedad intelectual</h2>
          <p>Todo el contenido de la App, incluyendo el diseño, logotipos, código y textos, es propiedad exclusiva de EXPENSIA o sus licenciantes. Queda prohibida su reproducción o distribución sin autorización escrita.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">8. Limitación de responsabilidad</h2>
          <p>EXPENSIA se proporciona "tal como está". No garantizamos que la App esté libre de errores o interrupciones. En ningún caso seremos responsables por daños indirectos, pérdida de datos o pérdidas económicas derivadas del uso de la App.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">9. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Le notificaremos sobre cambios significativos a través de la App. El uso continuado de la App tras la notificación implica la aceptación de los nuevos términos.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">10. Ley aplicable</h2>
          <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa se resolverá ante los tribunales competentes de la Ciudad de México.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">11. Contacto</h2>
          <p>Para cualquier pregunta sobre estos términos, contáctanos en: <a href="mailto:hola@expensia.mx" className="text-green-500 hover:underline">hola@expensia.mx</a></p>
        </div>

      </section>
    </main>
  );
}
