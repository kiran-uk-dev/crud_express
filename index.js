let express = require('express');
let app = express();
let port =3000;

let studentsRoutes = require('./routes/students');
let coursesRoutes = require('./routes/courses');

app.get("/", (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});
app.use('/students', studentsRoutes);
app.use('/courses', coursesRoutes);

app.use((req,res)=>{
    res.status(404).send("Page not Found");
})


app.listen(port,()=>{
     console.log(`Server is running on port ${port}`);
})