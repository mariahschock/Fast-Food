import React from 'react';

export default function CommentsForm({ handleSubmit, commentsForm, setCommentsForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <section>
          Additional Comments:
        <input value={commentsForm} onChange={e => setCommentsForm(e.target.value)} />
        <button>Submit</button>
      </section>
    </form>
  );
}
