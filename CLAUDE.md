# CLAUDE.md — Dermatología en Atención Primaria: Hot Topics

## Proyecto

Landing page para el curso precongreso **"Dermatología en Atención Primaria: Hot Topics"**, parte del XXXII Congreso Mexicano de la Sociedad Mexicana de Dermatología (SMD), organizado en colaboración con el Colegio de Médicos Dermatólogos de Nuevo León, A.C. (CMDNL).

- **Fecha del evento:** 15 de Abril, 2026
- **Sede:** CINTERMEX, Monterrey, Nuevo León, México
- **Público objetivo:** Médicos de primer contacto (medicina general, familiar, interna, pediatría, residentes, estudiantes)
- **Costo de inscripción:** $1,500 MXN (con opción de beca)
- **NO mencionar** que el curso es "interactivo" en ningún lugar

---

## Stack Tecnológico

| Componente | Tecnología |
|---|---|
| Frontend | HTML/CSS/JS (single-page, vanilla) o React si se prefiere |
| Deploy | Vercel |
| Backend / DB | Supabase (inscripciones, códigos de beca) |
| Repositorio | GitHub |
| Dominio | (pendiente de confirmar) |

---

## Estructura de Deploy

```
/
├── index.html          ← Landing page principal
├── assets/
│   ├── logos/
│   │   ├── smd-logo.png         ← Logo circular de la SMD (escudo azul, "Pars in Toto", 1936)
│   │   ├── smd-congreso-logo.png ← Logo del XXXII Congreso MTY 2026 (montañas + texto azul)
│   │   └── cmdnl-logo.png       ← Logo del CMDNL (escudo verde + mapa de NL)
│   └── images/
│       └── flyer-hero.jpg        ← Imagen del flyer (opcional, para hero o OG image)
├── CLAUDE.md           ← Este archivo
└── README.md
```

---

## Logos (3 obligatorios)

Se deben incluir los 3 logos en la landing page, visibles idealmente en el hero o footer:

