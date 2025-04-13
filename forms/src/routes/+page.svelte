<script lang="ts">
import { enhance } from "$app/forms";
import SuperDebug, { superForm } from 'sveltekit-superforms';

let { data } = $props();

const { form:formData ,errors} = superForm(data.form);
</script>
<form method="post" use:enhance>
    <div class="grid">
        <div>Step: {$formData.step}</div>
        {#if $formData.step ==="final"}
            <div>Result: {$formData.result}</div>
        {/if}
        <button>Submit</button>
    </div>
</form>


<SuperDebug label="data" data={$formData}/>
<SuperDebug label="errors" data={$errors}/>