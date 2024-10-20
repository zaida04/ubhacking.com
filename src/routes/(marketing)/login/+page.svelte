<script lang="ts">
  import GithubIcon from "lucide-svelte/icons/github";
  import LinkedinIcon from "lucide-svelte/icons/linkedin";

  export let data;
  let { supabase } = data;
</script>

<div class="min-h-[80vh] flex items-center justify-center bg-gray-100">
  <div class="w-full max-w-md bg-white shadow-md rounded-lg">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center mb-2">Login</h1>
      <p class="text-center text-gray-600 mb-6">Login with an OAuth provider</p>

      <div class="mt-4 flex gap-4">
        <button
          class="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center"
          on:click={async () => {
            await supabase.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: `${window.location.origin}`,
              },
            });
          }}
        >
          <GithubIcon class="mr-2 h-4 w-4" />
          GitHub
        </button>
        <button
          class="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center"
          on:click={async () => {
            await supabase.auth.signInWithOAuth({
              provider: "linkedin_oidc",
              options: {
                redirectTo: `${window.location.origin}`,
              },
            });
          }}
        >
          <LinkedinIcon class="mr-2 h-4 w-4" />
          Linkedin
        </button>
      </div>
    </div>

    <div class="p-4 text-center">
      <p class="text-sm text-gray-500">
        Don't have an account? This page will automatically create one for you
        if you click one of the above buttons.
      </p>
    </div>
  </div>
</div>
