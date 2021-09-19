import React from "react";
import { ListGroup, Image, Row, Col } from "react-bootstrap/";

const VideoSearchList = (props) => {
  const listClickHandler = (event) => {
    props.movieClicked(event.target.attributes.videoid.value);
    // console.log(event.target.attributes.videoid.value);
  };

  let content;
  if (props.movies.length > 0) {
    content = (
      <ul>
        {props.movies.map((movie) => (
          <Row>
            <Col sm={4}>
              <Image
                src="https://i.ytimg.com/vi/JJpw600sB54/mqdefault_live.jpg/171x180"
                rounded
              />
            </Col>
            <Col sm={8}>
              <ListGroup.Item
                action
                onClick={listClickHandler}
                videoId={movie.videoId}
              >
                {movie.title}
              </ListGroup.Item>
            </Col>
          </Row>
        ))}
      </ul>
    );
  }
  return <ListGroup defaultActiveKey="#link1">{content}</ListGroup>;
};

export default VideoSearchList;
