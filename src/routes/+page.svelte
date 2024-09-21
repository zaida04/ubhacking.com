<script lang="ts">
  import { Button } from "$lib/components/button";
  import { InstagramIcon, LinkedinIcon, TwitchIcon } from "lucide-svelte";
</script>

<svelte:head>
  <title>UBHacking - Fall 2024</title>
  <meta
    name="description"
    content="Join us, in a wonderland. A UB Hacking wonderland. UB Hacking is University at Buffalo's annual 48-hour hackathon."
  />
</svelte:head>

<section
  id="navbar"
  class="flex justify-between w-full py-6 px-10 items-center"
>
  <div class="flex gap-16">
    <a href="/">Home</a>
    <a href="/#faq">FAQ</a>
    <a href="/#prizes">Prizes</a>
    <a href="/#sponsors">Sponsors</a>
    <a href="/organizers">Organizers</a>
  </div>
  <div class="flex gap-2">
    <Button variant="outline">Find a team</Button>
    <Button variant="default">Apply now</Button>
  </div>
</section>

<section id="hero" class="flex justify-between p-8 mb-8">
  <div id="left-side">
    <div id="eye-grabbers" class="mb-8">
      <h1 class="text-6xl font-semibold">Join UB Hacking</h1>
      <p class="text-3xl">Some cool, typing tagline here.</p>
    </div>

    <div id="info-and-ctas">
      <p class="w-[40rem] mb-4">
        UB Hacking is University at Buffalo's annual 48-hour hackathon. <br
        />Join us, in a wonderland.
      </p>

      <div class="flex gap-4">
        <Button variant="outline">Find a team</Button>
        <Button variant="default">Apply now</Button>
      </div>
    </div>
  </div>

  <div id="right-side">
    <iframe
      title="UB Hacking Fall 2024 Schedule"
      src="https://calendar.google.com/calendar/embed?src=af0fd473d7ceebb78a542dc65ce6e16e44e9f91d2af8aafa54d6aa6fd4b4b026%40group.calendar.google.com&ctz=America%2FNew_York"
      style="border: 0"
      width="600"
      height="400"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</section>

<section id="social-media" class="w-full flex flex-col items-center">
  <h2 class="text-2xl mb-4">Follow us for updates</h2>
  <div class="flex gap-16 w-fit">
    <a href="https://www.instagram.com/ubhacking/?hl=en">
      <InstagramIcon size={60} />
    </a>
    <a href="https://www.linkedin.com/company/ubhacking">
      <LinkedinIcon size={60} />
    </a>
    <a href="https://ub-hacking-fall-2023.devpost.com/" class="my-auto">
      <p class="font-bold text-2xl">Devpost</p>
    </a>
    <a href="https://www.twitch.tv/ubhacking">
      <TwitchIcon size={60} />
    </a>
  </div>
</section>
