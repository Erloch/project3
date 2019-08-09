import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./Detail.css"

class Detail extends Component {
  state = {
    bucketList: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  componentDidMount(){
    API.getBucket(this.props.match.params.id)
    .then(res => this.setState({bucketList: res.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
      
                {this.state.bucketList.activity} by {this.state.bucketList.author}
                <br></br>
                <br></br>
                Completed: {this.state.bucketList.completed? "Oh YEAH!":"Not Yet!"}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
            <article>
              <h1>Description</h1>
              <p>{this.state.bucketList.description}</p>
              <img src={this.state.bucketList.image} alt={this.state.bucketList.activity}/>
            </article>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to your Bucket List!</Link>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Detail;