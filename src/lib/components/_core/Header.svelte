<script>
  import logo from '$lib/images/logo.png';
  import { page } from '$app/stores';

  $: activePageStyles = 'border-indigo-500 text-gray-900 border-b-2';
  $: inactivePageStyles = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2';
</script>

<div class="min-h-full">
  <nav class="bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="{logo}" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="{logo}" alt="Your Company">
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a href="/" class="inline-flex items-center px-1 pt-1 text-sm font-medium {$page.route.id == '/' ? activePageStyles : inactivePageStyles}">Dashboard</a>
            <a href="/pathways" class="inline-flex items-center px-1 pt-1 text-sm font-medium {$page.route.id == '/pathways' ? activePageStyles : inactivePageStyles}">Pathways</a>
            <a href="/achievements" class="inline-flex items-center px-1 pt-1 text-sm font-medium {$page.route.id == '/achievements' ? activePageStyles : inactivePageStyles}">Achievements</a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">

          <div class="relative ml-3">
            <div>
              <button type="button" class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>
            <div class="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <a href="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
              <a href="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
              <a href="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 pt-2 pb-3">
        <a href="/" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="/pathways" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Pathways</a>
        <a href="/achievements" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Achievements</a>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <a href="/" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Your Profile</a>
          <a href="/" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Settings</a>
          <a href="/" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Sign out</a>
        </div>
      </div>
    </div>
  </nav>

  
</div>
