/*
//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(res => res.json())
//.then(data => {console.log(data)})
*/

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function EviarHTTPRespuesta(metodo, url, datoAEnviar){
    return fetch(url,{
        method: metodo,
        body: JSON.stringify(datoAEnviar),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}

async function fetchPost() {
    const respueta = await EviarHTTPRespuesta("GET", "https://jsonplaceholder.typicode.com/posts")
    console.log(respueta);

    const res = respueta;
    for (const post of res) {
       setTimeout(()=>{
           const postContainer = document.createElement("article");
           postContainer.id = post.id;
           postContainer.classList.add("post-item");

           const title = document.createElement("h2");
           title.textContent = post.title;

           const body = document.createElement("p");
           body.textContent = post.body;

           const button = document.createElement("button");
           button.textContent = "DELETE Content";

           postContainer.append(title);
           postContainer.append(body);
           postContainer.append(button);

           listElement.append(postContainer);
       },1500)
    }
}

fetchButton.addEventListener("click", fetchPost);