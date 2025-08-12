// cursos.data.ts
import { ICurso } from "./icurso";

export const CURSOS: ICurso[] = [
  // 1. Informática
  {
    id: 'curso-1',
    titulo: 'Fundamentos de Informática',
    subtitulo: 'Aprende los conceptos básicos de la informática moderna',
    descripcion:
      'Este curso te enseñará los fundamentos de la informática, desde hardware y software hasta redes y seguridad.',
    precio: 49.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Principiante',
    categoria: 'Informática',
    fechaActualizacion: new Date('2025-01-15'),
    urlImagenPortada: '/assets/cursos/informatica.jpg',
    loQueAprenderas: [
      'Entender cómo funciona un computador',
      'Diferenciar hardware y software',
      'Conceptos básicos de redes'
    ],
    requisitos: ['Ninguno'],
    aQuienVaDirigido: ['Estudiantes', 'Personas interesadas en tecnología'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Introducción a la informática',
        objetivo: 'Comprender los conceptos básicos de informática',
        lecciones: [
          {
            id: 'l1',
            titulo: '¿Qué es la informática?',
            tipo: 'video',
            urlVideo: 'https://example.com/video1',
            duracionEnMinutos: 10,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Hardware y software',
            tipo: 'articulo',
            duracionEnMinutos: 15,
            contenidoHtml: '<p>Diferencias entre hardware y software...</p>',
            recursos: [],
            
          }
        ]
      },
      {
        id: 'u2',
        titulo: 'Fundamentos a la informática',
        objetivo: 'Comprender los fundametos de informática',
        lecciones: [
          {
            id: 'l1',
            titulo: '¿Qué es la informática?',
            tipo: 'video',
            urlVideo: 'https://example.com/video1',
            duracionEnMinutos: 10,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Hardware y software',
            tipo: 'articulo',
            duracionEnMinutos: 15,
            contenidoHtml: '<p>Diferencias entre hardware y software...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Juan Pérez',
      tituloProfesional: 'Ingeniero en Informática',
      biografia:
        'Experto en sistemas informáticos con más de 15 años de experiencia en docencia y desarrollo.',
      urlFoto: '/assets/instructores/juan-perez.jpg'
    }
  },
  // 2. Ciberseguridad
  {
    id: 'curso-2',
    titulo: 'Ciberseguridad para principiantes',
    subtitulo: 'Protege tu información y aprende a prevenir ataques',
    descripcion:
      'Aprende los principios básicos de la ciberseguridad y cómo proteger tus dispositivos y datos.',
    precio: 59.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Principiante',
    categoria: 'Ciberseguridad',
    fechaActualizacion: new Date('2025-02-10'),
    urlImagenPortada: '/assets/cursos/ciberseguridad.jpg',
    loQueAprenderas: [
      'Conceptos básicos de ciberseguridad',
      'Tipos de ataques comunes',
      'Medidas de protección personal'
    ],
    requisitos: ['Uso básico de computadoras'],
    aQuienVaDirigido: ['Usuarios de internet', 'Pequeños empresarios'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Fundamentos de la ciberseguridad',
        objetivo: 'Introducir las amenazas digitales y cómo prevenirlas',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Tipos de amenazas',
            tipo: 'video',
            urlVideo: 'https://example.com/video2',
            duracionEnMinutos: 12,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Buenas prácticas de seguridad',
            tipo: 'articulo',
            duracionEnMinutos: 15,
            contenidoHtml: '<p>Consejos prácticos para mejorar tu seguridad digital...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Laura Gómez',
      tituloProfesional: 'Especialista en Ciberseguridad',
      biografia:
        'Ha trabajado en grandes empresas protegiendo sistemas críticos y capacitando a equipos.',
      urlFoto: '/assets/instructores/laura-gomez.jpg'
    }
  },
  // 3. Cocina
  {
    id: 'curso-3',
    titulo: 'Cocina Básica para Principiantes',
    subtitulo: 'Aprende a cocinar platos sencillos y deliciosos',
    descripcion:
      'Este curso enseña técnicas básicas de cocina y recetas fáciles para iniciar en el mundo culinario.',
    precio: 29.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Principiante',
    categoria: 'Cocina',
    fechaActualizacion: new Date('2025-01-05'),
    urlImagenPortada: '/assets/cursos/cocina.jpg',
    loQueAprenderas: [
      'Usar utensilios básicos de cocina',
      'Cocinar recetas simples',
      'Buenas prácticas de higiene'
    ],
    requisitos: ['Acceso a utensilios de cocina'],
    aQuienVaDirigido: ['Aficionados a la cocina', 'Estudiantes'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Introducción a la cocina',
        objetivo: 'Aprender técnicas y recetas básicas',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Utensilios y su uso',
            tipo: 'video',
            urlVideo: 'https://example.com/video3',
            duracionEnMinutos: 8,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Receta: Ensalada sencilla',
            tipo: 'articulo',
            duracionEnMinutos: 12,
            contenidoHtml: '<p>Pasos para preparar una ensalada fresca...</p>',
            recursos: [],
            
          }
        ],
        
      }
    ],
    instructor: {
      nombre: 'Carlos Ramírez',
      tituloProfesional: 'Chef Profesional',
      biografia:
        'Chef con más de 20 años de experiencia en cocina tradicional e internacional.',
      urlFoto: '/assets/instructores/carlos-ramirez.jpg'
    }
  },
  // 4. Relaciones Públicas
  {
    id: 'curso-4',
    titulo: 'Relaciones Públicas Modernas',
    subtitulo: 'Estrategias para una comunicación efectiva',
    descripcion:
      'Aprende las mejores prácticas de relaciones públicas para gestionar la imagen y comunicación de una marca.',
    precio: 69.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Intermedio',
    categoria: 'Relaciones Públicas',
    fechaActualizacion: new Date('2025-03-01'),
    urlImagenPortada: '/assets/cursos/relaciones-publicas.jpg',
    loQueAprenderas: [
      'Diseñar estrategias de comunicación',
      'Manejar crisis de reputación',
      'Crear comunicados de prensa efectivos'
    ],
    requisitos: ['Conocimientos básicos de comunicación'],
    aQuienVaDirigido: ['Profesionales de marketing', 'Empresarios'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Fundamentos de relaciones públicas',
        objetivo: 'Conocer las bases y herramientas de RP',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Historia de las relaciones públicas',
            tipo: 'video',
            urlVideo: 'https://example.com/video4',
            duracionEnMinutos: 10,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Elaboración de un comunicado',
            tipo: 'articulo',
            duracionEnMinutos: 15,
            contenidoHtml: '<p>Cómo redactar un comunicado efectivo...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Ana Torres',
      tituloProfesional: 'Licenciada en Comunicación',
      biografia:
        'Especialista en relaciones públicas con experiencia en empresas multinacionales.',
      urlFoto: '/assets/instructores/ana-torres.jpg'
    }
  },
  // 5. Diseño Gráfico
  {
    id: 'curso-5',
    titulo: 'Diseño Gráfico desde Cero',
    subtitulo: 'Aprende a crear diseños atractivos y profesionales',
    descripcion:
      'Curso práctico para dominar las herramientas y técnicas esenciales del diseño gráfico.',
    precio: 79.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Principiante',
    categoria: 'Diseño Gráfico',
    fechaActualizacion: new Date('2025-02-20'),
    urlImagenPortada: '/assets/cursos/diseno-grafico.jpg',
    loQueAprenderas: [
      'Usar Adobe Photoshop e Illustrator',
      'Principios de composición y color',
      'Diseñar para medios digitales e impresos'
    ],
    requisitos: ['Computadora con software de diseño'],
    aQuienVaDirigido: ['Diseñadores novatos', 'Emprendedores'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Introducción al diseño gráfico',
        objetivo: 'Conocer fundamentos y herramientas principales',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Principios del diseño',
            tipo: 'video',
            urlVideo: 'https://example.com/video5',
            duracionEnMinutos: 15,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Herramientas esenciales',
            tipo: 'articulo',
            duracionEnMinutos: 18,
            contenidoHtml: '<p>Cómo usar las herramientas básicas de diseño...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Pedro López',
      tituloProfesional: 'Diseñador Gráfico',
      biografia:
        'Más de 12 años creando identidades visuales y material publicitario.',
      urlFoto: '/assets/instructores/pedro-lopez.jpg'
    }
  },
  // 6. Marketing Digital
  {
    id: 'curso-6',
    titulo: 'Marketing Digital Integral',
    subtitulo: 'Domina las estrategias online para tu negocio',
    descripcion:
      'Aprende SEO, SEM, redes sociales y email marketing para impulsar tu marca.',
    precio: 89.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Intermedio',
    categoria: 'Marketing Digital',
    fechaActualizacion: new Date('2025-03-05'),
    urlImagenPortada: '/assets/cursos/marketing-digital.jpg',
    loQueAprenderas: [
      'Planificar campañas digitales',
      'Optimizar sitios para buscadores',
      'Gestionar redes sociales de forma profesional'
    ],
    requisitos: ['Conocimientos básicos de internet'],
    aQuienVaDirigido: ['Emprendedores', 'Profesionales de marketing'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Fundamentos del marketing digital',
        objetivo: 'Conocer canales y estrategias principales',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Qué es el marketing digital',
            tipo: 'video',
            urlVideo: 'https://example.com/video6',
            duracionEnMinutos: 14,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'SEO y SEM',
            tipo: 'articulo',
            duracionEnMinutos: 20,
            contenidoHtml: '<p>Estrategias para mejorar el posicionamiento...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'María Sánchez',
      tituloProfesional: 'Experta en Marketing Digital',
      biografia:
        'Consultora en marketing online con más de 10 años de experiencia.',
      urlFoto: '/assets/instructores/maria-sanchez.jpg'
    }
  },
  // 7. Idiomas
  {
    id: 'curso-7',
    titulo: 'Inglés Conversacional',
    subtitulo: 'Mejora tu fluidez y pronunciación',
    descripcion:
      'Prácticas guiadas y vocabulario útil para conversaciones cotidianas en inglés.',
    precio: 39.99,
    moneda: 'USD',
    idioma: 'Inglés',
    nivel: 'Principiante',
    categoria: 'Idiomas',
    fechaActualizacion: new Date('2025-02-01'),
    urlImagenPortada: '/assets/cursos/ingles.jpg',
    loQueAprenderas: [
      'Pronunciación correcta',
      'Frases comunes',
      'Conversaciones en situaciones reales'
    ],
    requisitos: ['Conocimientos básicos de inglés'],
    aQuienVaDirigido: ['Estudiantes', 'Viajeros'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Saludos y presentaciones',
        objetivo: 'Aprender a saludar y presentarse',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Saludos básicos',
            tipo: 'video',
            urlVideo: 'https://example.com/video7',
            duracionEnMinutos: 7,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Presentaciones personales',
            tipo: 'articulo',
            duracionEnMinutos: 10,
            contenidoHtml: '<p>Cómo presentarse de forma correcta...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Emily Johnson',
      tituloProfesional: 'Profesora de Inglés',
      biografia:
        'Nativa inglesa con experiencia enseñando a estudiantes hispanohablantes.',
      urlFoto: '/assets/instructores/emily-johnson.jpg'
    }
  },
  // 8. Desarrollo Web
  {
    id: 'curso-8',
    titulo: 'Desarrollo Web con Angular',
    subtitulo: 'Crea aplicaciones web modernas y escalables',
    descripcion:
      'Aprende a desarrollar aplicaciones con Angular, TypeScript y las mejores prácticas.',
    precio: 99.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Intermedio',
    categoria: 'Desarrollo Web',
    fechaActualizacion: new Date('2025-03-10'),
    urlImagenPortada: '/assets/cursos/angular.jpg',
    loQueAprenderas: [
      'Arquitectura de aplicaciones Angular',
      'Uso de componentes y servicios',
      'Manejo de estado y routing'
    ],
    requisitos: ['Conocimientos básicos de HTML, CSS y JavaScript'],
    aQuienVaDirigido: ['Desarrolladores', 'Estudiantes de programación'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Introducción a Angular',
        objetivo: 'Configurar el entorno y crear la primera app',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Instalación y configuración',
            tipo: 'video',
            urlVideo: 'https://example.com/video8',
            duracionEnMinutos: 20,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Estructura de un proyecto Angular',
            tipo: 'articulo',
            duracionEnMinutos: 18,
            contenidoHtml: '<p>Conociendo la arquitectura de Angular...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Nacho Martínez',
      tituloProfesional: 'Desarrollador Web Senior',
      biografia:
        'Especializado en Angular y arquitecturas escalables con más de 8 años de experiencia.',
      urlFoto: '/assets/instructores/nacho-martinez.jpg'
    }
  },
  // 9. Fotografía
  {
    id: 'curso-9',
    titulo: 'Fotografía Digital Creativa',
    subtitulo: 'Captura imágenes impresionantes con tu cámara',
    descripcion:
      'Domina técnicas de fotografía, composición y edición para crear imágenes memorables.',
    precio: 54.99,
    moneda: 'USD',
    idioma: 'Español',
    nivel: 'Principiante',
    categoria: 'Fotografía',
    fechaActualizacion: new Date('2025-01-25'),
    urlImagenPortada: '/assets/cursos/fotografia.jpg',
    loQueAprenderas: [
      'Configurar la cámara',
      'Composición fotográfica',
      'Edición básica'
    ],
    requisitos: ['Cámara digital o smartphone'],
    aQuienVaDirigido: ['Aficionados a la fotografía', 'Creadores de contenido'],
    unidades: [
      {
        id: 'u1',
        titulo: 'Fundamentos de fotografía',
        objetivo: 'Entender el uso de la cámara y composición',
        lecciones: [
          {
            id: 'l1',
            titulo: 'Configuración básica',
            tipo: 'video',
            urlVideo: 'https://example.com/video9',
            duracionEnMinutos: 9,
            recursos: [],
            
          },
          {
            id: 'l2',
            titulo: 'Regla de los tercios',
            tipo: 'articulo',
            duracionEnMinutos: 11,
            contenidoHtml: '<p>Cómo aplicar la regla de los tercios en tus fotos...</p>',
            recursos: [],
            
          }
        ]
      }
    ],
    instructor: {
      nombre: 'Sofía Herrera',
      tituloProfesional: 'Fotógrafa Profesional',
      biografia:
        'Especialista en fotografía creativa con más de 15 exposiciones en galerías.',
      urlFoto: '/assets/instructores/sofia-herrera.jpg'
    }
  },
]