import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1596550190504-8cd94a80b3bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Contacts
          </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default MyNavbar