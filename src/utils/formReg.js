export function isValidPassword(password) {
  // 正則表達式：至少包含一個字母和一個數字
  const regExp = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  return regExp.test(password);
}

export function isValidEmail(email) {
  // 正则表达式用于匹配有效的电子邮件格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
