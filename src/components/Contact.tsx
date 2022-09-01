import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { IContact } from '../models';
import ContactMenu from './ContactMenu';

interface IContactProps {
  contact: IContact;
}

const Contact: React.FC<IContactProps> = ({ contact }) => {

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '500px',
        marginX: 'auto',
        mb: '20px',
        alignItems: 'center',
      }}
    >
      <CardMedia>
        <Avatar
          sx={{ width: 70, height: 70 }}
          src={contact?.image}
          alt={`${contact?.firstName} avatar`}
        />
      </CardMedia>
      <CardContent>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={200} flexDirection={'column'}>
          <Typography variant={'h6'} mb={1}>
            {contact?.firstName + ' ' + contact?.lastName}
          </Typography>
          <Typography>{contact?.phone}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <ContactMenu contact={contact} />
      </CardActions>
    </Card>
  );
};

export default Contact;
