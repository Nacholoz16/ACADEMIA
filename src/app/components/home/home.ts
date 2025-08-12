import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { catchError, map, Observable, of } from 'rxjs';
import { SpinnerGeneral } from '../spinner-general/spinner-general';
import { ICurso } from '../../interfaces/icurso';
import { CURSOS } from '../../interfaces/cursos.data';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso-service';
import { DatePipe } from '@angular/common';

// Interfaz para tipar los datos de un curso (buena práctica)




@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, SpinnerGeneral, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit {
  cursosPorCategoriaMap = new Map<string, ICurso[]>();
  cargandoCursos = true;

  // 👇 Inyectamos nuestras dependencias. ¡HttpClient y apiKey ya no son necesarios aquí!
  private router = inject(Router);
  private cursosService = inject(CursoService);

carouselSlides = [
    {
      imagen: 'https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_1280.jpg',
      titulo: 'Tecnología e Innovación',
      descripcion: 'Explora cursos de vanguardia en desarrollo y tecnología.'
    },
    {
      imagen: 'https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg',
      titulo: 'Desarrollo Profesional',
      descripcion: 'Impulsa tu carrera con habilidades de alta demanda.'
    },
    {
      imagen: 'https://cdn.pixabay.com/photo/2015/05/11/14/51/heart-762564_1280.jpg',
      titulo: 'Creatividad y Diseño',
      descripcion: 'Libera tu potencial en las artes visuales y creativas.'
    }
  ];


    categorias: string[] = [
    'Informática',
    'Ciberseguridad',
    'Cocina',
    'Relaciones Públicas',
    'Diseño Gráfico',
    'Marketing Digital',
    'Idiomas',
    'Desarrollo Web',
    'Fotografía',
    'Psicología',
    'Emprendimiento',
    'Finanzas Personales',
    'Contabilidad',
    'Ciencia de Datos',
    'Inteligencia Artificial',
    'Diseño de Interiores',
    'Redacción Creativa',
    'Educación Infantil',
    'Música',
    'Salud y Bienestar',
  ];

  ngOnInit(): void {
    this.cargandoCursos = true; 
    this.cargarCursosIniciales();
  }

  getCursosPorCategoria(categoria: string): Observable<ICurso[]> {
    return this.cursosService.getCursosPorCategoria(categoria);
  }
  

  cargarCursosIniciales(): void {
    const categoriasParaCargar = this.categorias.slice(0, 4);
    let categoriasCargadas = 0;

    categoriasParaCargar.forEach(categoria => {
      // La llamada se ve igual, pero ahora ejecuta el código del servicio
      this.getCursosPorCategoria(categoria).subscribe(cursos => {
        this.cursosPorCategoriaMap.set(categoria, cursos);
        categoriasCargadas++;
        if (categoriasCargadas === categoriasParaCargar.length) {
          // Usamos un tiempo de espera más corto, ya que el caché hará que
          // las cargas subsecuentes sean instantáneas.
          setTimeout(() => {
            this.cargandoCursos = false;
          }, 200);
        }
      });
    });
  }

  
  irCurso(id: string){
    this.router.navigate(['curso/', id ]);
  }
}
