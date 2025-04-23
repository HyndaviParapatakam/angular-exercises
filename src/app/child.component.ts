import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { NgForOf } from '@angular/common';
import { PureUppercasePipe } from './pure-uppercase.pipe';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgForOf, PureUppercasePipe], // ✅ include the pipe here
  template: `
    <h3>Child Component (OnPush)</h3>
    <p>Name: {{ name | pureUppercase }}</p>
    <ul>
      <li *ngFor="let item of items; trackBy: trackById">{{ item.value }}</li>
    </ul>
  `,
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges, DoCheck {
  @Input() name!: string;
  @Input() items!: { id: number; value: string }[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered:', changes);
  }

  ngDoCheck(): void {
    console.log('Change detection run in ChildComponent');
  }

  trackById(index: number, item: { id: number }) {
    return item.id;
  }
}
