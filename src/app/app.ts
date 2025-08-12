import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-secreto');
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute)
  categoriaActual = '';
  
  ngOnInit() {
    this.router.events.pipe(
      // 1. Filtra solo los eventos de NavigationEnd (cuando la navegación termina)
      filter(event => event instanceof NavigationEnd),
      // 2. Mapea al estado de la ruta activa
      map(() => {
        let route = this.activatedRoute;
        // 3. Baja hasta la ruta hija más profunda (la que realmente se muestra)
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      // 4. Obtiene el mapa de parámetros de esa ruta final
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.paramMap)
    ).subscribe(paramMap => {
      // 5. Extrae el parámetro 'nombre' (definido en app.routes.ts)
      //    y actualiza la propiedad del componente.
      const nombreCategoria = paramMap.get('nombre');
      this.categoriaActual = nombreCategoria || ''; // Si no hay parámetro, es una cadena vacía
      console.log('Categoría activa detectada:', this.categoriaActual);
    });
  }
}

