import React from "react";

const User = ({user: {firstName = '', lastName = '', age = 0}}) => <p>{firstName}{lastName}{age}</p>

export default User