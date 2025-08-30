<script lang="ts">
  // Logic for confetti animation can be added here if needed
</script>

<div class="upload-success-container">
  <div class="upload-success-message">
    <h1 class="text-5xl font-bold">Success!</h1>
    <h2 class="text-2xl mt-4">Your resume has been uploaded!</h2>
    <p class="text-xl mt-4">
      We will review your resume and get back to you shortly. Keep an eye on
      your inbox for updates.
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

<style>
  .upload-success-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #e0f7fa; /* Light cyan background */
    position: relative;
    overflow: hidden;
  }

  .upload-success-message {
    text-align: center;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
