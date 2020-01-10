import React from 'react'

class Contact extends React.Component {
  constructor () {
    super();
    this.state = {
      name: "",
      email: "",
      message: "message"
    };
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  handleChange(evt) {
    this.setState( {[evt.target.name] : evt.target.value} )
  }

  reset() {
    
    setTimeout( () => { 
      this.setState({
        name: "",
        email: "",
        message: ""
      }); 
    }, 1000);
  }

  render () {
    const { name, email, message } = this.state
    return (
      <div>
        <h2>Get In Touch</h2>
        <p>Feel free to reach out to me for any projects, opportunities, anything you might need help with, or just about anything!</p>
        <div className="row">
            <div className="8u 12u$(small)">
                <div>
                  <div className="row uniform 50%">
    <div className="6u 12u$(xsmall)"><input value={name} type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange}/></div>
    <div className="6u 12u$(xsmall)"><input value={email} type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange}/></div>
    <div className="12u"><textarea value={message} name="message" id="message" placeholder="Message" rows="4" onChange={this.handleChange}></textarea></div>
                    <ul className="actions">
                      <li onClick={this.reset}><a className="send-message" href={`mailto:gab.atienza@gmail.com?subject=Hi, this is ${name}&body=${message}%0D%0Afrom:%20${email}`}>Send Message</a></li>
                    </ul>
                  </div>
                </div>
                   
            </div>
            <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                    <li>
                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                        
                        Cupertino, CA 95014<br />
                        United States
                    </li>
                    <li>
                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                        +1 818-519-9254
                    </li>
                    <li>
                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                        <a href={`mailto:gab.atienza@gmail.com`}>gab.atienza@gmail.com!</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact
