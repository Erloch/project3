import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import CompBtn from "../components/CompBtn";
import AddBtn from "../components/AddBtn";
// import Jumbotron from "../components/Jumbotron";
import { Jumbotron } from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Bucket.css";
import ReactTooltip from "react-tooltip";

class Buckets extends Component {
  state = {
    bucketList: [],
    activity: "",
    author: "",
    description: "",
    image: "",
    currentAuthor: "",
    modal: false
  };

  componentDidMount() {
    this.loadBuckets();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  loadBuckets = () => {
    API.getBuckets()
      .then(res =>
        this.setState({
          bucketList: res.data,
          activity: "",
          author: "",
          description: "",
          image: ""
        })
      )
      .catch(err => console.log(err));
  };

  addBucket(id) {
    console.log("add id =" + id);
  }

  deleteBucket(id) {
    console.log("id = " + id);
    API.deleteBucket(id)
      .then(res => this.loadBuckets())
      .catch(err => console.log(err));
  }

  updateBucket(id, key, value) {
    console.log(value);
    API.updateBucket(id, key, value)
      .then(res => this.loadBuckets())
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.activity && this.state.author) {
      API.saveBucket({
        activity: this.state.activity,
        author: this.state.author,
        description: this.state.description,
        image: this.state.image
      })
        .then(res => this.loadBuckets())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        {console.log(this.state.bucketList)}
        <Row>
          <Col size="md-12">
            <Jumbotron className="bg-primary">
              <h1 className="display">
                {this.state.bucketList.length ? (
                  <>
                    {this.state.bucketList[0].author}, what would you like to
                    do?
                  </>
                ) : (
                  <>Please Sign In to add Bucket List Items</>
                )}
              </h1>
            </Jumbotron>
          </Col>
          <div className="modelbutt">
            <Button color="success" className="hvr-grow-shadow" onClick={this.toggle}>
              Create Your Own!
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Create Your Own!</ModalHeader>
              <ModalBody>
                <form>
                  <Input
                    value={this.state.activity}
                    onChange={this.handleInputChange}
                    name="activity"
                    placeholder="Activity (required)"
                  />
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  />
                  <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Description (Optional)"
                  />
                  <Input
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    name="image"
                    placeholder="Pic (or it didn't happen)"
                  />
                  <FormBtn
                    disabled={!(this.state.author && this.state.activity)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Activity
                  </FormBtn>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" className="hvr-grow-shadow" onClick={this.toggle}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>

          <Col size="md-12">
            {this.state.bucketList.length ? (
              <List>
                {this.state.bucketList.map(listItem => (
                  <ListItem className="mt-2" key={listItem._id}>
                    <Link to={"/buckets/" + listItem._id}>
                      <strong>
                        <a data-tip data-for="detailFace" className="hvr-grow-shadow">
                          {listItem.activity} by {listItem.author}
                        </a>
                        <ReactTooltip id="detailFace" type="dark">
                          <span>More Detail</span>
                        </ReactTooltip>
                      </strong>
                    </Link>
                    <CompBtn
                      onClick={() =>
                        this.updateBucket(
                          listItem._id,
                          "completed",
                          !this.state.bucketList.find(
                            item => item._id === listItem._id
                          ).completed
                        )
                      }
                    />
                    <DeleteBtn
                      onClick={() =>
                        this.updateBucket(
                          listItem._id,
                          "recommended",
                          !this.state.bucketList.find(
                            item => item._id === listItem._id
                          ).recommended
                        )
                      }
                    />
                    <AddBtn
                      onClick={() =>
                        this.updateBucket(
                          listItem._id,
                          "onBlist",
                          !this.state.bucketList.find(
                            item => item._id === listItem._id
                          ).onBlist
                        )
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Buckets;
