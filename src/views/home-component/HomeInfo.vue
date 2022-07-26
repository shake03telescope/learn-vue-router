<template>
  <div>HomeInfo {{ money }}</div>
</template>
<script>
import EventBus, { EventType } from "@/bus/index.js";
export default {
  name: "HomeInfo",
  inject: ["money"],
  mounted() {
    EventBus.$on(EventType.GiveMoney, (data) => {
      console.log(
        "这是appvue给我的钱，我是子组件homeinfo，我拿到的数额是",
        data.count
      );
    });
  },
};
</script>