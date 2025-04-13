<svelte:options customElement="prefix-form" />

<script lang="ts">
	import { onMount } from "svelte";

type Props = {
	title: string;
	url: string;
};

const { title, url }: Props = $props();

let iframRef : HTMLElement

const allowedOrigin = new URL(url).origin

onMount(() => {
	window.addEventListener('message', (event) => {
		if (event.origin !== allowedOrigin) return;
	
		const { type, height } = event.data;
		if (type === 'formHeight') {
			iframRef.style.height = `${height}px`;
		}
	  });
})

</script>

<iframe bind:this={iframRef} {title} src={url}></iframe>

<style>
	iframe {
		/* position: absolute;
		top: 0px;
		left: 0px; */
		border: 0px;
		width: 100%;
		height: 100%;
		user-select: none;
	}
</style>