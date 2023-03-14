import React from 'react'
const INITIAL_STATE = ["Dinesh", "Ramesh", "Suresh"];
const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
              
      <ol key="relativeList" id="relativeList">
        {INITIAL_STATE?.map((relative, idx) => {
          return (
            <li
              key={"relativeListItem" + (parseInt(idx) + 1)}
              id={"relativeListItem" + (parseInt(idx) + 1)}
            >
              {relative}
            </li>
          );
        })}
      </ol>
    </div>


   
  )
}

export default App
