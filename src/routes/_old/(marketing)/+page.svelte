<script lang="ts">
  import * as Accordion from "../../../shared-components/accordion";
  import InstagramIcon from "lucide-svelte/icons/instagram";
  import LinkedinIcon from "lucide-svelte/icons/linkedin";
  import TwitchIcon from "lucide-svelte/icons/twitch";
  import ApplyNow from "./_components/shared-buttons/ApplyNow.svelte";
  import FindATeam from "./_components/shared-buttons/FindATeam.svelte";

  const faq = [
    {
      title: "What is a hackathon?",
      content:
        "A hackathon is an event in which programmers and others involved in software development, including designers, project managers, and others collaborate intensively on a projects they believe in.",
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
      title: "Do you provide travel accommodations?",
      content: "No, unfortunately we do not provide travel accommodations.",
    },
    {
      title: "What should I bring?",
      content:
        "You should bring your student ID, a laptop, chargers, and any other hardware you might need. We also recommend bringing a change of clothes, toiletries, and a sleeping bag if you plan on staying overnight.",
    },
    {
      title: "What if I don't have a team?",
      content:
        "No worries! We'll have many opportunities for you to meet fellow hackers and potentially form a team!.",
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
        "No problem! You'll have many opportunities to think up an idea at the start, especially at our kickoff meeting!",
    },
    {
      title: "Does my theme have to be Alice in Wonderland?",
      content:
        "While we encourage you to incorporate the theme into your project, it is not required. Feel free to build whatever you'd like!",
    },
    {
      title: "What if I have other questions?",
      content: "Feel free to reach out to us at contact@ubhacking.com",
    },
  ];
  const leftFaq = faq.slice(0, Math.ceil(faq.length / 2));
  const rightFaq = faq.slice(Math.ceil(faq.length / 2));
  const sponsorIcons = [
    // logo file name, company url, height, scale (used for width to maintain aspect ratio)
    ["valmar.png", "https://valmarholdings.com/", 237, 3.5],
    [
      "ub_cse.png",
      "https://engineering.buffalo.edu/computer-science-engineering.html",
      538,
      2,
    ],
    ["mtb.png", "https://www.mtb.com/", 400, 2.5],
    ["aws.png", "https://aws.amazon.com/", 750, 1.67],
    ["a2k.png", "https://www.advance2000.com/", 150, 5.21],
    ["northtown.png", "https://www.northtownauto.com/", 300, 3.28],
    ["sift.png", "https://www.siftstack.com/", 400, 2.29],
  ] as const;
</script>

<svelte:head>
  <title>UBHacking - Fall 2024</title>
  <meta
    name="description"
    content="Join us, in a wonderland. A UB Hacking wonderland. UB Hacking is University at Buffalo's annual 32-hour hackathon."
  />
  <meta
    name="keywords"
    content="UB Hacking, University at Buffalo, Hackathon, Buffalo, New York, 32-hour, 2024, Fall"
  />
  <meta name="author" content="UB Hacking" />
  <meta name="robots" content="index, follow" />
  <meta property="og:image" content="/icon.png" />
  <meta property="og:image:alt" content="UB Hacking Fall 2024 Thumbnail" />
</svelte:head>

<section id="hero" class="py-32">
  <div class="flex flex-col md:flex-row justify-between px-4 py-16 md:px-24">
    <div id="left-side" class="mb-8 md:mb-0 pr-4">
      <div id="eye-grabbers" class="mb-8">
        <h1 class="text-4xl md:text-8xl font-semibold">Join UB Hacking</h1>
        <h3 class="text-xl md:text-3xl">November 9th & 10th.</h3>
      </div>

      <div id="info-and-ctas">
        <p class="w-full md:w-[40rem] text-2xl mb-4">
          UB Hacking is University at Buffalo's annual 32-hour hackathon. <br
            class="hidden md:inline"
          />Join us, in a wonderland. Our theme this year is Alice in
          Wonderland.
        </p>

        <div class="flex flex-col items-center sm:flex-row gap-4">
          <FindATeam />
          <ApplyNow />
        </div>

        <div class="flex flex-col w-fit mt-8 text-xl">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=ikpGlu34sUCZ4l9rUKICUDVjlLS92xdGuU9VQ26xxRFURVcxTFRBNU9MQlpWMEVNODdVVjZNWDBHVS4u"
            class="underline"
          >
            Want to become a judge?
          </a>
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=ikpGlu34sUCZ4l9rUKICUDVjlLS92xdGuU9VQ26xxRFUN0c0WEU0QTI0MzdSTkdSQ1JPUEExNzEzNy4u"
            class="underline"
          >
            Want to become a mentor?
          </a>
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=ikpGlu34sUCZ4l9rUKICUDVjlLS92xdGuU9VQ26xxRFUNDVXWVdQN0VMM1ZaMVZXMFRMVEpLV1ZMQi4u"
            class="underline"
          >
            Want to become a workshop host?
          </a>
          <a href="https://forms.gle/Suk48kSDuG3pWfEcA" class="underline">
            Want to volunteer?
          </a>
        </div>
      </div>
    </div>

    <div id="right-side" class="w-full md:w-auto">
      <iframe
        title="UB Hacking Fall 2024 Schedule"
        src="https://calendar.google.com/calendar/embed?src=a78972382de284027e5558928d1f61717bcc94ac002e03a95a299f358d56f155%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
        style="border: 0"
        class="w-full h-[300px] md:w-[600px] md:h-[400px]"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>

  <section id="social-media" class="w-full flex flex-col items-center py-12">
    <h2 class="text-4xl sm:text-7xl mb-4 text-center">Follow us for updates</h2>
    <div class="flex flex-wrap justify-center gap-8 md:gap-16 w-fit">
      <a href="https://www.instagram.com/ubhacking/?hl=en">
        <InstagramIcon size={40} class="md:w-[60px] md:h-[60px]" />
      </a>
      <a href="https://www.linkedin.com/company/ubhacking">
        <LinkedinIcon size={40} class="md:w-[60px] md:h-[60px]" />
      </a>
      <a href="https://ub-hacking-fall-2024.devpost.com/" class="my-auto">
        <p class="font-bold text-xl md:text-2xl">Devpost</p>
      </a>
      <a href="https://www.twitch.tv/ubhacking">
        <TwitchIcon size={40} class="md:w-[60px] md:h-[60px]" />
      </a>
    </div>
  </section>
</section>

<section
  id="description"
  class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 py-16 md:pt-36 md:pb-16 px-4 md:px-0"
>
  <div id="left-side">
    <h1
      class="text-3xl md:text-5xl font-semibold mb-4 text-center md:text-left"
    >
      What is UB Hacking?
    </h1>
    <p class="w-full md:w-[45rem] text-center md:text-left">
      UB Hacking is a 32-hour hackathon at the University at Buffalo on November
      9th and 10th. We welcome participants of all experience levels and
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

<div class="mb-16 flex justify-center">
  <iframe
    allowfullscreen
    title="UB Hacking Fall 2023 Promo Video"
    src="https://www.youtube.com/embed/JBqPOs6LOA8?si=Y1QD1jT0ZKQfMHRc"
    class="w-full h-[300px] md:w-[1000px] md:h-[400px] p-8"
    frameborder="0"
  ></iframe>
</div>

<section id="judging" class="py-14 px-4 md:px-28">
  <h2 class="text-5xl font-semibold text-center mb-8">Judging Criteria</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-6">
      <div>
        <h3 class="text-2xl font-semibold mb-2">X-Factor</h3>
        <p>The project doesn't stack up well to our grading system, but should be in the conversation for prizes. It gets an all-or-nothing score. Most projects will NOT get the X-Factor.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">It Works</h3>
        <p>Is the project functional? Was there an attempt to have it production-ready?</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">Usefulness</h3>
        <p>Is this project useful to its target audience?</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">Technicality</h3>
        <p>How technically difficult was this project while still being able to achieve the goals they set? A bit more nuanced than the other categories. You could have the most complex hackathon project, but they weren't able to do any of it.</p>
      </div>
    </div>
    <div class="space-y-6">
      <div>
        <h3 class="text-2xl font-semibold mb-2">Effort</h3>
        <p>How much effort was put into the project; did you try?</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">Freshness</h3>
        <p>How new/fresh of an idea is this? This more-so relates to how common their project is for hackathons, but be conscious of the types of projects seen online.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-2">Pitch</h3>
        <p>How well did they sell you on their project? Keep in mind, many of these students are pitching for the first time ever.</p>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="py-14 px-4 md:px-28">
  <h2 class="text-5xl font-semibold text-center mb-8">Questions & Answers</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Accordion.Root id="left">
      {#each leftFaq as { title, content }}
        <Accordion.Item value={title}>
          <Accordion.Trigger><p>{title}</p></Accordion.Trigger>
          <Accordion.Content>{content}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
    <Accordion.Root id="right">
      {#each rightFaq as { title, content }}
        <Accordion.Item value={title}>
          <Accordion.Trigger><p>{title}</p></Accordion.Trigger>
          <Accordion.Content>{content}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</section>

<section id="sponsors" class="flex flex-col items-center py-20 px-4">
  <h2 class="text-5xl font-semibold text-center mb-2">Sponsors</h2>
  <h3 class="text-lg md:text-xl text-center">
    We are grateful to all the companies who help support the hackathon.
  </h3>

  <div class="flex flex-col items-center gap-8 mt-8">
    {#each sponsorIcons as [logoFileName, url, height, scale]}
      <a href={url}>
        <img
          src={`/sponsors/${logoFileName}`}
          {height}
          width={(height * scale) / 2}
          alt="Sponsor Logo"
        />
      </a>
    {/each}
    <!-- class="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto" -->
  </div>
</section>

<section
  class="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8 mt-8"
  style="background: linear-gradient(90deg, rgba(108, 143, 117, 0.9), rgba(77, 113, 105, 0.9), rgba(150, 201, 174, 0.9));"
>
  <h3
    class="text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0 text-white"
  >
    Down 2 Hack? Join the fun, no pressure.
  </h3>
  <ApplyNow />
</section>

<style>
  #hero {
    background: url("/main-bg-2.png");
    margin-top: -90px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    opacity: 0.8;
  }

  #hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(20px);
    opacity: 0.6;
    z-index: -1;
  }
</style>
