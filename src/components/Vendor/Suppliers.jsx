import React, { useState } from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import addButton from './../../Assets/add.png'
import bananas from './../../Assets/bananas.png'
import strawberries from './../../Assets/strawberries.png'
import blueBerries from './../../Assets/blue-berries.png'
import DatePicker from 'react-date-picker';

const AddButton = styled(Button)`
   background: inherit !important;
   font-size : 40px !important;
   padding : 0 !important;
   color : black !important;
   margin: 0 8px !important;
`;
const EditButton = styled(Button)`
   background: inherit !important;
   font-size : 22px !important;
   padding : 0 !important;
   color : orange !important;
`;
const CenteredTextColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const Suppliers = () => {
    const [date, setDate] = useState(new Date());
    const [editDate, setEditDate] = useState(false)

    const handleDateEdit = () => {
        setEditDate(true)
    }
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}  >
                    <AddButton >
                        <Image src={addButton} />
                    </AddButton>
                </Grid.Column >
                <CenteredTextColumn width={6} >
                    <h2> Add a supplier/View Zist Suppliers </h2>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}> <h2> Business </h2> </Grid.Column>
                <CenteredTextColumn width={3}> <h2> Supplier </h2> </CenteredTextColumn>
                <CenteredTextColumn width={3}> <h2> No of items </h2> </CenteredTextColumn>
                <CenteredTextColumn width={3}> <h2> Duration/date </h2> </CenteredTextColumn>
                <CenteredTextColumn width={3}> <h2> Price </h2> </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={bananas} />
                </Grid.Column>
                <CenteredTextColumn width={3}>
                    <h3> Dave's bananas </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <h3> 50 pieces </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                   
                        <DatePicker
                            onChange={setDate}
                            value={date}
                        />
                    
                </CenteredTextColumn>
                <CenteredTextColumn width={2}> <h3> Kshs.7,000 </h3> </CenteredTextColumn>
                <CenteredTextColumn width={1}>
                    <EditButton onClick={handleDateEdit} > Edit </EditButton>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={strawberries} />
                </Grid.Column>
                <CenteredTextColumn width={3}>
                    <h3> Lucie's bananas </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <h3> 90 pieces </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <DatePicker
                        onChange={setDate}
                        value={date}
                    />
                </CenteredTextColumn>
                <CenteredTextColumn width={2}> <h3> Kshs.4,000 </h3> </CenteredTextColumn>
                <CenteredTextColumn width={1}>
                    <EditButton onClick={handleDateEdit} > Edit </EditButton>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={blueBerries} />
                </Grid.Column>
                <CenteredTextColumn width={3}>
                    <h3> Thiga's blue berries </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <h3> 50 pieces </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <DatePicker
                        onChange={setDate}
                        value={date}
                    />
                </CenteredTextColumn>
                <CenteredTextColumn width={2}> <h3> Kshs.6,000 </h3> </CenteredTextColumn>
                <CenteredTextColumn width={1}>
                    <EditButton onClick={handleDateEdit} > Edit </EditButton>
                </CenteredTextColumn>
            </Grid.Row>
        </Grid>
    )
}

export default Suppliers