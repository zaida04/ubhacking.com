<script>
  import {
    InstagramIcon,
    LinkedinIcon,
    TwitchIcon,
    FacebookIcon,
    TwitterIcon,
  } from "lucide-svelte";
</script>

<footer class="bg-gray-100 py-12 px-8">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="flex flex-col items-start">
      <img
        src="/icon.png"
        alt="UB Hacking Logo"
        width={80}
        class="rounded-xl mb-4"
      />
      <p class="text-sm text-gray-600 w-[15rem]">
        UB Hacking is a registered club at the University at Buffalo.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Sitemap</h3>
      <ul class="space-y-2">
        <li><a href="/" class="text-gray-600 hover:text-gray-900">Home</a></li>
        <li>
          <a href="#description" class="text-gray-600 hover:text-gray-900"
            >About</a
          >
        </li>
        <li>
          <a href="#faq" class="text-gray-600 hover:text-gray-900">FAQ</a>
        </li>
        <li>
          <a href="#sponsors" class="text-gray-600 hover:text-gray-900"
            >Sponsors</a
          >
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900">Schedule</a>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Blah Blah</h3>
      <ul class="space-y-2">
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900"
            >Terms of Service</a
          >
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900"
            >Privacy Policy</a
          >
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-gray-900"
            >Code of Conduct</a
          >
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Connect with Us</h3>
      <div class="flex space-x-4">
        <a
          href="https://www.instagram.com/ubhacking/?hl=en"
          class="text-gray-600 hover:text-gray-900"
        >
          <InstagramIcon size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/ubhacking"
          class="text-gray-600 hover:text-gray-900"
        >
          <LinkedinIcon size={24} />
        </a>
        <a
          href="https://www.twitch.tv/ubhacking"
          class="text-gray-600 hover:text-gray-900"
        >
          <TwitchIcon size={24} />
        </a>
        <a
          href="https://ub-hacking-fall-2023.devpost.com/"
          class="text-gray-600 hover:text-gray-900 font-semibold"
        >
          Devpost
        </a>
      </div>
    </div>
  </div>

  <div
    class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600"
  >
    <p>
      &copy; {new Date().getFullYear()} UB Hacking. Built with ❤️ by
      <a href="https://nico.engineer/" class="underline">Zaid Arshad</a>
      & <a href="github.com/p5quared" class="underline">Peter LastName</a>
    </p>
  </div>
</footer>
