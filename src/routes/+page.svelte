<script>
	import { onMount } from "svelte";
	import { renderPolymathPathway } from "../lib/helpers/pathwayRenderer";
	import pathwayData from '../assets/data/pathways.json';

	onMount(() => {
		const pathwayRoot = document.getElementById("polymath-pathway-wrapper");
		console.log(pathwayData, pathwayRoot)
		renderPolymathPathway(pathwayData, pathwayRoot);
	});
</script>

<svelte:head>
	<title>dashboard | polymath</title>
	<meta name="description" content="polymath dashboard" />
</svelte:head>

<div class="py-10">
	<header>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">General Dashboard</h1>
		</div>
	</header>
	<main>
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="px-4 py-8 sm:px-0">
				<div class="rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
					<div class="relative border-b border-gray-200 pb-5 sm:pb-0">
						<div class="md:flex md:items-center md:justify-between">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Pathways</h3>
							<div class="mt-3 flex md:absolute md:top-3 md:right-0 md:mt-0">
								<button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Option One</button>
								<button type="button" class="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Option Two</button>
							</div>
						</div>
						<div class="mt-4">
							<div class="sm:hidden">
								<label for="current-tab" class="sr-only">Select a tab</label>
								<select id="current-tab" name="current-tab" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
									<option>Front-End Development</option>
									<option>Back-End Development</option>
								</select>
							</div>
							<div class="hidden sm:block">
								<nav class="-mb-px flex space-x-8">
									<a href="/" class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Front-End Development</a>
									<a href="/" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Back-End Development</a>
								</nav>
							</div>
						</div> 
					</div>
					<div id="polymath-pathway-wrapper" style="" class="--aspect-ratio" data-resource-type="roadmap" data-resource-id="frontend">

					</div>
				</div>
			</div>
		</div>
	</main>
</div>