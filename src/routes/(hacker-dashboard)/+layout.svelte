<script>
  import Navbar from "./_components/Navbar.svelte";

  const currentYear = new Date().getFullYear();
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />

  <main class="flex-grow">
    <slot />
  </main>

  <footer class="py-4 px-4 border-t">
    <div class="container mx-auto text-center text-sm text-gray-500">
      © {currentYear} Your Company Name. All rights reserved.
    </div>
  </footer>
</div>
