<template>
  <div id="lucas-draichi" :class="$style['container']">
    <nav :class="$style.navbar">
      <ul :class="$style['navbar-list']">
        <li>
          <RouterLink :class="$style['navbar-item']" to="/">
            <svg
              fill="none"
              height="16"
              viewBox="0 0 18 16"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.88889 0C8.88889 0 3.39022 4.74667 0.317333 7.31733C0.219553 7.40253 0.140773 7.50733 0.0861051 7.62494C0.0314369 7.74254 0.00210099 7.87033 0 8C0 8.23575 0.0936505 8.46184 0.260349 8.62854C0.427048 8.79524 0.653141 8.88889 0.888889 8.88889H2.66667V15.1111C2.66667 15.3469 2.76032 15.573 2.92702 15.7397C3.09372 15.9064 3.31981 16 3.55556 16H6.22222C6.45797 16 6.68406 15.9064 6.85076 15.7397C7.01746 15.573 7.11111 15.3469 7.11111 15.1111V11.5556H10.6667V15.1111C10.6667 15.3469 10.7603 15.573 10.927 15.7397C11.0937 15.9064 11.3198 16 11.5556 16H14.2222C14.458 16 14.6841 15.9064 14.8508 15.7397C15.0175 15.573 15.1111 15.3469 15.1111 15.1111V8.88889H16.8889C17.1246 8.88889 17.3507 8.79524 17.5174 8.62854C17.6841 8.46184 17.7778 8.23575 17.7778 8C17.7765 7.86784 17.7452 7.73769 17.6863 7.61942C17.6273 7.50114 17.5421 7.39784 17.4373 7.31733C14.3858 4.74667 8.88889 0 8.88889 0Z"
                fill="#919F96"
              />
            </svg>
            <span :class="$style['navbar-item-text']">Home</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink :class="$style['navbar-item']" to="/dashboard">
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16V0H7.11111V16H0ZM8.88889 6.22222V0H16V6.22222H8.88889ZM16 16H8.88889V8H16V16Z"
                fill="#919F96"
              />
            </svg>

            <span :class="$style['navbar-item-text']">Dashboard</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink :class="$style['navbar-item']" to="/blog">
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.55556 12.4444H9.77778V10.6667H3.55556V12.4444ZM3.55556 8.88889H12.4444V7.11111H3.55556V8.88889ZM3.55556 5.33333H12.4444V3.55556H3.55556V5.33333ZM1.77778 16C1.28889 16 0.870222 15.8261 0.521778 15.4782C0.173926 15.1298 0 14.7111 0 14.2222V1.77778C0 1.28889 0.173926 0.870222 0.521778 0.521778C0.870222 0.173926 1.28889 0 1.77778 0H14.2222C14.7111 0 15.1298 0.173926 15.4782 0.521778C15.8261 0.870222 16 1.28889 16 1.77778V14.2222C16 14.7111 15.8261 15.1298 15.4782 15.4782C15.1298 15.8261 14.7111 16 14.2222 16H1.77778Z"
                fill="#919F96"
              />
            </svg>

            <span :class="$style['navbar-item-text']">Blog</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <h1 :class="$style['text']" itemprop="name">
      Lucas <br :class="$style['line-breaker']" />Draichi
    </h1>
  </div>
</template>

<style module>
.container {
  background-color: #111518;
  border-radius: 20px;
  padding: 2.5rem 0;
  margin-top: calc(100vh - 230px);
  grid-area: heading;
}

.text {
  color: #36a2eb;
  text-align: center;
  font-family: 'Lacquer', fantasy;
  letter-spacing: -0.045em;
  font-weight: 400;
}

.line-breaker,
.navbar {
  display: none;
}

@media (min-width: 600px) {
  .container {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .text {
    font-size: 92px;
  }

  .line-breaker,
  .navbar {
    display: block;
  }

  .navbar {
    position: absolute;
    top: 26px;
  }

  .navbar-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 42px;
  }

  .navbar-item {
    display: flex;
    align-items: center;
  }

  .navbar-item-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.05em;
    margin-left: 10px;
  }
}
</style>

<style>
.router-link-active {
  color: #36a2eb;
}

.router-link-active > svg > path {
  fill: #36a2eb;
}
</style>
