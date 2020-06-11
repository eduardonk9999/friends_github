//user
let campoUser = document.querySelector('.campo-user');
let btnBuscarUser = document.querySelector('#btn-user');

function BuscaUser() {
  
  let campoValorUser = campoUser.value;
  axios.get(`https://api.github.com/users/${campoValorUser}`)
  .then(function(response){

    
    

    var thumb = response.data.avatar_url;
    var imgHtml = document.querySelector('.user-img');
    
    var img = document.createElement('img');
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
//repositorios
let campoValorUser = campoUser.value;
axios.get(`https://api.github.com/users/${campoValorUser}/repos`)
  .then(function(response){
  
    

    var listaRepos = response.data;
    listaRepos.forEach(function(item, indice){
      let ul = document.querySelector('.lista-repositorios');
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




