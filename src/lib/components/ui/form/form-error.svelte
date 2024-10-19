<script lang="ts">
  export let error: string | string[] | undefined;
</script>

{#if error}
  <p class="text-red-500 text-sm mt-1">{error}</p>
{/if}
