<template>
  <div
    class="form-group d-flex"
    :class="[
      { 'input-group': hasIcon },
      errors?.length > 0 && { 'has-danger': true },
      { focused: focused },
      { 'input-group-alternative': alternative },
      { 'has-label': label || $slots.label },
      { 'has-success': valid === true },
      errors?.length > 0 && { 'has-danger': valid === false },
    ]"
  >
    <slot name="label">
      <label v-if="label" :class="labelClasses">
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>
    <div v-if="addonLeftIcon || $slots.addonLeft" class="input-group-prepend">
      <span class="input-group-text">
        <slot name="addonLeft">
          <i :class="addonLeftIcon"></i>
        </slot>
      </span>
    </div>
    <input
      :value="value"
      v-bind="$attrs"
      class="form-control"
      :class="[
        { 'is-valid': valid === true },
        errors?.length > 0 && { 'is-invalid': valid === false },
        inputClasses,
      ]"
      @input="updateValue"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div v-if="addonRightIcon || $slots.addonRight" class="input-group-append">
      <span class="input-group-text">
        <slot name="addonRight">
          <i :class="addonRightIcon"></i>
        </slot>
      </span>
    </div>
    <slot name="infoBlock"></slot>
    <div
      class="text-danger invalid-feedback"
      style="display: block"
      v-if="errors?.length > 0"
      :class="{ 'm-2': hasIcon }"
    >
      <slot name="helpBlock">
        <div v-for="error of errors" :key="error.$uid">
          {{ error }}
        </div>
      </slot>
    </div>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
