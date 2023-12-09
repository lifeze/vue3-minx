import { createSSRApp } from "vue";
import App from "./App.vue";
// main.ts
import 'uno.css'
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
