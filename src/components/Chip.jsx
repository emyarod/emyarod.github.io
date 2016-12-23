import React from 'react';

export default function Chip(props) {
  return (
    props.avatar
      ? (
        <div className="chip chip--avatar">
          <div className="avatar">
            <div className="avatar-icon">
              {props.avatarContent}
            </div>
          </div>
          <span className="chip__content ms">{props.children}</span>
        </div>
      )
      : (
        <div className="chip">
          <span className="chip__content ms">{props.children}</span>
        </div>
      )
  );
}

Chip.PropTypes = {
  avatar: React.PropTypes.boolean,
  avatarContent: React.PropTypes.string,
  children: React.PropTypes.string,
};
