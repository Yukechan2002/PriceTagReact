import React from 'react'

const Card = (props) => {
  return (
    <div className="priceCard">
      <div className="header">
        <p>{props.user.head}</p>
        <h1>${props.user.price}/month</h1>
        <hr />
      </div>
      <div className="body">
        <div className="content">
          <i className="fa fa-check" aria-hidden="true"></i>
          <span> {props.user.users} User</span>
        </div>
        <div className="content">
          <i className="fa fa-check" aria-hidden="true"></i>
          <span> 50GB Storage</span>
        </div>
        <div className="content">
          <i className="fa fa-check" aria-hidden="true"></i>
          <span> Unlimited Public Project</span>
        </div>

        <div className="content">
          <i className="fa fa-check" aria-hidden="true"></i>
          <span> Community Access</span>
        </div>

        <div className={`content ${props.user.id == 0 ? "light-content" : ''}`}>
          {props.user.id === 0 ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-check" aria-hidden="true"></i>
          )}
          <span> Dedicated Phone Support</span>
        </div>

        <div className={`content ${props.user.id == 0 ? "light-content" : ''}`}>
          {props.user.id === 0 ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-check" aria-hidden="true"></i>
          )}
          <span> Free Subdomain</span>
        </div>

        <div className={`content ${props.user.id == 0 ? "light-content" : ''}`}>
          {props.user.id === 2 ? (
            <i className="fa fa-check" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-times" aria-hidden="true"></i>
          )}
          <span> Monthly Status Report</span>
        </div>

        <div className="btn">
          {props.user.id === 2 ? (
            <button className="button light-button">Button</button>
          ) : (
            <button className="button">Button</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card