<script>
	import { onMount } from "svelte";
	import Token  from "../lib/components/tokens/Token.svelte";
	import { tokens as staticTokens } from "../assets/data/tokens";

	let isLoading = true;
	let htmlTokens;

	const getTokens = async() => {
		// let tokenFetch = await fetch('./assets/data/tokens.json');
		// let tokens = await tokenFetch.json();
		return staticTokens;
	}

	const loadTokens = async() => {
		return getTokens().then((tokens) => {
			window.tokens = tokens;
			htmlTokens = tokens.slice(0,1);

			isLoading = false;
		});
	}

	onMount(() => {
		loadTokens();
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
				<div class="h-96 rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"></div>
			</div>
		</div>
	</main>
</div>

<!-- <div class="py-6">
	<div class="mx-auto px-4 sm:px-6 md:px-8">
		<div class="py-4">
			<div class="h-96">
				{#if isLoading}
				loading...
				{:else}
					{#each htmlTokens as token, index}
						<Token
							id = {token.id}
							title = {token.title}
							images = {token.images}
							description = {token.description}
							category = {token.category}
							subcategory = {token.subcategory}
							number = {token.number}
							difficulty = {token.difficulty}
						/>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div> -->