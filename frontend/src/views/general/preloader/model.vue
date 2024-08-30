<template>
  <svg class="pl" viewBox="0 0 128 128" width="128px" height="128px" role="img" aria-label="A pan being used to flip a blob resembling bacon as it splashes drops of grease in and out">
    <clipPath id="pan-clip">
      <rect rx="12" ry="14" x="4" y="52" width="68" height="28" />
    </clipPath>
    <defs>
      <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000" />
        <stop offset="100%" stop-color="#fff" />
      </linearGradient>
      <mask id="pl-mask">
        <rect x="0" y="0" width="88" height="80" fill="url(#pl-grad)" />
      </mask>
    </defs>
    <g fill="currentColor">
      <g fill="none" stroke-dasharray="20 221" stroke-dashoffset="20" stroke-linecap="round" stroke-width="4">
        <g stroke="hsl(38,90%,50%)">
          <circle class="pl__ring" cx="44" cy="40" r="35" transform="rotate(90,44,40)" />
        </g>
        <g stroke="hsl(8,90%,40%)" mask="url(#pl-mask)">
          <circle class="pl__ring" cx="44" cy="40" r="35" transform="rotate(90,44,40)" />
        </g>
      </g>
      <g fill="hsla(223,10%,70%,0)">
        <g class="pl__drop pl__drop--1">
          <circle class="pl__drop-inner" cx="13" cy="60" r="2" />
        </g>
        <g class="pl__drop pl__drop--2">
          <circle class="pl__drop-inner" cx="13" cy="60" r="2" />
        </g>
        <g class="pl__drop pl__drop--3">
          <circle class="pl__drop-inner" cx="67" cy="72" r="2" />
        </g>
        <g class="pl__drop pl__drop--4">
          <circle class="pl__drop-inner" cx="67" cy="72" r="2" />
        </g>
        <g class="pl__drop pl__drop--5">
          <circle class="pl__drop-inner" cx="67" cy="72" r="2" />
        </g>
      </g>
      <g class="pl__pan">
        <rect rx="2" ry="2" x="4" y="66" width="68" height="14" clip-path="url(#pan-clip)" id="pan" />
        <rect rx="2" ry="2" x="76" y="66" width="48" height="7" />
      </g>
      <rect class="pl__shadow" fill="hsla(223,10%,50%,0.2)" rx="3.5" ry="3.5" x="10" y="121" width="60" height="7" />
    </g>
  </svg>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
:root {
  --hue: 223;
  --bg: hsl(var(--hue),10%,90%);
  --fg: hsl(var(--hue),10%,10%);
  --trans-dur: 0.3s;
  font-size: calc(14px + (30 - 14) * (100vw - 280px) / (3840 - 280));
}

$debug: false;
$size: 12em;
$ease-in: cubic-bezier(0.33,0.16,0.67,0.16);
$ease-out: cubic-bezier(0.33,0.84,0.67,0.84);
$ease-in-out: cubic-bezier(0.65,0,0.35,1);
$drop-color: hsl(223,10%,70%,1);
$drop-color-t: hsl(223,10%,70%,0);

.pl {
  @if ($debug == true) {
    outline: 1px solid;
  }
  width: $size;
  height: $size;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &__drop,
  &__drop-inner,
  &__pan,
  &__ring,
  &__shadow {
    animation: pan 2s $ease-in-out infinite;
  }
  &__drop {
    $drops: 5;
    transform-origin: 13px 60px;

    &-inner {
      animation-timing-function: $ease-out;
    }

    @for $d from 1 through $drops {
      &--#{$d} {
        animation-name: drop-#{$d};

        @if $d >= 3 {
          transform-origin: 67px 72px;
        }
      }
      &--#{$d} &-inner {
        animation-name: drop-#{$d}-inner;
      }
    }
  }
  &__pan {
    transform-origin: 36px 74px;
  }
  &__ring {
    animation-name: flip-ring;
  }
  &__shadow {
    animation-name: pan-shadow;
    transform-origin: 36px 124.5px;
  }
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue),10%,10%);
    --fg: hsl(var(--hue),10%,90%);
  }
}

