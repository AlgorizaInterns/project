import React, { useEffect, useState } from 'react';
import InputRange from 'react-input-range';
import styled from 'styled-components';
import 'react-input-range/lib/css/index.css';
import data from '../../store-demo-data.json';
import StarsRating from 'stars-rating';

function Product() {
    const [range, setRange] = useState({min: 0, max: 100,})
    const [numberProductFive, setNumberProductFive] = useState(0)
    const [numberProductFour, setNumberProductFour] = useState(0)
    const [numberProductThree, setNumberProductThree] = useState(0)
    const [numberProductTwo, setNumberProductTwo] = useState(0)

    const productsRatingFourToFive = data?.products?.filter(product => (
        product.rating >= 4 ? true : false
    ))
    const productsRatingFourToThree = data?.products?.filter(product => (
        product.rating <= 3 && product.rating > 2.1 ? true : false
    ))
    const productsRatingThreeToTwo = data?.products?.filter(product => (
        product.rating <= 2 && product.rating > 1.1 ? true : false
    ))
    const productsRatingOne = data?.products?.filter(product => (
        product.rating <= 1 ? true : false
    ))
    useEffect(() => {
        setNumberProductFive(productsRatingFourToFive.length)
        setNumberProductFour(productsRatingFourToThree.length)
        setNumberProductThree(productsRatingThreeToTwo.length)
        setNumberProductTwo(productsRatingOne.length)
    },[])

    return (
        <Content>
            <Sidebar>
                <div className="checkbox">
                    <h6>Multi Range</h6>
                    <label htmlFor="all">
                        <input type="radio" name="price" id="all" />
                        <span>All</span>
                    </label>
                    <label htmlFor="less-than-ten">
                        <input type="radio" name="price" id="less-than-ten" />
                        <span>&#60;=$10</span>
                    </label>
                    <label htmlFor="ten-to-hundred">
                        <input type="radio" name="price" id="ten-to-hundred" />
                        <span>$10-$100</span>
                    </label>
                    <label htmlFor="hundred-to-five-hundred">
                        <input type="radio" name="price" id="hundred-to-five-hundred" />
                        <span>$100-$500</span>
                    </label>
                    <label htmlFor="five-hundred">
                        <input type="radio" name="price" id="five-hundred" />
                        <span>&#62;=$500</span>
                    </label>
                </div>
                <div className="range">
                    <h6>Price Range</h6>
                    <form action="">
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            formatLabel={value => `${value}`}
                            value={range}
                            onChange={value => setRange(value)}
                            // onChangeComplete={value => console.log(value)}
                        />
                    </form>
                </div>
                <div className="checkbox">
                    <h6>Categories</h6>
                    <label htmlFor="Appliances">
                        <input type="radio" name="Categories" id="Appliances" />
                        <span>Appliances</span>
                    </label>
                    <label htmlFor="Audio">
                        <input type="radio" name="Categories" id="Audio" />
                        <span>Audio</span>
                    </label>
                    <label htmlFor="Cameras-Camcorders">
                        <input type="radio" name="Categories" id="Cameras-Camcorders" />
                        <span>Cameras & Camcorders</span>
                    </label>
                    <label htmlFor="Car-Electronics-GPS">
                        <input type="radio" name="Categories" id="Car-Electronics-GPS" />
                        <span>Car Electronics & GPS</span>
                    </label>
                    <label htmlFor="Cell-Phones">
                        <input type="radio" name="Categories" id="Cell-Phones" />
                        <span>Cell Phones</span>
                    </label>
                    <label htmlFor="Computers-Tablets">
                        <input type="radio" name="Categories" id="Computers-Tablets" />
                        <span>Computers & Tablets</span>
                    </label>
                    <label htmlFor="Health-Fitness-Beauty">
                        <input type="radio" name="Categories" id="Health-Fitness-Beauty" />
                        <span>Health, Fitness & Beauty</span>
                    </label>
                    <label htmlFor="Office-School-Supplies">
                        <input type="radio" name="Categories" id="Office-School-Supplies" />
                        <span>Office & School Supplies</span>
                    </label>
                    <label htmlFor="TV-Home-Theater">
                        <input type="radio" name="Categories" id="TV-Home-Theater" />
                        <span>TV & Home Theater</span>
                    </label>
                    <label htmlFor="Video-Games">
                        <input type="radio" name="Categories" id="Video-Games" />
                        <span>Video Games</span>
                    </label>
                </div>
                <div className="checkbox">
                    <h6>Brands</h6>
                    <label htmlFor="Insignia™">
                        <input type="radio" name="Brands" id="Insignia™" />
                        <span>Insignia™</span>
                    </label>
                    <label htmlFor="Samsung">
                        <input type="radio" name="Brands" id="Samsung" />
                        <span>Samsung</span>
                    </label>
                    <label htmlFor="Metra">
                        <input type="radio" name="Brands" id="Metra" />
                        <span>Metra</span>
                    </label>
                    <label htmlFor="HP">
                        <input type="radio" name="Brands" id="HP" />
                        <span>HP</span>
                    </label>
                    <label htmlFor="Apple">
                        <input type="radio" name="Brands" id="Apple" />
                        <span>Apple</span>
                    </label>
                    <label htmlFor="GE">
                        <input type="radio" name="Brands" id="GE" />
                        <span>GE</span>
                    </label>
                    <label htmlFor="Sony">
                        <input type="radio" name="Brands" id="Sony" />
                        <span>Sony</span>
                    </label>
                    <label htmlFor="Incipio">
                        <input type="radio" name="Brands" id="Incipio" />
                        <span>Incipio</span>
                    </label>
                    <label htmlFor="KitchenAid">
                        <input type="radio" name="Brands" id="KitchenAid" />
                        <span>KitchenAid</span>
                    </label>
                    <label htmlFor="Whirlpool">
                        <input type="radio" name="Brands" id="Whirlpool" />
                        <span>Whirlpool</span>
                    </label>
                </div>
                <div className="rating">
                    <h6>Ratings</h6>
                    <div className="rating-content">
                        <div className="rating-content-star">
                            <StarsRating
                                edit={false}
                                count={5}
                                value={4}
                                size={24}
                                color1={'#ddd'}
                                color2={'#FF9F43'}
                            />
                            <a href="##">&#38; up</a>
                        </div>

                        <span className="rating-content-text">{numberProductFive}</span>
                    </div>
                    <div className="rating-content">
                        <div className="rating-content-star">
                            <StarsRating
                                edit={false}
                                count={5}
                                value={3}
                                size={24}
                                color1={'#ddd'}
                                color2={'#FF9F43'}
                            />
                            <a href="##">&#38; up</a>
                        </div>
                        <span className="rating-content-text">{numberProductFour}</span>
                    </div>
                    <div className="rating-content">
                        <div className="rating-content-star">
                            <StarsRating
                                edit={false}
                                count={5}
                                value={2}
                                size={24}
                                color1={'#ddd'}
                                color2={'#FF9F43'}
                            />
                            <a href="##">&#38; up</a>
                        </div>
                        <span className="rating-content-text">{numberProductThree}</span>
                    </div>
                    <div className="rating-content">
                        <div className="rating-content-star">
                            <StarsRating
                                edit={false}
                                count={5}
                                value={1}
                                size={24}
                                color1={'#ddd'}
                                color2={'#FF9F43'}
                            />
                            <a href="##">&#38; up</a>
                        </div>
                        <span className="rating-content-text">{numberProductTwo}</span>
                    </div>
                </div>
            </Sidebar>
            <Products>
                <div className="row">
                {data.products.map((product) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={product.img} className="card-img-top" alt={product.name} />
                                <div className="card-body rating-price">
                                    <div>
                                        <StarsRating
                                            edit={false}
                                            count={5}
                                            value={product.rating}
                                            size={24}
                                            color1={'#ddd'}
                                            color2={'#FF9F43'}
                                        />
                                    </div>
                                    <div>
                                        <span className="card-text">${product.price}</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                </div>
                                <div className="card-body card-body-new">
                                    <a href="##" className="card-link-wishlist"><i className="fi fi-rr-heart"></i>Wishlist</a>
                                    <a href="##" className="card-link-cart"><i className="fi fi-rr-shopping-cart"></i>View In Cart</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </Products>
        </Content>
    )
}

export default Product

const Content = styled.section`
    display: flex;
`
const Sidebar = styled.div`
    width: 25%;
    padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    .checkbox {
        h6 {
            padding-top: 10px;
            font-size: 14px;
        }
        label {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            input {
                margin-right: 10px;
            }
            input[type="radio"] {
                -webkit-appearance: none;
                appearance: none;
                background-color: #fff;
                width: 1.15em;
                height: 1.15em;
                border: 1px solid #ddd;
                border-radius: 50%;
                transform: translateY(-0.075em);
                display: grid;
                place-content: center;
                &::before {
                    content: "";
                    width: 0.65em;
                    height: 0.65em;
                    border-radius: 50%;
                    transform: scale(0);
                    transition: 120ms transform ease-in-out;
                }
                &:checked::before {
                    width: 1.15em;
                    height: 1.15em;
                    background-color: #7D72F1;
                    transform: scale(1);
                }
            }
            span {
                line-height: 1.45;
                font-weight: 400;
                color: #a4a4a4;
            }
        }
    }
    .range {
        position: relative;
        h6 {
            padding-top: 10px;
            font-size: 14px;
        }
        form {
            margin: 20px auto;
            width: 98%;
        }
    }
    .rating {
        .rating-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-star {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                a {
                    color: #7367f0;
                    font-size: 12.5px;
                }
            }
        }
        /* justify-content: center; */
    }
`
const Products = styled.div`
    width: calc(100% - (25%));
    margin-top: 10px;
    margin-left: 10px;
    .card {
        margin-bottom: 2rem;
        border-radius: 5px;
        border: none;
        box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
        transition: all 0.7s ease;
        .card-body {
            .card-title,
            .card-text {
                white-space: nowrap;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &.rating-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 16px;
                .card-text {
                    text-align: right;
                }
            }
            .card-link {
                &-wishlist,
                &-cart {
                    padding: 10px;
                    width: 50%;
                    font-size: 13px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid transparent;
                    transition: all 0.4s ease;
                    i {
                        margin-right: 5px;
                    }
                }
                &-wishlist {
                    background: #f3f2f2;
                    color: #000;
                    border-bottom-left-radius: 5px;
                    :hover {
                        background: #ddd;
                        transition: all 0.4s ease;
                    }
                }
                &-cart {
                    background: #7367f0;
                    color: #fff;
                    border-bottom-right-radius: 5px;
                    &:hover {
                        box-shadow: 0 8px 25px -8px #7367f0;
                        transition: all 0.4s ease;
                    }
                }
            }
            &.card-body-new {
                padding: 0;
                display: flex;
            }
        }
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
        }
    }
`