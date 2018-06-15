import { Likes } from './likes'

let like = new Likes(0,false);
console.log(like.getNoOfLikes()+" "+like.getState());
like.click();
console.log(like.getNoOfLikes()+" "+like.getState());