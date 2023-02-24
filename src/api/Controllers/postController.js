const Post = require('../Models/postModel');
exports.listAllPosts = (req, res) => {
    Post.find({}, (error, posts) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur" });
        }
        else {
            res.status(200);
            res.json(posts);
        }
    })
}
exports.createAPost = (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((error, post) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Requête invalide." });
        }
        else {
            res.status(201);
            res.json(post);
        }
    })
}
exports.getAPost = (req, res) => {
    Post.findById(req.params.postId, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur" });
        }
        else {
            res.status(200);
            res.json(post);
        }
    });

}
exports.updateAPost = (req, res) => {
    const postId = req.params.id;
    Post.findByIdAndUpdate(postId, req.body, { new: true }, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur" });
        } else {
            if (!post) {
                res.status(404);
                res.json({ message: "Post non trouvé" });
            } else {
                res.status(200);
                res.json(post);
            }
        }
    });
};

exports.deleteAPost = (req, res) => {
    const postId = req.params.id;
    Post.findByIdAndRemove(postId, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur" });
        } else {
            res.status(200);
            res.json({ message: "Erreur serveur" });
        }
    });
};
