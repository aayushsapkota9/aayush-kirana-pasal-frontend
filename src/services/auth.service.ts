import { HttpService } from '.';
import { User } from '../types/user';

export class AuthService {
  login = async (username: string, password: string) => {
    const http = new HttpService();
    const response: any = await http.service().push(`/auth/login`, {
      email: username,
      password,
    });
    if (response.status !== 200) {
      return null;
    }
    const jwtToken = response.data.access_token;
    const [payload] = jwtToken.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    const user: User = {
      name: decodedPayload.name,
      email: decodedPayload.email,
      roles: decodedPayload.roles,
      id: decodedPayload.id,
      expiredAt: decodedPayload.exp,
      accessToken: jwtToken,
    };
    return user;
  };

  getMe = (_userId: string) => {
    // return this.instance
    //   .get(`/users/${userId}`, {
    //     headers: getAuthorizationHeader(),
    //   })
    //   .then((res) => {
    //     return res.data;
    //   });
    return;
  };

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
