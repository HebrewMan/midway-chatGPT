import { Provide } from '@midwayjs/core';


@Provide()
export class AdminService {

  async getAdminInfo() {
    return {
      people:10000,
      money:100000,
    };
  }

}
