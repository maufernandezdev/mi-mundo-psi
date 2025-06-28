import Link from "next/link";

export function ConstruccionVocacional() {
  return (
    <div>
      <div className="bg-primary-blue">
        <div className="text-white text-center py-10 max-w-[1024px] mx-auto">
          <h2 className="text-[26px]">
            Taller de Construcción Vocacional: Y ahora… ¿qué hago?
          </h2>
          <br />
          <p className="text-[14px]">
            Este taller te ayudará a descubrir tu camino profesional desde el
            autoconocimiento, brindándote herramientas prácticas para explorar
            tus intereses, habilidades y valores. A través de 18 fichas de
            trabajo y videos explicativos, irás construyendo un perfil
            vocacional sólido y alineado con el estilo de vida que deseas.
          </p>
        </div>
      </div>
      <div className="bg-primary-sky-blue py-10 px-4 lg:px-0">
        <ul className="max-w-[1024px] mx-auto flex gap-6 flex-wrap">
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Conocerás los pilares fundamentales de la vocación y reflexionarás
            sobre tu identidad vocacional.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Identificarás los factores que influyen en tu elección profesional,
            como presiones externas, miedos y prejuicios.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Explorarás tus intereses y motivaciones más profundas, tanto las que
            han estado contigo siempre como las que estás descubriendo.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Reconocerás tus habilidades y aptitudes, diferenciando entre las que
            ya dominas y las que puedes desarrollar.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Descubrirás los valores que guían tu vida y su impacto en tu
            elección profesional.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Aplicarás un cuestionario de personalidad vinculado a diferentes
            áreas profesionales y construirás tu perfil vocacional integrando
            intereses, habilidades y valores.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Investigarás opciones de carreras, ocupaciones y profesiones que
            encajen con tu perfil, analizando la oferta académica y laboral.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Reflexionarás sobre el estilo de vida que deseas y cómo tu elección
            profesional puede alinearse con él.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Organizaremos entrevistas con profesionales de tu interés para
            despejar dudas y obtener información real sobre el campo laboral.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Trazaremos un plan con pasos concretos para que puedas inscribirte
            en una carrera, iniciar una formación o dar los primeros pasos en tu
            proyecto vocacional.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Este taller no te dirá qué camino tomar, pero te dará las
            herramientas necesarias para que lo descubras por ti mismo/a con
            confianza y claridad.
          </li>
          <li className="bg-pink rounded-3xl p-4 text-center w-full text-[14px]">
            Inscríbete ahora y comienza a construir tu futuro con seguridad y
            propósito. ¡Te espero en el taller!
          </li>
        </ul>
      </div>
      <div className="py-20 flex justify-center">
        <Link
          className="bg-[#5f728d] uppercase text-white rounded-[20px] py-[4.8px] px-[48px] font-bold border-none outline-none"
          style={{ boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.75)" }}
          href={
            "https://wa.me/61475126175?text=Hola Anto%2C%20quiero%20inscribirme%20en%20el%20curso%20de%20construcción%20vocacional"
          }
          target="_blank"
        >
          inscribirme
        </Link>
      </div>
    </div>
  );
}
