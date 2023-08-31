import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaImageContainerComponent } from './components/elewa-image-container/elewa-image-container.component';

import { ImagesRoutesModule } from './images.routing';

@NgModule({
  imports: [CommonModule, ImagesRoutesModule],
  declarations: [ElewaImageContainerComponent],
  exports: [ElewaImageContainerComponent]
})
export class ImagesModule {}