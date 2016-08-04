import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default function Winner(props) {
    return (
        <div className="winner">
            Winner is {props.winner}!
        </div>
    );
}

Winner.mixins = [PureRenderMixin];
