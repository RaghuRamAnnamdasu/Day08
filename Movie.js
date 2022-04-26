//a) Constructor for class Movie which takes a String representing the title of the movie, a String representing the studio, 
//and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie{
    constructor(Title,Studio,Rating){
        this.title=Title;
        this.studio=Studio;
        this.rating=Rating;
    }
}


// b)The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie{
    constructor(Title,Studio,Rating){
        this.title=Title;
        this.studio=Studio;
        this.rating=Rating || "PG";
    }
}


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies
//  in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need 
//  not be full

class AllMovies{
    constructor(MoviesList){
        this.moviesList=MoviesList;
    }
    getPG(){
        var result=this.moviesList.filter((x)=>{
            x.rating==="PG"
        });
        console.log(result);
    }
}
var list=new AllMovies(MovieList);           //here MovieList is an input array of all the movie instances as per question
list.getPG();




// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, 
// and the rating “PG­13”

class Movie{
    constructor(Title,Studio,Rating){
        this.title=Title;
        this.studio=Studio;
        this.rating=Rating || "PG";
    }
}
var film1=new Movie("Casino Royale","Eon Productions","PG­13");