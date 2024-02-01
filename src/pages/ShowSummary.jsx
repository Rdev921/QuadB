import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowSummary = () => {
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

    // Object.entries(shows).map(item=>console.log(item.summary))
    return (
        <>
            <Card className='movie-info'>
                <Card.Body>
                    <Card.Title><b>{shows.name}</b></Card.Title>
                    <Card.Text>
                        {shows.summary}
                    </Card.Text>
                    <Link to={`/movieInfo/${shows.id}`}>
                    <button className='btn'>Book Now</button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default ShowSummary