'use strict';


//milestone 1

/************
 * SETUP VARIABLES
 ************/

// contenitore dei post
const containerElement = document.getElementById('container');
// elemento post da duplicare per rappresentare il post
const templateElement = document.getElementById('template-post');

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
        created: '03-10-2023',
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




/************
 * Functions
 ***********/

function renderPost(elementHTML, postElement) {

    const { author, created, content, media, likes, id } = postElement;
    const { name: nameAuthor } = author;

    //author name
    elementHTML.querySelector('.post-meta__author').innerHTML = nameAuthor;
    //date
    elementHTML.querySelector('.post-meta__time').innerHTML = created;
    //description
    elementHTML.querySelector('.post__text').innerHTML = content;
    //image
    elementHTML.querySelector('.post__image > img').src = media;
    //likes
    elementHTML.querySelector('.js-likes-counter').id = `like-counter-${id}`;
    elementHTML.querySelector('.js-likes-counter').innerHTML = likes;

    return elementHTML;
}


//Realizzare la lista dei post
//1. creo un ciclo che attraversa la lista dei post
//2. per ogni post, creo (????) la struttura del post
//2a 6 - uso createElement per definire ogni porzione del mio template
//2b 7 - uso template literal e innerHTML per creare la struttura del template
//2c 9 - clono un template html per creare la struttura del template (scelta a furor di popolo)
//2d 10 - lasciamo fare a un framework il lavoro sporco

/**************
 * Render dei post
 **************/

posts.forEach(post => {
    let currentHTMLPost = templateElement.content.cloneNode(true);
    currentHTMLPost = renderPost(currentHTMLPost, post)
    containerElement.append(currentHTMLPost);
});


