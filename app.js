//user
let campoUser = document.querySelector('.campo-user');
let btnBuscarUser = document.querySelector('#btn-user');
let imgHtml = document.querySelector('.user-img');
let img = document.createElement('img');
let ul = document.querySelector('.lista-repositorios');

function BuscaUser() {
    imgHtml.innerHTML = '';
  
  let campoValorUser = campoUser.value;
  axios.get(`https://api.github.com/users/${campoValorUser}`)
  .then(function(response){
    let thumb = response.data.avatar_url;
    
    
    
    img.setAttribute('src', thumb);

    imgHtml.appendChild(img);

    userRepositorios();

  })
  .catch(function(error) {
    console.warn(error)
  });

}

btnBuscarUser.onclick = BuscaUser;



function userRepositorios() {
  ul.innerHTML = '';

//repositorios
let campoValorUser = campoUser.value;
axios.get(`https://api.github.com/users/${campoValorUser}/repos`)
  .then(function(response){
  
    

    var listaRepos = response.data;
    listaRepos.forEach(function(item, indice){
      
      let li = document.createElement('li');
      let conteudo = document.createTextNode(item.name);

      li.appendChild(conteudo);
      ul.appendChild(li);
      
    })

  })
  .catch(function(error){
    console.warn(error);
  }); 

}




