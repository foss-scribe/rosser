<template>
    <div class="surface-card px-4 py-8 md:px-6 lg:px-8">
        <div class="border-top-1 border-300 pt-5 text-center">
            <img src="~/assets/images/logo.webp" alt="Image" height="72" />
            <ul class="list-none p-0 mx-0 my-5 flex justify-content-center flex-column align-items-center lg:flex-row">
                <li>
                    <!-- <NuxtLink to="/about" class="text-600 cursor-pointer line-height-3 lg:mr-5">
                        About
                    </NuxtLink> -->
                </li>
                <li class="flex gap-5">
                    <NuxtLink to="https://medium.com/@chrisrosser" target="_blank" class="text-600 cursor-pointer line-height-3">
                        Medium
                    </NuxtLink>
                    <NuxtLink to="https://chrisrosser.substack.com" target="_blank" class="text-600 cursor-pointer line-height-3">
                        Substack
                    </NuxtLink>
                </li>
            </ul>
            <div class="text-center">
                <NuxtLink to="/privacy" class="text-sm text-600 cursor-pointer">
                    Privacy Policy
                </NuxtLink>
            </div>
            <div class="text-center text-sm text-600 mt-4">
                &copy; 2007 &ndash; 2024, Chris Rosser. All rights reserved. <br />
                Some affiliate links in use.
            </div>
        </div>
    </div>
   <!-- <SignupWidget /> -->
</template>

<style scoped>

a:any-link {
    text-decoration: none;
}
</style>


