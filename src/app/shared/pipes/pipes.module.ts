import {NgModule} from "@angular/core";
import {SelectOptionsPipe} from "@app/shared/pipes/select.pipe";

@NgModule({
    exports: [
        SelectOptionsPipe
    ],
  imports:[],
  declarations:[SelectOptionsPipe]
})

export class PipesModule{}
