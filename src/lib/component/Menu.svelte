<script>
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-5 backdrop-blur-sm bg-white/5 z-50">
    <div ><svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.168 25C2.93333 25 2.74133 24.9253 2.592 24.776C2.44267 24.6267 2.368 24.4347 2.368 24.2V3.4C2.368 3.16533 2.44267 2.97333 2.592 2.824C2.74133 2.67467 2.93333 2.6 3.168 2.6H17.664C17.8987 2.6 18.0907 2.67467 18.24 2.824C18.3893 2.97333 18.464 3.16533 18.464 3.4V5.96C18.464 6.17333 18.3893 6.35467 18.24 6.504C18.0907 6.65333 17.8987 6.728 17.664 6.728H7.296V11.752H16.96C17.1947 11.752 17.3867 11.8267 17.536 11.976C17.6853 12.1253 17.76 12.3173 17.76 12.552V14.92C17.76 15.1333 17.6853 15.3147 17.536 15.464C17.3867 15.6133 17.1947 15.688 16.96 15.688H7.296V20.872H17.92C18.1547 20.872 18.3467 20.9467 18.496 21.096C18.6453 21.2453 18.72 21.4373 18.72 21.672V24.2C18.72 24.4347 18.6453 24.6267 18.496 24.776C18.3467 24.9253 18.1547 25 17.92 25H3.168Z" fill="white"/>
        <rect x="19.3203" y="8" width="4.60222" height="20.71" transform="rotate(20.6962 19.3203 8)" fill="black"/>
        <g filter="url(#filter0_f_688_19046)">
        <rect x="18.5781" y="8.77539" width="5.36926" height="16.8748" transform="rotate(20.7277 18.5781 8.77539)" fill="black"/>
        </g>
        <path d="M13.056 33C12.864 33 12.704 32.936 12.576 32.808C12.448 32.6587 12.384 32.4987 12.384 32.328C12.384 32.2213 12.3947 32.1253 12.416 32.04L20.032 11.464C20.096 11.2293 20.224 11.0267 20.416 10.856C20.608 10.6853 20.8747 10.6 21.216 10.6H25.312C25.6533 10.6 25.92 10.6853 26.112 10.856C26.304 11.0267 26.432 11.2293 26.496 11.464L34.112 32.04C34.1333 32.1253 34.144 32.2213 34.144 32.328C34.144 32.4987 34.08 32.6587 33.952 32.808C33.824 32.936 33.664 33 33.472 33H30.144C29.824 33 29.5893 32.9253 29.44 32.776C29.2907 32.6267 29.1947 32.488 29.152 32.36L27.776 28.776H18.752L17.376 32.36C17.3333 32.488 17.2373 32.6267 17.088 32.776C16.9387 32.9253 16.704 33 16.384 33H13.056ZM19.936 24.648H26.56L23.264 15.432L19.936 24.648Z" fill="white"/>
        <defs>
        <filter id="filter0_f_688_19046" x="8.60547" y="4.77539" width="18.9961" height="25.6826" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_688_19046"/>
        </filter>
        </defs>
        </svg></div>
    <nav class="">
        <ul class="flex space-x-4">
            <li><a href="#" on:click|preventDefault={() => scrollToSection('accueil')}>ACCUEIL</a></li>
            <li><a href="#" on:click|preventDefault={() => scrollToSection('apropos')}>A PROPOS</a></li>
            <li><a href="#" on:click|preventDefault={() => scrollToSection('portfolio')}>PORTFOLIO</a></li>
            <li><a href="#" on:click|preventDefault={() => scrollToSection('contact')}>CONTACT</a></li>
        </ul>
    </nav>
</header>