/* Animation */
@keyframes drop-1 {
  from {
    animation-timing-function: steps(1,end);
    transform: translate(0,0);
    visibility: hidden;
  }
  30% {
    animation-timing-function: linear;
    transform: translate(0,0);
    visibility: visible;
  }
  50%,
  to {
    transform: translate(-6px,0);
  }
}
@keyframes drop-1-inner {
  from,
  30% {
    fill: $drop-color;
    transform: translate(0,0);
  }
  50%,
  to {
    fill: $drop-color-t;
    transform: translate(0,-27px);
  }
}
@keyframes drop-2 {
  from {
    animation-timing-function: steps(1,end);
    transform: translate(0,0);
    visibility: hidden;
  }
  30% {
    animation-timing-function: linear;
    transform: translate(0,0);
    visibility: visible;
  }
  50%,
  to {
    transform: translate(-8px,0);
  }
}
@keyframes drop-2-inner {
  from,
  30% {
    fill: $drop-color;
    transform: translate(0,0);
  }
  50%,
  to {
    fill: $drop-color-t;
    transform: translate(0,-9px);
  }
}
@keyframes drop-3 {
  from {
    animation-timing-function: steps(1,end);
    transform: translate(0,0);
    visibility: hidden;
  }
  78% {
    animation-timing-function: linear;
    transform: translate(0,0);
    visibility: visible;
  }
  98%,
  to {
    transform: translate(-24px,0);
  }
}
@keyframes drop-3-inner {
  from,
  78% {
    fill: $drop-color;
    transform: translate(0,0);
  }
  98%,
  to {
    fill: $drop-color-t;
    transform: translate(0,-28px);
  }
}
@keyframes drop-4 {
  from {
    animation-timing-function: steps(1,end);
    transform: translate(0,0);
    visibility: hidden;
  }
  78% {
    animation-timing-function: linear;
    transform: translate(0,0);
    visibility: visible;
  }
  98%,
  to {
    transform: translate(-8px,0);
  }
}
@keyframes drop-4-inner {
  from,
  78% {
    fill: $drop-color;
    transform: translate(0,0);
  }
  98%,
  to {
    fill: $drop-color-t;
    transform: translate(0,-36px);
  }
}
@keyframes drop-5 {
  from {
    animation-timing-function: steps(1,end);
    transform: translate(0,0);
    visibility: hidden;
  }
  78% {
    animation-timing-function: linear;
    transform: translate(0,0);
    visibility: visible;
  }
  98%,
  to {
    transform: translate(8px,0);
  }
}
@keyframes drop-5-inner {
  from,
  78% {
    fill: $drop-color;
    transform: translate(0,0);
  }
  98%,
  to {
    fill: $drop-color-t;
    transform: translate(0,-32px);
  }
}
@keyframes flip-ring {
  from,
  27% {
    animation-timing-function: $ease-out;
    stroke-dashoffset: 20;
    stroke-width: 4px;
  }
  53.5% {
    animation-timing-function: $ease-in;
    stroke-dashoffset: -100;
    stroke-width: 10px;
  }
  80%,
  to {
    stroke-dashoffset: -220;
    stroke-width: 4px;
  }
}
@keyframes pan {
  from,
  88%,
  to {
    transform: translate(0,0) rotate(0);
  }
  20% {
    animation-timing-function: $ease-in;
    transform: translate(-5px,0) rotate(-30deg);
  }
  30% {
    animation-timing-function: $ease-out;
    transform: translate(0,0) rotate(20deg);
  }
  60%,
  78% {
    animation-timing-function: linear;
    transform: translate(0,0) rotate(0);
  }
  81.33% {
    animation-timing-function: linear;
    transform: translate(0,4px) rotate(0);
  }
  84.67% {
    animation-timing-function: linear;
    transform: translate(0,-2px) rotate(0);
  }
}
@keyframes pan-shadow {
  from,
  88%,
  to {
    fill: hsla(223,10%,50%,0.2);
    transform: scaleX(1);
  }
  20% {
    animation-timing-function: $ease-in;
    fill: hsla(223,10%,50%,0.2);
    transform: scaleX(0.77);
  }
  30% {
    animation-timing-function: $ease-out;
    fill: hsla(223,10%,50%,0.2);
    transform: scaleX(1);
  }
  60%,
  78% {
    animation-timing-function: linear;
    fill: hsla(223,10%,50%,0.2);
    transform: scaleX(1);
  }
  81.33% {
    animation-timing-function: linear;
    fill: hsla(223,10%,50%,0.25);
    transform: scaleX(0.87);
  }
  84.67% {
    animation-timing-function: linear;
    fill: hsla(223,10%,50%,0.225);
    transform: scaleX(1.065);
  }
}
</style>