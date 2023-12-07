"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailRegex {
    static handleEmailRegex(email) {
        let isValid = true;
        const emailRules = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        if (!emailRules.test(email))
            isValid = false;
        return isValid;
    }
}
exports.default = EmailRegex;
