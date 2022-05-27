const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Getting all the comments
router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creating comment
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })

//         if(!commentData) {
//             res.status(404).json({ message: "No comment found with this id" });
//             return;
//         }

//         res.status(200).json(commentData)
//     } catch(err) {
//         res.status(500).json(err);
//     }
// })
