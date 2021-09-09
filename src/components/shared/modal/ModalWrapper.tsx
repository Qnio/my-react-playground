import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";


const  ModalWrapper: React.FC<{ onCloseModal: () => void, show: boolean }> = (props) => {


    const handleClose = () => {
        props.onCloseModal();
    };

    return (
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWrapper;
