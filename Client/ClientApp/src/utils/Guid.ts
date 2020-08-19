import { uuid } from "uuidv4";

export class Guid {
    private guid: string;

    constructor() {
        this.guid = uuid();
    }

    public get get(): string {
        return this.guid;
    }

    public generate(): string {
        this.guid = uuid();
        return this.guid;
    }

    public static generate(): string {
        const guid = new Guid();
        return guid.generate();
    }
}
