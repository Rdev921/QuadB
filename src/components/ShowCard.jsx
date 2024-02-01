import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
const ShowCard = () => {
    const [shows, setShows] = useState([]);
    const fetchShows = async () => {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
    }

    useEffect(() => {
        fetchShows();
    }, [])

    return (
        <div className='container'>
            {shows.length > 0 ? shows.map((item, index) => (
                <Card className='movie-card' key={index}>
                    <Card.Body >
                    {/* <Card.Img src={item.show.image[22].original} alt='show-image'></Card.Img> */}
                        <Card.Title>Name: <b>{item.show.name}</b></Card.Title>
                        <Card.Text>Type: {item.show.type}</Card.Text>
                        <Card.Text>Language: {item.show.language}</Card.Text>
                        <Card.Text>Genres: {item.show.genres + ""}</Card.Text>
                        <Card.Text>Weight: {item.show.weight}</Card.Text>
                        <Card.Text>Status: {item.show.status}</Card.Text>
                        <Link to={`/summary/${item.show.id}`}>
                            <button className='btn'>Read More</button>
                        </Link>
                    </Card.Body>
                </Card>
            )) :  <Card.Img src="/loading.svg" width={250} height={250} 
            alt='show-image'></Card.Img>}
        </div>
    )
}
export default ShowCard