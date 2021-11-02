import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

export default function Wachlist() {
    const watchlistData = useSelector((state) => state.movieData);
    return (
        <div>
            <h1>Watchlist</h1>
            <div className="movie-container">
                <Row >
                    {watchlistData && watchlistData.map((movie, index) => {
                        return (
                            <Col
                                key={index}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                xl={4}
                                className="mb-6"
                            >
                                <MovieCard movie={movie} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}
