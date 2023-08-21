function logValue(x: Date | string) {
  // 如果是 Date 类型的实例，就调用 toUTCString 方法
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
