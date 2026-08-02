export interface Section {
    id: string;
    label: string;
}

export const SECTIONS: Section[] = [
    {
        id: "home",
        label: "Inicio"
    },
    {
        id: "about",
        label: "Sobre nosotros"
    },
    {
        id: "services",
        label: "Servicios"
    },
    {
        id: "plans",
        label: "Planes"
    },
    {
        id: "faq",
        label: "FAQ"
    },
    {
        id: "contact",
        label: "Contacto"
    }
]