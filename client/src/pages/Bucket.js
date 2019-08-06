import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Buckets extends Component {
  state = {
    bucketList: [],
    activity: "",
    author: "",
    description: "",
    image: ""
  };

  componentDidMount() {
    this.loadBuckets();
  }

  loadBuckets = () => {
    API.getBuckets()
      .then(res =>
        this.setState({ bucketList: res.data, activity: "", author: "", description: "",})
      )
      .catch(err => console.log(err));
  };

  deleteBucket = id => {
    API.deleteBucket(id)
      .then(res => this.loadBuckets())
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
          <Col size="md-6">
            <Jumbotron>
              <h1>What activity should I do?</h1>
            </Jumbotron>
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
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Other Bucket Activities</h1>
            </Jumbotron>
            {this.state.bucketList.length ? (
              <List>
                {this.state.bucketList.map(listItem => (
                  <ListItem key={listItem._id}>
                    <Link to={"/buckets/" + listItem._id}>
                      <strong>
                        {listItem.activity} by {listItem.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBucket(listItem._id)} />
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