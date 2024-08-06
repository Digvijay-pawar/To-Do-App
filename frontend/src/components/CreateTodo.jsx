import React, { useState } from 'react';

export function CreateTodo() {
  async function submitHandler(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const response = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  }

  const autoResize = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          name="title"
          style={{ border: '1px solid silver' }}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          style={{ border: '1px solid silver', resize: 'none', overflow: 'hidden' }}
          className="form-control"
          placeholder="Describe your Task"
          onInput={autoResize}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-block btn-success">
        Submit
      </button>
    </form>
  );
}
