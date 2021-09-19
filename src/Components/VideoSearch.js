import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const VideoSearch = (props) => {
  const [searchText, setSearchText] = useState("");

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  const searchButtonHandler = () => {
    props.searchEnterHandler(searchText);
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        onChange={searchTextHandler}
      />
      <Button
        variant="outline-secondary"
        id="searchBtn"
        onClick={searchButtonHandler}
      >
        Search
      </Button>
    </InputGroup>
  );
};

export default VideoSearch;
