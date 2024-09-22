<script>
  import "../../app.css";
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

  <main class="mt-[90px]">
    <slot />
  </main>

  <Footer />
</div>
