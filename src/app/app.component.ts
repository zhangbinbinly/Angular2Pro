import { Component } from '@angular/core';
import { BlogService } from './data/blog.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<div>123</div>',
  styleUrls: ['./app.component.css'],
  providers:[BlogService]
})
export class AppComponent {
  title = 'hello world';
  words: Array<string> = [
    '哦，听说楼主很帅？',
    '是吗，没见过啊',
    '真的真的，那天去软件园看到的'
  ];
}
