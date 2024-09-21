<script>
  import Navbar from "$lib/layout/Navbar.svelte";
  import "../app.css";
</script>

<div class="app">
  <Navbar />

  <main>
    <slot />
  </main>
</div>
