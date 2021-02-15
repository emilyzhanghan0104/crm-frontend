import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './entry.styles.css';
import { LoginForm, Reset } from '../../components';

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState('login');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const switchFormType = (formType) => {
    setFormType(formType);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    console.log('code has been sent to your email');
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formType === 'login' && (
          <LoginForm
            email={email}
            password={password}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            switchFormType={switchFormType}
          />
        )}
        {formType === 'reset' && (
          <Reset
            email={email}
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            switchFormType={switchFormType}
          />
        )}
      </Jumbotron>
    </div>
  );
};

export default Entry;
