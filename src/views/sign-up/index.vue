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
          :errors="
            validationFailureErrors.username.length > 0
              ? validationFailureErrors.username
              : v$.user.username.$errors.map((e) => e.$message)
          "
          @input="(e) => updateUser(e, 'username')"
          addon-left-icon="ni ni-email-83"
        />

        <BaseInput
          alternative
          type="password"
          placeholder="Password"
          :value="user.password"
          :errors="
            validationFailureErrors.password.length > 0
              ? validationFailureErrors.password
              : v$.user.password.$errors?.map((e) => e.$message)
          "
          @input="(e) => updateUser(e, 'password')"
          addon-left-icon="ni ni-lock-circle-open"
        />

        <BaseInput
          alternative
          type="password"
          placeholder="Confirm Password"
          :value="user.confirmPassword"
          :errors="v$.user.confirmPassword.$errors?.map((e) => e.$message)"
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
          :disabled="submitButtonState == 'LOADING'"
        >
          Create account
        </base-button>
      </div>
    </TheCard>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
