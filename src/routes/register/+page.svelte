<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { RadioGroup, RadioGroupItem } from "$lib/components/ui/radio-group";
  import { Textarea } from "$lib/components/ui/textarea";
    import type { PageServerData } from './$types';

  export let data: PageServerData;

  const { form, errors, enhance } = superForm(data.form);


  function addAllergy(allergy: any) {
	if (!$form.allergies) {
		$form.allergies = [];
	}
    $form.allergies.push(allergy);
  }
 
  function removeAllergy(allergy: any) {
    $form.allergies = $form.allergies?.filter((a) => a !== allergy);
  }


  function addRestriction(restriction: any) {
	if (!$form.dietaryRestrictions) {
		$form.dietaryRestrictions = [];
	}
    $form.dietaryRestrictions.push(restriction);
  }
 
  function removeRestriction(restriction: any) {
    $form.dietaryRestrictions = $form.dietaryRestrictions?.filter((a) => a !== restriction);
  }
</script>

<form method="POST" use:enhance>
  <div class="space-y-12">
    <!-- Account Section -->
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Account</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <Label for="email">Email</Label>
          <Input type="email" id="email" name="email" bind:value={$form.email} />
          {#if $errors.email}<p class="text-red-500 text-sm mt-1">{$errors.email}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="password">Password</Label>
          <Input type="password" id="password" name="password" bind:value={$form.password} />
          {#if $errors.password}<p class="text-red-500 text-sm mt-1">{$errors.password}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="passwordConfirm">Confirm Password</Label>
          <Input type="password" id="passwordConfirm" name="passwordConfirm" bind:value={$form.passwordConfirm} />
          {#if $errors.passwordConfirm}<p class="text-red-500 text-sm mt-1">{$errors.passwordConfirm}</p>{/if}
        </div>
      </div>
    </div>

    <!-- Personal Information Section -->
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Label for="nameFirst">First Name</Label>
          <Input type="text" id="nameFirst" name="nameFirst" bind:value={$form.nameFirst} />
          {#if $errors.nameFirst}<p class="text-red-500 text-sm mt-1">{$errors.nameFirst}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="nameLast">Last Name</Label>
          <Input type="text" id="nameLast" name="nameLast" bind:value={$form.nameLast} />
          {#if $errors.nameLast}<p class="text-red-500 text-sm mt-1">{$errors.nameLast}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="dob">Date of Birth</Label>
          <Input type="date" id="dob" name="dob" bind:value={$form.dob} />
          {#if $errors.dob}<p class="text-red-500 text-sm mt-1">{$errors.dob}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="phone">Phone</Label>
          <Input type="tel" id="phone" name="phone" bind:value={$form.phone} />
          {#if $errors.phone}<p class="text-red-500 text-sm mt-1">{$errors.phone}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="gender">Gender</Label>
          <Input type="text" id="gender" name="gender" bind:value={$form.gender} />
          {#if $errors.gender}<p class="text-red-500 text-sm mt-1">{$errors.gender}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="raceEthnicity">Race/Ethnicity</Label>
          <Input type="text" id="raceEthnicity" name="raceEthnicity" bind:value={$form.raceEthnicity} />
          {#if $errors.raceEthnicity}<p class="text-red-500 text-sm mt-1">{$errors.raceEthnicity}</p>{/if}
        </div>
        <div class="sm:col-span-3">
          <Label for="country">Country</Label>
          <Input type="text" id="country" name="country" bind:value={$form.country} />
          {#if $errors.country}<p class="text-red-500 text-sm mt-1">{$errors.country}</p>{/if}
        </div>
      </div>
    </div>

    <!-- Education Section -->
<div class="border-b border-gray-900/10 pb-12">
  <h2 class="text-base font-semibold leading-7 text-gray-900">Education</h2>
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div class="sm:col-span-3">
      <Label for="schoolName">School Name</Label>
      <Input type="text" id="schoolName" name="schoolName" bind:value={$form.schoolName} />
      {#if $errors.schoolName}<p class="text-red-500 text-sm mt-1">{$errors.schoolName}</p>{/if}
    </div>
    <div class="sm:col-span-3">
      <Label for="schoolMajor">Major</Label>
      <Input type="text" id="schoolMajor" name="schoolMajor" bind:value={$form.schoolMajor} />
      {#if $errors.schoolMajor}<p class="text-red-500 text-sm mt-1">{$errors.schoolMajor}</p>{/if}
    </div>
    <div class="sm:col-span-6">
      <Label>Level of Study</Label>
      <RadioGroup bind:value={$form.levelOfStudy}>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="middle school" id="levelOfStudy-middle-school" />
            <Label for="levelOfStudy-middle-school">Middle School</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="high school" id="levelOfStudy-high-school" />
            <Label for="levelOfStudy-high-school">High School</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="undergraduation / bachelors" id="levelOfStudy-undergrad" />
            <Label for="levelOfStudy-undergrad">Undergraduation / Bachelors</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="graduation / masters" id="levelOfStudy-masters" />
            <Label for="levelOfStudy-masters">Graduation / Masters</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="phd / doctorate" id="levelOfStudy-phd" />
            <Label for="levelOfStudy-phd">PhD / Doctorate</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="post doctorate" id="levelOfStudy-post-doc" />
            <Label for="levelOfStudy-post-doc">Post Doctorate</Label>
          </div>
        </div>
      </RadioGroup>
      {#if $errors.levelOfStudy}<p class="text-red-500 text-sm mt-1">{$errors.levelOfStudy}</p>{/if}
    </div>
    <div class="sm:col-span-3">
      <Label for="graduationYear">Graduation Year</Label>
      <Input type="number" id="graduationYear" name="graduationYear" bind:value={$form.graduationYear} />
      {#if $errors.graduationYear}<p class="text-red-500 text-sm mt-1">{$errors.graduationYear}</p>{/if}
    </div>
  </div>
</div>

    <!-- Shipping Section -->
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Shipping</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Label>Address in USA?</Label>
          <RadioGroup bind:value={$form.addressInUSA}>
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="addressInUSA-yes" />
              <Label for="addressInUSA-yes">Yes</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="no" id="addressInUSA-no" />
              <Label for="addressInUSA-no">No</Label>
            </div>
          </RadioGroup>
          {#if $errors.addressInUSA}<p class="text-red-500 text-sm mt-1">{$errors.addressInUSA}</p>{/if}
        </div>
        {#if $form.addressInUSA === 'yes'}
          <div class="sm:col-span-6">
            <Label for="address1">Address</Label>
            <Input type="text" id="address1" name="address1" bind:value={$form.address1} />
            {#if $errors.address1}<p class="text-red-500 text-sm mt-1">{$errors.address1}</p>{/if}
          </div>
          <div class="sm:col-span-2">
            <Label for="city">City</Label>
            <Input type="text" id="city" name="city" bind:value={$form.city} />
            {#if $errors.city}<p class="text-red-500 text-sm mt-1">{$errors.city}</p>{/if}
          </div>
          <div class="sm:col-span-2">
            <Label for="state">State</Label>
            <Input type="text" id="state" name="state" bind:value={$form.state} />
            {#if $errors.state}<p class="text-red-500 text-sm mt-1">{$errors.state}</p>{/if}
          </div>
          <div class="sm:col-span-2">
            <Label for="zipCode">ZIP Code</Label>
            <Input type="text" id="zipCode" name="zipCode" bind:value={$form.zipCode} />
            {#if $errors.zipCode}<p class="text-red-500 text-sm mt-1">{$errors.zipCode}</p>{/if}
          </div>
        {/if}
      </div>
    </div>

    <!-- Logistics Section -->
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Logistics</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Label>Attending In Person?</Label>
          <Checkbox name="isAttendingInPerson" bind:checked={$form.isAttendingInPerson} />
          {#if $errors.isAttendingInPerson}<p class="text-red-500 text-sm mt-1">{$errors.isAttendingInPerson}</p>{/if}
        </div>
        <div class="sm:col-span-3">
      <Label>Shirt Size</Label>
      <RadioGroup bind:value={$form.shirtSize}>
        <div class="grid grid-cols-3 gap-2">
          {#each ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as size}
            <div class="flex items-center space-x-2">
              <RadioGroupItem value={size} id={`shirt-size-${size}`} />
              <Label for={`shirt-size-${size}`}>{size}</Label>
            </div>
          {/each}
        </div>
      </RadioGroup>
      {#if $errors.shirtSize}<p class="text-red-500 text-sm mt-1">{$errors.shirtSize}</p>{/if}
    </div>
        <div class="sm:col-span-6">
          <Label>Dietary Restrictions</Label>
          {#each ['vegetarian', 'vegan', 'halal', 'kosher', 'pescatarian', 'gluten free'] as restriction}
            <div class="flex items-center space-x-2">
              <Checkbox 
			  name="dietaryRestrictions" 
			  value={restriction} 
			  onCheckedChange={(v) => {
                if (v) {
                  addRestriction(restriction);
                } else {
                  removeRestriction(restriction);
                }
              }}
			  />
              <Label for={`dietary-${restriction}`}>{restriction}</Label>
            </div>
          {/each}
          {#if $errors.dietaryRestrictions}<p class="text-red-500 text-sm mt-1">{$errors.dietaryRestrictions}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <Label for="dietaryRestrictionsOther">Other Dietary Restrictions</Label>
          <Input type="text" id="dietaryRestrictionsOther" name="dietaryRestrictionsOther" bind:value={$form.dietaryRestrictionsOther} />
          {#if $errors.dietaryRestrictionsOther}<p class="text-red-500 text-sm mt-1">{$errors.dietaryRestrictionsOther}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <Label>Allergies</Label>
          {#each ['peanuts', 'tree nuts', 'dairy', 'eggs', 'soy', 'gluten', 'shellfish', 'fish'] as allergy}
            <div class="flex items-center space-x-2">
              <Checkbox 
			  name="allergies" 
			  value={allergy} 
			  onCheckedChange={(v) => {
                if (v) {
                  addAllergy(allergy);
                } else {
                  removeAllergy(allergy);
                }
			  }}
			  />
              <Label for={`allergy-${allergy}`}>{allergy}</Label>
            </div>
          {/each}
          {#if $errors.allergies}<p class="text-red-500 text-sm mt-1">{$errors.allergies}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <Label for="allergiesOther">Other Allergies</Label>
          <Input type="text" id="allergiesOther" name="allergiesOther" bind:value={$form.allergiesOther} />
		  {#if $errors.allergiesOther}<p class="text-red-500 text-sm mt-1">{$errors.allergiesOther}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <Label for="specialRequest">Special Request</Label>
          <Textarea id="specialRequest" name="specialRequest" bind:value={$form.specialRequest} />
          {#if $errors.specialRequest}<p class="text-red-500 text-sm mt-1">{$errors.specialRequest}</p>{/if}
        </div>
      </div>
    </div>

    <!-- Other Section -->
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Other Information</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <Label for="howYouHeard">How did you hear about us?</Label>
          <Input type="text" id="howYouHeard" name="howYouHeard" bind:value={$form.howYouHeard} />
          {#if $errors.howYouHeard}<p class="text-red-500 text-sm mt-1">{$errors.howYouHeard}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <Label for="whyAttend">Why do you want to attend?</Label>
          <Textarea id="whyAttend" name="whyAttend" bind:value={$form.whyAttend} />
          {#if $errors.whyAttend}<p class="text-red-500 text-sm mt-1">{$errors.whyAttend}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <div class="flex items-center space-x-2">
            <Checkbox id="codeOfConductUBHacking" name="codeOfConductUBHacking" bind:checked={$form.codeOfConductUBHacking} />
            <Label for="codeOfConductUBHacking">I agree to the UB Hacking Code of Conduct</Label>
          </div>
          {#if $errors.codeOfConductUBHacking}<p class="text-red-500 text-sm mt-1">{$errors.codeOfConductUBHacking}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <div class="flex items-center space-x-2">
            <Checkbox id="codeOfConduct" name="codeOfConduct" bind:checked={$form.codeOfConduct} />
            <Label for="codeOfConduct">I agree to the MLH Code of Conduct</Label>
          </div>
          {#if $errors.codeOfConduct}<p class="text-red-500 text-sm mt-1">{$errors.codeOfConduct}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <div class="flex items-center space-x-2">
            <Checkbox id="dataSharing" name="dataSharing" bind:checked={$form.dataSharing} />
            <Label for="dataSharing">I agree to the MLH Data Sharing Provision</Label>
          </div>
          {#if $errors.dataSharing}<p class="text-red-500 text-sm mt-1">{$errors.dataSharing}</p>{/if}
        </div>
        <div class="sm:col-span-6">
          <div class="flex items-center space-x-2">
            <Checkbox id="communication" name="communication" bind:checked={$form.communication} />
            <Label for="communication">I would like to receive communication from MLH</Label>
          </div>
          {#if $errors.communication}<p class="text-red-500 text-sm mt-1">{$errors.communication}</p>{/if}
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <Button type="submit" variant="default">Register</Button>
  </div>
</form>
