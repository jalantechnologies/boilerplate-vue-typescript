<template >
  <div class="container pt-lg-md d-flex justify-content-center">
    <TheCard
      shadow
      header-classes="bg-white"
      body-classes="px-lg-5 py-lg-5"
      class="border-0"
      :style="`width: 20rem;`"
      type="secondary"
    >
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="text-center text-muted mb-4">
          <small>Sign up with credentials</small>
        </div>
        <BaseInput
          alternative
          type="text"
          placeholder="Email"
          :value="user.username"
          :error="
            validationFailureErrors.username ||
            (submitButtonState != ScreenState.DEFAULT &&
            v$.user.username.$invalid
              ? 'Invalid email'
              : '')
          "
          @input="(e) => updateUser(e, 'username')"
          addon-left-icon="ni ni-email-83"
        />
        <BaseInput
          alternative
          type="password"
          placeholder="Password"
          :value="user.password"
          :error="
            validationFailureErrors.password ||
            (submitButtonState != ScreenState.DEFAULT &&
            v$.user.password.$invalid
              ? 'Invalid password'
              : '')
          "
          @input="(e) => updateUser(e, 'password')"
          addon-left-icon="ni ni-lock-circle-open"
        />
        <BaseInput
          alternative
          type="password"
          placeholder="Confirm Password"
          :value="user.confirmPassword"
          :error="
            submitButtonState != ScreenState.DEFAULT &&
            v$.user.confirmPassword.$invalid
              ? 'Password doesn\'t match.'
              : ''
          "
          @input="(e) => updateUser(e, 'confirmPassword')"
          addon-left-icon="ni ni-lock-circle-open"
        />
        <div
          class="text-muted align-self-start font-italic"
          v-if="passwordStrength"
        >
          <div
            class="text-danger font-size-small invalid-feedback"
            style="display: block"
            v-if="reponseMessage"
          >
            {{ reponseMessage }}
          </div>
          <small>
            Password strength:
            <span class="text-success font-weight-700">
              {{ passwordStrength }}
            </span>
          </small>
        </div>
        <base-button
          class="my-4"
          type="primary"
          @click="registerUser"
          :disabled="state == 'LOADING'"
        >
          Create account
        </base-button>
      </div>
    </TheCard>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
