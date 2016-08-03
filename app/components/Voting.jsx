import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

export default function Voting(props) {
    return (
        <div>
            {props.winner ?
            <Winner ref="winner" winner={props.winner} /> :
            <Vote {...props} />}
        </div>
    );
}
