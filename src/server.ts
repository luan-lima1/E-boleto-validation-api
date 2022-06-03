import app from ".";
import createConfig from "./config/load";

const config = createConfig();

const { port } = config;

app.listen(port, async () => {
  console.log(`Servidor Iniciado na porta ${port}`);
});
