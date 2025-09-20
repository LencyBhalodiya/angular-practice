import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  title = signal<any>({ title: 'Angular Signals Starter' });
  obj:any = { title: "it's change now" };

  onbtnClick(): void {
    
    this.title.set(this.obj);

    setTimeout(() => {
      this.title.update((obj) => ({ ...obj, title: obj.title + ' Again' }));
    }, 1000);
  }
}
