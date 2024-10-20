<script lang="ts">
  import * as Accordion from "../../shared-components/accordion";
  import InstagramIcon from "lucide-svelte/icons/instagram";
  import LinkedinIcon from "lucide-svelte/icons/linkedin";
  import TwitchIcon from "lucide-svelte/icons/twitch";
  import ApplyNow from "./_components/shared-buttons/ApplyNow.svelte";
  import FindATeam from "./_components/shared-buttons/FindATeam.svelte";

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
  const sponsorIcons = Array(9).fill(
    "https://i.pinimg.com/originals/57/19/48/571948082e5351149c1772781a4cf4be.jpg"
  );
</script>

<svelte:head>
  <title>UBHacking - Fall 2024</title>
  <meta
    name="description"
    content="Join us, in a wonderland. A UB Hacking wonderland. UB Hacking is University at Buffalo's annual 48-hour hackathon."
  />
</svelte:head>

<section
  id="hero"
  class="flex flex-col md:flex-row justify-between py-8 px-4 md:px-24"
>
  <div id="left-side" class="mb-8 md:mb-0">
    <div id="eye-grabbers" class="mb-8">
      <h1 class="text-4xl md:text-8xl font-semibold">Join UB Hacking</h1>
      <h3 class="text-xl md:text-3xl">November 9th - 10th.</h3>
    </div>

    <div id="info-and-ctas">
      <p class="w-full md:w-[40rem] mb-4">
        UB Hacking is University at Buffalo's annual 48-hour hackathon. <br
          class="hidden md:inline"
        />Join us, in a wonderland.
      </p>

      <div class="flex flex-col items-center sm:flex-row gap-4">
        <FindATeam />
        <ApplyNow />
      </div>
    </div>
  </div>

  <div id="right-side" class="w-full md:w-auto">
    <iframe
      title="UB Hacking Fall 2024 Schedule"
      src="https://calendar.google.com/calendar/embed?src=a78972382de284027e5558928d1f61717bcc94ac002e03a95a299f358d56f155%40group.calendar.google.com&ctz=America%2FNew_York"
      style="border: 0"
      class="w-full h-[300px] md:w-[600px] md:h-[400px]"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</section>

<section id="social-media" class="w-full flex flex-col items-center py-8">
  <h2 class="text-2xl mb-4 text-center">Follow us for updates</h2>
  <div class="flex flex-wrap justify-center gap-8 md:gap-16 w-fit">
    <a href="https://www.instagram.com/ubhacking/?hl=en">
      <InstagramIcon size={40} class="md:w-[60px] md:h-[60px]" />
    </a>
    <a href="https://www.linkedin.com/company/ubhacking">
      <LinkedinIcon size={40} class="md:w-[60px] md:h-[60px]" />
    </a>
    <a href="https://ub-hacking-fall-2023.devpost.com/" class="my-auto">
      <p class="font-bold text-xl md:text-2xl">Devpost</p>
    </a>
    <a href="https://www.twitch.tv/ubhacking">
      <TwitchIcon size={40} class="md:w-[60px] md:h-[60px]" />
    </a>
  </div>
</section>

<section
  id="description"
  class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 py-16 md:py-36 px-4 md:px-0"
>
  <div id="left-side">
    <h1
      class="text-3xl md:text-5xl font-semibold mb-4 text-center md:text-left"
    >
      What is UB Hacking?
    </h1>
    <p class="w-full md:w-[45rem] text-center md:text-left">
      UB Hacking is a 48-hour hackathon at the University at Buffalo on November
      9th & 10th. We welcome participants of all experience levels and
      backgrounds to build cool projects, enjoy Red Bull, and connect with
      fellow hackers. <br /><br />Attendees can also join workshops led by
      industry professionals and network with local company recruiters
      throughout the weekend.
    </p>
  </div>
  <div id="right-side" class="mt-8 md:mt-0">
    <img
      src="/icon.png"
      alt="UB Hacking Logo"
      class="w-40 md:w-60 rounded-xl mx-auto md:mx-0"
    />
  </div>
</section>

<section id="faq" class="py-14 px-4 md:px-28">
  <h2 class="text-2xl font-semibold text-center mb-8">Questions & Answers</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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

<section id="sponsors" class="flex flex-col items-center py-20 px-4">
  <h2 class="text-3xl md:text-4xl font-semibold text-center mb-2">Sponsors</h2>
  <h3 class="text-lg md:text-xl text-center">These people give us money</h3>

  <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
    {#each sponsorIcons as icon}
      <img
        src={icon}
        alt="Sponsor Logo"
        class="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto"
      />
    {/each}
  </div>
</section>

<section
  class="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8 mt-8 bg-gray-200"
>
  <h3 class="text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0">
    Down 2 Hack? Join the fun, no pressure.
  </h3>
  <ApplyNow />
</section>
