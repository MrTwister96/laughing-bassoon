import React, {useState, useEffect} from 'react'
// import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

const HomePage = () => {
  const [notes, setNotes] = useState([])

  let api = useAxios()

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])

  let getNotes = async () => {
    let response = await api.get('/api/notes/')
    
    // eslint-disable-next-line
    if (response.status == 200) {
      setNotes(response.data)
    }
  }
  

  return (
    <div>
        <p>You are logged into the home page!</p>

        <ul>
          {notes.map(note => (
            <li key={note.id}>{note.body}</li>
          ))}
        </ul>
    </div>
  )
}

export default HomePage