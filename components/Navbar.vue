<template>
  <nav :class="$style['navbar-container']">
    <ul :class="$style['navbar-items']">
      <li :class="$style['list-item']">
        <NuxtLink :class="$style.item" href="/">
          <svg
            fill="none"
            height="13"
            viewBox="0 0 14 13"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 0.5C6.66667 0.5 2.54267 4.06 0.238 5.988C0.164665 6.0519 0.10558 6.1305 0.0645788 6.2187C0.0235777 6.30691 0.00157574 6.40274 0 6.5C0 6.67681 0.0702379 6.84638 0.195262 6.9714C0.320286 7.09643 0.489856 7.16667 0.666667 7.16667H2V11.8333C2 12.0101 2.07024 12.1797 2.19526 12.3047C2.32029 12.4298 2.48986 12.5 2.66667 12.5H4.66667C4.84348 12.5 5.01305 12.4298 5.13807 12.3047C5.26309 12.1797 5.33333 12.0101 5.33333 11.8333V9.16667H8V11.8333C8 12.0101 8.07024 12.1797 8.19526 12.3047C8.32029 12.4298 8.48985 12.5 8.66667 12.5H10.6667C10.8435 12.5 11.013 12.4298 11.1381 12.3047C11.2631 12.1797 11.3333 12.0101 11.3333 11.8333V7.16667H12.6667C12.8435 7.16667 13.013 7.09643 13.1381 6.9714C13.2631 6.84638 13.3333 6.67681 13.3333 6.5C13.3324 6.40088 13.3089 6.30327 13.2647 6.21456C13.2205 6.12586 13.1566 6.04838 13.078 5.988C10.7893 4.06 6.66667 0.5 6.66667 0.5Z"
              fill="#919F96"
            />
          </svg>
          <span>Home</span>
        </NuxtLink>
      </li>
      <li :class="$style['list-item']">
        <NuxtLink :class="$style.item" href="/dashboard">
          <svg
            fill="none"
            height="12"
            viewBox="0 0 12 12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12V0H5.33333V12H0ZM6.66667 4.66667V0H12V4.66667H6.66667ZM12 12H6.66667V6H12V12Z"
              fill="#919F96"
            />
          </svg>
          <span>Dashboard</span>
        </NuxtLink>
      </li>
      <li :class="$style['list-item']">
        <NuxtLink :class="$style.item" href="/blog">
          <svg
            fill="none"
            height="13"
            viewBox="0 0 12 13"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66667 9.83333H7.33333V8.5H2.66667V9.83333ZM2.66667 7.16667H9.33333V5.83333H2.66667V7.16667ZM2.66667 4.5H9.33333V3.16667H2.66667V4.5ZM1.33333 12.5C0.966667 12.5 0.652667 12.3696 0.391333 12.1087C0.130444 11.8473 0 11.5333 0 11.1667V1.83333C0 1.46667 0.130444 1.15267 0.391333 0.891333C0.652667 0.630444 0.966667 0.5 1.33333 0.5H10.6667C11.0333 0.5 11.3473 0.630444 11.6087 0.891333C11.8696 1.15267 12 1.46667 12 1.83333V11.1667C12 11.5333 11.8696 11.8473 11.6087 12.1087C11.3473 12.3696 11.0333 12.5 10.6667 12.5H1.33333Z"
              fill="#919F96"
            />
          </svg>
          <span> Blog </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style module>
.navbar-items {
  display: flex;
  justify-content: space-around;
  margin-top: 0.4rem;
}

.list-item {
  list-style: none;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #919f96;
  padding: 1rem;
  gap: 0.4rem;
}
</style>
