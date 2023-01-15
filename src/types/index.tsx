export interface IFUser {
  id: number;
  displayName: string;
  avt: string;
  followers: number;
  following: number;
}

export interface IFPost {
  id: number;
  timeCreate: string;
  author: IFUser;
  desc: string;
  image: string[];
  likeCount: number;
  cmtCount: number;
  shareCount: number;
}
