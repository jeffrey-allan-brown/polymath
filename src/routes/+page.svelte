<script>

  // ui
  import EmptyPathways from '../lib/components/_ui/EmptyPathways.svelte';
  import PathwayListItem from '../lib/components/_ui/PathwayListItem.svelte';

</script>
	
<svelte:head>
	<title>dashboard new | polymath</title>
	<meta name="description" content="polymath dashboard" />
</svelte:head>

<div class="py-2">
	<div class="mx-auto px-4 sm:px-6 md:px-8">
		<PathwayListItem></PathwayListItem>
		<EmptyPathways></EmptyPathways>
	</div>
</div>

<style>
	
</style>