import {Pipe, PipeTransform} from "@angular/core";
// import {ISelectOption} from "@app/shared/models/common.models";
// @ts-ignore
import {isString} from "lodash-es";

@Pipe({
  name:'selectOptions'
})
export class SelectOptionsPipe implements PipeTransform{
  transform(options:string[] |any[]): any {
    return options.map((option:string|any,index:number)=>isString(option) ? {name:option,value:index+1} : option);;
  }
}
