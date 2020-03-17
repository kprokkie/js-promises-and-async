export const enum API {
    DOMAIN = 'https://jsonplaceholder.typicode.com/',
    POSTS = 'https://jsonplaceholder.typicode.com/posts',
    COMMENTS = 'https://jsonplaceholder.typicode.com/comments',
    ALBUMS = 'https://jsonplaceholder.typicode.com/albums',
    PHOTOS = 'https://jsonplaceholder.typicode.com/photos',
    TODOS = 'https://jsonplaceholder.typicode.com/todos',
    USERS = 'https://jsonplaceholder.typicode.com/users'
}


/**
 * Resources
 * ---------
 * JSONPlaceholder comes with a set of 6 common resources:
 * -------------------------------------------------------
 *  /posts	    100 posts
 *  /comments	500 comments
 *  /albums	    100 albums
 *  /photos	    5000 photos
 *  /todos	    200 todos
 *  /users	    10 users
 * -------------------------------------------------------
 *
 * Routes
 * ------
 * All HTTP methods are supported:
 * -------------------------------------------------------
 * GET	    /posts
 * GET	    /posts/1
 * GET	    /posts/1/comments
 * GET	    /comments?postId=1
 * GET	    /posts?userId=1
 * POST	    /posts
 * PUT	    /posts/1
 * PATCH	/posts/1
 * DELETE	/posts/1
 * --------------------------------------------------------
 */