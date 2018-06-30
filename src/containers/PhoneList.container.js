import React from 'react';
import { connect } from 'react-redux';
// Components
import { Link } from 'react-router-dom';
import { Button, Glyphicon, Col } from 'react-bootstrap';

const styles = {
    phones: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    phone: {
        width: '100%',
        marginLeft: 10,
        marginRight: 10
    },
    phoneImage: {
        height: '25vh',
    }
};

const PhoneListContainer = ({ phones }) => (
    <div style={styles.phones}>
        {
            phones.map(phone =>
                <Col xs={12} md={3} key={phone.id}>
                    <div className="thumbnail" style={styles.phone}>
                        <img style={styles.phoneImage} src={phone.image} alt={phone.model} />
                        <Button style={{ 'padding': '10px', 'backgroundColor': phone.colorHex }}></Button>
                        <div className="caption">
                            <h4>{phone.model}</h4>
                            <Link to={phone.id}>
                                <Button bsStyle="primary" role="button" disabled={phone.inventory <= 0}>${phone.price} <Glyphicon glyph="shopping-cart" /></Button>
                            </Link>
                        </div>
                    </div>
                </Col>
            )
        }
    </div>
);

const mapStateToProps = state => {
    return { phones: state.phonesReducer.phones };
};

export default connect(mapStateToProps)(PhoneListContainer);
