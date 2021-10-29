import React from 'react';
import { Card } from 'react-bootstrap';

export default function MovieCard(props) {
    //deconstructing props here
    const { Title, Year, Poster } = props.movie
    return (
        <div>
            {/* copied this card syntax from react-bootstrap */}
            <Card style={{ width: '18rem' }}>
                {/* using the the Poster variable defined from our prop deconstruction to reference a src="" for the image */}
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    {/* calling the title and year of the movie, within this react-bootstrap card */}
                    <Card.Title>{Title}</Card.Title>
                    <Card.Title>{Year}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
