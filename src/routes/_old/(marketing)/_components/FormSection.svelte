<script lang="ts">
	export let title = '';
</script>


<div class="space-y-4 mt-12">
  <h2 class="text-2xl font-serif text-center">{title}</h2>
  <hr>
  <slot />
</div>
