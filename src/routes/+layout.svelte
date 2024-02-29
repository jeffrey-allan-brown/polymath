<script>
  // core
  import Header from '../lib/components/_core/Header.svelte';
  import Sidebar from '../lib/components/_core/Sidebar.svelte';

  // ui
  import PageHeader from '../lib/components/_ui/PageHeader.svelte';

  // resources
  import '../assets/css/main.css';
</script>

<div>
  <div>
  <Sidebar/>
  <div class="flex flex-1 flex-col md:pl-64">
    <Header/>
  
    <main class="flex-1">
      <div class="py-6">
        <PageHeader/>
        <slot></slot>
        
      </div>
    </main>
  </div>
  </div>
</div>
