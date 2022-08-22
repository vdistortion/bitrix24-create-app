<template>
  <div class="the-loader">
    <div class="the-loader__element">
      <span class="the-loader__item the-loader__item--top"></span>
      <span class="the-loader__item the-loader__item--bottom"></span>
    </div>
  </div>
</template>

<style lang="stylus">
.the-loader
  position fixed
  margin 0 auto
  background-color white
  width 100%
  height 100%
  z-index 2
  overflow hidden
  &__element
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
  &__item
    display block
    position relative
    top 0
    width 1em
    height 1em
    margin 1px auto
    &::after
      position absolute
      content ""
      width 1em
      height 1em
      left 1em
      margin-left 1px
    &--top
      background-color rgba(black, 1)
      animation the-loader 2s infinite
      &::after
        background-color rgba(black, .66)
        animation the-loader 2s infinite
        animation-delay 0.5s
    &--bottom
      background-color rgba(black, 0)
      animation the-loader 2s infinite
      animation-delay 1.5s
      &::after
        background-color rgba(black, .33)
        animation the-loader 2s infinite
        animation-delay 1s

@keyframes the-loader
  0%
    background-color black
  100%
    background-color white
</style>
