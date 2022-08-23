export default {
  getPropName: (prop: any, value: any) => {
    for (const i in prop) {
      if (prop[i] == value) {
        return i
      }
    }
    return false
  },

  mergeTwoObjectsIgnoreUndefinedValue: (obj1: object, obj2: object) => {
    const obj3 = {}
    for (const i in obj1) {
      if (obj1[i] !== undefined) {
        obj3[i] = obj1[i]
      }
    }
    for (const i in obj2) {
      if (obj2[i] !== undefined) {
        obj3[i] = obj2[i]
      }
    }
    return obj3
  },

  isEmptyObject: (obj: any) => {
    return (
      !obj || // 👈 null and undefined check
      (Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype)
    )
  },

  isNullOrUndefined: (obj: any) => {
    return obj === null || obj === undefined
  },
}
