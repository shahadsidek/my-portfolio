import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './project.styles.css';

export default function Projects() {
    return (
        <><h2 id="projects">My Projects</h2>
            <div className="card-container">

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/18833779/pexels-photo-18833779/free-photo-of-portfolio-text-printed-on-multicolored-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 cap" />
                    <Card.Body>
                        <Card.Title> UI/UX Portfolio </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>Javascript</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/UIUX-Portfolio">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/UIUX-Portfolio/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5989943/pexels-photo-5989943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 cap" />
                    <Card.Body>
                        <Card.Title>Resume Builder </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>Javascript</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Resume-Builder">Github</Card.Link>
                        <Card.Link href=" https://shahadsidek.github.io/Resume-Builder/">Website</Card.Link>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Street Wear Fashion Website</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/street-wear-fashion-website">Github</Card.Link>
                        <Card.Link href=" https://shahadsidek.github.io/street-wear-fashion-website/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Portfolio Project</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS JS</ListGroup.Item>
                        <ListGroup.Item>React Bootstrap</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/my-portfolio">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/my-portfolio/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Book Club Website</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/BooksnMore-website">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/BooksnMore-website/">Website</Card.Link>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Music Rolodex</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Spotify API</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/music-rolodex">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/music-rolodex/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5589903/pexels-photo-5589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Monster Rolodex</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>REST API</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/monster-rolodex">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/monster-rolodex/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Landpage Design</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/landpage-design">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/landpage-design/">Website</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 cap" />
                    <Card.Body>
                        <Card.Title>Calculator</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/CalculatorJS">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/CalculatorJS/">Website</Card.Link>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/7937002/pexels-photo-7937002.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>Smoothies Landpage Design</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Landpage-Design-smoothies">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/Landpage-Design-smoothies/">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>DashBoard</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Dashboard-Group-Project">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/Dashboard-Group-Project//">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/13051284/pexels-photo-13051284.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>Sign-Up Form </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Sign-Up-Form">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/Sign-Up-Form/">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>Interior Design Portfolio </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/interior-design-projects-portfolio">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/interior-design-projects-portfolio/">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/14936124/pexels-photo-14936124.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>Responsive Portfolio </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/HTML-CSS-Portfolio-Responsive">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/HTML-CSS-Portfolio-Responsive/">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>Sunny Side Marketing Agency Website </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Sunnyside-Marketing-Agency">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/Sunnyside-Marketing-Agency/">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600 cap" />
                    <Card.Body>
                        <Card.Title>Virtual Library Website </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>Javascript</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Library">Github</Card.Link>
                        <Card.Link href="https://shahadsidek.github.io/Library/">Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card-style">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/2398356/pexels-photo-2398356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 cap" />
                    <Card.Body>
                        <Card.Title>Movies Website </Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://github.com/shahadsidek/Movies-Responsive">Github</Card.Link>
                        <Card.Link href=" https://shahadsidek.github.io/Movies-Responsive/">Website</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
