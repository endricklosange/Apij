module.exports = (server) =>{
    const postController = require("../Controllers/postController");

    server.route("/posts")
    .get(postController.listAllPosts)
    .post(postController.createAPost)

    server.route("/posts/:id")
    .get(postController.getAPost)
    .put(postController.updateAPost)
    .delete(postController.deleteAPost);
    
}
