import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import '../userDetail/userDetail.css'

function UserDetail({
  addedUser,
  getCurrentUser,
  getIsEditing,
  getSetIsEditing,
  handleEditCurrentUser,
  handleEditClick,
  handleUpdateUser,
  handleEditFormSubmit,
}) {
  return (
    <>
      <div id="players">
        <div id="player-detail" className="list-data mt-5">
          <div className="list-user container">
            <div className="row">
              {addedUser.map((user) => (
                <div className="col-3" key={user.id}>
                  <Card bg="dark" text="white">
                    <Card.Header className="title-user text-center">Player {user.id}</Card.Header>
                    <Card.Body>
                      <Card.Text>ID : {user.id} </Card.Text>
                      <Card.Text>Username : {user.username} </Card.Text>
                      <Card.Text>Email : {user.email} </Card.Text>
                      <Card.Text>Experience : {user.experience} </Card.Text>
                      <Card.Text>Level : {user.level} </Card.Text>
                      {!getIsEditing && (
                        <div className="text-center">
                          <Button
                            variant="primary"
                            onClick={() => handleEditClick(user)}
                          >
                            Edit User
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="form-edit" className="add-player mt-5 mb-5">
          <div className="container">
            <div className="row">
              {getCurrentUser.username && getIsEditing && (
                <div className="form-edit col-3">
                  <Card bg="dark" text="white">
                    <Card.Header className="text-center">Edit Player</Card.Header>
                    <Card.Body>
                      <Form onSubmit={handleEditFormSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>ID</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input your new ID"
                            name="username"
                            value={getCurrentUser.id}
                            onChange={handleEditCurrentUser}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input your new username"
                            name="username"
                            value={getCurrentUser.username}
                            onChange={handleEditCurrentUser}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input your new email"
                            name="email"
                            value={getCurrentUser.email}
                            onChange={handleEditCurrentUser}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Experience</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input your new experience"
                            name="experience"
                            value={getCurrentUser.experience}
                            onChange={handleEditCurrentUser}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Level</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input your new level"
                            name="level"
                            value={getCurrentUser.level}
                            onChange={handleEditCurrentUser}
                          />
                        </Form.Group>

                        <div className="row pt-3">
                          <div className="col offset-1">
                            <Button type="submit" variant="primary">
                              Edit Player
                            </Button>
                          </div>
                          <div className="col">
                            <Button onClick={() => getSetIsEditing(false)}>
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail