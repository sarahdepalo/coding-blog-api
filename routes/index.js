'use strict';

const express = require('express');
const router = express.Router();
const BlogPosts = require('../models/BlogPosts');

router.get('/:slug?', async (req, res) => {
    if(!!req.params.slug) {
        const { slug } = req.params;
        const blogPost = await BlogPosts.getBySlug(slug);
        res.json(blogPost).status(200);
    } else {
        const allBlogs = await BlogPosts.getAll();
        res.json(allBlogs).status(200);
    }
});

router.get('/:slug/:post_slug', async (req, res) => {
    const { post_slug } = req.params;
    console.log(post_slug);
    const post = await BlogPosts.getPost(post_slug);
    res.json(post).status(200);
})

module.exports = router;