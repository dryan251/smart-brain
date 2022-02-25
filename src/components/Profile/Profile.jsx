import React, { useState } from 'react';
import './profile.css';

const Profile = ({ isProfileOpen, toggleModal, user, loadUser }) => {
  const [formInput, setFormInput] = useState({
    name: user.name,
    age: user.age,
    pet: user.pet,
  });

  const handleChange = (e) => {
    let form = { ...formInput };
    form[e.target.id] = e.target.value;
    setFormInput(form);
  };

  const onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formInput: data }),
    })
      .then((res) => {
        toggleModal();
        loadUser({ ...user, ...data });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>{formInput.name}</h1>
          <h4>{`Images submitted: ${user.entries}`}</h4>
          <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
          <hr />

          <label className="mt2 fw6" htmlFor="user-name">
            Name:
          </label>
          <input
            className="pa2  ba  w-100"
            placeholder={user.name}
            type="text"
            name="user-name"
            id="name"
            onChange={handleChange}
          />

          <label className="mt2 fw6" htmlFor="user-age">
            Age:
          </label>
          <input
            className="pa2  ba  w-100"
            placeholder={user.age}
            type="text"
            name="user-age"
            id="age"
            onChange={handleChange}
          />
          <label className="mt2 fw6" htmlFor="user-pet">
            Pet:
          </label>
          <input
            className="pa2  ba  w-100"
            placeholder={user.pet}
            type="text"
            name="user-pet"
            id="pet"
            onChange={handleChange}
          />
          <div
            className="mt4"
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
              onClick={() => onProfileUpdate(formInput)}
            >
              Save
            </button>
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-red  b--black-20"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};

export default Profile;
