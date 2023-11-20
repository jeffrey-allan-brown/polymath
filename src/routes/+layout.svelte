<script>
  import Header from '../lib/components/_core/Header.svelte';
  import '../assets/css/main.css';
</script>

<div>
  <Header/>
  <div class="flex flex-1 flex-col">
    <slot></slot>
  </div>
</div>
