// User data
export const user = {
    _id: "64df3c064180b81adfe41d4b",
    firstName: "Code",
    lastName: "Wave",
    email: "codewavewithasante@gmail.com",
    profession: "web developer",
    location: "",
    friends: [
      {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "John",
        lastName: "Bruce",
        email: "john@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
        views: [],
        verified: true,
        createdAt: "2023-08-18T09:33:32.519Z",
        updatedAt: "2023-08-18T09:49:19.475Z",
        __v: 2,
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
      },
      {
        _id: "64df39704180b81adfe41d0b",
        firstName: "James",
        lastName: "Jackson",
        email: "james@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
        views: new Array(6).fill("64df39704180b81adfe41d0b"), // Reduced duplication
        verified: true,
        createdAt: "2023-08-18T09:27:12.064Z",
        updatedAt: "2023-08-21T06:46:26.798Z",
        __v: 8,
        location: "Mumbai, India",
        profession: "Full-Stack Developer",
      },
      {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "User",
        lastName: "One",
        email: "user!@gmail.com",
        friends: ["64df3c064180b81adfe41d4b"],
        views: [],
        verified: true,
        createdAt: "2023-08-18T10:04:59.677Z",
        updatedAt: "2023-08-18T10:09:20.006Z",
        __v: 1,
      },
    ],
    views: new Array(28).fill("64df39704180b81adfe41d0b"), // Simplified repeated values
    verified: true,
    createdAt: "2023-08-18T09:38:14.179Z",
    updatedAt: "2023-08-21T06:46:18.258Z",
    profileUrl:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
    token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
  };
  
  // Friends data
  export const friends = [
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "John",
      lastName: "Bruce",
      email: "john@gmail.com",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "James",
      lastName: "Jackson",
      email: "james@gmail.com",
      location: "Mumbai, India",
      profession: "Full-Stack Developer",
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "User",
      lastName: "One",
      email: "user!@gmail.com",
    },
  ];
  
  // Friend requests data
  export const requests = friends.map((friend) => ({
    _id: friend._id,
    requestFrom: friend,
  }));
  
  // Suggested friends data
  export const suggest = [...friends];
  
  // Posts data
  export const posts = [
    {
      _id: "64e2fe620d7868ecff1a6a86",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Chris",
        lastName: "Omar",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
        location: "New York, USA",
      },
      description: "Hello everyone, this is a new video. Check it out. Thank you.",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692597858/SOCIALMEDIA/hdahstpztt1fvobc13st.png",
      likes: ["64df3c064180b81adfe41d4b"],
      comments: [],
      createdAt: "2023-08-21T06:04:18.297Z",
      updatedAt: "2023-08-21T06:04:18.297Z",
      __v: 0,
    },
    {
      _id: "64e1cdd64baffca670364c8c",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Love",
        lastName: "Banks",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
        location: "Mumbai, India",
      },
      description: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.`,
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2023-08-20T08:24:54.330Z",
      updatedAt: "2023-08-21T03:23:24.809Z",
      __v: 0,
    },
    {
      _id: "64df437e4a4c0d47b536a002",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "User",
        lastName: "One",
      },
      description: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      likes: [],
      comments: [],
      createdAt: "2023-08-18T10:09:20.006Z",
      updatedAt: "2023-08-18T10:09:20.006Z",
      __v: 0,
    },
  ];
  