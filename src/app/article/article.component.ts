import { Component, OnInit } from '@angular/core';
import { BLOGS, Blog } from '../data/blog';
import { BlogService } from './../data/blog.service'

declare var $:any;

@Component({
	selector: 'ngarticle',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  ngOnInit()
   {
     $("#title").html("<p>this is a string from jQuery html setting</p>");
   }

	blogList: Blog[];
	selectedBlog: Blog;
	editStr: string;
	constructor(private bService: BlogService) {
		//this.blogList = BLOGS;
		//this.blogList = bService.getBlogs();
		bService.getBlogs().then(x => { this.blogList = x });
	}
	// selectBlog(blog: Blog) {
	// 	this.selectedBlog = blog;
	// }
	selectBlog(id: number) {
		//this.selectedBlog = this.bService.getSelectedBlog(id);
		this.bService.getSelectedBlog(id).then(blog => { this.selectedBlog = blog; console.log(blog) });
	}

	doAdd() {
		if (this.editStr.length > 0) {
			this.bService.create(this.editStr).then(x => {
				this.blogList.push(x); this.editStr = "";
			});
		}
	}
}