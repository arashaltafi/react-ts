import React, { useState } from 'react'
import { Accordion, Alert, Button, Modal, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Bootstrap = () => {
  const [showModel, setShowModel] = useState(false)
  const [show, setShow] = useState(true);

  const handleClick = (e: any) => {
    e.preventDefault()
    window.open("https://react-bootstrap.netlify.app/docs/getting-started/introduction", "_blank")
  }

  const handleShowModel = () => {
    setShowModel(true)
  }

  const handleCloseModel = () => {
    setShowModel(false)
  }

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='title py-12 no-underline'>ReactIcons</div>

      <div className='flex flex-col gap-8 items-center justify-center text-center'>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>

        <Button className='mt-16' variant="primary" onClick={handleShowModel}>Show Modal</Button>
      </div>

      <div className='flex items-end justify-center flex-grow py-16'>
        <a className='subtitle text-center hover:text-sky-500 hover:underline'
          onClick={(e) => handleClick(e)}
          href="https://react-bootstrap.netlify.app/docs/getting-started/introduction">React Bootstrap</a>
      </div>

      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={showModel} onHide={handleCloseModel}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModel}>Close</Button>
            <Button variant="primary" onClick={handleCloseModel}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Accordion defaultActiveKey="0" className='w-1/2 mx-auto pb-8'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Alert variant="success" className='w-1/2 mx-auto pb-8'>
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>

      <Alert show={show} variant="success" className='pb-8 w-1/2 mx-auto'>
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end mb-8">
          <Button className='w-1/2 mx-auto' onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button className='w-1/2 mx-auto pb-8' onClick={() => setShow(true)}>Show Alert</Button>}

      <div className='pb-8 flex flex-row items-center justify-center gap-4'>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
      <div className='pb-8 flex flex-row items-center justify-center gap-4'>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
    </div>
  )
}

export default Bootstrap