import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifier.notify({
  title: "Hora do Post",
  body: "Crie algum conteúdo para ajudar a comunidade",
});

const App = {
  async start() {
    try {
      await Notifier.init();

      Emitter.on("countdown-start", notify);

      Emitter.on("countdown-end", Timer.init);

      Timer.init(25 * 60);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export { App };
