<script lang="ts">
  import { onMount } from "svelte";
  // import ApplyNow from "$lib/shared-buttons/ApplyNow.svelte";
  import FindATeam from "./shared-buttons/FindATeam.svelte";
  // import { supabaseClientOnly } from "$lib/supabase-client";
  import { Button } from "../../../shared-components/button";
  import Avatar from "./avatar.svelte";

  export let isLoggedIn: boolean;

  let scrollY: number;
  let innerHeight: number;

  onMount(() => {
    const updateScroll = () => {
      scrollY = window.scrollY;
      innerHeight = window.innerHeight;
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  });

  $: isAtTop = scrollY === 0;
  $: opacity = isAtTop ? 0 : Math.min(0.4, scrollY / (innerHeight * 0.2));
  $: shadowOpacity = isAtTop ? 0 : Math.min(0.1, scrollY / (innerHeight * 0.2));
</script>

<section
  id="navbar"
  class="flex justify-between w-full py-6 px-10 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  style="background-color: rgba(255, 255, 255, {opacity}); 
         backdrop-filter: blur({opacity * 5}px);
         box-shadow: 0 2px 4px rgba(0, 0, 0, {shadowOpacity});"
>
  <div class="flex gap-16">
    <a href="/" class="hover:text-gray-600 transition-colors">Home</a>
    <a href="/#faq" class="hover:text-gray-600 transition-colors">FAQ</a>
    <a href="/#sponsors" class="hover:text-gray-600 transition-colors">
      Sponsors
    </a>
    <a href="/organizers" class="hover:text-gray-600 transition-colors">
      Our Team
    </a>
  </div>
  <div class="flex gap-4 items-center">
    <FindATeam />
    {#if isLoggedIn}
      <!-- <Button
        on:click={async () => {
          await supabaseClientOnly.auth.signOut();
          window.location.reload();
        }}
      >
        Sign Out
      </Button> -->
      <!-- <Button href="/dashboard">Dashboard</Button> -->
      <Avatar />
    {:else}
      <Button href="/login">Login</Button>
    {/if}
  </div>
</section>
