import React, { useState } from 'react';
import { isTSCallSignatureDeclaration } from '@babel/types';

function Signin(props) {
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
