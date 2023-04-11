"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
class JwtAuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || token) {
                throw new common_1.UnauthorizedException({ message: "Пользователь не авторизован" });
            }
            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException({ message: "Пользователь не авторизован" });
        }
    }
}
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map