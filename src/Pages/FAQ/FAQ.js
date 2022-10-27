import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const FAQ = () => {
    return (
        <div className='mb-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> What age does my child need to be to take lessons?</Accordion.Header>
                    <Accordion.Body>
                        The average age to start a child is six.
                        The main criteria are that the child knows his/her alphabet and can sit still for 20 minutes.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Should I bring my own instrument to lessons?</Accordion.Header>
                    <Accordion.Body>

                        Yes. You must have an instrument that you are comfortable with. <br />
                        You should bring your Instrument to your lesson each week. <br />
                        (Amps are provided for electric instruments) <br />
                        The only exceptions are with keyboard/piano and drums (you need to bring only drumsticks).

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How long will I need to take lessons?</Accordion.Header>
                    <Accordion.Body>
                        The period of time that a student is enrolled in the program varies. <br />
                        The more a person wishes to learn the longer they will take lessons. <br />
                        The basic fundamentals can take about three months to learn on average, <br />
                        however; music is a science that can be studied for a lifetime. <br />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> Do the teachers teach you to read music?</Accordion.Header>
                    <Accordion.Body>
                        Yes. You will learn to read music and some music theory.
                        Remember music is a language, just like English,
                        except the musical alphabet, goes only from A to G.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header> Do you have any other activities for students, such as recitals?</Accordion.Header>
                    <Accordion.Body>
                        From time to time we try to offer our students the opportunity to “show off”
                        and at the same time give them the experience of playing in public and with other people.
                        We have put students in local parades, had "jam Nights", recitals, and many other events.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>  I already know a little about my instrument, do I have to start at the beginning?</Accordion.Header>
                    <Accordion.Body>
                        No. Every instructor evaluates each student to determine there level of understanding,
                        and then tailors each students plan of study.
                        The most important part of taking lessons is learning to play.
                        Our instructors want you to have a good foundation to build on;
                        however, they do not want to waste your time or theirs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>  I’m not sure if the instrument I already own is good enough, how will I know?</Accordion.Header>
                    <Accordion.Body>
                        We will be more than happy to inspect your instrument
                        to see if it is suitable for instruction.
                        (For your convenience, please do this before your lessons are scheduled.)
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;