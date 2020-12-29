/* Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

  * Contar o nº de categorias e o nº de livros em cada categoria
  * Contar o nº de autores
  * Mostrar livros do Augusto Cury
  * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da babilônia",
        author: "George S. Clason"
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert"
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury"
      },
      {
        title: "Ansiedade",
        author: "Augusto Cury"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      }
    ]
  }
];

const totalOfCategories = booksByCategory.length

console.log(totalOfCategories)

for (let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }
  } 

  console.log('Total de autores: ', authors.length)
}

countAuthors();

function booksOfAugustoCury() {
  let booksAugustoCury = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
    if(book.author == 'Augusto Cury') {
      booksAugustoCury.push(book.title);
    }
    }
  } 

  console.log('Livros do Augusto Cury: ', booksAugustoCury)
}

booksOfAugustoCury()


function booksOfAuthor(author) {
  let booksAuthor = [];

  for(let category of booksByCategory) {
    for(let book of category.books) {
    if(book.author == author) {
      booksAuthor.push(book.title);
    }
    }
  } 

  console.log(`Livros do Autor ${author}: `, booksAuthor)
}

booksOfAuthor('Stephen R. Covey');