<script setup lang="ts"></script>

<template>
  <Laptop3D />
  <WorksList />
  <HeroCard />
  <CTACard />
  <ProfilePhoto />
  <AboutCard />
  <TileCard title="lucasdraichi@gmail.com">
    <template #default>Email</template>
    <template #icon>
      <img alt="" src="@/static/img/copy.svg" />
    </template>
  </TileCard>

  <TileCard background-color="#4FD1C5" color="#122120" title="Social Network">
    <template #default>Linkedin</template>
    <template #icon>
      <img alt="" src="@/static/img/arrow-right.svg" />
    </template>
  </TileCard>

  <TileCard background-color="#1D1D1D" color="#E3D45A" title="Social Network">
    <template #default>Github</template>
    <template #icon>
      <img alt="" src="@/static/img/arrow-right.svg" />
    </template>
  </TileCard>

  <TileCard background-color="#8F9A9D" color="#122120" title="125kb">
    <template #default>Resume</template>
    <template #icon>
      <img alt="" src="@/static/img/cloud-download.svg" />
    </template>
  </TileCard>

  <TileCard background-color="#E3D45A" color="#302408" title="Draichiboard">
    <template #default>Dashboard</template>
    <template #icon>
      <img alt="" src="@/static/img/arrow-right.svg" />
    </template>
  </TileCard>

  <TileCard background-color="#CC65FE" color="#230830" title="Draichiboard">
    <template #default>Blog</template>
    <template #icon>
      <img alt="" src="@/static/img/arrow-right.svg" />
    </template>
  </TileCard>
</template>
