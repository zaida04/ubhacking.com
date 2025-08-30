<script>
  export let data;
</script>

<div class="min-h-screen bg-gray-100 flex flex-col items-center py-8">
  <div class="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto text-center">
    {#if data.rsvpConfirmed}
      <p class="text-green-600 pb-4">
        You are marked as RSVP'd! We look forward to seeing you at the event.
      </p>
    {/if}

    <a href="https://ubhacking.com" class="block mb-4">
      <img
        src="https://ubhacking.com/favicon.png"
        alt="UB Hacking"
        class="h-24 mx-auto"
      />
    </a>
    <h2 class="text-2xl font-bold mb-4">RSVP Confirmation</h2>
    <p class="mb-4">
      Congratulations! You have been accepted to attend <strong
        >UB Hacking 2024</strong
      >. To confirm your spot, please RSVP below.
    </p>
    <p class="mb-6">
      The event will take place from <strong>November 9-10th</strong>. Ensure
      you confirm by <strong>Saturday, November 3rd @ 11:59 PM EST</strong> to secure
      your spot.
    </p>
    <form method="POST">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Confirm Attendance
      </button>
    </form>
    <p class="mt-6 text-sm">
      If you have any questions, please visit our
      <a href="https://ubhacking.com/#faq" class="text-blue-500 underline"
        >FAQs</a
      >
      or email us at
      <a href="mailto:contact@ubhacking.com" class="text-blue-500 underline"
        >contact@ubhacking.com</a
      >.
    </p>
    <p class="mt-2 text-sm">
      Follow us on
      <a
        href="https://www.instagram.com/ubhacking"
        class="text-blue-500 underline">Instagram</a
      >
      for the latest updates.
    </p>
    <p class="mt-6 text-gray-600">The <strong>UB Hacking</strong> Team</p>
  </div>
</div>
