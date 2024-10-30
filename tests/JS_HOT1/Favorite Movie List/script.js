const favoriteMovies = [];
document.getElementById('add').onclick = () => {
  let input = document.getElementById('favoriteMoviesInput').value;
  favoriteMovies.push(input)
  console.log(favoriteMovies)
  for (let i = 0; i < favoriteMovies.length; i++) {
    document.getElementById('output').value =  favoriteMovies ;
  } 
}
