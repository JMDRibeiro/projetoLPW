import { Component, OnInit } from '@angular/core';
import { Tag } from './../models/Tag';
import { TagService } from './../tag.service';
@Component({
  selector: 'app-gerenciar-tags',
  templateUrl: './gerenciar-tags.component.html',
  styleUrls: ['./gerenciar-tags.component.css']
})
export class GerenciarTagsComponent implements OnInit {
  tags:Tag[] = [];
  displayDialog: boolean;
  selectedTag: Tag;
  newTag: boolean;
  tag : Tag;

  constructor(private tagsService:TagService) { }

  ngOnInit() {
    this.tags = this.tagsService.listAll();
  }

  showDialogToAdd() {
        this.newTag = true;
        this.tag = new Tag();
        this.displayDialog = true;
  }
 save() {
        if(this.newTag)
            this.tagsService.insert(this.tag);
        else
            this.tagsService.update(this.tag);
        console.log(this.tag);
        console.log(this.tags);
        this.tagsService.tags = this.tags;
        console.log(this.tagsService.tags);
        this.displayDialog = false;
        }
    
    delete() {
        let index = this.findSelectedTagIndex();
        this.tags = this.tags.filter((val,i) => i!=index);
        this.tag = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newTag = false;
        this.tag = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Tag): Tag {
        let car = new Tag();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedTagIndex(): number {
        let pos:number;
        for(let i:number = 0;i<this.tags.length;i++){
            if(this.tags[i].id==this.tag.id){
                pos = i;
            }
        }
        return pos;
    }
}
