<template>
  <div>
    <div class="relative shadow-md sm:rounded-lg overflow-x-auto">
      <table class="w-full text-gray-500 dark:text-gray-400 text-sm text-left rtl:text-right">
        <caption
          class="bg-gray-900 dark:bg-gray-800 p-5 font-semibold text-white dark:text-white text-lg text-left rtl:text-right"
        >
          Our products
          <p class="mt-1 font-normal text-gray-500 dark:text-gray-400 text-sm">
            Browse a list of Flowbite products designed to help you work and play, stay organized,
            get answers, keep in touch, grow your business, and more.
          </p>
        </caption>
        <thead
          class="bg-gray-500 dark:bg-gray-700 text-gray-100 dark:text-gray-400 text-xs uppercase"
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 w-4 h-4 text-blue-600"
                />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Type</th>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-b"
          >
            <td class="p-4 w-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 w-4 h-4 text-blue-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">Yes</td>
            <td class="flex items-center px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
              <a href="#" class="ms-3 font-medium text-red-600 dark:text-red-500 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DeviceService from '@/services/device.service'
export default {
  name: 'AdminView',
  data() {
    return {
      deviceList: [],
    }
  },

  mounted() {
    DeviceService.getAllDevices().then((response) => {
      this.deviceList = response.data
    })
  },
}
</script>

<style scoped></style>
