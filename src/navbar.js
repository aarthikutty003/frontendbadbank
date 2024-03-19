import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';



export default function MyNavbar(){
  let style={color:'#fff'}
    
  return (<>
  <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#303A52'}}>
        {/* <Container> */}
          <Navbar.Brand href="#" style={style}><h3>Bad Bank</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='mb-3 justify-content-end'>
        <Nav sticky="top"> 
        <Nav.Item>
        <Nav.Link href="/" style={style}>Home</Nav.Link>
      </Nav.Item>      
      <Nav.Item>
        <Nav.Link href="#/create" style={style}>Create</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/deposit" style={style}>Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/withdraw" style={style}>Withdraw</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/alldata" style={style}>AllData</Nav.Link>
      </Nav.Item>
    </Nav>
    </Navbar.Collapse>
    {/* </Container>*/}
  </Navbar> 
  
      
    </>
  );
}