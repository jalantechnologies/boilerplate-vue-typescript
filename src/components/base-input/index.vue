<template>
  <div
    class="form-group"
    :class="[
      showError && { 'has-danger': error },
      { focused: focused },
      { 'input-group-alternative': alternative },
      { 'has-label': label || $slots.label },
      showError && { 'has-success': valid === true },
      showError && { 'has-danger': valid === false },
    ]"
  >
    <slot name="label">
      <label v-if="label" :class="labelClasses">
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>

    <input
      :value="value"
      v-bind="$attrs"
      class="form-control"
      :class="[
        showError && { 'is-valid': valid === true },
        showError && { 'is-invalid': valid === false },
        inputClasses,
      ]"
      @input="updateValue"
      @focus="onFocus"
      @blur="onBlur"
    />
    <slot name="infoBlock"></slot>
    <slot name="helpBlock">
      <div
        class="text-danger invalid-feedback"
        style="display: block"
        v-if="showError && error"
      >
        {{ error }}
      </div>
    </slot>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
