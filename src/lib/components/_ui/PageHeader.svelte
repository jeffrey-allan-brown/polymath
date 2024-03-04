<script>
  import { beforeUpdate } from 'svelte';
  import { page } from '$app/stores';
  
  let headerText = " ";

  beforeUpdate(() => {
		if ($page.route.id == "/") {
    headerText = "Active Pathways"
  } else if ($page.route.id == "/pathways") {
    headerText = "Available Pathways"
  } else if ($page.route.id == "/achievements") {
    headerText = "Achievements"
  }
	});
  
</script>

<div class="mx-auto mb-5 px-4 sm:px-6 md:px-8">
  <h1 class="text-4xl font-semibold">{ headerText }</h1>
</div>