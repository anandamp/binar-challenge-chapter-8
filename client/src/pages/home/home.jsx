import React from 'react'
import Navbar from '../../components/navbar/navbar'
import FormCreate from "../../components/formCreate/formCreate"
import UserDetail from "../../components/userDetail/userDetail"

function Home({
    getUserList,
    handleAddUser,
    handleSubmit,
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
        <Navbar />
        <UserDetail
          addedUser={addedUser}
          getCurrentUser={getCurrentUser}
          getIsEditing={getIsEditing}
          getSetIsEditing={getSetIsEditing}
          handleEditCurrentUser={handleEditCurrentUser}
          handleEditClick={handleEditClick}
          handleUpdateUser={handleUpdateUser}
          handleEditFormSubmit={handleEditFormSubmit}
        />
        <FormCreate
          getUserList={getUserList}
          handleAddUser={handleAddUser}
          handleSubmit={handleSubmit}
        />
      </>
    );
}

export default Home