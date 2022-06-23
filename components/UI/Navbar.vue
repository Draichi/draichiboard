<template>
  <nav class="Navbar">
    <ul class="Navbar__container">
      <!-- <li class="Navbar__item">
        <svg
          viewBox="0 0 512 512"
          version="1.1"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g class="fa-group">
            <path
            fill="currentColor"
              class="fa-primary"
              d="M449.5,50.4H62.5c-14,0-25.4,11.4-25.4,25.4V276H475V75.8C475,61.8,463.6,50.4,449.5,50.4z M127.5,174.5   c-1.8,0-3.6-0.7-4.9-2c-2.7-2.7-2.7-7.2,0-9.9l63.3-63.3c2.7-2.7,7.2-2.7,9.9,0c2.7,2.7,2.7,7.2,0,9.9l-63.3,63.3   C131.1,173.8,129.3,174.5,127.5,174.5z M184.7,244.8c-1.8,0-3.6-0.7-5-2c-2.7-2.7-2.7-7.2,0-9.9L319.6,93c2.7-2.7,7.2-2.7,9.9,0   c2.7,2.7,2.7,7.2,0,9.9L189.6,242.8C188.3,244.1,186.5,244.8,184.7,244.8z M389.5,172.8L324,238.3c-1.4,1.4-3.2,2-5,2   s-3.6-0.7-4.9-2c-2.7-2.7-2.7-7.2,0-9.9l65.5-65.5c2.7-2.7,7.2-2.7,9.9,0C392.2,165.7,392.2,170.1,389.5,172.8z"
            />
            <path
            fill="currentColor"
              class="fa-secondary"
              d="M301.9,369.6h-91.7c-6.2,28.8-26.3,92.1-83.8,92.1h259.3C328.2,461.6,308,398.4,301.9,369.6z"
            />
            <path
            fill="currentColor"
              class="fa-secondary"
              d="M37,330.1c0,6.5,2.4,12.4,6.5,16.9c3,3.3,6.8,5.9,11.1,7.3c2.5,0.8,5.1,1.2,7.8,1.2h387.1   c2.7,0,5.4-0.4,7.8-1.2c4.3-1.4,8.2-3.9,11.1-7.3c4-4.5,6.5-10.4,6.5-16.9V290H37V330.1z M256.5,309.6c7.3,0,13.2,5.9,13.2,13.2   c0,7.3-5.9,13.2-13.2,13.2c-7.3,0-13.2-5.9-13.2-13.2C243.3,315.5,249.2,309.6,256.5,309.6z"
            />
          </g>
        </svg>
        <span>Landing</span>
      </li> -->

      <router-link to="/" class="Navbar__routerLink">
        <li class="Navbar__item">
          <svg
            viewBox="0 0 512 512"
            id="Layer_1"
            style="enable-background: new 0 0 512 512"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M305.9,259.2c20.3,0,36.7-16.3,36.9-36.5h-36.9v-37.4c-20.4,0-36.9,16.5-36.9,36.9   C268.9,242.6,285.5,259.2,305.9,259.2z"
              />
              <rect
                class="fa-secondary"
                height="73.9"
                width="73.9"
                x="169.2"
                y="185.3"
              />
              <path
                class="fa-primary"
                fill="currentColor"
                d="M98.8,409.4h314.5V102.6H98.8V409.4z M236.4,375c0,4.8-3.9,8.7-8.7,8.7h-10.6c-4.8,0-8.7-3.9-8.7-8.7v-35.7   c0-4.8,3.9-8.7,8.7-8.7h10.6c4.8,0,8.7,3.9,8.7,8.7V375z M303.5,375c0,4.8-3.9,8.7-8.7,8.7h-10.6c-4.8,0-8.7-3.9-8.7-8.7v-35.7   c0-4.8,3.9-8.7,8.7-8.7h10.6c4.8,0,8.7,3.9,8.7,8.7V375z M370.5,375c0,4.8-3.9,8.7-8.7,8.7h-10.6c-4.8,0-8.7-3.9-8.7-8.7v-26.2   c0-4.8,3.9-8.7,8.7-8.7h10.6c4.8,0,8.7,3.9,8.7,8.7V375z M141.5,153.8c0-4.8,3.9-8.6,8.6-8.6h211.7c4.8,0,8.6,3.9,8.6,8.6v136.8   c0,4.8-3.9,8.6-8.6,8.6H150.1c-4.8,0-8.6-3.9-8.6-8.6V153.8z M141.5,348.8c0-4.8,3.9-8.7,8.7-8.7h10.6c4.8,0,8.7,3.9,8.7,8.7V375   c0,4.8-3.9,8.7-8.7,8.7h-10.6c-4.8,0-8.7-3.9-8.7-8.7V348.8z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M98.8,450.2c0,15.4,12.4,27.8,27.8,27.8h258.9c15.4,0,27.8-12.4,27.8-27.8v-26.8H98.8V450.2z M256,437.8   c7.1,0,12.8,5.7,12.8,12.8s-5.7,12.8-12.8,12.8s-12.8-5.7-12.8-12.8S248.9,437.8,256,437.8z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M385.4,34H126.6c-15.4,0-27.8,12.4-27.8,27.8v26.8h314.5V61.8C413.2,46.4,400.8,34,385.4,34z M285,68.3h-58   c-3.9,0-7-3.1-7-7s3.1-7,7-7h58c3.9,0,7,3.1,7,7S288.8,68.3,285,68.3z"
              />
            </g>
          </svg>
          <span>Dashboard</span>
        </li>
      </router-link>
      <router-link to="/portfolio" class="Navbar__routerLink">
        <li class="Navbar__item">
          <svg
            viewBox="0 0 512 512"
            id="Layer_1"
            style="enable-background: new 0 0 512 512"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                class="fa-primary"
                fill="currentColor"
                d="M155.3,162v188c0,3.7,3,6.8,6.8,6.8h188c3.7,0,6.8-3,6.8-6.8V162c0-3.7-3-6.8-6.8-6.8H162   C158.3,155.3,155.3,158.3,155.3,162z M193.3,200c0-3.7,3-6.8,6.8-6.8h112c3.7,0,6.8,3,6.8,6.8v112c0,3.7-3,6.8-6.8,6.8H200   c-3.7,0-6.8-3-6.8-6.8V200z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M249,80.7v42.4c0,3.9,3.1,7,7,7s7-3.1,7-7V80.7c11.2-3.1,19.4-13.3,19.4-25.4c0-14.5-11.8-26.4-26.4-26.4   s-26.4,11.8-26.4,26.4C229.6,67.4,237.8,77.7,249,80.7z M256,42.9c6.8,0,12.4,5.6,12.4,12.4s-5.6,12.4-12.4,12.4   s-12.4-5.6-12.4-12.4S249.2,42.9,256,42.9z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M334.8,28.9c-14.5,0-26.4,11.8-26.4,26.4c0,12.1,8.2,22.3,19.4,25.4v42.4c0,3.9,3.1,7,7,7s7-3.1,7-7V80.7   c11.2-3.1,19.4-13.3,19.4-25.4C361.1,40.8,349.3,28.9,334.8,28.9z M334.8,67.7c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4   s12.4,5.6,12.4,12.4S341.6,67.7,334.8,67.7z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M170.3,80.7v42.4c0,3.9,3.1,7,7,7s7-3.1,7-7V80.7c11.2-3.1,19.4-13.3,19.4-25.4c0-14.5-11.8-26.4-26.4-26.4   s-26.4,11.8-26.4,26.4C150.9,67.4,159.1,77.7,170.3,80.7z M177.3,42.9c6.8,0,12.4,5.6,12.4,12.4s-5.6,12.4-12.4,12.4   s-12.4-5.6-12.4-12.4S170.4,42.9,177.3,42.9z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M263,431.3v-42.4c0-3.9-3.1-7-7-7s-7,3.1-7,7v42.4c-11.2,3.1-19.4,13.3-19.4,25.4c0,14.5,11.8,26.4,26.4,26.4   s26.4-11.8,26.4-26.4C282.4,444.6,274.2,434.3,263,431.3z M256,469.1c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4   s12.4,5.6,12.4,12.4S262.8,469.1,256,469.1z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M341.8,431.3v-42.4c0-3.9-3.1-7-7-7s-7,3.1-7,7v42.4c-11.2,3.1-19.4,13.3-19.4,25.4   c0,14.5,11.8,26.4,26.4,26.4s26.4-11.8,26.4-26.4C361.1,444.6,352.9,434.3,341.8,431.3z M334.8,469.1c-6.8,0-12.4-5.6-12.4-12.4   s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S341.6,469.1,334.8,469.1z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M184.3,431.3v-42.4c0-3.9-3.1-7-7-7s-7,3.1-7,7v42.4c-11.2,3.1-19.4,13.3-19.4,25.4   c0,14.5,11.8,26.4,26.4,26.4s26.4-11.8,26.4-26.4C203.6,444.6,195.4,434.3,184.3,431.3z M177.3,469.1c-6.8,0-12.4-5.6-12.4-12.4   s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S184.1,469.1,177.3,469.1z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M456.7,229.6c-12.1,0-22.3,8.2-25.4,19.4h-42.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h42.4c3.1,11.2,13.3,19.4,25.4,19.4   c14.5,0,26.4-11.8,26.4-26.4S471.2,229.6,456.7,229.6z M456.7,268.4c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4   s12.4,5.6,12.4,12.4S463.5,268.4,456.7,268.4z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M456.7,308.4c-12.1,0-22.3,8.2-25.4,19.4h-42.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h42.4c3.1,11.2,13.3,19.4,25.4,19.4   c14.5,0,26.4-11.8,26.4-26.4S471.2,308.4,456.7,308.4z M456.7,347.1c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4   s12.4,5.6,12.4,12.4S463.5,347.1,456.7,347.1z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M388.9,184.3h42.4c3.1,11.2,13.3,19.4,25.4,19.4c14.5,0,26.4-11.8,26.4-26.4s-11.8-26.4-26.4-26.4   c-12.1,0-22.3,8.2-25.4,19.4h-42.4c-3.9,0-7,3.1-7,7S385,184.3,388.9,184.3z M456.7,164.9c6.8,0,12.4,5.6,12.4,12.4   s-5.6,12.4-12.4,12.4s-12.4-5.6-12.4-12.4S449.9,164.9,456.7,164.9z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M123.1,249H80.7c-3.1-11.2-13.3-19.4-25.4-19.4c-14.5,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4   c12.1,0,22.3-8.2,25.4-19.4h42.4c3.9,0,7-3.1,7-7S127,249,123.1,249z M55.3,268.4c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4   s12.4,5.6,12.4,12.4S62.1,268.4,55.3,268.4z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M123.1,327.8H80.7c-3.1-11.2-13.3-19.4-25.4-19.4c-14.5,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4   c12.1,0,22.3-8.2,25.4-19.4h42.4c3.9,0,7-3.1,7-7S127,327.8,123.1,327.8z M55.3,347.1c-6.8,0-12.4-5.6-12.4-12.4   s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S62.1,347.1,55.3,347.1z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M123.1,170.3H80.7c-3.1-11.2-13.3-19.4-25.4-19.4c-14.5,0-26.4,11.8-26.4,26.4s11.8,26.4,26.4,26.4   c12.1,0,22.3-8.2,25.4-19.4h42.4c3.9,0,7-3.1,7-7S127,170.3,123.1,170.3z M55.3,189.6c-6.8,0-12.4-5.6-12.4-12.4   s5.6-12.4,12.4-12.4s12.4,5.6,12.4,12.4S62.1,189.6,55.3,189.6z"
              />
            </g>
          </svg>
          <span>Portfolio</span>
        </li>
      </router-link>
      <a
        href="https://github.com/Draichi"
        target="_blank"
        class="Navbar__routerLink"
      >
        <li class="Navbar__item">
          <svg
            viewBox="0 0 512 512"
            id="Layer_1"
            style="enable-background: new 0 0 512 512"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M147.9,236.5v-96.2c-20.8,6-36.1,25.3-36.1,48.1C111.9,211.2,127.1,230.5,147.9,236.5z"
              />
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M401.2,188.4c0-22.8-15.2-42-36.1-48.1v96.2C386,230.5,401.2,211.2,401.2,188.4z"
              />
              <path
                class="fa-primary"
                fill="currentColor"
                d="M176.2,269.3h44.4v25.9h70.8v-25.9h45.5c7.9,0,14.2-6.4,14.2-14.2V121.8c0-7.9-6.4-14.2-14.2-14.2h-73.4v0   V71.2c0-0.3,0-0.6-0.1-0.9c11.2-3,19.4-13.3,19.4-25.4c0-14.6-11.8-26.4-26.4-26.4s-26.4,11.8-26.4,26.4c0,12.2,8.2,22.4,19.4,25.4   c0,0.3-0.1,0.6-0.1,0.9v36.4v0h-73.4c-7.9,0-14.2,6.4-14.2,14.2v133.3C161.9,262.9,168.3,269.3,176.2,269.3z M231.5,241.5h-23.9   v-40.2h23.9V241.5z M304.6,241.5h-23.9v-40.2h23.9V241.5z M272.2,153.1c0.8-8.2,7.4-14.8,15.6-15.6c11-1.1,20.2,8.1,19.1,19.1   c-0.8,8.2-7.4,14.8-15.6,15.6C280.3,173.3,271.1,164.1,272.2,153.1z M245.5,201.3h21.1v40.2h-21.1V201.3z M206.2,153.1   c0.8-8.2,7.4-14.8,15.6-15.6c11-1.1,20.2,8.1,19.1,19.1c-0.8,8.2-7.4,14.8-15.6,15.6C214.3,173.3,205.1,164.1,206.2,153.1z"
              />
              <rect
                class="fa-secondary"
                height="145.9"
                fill="currentColor"
                width="189.2"
                x="161.9"
                y="309.3"
              />
              <polygon
                class="fa-primary"
                fill="currentColor"
                points="147.9,309.3 109.7,309.3 109.7,493.5 161.9,493.5 161.9,469.2 147.9,469.2  "
              />
              <polygon
                class="fa-primary"
                fill="currentColor"
                points="365.1,309.3 365.1,469.2 350.1,469.2 350.1,493.5 402.3,493.5 402.3,309.3  "
              />
            </g>
          </svg>
          <span>Profile</span>
          <span>
            <svg
              class="Navbar__item_openSvg"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
              />
            </svg>
          </span>
        </li>
      </a>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss">
