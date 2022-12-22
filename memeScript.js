const section = document.querySelector('#section');
const h1 = document.createElement('h1');
h1.innerText = 'Create Your Own MEMEZ!!!';
const h3 = document.createElement('h3');
h3.innerText = 'Please Complete Form';
section.appendChild(h3);
section.appendChild(h1);
const removing = document.createElement('button');
removing.innerText = 'remove image';
removing.setAttribute('width', '60px');
removing.setAttribute('height', '40px');

const form = document.querySelector("#form");
let inputImg = document.querySelector('#img');
let inputTextT = document.querySelector('#textT');
let inputTextB = document.querySelector('#textB');
let divDelete = document.querySelector('#delete')
divDelete.appendChild(removing);

let imagesCollection = [];
let n = 0;

if(inputImg){
 form.addEventListener('submit', function(e){
    e.preventDefault();
    let div = document.createElement('div')
    div.id = 'contain';
    div.classList.add(n);
    imagesCollection.push(n);
    n++;
    document.body.append(div);
    // console.log(inputImg.value, inputTextT.value, inputTextB.value);
    let meme = creatingMeme(inputImg.value, inputTextT.value, inputTextB.value);
    
    let imgN = imagesCollection.length -1;
    let imgClass = imagesCollection[imgN];
    let divArray = document.getElementsByClassName(imgClass);
    let divRemove = divArray[0];
    removing.addEventListener('click', function(e){
        divRemove.remove();
    });

    div.appendChild(meme[0]);
    div.appendChild(meme[1]);
    div.appendChild(meme[2]);

    if(meme[0]){
    inputImg.value = '';
    inputTextT.value = '';
    inputTextB.value = '';
    }
 });
}

function creatingMeme(image, topInput, bottomInput){
      let images = document.createElement('img');
      images.setAttribute('src', image);
      images.setAttribute('width','300px' );
      images.setAttribute('height', '400px');
      let topText = document.createElement('p');
      topText.id = 'top';
      topText.innerText = topInput
      let bottomText = document.createElement('p');
      bottomText.id = 'bottom';
      bottomText.innerText = bottomInput;
     return [images, topText, bottomText];
}
