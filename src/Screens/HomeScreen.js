import React from "react";
import { View, Text } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";
import styles from "../styles.js";
import { bookingContent } from "../tableContent.js";

// Her kan vi bruge det fra Typescript standard projectet. Info iet. Oppe i højre hjørne.

export function HomeScreen() {
  return (
    <View style={styles.containerTable}>
      <Text style={styles.header}>My Bookings</Text>
      <Text style={styles.header2}>Week 14</Text>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={bookingContent.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={{ ...styles.text, fontWeight: "bold" }}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={bookingContent.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={{ ...styles.text, fontWeight: "bold" }}
          />
          <Rows
            data={bookingContent.tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}
