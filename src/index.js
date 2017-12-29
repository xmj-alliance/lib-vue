import Vue from "vue";

import hello from './components/hello.vue'; // <- BOOM!

const components = [
  {
    name: "lib-hello",
    option: hello
  }
]

for (let component of components) {
  Vue.component(component.name, component.option);
}

