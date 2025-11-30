import { Component, OnInit } from '@angular/core';
import { IMAGE_ITEMS, } from './image-items';
import { ImageItem } from '../../shared/interfaces/image-item';
import { GalleriaModule } from 'primeng/galleria';



@Component({
  selector: 'app-image-gallery',
  imports: [GalleriaModule,],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent implements OnInit {
  images: ImageItem[] = IMAGE_ITEMS;

     responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

  ngOnInit(): void {

  }

}
