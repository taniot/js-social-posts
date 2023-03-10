'use strict';


//milestone 1

/************
 * SETUP VARIABLES
 ************/

// contenitore dei post
const containerElement = document.getElementById('container');
// elemento post da duplicare per rappresentare il post
const templateElement = document.getElementById('template-post');

let counter = 0;
//struttura dati contenente la rappresentazione dei post
const posts = [
    {
        id: 1,
        author: {
            name: 'Gaetano Frascolla',
            image: 'https://unsplash.it/300/300?image=20',
            age: 39,
            nPosts: 150
        },
        created: '3-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/600/300?image=14',
        likes: 1
    },
    {
        id: 2,
        author: {
            name: 'Filippo Bonafini',
            image: 'https://unsplash.it/300/300?image=',
            age: 39,
            nPosts: 150
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/600/300?image=40',
        likes: 80
    },
    {
        id: 3,
        author: {
            name: 'Gaetano Frascolla',
            image: 'https://unsplash.it/300/300?image=',
            age: 39,
            nPosts: 150
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/600/300?image=21',
        likes: 80
    },
    {
        id: 4,
        author: {
            name: 'Gaetano Frascolla',
            image: 'https://unsplash.it/300/300?image=',
            age: 39,
            nPosts: 150,
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/600/300?image=30',
        likes: 80
    }
];
let likedPosts = [];



/************
 * Functions
 ***********/

function renderPost(elementHTML, postElement) {

    //destrutturazione elemento post
    const { author, created, content, media, likes, id } = postElement;
    //esempio di destrutturazione proprietà author
    const { name: nameAuthor } = author;

    //author name
    elementHTML.querySelector('.post-meta__author').innerHTML = nameAuthor;
    //date
    console.log('created', created)
    const createdAt = convertToIt(created);
    elementHTML.querySelector('.post-meta__time').innerHTML = createdAt;
    //description
    elementHTML.querySelector('.post__text').innerHTML = content;
    //image
    elementHTML.querySelector('.post__image > img').src = media;
    //likes
    const elementLikeCounter = elementHTML.querySelector('.js-likes-counter');
    elementLikeCounter.id = `like-counter-${id}`;
    elementLikeCounter.innerHTML = likes;

    const likeButton = elementHTML.querySelector('.like-button');
    likeButton.addEventListener('click', function () {
        if (likedPosts.includes(id)) {
            likeButton.classList.remove('like-button--liked');

            postElement.likes--;
            console.log('likes', postElement.likes);

            console.log('elementLikeCounter', elementLikeCounter)
            elementLikeCounter.innerHTML = postElement.likes;

            likedPosts = likedPosts.filter(element => element !== id);
            console.log('likedPosts', likedPosts)
            return;
        }

        likeButton.classList.add('like-button--liked');

        postElement.likes++;
        console.log('likes', postElement.likes);

        console.log('elementLikeCounter', elementLikeCounter)
        elementLikeCounter.innerHTML = postElement.likes;

        likedPosts.push(id);
    });

    return elementHTML;
}

// 10-03-2023

// Con questa funzione convertiamo una data in qualsiasi formato in una data italiana
function convertToIt(created) {
    const dates = created.split('-');
    console.log('dates', dates);
    const giorno = dates[1].padStart(2, '0');
    const mese = dates[0].padStart(2, '0');
    const anno = dates[2];
    return `${giorno}-${mese}-${anno}`;
}

//Realizzare la lista dei post - idee e ipotesi
//1. creo un ciclo che attraversa la lista dei post
//2. per ogni post, creo (????) la struttura del post
//2a  - uso createElement per definire ogni porzione del mio template
//2b  - uso template literal e innerHTML per creare la struttura del template
//2c  - clono un template html per creare la struttura del template (scelta a furor di popolo)
//2d  - lasciamo fare a un framework il lavoro sporco

/**************
 * Render dei post
 **************/

posts.forEach(post => {
    let currentHTMLPost = templateElement.content.cloneNode(true);
    currentHTMLPost = renderPost(currentHTMLPost, post)
    containerElement.append(currentHTMLPost);
});


