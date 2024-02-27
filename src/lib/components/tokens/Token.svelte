<script>
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";
  import { activeToken } from "../../stores/activeToken";
  import { clamp, round, adjust } from "../../helpers/math";

  // data / token props
  export let id = "";
  export let title = "";
  export let number = "";
  export let difficulty = "";
  export let description = "";
  export let images = "";
  export let category = "";
  export let subcategory = "";
</script>

<div class="max-w-sm w-full sm:w-1/2 lg:w-1/3">
  <div class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="bg-cover h-80 p-4" style="background-image: url({images.small})">
      <div class="flex justify-end">
        {number}
      </div>
    </div>
    <div class="p-4">
      <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{id}</p>
      <p class="text-3xl text-gray-900">{title}</p>
      <p class="text-gray-700">{description}</p>
    </div>
    <div class="px-4 pt-3 pb-3 border-t border-gray-300 bg-gray-100">
      <div class="flex items-center">
        <div>
          <p class="font-bold text-gray-900">{category}</p>
          <p class="text-sm text-gray-700">{subcategory}</p>
          <p class="text-sm text-gray-700">{difficulty}</p>
        </div>
      </div>
    </div>
  </div>
</div>