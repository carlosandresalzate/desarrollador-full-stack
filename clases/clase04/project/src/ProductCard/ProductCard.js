import React, { Component } from 'react';
import './ProductCard.css';

/**
 * Props: title - img - description
 * */
class ProductCard extends Component {

    render() {
        return (
            <div className="ProductCard">
                {this.props.preview ? <span className="ProductPreviewSpan">Preview</span> : null}
                <img align="middle" className="ProductCardImage" alt={this.props.title} src={this.props.img}/>
                <div className="ProductCardContainer">
                    <span>{this.props.description}</span>
                </div>
                {this.props.handleClick ? <button className="danger" onClick={this.props.handleClick}>Delete</button> : null}
            </div>
        );
    }
}

export default ProductCard;