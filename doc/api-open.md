# API Pública — api-posgrado

Base URL: `http://localhost:8080`

## CORS

Los endpoints aceptan requests desde orígenes configurados en la variable de entorno `CORS_ALLOWED_ORIGINS` (actualmente `http://localhost:5173`). Métodos permitidos: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`.

---

## Formato de respuesta

### Éxito — `ApiResponse<T>`

```json
{
  "success": true,
  "message": "ok",
  "data": { ... },
  "timestamp": 45
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `success` | `boolean` | Siempre `true` |
| `message` | `string` | `"ok"` |
| `data` | `object` | Datos de la respuesta (varía por endpoint) |
| `timestamp` | `long` | Milisegundos que tardó el endpoint |

### Error — `ErrorResponse`

```json
{
  "success": false,
  "message": "Programa no encontrado con slug: xyz",
  "status": 404,
  "timestamp": 1715987634234
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `success` | `boolean` | Siempre `false` |
| `message` | `string` | Descripción del error |
| `status` | `int` | Código HTTP |
| `timestamp` | `long` | Epoch millis del error |

---

## Endpoints

### 1. Listar todos los tipos de programa

```
GET /api/open/tipos-programa
```

#### Respuesta

`ApiResponse<List<TipoProgramaResponse>>`

```json
{
  "success": true,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "nombre": "Maestría",
      "slug": "maestria",
      "imagenCard": "/images/maestria-card.jpg",
      "imagenHero": "/images/maestria-hero.jpg"
    },
    {
      "id": 2,
      "nombre": "Doctorado",
      "slug": "doctorado",
      "imagenCard": "/images/doctorado-card.jpg",
      "imagenHero": "/images/doctorado-hero.jpg"
    }
  ],
  "timestamp": 12
}
```

#### curl

```bash
curl http://localhost:8080/api/open/tipos-programa
```

---

### 2. Obtener programa por slug

```
GET /api/open/programas/{slug}
```

#### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|:---:|-------------|
| `slug` | path | Sí | Slug del programa |

#### Respuesta

`ApiResponse<ProgramaResponse>`

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "id": 1,
    "nombre": "Maestría en Ciencias de la Computación",
    "slug": "maestria-ciencias-computacion",
    "objetivoGeneral": "Formar profesionales con capacidad de...",
    "objetivosEspecificos": "Desarrollar habilidades en investigación...",
    "perfilPosgraduado": "El egresado será capaz de...",
    "costoMatricula": 5000.00,
    "imagen": "/images/mcc.jpg",
    "modalidad": {
      "id": 1,
      "nombre": "Presencial"
    },
    "facultad": {
      "id": 2,
      "nombre": "Ingeniería"
    },
    "tipoPrograma": {
      "id": 1,
      "nombre": "Maestría",
      "slug": "maestria",
      "imagenCard": "/images/maestria-card.jpg",
      "imagenHero": "/images/maestria-hero.jpg"
    },
    "inversion": {
      "costoMatricula": 5000.00,
      "cantidadMatriculas": 4,
      "sumaCostosCursos": 3200.00,
      "inversionTotal": 23200.00
    },
    "planEstudios": [
      {
        "periodo": {
          "id": 1,
          "nombre": "Primer Semestre"
        },
        "cursos": [
          {
            "id": 10,
            "asignatura": { "id": 101, "nombre": "Cálculo Avanzado" },
            "creditos": 4,
            "costo": 800.00,
            "categoria": { "id": 1, "nombre": "OB" }
          },
          {
            "id": 11,
            "asignatura": { "id": 102, "nombre": "Algoritmos" },
            "creditos": 3,
            "costo": 600.00,
            "categoria": { "id": 1, "nombre": "OB" }
          }
        ]
      },
      {
        "periodo": {
          "id": 2,
          "nombre": "Segundo Semestre"
        },
        "cursos": [
          {
            "id": 12,
            "asignatura": { "id": 103, "nombre": "Bases de Datos" },
            "creditos": 3,
            "costo": 900.00,
            "categoria": { "id": 1, "nombre": "OB" }
          }
        ]
      }
    ]
  },
  "timestamp": 85
}
```

#### Errores

| Código | Mensaje |
|--------|---------|
| `404` | `Programa no encontrado con slug: {slug}` |

#### curl

```bash
curl http://localhost:8080/api/open/programas/maestria-ciencias-computacion
```

---

### 3. Listar programas por tipo de programa

```
GET /api/open/programas/tipo/{slug}
```

#### Parámetros

| Parámetro | Tipo | Requerido | Default | Descripción |
|-----------|------|:---:|---------|-------------|
| `slug` | path | Sí | — | Slug del tipo de programa (ej. `maestria`) |
| `q` | query | No | — | Filtro de búsqueda por nombre (LIKE %q%) |
| `page` | query | No | `0` | Número de página (base 0) |
| `size` | query | No | `10` | Tamaño de página. Solo acepta `5`, `10` o `20` |

#### Respuesta

`ApiResponse<PagedModel<ProgramaListItemResponse>>`

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "content": [
      {
        "id": 1,
        "nombre": "Maestría en Administración de Empresas",
        "slug": "maestria-administracion-empresas",
        "objetivoGeneral": "Formar líderes capaces de...",
        "objetivosEspecificos": "Desarrollar competencias en...",
        "perfilPosgraduado": "El egresado podrá...",
        "costoMatricula": 3500.00,
        "imagen": "/images/mba.jpg",
        "modalidad": {
          "id": 1,
          "nombre": "Presencial"
        },
        "facultad": {
          "id": 3,
          "nombre": "Administración"
        },
        "tipoPrograma": {
          "id": 1,
          "nombre": "Maestría",
          "slug": "maestria",
          "imagenCard": "/images/maestria-card.jpg",
          "imagenHero": "/images/maestria-hero.jpg"
        }
      }
    ],
    "page": {
      "size": 10,
      "number": 0,
      "totalElements": 25,
      "totalPages": 3
    }
  },
  "timestamp": 18
}
```

> **Nota:** Los resultados siempre se ordenan alfabéticamente por `nombre` ascendente.

#### curl

```bash
# Sin filtro
curl "http://localhost:8080/api/open/programas/tipo/maestria"

# Con búsqueda
curl "http://localhost:8080/api/open/programas/tipo/maestria?q=admin"

# Con paginación
curl "http://localhost:8080/api/open/programas/tipo/maestria?q=admin&page=0&size=5"
```

---

## Esquema de datos

### TipoProgramaResponse

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Long` | Identificador único |
| `nombre` | `String` | Nombre del tipo de programa |
| `slug` | `String` | Slug único |
| `imagenCard` | `String` | URL de imagen para tarjeta |
| `imagenHero` | `String` | URL de imagen hero |

### ProgramaResponse (detalle completo)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Long` | Identificador único |
| `nombre` | `String` | Nombre del programa |
| `slug` | `String` | Slug único |
| `objetivoGeneral` | `String` | Objetivo general del programa |
| `objetivosEspecificos` | `String` | Objetivos específicos |
| `perfilPosgraduado` | `String` | Perfil del posgraduado |
| `costoMatricula` | `BigDecimal` | Costo de matrícula |
| `imagen` | `String` | URL de la imagen principal |
| `modalidad` | `Modalidad` | Modalidad del programa |
| `facultad` | `Facultad` | Facultad del programa |
| `tipoPrograma` | `TipoPrograma` | Tipo de programa |
| `inversion` | `Inversion` | Cálculo de inversión |
| `planEstudios` | `PlanEstudioPorPeriodo[]` | Plan de estudios agrupado por periodo |

### ProgramaListItemResponse (listado)

Igual que `ProgramaResponse` pero **sin** `inversion` ni `planEstudios`.

### Modalidad / Facultad / Periodo / Asignatura / Categoria

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Long` | Identificador único |
| `nombre` | `String` | Nombre |

### Inversion

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `costoMatricula` | `BigDecimal` | Costo de matrícula del programa |
| `cantidadMatriculas` | `int` | Cantidad de periodos (excluyendo id=7) |
| `sumaCostosCursos` | `BigDecimal` | Suma de costos de cursos (excluyendo periodo id=7) |
| `inversionTotal` | `BigDecimal` | `(costoMatricula × cantidadMatriculas) + sumaCostosCursos` |

### PlanEstudioPorPeriodo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `periodo` | `Periodo` | Datos del periodo |
| `cursos` | `Curso[]` | Cursos del periodo |

### Curso

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `Long` | ID del plan de estudio |
| `asignatura` | `Asignatura` | Datos de la asignatura |
| `creditos` | `short` | Número de créditos |
| `costo` | `BigDecimal` | Costo del curso |
| `categoria` | `Categoria` | Categoría (ej. "OB", "EL") |

---

## Códigos de error

| Código | Causa |
|--------|-------|
| `404` | Recurso no encontrado (slug inválido) |
| `500` | Error interno del servidor |
