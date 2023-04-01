<template>
  <div>
    <Breadcrumbappointment breadcrumb="appointment add" />
    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            APPOINTMENT
          </h2>

          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700" for="username">วันนัด</label>
              <input
                type="date"
                class="mt-1 block w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label class="text-gray-700" for="emailAddress">ประเภท</label>
              <select
                class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>Appointment</option>
                <option>Walk in</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" for="password">เเผนก</label>
              <select
                class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>ARI</option>
                <option>Well baby</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" for="passwordConfirmation"
                >HN Number</label
              >
              <input
                class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
              />
            </div>

            <div>
              <label class="text-gray-700" for="password">ห้องตรวจ</label>
              <select
                class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>ห้อง 1</option>
                <option>ห้อง 2</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" for="password">เวลาตรวจ</label>
              <select
                class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>8:00-8:15</option>
                <option>8:15-8:30</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" for="passwordConfirmation"
                >หมายเหตุ</label
              >
              <input
                class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
              />
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script lang="ts" setup>
import Breadcrumbappointment from "../partials/Breadcrumbappointment.vue";
</script>
  