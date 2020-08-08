import React from 'react'
import { Dropdown, Header, Grid, Message } from 'semantic-ui-react'
import styled from 'styled-components';
import { Chart } from './Chart'
const OrdereRows = styled(Grid.Row)`
   margin: 60px 0 20px 0 !important;
`;
const GraphColumn = styled(Grid.Column)`
   margin: ${props => props.chart ? " 20px 0 !important" : "80px 0 0 0 !important"};
   text-align: center !important;
`;
const TargetMetColumn = styled(Grid.Column)`
   text-align: center !important;
`;
const Messages = styled(Message)`
   margin: 20px 0 !important;
   font-size: 17px !important;
`;
const options = [
    {
        key: ' month',
        text: ' month',
        value: ' month',
        content: ' Month',
    },
    {
        key: ' week',
        text: ' week',
        value: ' week',
        content: ' Week',
    },
    {
        key: 'day',
        text: 'day',
        value: 'day',
        content: 'Yesterday',
    },

]

const secondOptions = [
    {
        key: 'the most recent',
        text: 'the most recent',
        value: 'the most recent',
        content: 'The Most Recent',
    },
    {
        key: 'yesterday',
        text: 'yesterday',
        value: 'yesterday',
        content: 'Yesterday',
    },
    {
        key: ' this week',
        text: ' this week',
        value: ' this week',
        content: ' This Week',
    },


]

export const Transcations = () => {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header as='h2'>
                            <Header.Content>
                                Transcations for the past {' '}
                                <Dropdown
                                    inline
                                    header='Adjust time span'
                                    options={options}
                                    defaultValue={options[0].value}
                                />
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h2'>
                            <Header.Content>
                                From   {' '}
                                <Dropdown
                                    inline
                                    header='Adjust time span'
                                    options={secondOptions}
                                    defaultValue={secondOptions[0].value}
                                />
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <OrdereRows>
                    <Grid.Column width={6}>
                        <h2> Order Number </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Order details </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Date </h2>
                    </Grid.Column>
                </OrdereRows>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <h2> 36221708 </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Kshs. 750 </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Monday 29th June 13:00 </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <h2> 36221717 </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Kshs. 500 </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Monday 29th June 18:00 </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <h2> 36221895 </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Kshs. 1700 </h2>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h2> Tuesday 30th June 07:00 </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <GraphColumn >
                        <h2> Target for the week is Ksh.6,000 </h2>
                    </GraphColumn>
                </Grid.Row>
                <Grid.Row>
                    <GraphColumn chart >
                        <Chart />
                    </GraphColumn>
                </Grid.Row>
                <Grid.Row >
                    <TargetMetColumn >
                        <h2> 49.16% of target is met </h2>
                    </TargetMetColumn>
                </Grid.Row>
                <Grid.Row>
                    <Messages >
                        <Message.Content>
                            <Message.Header>
                                Your numbers are 12% higher as compared to round this time last Week. keep up 
                                the good work!. Get to enjoy our services everyday 
                            </Message.Header>
                        </Message.Content>
                    </Messages>
                </Grid.Row>
            </Grid>

        </div>
    )
}
