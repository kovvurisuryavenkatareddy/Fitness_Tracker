import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <button  href="#" onClick={() => { props.deleteExercise(props.exercise._id) }} style={{ backgroundColor: 'black', color: 'white', borderRadius:'9px' }}>delete</button>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <body style={{ width: '100%', height: '100%', margin:"-24px -120px" }}>
      <div style={{width: '197.9vh', height: '92.7vh',backgroundImage: 'url(https://wallpaperset.com/w/full/a/0/0/45519.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
        <h3 style={{fontSize:"35px",textAlign:"center",color:"white"}}>Logged Exercises</h3>
        <table className=" table-transparent" style={{ backgroundColor: 'transparent', backdropFilter: 'blur(px)' }}>
          <thead className="thead-light">
            <tr>
              <th style={{ color: 'white', padding: '20px 100px',fontSize:"24px",textAlign:"center"}}>Username</th>
              <th style={{ color: 'white', padding: '20px 100px',fontSize:"24px",textAlign:"center"}}>Description</th>
              <th style={{ color: 'white', padding: '20px 100px',fontSize:"24px",textAlign:"center"}}>Duration</th>
              <th style={{ color: 'white', padding: '20px 100px',fontSize:"24px",textAlign:"center"}}>Date</th>
              <th style={{ color: 'white', padding: '20px 100px',fontSize:"24px",textAlign:"center"}}>Actions</th>
            </tr>
          </thead>
          <tbody style={{color:"white",fontSize:"20px",textAlign:"center"}}>
            { this.exerciseList() } 
          </tbody>
        </table>
      </div>
      </body>
    )
  }
}