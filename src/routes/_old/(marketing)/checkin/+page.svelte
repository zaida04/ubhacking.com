<script lang="ts">
  import type { PageServerData } from "./$types";

  // Logic for confetti animation can be added here if needed
  export let data: PageServerData;
  let confirmation = false;
  $: console.log(confirmation);
</script>

<div class="container max-w-md mt-48">
  <h2 class="text-2xl font-bold mb-4">Commication Confirmation</h2>
  <p class="mb-4">
    Please confirm the following before checking in (yes or no):
  </p>
  <p class="mb-4">
    <input
      type="checkbox"
      id="acceptance"
      name="acceptance"
      bind:value={confirmation}
      bind:checked={confirmation}
    />
    I authorize MLH to send me occasional emails about relevant events, career opportunities,
    and community announcements.
  </p>
  <a
    href={`/checkin/complete?confirm=${confirmation}`}
    class="bg-blue-500 text-white px-4 py-2 rounded">Submit</a
  >
</div>
