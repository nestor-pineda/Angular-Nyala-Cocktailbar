import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public dataInfo!: any;
  @Input() public title!: string;

  constructor() {}

  ngOnInit(): void {}
}
