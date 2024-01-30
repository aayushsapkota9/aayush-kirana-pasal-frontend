export class AuthService {
  // protected readonly instance: AxiosInstance;
  // public constructor(url: string) {
  //   this.instance = axios.create({
  //     baseURL: url,
  //     timeout: 30000,
  //     timeoutErrorMessage: 'Time out!',
  //   });
  // }

  login = (username: string, password: string) => {
    const sessionDurationInMilliseconds = 3600000; // 1 hour
    const expirationTime = Date.now() + sessionDurationInMilliseconds;
    return {
      username: username,
      expiredAt: expirationTime, // Assuming a timestamp representing expiration time (in milliseconds since Epoch)
      accessToken: 'exampleAccessToken',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png', // Optional field for avatar URL
      id: 'exampleUserId',
    };
  };
  // login = (username: string, password: string) => {
  //   return this.instance
  //     .post('/login', {
  //       username,
  //       password,
  //     })
  //     .then((res) => {
  //       return {
  //         username: res.data.username,
  //         avatar: res.data.avatar,
  //         id: res.data.userId,
  //         accessToken: res.data.access_token,
  //         expiredAt: res.data.expiredAt,
  //       };
  //     });
  // };

  // getMe = (userId: string) => {
  //   return this.instance
  //     .get(`/users/${userId}`, {
  //       headers: getAuthorizationHeader(),
  //     })
  //     .then((res) => {
  //       return res.data;
  //     });
  // };

  // uploadAvatar = (userId: string, newAvatar: File) => {
  //   const formData = new FormData();
  //   formData.append('file', newAvatar);
  //   return this.instance
  //     .post(`/users/${userId}/upload`, formData, {
  //       headers: getAuthorizationHeader(),
  //     })
  //     .then((res) => {
  //       return {
  //         newAvatar: res.data.data.url,
  //       };
  //     });
  // };
}
