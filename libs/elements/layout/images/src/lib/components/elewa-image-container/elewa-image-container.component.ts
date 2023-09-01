import { Component, Input } from '@angular/core';
import { ImageConfig, ImageVisualisation } from '@elewa-website/models/schema/ui/images';

@Component({
  selector: 'elewa-website-elewa-image-container',
  templateUrl: './elewa-image-container.component.html',
  styleUrls: ['./elewa-image-container.component.scss'],
})
export class ElewaImageContainerComponent {
  @Input() config!: ImageConfig;

  getVisualisationStyle(): { [key: string]: string } {
    switch (this.config.visualisation) {
      case ImageVisualisation.Pill:
        return { 'border-radius': '50%' };
      case ImageVisualisation.stacked:
        return { position: 'absolute' };
      case ImageVisualisation.Window:
        return { 'box-shadow': '0px 0px 5px rgba(0, 0, 0, 0.2)' };
      case ImageVisualisation.Card:
        return { border: '1px solid #ccc', padding: '10px' };
      default:
        return {};
    }
  }
}