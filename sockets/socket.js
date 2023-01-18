const { io } = require("../index");

io.onConnect;
// Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Cliente conectado");

  client.emit("ok", "CONEXION!");

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  client.on("mensaje", (payload) => {
    console.log("Mensaje", payload);

    io.emit("mensaje", { admin: "Nuevo mensaje" });
  });

  client.on("add-band", (payload) => {
    console.log(payload);
  });

  client.on("notification", (payload) => {
    console.log(payload);
    client.emit("notification", {
      id: 0,
      content: "Nuevo servicio con destino a centro comercial.",
      title: "Nuevo servicio",
    });
  });
});
