import Vue from 'vue';
// 事件总线
const EventBus = new Vue()

// 一个发送事件
// EventBus.$emit('giveMoney', {count: 10000})

const EventType = {
    GiveMoney: 'giveMoney'
}

Object.freeze(EventType)

// 一个监听事件(一定要在发送之前)
EventBus.$on(EventType.GiveMoney, (data) => {
    console.log(data)
})

export default EventBus;
export { EventType }