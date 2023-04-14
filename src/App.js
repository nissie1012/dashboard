import React from 'react'
import './App.css';
const data = [
  {  ID: 19, name: "Anom" },
  {  ID: 19,name: "Megha" },
  {  ID: 25,name: "Subham"},
]
function App() {
  return (
  <div className="App">

<div className="container" >
          <div className="card" >
              <div className="profile_details">
                  <div className="profile_images">
                      <img src="components/images.png" alt='nissie' />
                  </div>
                  <div className="profile">
               
                      <h1>PROFILE</h1>
                      
                      <div className="specification">
                       <h3>Name : NISSIE</h3>
                       <h3>Username : NISSIE</h3> 
                       <h3>Person Id : NISSIE</h3>
                       <h3>Email : NISSIE</h3> 
                       <h2>Borrowed Books</h2>
                       <table>
  <tr>
  <th>id</th>
    <th>Name</th>
    
  </tr>
  {data.map((val, key) => {
    return (
      <tr key={key}>
          <td>{val.ID}</td>
        <td>{val.name}</td>
      </tr>
    )
  })}
</table>
                  </div>
                </div>
                </div>

</div>
</div>
</div>
  )
}
export default App;