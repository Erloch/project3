import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import { Jumbotron } from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import { Container, Row, Col } from 'reactstrap';
import { List, ListItem } from "../components/List";

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
        currentAuthor: ""
    };

    componentDidMount() {
        console.log("component did mount");
        this.loadBuckets();
        // push completed and incomplete items to respective arrays

    }


    loadBuckets = () => {
        API.getBuckets()
            .then(res => {
                const completedItems = res.data.filter(listItem => listItem.completed && listItem.onBList);
                const incompleteItems = res.data.filter(listItem => !listItem.completed);
                const notRecommended = res.data.filter(listItem => !listItem.recommended);
                this.setState({ bucketList: res.data, activity: "", author: "", description: "", image: "", completedItems, incompleteItems, notRecommended });
            })
            .catch(err => console.log(err));
    };

    deleteBucket(id) {
        console.log("id = " + id)
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
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron className="bg-info">
                            <h1 className="display-4 text-light">To Do Bucket Activities</h1>
                        </Jumbotron>
                        <List>
                            {this.state.incompleteItems.map(listItem => (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity} by {listItem.author}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteBucket(listItem._id)
                                    } />
                                </ListItem>)
                            )}
                        </List>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron className="bg-info">
                            <h1 className="display-4 text-light">Completed Bucket Activities</h1>
                        </Jumbotron>
                        <List>
                            {this.state.completedItems.map(listItem => (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity} by {listItem.author}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteBucket(listItem._id)
                                    } />
                                </ListItem>)
                            )}
                        </List>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default YourList;