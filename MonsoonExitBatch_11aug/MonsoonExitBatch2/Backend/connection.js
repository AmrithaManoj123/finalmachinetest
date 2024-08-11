const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://3amrithamanoj12a:l4XRfrDcekLKkSlf@cluster0.6ppsntl.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connected to DB");
    })
    .catch((error) => {
        console.log(error);
      });


