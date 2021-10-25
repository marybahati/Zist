import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonCounters = styled(Button)`
   background: inherit !important;
   font-size : 40px !important;
   padding : 0 !important;
   color : black !important;
`;
const CountColumn = styled(Grid.Column)`
   margin: auto 0 !important;
   background: #FFF !important;
   padding: 18px 30px !important;
   text-align: center !important;
`;
const CounterColumn = styled(Grid.Column)`
   text-align: center !important;
   margin: auto 0 !important;
`;
export const Counter = (props) => {
    const [count, setCount] = React.useState(6500);

    const increment = () => setCount(count => count + 100);

    const decrement = () => {
        if (count == 0) {
            setCount(0)
        } else {
            setCount(count => count - 100)
        }
    }

    return (

        <Grid.Row>
            <CounterColumn width={2} >
                <ButtonCounters onClick={decrement}> - </ButtonCounters>
            </CounterColumn>
            <CountColumn width={3} >
                <h2> Ksh.{count} </h2>
            </CountColumn>
            <CounterColumn width={2}>
                <ButtonCounters onClick={increment}> + </ButtonCounters>
            </CounterColumn>
        </Grid.Row>

    )
}