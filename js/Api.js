const field = document.getElementById('field');
const container = document.getElementById('container');

field.addEventListener('input', async function() {

try {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6417ec3a&s=' + field.value);
    const data = await response.json();
    const search = data.Search;
    
    container.innerHTML ="";
   
for (let data of search){
    container.innerHTML += `<ul>

   
    <li>Title: ${data.Title}</li>
    <li>Year: ${data.Year}</li>
    <li>ID: ${data.imdbID}</li>
    <li>Type: ${data.Type}</li>
    <img src = ${data.Poster}>
    </ul>`

    
}

} catch (error) {
  //  console.log(error);
}
})