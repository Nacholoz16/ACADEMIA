import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICurso } from '../interfaces/icurso';
import { catchError, map, Observable, of } from 'rxjs';
import { CURSOS } from '../interfaces/cursos.data';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private http = inject(HttpClient);
  private apiKey = '51665595-894d5dc6a24be44557f9860d0'; // Pon aquí tu clave de Pixabay

  // La "caja de memoria compartida" para las URLs de las imágenes
  private cacheImagenes = new Map<string, string[]>();

  /**
   * Obtiene un curso específico por su ID y le asigna la imagen correcta,
   * usando el caché si es posible.
   */
  getCursoConImagen(id: string): Observable<ICurso | undefined> {
    // 1. Encontrar los datos base del curso en nuestro mock
    const cursoBase = CURSOS.find(c => c.id === id);
    if (!cursoBase) {
      return of(undefined); // Si no existe el curso, devolver undefined
    }

    // 2. Usar la categoría del curso para obtener la lista de cursos CON IMÁGENES
    // Esta función usará el caché o llamará a Pixabay si es necesario.
    return this.getCursosPorCategoria(cursoBase.categoria).pipe(
      // 3. De la lista devuelta (ya con imágenes), encontrar nuestro curso específico
      map(cursosConImagenes => 
        cursosConImagenes.find(c => c.id === id)
      )
    );
  }

  /**
   * Esta función ahora vive en el servicio. Obtiene cursos por categoría
   * y maneja el caché de imágenes.
   */
  getCursosPorCategoria(categoria: string): Observable<ICurso[]> {
    const cursosFiltrados = CURSOS.filter(
      c => c.categoria.toLowerCase() === categoria.toLowerCase()
    );
    if (cursosFiltrados.length === 0) {
      return of([]);
    }

    // Revisa el caché primero
    if (this.cacheImagenes.has(categoria)) {
      const urlsCacheadas = this.cacheImagenes.get(categoria)!;
      const cursosConImagenes = cursosFiltrados.map((curso, index) => ({
        ...curso,
        urlImagenPortada: urlsCacheadas[index % urlsCacheadas.length]
      }));
      return of(cursosConImagenes);
    }

    // Si no, va a Pixabay
    const pixabayUrl = `https://pixabay.com/api/?key=${this.apiKey}&q=${encodeURIComponent(categoria)}&image_type=photo&orientation=horizontal&min_width=400&min_height=300&lang=es&per_page=3&safesearch=true`;
    
    return this.http.get<any>(pixabayUrl).pipe(
      map(response => {
        if (response && response.hits && response.hits.length > 0) {
          const imagenes = response.hits;
          const urlsParaCache = imagenes.map((img: any) => img.webformatURL);
          
          // Guarda en el caché para la próxima vez
          this.cacheImagenes.set(categoria, urlsParaCache);
          
          return cursosFiltrados.map((curso, index) => ({
            ...curso,
            urlImagenPortada: urlsParaCache[index % urlsParaCache.length]
          }));
        } else {
          return cursosFiltrados;
        }
      }),
      catchError(error => {
        console.error('Error al obtener imágenes de Pixabay:', error);
        return of(cursosFiltrados);
      })
    );
  }
}