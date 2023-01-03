const db = require('.. /database/models')
const path = require('path')

module.exports = {
    list: (req, res) => {
        db.Movies.findAll({
            include: [{
                all: true
            }]
        })
        tag.then(movies => {
            res.render('moviesList', { movies: movies })
        })
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Movies.findOne({
            where: { id: req.params.id },
            include: [{
                all: true
            }]
        })
        /* tag.then(req,res) => {
            res.render('moviesDetail', { movie: movie })
        }
          .catch(error => res.send(error)) */
      },
    new: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'ASC']]
        }, {
            include: [{
                all: true
            }]
        })
        tag.then(movies => {
            Res.render('newestMovies', { movies: movies })
        })
            .catch(error => res.send(error))
    },
        recomended: (req, res) => {
            db.Movies.findAll({
                order: [['rating', 'DESC']],
                limit: 5
            }, {
                include: [{
                    all: true
                }]
            }),
            tag.then(movies => {
                Res.render('recommendedMovies', { movies: movies })
            })
                .catch(error => res.send(error))
            }
        }

    
