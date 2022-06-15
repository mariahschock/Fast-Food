import React from 'react';

export default function CommentsList({ comments }) {
  return (
    <section>
      <h3>Additional Comments:</h3>
      {
        comments.map((comment, i) => <li key={comment + i}>{comment}</li>)
      }
    </section>
  );
}
