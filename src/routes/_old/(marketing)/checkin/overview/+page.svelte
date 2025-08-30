<script lang="ts">
    import type { PageServerData } from "./$types";

export let data: PageServerData;
	const { checkedIn } = data;
</script>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Checkin Overview</h1>
  {#if checkedIn.length > 0}
    <table class="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border px-4 py-2">Name (Email)</th>
          <th class="border px-4 py-2">Checkin Time</th>
        </tr>
      </thead>
      <tbody>
        {#each checkedIn as reg}
          <tr>
            <td class="border px-4 py-2">
              {reg.name_first}
              {reg.name_last} ({reg.contact_email})
            </td>
			<td class="border px-4 py-2">
			  {reg.checked_in_at}
			</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No registrations found.</p>
  {/if}
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
</style>
