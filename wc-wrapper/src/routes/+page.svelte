<script>
	import DemoForm from "$lib/DemoForm.wc.svelte";

</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="container">
    <DemoForm title="Demo Form"  url="https://forms.local:3000/"/>
</div>

<style>
    .container {
        position: absolute;
        width: 100%;
        height: 100%
    }
</style>