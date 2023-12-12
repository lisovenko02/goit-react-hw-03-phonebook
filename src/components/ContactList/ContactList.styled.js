import styled from 'styled-components';

export const List = styled.ul`
    width: 400px;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    border: 1px solid rgba(161, 165, 161, 0.397);
    border-radius: 8px;
`

export const ListItems = styled.li`
    display: flex;
    grid-gap: 10px;
    align-items: center;
`

export const Contact = styled.p`
    width: 300px;
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const Button = styled.button`
    display: block;
    margin-left: auto;

    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;

    cursor: pointer;

    font-size: 12px;
    font-weight: 700;

    border-radius: 10px;
    border: 1px solid rgba(161, 165, 161, 0.397);
`