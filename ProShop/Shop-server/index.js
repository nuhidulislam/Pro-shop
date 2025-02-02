const express= require ('express');
const cors= require ('cors');


const app= express();
// এটা করলাম এক্সপ্রেসটাকে কল করলাম যেটা অ্যাপ ভ্যারিয়েবলে রাখলাম এখন অ্যাপ দিয়ে সব কাজ করতে পারবো। মানে app.get app.put আসলে অ্যাপ তো হলো express

const port= process.env.PORT || 5000;


// middleware
app.use(cors());
//সার্ভার সাইট ও ক্লায়েন্ট সাইড যদি আলাদা হয় তখন এই পোর্ট আলাদা হলেও কাজ করবে যদি কর্স টা ব্যবহার করি। 

app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Coffee maker server is running')
})

app.listen(port, ()=>{
    console.log(`Coffee server is running on port: ${port}`)
})
