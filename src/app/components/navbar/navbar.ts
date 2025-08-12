import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() paginaActiva = '';
  @Input() active = '';
    isCollapsed = signal(true);

  toggleCollapse() {
    this.isCollapsed.set(!this.isCollapsed());
  }

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
    irA(ruta: string) {
    // Aquí usarías Router.navigate si quieres navegar
    console.log('Ir a:', ruta);
  }
}
