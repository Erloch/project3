import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./Detail.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


class Detail extends Component {
  state = {
    bucketList: {},
    modal: false
  };

  componentDidMount(){
    API.getBucket(this.props.match.params.id)
    .then(res => this.setState({bucketList: res.data}))
    .catch(err => console.log(err));
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <>
      <Container fluid>
        <Row>
          <Col size="md">
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
              <h2>Description</h2>
              <p>{this.state.bucketList.description}</p>
              <div className="modelbutt">
              <img src={this.state.bucketList.image} alt={this.state.bucketList.activity} className="hvr-grow-shadow" onClick={this.toggle}/>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>{this.state.bucketList.activity}</ModalHeader>
              <ModalBody>
              <img src={this.state.bucketList.image} alt={this.state.bucketList.activity}></img>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" className="hvr-grow-shadow" onClick={this.toggle}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
            </article>
        </Row>
        <Row>
          <Col size="md">
            <div className="hvr-grow-shadow">
            <Link to="/YourList">← Back to your <br></br>← Bucket List!</Link>
            </div>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Detail;