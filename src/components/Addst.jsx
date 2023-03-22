import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addst = () => {
  var [st,setst] = useState({mov:"",year:"",genre:"",rating:"",director:"",producer:"",cast:""})
  const handler = (e) =>{
    const {name,value}= e.target 
    setst({...st,[name]:value})
    console.log(st)
  }
  const saveData = () =>{
    console.log("Button clicked")
    axios.post("  http://localhost:3006/movie",st)
    .then(respones=>{
      alert("succesfully added")
    })
    .catch(error=>{
      alert("Failed")
    })

  }
  return (
    <div>
        <Typography>ADD MOVIE</Typography>
      <TextField id="outlined-basic" label="ID"
       name='mov'value={st.mov}
       onChange={handler}
        variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="name" 
      name='year'value={st.year}
      onChange={handler} variant="outlined" />
      <br></br><br></br>
      <TextField id="outlined-basic" label="Grade"
      name='genre'value={st.genre}
      onChange={handler} variant="outlined" />
        <br></br><br></br>
      <TextField id="outlined-basic" label="Grade"
      name='rating'value={st.rating}
      onChange={handler} variant="outlined" />
        <br></br><br></br>
      <TextField id="outlined-basic" label="Grade"
      name='director'value={st.director}
      onChange={handler} variant="outlined" />
        <br></br><br></br>
      <TextField id="outlined-basic" label="Grade"
      name='producer'value={st.producer}
      onChange={handler} variant="outlined" />
        <br></br><br></br>
      <TextField id="outlined-basic" label="Grade"
      name='cast'value={st.cast}
      onChange={handler} variant="outlined" />
      <br></br>
      <Button variant='contained' onClick={saveData}>submit</Button>
    </div>
  )
}

export default Addst

