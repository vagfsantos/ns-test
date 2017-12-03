import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  @Input() productInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
