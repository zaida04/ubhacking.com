<script lang="ts">
  // No additional scripts needed for a standalone calendar iframe
</script>

<svelte:head>
  <title>UB Hacking Schedule</title>
</svelte:head>

<section
  id="calendar"
  class="flex justify-center items-center h-screen bg-gray-100"
>
  <iframe
    title="UB Hacking Fall 2024 Schedule"
    src="https://calendar.google.com/calendar/embed?src=a78972382de284027e5558928d1f61717bcc94ac002e03a95a299f358d56f155%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
    style="border: 0"
    class="w-[90vw] h-[90vh] max-w-[1200px] max-h-[900px]"
    frameborder="0"
    scrolling="no"
  ></iframe>
</section>

<style>
  #calendar {
    background-color: #f3f4f6; /* Light gray background for contrast */
  }
</style>
