import { useState } from "react";

export default function CommentsPage() {
  // ----GET---
  // initial state is empty array
  // `comments` is replaced by the `setComments` value
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data); // blank is replaced by data fetched
  };

  // ----POST---
  // initial state is empty string for `comment` which captures the input from the text box
  const [comment, setComment] = useState("");

  const submitComment = async () => {
    const response = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  // ----DELETE---
  const deleteComment = async (commentId) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  // ----UI---
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}{" "}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
