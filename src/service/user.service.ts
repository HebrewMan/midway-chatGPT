import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {

  async getUserInfo(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
      token:100,
      promptHistory: []//ai 交互记录
    };
  }


  async getUserIntiveInfo(userId: number): Promise<any> {
    return {
      intiveTotal: 100,
      rewards: 100,
    };
  }


  async login(userName: string, userPassword: string): Promise<boolean> {
    //查看用户是否是真实用户
    //查表
    const user = true;
    return user;
  }

  async register(userName: string, userPassword: string, code: number): Promise<boolean> {
    //检查验证码是否正确
    const user = true;
    //注册成功直接 登录
    return user;
  }

  async invite(fromUserId:number,inviteId:number): Promise<boolean> {
    //邀请成功绑定关系
    const user = true;
    //注册成功直接 登录
    return user;
  }


  async pay(uid: string, amount: string): Promise<boolean> {
    //调用支付接口
    //成功之后返回 true
    const user = true;
    //注册成功直接 登录
    return user;
  }


}
