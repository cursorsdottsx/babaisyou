import mappings from "../mappings";
import { Entity } from "./Entity";

export class Empty extends Entity {
    constructor(x: number, y: number) {
        super("subject", "EMPTY", x, y, ...mappings.sprites.get("subject:EMPTY")!);
    }
}
