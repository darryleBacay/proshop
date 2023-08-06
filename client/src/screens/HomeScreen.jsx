import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
	return (
		<React.Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product, index) => {
                    const sumIndex = index + 1
					return (
						<Col sm={12} md={6} lg={4} xl={3} key={sumIndex}>
                            <Product product={product}/>
						</Col>
					);
				})}
			</Row>
		</React.Fragment>
	);
};

export default HomeScreen;
