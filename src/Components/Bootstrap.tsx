import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Bootstrap = () => {
  const [showModel, setShowModel] = useState(false)

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
    </div>
  )
}

export default Bootstrap