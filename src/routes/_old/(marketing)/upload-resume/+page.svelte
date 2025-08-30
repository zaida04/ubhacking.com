<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  import { Button } from "$lib/components/ui/button";
  import { Label } from "$lib/components/ui/label";
  import * as Form from "$lib/components/ui/form";
  import FormSection from "../_components/FormSection.svelte";
  import MenuInput from "../_components/MenuInput.svelte";
  import type { ActionData, PageServerData } from "./$types";

  export let data: PageServerData;
  export let form: ActionData;
  const { form: supForm, errors, enhance } = superForm(data.form);

  let files: FileList | null = null;

  $: {
    if (files) {
      $supForm.resume = files[0];
    }
  }
</script>

<div class="bg-yellow-50 p-4 flex justify-center" id="bg">
  <div
    class="w-full md:w-[30rem] bg-white shadow-2xl p-8 outline-double outline-black outline-4"
  >
    <h1 class="text-2xl text-center font-serif">Upload/Update Resume</h1>

    {#if data?.existingResume}
      <div class="bg-green-100 border-l-4 border-green-500 p-4 my-4">
        <p class="text-green-700 text-base">
          Existing resume detected. Uploading a new resume will overwrite the
          current one. If you received an email stating your resume was not
          legible, please upload your new resume on this page.
        </p>
      </div>
    {/if}

    <form method="POST" enctype="multipart/form-data" use:enhance>
      <FormSection>
        <MenuInput
          id="resume"
          label="Resume (PDF)"
          type="file"
          name="resume"
          required
          bind:files
        />
        <Form.Error error={$errors.resume} />

        <div class="pt-4">
          <Button
            type="submit"
            name="action"
            value="uploadResume"
            class="w-full"
          >
            Upload Resume
          </Button>
        </div>
      </FormSection>
    </form>

    {#if form?.error}
      <div class="bg-red-100 border-l-4 border-red-500 p-4 my-4">
        <p class="text-red-700 text-lg font-sans">
          There was an error processing your request. Please try again or
          contact support.
        </p>
      </div>
    {/if}
  </div>
</div>
