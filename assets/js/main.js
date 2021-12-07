console.log("Hutinni!")

/* function getImg() {
    
} */
fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(img => {
        img.forEach(elt => {
            console.log(elt)
            document.body.innerHTML += `
                <figure>
    <img src='${elt.download_url}' width="400" height="350">
    <figcaption>${elt.author}</figcaption>
</figure>`
        })
    })
    .catch(err => console.log(err))