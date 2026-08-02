import type {
  Categoria,
  Curso,
  Periodo,
  PlanEstudioPorPeriodo,
  Programa,
  TipoPrograma,
} from "@/types";

export const tiposMock: TipoPrograma[] = [
  {
    id: 1,
    nombre: "Doctorados",
    slug: "doctorados",
    imagenCard: "/images/banner.jpg",
    imagenHero: "/images/hero-bg.png",
  },
  {
    id: 2,
    nombre: "Maestrías",
    slug: "maestrias",
    imagenCard: "/images/admision.jpg",
    imagenHero: "/images/hero-bg.png",
  },
  {
    id: 3,
    nombre: "Residentado Médico",
    slug: "residentado-medico",
    imagenCard: "/images/info.jpg",
    imagenHero: "/images/hero-bg.png",
  },
  {
    id: 4,
    nombre: "Segundas Especialidades",
    slug: "segundas-especialidades",
    imagenCard: "/images/about.jpg",
    imagenHero: "/images/hero-bg.png",
  },
];

const ob = (nombre: string): Categoria => ({ id: 1, nombre });
const el = (nombre: string): Categoria => ({ id: 2, nombre });

const curso = (id: number, asignatura: string, creditos: number, costo: number, categoria: Categoria): Curso => ({
  id,
  asignatura: { id, nombre: asignatura },
  creditos,
  costo,
  categoria,
});

const periodo = (id: number, nombre: string, cursos: Curso[]): PlanEstudioPorPeriodo => ({
  periodo: { id, nombre },
  cursos,
});

interface ProgramaSeed {
  id: number;
  nombre: string;
  slug: string;
  tipoPrograma: TipoPrograma;
  objetivoGeneral: string;
  objetivosEspecificos: string;
  perfilPosgraduado: string;
  costoMatricula: number;
  imagen: string;
  modalidad: string;
  facultad: string;
  planEstudios: PlanEstudioPorPeriodo[];
}

const maestria = tiposMock[1];
const doctorado = tiposMock[0];
const residentado = tiposMock[2];
const segundas = tiposMock[3];

let cursoId = 100;

