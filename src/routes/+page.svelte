<script lang="ts">
  import { Button } from "$lib/components/button";
  import * as Accordion from "$lib/components/accordion";
  import { InstagramIcon, LinkedinIcon, TwitchIcon } from "lucide-svelte";

  const faq = [
    {
      title: "What is a hackathon?",
      content:
        "A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, often including domain experts, collaborate intensively on software projects.",
    },
    {
      title: "Do I have to be a CS major to attend?",
      content:
        "No! We welcome students of all majors and experience levels. Whether you're a seasoned hacker or a first-time coder, we encourage you to attend.",
    },
    {
      title: "How much does it cost to attend?",
      content:
        "UB Hacking is completely free to attend. We'll provide you with food, drinks, and swag throughout the weekend.",
    },
    {
      title: "What should I bring?",
      content:
        "You should bring your student ID, a laptop, chargers, and any other hardware you might need. We also recommend bringing a change of clothes, toiletries, and a sleeping bag if you plan on staying overnight.",
    },
    {
      title: "What if I don't have a team?",
      content:
        "No worries! We'll have a team formation session at the beginning of the event where you can meet other hackers and form a team.",
    },
    {
      title: "What if I've never been to a hackathon before?",
      content:
        "That's totally fine! We'll have workshops and mentors available throughout the weekend to help you learn new skills and build your project.",
    },
    {
      title: "Will there be food?",
      content:
        "Yes! We'll provide meals, snacks, and drinks throughout the weekend to keep you fueled and focused.",
    },
    {
      title: "What if I don't have an idea?",
      content:
        "No problem! We'll have a brainstorming session at the beginning of the event where you can pitch ideas and form a team around a project that interests you.",
    },
    {
      title: "What if I have other questions?",
      content: "Feel free to reach out to us at ub@hacking.com",
    },
  ];
  const leftFaq = faq.slice(0, Math.ceil(faq.length / 2));
  const rightFaq = faq.slice(Math.ceil(faq.length / 2));
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

<section id="description-and-faq" class="py-36">
  <div id="description" class="flex justify-center gap-20 mb-16">
    <div id="left-side">
      <h1 class="text-5xl font-semibold mb-4">What is UB Hacking?</h1>
      <p class="w-[45rem]">
        UB Hacking is a 48 hour hackathon hosted at the University at Buffalo
        held on November 9th & 10th. We invite people of all experience levels,
        backgrounds, and abilities to come and spend your weekend with us. Built
        cool projects, drink red bull, and enjoy the company of your fellow
        hackers. Throughout the weekend, you will also have the chance to attend
        workshops hosted by industry professionals and mingle with recruiters
        from top local companies. We're here to give you the best weekend of
        your entire semester.
      </p>
    </div>
    <div id="right-side">
      <img
        src="/icon.png"
        alt="UB Hacking Logo"
        width={240}
        class="rounded-xl"
      />
    </div>
  </div>

  <div id="faq" class="grid grid-cols-2 gap-8 px-28">
    <Accordion.Root id="left">
      {#each leftFaq as { title, content }}
        <Accordion.Item value={title}>
          <Accordion.Trigger>{title}</Accordion.Trigger>
          <Accordion.Content>{content}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
    <Accordion.Root id="right">
      {#each rightFaq as { title, content }}
        <Accordion.Item value={title}>
          <Accordion.Trigger>{title}</Accordion.Trigger>
          <Accordion.Content>{content}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</section>
