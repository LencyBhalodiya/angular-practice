import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  constructor() {

    effect(() => {
     console.log('Effect run: ', this.title());
    });
  }


  title: WritableSignal<any> = signal<any>({ title: 'Angular Signals Starter' });

  obj: any = { title: "it's change now" };

  derivedTitle: Signal<string> = computed(() => this.title().title + ' derived');

  onbtnClick(): void {

    this.title.set(this.obj);

    setTimeout(() => {
      this.title.update((obj) => ({ ...obj, title: obj.title + ' Again' }));
    }, 1200);
  }
}
