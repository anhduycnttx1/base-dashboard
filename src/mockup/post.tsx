import { IFPost, IFUser } from "../types";

export const usersMock: IFUser[] = [
  {
    id: 1,
    displayName: "Hanabi",
    avt: "https://i.pravatar.cc/300?img=10",
    followers: 1000,
    following: 400,
  },
];

export const userLoginMock: IFUser = {
  id: 1,
  displayName: "Jacks",
  avt: "https://i.pravatar.cc/300?img=50",
  followers: 1000,
  following: 400,
};

export const postsMock: IFPost[] = [
  {
    id: 1,
    timeCreate: "2022-10-04T15:06:00Z",
    author: usersMock[0],
    desc: "Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    likeCount: 1000,
    cmtCount: 1000,
    image: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/26fd72128937771.61604da898ee9.jpg",
    ],
    shareCount: 100,
  },
];
