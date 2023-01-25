import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
  ) : (
    <div>
      <h2>user list</h2>
      <div>
        {userData &&
          userData.user &&
          userData.user.map((user, index) => {
            return <p key={index}>{user.name}</p>;
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
