import { get } from 'src/utils/http'

export default {
  doTest () {
    const url = 'http://www.baidu.com'
    return get(url, {})
  }
}
