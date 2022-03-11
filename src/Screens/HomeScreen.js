import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['', 'Aktivititet', 'Tid', 'Tilmeldt?'],
  tableTitle: ['Tir 1/6', 'Ons 2/6', 'Ons 3/6', 'Fre 5/6'],
  tableData: [
    ['Emdrup Svøm', ' 16.00', 'Frameld'],
    ['Valby Svøm', ' 12.00', 'Frameld'],
    ['Valby Svøm ', '18.00', 'Frameld'],
    ['Hillerød Svøm', '21.00', 'Frameld'],
  ],
};

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, align: "center"}}> Mine Bookings</Text>
      <Text></Text>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'lightgrey' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1 },
  row: { height: 28 },
  text: { textAlign: 'center' },
});