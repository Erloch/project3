import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import CompBtn from "../components/CompBtn";
import AddBtn from "../components/AddBtn"// import Jumbotron from "../components/Jumbotron";
import { Jumbotron } from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import { Container, Row, Col } from 'reactstrap';
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./YourList.css"


class YourList extends Component {
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
        currentAuthor: "",
        userID: ""

    };
    

    componentDidMount() {
        console.log("component did mount");
        console.log(this.props)
        this.toggle = this.toggle.bind(this);
        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                }, () => {
                    this.loadBuckets();
                });
            }
        }).catch(err => {
            console.log(err);
        });
        // push completed and incomplete items to respective arrays


    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    loadBuckets = () => {
        API.getUserBucket(this.state.user._id).then(
            res => {

                const completedItems = res.data.bucketArray.filter(listItem => listItem.completed);
                const incompleteItems = res.data.bucketArray.filter(listItem => !listItem.completed).reverse();

                // const completedItems = res.data.bucketArray.filter(listItem => listItem.completed && listItem.onBlist && listItem.recommended);
                // const incompleteItems = res.data.bucketArray.filter(listItem => !listItem.completed && listItem.onBlist && listItem.recommended).reverse();
                // const notRecommended = res.data.filter(listItem => !listItem.recommended);

                this.setState({
                    userID: res.data._id,
                    currentAuthor: res.data.username,
                    completedItems,
                    incompleteItems,
                    // notRecommended,
                    image: "",
                    description: "",
                    activity: ""
                })
            }
        ).catch(err => console.log(err));
    }

    addBucket(id) {
        console.log("add id =" + id)
    }

    deleteBucket(id) {
        console.log("id = " + id)
        API.deleteBucket(id)
            .then(res => this.loadBuckets())
            .catch(err => console.log(err));
    };

    updateBucket(id, key, value) {
        console.log(value)
        API.updateBucket(id, key, value)
            .then(res => this.loadBuckets())
            .catch(err => console.log(err));
    }

    compBucket(id) {
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
        console.log(this.props);
        console.log(this.state);
        return (
            <Container fluid>
                <Row>
                    <div className="modelbutt">
                        <Button color="success" onClick={this.toggle}>Add Your Own!</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>What Would You Love To Do!</ModalHeader>
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
                                        disabled={!(this.state.activity)}
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

                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6 }}>

                        <Jumbotron className="bg-info">
                            <h1 className="display-4 text-light">Your Bucket List!</h1>
                        </Jumbotron>
                        {/* <List>
                            {this.state.incompleteItems.map(listItem => (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity} by {listItem.author}
                                        </strong>
                                    </Link>
                                    <CompBtn onClick={() => this.updateBucket(listItem._id, "completed", !this.state.bucketList.find(item => item._id === listItem._id).completed)} />
                                    <DeleteBtn onClick={() => this.updateBucket(listItem._id, "recommended", !this.state.bucketList.find(item => item._id === listItem._id).recommended)} />
                                    <AddBtn onClick={() => this.updateBucket(listItem._id, "onBlist", !this.state.bucketList.find(item => item._id === listItem._id).onBlist)} />
                                </ListItem>) */}
                        {this.state.user && this.state.user.bucketArray.length ? (
                            <List>
                                {this.state.incompleteItems.map(listItem => (
                                    <ListItem key={listItem._id}>
                                        <Link to={"/buckets/" + listItem._id}>
                                            <strong>
                                                {listItem.activity}
                                            </strong>
                                        </Link>
                                        <CompBtn onClick={() => this.updateBucket(listItem._id, "completed", !this.state.bucketList.find(item => item._id === listItem._id).completed)} />
                                        <DeleteBtn onClick={() => this.updateBucket(listItem._id, "recommended", !this.state.bucketList.find(item => item._id === listItem._id).recommended)} />
                                        {/* <AddBtn onClick={() => this.updateBucket(listItem._id, "onBlist", !this.state.bucketList.find(item => item._id === listItem._id).onBlist)} /> */}
                                    </ListItem>)
                                )}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                    <Col sm="12" md={{ size: 6 }}>
                        <Jumbotron className="bg-info">
                            <h1 className="display-4 text-light">Completed Bucket Activities</h1>
                        </Jumbotron>
                        <List>
                            {this.state.completedItems.map(listItem => (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity}
                                        </strong>
                                    </Link>
                                    {/* <CompBtn onClick={() => this.updateBucket(listItem._id, "completed", !this.state.bucketList.find(item => item._id === listItem._id).completed)} /> */}
                                    <DeleteBtn onClick={() => this.updateBucket(listItem._id, "recommended", !this.state.bucketList.find(item => item._id === listItem._id).recommended)} />
                                    <AddBtn onClick={() => this.updateBucket(listItem._id, "onBlist", !this.state.bucketList.find(item => item._id === listItem._id).onBlist)} />
                                </ListItem>)
                            )}
                        </List>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <h3>Saved for later/Unrecommended</h3>
                        <List>
                            {this.state.notRecommended.map(listItem => (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity} by {listItem.author}
                                        </strong>
                                    </Link>
                                    <CompBtn onClick={() => this.updateBucket(listItem._id, "completed", !this.state.bucketList.find(item => item._id === listItem._id).completed)} />
                                    <DeleteBtn onClick={() => this.updateBucket(listItem._id, "recommended", !this.state.bucketList.find(item => item._id === listItem._id).recommended)} />
                                    <AddBtn onClick={() => this.updateBucket(listItem._id, "onBlist", !this.state.bucketList.find(item => item._id === listItem._id).onBlist)} />
                                </ListItem>)
                            )}
                        </List>
                    </Col>
                </Row> */}
            </Container>
        );
    }
}

export default YourList;