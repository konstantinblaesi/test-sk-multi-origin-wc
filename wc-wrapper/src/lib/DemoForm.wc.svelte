<svelte:options customElement="prefix-form" />

<script lang="ts">
type Props = {
	title: string;
	url: string;
};

const { title, url }: Props = $props();
</script>

<iframe {title} src={url}></iframe>

<style>
	iframe {
		/** reset user agent defaults */
		border: none;
		/* customize */
		width: 100%;
		height: 100%;
	}
</style>