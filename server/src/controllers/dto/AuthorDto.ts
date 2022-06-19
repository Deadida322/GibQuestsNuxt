import { Expose, } from "class-transformer";
import { IsDefined, Matches, IsOptional } from "class-validator";

export class AuthorDto {
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