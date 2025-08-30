<script>
  import Footer from "./_components/Footer.svelte";
  import Navbar from "./_components/Navbar.svelte";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

<div class="app">
  <Navbar isLoggedIn={!!session?.user} />

  <main class="mt-[80px]">
    <slot />
  </main>

  <Footer />
</div>

<style>
  :global(body) {
    background: linear-gradient(
      90deg,
      rgba(112, 147, 120, 0.8),
      rgba(78, 113, 105, 0.8),
      rgba(167, 201, 174, 0.8)
    );
  }

  :global(body::before) {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(20px);
    opacity: 0.6;
    z-index: -1;
    pointer-events: none;
  }
</style>
