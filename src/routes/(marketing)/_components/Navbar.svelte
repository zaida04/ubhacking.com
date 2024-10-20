<script lang="ts">
  import { onMount } from "svelte";
  import FindATeam from "./shared-buttons/FindATeam.svelte";
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
  style="background: linear-gradient(90deg, rgba(112, 147, 120, 0.8), rgba(78, 113, 105, 0.8), rgba(167, 201, 174, 0.8));
         background-size: 400% 400%;
         animation: gradientAnimation 15s ease infinite;
         backdrop-filter: blur({opacity * 5}px);
         box-shadow: 0 2px 4px rgba(0, 0, 0, {shadowOpacity});"
>
  <div class="flex gap-16">
    <a href="/" class="hover:text-gray-600 text-white transition-colors"
      ><p>Home</p></a
    >
    <a href="/#faq" class="hover:text-gray-600 text-white transition-colors"
      ><p>FAQ</p></a
    >
    <a
      href="/#sponsors"
      class="hover:text-gray-600 text-white transition-colors"
    >
      <p>Sponsors</p>
    </a>
    <a
      href="/organizers"
      class="hover:text-gray-600 text-white transition-colors"
    >
      <p>Our Team</p>
    </a>
  </div>
  <div class="flex gap-4 items-center">
    <FindATeam />
    {#if isLoggedIn}
      <Avatar />
    {:else}
      <Button href="/login">Login</Button>
    {/if}
  </div>
</section>

<style>
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
