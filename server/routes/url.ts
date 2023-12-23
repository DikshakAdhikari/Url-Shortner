import express from 'express'
import { getAllUrls, getAnalytics,  postUrlData, redirectToUrl } from '../controllers/urlController'
import { vertifyJwt } from '../middleware/verifyJwt'

const router= express.Router()

router.post('/', vertifyJwt, postUrlData)

router.get('/:id', vertifyJwt, redirectToUrl)

router.get('/analytics/:id', vertifyJwt, getAnalytics)

router.post('/getAllUrls', vertifyJwt, getAllUrls)

export default router

