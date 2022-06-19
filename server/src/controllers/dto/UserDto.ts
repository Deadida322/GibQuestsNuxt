import { Expose, Type} from "class-transformer";
import { IsDefined, Matches, IsOptional } from "class-validator";

export class UserDto {
    id: number
    @IsDefined()
    @Expose()
    name: string;

    @IsDefined()
    @Expose()
    surname: string;

    @IsDefined()
    @Expose()
    username: string;

    @IsDefined()
    @Expose()
    password: string;

}