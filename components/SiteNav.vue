<template>

<div class="py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static surface-card">
    <a v-ripple class="flex p-2 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple cursor-pointer"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }" href="/">
        <img src="~/assets/images/logo.webp" alt="Image" height="50" />
    </a>
    <a v-ripple class="cursor-pointer block lg:hidden text-color mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 lg:justify-content-end hidden lg:flex absolute lg:static w-full left-0 top-100 px-6 lg:px-0 z-3 shadow-2 lg:shadow-none surface-card">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-color select-none flex-column lg:flex-row cursor-pointer ">
            <li class="relative">
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Books</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem text-900">
                    <li>
                        <!-- <NuxtLink to="/books/codex-of-destiny" v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <span class="font-medium">The Codex of Destiny</span>
                        </NuxtLink> -->
                        <NuxtLink to="/books/cadocs-contract" v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <span class="font-medium">Cadoc's Contract</span>
                        </NuxtLink>
                        <NuxtLink to="/books/mistress-of-skeinhold" v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <span class="font-medium">Mistress of Skeinhold</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li>
                <NuxtLink to="/reading" v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                    Reading List
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://medium.com/@chrisrosser" target="_blank"  v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                    Medium
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://chrisrosser.substack.com" target="_blank"  v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                    Substack
                </NuxtLink>
            </li>


            <!-- <li>
                <i class="pi pi-moon text-2xl mr-2 text-blue-600"></i>
            </li> -->
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
            <!-- <Button label="Login" icon="pi pi-user" class="p-button font-bold"></Button> -->
        </div>
    </div>
</div>
</template>

<style scoped>
a:link, a:visited {
    color: white;
    text-decoration: none;
}
</style>