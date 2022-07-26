<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import EventBus, { EventType } from "./bus/index.js";
export default {
  name: "App",
  provide: {
    money: "100000",
  },
  mounted() {
    setTimeout(() => {
      EventBus.$emit(EventType.GiveMoney, { count: 1 });
    }, 3000);
  },
};
</script>
