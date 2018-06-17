import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'case'
})
export class TitleCasePipe implements PipeTransform
{
    
    transform(value:string, args?:any): any
    {
        
        if(!value)
        {
            return null;
        }
        let input = value.split(' ');
        for(let i = 0; i < input.length; i++)
        {
            if(i > 0 && this.isPreposition(input[i]))
            {
                input[i] = input[i].toLowerCase();
            }
            else
            {
                input[i] = this.toTitleCase(input[i]);
            }
        }

        return input.join(' ');
    }

    private toTitleCase(word: string): string
    {
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition(word: string) : boolean
    {
        let prepositions = ['the','of'];
        return prepositions.includes(word.toLowerCase());
    }
}