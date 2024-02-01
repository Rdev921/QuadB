import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const MovieInfo = () => {

  const { id } = useParams();
  const [shows, setShows] = useState({});

  const fetchShows = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    // console.log(data);
    setShows(data);
  }

  useEffect(() => {
    fetchShows(id);
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Movie Booked")
    window.location.href='/'
  }
  return (
    <Form className="choose-movie" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={shows.name} className='input' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" placeholder="Enter Type" value={shows.type} className='input'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Language</Form.Label>
        <Form.Control type="text" placeholder="Enter Type" value={shows.language} className='input'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Generes</Form.Label>
        <Form.Control type="text" placeholder="Enter Type" value={shows.genres} className='input'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" placeholder="Enter Type" value={shows.weight} className='input'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Enter Type" value={shows.status} className='input'/>
      </Form.Group>

     
        <button className='btn' type="submit" onClick={handleSubmit}>
          Submit
        </button>
    </Form>
  )
}
export default MovieInfo