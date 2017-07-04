import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentComponent } from './comment/comment.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articleDetailRoutes: Routes = [
  {
    path: 'articledetail/:id',
    component: ArticleDetailComponent,
    children: [
      {
        path: 'comment',
        component: CommentComponent
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(articleDetailRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleDetailRoutingModule { }
