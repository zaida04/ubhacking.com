<script lang="ts">
  import GithubIcon from "lucide-svelte/icons/github";
  import LinkedinIcon from "lucide-svelte/icons/linkedin";
  import GlobeIcon from "lucide-svelte/icons/globe";

  const members = [
    {
      name: "Addison Yam",
      pronouns: "He/Him",
      major: "Bioinformatics and Computational Biology",
      year: "Senior",
      team: "Directors",
      image: "/organizers/addison-yam.png",
    },
    {
      name: "Yazgi Akata",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Junior",
      team: "Directors",
      image: "/organizers/yazgi-akata.png",
    },
    {
      name: "Zaid Arshad",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Junior",
      team: "Web Team",
      linkedin: "https://www.linkedin.com/in/zaid-arsh/",
      site: "https://nico.engineer/",
      github: "https://github.com/zaida04",
      image: "/organizers/zaid-arshad.png",
    },
    {
      name: "Peter Vaiciulis",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Senior",
      team: "Web Team",
      site: "https://www.peterv.net/",
      image: "/organizers/peter-v.png",
    },
    {
      name: "Ananya Gupta",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Sophomore",
      team: "Publicity Team",
      image: "/organizers/ananya-gupta.png",
    },
    {
      name: "Shreya Gupta",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Senior",
      team: "Publicity Team",
      image: "/organizers/shreya-gupta.png",
    },
    {
      name: "Aidan O'Donnell",
      pronouns: "He/Him",
      major: "Computer Engineering",
      year: "Senior",
      team: "Logistics Team",
      image: "/organizers/aidan-odonnell.png",
    },
    {
      name: "Parth Agrawal",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Sophomore",
      team: "Logistics Team",
      image: "/organizers/parth-agrawal.png",
    },
    {
      name: "Blaze Nie",
      pronouns: "They/Them",
      major: "Computer Science",
      year: "Sophomore",
      team: "Food Team",
      image: "/organizers/blaze.png",
    },
    {
      name: "Krish Puwar",
      pronouns: "He/Him",
      major: "Computer Engineering",
      year: "Junior",
      team: "Food Team",
      image: "/organizers/krish.png",
    },
    {
      name: "John Nguyen",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Junior",
      team: "Venue Team",
      image: "/organizers/john-nguyen.png",
    },
    {
      name: "Maggie Tan",
      pronouns: "She/Her",
      major: "Computer Science & Mechanical Engineering",
      year: "Senior",
      team: "Venue Team",
      image: "/organizers/maggie-tan.png",
    },
    {
      name: "Aditya Mathur",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Senior",
      team: "Streaming Team",
      image: "/organizers/aditya-mathur.png",
    },
    {
      name: "Monish Deshmukh",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Junior",
      team: "Streaming Team",
      image: "/organizers/monish-deshmukh.png",
    },
    {
      name: "Joy Lee",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Senior",
      team: "Graphics Team",
      image: "/organizers/joy-lee.png",
    },
    {
      name: "Drew Louie",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Senior",
      team: "Graphics Team",
      image: "/organizers/drew-louie.png",
    },
    {
      name: "Andrew Collado",
      pronouns: "He/Him",
      major: "Computer Engineering",
      year: "Junior",
      team: "Sponsorship Team",
      image: "/organizers/andrew-collado.png",
    },
    {
      name: "Sujal Bhakare",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Sophomore",
      team: "Sponsorship Team",
      image: "/organizers/sujal-deshmukh.png",
    },
    {
      name: "Christo Abraham",
      pronouns: "He/Him",
      major: "Psychology and Biomedical Science",
      year: "Senior",
      team: "Media Team",
      image: "/organizers/christo-abraham.png",
    },
    {
      name: "Timothy Kong",
      pronouns: "He/Him",
      title: "Machine Learning Engineer",
      status: "Graduate",
      team: "Advisors",
      image: "/organizers/timothy-kong.png",
    },
  ];
</script>

<svelte:head>
  <title>UB Hacking - Teams</title>
  <meta name="description" content="Meet the teams that organize UB Hacking." />
</svelte:head>

<section id="teams" class="py-14">
  <h2 class="text-4xl font-semibold text-center mb-8">Meet the Organizers</h2>

  <section class="py-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      {#each Object.values(members) as member}
        <div class="flex flex-col items-center">
          <img
            src={member.image ?? "https://placehold.co/400"}
            alt={member.name}
            class="max-w-[9rem] h-36 rounded-full mb-2"
          />
          <h3 class="text-xl font-semibold mb-1">{member.name}</h3>
          <p class="text-sm text-center mb-1">{member.pronouns}</p>
          <p class="text-sm text-center mb-1">{member.team}</p>
          <div class="flex gap-4">
            {#if member.github}
              <a href={member.github} aria-label="GitHub">
                <GithubIcon size={30} />
              </a>
            {/if}
            {#if member.linkedin}
              <a href={member.linkedin} aria-label="LinkedIn">
                <LinkedinIcon size={30} />
              </a>
            {/if}
            {#if member.site}
              <a href={member.site} aria-label="Website">
                <GlobeIcon size={30} />
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
</section>
