import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurso } from '../../interfaces/icurso';
import { NgbAccordionModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyPipe } from '@angular/common';
import { CURSOS } from '../../interfaces/cursos.data';
import { CursoService } from '../../services/curso-service';
import { SpinnerGeneral } from '../spinner-general/spinner-general';

@Component({
  selector: 'app-informacion-curso',
  imports: [NgbAccordionModule, NgbToastModule, CurrencyPipe, SpinnerGeneral],
  templateUrl: './informacion-curso.html',
  styleUrl: './informacion-curso.css'
})
export class InformacionCurso {
 private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  // 👇 Inyectamos nuestro nuevo servicio
  private cursosService = inject(CursoService);

  curso = signal<ICurso | null>(null);
  comprado = signal<boolean>(false);
  cargandoCursos = true

  ngOnInit(): void {

    const idCurso = this.route.snapshot.paramMap.get('id');
    if (idCurso) {
      console.log("id obtenido: ", idCurso)
      this.cargarCurso(idCurso);

    } else {

      this.router.navigate(['/']);
    }
  }

cargarCurso(id: string): void {
  this.cargandoCursos = true;
  console.log('Paso 1: `cargarCurso` iniciado. Spinner activado.');

  // Mensaje justo antes de la suscripción
  console.log('Paso 2: A punto de suscribirme al servicio...');

  this.cursosService.getCursoConImagen(id).subscribe({
    next: cursoEncontrado => {
      // Mensaje DENTRO de la suscripción
      console.log('Paso 3: ¡RECIBÍ RESPUESTA DEL SERVICIO!');
      
      if (cursoEncontrado) {
        this.curso.set(cursoEncontrado);
      } else {
        console.error(`Curso con id "${id}" no encontrado.`);
        this.curso.set(null);
      }
      this.cargandoCursos = false; 
      console.log('Paso 4: `cargandoCursos` es ahora `false`. El spinner debería desaparecer.');
    },
    error: err => {
      // Mensaje en caso de error en el flujo
      console.error('Paso 3 (ERROR): Hubo un error en el servicio.', err);
      this.cargandoCursos = false;
      console.log('Paso 4 (ERROR): `cargandoCursos` es ahora `false`.');
    }
  });
  
}

  comprarCurso(): void {
    this.comprado.set(true);
  }
}