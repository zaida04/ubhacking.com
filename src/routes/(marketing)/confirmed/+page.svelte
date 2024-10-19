<script lang="ts">
  // Logic for confetti animation can be added here if needed
</script>

<div class="congrats-container">
  <div class="congrats-message">
    <div class="congrats-text">Congrats, You Applied!</div>
    <div class="small-text">
      We'll reach out to you when things are ready. Keep an eye out in your
      email and for texts.
    </div>
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

  .congrats-text {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937; /* Dark gray text */
  }

  .small-text {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #4b5563; /* Medium gray text */
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
