import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
 import {Link} from "react-router-dom"

const Feed = (props) => {
  return (
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Camping at Arches National Park</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardSubtitle>Posted By: Daniel Garcia</CardSubtitle>
          <CardText>Arches National Park is a national park in eastern Utah, United States. The park is adjacent to the Colorado River, north of Moab, Utah. More than 2,000 natural sandstone arches are located in the park, including the well-known Delicate Arch, as well as a variety of unique geological resources and formations. The park contains the highest density of natural arches in the world.</CardText>
          <Link to="/YourList"><Button>Add to My List</Button></Link>
          <div></div>
          <Button>Contact the Author</Button>
        </CardBody>
      </Card>
    


<Card>
  <CardImg top width="100%" src=" https://images.unsplash.com/photo-1483069125343-4ef290c07840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80(510 kB)
" alt="Card image cap" />
  <CardBody>
    <CardTitle>Learn </CardTitle>
    <CardSubtitle>Posted By: Robert Kowalski </CardSubtitle>

    <CardText></CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
    <div></div>
          <Button>Contact the Author</Button>
  </CardBody>
</Card>



<Card>
  <CardImg top width="100%" src="https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80(392 kB)
" alt="Card image cap" />
  <CardBody>
    <CardTitle>Travel To Taj Mahal</CardTitle>
    <CardSubtitle>Posted By: Daniel Garcia</CardSubtitle>
  
    <CardText>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.</CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
    <div></div>
          <Button>Contact the Author</Button>
  </CardBody>
</Card>


<Card>
  <CardImg top width="100%" src="https://images.unsplash.com/photo-1545168599-847c33ad81bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80(311 kB)" alt="Card image cap" />
  <CardBody>
    <CardTitle>Explore the World by Overlanding</CardTitle>
    <CardSubtitle>Posted BY: Robert Kowalski </CardSubtitle>
   
    <CardText>Overlanding is self-reliant overland travel to remote destinations where the journey is the principal goal.</CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
    <div></div>
          <Button>Contact the Author</Button>
  </CardBody>
</Card>

<Card>
  <CardImg top width="100%" src="https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80(285 kB)
" alt="Card image cap" />
  <CardBody>
    <CardTitle>Skydiving</CardTitle>
    <CardSubtitle>Posted By: Jesus Christ</CardSubtitle>
    <CardText></CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
  </CardBody>
</Card>

<Card>
  <CardImg top width="100%" src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2269&q=80(488 kB)

" alt="Card image cap" />
  <CardBody>
    <CardTitle>Travel to Japan </CardTitle>
    <CardSubtitle>Posted By: Robert Kowalski </CardSubtitle>
    <CardText>Japan is a sovereign island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest..</CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
    <div></div>
          <Button>Contact the Author</Button>
  </CardBody>
</Card>

<Card>
  <CardImg top width="100%" src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80

" alt="Card image cap" />
  <CardBody>
    <CardTitle>Ride Elephants In Thiland </CardTitle>
    <CardSubtitle>Posted by: Dan-Dan the Man</CardSubtitle>
    <CardText>Elephants are large mammals of the family Elephantidae and the order Proboscidea. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia.</CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
    <div></div>
          <Button>Contact the Author</Button>
  </CardBody>
</Card>

<Card>
  <CardImg top width="100%" src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80(675 kB)
" alt="Card image cap" />
  <CardBody>
    <CardTitle>Climb Mt. Everest </CardTitle>
    <CardSubtitle>Posted By: Erich</CardSubtitle>
    <CardText>Mount Everest, known in Nepali as Sagarmāthā and in Tibetan as Chomolungma, is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The international border between China and Nepal runs across its summit point.</CardText>
    <Link to="/YourList"><Button>Add to My List</Button></Link>
    <div></div>
          <Button>Contact the Author</Button>
  </CardBody>
</Card>
</CardColumns>





  )}





export default Feed