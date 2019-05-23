// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  
  constructor(domElement) {
    // debugger
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click if you suck';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }
  expandArticle() {
    // debugger
    // console.log(this.domElement);
    this.domElement.classList.toggle('article-open');
    TweenMax.to('.article', 1, { y: 200, repeat: 0, yoyo: true });
    this.domElement.style.backgroundColor = 'aqua'
    this.expandButton.textContent = 'hide'
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach((article) => {
  new Article(article);
})

// const articleData = [
//   {
//     heading: 'Sheep',
//     paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     heading: 'Lambs',
//     paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     heading: 'Wolves',
//     paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ];

// class ArticleGenerator {
//   constructor(article, data) {
//     this.article = article;
//     this.data = data;

//     this.createHeading();
//     this.createParagraphs();
//   }

//   createHeading() {
//     const heading = document.createElement('h3');
//     heading.textContent = this.data.heading;
//     this.article.append(heading);
//   }

//   createParagraphs() {
//     const para1 = document.createElement('p');
//     para1.textContent = this.data.paragraph1;
//     this.article.insertAdjacentElement('beforeend', para1);

//     const para2 = document.createElement('p');
//     para2.textContent = this.data.paragraph2;
//     this.article.insertAdjacentElement('beforeend', para2);
//   }
// }

// articles.forEach((article, idx) => {
//   new ArticleGenerator(article, articleData[idx]);
// })