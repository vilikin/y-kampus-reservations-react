import React from 'react';
import './RoomIdentifier.css';
import classNames from 'classnames';

export const RoomIdentifier = ({code, name, reserved}) => (
    <div className={classNames("room-identifier", { reserved })}>
        <div className="code">
            {code}
        </div>
        <span className="middot">
            &middot;
        </span>
        <span className="name">
            {name}
        </span>
    </div>
);

export default RoomIdentifier;