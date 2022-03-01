import axios from 'axios'

const loginuser = axios.create({
  // baseURL: 'http://127.0.0.1:8888/api/private/v1'
  baseURL: 'http://www.liulongbin.top:8000'
})

export default loginuser