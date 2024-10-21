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
    },
    {
      name: "Yazgi Akata",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Junior",
      team: "Directors",
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
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQExiW-MbNw7xg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683789582825?e=1735171200&v=beta&t=mXKNJMJNdOnL6Yy2_xxUC9YhVWjsrHLKl0AsAu-dDlo",
    },
    {
      name: "Peter Vaiciulis",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Senior",
      team: "Web Team",
      site: "https://www.peterv.net/",
    },
    {
      name: "Ananya Gupta",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Sophomore",
      team: "Publicity Team",
    },
    {
      name: "Shreya Gupta",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Senior",
      team: "Publicity Team",
    },
    {
      name: "Aidan O'Donnell",
      pronouns: "He/Him",
      major: "Computer Engineering",
      year: "Senior",
      team: "Logistics Team",
    },
    {
      name: "Parth Agrawal",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Sophomore",
      team: "Logistics Team",
    },
    {
      name: "Blaze Nie",
      pronouns: "They/Them",
      major: "Computer Science",
      year: "Sophomore",
      team: "Food Team",
    },
    {
      name: "Krish Puwar",
      pronouns: "He/Him",
      major: "Computer Engineering",
      year: "Junior",
      team: "Food Team",
    },
    {
      name: "John Nguyen",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Junior",
      team: "Venue Team",
    },
    {
      name: "Maggie Tan",
      pronouns: "She/Her",
      major: "Computer Science & Mechanical Engineering",
      year: "Senior",
      team: "Venue Team",
    },
    {
      name: "Aditya Mathur",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Senior",
      team: "Streaming Team",
    },
    {
      name: "Monish Deshmukh",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Junior",
      team: "Streaming Team",
    },
    {
      name: "Joy Lee",
      pronouns: "She/Her",
      major: "Computer Science",
      year: "Senior",
      team: "Graphics Team",
    },
    {
      name: "Drew Louie",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Senior",
      team: "Graphics Team",
    },
    {
      name: "Andrew Collado",
      pronouns: "He/Him",
      major: "Computer Engineering",
      year: "Junior",
      team: "Sponsorship Team",
    },
    {
      name: "Sujal Bhakare",
      pronouns: "He/Him",
      major: "Computer Science",
      year: "Sophomore",
      team: "Sponsorship Team",
    },
    {
      name: "Christo Abraham",
      pronouns: "He/Him",
      major: "Psychology and Biomedical Science",
      year: "Senior",
      team: "Media Team",
    },
    {
      name: "Timothy Kong",
      pronouns: "He/Him",
      title: "Machine Learning Engineer",
      status: "Graduate",
      team: "Advisors",
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
            class="w-36 h-36 rounded-full mb-2"
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
