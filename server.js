const express = require('express')
const app = express()
require('dotenv').config();
const userRouter = require('./Routes/API/user')
const messageRouter = require('./Routes/API/message')

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use('/user', userRouter)
app.use('/message', messageRouter)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
