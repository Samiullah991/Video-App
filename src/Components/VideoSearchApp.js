import React, { useState } from "react";
import VideoSearchList from "./VideoSearchList";
import Player from "./Player";
import VideoSearch from "./VideoSearch";

import { Container, Row, Col } from "react-bootstrap/";

const VideoSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  const searchResultHandler = async (searchText) => {
    const key = "AIzaSyBsGroGmofzjHBtIG_y4ugaJw8bqSp9eaY";
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        searchText +
        "&key=" +
        key
    );

    let responseData = await response.json();
    let movieList = [];

    for (const key in responseData.items) {
      movieList.push({
        id: key,
        videoId: responseData.items[key].id.videoId,
        title: responseData.items[key].snippet.title,
        thumbnail: responseData.items[key].snippet.thumbnails,
      });
    }

    setMovies(movieList);
    setMovieId(movieList[0].videoId);
  };
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <VideoSearch searchEnterHandler={searchResultHandler}></VideoSearch>
        </Col>
      </Row>
      <Row>
        <Col md={8}>{movieId && <Player videoId={movieId}></Player>}</Col>
        <Col md={4}>
          <VideoSearchList
            movies={movies}
            movieClicked={setMovieId}
          ></VideoSearchList>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoSearchApp;
