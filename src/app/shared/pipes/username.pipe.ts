import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'username'
})
export class UsernamePipe implements PipeTransform {

    transform(value: {lastName: string, firstName: string}) {
        return `${value.lastName.toUpperCase()} ${value.firstName}`
    }
}