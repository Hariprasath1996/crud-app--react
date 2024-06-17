
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <h3>Crud App Create Using FrontEnd For React Js and BackEnd For Node Js</h3>
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
    <tr>
      <td>1</td>
      <td>HariPrasath</td>
      <td>27</td>
      <td>Erode</td>
      <td><button className='btn-edit green'>Edit</button></td>
      <td><button className='btn-delete red'>Delete</button></td>
    </tr>
    <tr>
      <td>1</td>
      <td>HariPrasath</td>
      <td>27</td>
      <td>Erode</td>
      <td><button className='btn-edit green'>Edit</button></td>
      <td><button className='btn-delete red'>Delete</button></td>
    </tr>
    <tr>
      <td>1</td>
      <td>HariPrasath</td>
      <td>27</td>
      <td>Erode</td>
      <td><button className='btn-edit green'>Edit</button></td>
      <td><button className='btn-delete red'>Delete</button></td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  )
}

export default App
