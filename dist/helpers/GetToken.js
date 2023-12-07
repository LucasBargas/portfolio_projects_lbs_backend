"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetToken {
    static handleGetToken(req) {
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader && authHeader.split(' ')[1];
            return token;
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return error;
        }
    }
}
exports.default = GetToken;
