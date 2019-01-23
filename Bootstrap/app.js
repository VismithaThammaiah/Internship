import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class App extends  React.Component {
  
state ={
  visible: true,
  isOpen: false
}

toggler(){
  this.setState({
    visible: !this.state.visible
  });
}

Modaltoggle(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}



  render(){
    return(
      

      <div>
        <div className="container">
        <h1>Hello World</h1>
        </div> 
        <Container>
            
            <Button color="secondary" onClick={this.toggler.bind(this)} >Click here</Button>
            <hr/>
            <Alert color="primary" isOpen={this.state.visible } toggle={this.toggler.bind(this)}>Hi I am Pooja.</Alert>
            <hr/>


            <Button color="primary" onClick={this.Modaltoggle.bind(this)}>Open Modal</Button>

            <Modal isOpen={this.state.isOpen}>

              <ModalHeader toggle={this.Modaltoggle.bind(this)}>Modal title</ModalHeader>

              <ModalBody>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</ModalBody>
              <ModalFooter>
                <Button color="primary">Signup</Button>
                <Button color="secondary" onClick={this.Modaltoggle.bind(this)}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </Container>
       
        <div className="container">
        <div className="jumbotron">
          <h1>Today News</h1>
            <p>Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces
Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>
          </div>
        </div>
      </div>
    );
  }
}
 export default App;