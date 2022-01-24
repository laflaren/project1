import React, { useState } from "react";
import initialQuotes from "./quotes.json";

export default function Quotes() {
  let [quotes, setQuotes] = useState(initialQuotes);

  return (
    <div className="randomquotes">
      <ul>
        {quotes.map(quote => (
          <li> {quote.quote} </li>
        ))}
      </ul>
    </div>
  );
}
{
  /* filter sort 
      to do state / added, sort it by t
      completed - crossed out, 
      if completed is true - list at bottom. 
        or in js: 'todo.items.sort()' method  */
}

{
  /* revolving quotes - organizing / minimalism array - object, functions in JS for random 0 and array.length-1 */
}
