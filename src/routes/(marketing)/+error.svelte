<script>
  import Button from "../../shared-components/button/button.svelte";
</script>

<div class="min-h-[75vh] bg-white text-black flex flex-col items-center pt-20">
  <div class="z-10">
    <h1 class="text-6xl font-bold mb-4">404</h1>
  </div>

  <p class="text-xl mb-8 text-center z-10">
    Oops! The page you're looking for doesn't exist.
    <br />
    Let's get you back to safety!
  </p>

  <div class="z-10">
    <a href="/">
      <Button variant="default">Go back home</Button>
    </a>
  </div>
</div>
