<script>
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";
  import { activeToken } from "../../stores/activeToken";
  import { clamp, round, adjust } from "../../helpers/math";

  // data / token props
  export let id = "";
  export let name = "";
  export let number = "";
  export let set = "";
  export let types = "";
  export let subtypes = "basic";
  export let supertype = "pokémon";
  export let rarity = "common";
</script>

<div>I'm a Token</div>