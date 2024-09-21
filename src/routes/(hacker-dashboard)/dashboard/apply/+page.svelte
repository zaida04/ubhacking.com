<div class="flex items-center justify-center bg-gray-100 p-4">
  <div class="w-full max-w-2xl bg-white shadow-md rounded-lg">
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center">UB Hacking Application</h1>
      <p class="text-center text-gray-600 mb-6">
        Please fill out the form below to apply for UB Hacking
      </p>

      <form class="space-y-6">
        <div class="space-y-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-9"
                required
              />
            </div>
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-9"
                required
              />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="phone" class="text-sm font-medium">Phone Number</label
              >
              <input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-9"
                required
              />
            </div>
            <div class="space-y-2">
              <label for="linkedin" class="text-sm font-medium">LinkedIn</label>
              <input
                id="linkedin"
                type="text"
                placeholder="linkedin.com/in/johndoe"
                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-9"
              />
            </div>
          </div>
          <div class="space-y-2">
            <label for="github" class="text-sm font-medium">GitHub</label>
            <input
              id="github"
              type="text"
              placeholder="github.com/johndoe"
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-9"
            />
          </div>
          <div class="space-y-2">
            <label for="reason" class="text-sm font-medium"
              >Why do you want to participate in UB Hacking?</label
            >
            <textarea
              id="reason"
              placeholder="Tell us why you're excited to join UB Hacking..."
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              required
            ></textarea>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-medium">Dietary Restrictions</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="kosher" />
                <label for="kosher" class="text-sm font-medium">Kosher</label>
              </div>
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="vegetarian" />
                <label for="vegetarian" class="text-sm font-medium"
                  >Vegetarian</label
                >
              </div>
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="halal" />
                <label for="halal" class="text-sm font-medium">Halal</label>
              </div>
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="none" />
                <label for="none" class="text-sm font-medium">None</label>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
            >Submit Application</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
