interface UserInfo {
  email: string;
}

interface AuthResponse extends UserInfo {
  token: string;
}

interface GenericRespose {
  statusCode: number;
  user?: object;
  message?: string;
  data?: any[] | object;
}

interface AuthPayload {
  _id: string;
  username: string;
}
