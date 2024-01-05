const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp').then(()=>{
    console.log("Connected...")
}).catch(err=>{
    console.log("Not connected");
    console.log(err)
});


const { Schema } = mongoose;
const movieSchema = new Schema({
//   title: String, 
  title:{
    type:String,
    required:true,
  },
  year: Number,
//   score: Number,
    score:{
    type:Number,
    required:true,
    },
  rating: String,
  categories: [String],
});


const Movie = mongoose.model('Movie', movieSchema);
const firstMovie = new Movie({title:'abc',year:1282,score:3.2,rating:'R',categories:['a','b','c','d']});
// firstMovie.save()

// .........................................................................
const secMovie = new Movie({title:'hjs',year:1282,score:3.2,rating:'R',categories:['a','b','c','d']});
secMovie.save().then(data=>{
    console.log("It worked...");
    console.log(data);
}).catch(err => {
    console.log("Oh no error...");
    console.log(err);
})






// ..........................................................................

// Movie.insertMany([
//     {title:'a',year:2343,score:3.2,rating:'R'},
//     {title:'b',year:3633,score:4.2,rating:'L'},
//     {title:'c',year:3464,score:1.2,rating:'W'},
//     {title:'d',year:1244,score:45.2,rating:'S'},
//     {title:'e',year:1245,score:56.2,rating:'O'}
// ]).then(data=>{
//     console.log("IT WORKED");
//     console.log(data);
// })

Movie.find({}).then(data=>{
    console.log(data);
})


Movie.find({title:'e'}).then(data=>{
    console.log(data);
})


Movie.updateOne({title:'e'},{title:'eff'}).then(data=>{
    console.log(data);
})

Movie.findOneAndDelete({title:'eff'}).then(data=>{
    console.log(data);
})





