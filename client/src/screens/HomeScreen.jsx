import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productSlice";

const HomeScreen = () => {
	const { data: products, isLoading, error } = useGetProductsQuery();

	return (
		<React.Fragment>
			{isLoading ? (
				<Spinner />
			) : error ? (
				<div>{error?.data?.message || error?.error}</div>
			) : (
				<React.Fragment>
					<h1>Latest Products</h1>
					<Row>
						{products.map((product, index) => {
							const sumIndex = index + 1;
							return (
								<Col sm={12} md={6} lg={4} xl={3} key={sumIndex}>
									<Product product={product} />
								</Col>
							);
						})}
					</Row>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default HomeScreen;
