import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

const PropTypes = React.PropTypes;

export function Voting(props) {
    return (
        <div>
            {props.winner ?
            <Winner ref="winner" winner={props.winner} /> :
            <Vote {...props} />}
        </div>
    );
}
Voting.mixins = [PureRenderMixin];

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner')
    };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
