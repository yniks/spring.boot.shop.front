import React, { Component } from "react"
import Image from '../components/Image.js';
import Color from '../components/color.js';
import InTheBox from '../components/InTheBox';
import Specs from '../components/Specs';
import Accordian from '../components/accord';
import RamStorage from "./Size.js";
class ProductView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="product-view">
            <div id="product-view-main">
                <div id="product-view-left">
                    <Image images={this.props.product.images} />
                    {/* //</div></Image>//["https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/719CgfLcqNL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg"]} /> */}
                </div>
                <div id="product-view-right">
                    <h1>{this.props.product.name}</h1>
                    <p>{this.props.product.shortDetail}</p>
                    <b><p>{this.props.product.specialOffer}</p></b>
                    <Color colors={["red", "blue", "black", "purple", "pink"]} color="blue" />
                    <RamStorage specs={[{ ram: "8 GB", storage: "32 GB" }, { ram: "4 GB", storage: "32 GB" }, { ram: "16 GB", storage: "64 GB" }]}></RamStorage>
                </div>
            </div>
            <div id="product-view-descriptive">
                <Accordian text={this.props.product.description} initial="closed" header="Technical Specification" />
                <Accordian text={this.props.product.description} initial="closed" header="What's in the Box" />
            </div>
        </div>)
    }
}
export default ProductView