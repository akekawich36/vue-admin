<template>
  <a-form
    :model="formState"
    name="basic"
    layout="vertical"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <TextField
        label="Username"
        id="Username"
        :isRequired="true"
        :inputValue="formState.username"
        :onValueChange="
          (value) => {
            formState.username = value;
          }
        "
      />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item>
      <a-config-provider
        :theme="{
          components: {
            Button: {
              colorPrimary: '#00b96b',
              colorPrimaryHover: 'red',
              algoritm: true,
            },
          },
        }"
      >
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-config-provider>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive } from "vue";
import TextField from "../TextField/TextField.vue";
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
