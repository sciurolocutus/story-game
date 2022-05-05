import React from 'react'

class SentenceCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ordinal: props.ordinal,
            content: props.content
        }
    }

    ellipsize(str, maxlen) {
        if (str.length > maxlen) {
            let l = Math.floor(.57 * maxlen);
            let r = Math.floor(.4 * maxlen);
            return str.substr(0, l) + '...' + str.substr(str.length - r, str.length);
        }
        return str;
    }

    render() {
        return (
            <div id={
                this.props.ordinal
            }
                className="sentenceCard"
            >
                {this.ellipsize(this.props.content, 35)}

            </div>
        )
    }
}

export default SentenceCard;
