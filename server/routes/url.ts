import express from 'express'
import { urlModel } from '../models/url'
import { nanoid } from 'nanoid'
import { getAnalytics, postUrlData, redirectToUrl } from '../controllers/urlController'
const router= express.Router()

router.post('/', postUrlData)

router.get('/:id', redirectToUrl)

router.get('/analytics/:id', getAnalytics)

export default router

