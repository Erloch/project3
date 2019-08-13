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
import YouList from "./YourList";

class Buckets extends Component {
  state = {
    bucketList: [],
    activity: "",
    author: "",
    description: "",
    image: "",
    currentAuthor: "",
    modal: false,
    userID: ""
  };

  // activity: this.state.activity,
  // author: this.state.currentAuthor,
  // description: this.state.description,
  // date: this.state.date,
  // image: this.state.image,
  // userID: this.state.userID

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
            // .then(() => this.loadBuckets())
            .catch(err => console.log(err));
    
    
};

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
                   Checkout what others are adding to their lists!
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
      </Container>
    );
  }
}

export default Buckets;
