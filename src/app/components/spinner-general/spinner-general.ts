import { Component, effect, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-spinner-general',
  imports: [],
  templateUrl: './spinner-general.html',
  styleUrl: './spinner-general.css'
})
export class SpinnerGeneral {
@Input() cargando = false;
  @Input() minTimeMs: number = 0;

  visible = signal(false);
  fadeOut = signal(false);
  private timeout: any;
  private start_time: number = 0;

  // 👇 2. Eliminamos el constructor y el effect

  // 👇 3. Creamos el método ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    // Nos aseguramos de que el cambio sea en la propiedad 'cargando'
    if (changes['cargando']) {
      const nuevoValor = changes['cargando'].currentValue;

      if (nuevoValor) {
        // Lógica para MOSTRAR el spinner
        this.start_time = Date.now(); // Guardamos cuándo empezó
        clearTimeout(this.timeout);
        this.fadeOut.set(false);
        this.visible.set(true);
      } else {
        // Lógica para OCULTAR el spinner
        const elapsedTime = Date.now() - this.start_time;
        const delay = Math.max(0, this.minTimeMs - elapsedTime);

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.fadeOut.set(true);
          // Esperamos que termine la animación de fade-out (300ms en tu código original)
          this.timeout = setTimeout(() => this.visible.set(false), 300); 
        }, delay);
      }
    }
  }
}