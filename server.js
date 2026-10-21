const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let C = {
nom_app: "AFRIKONT",
nom_user: "LASSY Officiel Guinee"
};
app.get('/api/config', (req,res)=>{
res.json(C);
});
app.post('/api/change', (req,res)=>{
C = {...C, ...req.body};
res.json({success:true});
});
app.get('/', (req,res)=>{
res.send("Serveur LASSY OK");
});
const PORT = process.env.PORT || 10000;
app.listen(PORT);
