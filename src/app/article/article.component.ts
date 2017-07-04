import { Component, OnInit } from '@angular/core';
import { BLOGS, Blog } from '../data/blog';
import { BlogService } from './../data/blog.service'

@Component({
	selector: 'ngarticle',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})

export class ArticleComponent {
	blogList: Blog[];
	selectedBlog: Blog;
	constructor(private bService: BlogService) {
		//this.blogList = BLOGS;
		this.blogList=bService.getBlogs();
	}
	// selectBlog(blog: Blog) {
	// 	this.selectedBlog = blog;
	// }
	selectBlog(id: number) {
		this.selectedBlog = this.bService.getSelectedBlog(id);
	}
}