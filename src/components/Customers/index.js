// import _ from "lodash";

import styles from "./styles";

import React, { useState } from "react";
import {
  Container,
  Content,
  Input,
  List,
  ListItem,
  Text,
  Icon,
  Right,
  Left,
  Body,
} from "native-base";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Smith", email: "smith@gmail.com" },
    { id: 3, name: "Alice Johnson", email: "Alice@gmail.com" },
    { id: 4, name: "Bob Brown", email: "Bob@gmail.com" },
    //   { id: 1, name: 'alex Doe' ,email: "john@gmail.com" },
    //   { id: 2, name: 'flex Smith' ,email: "smith@gmail.com" },
    //   { id: 3, name: 'ben Johnson',email: "Alice@gmail.com" },
    //   { id: 4, name: 'juan Brown',email: "Bob@gmail.com" },
    // Add more customers as needed
  ]);

  const matchingResults = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCustomers = [...matchingResults];

  return (
    <Container>
      <Content padder>
        <Input
          placeholder="Search for customers..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{
            marginBottom: 16,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
            border: 1
          }}
        />
        <List>
          {filteredCustomers.map((customer) => (
            <ListItem
              style={styles.CustomerName.BodyCustomer}
              key={customer.id}
            >
              <Body style={styles.BodyCustomer}>
                <Left>
                  <Text style={styles.NameEmail}>{customer.name}</Text>
                  <Text style={styles.NameEmail}>{customer.email}</Text>
                </Left>

                <Right>
                  <Text>
                    <Icon name="arrow-forward" />{" "}
                  </Text>
                </Right>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Customers;