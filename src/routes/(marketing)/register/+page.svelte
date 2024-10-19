<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import * as Select from "$lib/components/ui/select";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { form, errors, enhance } = superForm(data.form);

  // For testing purposes:
  const sampleUserData = {
    // Account
    contactEmail: "jane.doe@example.com",

    // Personal
    nameFirst: "Jane",
    nameLast: "Doe",
    dob: "1995-07-15",
    phone: "+1 (555) 123-4567",
    gender: "Female",
    raceEthnicity: "Asian",
    country: "United States",

    // Education
    schoolName: "University of Buffalo",
    schoolMajor: "Computer Science",
    levelOfStudy: "undergraduate",
    graduationYear: 2025,

    // Shipping
    address1: "123 Main St",
    city: "Buffalo",
    state: "NY",
    zipCode: "14260",

    // Logistics
    isAttendingInPerson: true,
    shirtSize: "M" as const,
    dietaryRestrictions: ["vegetarian", "gluten free"],
    dietaryRestrictionsOther: "Lactose intolerant",
    allergies: ["peanuts", "soy"],
    allergiesOther: "Sesame",
    specialRequest: "I require a quiet space for meditation during breaks.",

    // Other
    howYouHeard: "Through a friend",
    whyAttend:
      "I'm passionate about hackathons and want to challenge myself while networking with like-minded individuals. UB Hacking seems like an excellent opportunity to learn new technologies and work on innovative projects.",
    codeOfConductUBHacking: true,
    codeOfConduct: true,
    dataSharing: true,
    communication: true,
  };

  $form = sampleUserData;

  function addAllergy(allergy: any) {
    if (!$form.allergies) {
      $form.allergies = [];
    }
    $form.allergies.push(allergy);
  }

  function removeAllergy(allergy: any) {
    $form.allergies = $form.allergies?.filter((a: any) => a !== allergy);
  }

  function addRestriction(restriction: any) {
    if (!$form.dietaryRestrictions) {
      $form.dietaryRestrictions = [];
    }
    $form.dietaryRestrictions.push(restriction);
  }

  function removeRestriction(restriction: any) {
    $form.dietaryRestrictions = $form.dietaryRestrictions?.filter(
      (a) => a !== restriction
    );
  }
</script>

<div class="flex items-center justify-center bg-gray-100 p-4">
  <div class="w-full max-w-2xl bg-white shadow-md rounded-lg">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center">UB Hacking Application</h1>
      <p class="text-center text-gray-600 mb-6">
        Please fill out the form below to apply for UB Hacking
      </p>

      <form class="space-y-6" method="POST" use:enhance>
        <!-- Personal Information Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Personal Information</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <Label for="nameFirst" class="text-sm font-medium"
                >First Name</Label
              >
              <Input
                id="nameFirst"
                type="text"
                name="nameFirst"
                required
                bind:value={$form.nameFirst}
              />
              {#if $errors.nameFirst}<p class="text-red-500 text-sm mt-1">
                  {$errors.nameFirst}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="nameLast" class="text-sm font-medium">Last Name</Label
              >
              <Input
                id="nameLast"
                type="text"
                name="nameLast"
                required
                bind:value={$form.nameLast}
              />
              {#if $errors.nameLast}<p class="text-red-500 text-sm mt-1">
                  {$errors.nameLast}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="contactEmail" class="text-sm font-medium"
                >Contact Email</Label
              >
              <Input
                id="contactEmail"
                type="email"
                name="contactEmail"
                placeholder="jane.doe@buffalo.edu"
                required
                bind:value={$form.contactEmail}
              />
              {#if $errors.contactEmail}<p class="text-red-500 text-sm mt-1">
                  {$errors.contactEmail}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="dob" class="text-sm font-medium">Date of Birth</Label>
              <Input id="dob" type="date" name="dob" bind:value={$form.dob} />
              {#if $errors.dob}<p class="text-red-500 text-sm mt-1">
                  {$errors.dob}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="phone" class="text-sm font-medium">Phone</Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                bind:value={$form.phone}
              />
              {#if $errors.phone}<p class="text-red-500 text-sm mt-1">
                  {$errors.phone}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="gender" class="text-sm font-medium">Gender</Label>
              <Input
                id="gender"
                type="text"
                name="gender"
                bind:value={$form.gender}
              />
              {#if $errors.gender}<p class="text-red-500 text-sm mt-1">
                  {$errors.gender}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="raceEthnicity" class="text-sm font-medium"
                >Race/Ethnicity</Label
              >
              <Input
                id="raceEthnicity"
                type="text"
                name="raceEthnicity"
                bind:value={$form.raceEthnicity}
              />
              {#if $errors.raceEthnicity}<p class="text-red-500 text-sm mt-1">
                  {$errors.raceEthnicity}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="country" class="text-sm font-medium">Country</Label>
              <Input
                id="country"
                type="text"
                name="country"
                bind:value={$form.country}
              />
              {#if $errors.country}<p class="text-red-500 text-sm mt-1">
                  {$errors.country}
                </p>{/if}
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Education</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <Label for="schoolName" class="text-sm font-medium"
                >School Name</Label
              >
              <Input
                id="schoolName"
                type="text"
                name="schoolName"
                bind:value={$form.schoolName}
              />
              {#if $errors.schoolName}<p class="text-red-500 text-sm mt-1">
                  {$errors.schoolName}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="schoolMajor" class="text-sm font-medium">Major</Label>
              <Input
                id="schoolMajor"
                type="text"
                name="schoolMajor"
                bind:value={$form.schoolMajor}
              />
              {#if $errors.schoolMajor}<p class="text-red-500 text-sm mt-1">
                  {$errors.schoolMajor}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="levelOfStudy" class="text-sm font-medium"
                >Level of Study</Label
              >
              <Select.Root
                selected={{ value: $form.levelOfStudy }}
                onSelectedChange={(e) => e && ($form.levelOfStudy = e.value)}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select your level of study" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="high school">High School</Select.Item>
                  <Select.Item value="undergraduate">Undergraduate</Select.Item>
                  <Select.Item value="masters">Masters</Select.Item>
                  <Select.Item value="phd">PhD</Select.Item>
                  <Select.Item value="postdoctoral">Postdoctoral</Select.Item>
                </Select.Content>
              </Select.Root>

              {#if $errors.levelOfStudy}<p class="text-red-500 text-sm mt-1">
                  {$errors.levelOfStudy}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="graduationYear" class="text-sm font-medium"
                >Graduation Year</Label
              >
              <Select.Root
                selected={{ value: $form.graduationYear }}
                onSelectedChange={(e) => e && ($form.graduationYear = e.value)}
              >
                <Select.Trigger
                  class="w-full border border-gray-300 rounded-md"
                >
                  <Select.Value placeholder="Select graduation year" />
                </Select.Trigger>
                <Select.Content>
                  {#each Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i) as year}
                    <Select.Item value={year}>{year}</Select.Item>
                  {/each}
                </Select.Content>
              </Select.Root>
              {#if $errors.graduationYear}<p class="text-red-500 text-sm mt-1">
                  {$errors.graduationYear}
                </p>{/if}
            </div>
          </div>
        </div>

        <!-- Shipping Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Shipping Information</h2>
          <div class="space-y-2">
            <div class="space-y-2 mt-4">
              <Label for="address1" class="text-sm font-medium">Address</Label>
              <Input
                id="address1"
                type="text"
                name="address1"
                bind:value={$form.address1}
              />
              {#if $errors.address1}<p class="text-red-500 text-sm mt-1">
                  {$errors.address1}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="city" class="text-sm font-medium">City</Label>
              <Input
                id="city"
                type="text"
                name="city"
                bind:value={$form.city}
              />
              {#if $errors.city}<p class="text-red-500 text-sm mt-1">
                  {$errors.city}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="state" class="text-sm font-medium">State</Label>
              <Input
                id="state"
                type="text"
                name="state"
                bind:value={$form.state}
              />
              {#if $errors.state}<p class="text-red-500 text-sm mt-1">
                  {$errors.state}
                </p>{/if}
            </div>
            <div class="space-y-2">
              <Label for="zipCode" class="text-sm font-medium">ZIP Code</Label>
              <Input
                id="zipCode"
                type="text"
                name="zipCode"
                bind:value={$form.zipCode}
              />
              {#if $errors.zipCode}<p class="text-red-500 text-sm mt-1">
                  {$errors.zipCode}
                </p>{/if}
            </div>
          </div>
        </div>

        <!-- Logistics Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Logistics</h2>
          <div class="space-y-2">
            <Label class="text-sm font-medium">Attending In Person?</Label>
            <Checkbox
              id="isAttendingInPerson"
              name="isAttendingInPerson"
              bind:checked={$form.isAttendingInPerson}
            />
          </div>
          <div class="space-y-2">
            <Label for="shirtSize" class="text-sm font-medium">Shirt Size</Label
            >
            <Input
              id="shirtSize"
              type="text"
              name="shirtSize"
              bind:value={$form.shirtSize}
            />
            {#if $errors.shirtSize}<p class="text-red-500 text-sm mt-1">
                {$errors.shirtSize}
              </p>{/if}
          </div>
          <div class="space-y-2">
            <Label for="specialRequest" class="text-sm font-medium"
              >Special Requests</Label
            >
            <Input
              id="specialRequest"
              type="text"
              name="specialRequest"
              bind:value={$form.specialRequest}
            />
            {#if $errors.specialRequest}<p class="text-red-500 text-sm mt-1">
                {$errors.specialRequest}
              </p>{/if}
          </div>

          <div class="space-y-2">
            <Label for="dietaryRestrictions" class="text-sm font-medium"
              >Dietary Restrictions</Label
            >
            <Select.Root
              selected={{ value: $form.dietaryRestrictions }}
              onSelectedChange={(e) =>
                e && ($form.dietaryRestrictions = e.value)}
            >
              <Select.Trigger class="w-full border border-gray-300 rounded-md">
                <Select.Value placeholder="Select dietary restriction" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="halal">Halal</Select.Item>
                <Select.Item value="kosher">Kosher</Select.Item>
                <Select.Item value="vegetarian">Vegetarian</Select.Item>
              </Select.Content>
            </Select.Root>
            <div class="space-y-2 mt-2">
              <Input
                type="text"
                id="dietaryRestrictionsOther"
                name="dietaryRestrictionsOther"
                placeholder="Other (please specify)"
                bind:value={$form.dietaryRestrictionsOther}
              />
              {#if $errors.dietaryRestrictionsOther}<p
                  class="text-red-500 text-sm mt-1"
                >
                  {$errors.dietaryRestrictionsOther}
                </p>{/if}
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Other Information</h2>
          <div class="space-y-2">
            <Label for="howYouHeard" class="text-sm font-medium"
              >How did you hear about us?</Label
            >
            <Input
              id="howYouHeard"
              type="text"
              name="howYouHeard"
              bind:value={$form.howYouHeard}
            />
            {#if $errors.howYouHeard}<p class="text-red-500 text-sm mt-1">
                {$errors.howYouHeard}
              </p>{/if}
          </div>
          <div class="space-y-2">
            <Label for="whyAttend" class="text-sm font-medium"
              >Why do you want to attend?</Label
            >
            <Input
              id="whyAttend"
              type="text"
              name="whyAttend"
              bind:value={$form.whyAttend}
            />
            {#if $errors.whyAttend}<p class="text-red-500 text-sm mt-1">
                {$errors.whyAttend}
              </p>{/if}
          </div>
          <div class="flex items-center space-x-2">
            <Checkbox
              id="codeOfConductUBHacking"
              name="codeOfConductUBHacking"
              bind:checked={$form.codeOfConductUBHacking}
            />
            <Label for="codeOfConductUBHacking" class="text-sm font-medium"
              >I agree to the UB Hacking Code of Conduct</Label
            >
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </div>
  </div>
</div>
