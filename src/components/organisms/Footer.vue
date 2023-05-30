<template>
   <footer class="bg-white flex flex-col items-center gap-[24px] text-neutral-11 py-[32px] md:py-[56px]">
    <section class="flex flex-col lg:flex-row justify-between container-class gap-[24px] md:gap-[28px]">
      <section class="flex flex-col items-start lg:max-w-[348px] gap-[16px]">
        <Logo />
        <p class="py-[4px]"> Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak developer yang profesional dan memberikan kesempatan untuk berkarir di perusahaan ternama. </p>
      </section>
      <section class="grid grid-cols-2 md:grid-cols-4 gap-x-[16px] md:gap-x-[28px] gap-y-[24px] lg:min-w-[724px]"><!--[-->
        <section class="flex flex-col gap-[16px]">
          <p class="font-sora text-neutral-13 font-semibold text-h6 md:text-h5">Kelas</p>
          <ul class="flex flex-col items-start gap-[6px]"><!--[-->
            <li>
              <a href="/class/fullstack-mobile" class="flex items-center gap-[8px] py-[4px]"><!---->
                <span class="capitalize">Fullstack Mobile</span>
              </a>
            </li>
            <li>
              <a href="/class/fullstack-website-dan-golang" class="flex items-center gap-[8px] py-[4px]">
                <!----><span class="capitalize">Fullstack Website dan Golang</span>
              </a>
            </li>
            <li>
              <a href="https://fazztrack.com/minicamp" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                <!----><span class="capitalize">Mini Bootcamp</span>
              </a>
            </li>
            <li>
              <a href="https://fazztrack.com/modul-belajar" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                <!----><span class="capitalize">Online Course</span>
              </a>
            </li>
            <!--]--></ul>
        </section>
        <section class="flex flex-col gap-[16px]">
            <p class="font-sora text-neutral-13 font-semibold text-h6 md:text-h5">Dukungan</p>
            <ul class="flex flex-col items-start gap-[6px]">
              <!--[--><li>
                <a href="https://fazztrack.com/income-sharing-agreement" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                  <!----><span class="capitalize">Cicilan Setelah Kerja (ISA)</span>
                </a>
              </li>
              <li>
                <a href="https://fazztrack.com/career-ready" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]"><!---->
                  <span class="capitalize">Career Ready</span>
                </a>
              </li>
              <li>
                <a href="https://fazztrack.com/faq" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                  <!----><span class="capitalize">FAQ</span>
                </a>
              </li>
              <li>
                <a href="https://fazztrack.com/hire" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                  <!----><span class="capitalize">Hire Our Graduates</span>
                </a>
              </li>
              <!--]--></ul>
        </section>
        <section class="flex flex-col gap-[16px]">
              <p class="font-sora text-neutral-13 font-semibold text-h6 md:text-h5">Tentang</p>
              <ul class="flex flex-col items-start gap-[6px]"><!--[-->
                <li>
                  <a href="https://blog.fazztrack.com/?gi=8ffc0beffa0a" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                    <!----><span class="capitalize">Cerita Alumni</span>
                  </a>
                </li>
                <li>
                  <a href="https://fazztrack.com/tentang" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                    <!----><span class="capitalize">Sekilas Fazztrack</span>
                  </a>
                </li>
                <!--]--></ul>
        </section>
        <section class="flex flex-col gap-[16px]">
                <p class="font-sora text-neutral-13 font-semibold text-h6 md:text-h5">Social Media</p>
                <ul class="flex flex-col items-start gap-[6px]">
                  <!--[--><li>
                    <a href="https://www.instagram.com/fazztrack.id/" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="" width="16px" height="16px" viewBox="0 0 256 256" data-v-cf1ec82f=""><g fill="none"><rect width="256" height="256" fill="url(#iconifyVue20)" rx="60"></rect><rect width="256" height="256" fill="url(#iconifyVue21)" rx="60"></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"></path><defs><radialGradient id="iconifyVue20" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"></stop><stop offset=".1" stop-color="#FD5"></stop><stop offset=".5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="iconifyVue21" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"></stop><stop offset=".128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#60F" stop-opacity="0"></stop></radialGradient></defs></g></svg>
                      <span class="capitalize">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/fazztrackdotcom" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="" width="16px" height="16px" viewBox="0 0 256 256" data-v-cf1ec82f=""><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"></path>
                      </svg>
                      <span class="capitalize">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCKLvpOkEN8HXJAcR43Iz1CA" rel="noopener noreferrer" class="flex items-center gap-[8px] py-[4px]">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="" width="16px" height="16px" viewBox="0 0 256 180" data-v-cf1ec82f=""><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"></path><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path></svg>
                      <span class="capitalize">Youtube</span>
                    </a>
                  </li>
                  <!--]--></ul>
      </section>
      </section>
    </section>
    <div class="container-class">
              <hr class="border-neutral-4">
    </div>
    <section class="container-class flex flex-col md:flex-row-reverse justify-between gap-[24px]">
              <section class="flex flex-col md:flex-row gap-[16px]">
                <section class="flex items-center gap-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="" width="18px" height="18px" viewBox="0 0 24 24" data-v-cf1ec82f="">
                    <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                  <p>+6281132010888</p>
                </section>
                <section class="flex items-center gap-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" style="" width="18px" height="18px" viewBox="0 0 24 24" data-v-cf1ec82f=""><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                  </svg>
                  <p>hello@fazztrack.com</p>
                </section></section>
                  <p>
                  <span class="font-semibold"> © 2020 - 2023 Fazztrack. </span>
                   All Rights Reserved 
                  </p>
    </section>
  </footer>
</template>

<script lang="ts">
  import Logo from '../atoms/LogoFazz.vue'

  export default {
    components:{
      Logo
    }
  }
</script>