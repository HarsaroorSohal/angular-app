import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name: 'jolly',
 standalone: true,
})
export class JollyAppender implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return `${value}jolly`;
    }
}