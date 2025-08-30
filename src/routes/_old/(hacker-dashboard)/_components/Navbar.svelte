<script>
  import Avatar from "../../(marketing)/_components/avatar.svelte";
  import { Button } from "../../../../shared-components/button";
</script>

<header class="pt-4 pb-2 px-4 border-b flex justify-between">
  <Button size="sm">Go back to homepage</Button>

  <nav class="flex justify-center space-x-4">
    <a
      href="/"
      class="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 hover:text-gray-900"
    >
      Home
    </a>
    <a
      href="/application"
      class="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 hover:text-gray-900"
    >
      Your Application
    </a>
    <a
      href="/find-team"
      class="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 hover:text-gray-900"
    >
      Find a team
    </a>
    <a
      href="/study-mode"
      class="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 hover:text-gray-900"
    >
      Study Mode
    </a>
  </nav>

  <Avatar />
</header>
