export default class EmailRegex {
  static handleEmailRegex(email: string) {
    let isValid = true;
    const emailRules =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    if (!emailRules.test(email)) isValid = false;
    return isValid;
  }
}
