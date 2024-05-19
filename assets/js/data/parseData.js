// parseData.js

import { courses } from './data_courses.js';

const indexParse = ()=>{

    const container = document.querySelector('#portfolioGrid');
    let size = window.innerWidth <= 768 ? 3 : 6; // 화면이 모바일 크기일 때 3개의 아이템을 불러옵니다.
// Use a for loop and iterate backwards
for (let i = courses.length - 1; i >= courses.length - size; i--) {
    const site = courses[i];
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item', 'col-lg-4', 'col-md-6', site.type);

    const figure = document.createElement('figure');
    figure.classList.add('picture-item', 'img-block', 'shine-effect', 'image-zoom', 'port-v2');

    const img = document.createElement('img');
    img.src = "https://s0.wp.com/mshots/v1/" + site.url; // Set image URL as you suggested
    img.alt = "portfolio image";

    const figcaption = document.createElement('figcaption');
    const div = document.createElement('div');
    div.classList.add('link-box');
    
    const a1 = document.createElement('a');
    a1.href = site.url;

    const span1 = document.createElement('span');
    span1.classList.add('icon-heart');
    const srOnly1 = document.createElement('span');
    srOnly1.classList.add('sr-only');
    srOnly1.textContent = "&";
    span1.appendChild(srOnly1);
    a1.appendChild(span1);

    const a2 = document.createElement('a');
    a2.href = site.url;
    const span2 = document.createElement('span');
    span2.classList.add('icon-link');
    const srOnly2 = document.createElement('span');
    srOnly2.classList.add('sr-only');
    srOnly2.textContent = "&";
    span2.appendChild(srOnly2);
    a2.appendChild(span2);
    
    // div.appendChild(a1);
    div.appendChild(a2);
    figcaption.appendChild(div);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    galleryItem.appendChild(figure);
    container.appendChild(galleryItem);
}

}


//포폴용

const courseParse = () => {
    const container = document.querySelector('.course-list');
    for (let i = courses.length - 1; i >= 0; i--) {
        const site = courses[i];
        const courseItem = document.createElement('article');
        courseItem.classList.add('course-item');

        const imageLink = document.createElement('a');
        imageLink.href = site.url;

        const thumbnail = document.createElement('img');
        thumbnail.src = site.thumbnail;
        thumbnail.alt = site.client;
        thumbnail.classList.add('thumbnail');

        imageLink.appendChild(thumbnail);

        const title = document.createElement('h3');
        title.textContent = site.client;

        const date = document.createElement('time');
        date.textContent = site.date;
        date.dateTime = site.date; // Ensure this matches the ISO 8601 format if available

        const link = document.createElement('a');
        link.href = site.url;
        link.textContent = '자세히 보기';
        link.classList.add('button');

        const cartButton = document.createElement('button');
        cartButton.textContent = '장바구니';
        cartButton.classList.add('button');

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(link);
        buttonContainer.appendChild(cartButton);

        courseItem.appendChild(imageLink);
        courseItem.appendChild(title);
        courseItem.appendChild(date);
        courseItem.appendChild(buttonContainer);
        container.appendChild(courseItem);
    }
};


courseParse();

// if(window.location.pathname.includes('portfolios.html')) {
//     portParse();
// } else {
//     indexParse();
// }