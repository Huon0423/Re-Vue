import React, { useCallback } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

const LoginModal = () => {

    return (
        <div>
            <Button className="nav-link" href="#loginModal" data-toggle="modal" >로그인</Button>

            <Modal >
                <Modal.Header>
                    <Modal.Title>버튼</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div class="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
                        <label htmlFor="pwd">Password</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button class="btn btn-primary" id="loginBtn">Login</Button>
                    <Button class="btn btn-danger" data-bs-dismiss="modal">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default LoginModal;