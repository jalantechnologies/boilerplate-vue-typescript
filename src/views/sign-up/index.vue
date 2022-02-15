<template >
  <div class="container pt-lg-md d-flex justify-content-center">
    <TheCard
      shadow
      header-classes="bg-white"
      body-classes="px-lg-5 py-lg-5"
      class="border-0"
      :style="`width: 30rem;`"
    >
      <template v-slot:header>
        <div class="text-center display-3">Sign up</div>
      </template>
      <div class="d-flex flex-column align-items-center justify-content-center">
        <BaseInput
          type="text"
          placeholder="First Name"
          :value="user.firstName"
          error="Invalid first name"
          :showError="
            submitButtonState != ScreenState.DEFAULT &&
            v$.user.firstName.$invalid
          "
          @input="(e) => updateUser(e, 'firstName')"
        />
        <BaseInput
          type="text"
          placeholder="Last Name"
          :value="user.lastName"
          :showError="
            submitButtonState != ScreenState.DEFAULT &&
            v$.user.lastName.$invalid
          "
          error="Invalid last name"
          @input="(e) => updateUser(e, 'lastName')"
        />
        <BaseInput
          type="text"
          placeholder="Email"
          :value="user.email"
          :showError="
            submitButtonState != ScreenState.DEFAULT && v$.user.email.$invalid
          "
          error="Invalid email"
          @input="(e) => updateUser(e, 'email')"
        />
        <BaseInput
          type="password"
          placeholder="Password"
          :value="user.password"
          :showError="
            submitButtonState != ScreenState.DEFAULT &&
            v$.user.password.$invalid
          "
          error="Invalid password"
          @input="(e) => updateUser(e, 'password')"
        />
        <BaseInput
          type="password"
          placeholder="Confirm Password"
          :value="user.confirmPassword"
          :showError="
            submitButtonState != ScreenState.DEFAULT &&
            v$.user.confirmPassword.$invalid
          "
          error="Invalid password"
          @input="(e) => updateUser(e, 'confirmPassword')"
        />
        <BaseButton
          mode="primary"
          @click="registerUser"
          :disabled="state == 'LOADING'"
          >Sign Up</BaseButton
        >
      </div>
    </TheCard>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
