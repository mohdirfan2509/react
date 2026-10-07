import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        url: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohdirfan2509");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  render() {
    const { name, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name :{name}</h1>
        <h2>URL : {url}</h2>
      </div>
    );
  }
}

export default UserClass;
