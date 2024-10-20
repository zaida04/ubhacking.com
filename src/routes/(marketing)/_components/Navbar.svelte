<script lang="ts">
  import { onMount } from "svelte";
  import FindATeam from "./shared-buttons/FindATeam.svelte";
  import { Button } from "../../../shared-components/button";
  import Avatar from "./avatar.svelte";
  import { MenuIcon, XIcon } from "lucide-svelte";
  import ApplyNow from "./shared-buttons/ApplyNow.svelte";

  export let isLoggedIn: boolean;

  let scrollY: number;
  let innerHeight: number;
  let isMenuOpen = false;

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

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<section
  id="navbar"
  class="flex justify-between w-full py-4 md:py-6 px-4 md:px-10 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  style="background: linear-gradient(90deg, rgba(112, 147, 120, 0.8), rgba(78, 113, 105, 0.8), rgba(167, 201, 174, 0.8));
         background-size: 400% 400%;
         animation: gradientAnimation 15s ease infinite;
         backdrop-filter: blur({opacity * 5}px);
         box-shadow: 0 2px 4px rgba(0, 0, 0, {shadowOpacity});"
>
  <div class="flex items-center">
    <a href="/">
      <img
        src="/icon.png"
        alt="UB Hacking Logo"
        width={40}
        class="rounded-xl"
      />
    </a>

    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
      alt="MLH Trust Badge"
      class="absolute top-[0.05rem] left-24 transform z-60"
      width="60"
    />
  </div>

  <div class="md:hidden">
    <button on:click={toggleMenu} class="text-white">
      {#if isMenuOpen}
        <XIcon size={24} />
      {:else}
        <MenuIcon size={24} />
      {/if}
    </button>
  </div>

  <div class="hidden md:flex gap-8">
    <a href="/" class="hover:text-gray-300 text-white transition-colors">
      <p>Home</p>
    </a>
    <a href="/#faq" class="hover:text-gray-300 text-white transition-colors">
      <p>FAQ</p>
    </a>
    <a
      href="/#sponsors"
      class="hover:text-gray-300 text-white transition-colors"
    >
      <p>Sponsors</p>
    </a>
    <a
      href="/organizers"
      class="hover:text-gray-300 text-white transition-colors"
    >
      <p>Our Team</p>
    </a>
  </div>

  <div class="hidden md:flex gap-4 items-center">
    <FindATeam />
    {#if isLoggedIn}
      <Avatar />
    {:else}
      <Button href="/login">Login</Button>
    {/if}
  </div>
</section>

{#if isMenuOpen}
  <button
    type="button"
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    aria-roledescription="overlay"
    aria-keyshortcuts="esc"
    on:click={toggleMenu}
    on:keydown={(e) => e.key === "Escape" && toggleMenu()}
  ></button>
  <div class="fixed top-[60px] left-0 right-0 bg-white z-50 p-4 shadow-lg">
    <nav class="flex flex-col gap-4">
      <a
        href="/"
        class="text-gray-800 hover:text-gray-600"
        on:click={toggleMenu}>Home</a
      >
      <a
        href="/#faq"
        class="text-gray-800 hover:text-gray-600"
        on:click={toggleMenu}>FAQ</a
      >
      <a
        href="/#sponsors"
        class="text-gray-800 hover:text-gray-600"
        on:click={toggleMenu}>Sponsors</a
      >
      <a
        href="/organizers"
        class="text-gray-800 hover:text-gray-600"
        on:click={toggleMenu}>Our Team</a
      >
      <!-- <FindATeam /> -->
      <ApplyNow />
      {#if isLoggedIn}
        <Avatar />
      {:else}
        <Button href="/login" on:click={toggleMenu}>Login</Button>
      {/if}
    </nav>
  </div>
{/if}

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
