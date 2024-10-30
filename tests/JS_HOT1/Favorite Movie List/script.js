document.getElementById('add').onclick = () => {
  const favoriteMovies = []
  /*------------------------------------Gather Inputs from HTML------------------------------------*/
  let favoriteMoviesInput = document.getElementById("favoriteMoviesInput").value;
  /*------------------------------------Handles Loop------------------------------------*/
  for(let i=0;i<3;i++){
    favoriteMovies.push(favoriteMoviesInput);
    console.log(favoriteMovies)
    }
  
}
