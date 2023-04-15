import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./roles-auth.decorator";


@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private jwtService: JwtService,
                private reflector: Reflector){

    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        try{
            const reqiuredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ])
            if (!reqiuredRoles){
                return true;
            }
            const req = context.switchToHttp().getRequest()
            const authHeader = req.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if (bearer !== 'Bearer' || !token){
                throw new UnauthorizedException({message : "Пользователь не авторизован"})
            }

            const user = this.jwtService.verify(token)
            req.user = user;
            console.log(user)
            console.log(user.login)
            console.log(user.name)
            console.log(user.roles)
            return user.roles.some(role => reqiuredRoles.includes(role.value));
        }
        catch(e){
            console.log(e);
            throw new HttpException("Отказано в доступе", HttpStatus.FORBIDDEN)
        }
    }
}