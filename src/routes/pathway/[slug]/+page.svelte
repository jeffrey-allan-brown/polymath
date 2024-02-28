<script>
	import { onMount } from "svelte";
	import Slideout from '../../../lib/components/_core/Slideout.svelte';
	import { renderPolymathPathway } from "../../../lib/helpers/pathwayRenderer";
	import pathwayData from '../../../assets/data/pathways.json';

	$: nodeStyles = "";

	onMount(() => {
		const pathwayRoot = document.getElementById("polymath-pathway-wrapper");
		console.log(pathwayData, pathwayRoot)
		renderPolymathPathway(pathwayData, pathwayRoot);
	});

	import { fly, fade } from 'svelte/transition'
	let showSidePanel, width
	function toggleSidePanel() {
			showSidePanel = !showSidePanel
	}
</script>

<div class="py-10">
	<header>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Available Pathways</h1>
		</div>
	</header>
	<div>
    <button class="p-3" on:click={toggleSidePanel}>
        Show side panel
    </button>
</div>
{#if showSidePanel}
	<Slideout on:click={toggleSidePanel}/>
	{/if}
	<main>
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="px-4 py-8 sm:px-0">
				<div id="polymath-pathway-wrapper" style="" class="--aspect-ratio" data-resource-type="roadmap" data-resource-id="[roadmapId]">
				</div>
			</div>
		</div>
	</main>
</div>