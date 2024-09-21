<script>
  import Footer from "$lib/layout/Footer.svelte";
  import Navbar from "$lib/layout/Navbar.svelte";
  import "../app.css";
</script>

<div class="app">
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</div>
