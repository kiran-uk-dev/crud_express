let express = require('express');
let router = express.Router();
const courses = [
    {
        id: 1,
        name: "Frontend",
        description: "HTML, CSS, JS, React"
    },
    {
        id: 2,
        name: "Backend",
        description: "Node.js, Express, MongoDB"
    }
];
router.get('/',(req,res)=>{
    let name = courses.map(course => course.name).join(", ");
    res.send(`Courses: ${name}`);
});

router.get('/:id', (req,res) => {
   let id = Number(req.params.id);
   let course = courses.find(course => course.id === id);
   if(!course){
   return  res.status(404).send("Page not Found");
   }
   res.send(`Couses: ${course.name}, Description: ${course.description}`);
});


module.exports = router;