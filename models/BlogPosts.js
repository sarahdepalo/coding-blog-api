'use strict';

const db = require('./conn')

class BlogPosts {
    constructor(id) {
        this.id =id;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM blog;`)
            return response;

        } catch(error) {
            console.error('ERROR: ', error)
            return error
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.any(`SELECT * FROM posts INNER JOIN blog on blog.id = posts.blog_id WHERE blog.slug = '${slug}';`);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getPost(post_slug) {
        try {
            const response = await db.one(`SELECT * FROM posts WHERE post_slug = '${post_slug}';`);
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

}


module.exports = BlogPosts;
