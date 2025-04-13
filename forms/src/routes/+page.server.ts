import { formSchema } from '$lib/formSchema';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

export async function load() {
    const form = await superValidate(valibot(formSchema));

    return { form };
}

export const actions = {
	async default() {
        const form = await superValidate(valibot(formSchema));

        if(form.data.step === "initial") {
            form.data.step = "final"
            form.data.result = 42
        }

        return { form };
    },
};
