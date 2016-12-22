import React from 'react';

export default function Refuge() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        Refuge is a stripped-down, barebones note taking application. The front end is built in React and Sass, while the back end is handled by Google Firebase.
      </p>
      <p>
        Users of Refuge can create, edit, delete, and save notes to their accounts after logging in via email, Facebook, Twitter, Google+, or GitHub. Google Firebase maintains user note data and stores it in its database, while also handling user authentication, to ensure that each user's notes remain private. All application routing is also handled by React Router.
      </p>
      <p>
        A simple text form allows users to create new note components, which are individually editable or removable. Actions such as creating, updating, or editing notes also make use of Node.js's EventEmitter API, notifying the user of any changes to their note repositories.
      </p>
      <br />
      <h4 className="label">The Process</h4>
      <p>
        Writing Refuge was a great introduction to React for me. My experience with writing Refuge helped me better understand some core fundamentals to writing code with React, like the React component life cycle, how to properly compose components to avoid inheritance, and how to manage shared state between components.
      </p>
      <p>
        My first experience with Firebase came during the development of Refuge. Its real time database was perfect for this note taking application, and its authentication features made securing users' notes extremely simple and straightforward.
      </p>
    </div>
  );
}
