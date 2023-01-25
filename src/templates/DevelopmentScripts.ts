import { isProduction } from "~/utilities/development";
import { html } from "~/utilities/html";
import { WSS_PORT } from "~/constants";

export const DevelopmentScripts = () => {
  if (isProduction()) {
    return "";
  }

  return html`<script>
    const ws = new WebSocket("ws://localhost:${WSS_PORT.toString()}");

    ws.onopen = function () {
      console.info("[DEV] Connected");
    };

    ws.onclose = function () {
      console.info("[DEV] Connection lost, reloading in 1 second");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    ws.onmessage = function (event) {
      if (event.data === "reload") {
        window.location.reload();
      }
    };
  </script>`;
};
