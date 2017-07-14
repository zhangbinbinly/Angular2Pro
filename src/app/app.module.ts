import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ArticleDetailRoutingModule } from './articledetail.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//in memory
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemeryDataService } from "./data/in-memery-data.service";
import { InMemoryTodoDbService } from "./data/todo-data.service";

//service
import { BlogService } from './data/blog.service'
import { CommentService } from './data/comment.service'
import { AuthService } from "./core/auth.service";

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    CommentComponent,
    LoginComponent,
    UserComponent,
    TodoComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ArticleDetailRoutingModule,
    //InMemoryWebApiModule.forRoot(InMemeryDataService)
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)//in memery
  ],
  providers: [BlogService, CommentService, { provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
