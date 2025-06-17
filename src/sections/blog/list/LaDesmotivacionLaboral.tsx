export function LaDesmotivacionLaboral() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans text-gray-800 space-y-6 leading-relaxed">
      <h1 className="text-3xl font-bold text-[#41C4C0] text-center uppercase tracking-wide">
        El Síntoma Vedette: La Desmotivación Laboral
      </h1>

      <p>
        ¿Te sucede en algunos momentos que no te encontrás satisfecho en tu
        trabajo, te sentís desganado, sin energía, baja tu rendimiento y te
        sentís en una tremenda confusión, que altera tu estado de ánimo?
        Probablemente, pueden comenzar a rondar en tu cabeza preguntas como:
        <em>
          {" "}
          ¿esto es para mí? ¿Me gusta? ¿Lo quiero para toda la vida, o para mi
          futuro próximo? ¿Tengo que hacer un cambio de trabajo? ¿Esto no es lo
          mío? ¿Elegí mal mi profesión/oficio?
        </em>
        Y con esto... la desesperación.
      </p>

      <h2 className="text-xl font-semibold">
        ¿Será una crisis vocacional o desmotivación?
      </h2>

      <p>
        Hoy te vamos a ayudar a que puedas esclarecer algunas de tus preguntas.
      </p>

      <p>
        <span className="text-[#F2994A] font-semibold">La desmotivación</span>,
        es la falta de motivo que se expresa con baja energía para realizar
        ciertas actividades. Si bien esto puede sucederse en varios ámbitos de
        la vida, el que nos ocupa es el que se presenta en el área laboral.
        Puede que además de la falta de ganas, te desconcentres bastante, te
        quedes dormido o te levantes tarde, que comiencen algunos olvidos de
        tareas, que te cuesten más los compromisos laborales, que te enfermes
        con mayor frecuencia y que te aburras demasiado. Además, puede que te
        pase que te sientas más quejoso y te cueste percibir el lado positivo o
        sentido a tus actividades laborales.
      </p>

      <p>
        <strong>Primero, lo primero!</strong> Es bueno en estas situaciones
        donde nos sentimos que una topadora de desmotivación nos pasa por
        arriba, esclarecer <strong>QUÉ ES</strong> lo que nos está afectando e
        inquietando. Es decir, poder identificar qué factores están
        interviniendo en la causa de tu malestar.
      </p>

      <p>
        Estos pueden ser factores de naturaleza{" "}
        <span className="text-[#F2994A] font-semibold">EXTERNAS</span> a
        nosotros, es decir, del contexto:
      </p>

      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Tareas repetitivas</li>
        <li>Mala comunicación o clima laboral</li>
        <li>Sueldos bajos o estancados</li>
        <li>Filosofía empresarial en contra de tus principios</li>
        <li>Escaso reconocimiento y posibilidades de crecimiento</li>
        <li>Exigencias altas en relación a la valoración del puesto</li>
        <li>Horarios extensos y poco flexibles</li>
        <li>
          Contexto socioeconómico y laboral (mal remunerado, pocas
          oportunidades, etc.)
        </li>
      </ul>

      <p>
        Estas causas pueden estar desde el comienzo de tu actividad o surgir por
        cambios (rotaciones, conflictos, etc.). A veces, el{" "}
        <strong>cansancio acumulado</strong> genera desgaste y una profunda
        sensación de desmotivación.
      </p>

      <h3 className="text-lg font-semibold mt-6">
        Considerás que existen factores externos afectando tu motivación?
      </h3>
      <textarea
        className="w-full border border-gray-300 p-2 rounded-md"
        rows={3}
      />

      <p>
        Otros factores influyentes son los{" "}
        <span className="text-[#F2994A] font-semibold">
          PERSONALES E INTERNOS
        </span>
        . A veces se ocultan, incluso en entornos laborales ideales. No sentirse
        capaz, sin sentido en lo que hacés, o con valores en conflicto, pueden
        generar malestar persistente.
      </p>

      <p>
        Para analizar esto, es clave identificar qué te mueve, qué te interesa y
        cuáles son tus valores personales.
      </p>

      <h3 className="text-lg font-semibold">Preguntas para reflexionar:</h3>

      <div className="space-y-4">
        <label className="block font-medium">
          ¿Cuáles fueron los motivos que te hicieron elegir tu profesión/oficio?
          <textarea
            className="w-full border border-gray-300 p-2 rounded-md mt-1"
            rows={2}
          />
        </label>

        <label className="block font-medium">
          ¿Fueron elecciones personales? ¿Lo volverías a elegir?
          <textarea
            className="w-full border border-gray-300 p-2 rounded-md mt-1"
            rows={2}
          />
        </label>

        <label className="block font-medium">
          ¿Tu actual trabajo se encuentra conectado con eso que te llevó a
          elegir tu carrera/profesión u oficio?
          <textarea
            className="w-full border border-gray-300 p-2 rounded-md mt-1"
            rows={2}
          />
        </label>
      </div>

      <h4 className="font-semibold mt-6">
        ¿Cuáles considerás que son tus valores laborales más importantes?
        Seleccioná:
      </h4>
      <div className="grid grid-cols-2 gap-2">
        {[
          "Aprendizaje y conocimiento",
          "Ayudar a otras personas",
          "Investigar e innovar",
          "Generar belleza",
          "Creatividad",
          "Divertir",
          "Poder y liderazgo",
          "Relaciones sociales",
          "Dinamismo",
          "Dinero",
          "Otras",
        ].map((item) => (
          <label key={item} className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <label className="block mt-4 font-medium">
        ¿Sentís que estos valores se alinean con tu actividad laboral actual?
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md mt-1"
          rows={2}
        />
      </label>

      <label className="block mt-4 font-medium">
        ¿Te sentís capaz y competente en lo que realizás?
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md mt-1"
          rows={2}
        />
      </label>

      <p>
        Una vez que puedas reflexionar sobre los{" "}
        <span className="text-[#27AE60] font-semibold">
          FACTORES EXTERNOS e INTERNOS
        </span>
        , vas a poder identificar las{" "}
        <span className="text-[#EB5757] font-semibold">CAUSAS</span> y generar
        estrategias o un plan de acción para cambiar tu situación.
      </p>
    </div>
  );
}
