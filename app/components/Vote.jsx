import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default function Vote(props) {
    return (
        <div className="voting">
            {props.pair.map(entry => <button key={entry} disabled={!!props.hasVoted} onClick={() => props.vote(entry)}>
                <h1>{entry}</h1>
                {hasVotedFor(props, entry)
                    ? <div className="label">Voted</div>
                    : null}
            </button>)}
        </div>
    );
}

Vote.mixins = [PureRenderMixin];

function hasVotedFor(props, entry) {
    return props.hasVoted === entry;
}
