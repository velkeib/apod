import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PictureService } from '../service/picture.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  picture;
  selectedDate = new Date().toISOString().split('T')[0];
  pictureLoading = false;
  loaded = false;
  videoURL;

  constructor(private pictureService: PictureService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getPicture();
  }

  getPicture() {

    this.pictureLoading = true;
    this.loaded = false;

    let dataParam = this.selectedDate === undefined ? "" : "&date=" + this.selectedDate;

    this.pictureService.getPicture(dataParam).subscribe(data => {
      this.picture = data;
      console.log(this.picture);

      if(this.picture.media_type == "video"){
        this.videoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.picture.url);
      }

      this.pictureLoading = false;

    });
  }

  getLoading(event){
    this.loaded = true;
  }


  paging(sign: number){
    let date = new Date(this.selectedDate)
    date.setDate(date.getDate() + sign)

    this.selectedDate = date.toISOString().split('T')[0];

    this.getPicture();

  }

}
