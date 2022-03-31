import React from 'react';
import styled from 'styled-components';

function Drawer() {
    return (
        <DrawerContainer>
            <ul>
                <LogoContainer>
                    <a href="##">
                        <span>
                            <img
                                src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
                                alt="logo"
                                width="36"
                                height="36"
                            />
                        </span>
                        <h2>Vuexy</h2>
                    </a>
                    <div>
                        <input type="checkbox" />
                    </div>
                </LogoContainer>
                <DrawerContent>
                    <a href="##" className="add-arrow">
                        <span className="content-icon">
                            <i className="fi fi-rr-home"></i>
                        </span>
                        <span>Dashboards</span>
                        <span className="number">2</span>
                    </a>
                </DrawerContent>

                <TextTruncate>
                    APPS & PAGES
                </TextTruncate>

                <DrawerContent>
                    <a href="##">
                        <span className="content-icon">
                            <i className="fi fi-rr-envelope"></i>
                        </span>
                        <span>Email</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##">
                        <span className="content-icon">
                            <i className="fi fi-rr-comment-alt"></i>
                        </span>
                        <span>Chat</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##">
                        <span className="content-icon">
                            <i className="fi fi-rr-list-check"></i>
                        </span>
                        <span>Todo</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##">
                        <span className="content-icon">
                            <i className="fi fi-rr-calendar"></i>
                        </span>
                        <span>Calender</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##" className="add-arrow">
                        <span className="content-icon">
                            <i className="fi fi-rr-document"></i>
                        </span>
                        <span>Invoice</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##" className="add-arrow">
                        <span className="content-icon">
                            <i className="fi fi-rr-shopping-cart"></i>
                        </span>
                        <span>eCommerce</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##" className="add-arrow">
                        <span className="content-icon">
                            <i className="fi fi-rr-user"></i>
                        </span>
                        <span>Users</span>
                    </a>
                </DrawerContent>
                <DrawerContent>
                    <a href="##" className="add-arrow">
                        <span className="content-icon">
                            <i className="fi fi-rr-file"></i>
                        </span>
                        <span>Pages</span>
                    </a>
                </DrawerContent>
                <TextTruncate>
                    USER INTERFACE
                </TextTruncate>
            </ul>
        </DrawerContainer>
    )
}

export default Drawer

const DrawerContainer = styled.section`
    background-color: #eee;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    background: #fff;
    ul {
        padding-left: 1px;
    }
`
const LogoContainer = styled.li`
    display: flex;
    align-items: center;
    padding: 1.35rem 1rem .3rem 1.64rem;
    a {
        display: flex;
        flex: 1;
        align-items: center;
        h2 {
            margin: 0;
            padding-left: 1rem;
            color: #7367f0;
            letter-spacing: .01rem;
            font-size: 1.3rem;
            line-height: 1.5;
            display: inline-block;
        }
    }
`
const DrawerContent = styled.li`
    display: flex;
    align-items: center;
    transition: padding 0.3s ease-in;
    a {
        display: flex;
        align-items: center;
        flex: 1;
        padding: 10px 15px 10px 15px;
        line-height: 1.45;
        margin: 0 15px;
        color: #625f6e8a;
        span {
            &.content-icon {
                display: flex;
                margin-right: 13px;
                color: #625f6e;
            }
            &.number {
                background: #ff9f4347;
                color: #ff9f43;
                border-radius: 50%;
                padding: 8px;
                font-size: 12px;
                width: 7px;
                height: 7px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 5px;
            }
        }
    }
    position: relative;
    & > .add-arrow::after {
        content: '';
        position: absolute;
        height: 1.1rem;
        width: 1.1rem;
        display: inline-block;
        top: 14px;
        -webkit-transition: all .2s ease-out;
        transition: all .2s ease-out;
        right: 20px;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 1.1rem;
    }
    &:hover {
        padding-left: 10px;
        transition: padding 0.4s ease-in;
    }
    &.active {
        background: #eee;
    }
`
const TextTruncate = styled.li`
    margin: 2.286rem 0 .8rem 2.2rem;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: .01rem;
    text-align: left;
    color: #625f6e8a;
`