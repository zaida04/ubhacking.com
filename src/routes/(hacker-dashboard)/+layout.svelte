<script>
  const currentYear = new Date().getFullYear();
</script>

<div class="flex flex-col min-h-screen">
  <header class="pt-4 pb-2 px-4 border-b">
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
  </header>

  <main class="flex-grow">
    <slot />
  </main>

  <footer class="py-4 px-4 border-t">
    <div class="container mx-auto text-center text-sm text-gray-500">
      © {currentYear} Your Company Name. All rights reserved.
    </div>
  </footer>
</div>
