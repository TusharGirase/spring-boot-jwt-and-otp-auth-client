import { Role } from "./role";

export class User {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    jwt?: string;
    roles: Role[];
}