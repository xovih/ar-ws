import dotenv from "dotenv"
import { Server } from "socket.io"
dotenv.config()

const PORT = process.env.PORT || 4504

const io = new Server()

io.on("connection", (socket) => {
  console.log("A user has connected !")

  socket.on("sendPing", (data) => {
    console.log("Data from user socket", data)
    io.emit("getPing", data)
  })

  socket.on("disconnect", () => {
    console.log("A user has left")
  })
})

io.listen(PORT)