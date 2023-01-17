import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: ''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { topic } = steps;

        this.setState({ topic });
    }

    render() {
        const { topic } = this.state;
        console.log(topic)
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{topic.value}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class Greeter3 extends Component {
    render() {
        return (
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: `Hello maderfak ! My name is Bassy the chat bot! How can I be helpful today?.`,
                        trigger: "topic",
                        //end: true
                    },
                    {
                        id: 'topic',
                        options: [
                            {value: 'topic1', label: 'Topic 1', trigger: 8},
                            {value: 'topic2', label: 'Topic 2', trigger: 8},
                            {value: 'topic3', label: 'Topic 3', trigger: 8},
                        ]
                    },
                    {
                        id: '8',
                        options: [

                            {value: 1, label: 'Question 1', trigger: 9},
                            {value: 2, label: 'Question 2', trigger: 9},
                            {value: 3, label: 'Question 3', trigger: 9},
                        ]
                    },
                    {
                        id: 9,
                        message: "Answer",
                        trigger: 10
                    },
                    {
                        id: '10',
                        message: "Was that helpful",
                        trigger: '11'
                    },
                    {
                        id: '11',
                        options: [
                            {value: 1, label: 'Yes', trigger: '4'}, //4
                            {value: 2, label: 'No', trigger: '4'},
                        ]
                    },
                    {
                        id: '4',
                        message: "Would you like to ask me anything else?",
                        end: true

                    },
                ]}
            />
        );
    }
}

export default Greeter3;