import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './sizer.component';

@NgModule({
    declarations: [SizerComponent],
    exports: [SizerComponent],
    imports: [ CommonModule ],
    providers: [],
})
export class SizerComponentModule {}
