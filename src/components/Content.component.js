import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ContentComponent extends Component {
    render() {
        const { body } = this.props;
        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        {body}
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ContentComponent;