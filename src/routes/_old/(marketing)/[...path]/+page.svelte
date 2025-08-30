<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<section
  class="flex flex-col items-center justify-center h-screen text-white text-center px-4"
>
  <h1 class="text-6xl font-bold mb-4">404</h1>
  <p class="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>

  <div class="flex gap-4">
    <a href="/">
      <Button variant="default" size="lg" class="text-xl">Go to Homepage</Button
      >
    </a>
    <a href="https://discord.gg/nR6Nks3TBJ">
      <Button variant="default" size="lg" class="text-xl"
        >Join our Discord</Button
      >
    </a>
  </div>
</section>

<style>
</style>
