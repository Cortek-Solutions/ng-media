import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../services/uploader.service';
import { IImage } from '../../../definitions';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {

  public image: IImage = null;
  constructor(
    private us: UploaderService,
  ) { }

  ngOnInit() {
    this.us.photoSelector.subscribe((image: IImage) => {
      this.image = image;
    });
  }

  public DeleteImage (image: IImage) {
    
  }

}
