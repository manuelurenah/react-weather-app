import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import * as actionCreators from '../src/action_creator'

export function Results(props) {
    return (props.winner
        ? <Winner ref="winner" winner={props.winner}/>
        : <div className="results">
            <div className="tally">
                {props.pair.map(entry => <div key={entry} className="entry">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                        {getVotes(props.tally, entry)}
                    </div>
                </div>)}
            </div>
            <div className="management">
                <button ref="next" className="next" onClick={props.next}>
                    Next
                </button>
            </div>
        </div>);
}

Results.mixins = [PureRenderMixin];

function getVotes(tally, entry) {
    if (tally && tally.has(entry)) {
        return tally.get(entry);
    }
    return 0;
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
