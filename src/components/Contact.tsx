import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import { IContact } from '../models';
import ContactMenu from './ContactMenu';

interface IContactProps {
  contact: IContact;
}

const Contact: React.FC<IContactProps> = ({ contact }) => {

  return (
    <Grid container m={1} mx={'auto'} maxWidth={500} justifyContent={'center'} alignItems={'center'} border={1}>
      <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }} item>
        <Avatar
          sx={{ width: 70, height: 70 }}
          src={contact?.image}
          alt={contact?.firstName}
        />
      </Grid>
      <Grid xs={8} item>
        <Grid container>
          <Grid xs={10} item>
            <Typography variant={'h6'}>{contact?.firstName + ' ' + contact?.lastName}</Typography>
          </Grid>
          <Grid xs={2} item>
            <ContactMenu contact={contact} />
          </Grid>
          <Grid xs={10} item>
            <Typography>{contact?.phone}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