1. **Logo SMD (escudo):** Círculo azul marino con texto "Sociedad Mexicana de Dermatología" alrededor, emblema central con "Pars in Toto" y año "1936". Colores: azul marino (#1e3264), gris/plata, blanco.

2. **Logo XXXII Congreso SMD MTY 2026:** Montañas estilizadas en azul con texto "CONGRESO XXXII MTY 2026" y subtítulo "Sociedad Mexicana de Dermatología". Colores: azules degradados (#2b5ea7, #1e3264).

3. **Logo CMDNL:** Escudo cuadrado verde/guinda con mapa de Nuevo León al centro, texto "Dermatología Médica Estética y Quirúrgica" alrededor. A su lado: "CMDNL" en negritas + "Colegio de Médicos Dermatólogos de Nuevo León, A.C."

**Los archivos de los logos deben colocarse en `assets/logos/` y referenciarse desde el HTML.**

---

## Paleta de Colores (basada en el flyer oficial)

El flyer usa un estilo de círculos superpuestos en tonos pastel con fondo limpio. Los colores exactos:

```css
:root {
  /* Primarios */
  --navy: #1e3264;          /* Azul marino (logos SMD, textos principales) */
  --navy-dark: #142248;     /* Fondo oscuro */
  --blue: #2b5ea7;          /* Azul medio (logo congreso) */

  /* Pastel del flyer — círculos superpuestos */
  --mint: #a8e0d0;          /* Verde menta */
  --mint-light: #d2f0e8;
  --sage: #b8d8c8;          /* Verde salvia */
  --lavender: #d8c8e8;      /* Lavanda/lila */
  --lavender-light: #ece4f4;
  --peach: #f8dcc8;         /* Durazno */
  --peach-light: #fceee4;
  --yellow: #f0e0a0;        /* Amarillo suave */
  --yellow-light: #f8f0d0;
  --rose: #f0c8c0;          /* Rosa suave */

  /* Neutros */
  --cream: #fdfbf7;         /* Fondo general */
  --white: #ffffff;
  --text: #2a2a3a;          /* Texto principal */
  --text-light: #5a5a7a;    /* Texto secundario */

  /* Acentos */
  --teal: #3aa89f;          /* Verde teal (CTAs, acentos) */
  --teal-dark: #2e8a82;
  --gold: #c8a840;          /* Dorado (breaks, detalles) */
}
```

**Estilo visual:** Fondo crema/blanco limpio con orbes/círculos pastel superpuestos que crean profundidad. Efecto parallax al scroll (capas a distintas velocidades). Tipografía elegante (Playfair Display para títulos, Outfit para body). Sensación premium, médico-profesional pero cálida.

---

## Tipografía

```
Títulos:  Playfair Display (serif) — 900, 700, 400, italic
Body:     Outfit (sans-serif) — 300, 400, 500, 600, 700, 800
```

Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Secciones de la Landing Page

### 1. Hero
- Badge: "Precongreso · XXXII Congreso Mexicano de la Sociedad Mexicana de Dermatología"
- Fecha: 15 de Abril, 2026 · CINTERMEX, Monterrey, N.L.
- Título: "Dermatología en Atención Primaria" + accent "Hot Topics"
- Descripción corta del curso (sin decir "interactivo")
- Precio visible: $1,500 MXN
- CTA: "Inscríbete ahora →" → ancla a #registro
- Tags de las dos organizaciones
- Efecto: círculos pastel decorativos + parallax

### 2. Impacto SMD + CMDNL
- Texto sobre el compromiso de la SMD al fomentar educación dermatológica a través del CMDNL
- Stats: 90+ años de la SMD, 18 conferencias, 13 ponentes, 1 día de inmersión
- Highlight: cómo esto impacta la calidad de atención en México

### 3. Beneficios (4 cards)
- Enfoque práctico, +18 conferencias, Sede CINTERMEX, Networking

### 4. Coordinadores
- Dra. Lucía Treviño Rangel — Coordinadora Académica
- Dr. Med. Roger A. González Ramírez — Coordinador Académico
- (Solo como coordinadores, NO tienen pláticas en el programa)

### 5. Programa Académico (timeline visual)
Ver sección detallada abajo.

### 6. Registro (formulario + flujo de beca)
Ver sección detallada abajo.

### 7. Footer
- Los 3 logos
- Nombre completo del congreso
- © 2026

---

## Programa Académico Completo

**IMPORTANTE:** Las pláticas del Dr. Jesús Ancer Rodríguez y la Dra. Lucía Treviño Rangel fueron eliminadas. Los horarios están redistribuidos respetando los 3 breaks.

### Inauguración y Generalidades
| Hora | Tema | Ponente |
|---|---|---|
| 09:00 – 09:10 | Inauguración y bienvenida | Dr. Med. Roger A. González Ramírez / Dra. Lucía Treviño Rangel |
| 09:10 – 09:30 | Manejo inicial del paciente con comezón | Dra. Alejandra Goldaracena Ramírez |

### Enfermedades Infecciosas
| Hora | Tema | Ponente |
|---|---|---|
| 09:30 – 09:50 | Dermatosis infecciosas bacterianas comunes | Dra. María Dolores Guerrero Putz |
| 09:50 – 10:15 | Infecciones virales comunes | Dr. Med. Roger A. González Ramírez |
| **10:30 – 11:00** | **☕ Receso · Preguntas y respuestas** | — |

### Patologías Frecuentes en Consulta
| Hora | Tema | Ponente |
|---|---|---|
| 11:00 – 11:20 | Micosis superficiales: diagnóstico rápido y manejo racional | Dr. Candelario Rodríguez Vivian |
| 11:20 – 11:40 | Patología ungueal: no todo es onicomicosis | Dra. Alejandra Goldaracena Ramírez |
| 11:40 – 12:00 | Dermatitis seborreica de cara y piel cabelluda | Dra. María Dolores Guerrero Putz |
| 12:00 – 12:20 | Acné y rosácea: diagnóstico diferencial y cuándo referir | Dr. Rubén Casados Vergara |
| 12:20 – 12:40 | Alopecia areata y otras causas frecuentes de caída de cabello | Dra. Nelly Alejandra Espinoza González |

### Dermatología Pediátrica
| Hora | Tema | Ponente |
|---|---|---|
| 12:40 – 13:00 | Dermatitis atópica y eccemas: abordaje integral desde la atención primaria | Dra. Laura Ramos |
| **13:00 – 13:30** | **☕ Receso · Preguntas y respuestas** | — |
| 13:30 – 13:50 | Hemangiomas y otras lesiones vasculares | Dra. Gloria Rosales |

### Enfermedades con Involucro Sistémico
| Hora | Tema | Ponente |
|---|---|---|
| 13:50 – 14:10 | Psoriasis y diagnósticos diferenciales | Dra. Nelly Alejandra Espinoza González |
| 14:10 – 14:20 | Hidradenitis supurativa: enfermedades inflamatorias y comorbilidades | Dr. Alberto Cárdenas de la Garza |
| **14:20 – 15:30** | **🍽️ Comida libre** | — |
| 15:30 – 15:50 | Piel y síndrome metabólico: implicaciones clínicas en atención primaria | Dr. Rubén Casados Vergara |

### Temas Comunes que Debemos Dominar
| Hora | Tema | Ponente |
|---|---|---|
| 15:50 – 16:10 | Dermatitis de contacto, manejo práctico | Dra. Maira Herz Ruelas |
| 16:10 – 16:30 | Nevos y cáncer de piel: lesiones sospechosas, diagnóstico temprano y referencia oportuna | Dr. Med. Roger A. González Ramírez |
| **16:30 – 16:50** | **❓ Preguntas y respuestas** | — |
| 16:50 – 17:00 | Clausura | — |

---

## Flujo de Inscripción

```
[Paso 1] Formulario de datos
  → Nombre, Apellidos, Email, Teléfono, Especialidad, Institución, Ciudad
  → Checkbox obligatorio: aceptar Aviso de Privacidad (modal)
  → Botón: "Avanzar →"

[Paso 2] ¿Cuentas con beca?
  → Opción A: "No tengo beca" → Ir a Paso 3A
  → Opción B: "Sí, tengo beca" → Ir a Paso 3B

[Paso 3A] Pago
  → Muestra monto: $1,500 MXN
  → Botón: "Continuar al pago →" → redirige a link externo (PENDIENTE)

[Paso 3B] Código de beca
  → Input para código (uppercase, hasta 10 caracteres)
  → Validación contra lista de códigos válidos
  → Si válido → Paso 4 (éxito)
  → Si inválido → Mostrar error

[Paso 4] Confirmación
  → Mensaje de éxito: "¡Inscripción completada!"
```

### Integración con Supabase

Las inscripciones deben guardarse en Supabase:

```sql
-- Tabla: inscripciones
CREATE TABLE inscripciones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  apellidos TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  telefono TEXT NOT NULL,
  especialidad TEXT NOT NULL,
  institucion TEXT,
  ciudad TEXT NOT NULL,
  tiene_beca BOOLEAN DEFAULT FALSE,
  codigo_beca TEXT,
  estado TEXT DEFAULT 'pendiente', -- pendiente, pagado, becado
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla: codigos_beca
CREATE TABLE codigos_beca (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  usado BOOLEAN DEFAULT FALSE,
  usado_por UUID REFERENCES inscripciones(id),
  usado_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Códigos de beca iniciales para seed:**
```
BECA2026A, BECA2026B, BECA2026C, BECA2026D, BECA2026E
BECA2026F, BECA2026G, BECA2026H, BECA2026I, BECA2026J
SMD001, SMD002, SMD003, SMD004, SMD005
CMDNL001, CMDNL002, CMDNL003, CMDNL004, CMDNL005
```

---

## Aviso de Privacidad (Modal)

**Responsable:** Sociedad Mexicana de Dermatología, A.C. y Colegio de Médicos Dermatólogos de Nuevo León, A.C., con domicilio en Monterrey, Nuevo León, México.

**Datos personales recabados:** Nombre completo, correo electrónico, número telefónico, especialidad médica, institución de adscripción y ciudad de residencia.

**Finalidades:**
- Gestionar inscripción y participación en el curso "Dermatología en Atención Primaria: Hot Topics"
- Enviar confirmaciones, recordatorios y material del evento
- Estadísticas internas y reportes de asistencia
- Informar sobre futuros eventos de la SMD o el CMDNL

**Transferencia:** No se compartirán datos con terceros sin consentimiento, salvo lo previsto por la LFPDPPP.

**Derechos ARCO:** Acceder, Rectificar, Cancelar u Oponerse al tratamiento de datos personales.

---

## Efectos Visuales

- **Parallax 3D:** Orbes de color pastel (mint, lavender, peach, yellow, rose) en fondo fijo que se mueven a distintas velocidades con el scroll. Figuras geométricas flotantes con rotación 3D (perspective + rotateX/Y/Z).
- **Scroll Reveal:** Elementos aparecen con fade + translateY al entrar en viewport (IntersectionObserver).
- **Hover states:** Cards con elevación, botones con scale/shadow.
- **Timeline del programa:** Línea vertical con gradiente multicolor, dots en cada evento, cards que se desplazan al hover.

---

## Pendientes

- [ ] Link de plataforma de pago (reemplazar `href="#"` en botón de pago)
- [ ] Archivos de los 3 logos (colocar en `assets/logos/`)
- [ ] Configurar Supabase (crear tablas, obtener URL + anon key)
- [ ] Configurar Vercel (conectar repo GitHub)
- [ ] Dominio custom (opcional)
- [ ] Generar más códigos de beca si se necesitan
- [ ] Imagen del flyer como OG image para redes sociales

---

## Notas Adicionales

- El evento es parte del precongreso del XXXII Congreso Mexicano de la **Sociedad Mexicana de Dermatología** (usar nombre completo, NO abreviar como "CMSMD")
- Siempre mencionar ambas organizaciones: SMD y CMDNL
- Resaltar el impacto de la SMD al fomentar educación dermatológica a través del CMDNL para mejorar la atención primaria en México
- NO usar la palabra "interactivo" en ningún contexto
