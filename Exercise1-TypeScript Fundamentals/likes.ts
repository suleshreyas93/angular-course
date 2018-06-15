export class Likes
{
    constructor(private noOfLikes?:number, private isSelected?: boolean)
    {

    }

    getNoOfLikes()
    {
        return this.noOfLikes;
    }

    getState()
    {
        return this.isSelected;
    }

    click()
    {
        if(this.isSelected)
        {
            this.noOfLikes--;
            this.isSelected = false; 
        }
        else
        {
            this.noOfLikes++
            this.isSelected = true;
        }
    }
}