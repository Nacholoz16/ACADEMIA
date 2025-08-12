export interface IRecurso {
  nombre: string;
  url: string;
}

export interface ILeccion {
  id: string;
  titulo: string;
  tipo: 'video' | 'articulo' | 'quiz';
  urlVideo?: string;
  duracionEnMinutos: number;
  contenidoHtml?: string;
  recursos: IRecurso[];
}

export interface IUnidad {
  id: string;
  titulo: string;
  objetivo: string;
  lecciones: ILeccion[];
}

export interface IInstructor {
  nombre: string;
  tituloProfesional: string;
  biografia: string;
  urlFoto: string;
}

export interface ICurso {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  precio: number;
  moneda: 'USD' | 'CLP' | 'EUR';
  idioma: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Todos los niveles';
  categoria: string;
  fechaActualizacion: Date;
  urlImagenPortada: string;
  urlVideoPromocional?: string;
  loQueAprenderas: string[];
  requisitos: string[];
  aQuienVaDirigido: string[];
  unidades: IUnidad[];
  instructor: IInstructor;
}


// Interfaz para los slides del carrusel de cursos pestaña home
export interface Slide {
  imagen: string;
  titulo: string;
  descripcion: string;
}