<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    @click="handleClick"
    class="btn"
    :class="classes"
  >
    <span class="btn-inner--icon" v-if="slots.icon || (icon && slots.default)">
      <slot name="icon">
        <i :class="icon"></i>
      </slot>
    </span>
    <i :class="icon"></i>
    <span class="btn-inner--text" v-if="slots.icon || (icon && slots.default)">
      <slot>
        {{ text }}
      </slot>
    </span>
    <slot v-if="!slots.icon && !icon"></slot>
  </component>
</template>
<script src="./main.ts" lang="ts"/>
