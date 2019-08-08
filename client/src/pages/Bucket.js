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
        this.setState({ bucketList: res.data, activity: "", author: "", description: "", })
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
        description: this.state.description
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
            <Jumbotron className="bg-warning">
              <h1 className="display">{this.state.bucketList.length ? (
              <>
                {this.state.bucketList[0].author}, what would you like to do?
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
                  <ListItem key={listItem._id}>
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
               <div>
              <Button color="danger" onClick={this.toggle}>Create Your Own!</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
              <FormBtn
                disabled={!(this.state.author && this.state.activity)}
                onClick={this.handleFormSubmit}
              >
                Submit Activity
              </FormBtn>
            </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
              </Modal>
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Buckets;