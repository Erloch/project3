import React, { Component } from "react";
import AddBtn from "../components/AddBtn";
import Jumbotron from "./../components/Jumbotron/index";
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
    onBList: [],
    completedItems: [],
    incompleteItems: [],
    notRecommended: [],
    activity: "",
    author: "",
    description: "",
    image: "",
    modal: false,
    userID: ""
  };

 

  componentDidMount() {
    console.log("component did mount");
    console.log(this.props);
    this.toggle = this.toggle.bind(this);
    API.isLoggedIn()
      .then(user => {
        if (user.data.loggedIn) {
          this.setState(
            {
              loggedIn: true,
              user: user.data.user
            },
            () => {
              this.loadBuckets();
            }
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
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
          userID: res.data._id,
          image: ""
        })
      )
      .catch(err => console.log(err));
    
    API.isLoggedIn().then(user => {
      this.setState({
        userID: user.data.user._id
      })
    })
      .catch(err => {
      console.log(err);
      });
  }

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


  
  // Below method is for adding favorite to my list
  handleFavoriteSubmit = event => {
    event.preventDefault();
    
    const clickedBtnID = event.currentTarget.getAttribute('buttonid');
    
    const match = this.state.bucketList.filter(item => clickedBtnID === item._id)[0]
        console.log(this.state)
        console.log(match)
 API.saveBucket({
            activity: match.activity,
            author: match.author,
            description: match.description,
            date: match.date,
            image: match.image,
            userID: this.state.userID
        })
            .then(() => this.props.history.push("/YourList"))
            .catch(err => console.log(err));
    
    
};
  compBucket(id) {
    console.log("comp id =" + id);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.activity) {
      API.saveBucket({
        activity: this.state.activity,
        author: this.state.currentAuthor,
        description: this.state.description,
        date: this.state.date,
        image: this.state.image,
        userID: this.state.userID
      })
        .then(() => this.loadBuckets())
        .catch(err => console.log(err));
    }
    this.toggle();
  };


  render() {
    return (
      <Container fluid>
        {console.log(this.state.bucketList)}
        <Row>
          <Col size="md-12">
            <Jumbotron className="bg-primary">
              <h1 className="display">
                {this.state.currentAuthor ? (
                  <>
                   Checkout what others are adding to their lists!<br></br>
                    {this.state.currentAuthor}, what would you like to
                    do?
                  </>
                ) : (
                  <>Please Sign In to add Bucket List Items</>
                )}
              </h1>
            </Jumbotron>
          </Col>
          
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
                    
                    <AddBtn
                      buttonID={listItem._id}
                      onClick={this.handleFavoriteSubmit}
                      
                />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        {this.state.currentAuthor ? ( <>
          <br></br>
        <div className="modelbuttB">
                <Button color="primary" onClick={this.toggle}>
                  Create Your Own!
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>
                    Create Your Own!
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <Input
                        value={this.state.activity}
                        onChange={this.handleInputChange}
                        name="activity"
                        placeholder="Activity (required)"
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
                        disabled={!this.state.activity}
                        onClick={this.handleFormSubmit}
                      >
                        Submit Activity
                      </FormBtn>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
        </div>
        </>) : (<div></div>)}
      </Container>
    );
  }
}

export default Buckets;
