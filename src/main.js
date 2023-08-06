import "modern-normalize/modern-normalize.css";
import "./reset.css";
import "./global.css";
import "./components/TAM.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
