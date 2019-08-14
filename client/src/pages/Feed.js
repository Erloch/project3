import React, { Component } from "react";
import AddBtn from "../components/AddBtn";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "./Feed.css";
import { FaCheck } from "react-icons/fa";
import Jumbotron from "./../components/Jumbotron/index";
import "./Feed.css"

class Feed extends Component {
  state = {
    bucketList: {},
    modal: false
  };

  componentDidMount() {
    API.getBucket(this.props.match.params.id)
      .then(res => this.setState({ bucketList: res.data }))
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
      <Jumbotron>
<h1>Check Out What Others Have Done!</h1>
      </Jumbotron>
      <div className="container">
        <CardColumns>
          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              maxHeight="250px"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <h3>
                Camping at Arches National Park <FaCheck style={{ color: "#04ec18" }} className="hvr-grow-shadow" />
                </h3></CardTitle>
              <CardSubtitle className="hvr-grow-shadow"><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Daniel Garcia</a> </CardSubtitle>
              <CardText>
                Arches National Park is a national park in eastern Utah, United
                States. The park is adjacent to the Colorado River, north of
                Moab, Utah. More than 2,000 natural sandstone arches are located
                in the park. 
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>
          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src=" https://images.unsplash.com/photo-1483069125343-4ef290c07840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80(510 kB)
        "
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle><h3>Learn <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" /></h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Robert Kowalski</a> </CardSubtitle>
              <CardText>
                Mount Everest, known in Nepali as Sagarmāthā and in Tibetan as
                Chomolungma, is Earth's highest mountain above sea level,
                located in the Mahalangur Himal sub-range of the Himalayas. The
                international border between China and Nepal runs across its
                summit point.
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80(392 kB)"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle> <h3>Travel To Taj Maha <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" />></h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Daniel Garcia</a> </CardSubtitle>
              <CardText>
                The Taj Mahal is an ivory-white marble mausoleum on the south
                bank of the Yamuna river in the Indian city of Agra. It was
                commissioned in 1632 by the Mughal emperor, Shah Jahan, to house
                the tomb of his favourite wife, Mumtaz Mahal.
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1545168599-847c33ad81bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80(311 kB)"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <h3>
                Explore the World by Overlanding <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" />
                </h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Robert Kowalski</a> </CardSubtitle>
              <CardText>
                Overlanding is self-reliant overland travel to remote
                destinations where the journey is the principal goal.Overlanding
                is self-reliant overland travel to remote destinations where the
                journey is the principal goal.
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80(285 kB)"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                 <h3>
                Skydiving <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" />
                </h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Jesus Christ</a> </CardSubtitle>
              <CardText>
                Mount Everest, known in Nepali as Sagarmāthā and in Tibetan as
                Chomolungma, is Earth's highest mountain above sea level,
                located in the Mahalangur Himal sub-range of the Himalayas. The
                international border between China and Nepal runs across its
                summit point.
              </CardText>
              <Link to="/YourList">
                <AddBtn />
              </Link>
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2269&q=80(488 kB)"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
              <h3>
                Travel to Japan <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" />
                </h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Robert Kowalski</a> </CardSubtitle>
              <CardText>
                Japan is a sovereign island country in East Asia. Located in the
                Pacific Ocean, it lies off the eastern coast of the Asian
                mainland and stretches from the Sea of Okhotsk in the north to
                the East China Sea and China in the southwest.. from the Sea of
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <h3>
                Ride Elephants In Thiland  <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" />
                </h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Dan The Man</a> </CardSubtitle>
              <CardText>
                Three species are currently recognised: the African bush
                elephant, the African forest elephant, and the Asian elephant.
                Elephants are scattered throughout sub-Saharan Africa, South
                Asia, and Southeast Asia.
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>

          <Card style={{ width: "18rem" }}>
            <CardImg
              style={{ height: "15rem" }}
              className="hvr-grow-shadow"
              top
              width="100%"
              src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80(675 kB)"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <h3>
                Climb Mt. Everest  <FaCheck style={{ color: "#04ec18" }}className="hvr-grow-shadow" />
                </h3></CardTitle>
              <CardSubtitle><br></br>Completed By: <a href={`mailto:${this.props.email}`}>Erich</a> </CardSubtitle>
              <CardText>
                Mount Everest, known in Nepali as Sagarmāthā and in Tibetan as
                Chomolungma, is Earth's highest mountain above sea level,
                located in the Mahalangur Himal sub-range of the Himalayas. The
                international border between China and Nepal runs across its
                summit point.
              </CardText>
              <Link to="/feed">
                <AddBtn onClick={() => alert("Added!")} />
              </Link>
              <div />
            </CardBody>
          </Card>
        </CardColumns>
      </div>
      </>
    );
  }
}

export default Feed;
