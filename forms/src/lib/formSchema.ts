import { number, object, picklist } from "valibot";

export const formSchema = object({
	step: picklist(["initial", "final"]),
	result: number(),
});
