import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import { Jumbotron } from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import { Container, Row, Col } from 'reactstrap';
import { List, ListItem } from "../components/List";

class Buckets extends Component {
    state = {
        bucketList: [],
        completedItems: [],
        incompleteItems: [],
        activity: "",
        author: "",
        description: "",
        image: "",
        completed: "",
        currentAuthor: ""
    };

    componentDidMount() {
        this.loadBuckets();
        // push completed and incomplete items to respective arrays
        
    }

    // sortBuckets = () =>{
    //     this.state.bucketList.map(listItem => {
    //         if(listItem.complete === false){
    //             this.state.incompleteItems.push(listItem);
    //         }else{
    //             this.state.completedItems.push(listItem);
    //         }
    //     });
    // }

    loadBuckets = () => {
        API.getBuckets()
            .then(res =>
                this.setState({ bucketList: res.data, activity: "", author: "", description: "", image: "", completed: "" })
            )
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

    checkCompleted = item => {
        // if()
    }
    renderCompletedItems = () => {
        if (this.state.bucketList.length) {
            return (
                <List>
                        {this.state.bucketList.map(listItem => (
                            listItem.completed === true ? (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity} by {listItem.author}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteBucket(listItem._id)
                                    } />
                                </ListItem>) : (<></>)
                        ))}
                    </List>
            )
        } else {
            return (
                <h3>No Results to Display</h3>
            )
        }
        // return (
        //     <>
        //         {this.state.bucketList.length ? (
        //             <List>
        //                 {this.state.bucketList.map(listItem => (
        //                     listItem.completed === true ? (
        //                         <ListItem key={listItem._id}>
        //                             <Link to={"/buckets/" + listItem._id}>
        //                                 <strong>
        //                                     {listItem.activity} by {listItem.author}
        //                                 </strong>
        //                             </Link>
        //                             <DeleteBtn onClick={() => this.deleteBucket(listItem._id)
        //                             } />
        //                         </ListItem>) : (<h3>No completed items, you suck, get out!</h3>)
        //                 ))}
        //             </List>
        //         ) : (
        //                 <h3>No Results to Display</h3>
        //             )}
        //     </>
        // )
    }

    renderIncompleteItems = () => {
        if (this.state.bucketList.length) {
            return (
                <List>
                        {this.state.bucketList.map(listItem => (
                            listItem.completed === false ? (
                                <ListItem key={listItem._id}>
                                    <Link to={"/buckets/" + listItem._id}>
                                        <strong>
                                            {listItem.activity} by {listItem.author}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteBucket(listItem._id)
                                    } />
                                </ListItem>) : (<></>)
                        ))}
                    </List>
            )
        } else {
            return (
                <h3>No Results to Display</h3>
            )
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron className="bg-info">
                            <h1 className="display-4 text-light">To Do Bucket Activities</h1>
                        </Jumbotron>
                        {this.renderIncompleteItems()}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron className="bg-info">
                            <h1 className="display-4 text-light">Completed Bucket Activities</h1>
                        </Jumbotron>
                        {this.renderCompletedItems()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Buckets;