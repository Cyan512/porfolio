export const SITE_URL = 'https://posgrado.unsaac.edu.pe/';

export interface Page {
	id: string;
	label: string;
	href: string;
}

export interface Section {
	id: string;
	label: string;
}

export const PAGE: Section[] = [
	{ id: 'home', label: 'Inicio' },
	{ id: 'home', label: 'Comunicados' },
]

export const SECTIONS: Section[] = [
	{ id: 'home', label: 'Inicio' },
	{ id: 'about', label: 'Sobre mí' },
	{ id: 'projects', label: 'Proyectos' },
	{ id: 'services', label: 'Servicios' },
	{ id: 'experience', label: 'Experiencia' },
	{ id: 'contact', label: 'Contacto' },
];

export const studentResources = [
	{
		title: "Reglamentos y Normas",
		description:
			"Consulta los reglamentos, normas y disposiciones que orientan la vida académica y establecen los derechos y deberes de los estudiantes.",
	},
	{
		title: "Trámites Académicos",
		description:
			"Encuentra información y orientación sobre los principales trámites académicos, requisitos, procedimientos y documentos que necesitas realizar.",
	},
	{
		title: "Calendario Académico y de Pagos",
		description:
			"Revisa las fechas importantes del periodo académico, así como los plazos establecidos para matrículas, pagos y demás actividades administrativas.",
	},
	{
		title: "Ruta del Graduado",
		description:
			"Conoce los pasos, requisitos y procedimientos necesarios para culminar tu formación académica y gestionar el proceso de graduación.",
	},
	{
		title: "Acreditación del Idioma",
		description:
			"Consulta los requisitos y procedimientos para acreditar el dominio de un idioma como parte de los requisitos para la culminación de tus estudios.",
	},
];


/** Clases compartidas por las píldoras y los botones redondos de la UI fija. */
export const PILL =
	'bg-neutral-dark/60 backdrop-blur-md text-neutral-white transition-colors hover:bg-neutral-dark/80';
