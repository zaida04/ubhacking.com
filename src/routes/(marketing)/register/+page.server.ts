import { registerUserSchema } from "$form/register/schema";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad } from "./$types";
import { fail, message, superValidate } from "sveltekit-superforms";
import type { Actions } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(registerUserSchema)),
	};
};


export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(registerUserSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const formData = getFormData(form);
			// Insert data into Supabase
			const { data, error } = await supabase
				.from('registration')
				.insert([formData])
				.select();

			if (error) {
					throw error;
			}
			return message(form, "Your registration has been submitted.");
		} catch (e) {
			return fail(500, { form, error: "An error occurred while submitting the form." });
		}
	}
};

const getFormData = (form: any) => {
  return {
						email: form.data.email,
						password: form.data.password,
						name_first: form.data.nameFirst,
						name_last: form.data.nameLast,
						dob: form.data.dob,
						phone: form.data.phone,
						gender: form.data.gender,
						race_ethnicity: form.data.raceEthnicity,
						country: form.data.country,
						school_name: form.data.schoolName,
						school_major: form.data.schoolMajor,
						level_of_study: form.data.levelOfStudy,
						graduation_year: form.data.graduationYear,
						address_in_usa: form.data.addressInUSA,
						address1: form.data.address1,
						city: form.data.city,
						state: form.data.state,
						zip_code: form.data.zipCode,
						is_attending_in_person: form.data.isAttendingInPerson,
						shirt_size: form.data.shirtSize,
						dietary_restrictions: form.data.dietaryRestrictions,
						dietary_restrictions_other: form.data.dietaryRestrictionsOther,
						allergies: form.data.allergies,
						allergies_other: form.data.allergiesOther,
						special_request: form.data.specialRequest,
						how_you_heard: form.data.howYouHeard,
						why_attend: form.data.whyAttend,
						code_of_conduct_ub_hacking: form.data.codeOfConductUBHacking,
						code_of_conduct: form.data.codeOfConduct,
						data_sharing: form.data.dataSharing,
						communication: form.data.communication
					}
}
