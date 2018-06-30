import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import Phone from '../models/phone';

const styles = {
    phoneDetail: {
    },
}

const PhoneDetailContainer = ({ phone }) => {
    let phoneDetail;

    if (phone) {
        phoneDetail = (
            <Row className="media">
                <Col className="media-left"><img src={phone.image} /></Col>
                <Col className="media-body">
                    <h1 className="media-heading">{phone.model}</h1>
                    <Col><p>{phone.description}</p></Col>
                    <Col>Colors: <button style={{ 'padding': '10px', 'backgroundColor': phone.colorHex }}></button></Col>
                </Col>
            </Row >
        );
    }

    return (
        <div>
            {phoneDetail}
        </div>
    );
};


const mapStateToProps = (state, ownProps) => {
    const phone = state.phonesReducer.phonesHash[ownProps.match.params.id];
    return { phone };
};


export default connect(mapStateToProps)(PhoneDetailContainer);