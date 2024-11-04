<script lang="ts">
  import { supabase } from "$lib/supabase";
  import { onMount } from "svelte";

  let registrations: any[] = [];

  const fetchRegistrations = async () => {
    const { data, error } = await supabase
      .from("registration")
      .select("id, name_first, name_last, contact_email, resume_url, accepted");

    if (error) {
      console.error("Error fetching registrations:", error);
    } else {
      registrations = data;
    }
  };

  const toggleAcceptance = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("registration")
      .update({ accepted: !currentStatus })
      .eq("id", id);

    if (error) {
      console.error("Error updating acceptance status:", error);
    } else {
      registrations = registrations.map((reg) =>
        reg.id === id ? { ...reg, accepted: !currentStatus } : reg
      );
    }
  };

  onMount(() => {
    fetchRegistrations();
  });
</script>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Registrations Overview</h1>
  {#if registrations.length > 0}
    <table class="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border px-4 py-2">Name (Email)</th>
          <th class="border px-4 py-2">Resume</th>
          <th class="border px-4 py-2">Accept</th>
        </tr>
      </thead>
      <tbody>
        {#each registrations as reg}
          <tr>
            <td class="border px-4 py-2">
              {reg.name_first}
              {reg.name_last} ({reg.contact_email})
            </td>
            <td class="border px-4 py-2">
              {#if reg.resume_url}
                <a
                  href={`https://your-supabase-url.storage/resume/${reg.resume_url}`}
                  target="_blank"
                  class="text-blue-500 hover:underline"
                >
                  View Resume
                </a>
              {:else}
                No Resume
              {/if}
            </td>
            <td class="border px-4 py-2 text-center">
              <button
                on:click={() => toggleAcceptance(reg.id, reg.accepted)}
                class={`px-2 py-1 text-white ${reg.accepted ? "bg-green-500" : "bg-red-500"} rounded`}
              >
                {reg.accepted ? "Accepted" : "Not Accepted"}
              </button>
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
