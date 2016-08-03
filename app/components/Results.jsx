import React from 'react';
import Winner from './Winner';

export default function Results(props) {
    return (
        props.winner ?
        <Winner ref="winner" winner={props.winner} /> :
        <div className="results">
            <div className="tally">
                {props.pair.map(entry =>
                    <div key={entry} className="entry">
                        <h1>{entry}</h1>
                        <div className="voteCount">
                            {getVotes(props.tally, entry)}
                        </div>
                    </div>
                )}
            </div>
            <div className="management">
                <button ref="next" className="next" onClick={props.next}>
                    Next
                </button>
            </div>
        </div>
    );
}

function getVotes(tally, entry) {
    if (tally && tally.has(entry)) {
        return tally.get(entry);
    }
    return 0;
}
