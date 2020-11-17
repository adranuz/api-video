const express = require('express')

const MoviesService = require('../services/movies')

function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  const moviesService = new MoviesService()
  
  router.get('/', async (req, res, next) => {
    

    const { tags } = req.query || {}
    try {
      const movies = await moviesService.getMovies({ tags })
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (error) {
      next(error)
    }
  })

    
  router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params
    try {
      const movies = await moviesService.getMovie({movieId})
      res.status(200).json({
        data: movies,
        message: 'movie retrieved'
      })
    } catch (error) {
      next(error)
    }
  })


  router.post('/', async (req, res, next) => {
    const { body: movie } = req
    try {
      const createdMovieId = await moviesService.createMovie({movie})
      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:movieId', async (req, res, next) => {
    const { movieId } = req.params
    const { body: movie } = req
    try {
      const updatedMovieId = await moviesService.updateMovie({
        movieId,
        movie
      })
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      })
    } catch (error) {
      next(error)
    }
  })

  router.delete('/:movieId', async (req, res, next) => {
    const { movieId } = req.params
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId })
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      })
    } catch (error) {
      next(error)
    }
  })

  router.patch('/:movieId', async (req, res, next) => {
    const { movieId } = req.params
    const { body: movie } = req
    
    try {
      const patchMovieId = await moviesService.patchMovie({
        movieId,
        movie
       })
      res.status(200).json({
        data: patchMovieId,
        message: 'movie partial updated'
      })
    } catch (error) {
      next(error)
    }
  })

}

module.exports = moviesApi