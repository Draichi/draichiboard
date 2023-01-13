<script setup lang="ts"></script>

<template>
  <main :class="$style.index">
    <Laptop3D />

    <WorksList />

    <HeroCard />

    <CTACard />

    <ProfilePhoto />

    <AboutCard />

    <TileCard title="lucasdraichi@gmail.com">
      <template #default>Email</template>
      <template #icon>
        <img alt="" src="/icons/copy.svg" />
      </template>
    </TileCard>

    <TileCard background-color="#4FD1C5" color="#122120" title="Social Network">
      <template #default>Linkedin</template>
      <template #icon>
        <svg
          fill="none"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
            fill="#122120"
          />
        </svg>
      </template>
    </TileCard>

    <TileCard background-color="#1D1D1D" color="#E3D45A" title="Social Network">
      <template #default>Github</template>
      <template #icon>
        <svg
          fill="none"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
            fill="#E3D45A"
          />
        </svg>
      </template>
    </TileCard>

    <TileCard background-color="#8F9A9D" color="#122120" title="125kb">
      <template #default>Resume</template>
      <template #icon>
        <img alt="" src="/icons/cloud-download.svg" />
      </template>
    </TileCard>

    <TileCard background-color="#E3D45A" color="#302408" title="Draichiboard">
      <template #default>Dashboard</template>
      <template #icon>
        <svg
          fill="none"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
            fill="#302408"
          />
        </svg>
      </template>
    </TileCard>

    <TileCard background-color="#CC65FE" color="#230830" title="Draichiboard">
      <template #default>Blog</template>
      <template #icon>
        <svg
          fill="none"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
            fill="#230830"
          />
        </svg>
      </template>
    </TileCard>
  </main>
</template>

<style module>
.index {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
