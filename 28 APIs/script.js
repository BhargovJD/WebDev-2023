// console.log("Hello");

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    // console.log('Submitted').
    // console.log(form.elements.q.value);
    const searchTerm = form.elements.q.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data);
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img);

});