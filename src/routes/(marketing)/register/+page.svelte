<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import * as Select from "$lib/components/ui/select";
  import * as Form from "$lib/components/ui/form";
  import type { PageServerData } from "./$types";
  import Required from "$lib/components/ui/label/required.svelte";

  export let data: PageServerData;
  const { form, errors, enhance } = superForm(data.form, {
    invalidateAll: false,
    resetForm: false,
  });

  // // For testing purposes:
  // const sampleUserData = {
  //   // Account
  //   contactEmail: "jane.doe@example.com",

  //   // Personal
  //   nameFirst: "Jane",
  //   nameLast: "Doe",
  //   dob: "1995-07-15",
  //   phone: "+1 (555) 123-4567",
  //   gender: "Female",
  //   raceEthnicity: "Asian",
  //   country: "United States",

  //   // Education
  //   schoolName: "University of Buffalo",
  //   schoolMajor: "Computer Science",
  //   levelOfStudy: "undergraduate",
  //   graduationYear: "2025",

  //   // Shipping
  //   address1: "123 Main St",
  //   city: "Buffalo",
  //   state: "NY",
  //   zipCode: "14260",

  //   // Logistics
  //   isAttendingInPerson: true,
  //   shirtSize: "M" as const,
  //   dietaryRestrictions: "vegetarian",
  //   dietaryRestrictionsOther: "Lactose intolerant",
  //   allergies: ["peanuts", "soy"],
  //   allergiesOther: "Sesame",
  //   specialRequest: "I require a quiet space for meditation during breaks.",

  //   // Other
  //   howYouHeard: "Through a friend",
  //   whyAttend:
  //     "I'm passionate about hackathons and want to challenge myself while networking with like-minded individuals. UB Hacking seems like an excellent opportunity to learn new technologies and work on innovative projects.",
  //   codeOfConductUBHacking: true,
  //   codeOfConduct: true,
  //   dataSharing: true,
  //   communication: true,
  // };

  // $form = sampleUserData;
  console.log($errors);

  const shirtSizeOptions = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const dietaryRestrictionsOptions = [
    { value: "halal", label: "Halal" },
    { value: "kosher", label: "Kosher" },
    { value: "vegetarian", label: "Vegetarian" },
  ];
  const levelOfStudy = [
    { value: "high school", label: "High School" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "masters", label: "Masters" },
  ];
</script>

<div class="flex items-center justify-center bg-gray-100 p-4">
  <div class="w-full max-w-2xl bg-white shadow-md rounded-lg">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center">UB Hacking Application</h1>

      {#if data.existingSubmission}
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-4">
          <p class="text-yellow-700">
            You have already submitted an application for UB Hacking. If you
            submit this form again, your old responses will be discarded.
          </p>
        </div>
      {/if}

      <p class="text-center text-gray-600 mb-6">
        Please fill out the form below to apply for UB Hacking
      </p>

      <form class="space-y-6" method="POST" use:enhance>
        <!-- Personal Information Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Personal Information</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <Required>
                <Label for="nameFirst" class="text-sm font-medium">
                  First Name
                </Label>
              </Required>
              <Input
                id="nameFirst"
                type="text"
                name="nameFirst"
                required
                bind:value={$form.nameFirst}
              />
              <Form.Error error={$errors.nameFirst} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="nameLast" class="text-sm font-medium">
                  Last Name
                </Label>
              </Required>
              <Input
                id="nameLast"
                type="text"
                name="nameLast"
                required
                bind:value={$form.nameLast}
              />
              <Form.Error error={$errors.nameLast} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="contactEmail" class="text-sm font-medium">
                  Contact Email
                </Label>
              </Required>
              <Input
                id="contactEmail"
                name="contactEmail"
                placeholder="jane.doe@buffalo.edu"
                required
                bind:value={$form.contactEmail}
              />
              <Form.Error error={$errors.contactEmail} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="dob" class="text-sm font-medium">
                  Date of Birth
                </Label>
              </Required>
              <Input id="dob" type="date" name="dob" bind:value={$form.dob} />
              <Form.Error error={$errors.dob} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="phone" class="text-sm font-medium">Phone</Label>
              </Required>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                bind:value={$form.phone}
              />
              <Form.Error error={$errors.phone} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="gender" class="text-sm font-medium">Gender</Label>
              </Required>
              <Input
                id="gender"
                type="text"
                name="gender"
                bind:value={$form.gender}
              />
              <Form.Error error={$errors.gender} />
            </div>
            <div class="space-y-2">
              <Label for="raceEthnicity" class="text-sm font-medium">
                Race/Ethnicity
              </Label>
              <Input
                id="raceEthnicity"
                type="text"
                name="raceEthnicity"
                bind:value={$form.raceEthnicity}
              />
              <Form.Error error={$errors.raceEthnicity} />
            </div>
            <div class="space-y-2">
              <Label for="country" class="text-sm font-medium">Country</Label>
              <Input
                id="country"
                type="text"
                name="country"
                bind:value={$form.country}
              />
              <Form.Error error={$errors.country} />
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Education</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <Required>
                <Label for="schoolName" class="text-sm font-medium">
                  School Name
                </Label>
              </Required>

              <Input
                id="schoolName"
                type="text"
                name="schoolName"
                bind:value={$form.schoolName}
              />
              <Form.Error error={$errors.schoolName} />
            </div>
            <div class="space-y-2">
              <Label for="schoolMajor" class="text-sm font-medium">Major</Label>
              <Input
                id="schoolMajor"
                type="text"
                name="schoolMajor"
                bind:value={$form.schoolMajor}
              />
              <Form.Error error={$errors.schoolMajor} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="levelOfStudy" class="text-sm font-medium"
                  >Level of Study</Label
                >
              </Required>
              <Select.Root
                preventScroll={false}
                selected={{
                  value: $form.levelOfStudy,
                  label: levelOfStudy.find(
                    (option) => option.value === $form.levelOfStudy
                  )?.label,
                }}
                onSelectedChange={(e) => e && ($form.levelOfStudy = e.value)}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select your level of study" />
                </Select.Trigger>
                <Select.Content>
                  {#each levelOfStudy as option}
                    <Select.Item value={option.value}
                      >{option.label}</Select.Item
                    >
                  {/each}
                </Select.Content>
              </Select.Root>
              <Form.Error error={$errors.levelOfStudy} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="graduationYear" class="text-sm font-medium"
                  >Graduation Year</Label
                >
              </Required>
              <Select.Root
                preventScroll={false}
                selected={{
                  value: $form.graduationYear,
                  label: $form.graduationYear.toString(),
                }}
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
              <Form.Error error={$errors.graduationYear} />
            </div>
          </div>
        </div>

        <!-- Shipping Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Shipping Information</h2>
          <div class="space-y-2">
            <div class="space-y-2 mt-4">
              <Required>
                <Label for="address1" class="text-sm font-medium">Address</Label
                >
              </Required>
              <Input
                id="address1"
                type="text"
                name="address1"
                bind:value={$form.address1}
              />
              <Form.Error error={$errors.address1} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="city" class="text-sm font-medium">City</Label>
              </Required>
              <Input
                id="city"
                type="text"
                name="city"
                bind:value={$form.city}
              />
              <Form.Error error={$errors.city} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="state" class="text-sm font-medium">State</Label>
              </Required>

              <Input
                id="state"
                type="text"
                name="state"
                bind:value={$form.state}
              />
              <Form.Error error={$errors.state} />
            </div>
            <div class="space-y-2">
              <Required>
                <Label for="zipCode" class="text-sm font-medium">
                  ZIP Code
                </Label>
              </Required>

              <Input
                id="zipCode"
                type="text"
                name="zipCode"
                bind:value={$form.zipCode}
              />
              <Form.Error error={$errors.zipCode} />
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
            <Required>
              <Label for="shirtSize" class="text-sm font-medium">
                Shirt Size
              </Label>
            </Required>

            <Select.Root
              selected={{
                value: $form.shirtSize,
                label: shirtSizeOptions.find(
                  (option) => option.value === $form.shirtSize
                )?.label,
              }}
              preventScroll={false}
              onSelectedChange={(e) => e && ($form.shirtSize = e.value)}
            >
              <Select.Trigger class="w-full border border-gray-300 rounded-md">
                <Select.Value placeholder="Select your shirt size" />
              </Select.Trigger>
              <Select.Content>
                {#each shirtSizeOptions as option}
                  <Select.Item value={option.value}>{option.label}</Select.Item>
                {/each}
              </Select.Content>
            </Select.Root>
            <Form.Error error={$errors.shirtSize} />
          </div>
          <div class="space-y-2">
            <Label for="specialRequest" class="text-sm font-medium">
              Special Requests
            </Label>
            <Input
              id="specialRequest"
              type="text"
              name="specialRequest"
              bind:value={$form.specialRequest}
            />
            <Form.Error error={$errors.specialRequest} />
          </div>

          <div class="space-y-2">
            <Label for="dietaryRestrictions" class="text-sm font-medium">
              Dietary Restrictions
            </Label>
            <Select.Root
              selected={{
                value: $form.dietaryRestrictions,
                label: dietaryRestrictionsOptions.find(
                  (option) => option.value === $form.dietaryRestrictions
                )?.label,
              }}
              preventScroll={false}
              onSelectedChange={(e) => {
                e && ($form.dietaryRestrictions = e.value);
              }}
            >
              <Select.Trigger class="w-full border border-gray-300 rounded-md">
                <Select.Value placeholder="Select dietary restriction" />
              </Select.Trigger>
              <Select.Content>
                {#each dietaryRestrictionsOptions as option}
                  <Select.Item value={option.value}>{option.label}</Select.Item>
                {/each}
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
              <Form.Error error={$errors.dietaryRestrictionsOther} />
            </div>
          </div>

          <div class="space-y-2">
            <Label for="allergies" class="text-sm font-medium">Allergies</Label>
            <div class="space-y-2 mt-2">
              <Input
                type="text"
                id="allergiesOther"
                name="allergiesOther"
                placeholder="Other (please specify)"
                bind:value={$form.allergiesOther}
              />
              <Form.Error error={$errors.allergiesOther} />
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Other Information</h2>
          <div class="space-y-2">
            <Required>
              <Label for="howYouHeard" class="text-sm font-medium">
                How did you hear about us?
              </Label>
            </Required>

            <Input
              id="howYouHeard"
              type="text"
              name="howYouHeard"
              bind:value={$form.howYouHeard}
            />
            <Form.Error error={$errors.howYouHeard} />
          </div>
          <div class="space-y-2">
            <Required>
              <Label for="whyAttend" class="text-sm font-medium">
                Why do you want to attend?
              </Label>
            </Required>

            <Input
              id="whyAttend"
              type="text"
              name="whyAttend"
              bind:value={$form.whyAttend}
            />
            <Form.Error error={$errors.whyAttend} />
          </div>
          <div class="flex items-center space-x-2">
            <Checkbox
              id="codeOfConductUBHacking"
              name="codeOfConductUBHacking"
              required
              onCheckedChange={(e) =>
                ($form.codeOfConductUBHacking =
                  e === "indeterminate" ? false : e)}
              checked={$form.codeOfConductUBHacking}
            />
            <Label for="codeOfConductUBHacking" class="text-sm font-medium">
              I agree to the UB Hacking Code of Conduct
            </Label>
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
