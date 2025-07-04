import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() tprimaryBtnText: string = "";
  @Input() secundaryBtnText: string = "";
  @Output("Submit") onSubmit = new EventEmitter();
  @Input() disablePrimaryBtn: boolean = true;
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
  navigatet(){
    this.onNavigate.emit();
  }
}
