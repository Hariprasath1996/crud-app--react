// import axios for api data receive
import axios from "axios"

import './App.css'
import { useEffect, useState } from "react"


function App() {
  const [users, setUsers] = useState([])

  // get data from api to using axios method
  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      console.log(res.data);
      setUsers(res.data)
    })

  }
  // use Effect for once app is running data will render one time , bcoz of i selected here empty dependency array
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <>
      <div className="container">
        <h3>Crud Application With React js Front End and Back End Node Js</h3>
        <div className='input-container'>
          <label htmlFor="Search" >Title : </label>
          <input type="Search" id='Search' className='Search' />
          <button className='search-btn'>Add Record</button>
        </div>
        <table className='table-head'>
          <thead >
            <>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </>
          </thead>
          <tbody>

            {/* 
            <tr key={user.id}>
                    <td>1</td>
                    <td>HariPrasath</td>
                    <td>27</td>
                    <td>Erode</td>
                    <td><button className='btn-edit green'>Edit</button></td>
                    <td><button className='btn-delete red'>Delete</button></td>
                  </tr> */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
