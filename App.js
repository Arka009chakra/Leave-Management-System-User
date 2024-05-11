const express = require("express");
const cors = require("cors");
const app = express();
const m = require("./mongodb");
const m1 = require("./Mongodb1");
const m2 = require("./Mongodb2");
const crypto = require("crypto");
const key = "adnan-tech-programming-computers";
const algo = "aes-256-cbc";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    try {
        const result = await m1.findOne({ cemail: req.body.cemail });

        if (!result) {
            return res.status(400).json({ message: 'Email Not Registered!!' });
        } else {
            const password = req.body.psw; // Changed from req.body.password to req.body.psw

            var cipher = crypto.createCipher(algo, key);
            var encrypted = cipher.update(password, "utf-8", "hex") + cipher.final("hex");

            if (result.password === encrypted) {
                return res.status(200).json({ message: 'Login successfully!' });
            } else {
                return res.status(400).json({ message: 'Password Incorrect!!' });
            }
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.post('/get',async(req,res)=>{
    const {cemail} = req.body;
    const x = await m.findOne({ cemail : cemail })
    if(x)
        {
            res.send(x)
        }
})
app.post('/apply',async(req,res)=>{
    const { cemail, leave } = req.body
    await m2.create({
        cemail,
        leave
    })
})
app.listen(3300);