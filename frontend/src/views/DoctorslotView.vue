<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="" />
    <Banner />
    <div class="mt-8"></div>
    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <tables class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  เลือกเวลา
                </th>

                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  เเผนก
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  สถานนะ
                </th>

                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  ห้องตรวจ
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-5 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  หมายเหตุ
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in users" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <label>
                        <input
                          type="checkbox"
                          class="w-4 h-4 rounded-md focus:ring-indigo-500"
                          name="radio"
                        /><span class="ml-2"></span>
                      </label>
                    </div>

                    <div class="ml-4">
                      <div class="text-xs font-medium leading-5 text-gray-900">
                        {{ u.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <!-- ------------------ ---------------------------------->

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-xs font-medium leading-5 text-gray-900">
                    <div class="relative">
                      <select>
                        <option>ARI</option>
                        <option>Well baby</option>
                      </select>
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-xs font-medium leading-5 text-gray-900">
                    <div class="relative">
                      <select>
                        <option>ออกตรวจ</option>
                        <option>พัก</option>
                      </select>
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-xs font-medium leading-5 text-gray-900">
                    <select class="relative">
                      <option>ห้องตรวจ 1</option>
                      <option>ห้องตรวจ 2</option>
                    </select>
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-xs font-medium leading-5 text-gray-900">
                        {{ u.remark }}
                      </div>
                    </div>
                  </div>
                </td>

                <!-- ------------------ ---------------------------------->
              </tr>
            </tbody>
          </tables>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Banner from "../partials/Banner.vue";
import Breadcrumb from "../partials/Breadcrumb.vue";
interface User {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
  remark: string;
}

const testUser: User = {
  name: "8:00-8.15",
  title: "Software Engineer",
  title2: "Web dev",
  status: "Active",
  role: "Owner",
  remark: "เเพทย์ลาบ่าย",
};

const users = ref<User[]>([...Array(10).keys()].map(() => testUser));
</script>
