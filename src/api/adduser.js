import loginuser from "../utils/loginuser";

export const adduserapi = function (a, b) {
  return loginuser.post('/users', {
    data: {
      a,
      b
    }
  })
  // return loginuser.post('/v1_0/authorizations', {a,b})
}