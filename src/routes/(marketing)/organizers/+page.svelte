<script lang="ts">
  import { GithubIcon, LinkedinIcon, GlobeIcon } from "lucide-svelte";

  const teams = {
    board: [
      {
        name: "John Doe",
        description: "Lead Organizer at UB Hacking.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
        website: "https://johndoe.com",
      },
      {
        name: "Emily White",
        description: "Co-Organizer overseeing team logistics.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/emilywhite",
        linkedin: "https://www.linkedin.com/in/emilywhite/",
        website: "https://emilywhite.com",
      },
      {
        name: "Mark Evans",
        description: "Managing sponsorships and partnerships.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/markevans",
        linkedin: "https://www.linkedin.com/in/markevans/",
        website: "https://markevans.com",
      },
    ],
    webTeam: [
      {
        name: "Jane Smith",
        description: "Web developer managing the platform.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith/",
        website: "https://janesmith.com",
      },
      {
        name: "Robert Jones",
        description: "Frontend developer working on the website UI.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/robertjones",
        linkedin: "https://www.linkedin.com/in/robertjones/",
        website: "https://robertjones.com",
      },
      {
        name: "Nina Walker",
        description: "Backend developer ensuring smooth operations.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/ninawalker",
        linkedin: "https://www.linkedin.com/in/ninawalker/",
        website: "https://ninawalker.com",
      },
    ],
    publicityTeam: [
      {
        name: "Alice Johnson",
        description: "Publicity coordinator for UB Hacking.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson/",
        website: "https://alicejohnson.com",
      },
      {
        name: "Tom Green",
        description: "Social media manager for UB Hacking.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/tomgreen",
        linkedin: "https://www.linkedin.com/in/tomgreen/",
        website: "https://tomgreen.com",
      },
      {
        name: "Linda Adams",
        description: "Event promotion and outreach.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/lindaadams",
        linkedin: "https://www.linkedin.com/in/lindaadams/",
        website: "https://lindaadams.com",
      },
    ],
    graphicsTeam: [
      {
        name: "Bob Lee",
        description: "Graphic designer for UB Hacking.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/boblee",
        linkedin: "https://www.linkedin.com/in/boblee/",
        website: "https://boblee.com",
      },
      {
        name: "Sarah Khan",
        description: "Visual design lead for promotional content.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/sarahkhan",
        linkedin: "https://www.linkedin.com/in/sarahkhan/",
        website: "https://sarahkhan.com",
      },
      {
        name: "Chris Brown",
        description: "Illustrator for event materials.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/chrisbrown",
        linkedin: "https://www.linkedin.com/in/chrisbrown/",
        website: "https://chrisbrown.com",
      },
    ],
    logistics: [
      {
        name: "Cathy Zhang",
        description: "Logistics manager for the event.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/cathyzhang",
        linkedin: "https://www.linkedin.com/in/cathyzhang/",
        website: "https://cathyzhang.com",
      },
      {
        name: "Kevin Wilson",
        description: "Logistics assistant ensuring event readiness.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/kevinwilson",
        linkedin: "https://www.linkedin.com/in/kevinwilson/",
        website: "https://kevinwilson.com",
      },
      {
        name: "Diana Roberts",
        description: "Venue and setup coordinator.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/dianaroberts",
        linkedin: "https://www.linkedin.com/in/dianaroberts/",
        website: "https://dianaroberts.com",
      },
    ],
    food: [
      {
        name: "David Brown",
        description: "Food and beverages coordinator.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/davidbrown",
        linkedin: "https://www.linkedin.com/in/davidbrown/",
        website: "https://davidbrown.com",
      },
      {
        name: "Sophie Lee",
        description: "Menu planning and dietary management.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/sophielee",
        linkedin: "https://www.linkedin.com/in/sophielee/",
        website: "https://sophielee.com",
      },
      {
        name: "Jack Evans",
        description: "Food sourcing and vendor management.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/jackevans",
        linkedin: "https://www.linkedin.com/in/jackevans/",
        website: "https://jackevans.com",
      },
    ],
    venue: [
      {
        name: "Eve Green",
        description: "Venue manager ensuring best space.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/evegreen",
        linkedin: "https://www.linkedin.com/in/evegreen/",
        website: "https://evegreen.com",
      },
      {
        name: "Michael Taylor",
        description: "Venue setup and teardown coordinator.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/michaeltaylor",
        linkedin: "https://www.linkedin.com/in/michaeltaylor/",
        website: "https://michaeltaylor.com",
      },
      {
        name: "Grace Wilson",
        description: "Audio-visual and technical setup.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/gracewilson",
        linkedin: "https://www.linkedin.com/in/gracewilson/",
        website: "https://gracewilson.com",
      },
    ],
    other: [
      {
        name: "Frank Miller",
        description: "Volunteer coordinator.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/frankmiller",
        linkedin: "https://www.linkedin.com/in/frankmiller/",
        website: "https://frankmiller.com",
      },
      {
        name: "Ella Harris",
        description: "General assistance and event coordination.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/ellaharris",
        linkedin: "https://www.linkedin.com/in/ellaharris/",
        website: "https://ellaharris.com",
      },
      {
        name: "Tom Hanks",
        description: "Event support and volunteer management.",
        image: "https://placewaifu.com/image/200",
        github: "https://github.com/tomhanks",
        linkedin: "https://www.linkedin.com/in/tomhanks/",
        website: "https://tomhanks.com",
      },
    ],
  };
</script>

<svelte:head>
  <title>UB Hacking - Teams</title>
  <meta name="description" content="Meet the teams that organize UB Hacking." />
</svelte:head>

<section id="teams" class="py-14">
  <h2 class="text-4xl font-semibold text-center mb-8">Meet the Organizers</h2>

  {#each Object.entries(teams) as [teamName, members]}
    <section class="py-8">
      <h3 class="text-3xl font-semibold text-center mb-4 capitalize">
        {teamName.replace(/([A-Z])/g, " $1")}
      </h3>
      <div class="grid grid-cols-3 gap-12 px-24">
        {#each members as member}
          <div class="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              class="w-36 h-36 rounded-full mb-2"
            />
            <h3 class="text-xl font-semibold mb-1">{member.name}</h3>
            <p class="text-sm text-center mb-2">{member.description}</p>
            <div class="flex gap-4">
              <a href={member.github} aria-label="GitHub">
                <GithubIcon size={30} />
              </a>
              <a href={member.linkedin} aria-label="LinkedIn">
                <LinkedinIcon size={30} />
              </a>
              <a href={member.website} aria-label="Website">
                <GlobeIcon size={30} />
              </a>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</section>
