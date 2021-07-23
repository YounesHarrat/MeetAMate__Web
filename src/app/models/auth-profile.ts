export class AuthProfile{
  nickname: string = "";
  name: string = "";
  picture: string = "";
  updated_at: number = Date.now();
  email: string = "";
  email_verified : boolean = false;
  sub: string = "";
}
