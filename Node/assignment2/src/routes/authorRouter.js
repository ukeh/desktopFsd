var express = require('express');
var authorRouter = express.Router();
var authors = [{ name: "J.K. Rowling", country: "England", Books: 20, image: 'rowling.jpeg' },
{ name: "J. D. Salinger", country: "America", Books: 12, image: 'salinger.jpg' },
{ name: "Chetan Bhagat", country: "India", Books: 2, image: 'chetan.jpg' },
{ name: "R. K. Narayan", country: "India", Books: 10, image: 'rk.jpg' },
{ name: "Ruskin Bond", country: "India", Books: 25, image: 'ruskin.jpg' },
{ name: "Arundhati Roy", country: "India", Books: 50, image: 'aru.jpg' }];
function route(nav) {

    authorRouter.route('/')
        .get((req, res) => {
            res.render('authors.ejs', {
                nav,
                title: "Authors",
                authors
            }
            )

        });
    authorRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('author.ejs', {
                nav,
                title: "Author",
                author: authors[id]
            }
            )
        })


    return authorRouter;
}
module.exports = route;