const seed: ProgramaSeed[] = [
  {
    id: 1,
    nombre: "Maestría en Administración de Empresas",
    slug: "maestria-administracion-empresas",
    tipoPrograma: maestria,
    objetivoGeneral: "Formar líderes capaces de gestionar organizaciones con visión estratégica, ética e innovación, respondiendo a las exigencias del entorno empresarial global.",
    objetivosEspecificos: "Desarrollar competencias en dirección estratégica; fortalecer habilidades de liderazgo y toma de decisiones; aplicar herramientas de gestión financiera y de operaciones.",
    perfilPosgraduado: "El egresado podrá desempeñarse como gerente general, director de operaciones o consultor empresarial en organizaciones públicas y privadas.",
    costoMatricula: 3500.0,
    imagen: "/images/about.jpg",
    modalidad: "Presencial",
    facultad: "Ciencias Administrativas",
    planEstudios: [
      periodo(1, "Primer Semestre", [
        curso(++cursoId, "Gestión Estratégica", 4, 800, ob("OB")),
        curso(++cursoId, "Contabilidad Gerencial", 3, 650, ob("OB")),
        curso(++cursoId, "Economía de la Empresa", 3, 650, ob("OB")),
      ]),
      periodo(2, "Segundo Semestre", [
        curso(++cursoId, "Marketing Avanzado", 4, 850, ob("OB")),
        curso(++cursoId, "Finanzas Corporativas", 4, 900, ob("OB")),
        curso(++cursoId, "Gestión del Talento Humano", 3, 700, el("EL")),
      ]),
      periodo(3, "Tercer Semestre", [
        curso(++cursoId, "Gestión de Operaciones", 3, 750, ob("OB")),
        curso(++cursoId, "Emprendimiento e Innovación", 3, 720, el("EL")),
      ]),
      periodo(4, "Cuarto Semestre", [
        curso(++cursoId, "Seminario de Investigación", 3, 780, ob("OB")),
        curso(++cursoId, "Taller de Tesis I", 4, 820, ob("OB")),
      ]),
    ],
  },
  {
    id: 2,
    nombre: "Maestría en Gestión Pública",
    slug: "maestria-gestion-publica",
    tipoPrograma: maestria,
    objetivoGeneral: "Formar profesionales con capacidades para modernizar la gestión pública y diseñar políticas orientadas al desarrollo sostenible de la región.",
    objetivosEspecificos: "Analizar el marco normativo de la gestión pública; aplicar herramientas de presupuesto y control gubernamental; fortalecer la gestión por resultados.",
    perfilPosgraduado: "El egresado podrá dirigir unidades de gestión, formular políticas públicas y asesorar a gobiernos regionales y locales.",
    costoMatricula: 3200.0,
    imagen: "/images/banner.jpg",
    modalidad: "Semipresencial",
    facultad: "Ciencias Sociales",
    planEstudios: [
      periodo(5, "Primer Semestre", [
        curso(++cursoId, "Estado y Políticas Públicas", 4, 700, ob("OB")),
        curso(++cursoId, "Derecho Administrativo", 3, 620, ob("OB")),
      ]),
      periodo(6, "Segundo Semestre", [
        curso(++cursoId, "Presupuesto Público", 4, 780, ob("OB")),
        curso(++cursoId, "Gestión por Resultados", 3, 700, el("EL")),
      ]),
      periodo(7, "Tesis", [
        curso(++cursoId, "Seminario de Tesis", 4, 900, ob("OB")),
      ]),
      periodo(8, "Tercer Semestre", [
        curso(++cursoId, "Contrataciones del Estado", 3, 680, ob("OB")),
        curso(++cursoId, "Taller de Tesis II", 4, 800, ob("OB")),
      ]),
    ],
  },
  {
    id: 3,
    nombre: "Maestría en Ingeniería de Software",
    slug: "maestria-ingenieria-software",
    tipoPrograma: maestria,
    objetivoGeneral: "Formar especialistas capaces de diseñar, construir y gestionar sistemas de software de alta calidad para la transformación digital de las organizaciones.",
    objetivosEspecificos: "Dominar arquitecturas de software modernas; aplicar metodologías ágiles de desarrollo; gestionar proyectos tecnológicos y calidad de software.",
    perfilPosgraduado: "El egresado podrá desempeñarse como arquitecto de software, líder técnico o gerente de proyectos tecnológicos.",
    costoMatricula: 3600.0,
    imagen: "/images/info.jpg",
    modalidad: "Presencial",
    facultad: "Ingenierías",
    planEstudios: [
      periodo(9, "Primer Semestre", [
        curso(++cursoId, "Arquitecturas de Software", 4, 850, ob("OB")),
        curso(++cursoId, "Ingeniería de Requisitos", 3, 720, ob("OB")),
      ]),
      periodo(10, "Segundo Semestre", [
        curso(++cursoId, "Calidad y Testing de Software", 3, 740, ob("OB")),
        curso(++cursoId, "DevOps y Cloud Computing", 4, 880, el("EL")),
      ]),
      periodo(11, "Tercer Semestre", [
        curso(++cursoId, "Inteligencia Artificial Aplicada", 4, 920, el("EL")),
        curso(++cursoId, "Gestión de Proyectos TI", 3, 760, ob("OB")),
      ]),
      periodo(12, "Cuarto Semestre", [
        curso(++cursoId, "Seminario de Investigación", 3, 780, ob("OB")),
        curso(++cursoId, "Taller de Tesis I", 4, 820, ob("OB")),
      ]),
    ],
  },
  {
    id: 4,
    nombre: "Maestría en Educación Mención Docencia Universitaria",
    slug: "maestria-docencia-universitaria",
    tipoPrograma: maestria,
    objetivoGeneral: "Formar docentes universitarios con competencias pedagógicas, investigativas y de gestión curricular para elevar la calidad de la educación superior.",
    objetivosEspecificos: "Aplicar estrategias didácticas innovadoras; diseñar currículos por competencias; conducir procesos de investigación educativa.",
    perfilPosgraduado: "El egresado podrá ejercer la docencia universitaria, liderar procesos de innovación curricular y desarrollar investigación educativa.",
    costoMatricula: 2800.0,
    imagen: "/images/admision.jpg",
    modalidad: "Presencial",
    facultad: "Ciencias de la Educación",
    planEstudios: [
      periodo(13, "Primer Semestre", [
        curso(++cursoId, "Didáctica Universitaria", 4, 600, ob("OB")),
        curso(++cursoId, "Psicología del Aprendizaje", 3, 550, ob("OB")),
      ]),
      periodo(14, "Segundo Semestre", [
        curso(++cursoId, "Diseño Curricular", 4, 650, ob("OB")),
        curso(++cursoId, "Evaluación Educativa", 3, 580, el("EL")),
      ]),
      periodo(15, "Tercer Semestre", [
        curso(++cursoId, "Investigación Educativa", 3, 620, ob("OB")),
      ]),
      periodo(16, "Cuarto Semestre", [
        curso(++cursoId, "Taller de Tesis I", 4, 700, ob("OB")),
        curso(++cursoId, "Taller de Tesis II", 4, 700, ob("OB")),
      ]),
    ],
  },
  {
    id: 5,
    nombre: "Maestría en Salud Pública",
    slug: "maestria-salud-publica",
    tipoPrograma: maestria,
    objetivoGeneral: "Formar profesionales capaces de planificar, gestionar y evaluar intervenciones en salud pública con enfoque comunitario y de equidad.",
    objetivosEspecificos: "Analizar los determinantes sociales de la salud; aplicar epidemiología en la toma de decisiones; gestionar servicios de salud.",
    perfilPosgraduado: "El egresado podrá dirigir establecimientos de salud, formular programas preventivos y asesorar políticas sanitarias.",
    costoMatricula: 3000.0,
    imagen: "/images/placeholder.png",
    modalidad: "Semipresencial",
    facultad: "Ciencias de la Salud",
    planEstudios: [
      periodo(17, "Primer Semestre", [
        curso(++cursoId, "Epidemiología General", 4, 700, ob("OB")),
        curso(++cursoId, "Bioestadística", 3, 650, ob("OB")),
      ]),
      periodo(18, "Segundo Semestre", [
        curso(++cursoId, "Salud Comunitaria", 3, 680, ob("OB")),
        curso(++cursoId, "Gestión de Servicios de Salud", 4, 750, el("EL")),
      ]),
      periodo(19, "Tercer Semestre", [
        curso(++cursoId, "Epidemiología de Campo", 3, 700, ob("OB")),
      ]),
      periodo(20, "Cuarto Semestre", [
        curso(++cursoId, "Taller de Tesis I", 4, 800, ob("OB")),
      ]),
    ],
  },
  {
    id: 6,
    nombre: "Maestría en Contabilidad y Auditoría",
    slug: "maestria-contabilidad-auditoria",
    tipoPrograma: maestria,
    objetivoGeneral: "Formar contadores con competencias avanzadas en auditoría financiera, tributación y control interno.",
    objetivosEspecificos: "Aplicar normas internacionales de información financiera; diseñar sistemas de control interno; realizar auditorías integrales.",
    perfilPosgraduado: "El egresado podrá desempeñarse como auditor externo, gerente financiero o consultor tributario.",
    costoMatricula: 3100.0,
    imagen: "/images/about.jpg",
    modalidad: "Presencial",
    facultad: "Ciencias Contables",
    planEstudios: [
      periodo(21, "Primer Semestre", [
        curso(++cursoId, "NIIF Aplicadas", 4, 720, ob("OB")),
        curso(++cursoId, "Auditoría Financiera", 4, 760, ob("OB")),
      ]),
      periodo(22, "Segundo Semestre", [
        curso(++cursoId, "Tributación Avanzada", 3, 700, ob("OB")),
        curso(++cursoId, "Control Interno", 3, 680, el("EL")),
      ]),
      periodo(23, "Tercer Semestre", [
        curso(++cursoId, "Auditoría Forense", 3, 740, el("EL")),
      ]),
      periodo(24, "Cuarto Semestre", [
        curso(++cursoId, "Taller de Tesis I", 4, 780, ob("OB")),
        curso(++cursoId, "Taller de Tesis II", 4, 780, ob("OB")),
      ]),
    ],
  },
  {
    id: 7,
    nombre: "Doctorado en Administración",
    slug: "doctorado-administracion",
    tipoPrograma: doctorado,
    objetivoGeneral: "Formar investigadores de alto nivel capaces de generar conocimiento original en el campo de la administración y las organizaciones.",
    objetivosEspecificos: "Desarrollar pensamiento crítico e investigativo; dominar metodologías cuantitativas y cualitativas; contribuir con publicaciones científicas.",
    perfilPosgraduado: "El egresado podrá liderar líneas de investigación, dirigir programas doctorales y publicar en revistas indexadas.",
    costoMatricula: 4500.0,
    imagen: "/images/banner.jpg",
    modalidad: "Presencial",
    facultad: "Ciencias Administrativas",
    planEstudios: [
      periodo(25, "Primer Semestre", [
        curso(++cursoId, "Epistemología de las Ciencias Sociales", 4, 900, ob("OB")),
        curso(++cursoId, "Metodología de la Investigación I", 4, 850, ob("OB")),
      ]),
      periodo(26, "Segundo Semestre", [
        curso(++cursoId, "Métodos Cuantitativos Avanzados", 4, 950, ob("OB")),
        curso(++cursoId, "Métodos Cualitativos", 3, 850, ob("OB")),
      ]),
      periodo(27, "Tercer Semestre", [
        curso(++cursoId, "Seminario de Investigación I", 4, 900, ob("OB")),
      ]),
      periodo(28, "Cuarto Semestre", [
        curso(++cursoId, "Seminario de Investigación II", 4, 900, ob("OB")),
      ]),
    ],
  },
  {
    id: 8,
    nombre: "Doctorado en Ciencias de la Salud",
    slug: "doctorado-ciencias-salud",
    tipoPrograma: doctorado,
    objetivoGeneral: "Formar investigadores capaces de generar conocimiento científico que contribuya a la solución de los problemas de salud de la región.",
    objetivosEspecificos: "Dominar la investigación biomédica y epidemiológica; aplicar bioética en investigación; producir publicaciones científicas.",
    perfilPosgraduado: "El egresado podrá dirigir centros de investigación, asesorar tesis doctorales y liderar estudios clínicos.",
    costoMatricula: 4200.0,
    imagen: "/images/info.jpg",
    modalidad: "Presencial",
    facultad: "Ciencias de la Salud",
    planEstudios: [
      periodo(29, "Primer Semestre", [
        curso(++cursoId, "Bioética en Investigación", 3, 800, ob("OB")),
        curso(++cursoId, "Metodología de la Investigación I", 4, 850, ob("OB")),
      ]),
      periodo(30, "Segundo Semestre", [
        curso(++cursoId, "Epidemiología Avanzada", 4, 950, ob("OB")),
        curso(++cursoId, "Bioestadística Avanzada", 4, 950, ob("OB")),
      ]),
      periodo(31, "Tercer Semestre", [
        curso(++cursoId, "Seminario de Investigación I", 4, 900, ob("OB")),
      ]),
      periodo(32, "Cuarto Semestre", [
        curso(++cursoId, "Seminario de Investigación II", 4, 900, ob("OB")),
      ]),
    ],
  },
  {
    id: 9,
    nombre: "Doctorado en Educación",
    slug: "doctorado-educacion",
    tipoPrograma: doctorado,
    objetivoGeneral: "Formar doctores en educación con capacidad de investigar y transformar los sistemas educativos desde una perspectiva crítica e innovadora.",
    objetivosEspecificos: "Desarrollar líneas de investigación educativa; analizar políticas educativas; producir conocimiento pedagógico original.",
    perfilPosgraduado: "El egresado podrá dirigir unidades de posgrado, asesorar investigaciones y liderar reformas educativas.",
    costoMatricula: 4000.0,
    imagen: "/images/admision.jpg",
    modalidad: "Semipresencial",
    facultad: "Ciencias de la Educación",
    planEstudios: [
      periodo(33, "Primer Semestre", [
        curso(++cursoId, "Filosofía de la Educación", 3, 800, ob("OB")),
        curso(++cursoId, "Metodología de la Investigación I", 4, 850, ob("OB")),
      ]),
      periodo(34, "Segundo Semestre", [
        curso(++cursoId, "Políticas Educativas", 3, 850, ob("OB")),
        curso(++cursoId, "Análisis de Datos Educativos", 4, 950, ob("OB")),
      ]),
      periodo(35, "Tercer Semestre", [
        curso(++cursoId, "Seminario de Investigación I", 4, 900, ob("OB")),
      ]),
      periodo(36, "Cuarto Semestre", [
        curso(++cursoId, "Seminario de Investigación II", 4, 900, ob("OB")),
      ]),
    ],
  },
  {
    id: 10,
    nombre: "Doctorado en Ciencia, Tecnología y Ambiente",
    slug: "doctorado-ciencia-tecnologia-ambiente",
    tipoPrograma: doctorado,
    objetivoGeneral: "Formar investigadores capaces de abordar problemas ambientales y tecnológicos desde un enfoque multidisciplinario.",
    objetivosEspecificos: "Aplicar tecnologías limpias; diseñar estudios de impacto ambiental; generar conocimiento científico sobre el cambio climático.",
    perfilPosgraduado: "El egresado podrá dirigir institutos de investigación, asesorar políticas ambientales y liderar proyectos tecnológicos.",
    costoMatricula: 4300.0,
    imagen: "/images/placeholder.png",
    modalidad: "Presencial",
    facultad: "Ingenierías",
    planEstudios: [
      periodo(37, "Primer Semestre", [
        curso(++cursoId, "Cambio Climático y Desarrollo", 4, 880, ob("OB")),
        curso(++cursoId, "Metodología de la Investigación I", 4, 850, ob("OB")),
      ]),
      periodo(38, "Segundo Semestre", [
        curso(++cursoId, "Tecnologías Limpias", 3, 900, ob("OB")),
        curso(++cursoId, "Modelamiento Ambiental", 4, 950, el("EL")),
      ]),
      periodo(39, "Tercer Semestre", [
        curso(++cursoId, "Seminario de Investigación I", 4, 900, ob("OB")),
      ]),
      periodo(40, "Cuarto Semestre", [
        curso(++cursoId, "Seminario de Investigación II", 4, 900, ob("OB")),
      ]),
    ],
  },
  {
    id: 11,
    nombre: "Residentado Médico en Pediatría",
    slug: "residentado-pediatria",
    tipoPrograma: residentado,
    objetivoGeneral: "Formar especialistas en pediatría con competencias clínicas avanzadas para la atención integral de la salud infantil.",
    objetivosEspecificos: "Dominar la clínica pediátrica hospitalaria; manejar emergencias pediátricas; conducir investigación clínica.",
    perfilPosgraduado: "El egresado podrá ejercer como pediatra en hospitales, dirigir servicios de pediatría y realizar investigación clínica.",
    costoMatricula: 2600.0,
    imagen: "/images/info.jpg",
    modalidad: "Presencial",
    facultad: "Ciencias de la Salud",
    planEstudios: [
      periodo(41, "Primer Año", [
        curso(++cursoId, "Pediatría General", 5, 900, ob("OB")),
        curso(++cursoId, "Neonatología", 4, 850, ob("OB")),
      ]),
      periodo(42, "Segundo Año", [
        curso(++cursoId, "Emergencias Pediátricas", 4, 850, ob("OB")),
        curso(++cursoId, "Investigación Clínica", 3, 700, el("EL")),
      ]),
      periodo(43, "Tercer Año", [
        curso(++cursoId, "Subespecialidad Pediátrica", 4, 880, ob("OB")),
      ]),
    ],
  },
  {
    id: 12,
    nombre: "Segunda Especialidad en Auditoría",
    slug: "segunda-especialidad-auditoria",
    tipoPrograma: segundas,
    objetivoGeneral: "Formar profesionales contables con competencias especializadas en auditoría financiera y gubernamental.",
    objetivosEspecificos: "Aplicar normas de auditoría vigentes; realizar auditorías gubernamentales; diseñar informes técnicos.",
    perfilPosgraduado: "El egresado podrá desempeñarse como auditor en el sector público y privado.",
    costoMatricula: 2400.0,
    imagen: "/images/about.jpg",
    modalidad: "Semipresencial",
    facultad: "Ciencias Contables",
    planEstudios: [
      periodo(44, "Primer Semestre", [
        curso(++cursoId, "Normas de Auditoría", 4, 750, ob("OB")),
        curso(++cursoId, "Auditoría Gubernamental", 4, 780, ob("OB")),
      ]),
      periodo(45, "Segundo Semestre", [
        curso(++cursoId, "Auditoría de Sistemas", 3, 720, ob("OB")),
        curso(++cursoId, "Taller de Trabajo de Investigación", 4, 800, ob("OB")),
      ]),
    ],
  },
];

export function calcularInversion(programa: ProgramaSeed) {
  const periodosValidos = programa.planEstudios.filter((p) => p.periodo.id !== 7);
  const cantidadMatriculas = periodosValidos.length;
  const sumaCostosCursos = periodosValidos.reduce(
    (suma, p) => suma + p.cursos.reduce((acc, c) => acc + c.costo, 0),
    0,
  );
  return {
    costoMatricula: programa.costoMatricula,
    cantidadMatriculas,
    sumaCostosCursos,
    inversionTotal: programa.costoMatricula * cantidadMatriculas + sumaCostosCursos,
  };
}

function toPrograma(programa: ProgramaSeed): Programa {
  return {
    ...programa,
    modalidad: { id: programa.modalidad === "Presencial" ? 1 : 2, nombre: programa.modalidad },
    facultad: { id: programa.id, nombre: programa.facultad },
    inversion: calcularInversion(programa),
  };
}

export const programasMock: Programa[] = seed.map(toPrograma);
