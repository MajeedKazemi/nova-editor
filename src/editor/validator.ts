import { CodeConstruct, Expression, Module, NonEditableTkn } from "../syntax-tree/ast";
import { Context } from "./focus";

export class Validator {
    module: Module;

    constructor(module: Module) {
        this.module = module;
    }

    canAddListItemToRight(providedContext?: Context): boolean {
        // [asd|] [asd, fgh|] [asd|, fgh] => , ---
        const context = providedContext ? providedContext : this.module.focus.getContext();

        if (
            context.tokenToRight instanceof NonEditableTkn &&
            (context.tokenToRight.text == "]" || context.tokenToRight.text == ", ")
        )
            return true;

        return false;
    }

    canAddListItemToLeft(providedContext?: Context): boolean {
        // [|asd] [|asd, fgh] [asd, |fgh] => ---,
        const context = providedContext ? providedContext : this.module.focus.getContext();

        if (
            context.tokenToLeft instanceof NonEditableTkn &&
            (context.tokenToLeft.text == "[" || context.tokenToLeft.text == ", ")
        )
            return true;

        return false;
    }
}
