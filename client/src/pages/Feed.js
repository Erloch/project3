import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import CompBtn from "../components/CompBtn";
import AddBtn from "../components/AddBtn"
// import Jumbotron from "../components/Jumbotron";
import { Jumbotron } from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Bucket.css"

class Feed extends Component {
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
        this.setState({ bucketList: res.data, activity: "", author: "", description: "", image: ""})
      )
      .catch(err => console.log(err));
  };

  addBucket(id){
    console.log("add id =" + id)
  }

  deleteBucket(id) {
    console.log("id = " + id)
    API.deleteBucket(id)
      .then(res => this.loadBuckets())
      .catch(err => console.log(err));
  };

  compBucket(id){
    console.log("comp id =" + id)
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
        <Row>
          <Col size="md-12">
            <Jumbotron className="bg-primary">
              <h1 className="display">{this.state.bucketList.length ? (
              <>
                {this.state.bucketList[0].author}, would you like to see other buckets?
              </>
            ) : (
                <>Please Sign In to add Bucket List Items</>
              )}</h1>
            </Jumbotron>
          </Col>
          

          <Col size="md-12">
            {this.state.bucketList.length ? (
              <List>
                {this.state.bucketList.map(listItem => (
                  <ListItem className="mt-2" key={listItem._id}>
                    <Link to={"/buckets/" + listItem._id}>
                      <strong>
                        {listItem.activity} by {listItem.author}
                      </strong>
                    </Link>
                    <CompBtn onClick={()=> this.compBucket(listItem._id)}/>
                    <DeleteBtn onClick={() => this.deleteBucket(listItem._id)
                    } />
                    <AddBtn onClick={()=> this.addBucket(listItem._id)} />
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

export default Feed;
