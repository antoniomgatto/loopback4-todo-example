import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    tittle: string;
    desc?: string;
    isComplete?: boolean;
    constructor(data?: Partial<Todo>);
}