.Navbar {
  position: fixed;
  background: var(--bg-primary);
  transition: width 200ms ease-out;

  &__container {
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__routerLink {
    width: 100%;
  }

  &__item {
    width: 100%;
    display: flex;
    height: 5rem;
    align-items: center;
    color: var(--text-primary);
    transition: filter var(--transition-speed);

    &_openSvg {
      transform: scale(0.5);
      margin-left: 0;
    }

    &:hover {
      background: var(--bg-secondary);
      color: var(--text-secondary);

      .fa-primary {
        color: #36a2eb;
      }

      .fa-secondary {
        color: #fd5d93;
      }
    }

    .fa-primary {
      color: rgba(14, 11, 11, 0.7);
    }

    .fa-secondary {
      color: rgba(70, 68, 68, 0.7);
    }

    .fa-primary,
    .fa-secondary {
      transition: var(--transition-speed);
      color: #42425a;
    }

    span {
      display: none;
      margin-left: 1rem;
    }

    svg {
      min-width: 2rem;
      margin: 0 1.5rem;
    }
  }
}

@media (max-width: 640px) {
  .Navbar {
    bottom: 0;
    width: 100%;
    height: 3.5rem;

    &__container {
      flex-direction: row;
    }

    &__item {
      justify-content: center;

      svg {
        height: 2rem;
      }
    }
  }
}

@media (min-width: 640px) {
  .Navbar {
    top: 0;
    width: 5rem;
    height: 100vh;

    &:hover {
      width: 16rem;
      box-shadow: #11111a 2px 0px 8px 0px;
    }

    &:hover &__item {
      span {
        display: block;
      }
    }
  }
}
</style>
