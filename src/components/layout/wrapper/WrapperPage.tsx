import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Row, Col} from "antd";

function WrapperPage() {
    return (
        <>
            <Row>
                <Col xs={24} md={{span: 12, offset: 6}}>
                    <Header />
                    <Footer />
                </Col>
            </Row>

        </>
    )
}

export default WrapperPage;