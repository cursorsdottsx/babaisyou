import mappings from "../mappings";
import { Entity } from "./Entity";

export class Wall extends Entity {
    constructor(x: number, y: number) {
        super("subject", "WALL", x, y, ...mappings.sprites.get("subject:WALL")!);
    }
}
