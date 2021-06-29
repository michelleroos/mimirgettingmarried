import React from 'react';

const RSVPContainer = () => {

    console.log(this);
    const update = (field) => {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    const answer = () => (
        <div className="rsvp">
            <h1>RSVP here</h1>
            <form>
                <label>Friday:
                    <input type="text"
                    />
                </label>
                <label>Saturday:
                    <input type="text"
                    />
                </label>
                <label>Diet:
                    <input type="text"
                    />
                </label>
                <label>Sunday:
                    <input type="text"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
    return answer();
};

export default RSVPContainer;