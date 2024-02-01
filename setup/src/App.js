import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople]=useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <iframe
          src="https://giphy.com/embed/kMI3z7b9RWrYQbsXd2"
          width="375"
          height="480"
          
          class="giphy-embed image"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/MyPostcard-happy-birthday-wishes-to-you-kMI3z7b9RWrYQbsXd2"></a>
        </p>
        <List people={people} />
        <button onClick={() =>setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
