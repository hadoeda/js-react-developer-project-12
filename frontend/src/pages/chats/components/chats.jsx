import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import fetchChats from '../thunks/fetchChats';
import Channels from './channels';
import Messages from './messages';

export default function Chats() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChats());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container className="h-100">
            <Row className="h-100">
                <Col className="h-100" md="2">
                    <Channels />
                </Col>
                <Col className="h-100">
                    <Messages />
                </Col>
            </Row>
        </Container>
    );
}