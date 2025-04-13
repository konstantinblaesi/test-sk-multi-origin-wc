<script lang="ts">
    import { enhance } from "$app/forms";
	import { onMount } from "svelte";
    import SuperDebug, { superForm } from 'sveltekit-superforms';

    let { data } = $props();

    let expanded = $state(false)
    const { form:formData ,errors} = superForm(data.form);

    function expand() {
        expanded = true;
    }

    function sendHeight(trigger: string) {
        const height = document.body.scrollHeight;
        const params = [{ type: 'formHeight', height }, '*'] as const
        console.log(`Sending via postMessage (trigger: ${trigger}` , params)
        parent.postMessage(...params);
    }

    onMount(() => {
        console.log("Mounting Form")
        window.addEventListener('load', () => sendHeight("load"));
        window.addEventListener('resize', () => sendHeight("resize"));
        sendHeight("initial");
    })

</script>
<form method="post" use:enhance>
    <div class="grid">
        <div>Step: {$formData.step}</div>
        {#if $formData.step ==="final"}
            <div>Result: {$formData.result}</div>
        {/if}
        <button>Submit</button>
    </div>
    <div>
        <button type="button" onclick={expand}>Click to expand vertically</button>
    </div>  
    {#if expanded}
        <div class="expand">Dummy content to consume more vertical space</div>
    {/if}
</form>


<SuperDebug label="data" data={$formData}/>
<SuperDebug label="errors" data={$errors}/>

<style>
    .expand {
        height: 200vh;
        background: lightgrey
    }
</style>