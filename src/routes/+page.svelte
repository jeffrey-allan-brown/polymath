<script>
	import { onMount } from "svelte";
	import { Token } from "../lib/components/tokens/Token.svelte";
	import { tokens as staticTokens } from "../assets/data/tokens";
	let isLoading = true;
	let showcaseToken, htmlTokens;

	const getTokens = async() => {
		// let tokenFetch = await fetch('./assets/data/tokens.json');
		// let tokens = await tokenFetch.json();
		return staticTokens;
	}

	const loadTokens = async() => {
		return getTokens().then((tokens) => {
			window.tokens = tokens;
			showcaseToken = tokens[0];
			htmlTokens = tokens.slice(0,1);

			console.log("tokens: ", htmlTokens)
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

<div class="py-6">
	<div class="mx-auto px-4 sm:px-6 md:px-8">
		<h1 class="text-2xl font-semibold text-gray-900">dashboard</h1>
	</div>
	<div class="mx-auto px-4 sm:px-6 md:px-8">
		<div class="py-4">
			<div class="h-96 rounded-md border border-dashed border-gray-900">
				<Token/>
			</div>
		</div>
	</div>
</div>

