import { comments } from "../../../data/comments";

/* 
  Here, when a new comment is submitted, the `comments` array is pushed with new comment. 
  And then the `comments` array is fetched. And again a new comment can be pushed onto in-memory `comments` array,
  and then the `comments` array is fetched.

  This cycle can keep going on.

  > NOTE: the `data/comments.js` file is not edited.
*/
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment); // it can be pushed to database, here it is pushed to the fetched array
    res.status(201).json(newComment);
  }
}
