// import React from 'react';
import {List, Datagrid, TextField, ReferenceField, DateField} from "react-admin";

const AuthorList = () =>(
    <List>
        <Datagrid>
            <TextField source="title" label="Titre" />
            <ReferenceField source="authorId" reference="users" label="Auteur">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedAt" label="Date de publication" />
            <TextField source="status" label="Statut" />
        </Datagrid>
    </List>
);
export default AuthorList;
