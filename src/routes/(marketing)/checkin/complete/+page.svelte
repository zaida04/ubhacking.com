<script lang="ts">
    import type { PageServerData } from "./$types";

  // Logic for confetti animation can be added here if needed
  export let data: PageServerData
	const { checked_in, reason, fullName } = data
</script>

{#if checked_in === true}
<div class="congrats-container">
  <div class="congrats-message">
    <h1 class="text-5xl font-bold">Checked In!</h1>
    <h2 class="text-2xl mt-4">Welcome to UBHacking, {fullName}!</h2>
    <p class="text-xl mt-4">
	  Thanks for checking in.
	  Please look over the schedule and listen for any announcements. 
    </p>
  </div>

  <!-- Confetti elements -->
  {#each Array(100) as _, i}
    <div
      class="confetti"
      style="--confetti-color: hsl({Math.random() * 360}, 100%, 50%); 
               left: {Math.random() * 100}%; 
               animation-delay: {Math.random() * 2}s;"
    ></div>
  {/each}
</div>
{:else}
  <div class="congrats-container">
  		<div class="congrats-message">
  			<h1 class="text-5xl font-bold">Uh oh!</h1>
  			<h2 class="text-2xl mt-4">Error checking in: {reason}</h2>
  			<p class="text-xl mt-4">
			  If the above reason seems clear please try again,
			  otherwise please contact a UBHacking organizer
			</p>
  		</div>
  </div>
{/if}

<style>
  .congrats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f3f4f6; /* Light gray background */
    position: relative;
    overflow: hidden;
  }

  .congrats-message {
    text-align: center;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  /* Confetti animation */
  .confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: var(--confetti-color);
    opacity: 0; /* Start hidden */
    animation: confetti-animation 3s linear infinite;
  }

  @keyframes confetti-animation {
    0% {
      transform: translateY(-120vh) rotate(0deg); /* Start off-screen */
      opacity: 0;
    }
    10% {
      opacity: 1; /* Fade in as it starts to fall */
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 1;
    }
  }
</style>

