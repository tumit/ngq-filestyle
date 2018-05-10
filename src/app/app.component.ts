import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // from group
  fg: FormGroup;
  citizenCard = new FormControl();
  avatar = new FormControl('turtle.jpg');
  header = new FormControl(new File(['0'], 'header.png'));

  ngOnInit() {
    this.fg = new FormGroup({
      citizenCard: this.citizenCard,
      avatar: this.avatar,
      header: this.header
    });
  }

  reset() {
    this.fg.reset();
  }

}
