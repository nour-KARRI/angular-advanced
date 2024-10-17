import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'username'
})
export class UsernamePipe implements PipeTransform{
    transform(value: {firstName: string, lastName: string}): string {
        `${value.firstName.toUpperCase()} ${value.firstName}`
        return value.lastName.toUpperCase() + ' ' + value.firstName[0].toUpperCase()+ value.firstName.slice(1)
    }
}