

import './App.css';
import React, { Component,useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class ImageComponent extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <div>
              <img src={this.props.url} width={900}
      height={600}
      alt="900x600" style={{
        position: 'absolute',
  
        right: 0,
        top: 0,
  }} />
              

          </div>
      );
  }
}


function App() {
  
const [heading,setHEADING]=useState("");
const [subheading,setSubheading]=useState("");
const [description,setDescription]=useState("");
function saveData()
{
let data={heading,subheading,description}
// console.warn(data);
fetch("http://127.0.0.1:8000/api/todos/", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(data)
}).then((result)=>{
  console.warn("result",result);;
  
  })

}


return (
  
  
  <div className="App" >
    <ImageComponent url="https://skyhawkkinetic.com/assets/images/vender.gif" />
    

    <Card style={{ width: '30rem',align: 'start', height:'25rem'
  
  }}>
    <Card.Img variant="top" src="https://wallpaperaccess.com/full/5710446.jpg" />
      <Card.Body>
        <Card.Title>NEW USER FORM</Card.Title>
        <Card.Text>
          Please Fill THE details Given Below CareFully
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>HEADING: <input type="char" name="heading" maxLength={30} value={heading} onChange={(e)=>{setHEADING(e.target.value)}}  /></ListGroup.Item>
        <ListGroup.Item>SUBHEADING:  <input type="char" name="subheading" maxLength={30} value={subheading} onChange={(e)=>{setSubheading(e.target.value)}} /> </ListGroup.Item>
        <ListGroup.Item>DESCRIPTION:  <input type="text" name="description" maxLength={30} value={description} onChange={(e)=>{setDescription(e.target.value)}}/></ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <br></br><button type="button" value="click me" onClick={saveData} >Save New User</button>
      </Card.Body>
    </Card>
 
    
    </div>
    );
}
export default App;

