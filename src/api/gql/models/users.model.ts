export interface User {
  id: string;
  username: string;
  email: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface UserResponse {
  user: User;
}
