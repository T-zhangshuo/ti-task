import level from 'level'
import sublevel from 'level-sublevel'
export default class LeveldbClass {
  constructor (options) {
    this.options = options
    this.path = options.path
    this.db = sublevel(level(this.path, { valueEncoding: 'json' }))
  }

  async index (indexes) {
    this.indexdb = this.db.sublevel('index')
    db.pre(async (input) => {
      const value = input.value
      const key = input.key
      if (typeof value !== 'object') {
        return
      }
      for (const index of indexes) {
        if (typeof value[index] !== 'undefined') {
          const prevValue = await this.indexdb.get(index)
          const newValue = prevValue ? prevValue.concat([key]) : [key]
          await this.indexdb.put(index + ':' + value[index], newValue)
        }
      }
    })
  }

  put (key, value) {
    return this.db.put(key, value)
  }

  get (key) {
    return this.db.get(key)
  }

  del (key) {
    return this.db.del(key)
  }

  async query (index, value) {
    const results = []
    const keys = await this.indexdb.get(index + ':' + value)
    if (keys.length) {
      for (const key of keys) {
        const res = await this.db.get(key)
        results.push(res)
      }
    }
    return results
  }
}

// import LevelDB from "./leveldb.class.js";
// let db = new LevelDB({ path: __dirname + "/data" });
// await db.index([ "name", "age" ]);
// await db.put("1001", { id: "1001", name: "lily", age: 10 });
// await db.put("1002", { id: "1002", name: "lucy", age: 11 });
// let results = await db.query("name", "lily");
