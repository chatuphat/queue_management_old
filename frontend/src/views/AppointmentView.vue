<template>
  <div>
    <Breadcrumb breadcrumb="appointment" />
  <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">ค้นหา</h2>

          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="block font-medium text-gray-700 text-xs"
                >Select a date:</label
              >
              <input
                type="date"
                class="mt-1 block w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 text-xs"
                >Select Doctor</label
              >
              <div>
                <select
                  class="mt-1 block text-sm w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option>นพ. สมชาย ใจดี</option>
                  <option>พญ. สมหญิง ดีใจ</option>
                </select>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              ค้นหา
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script lang="ts" setup>
import Breadcrumb from "../partials/Breadcrumb.vue";
</script>
  