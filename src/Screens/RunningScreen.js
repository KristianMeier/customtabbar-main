import React from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import styles from '../styles.js';
import { tableContentMvp } from '../tableContentMvp.js';

tableContentMvp.tableData.pop();
tableContentMvp.tableTitle.pop();

export function RunningScreen() {

  return (
    <View style={styles.containerTable}>
      <Text style={styles.header}>This Week : Running</Text>
      <Text style={styles.header2}>Week 14</Text>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={tableContentMvp.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={{...styles.text, fontWeight: 'bold'}}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={tableContentMvp.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={{...styles.text, fontWeight: 'bold'}}
          />
          <Rows
            data={tableContentMvp.tableData}
            flexArr={[2, 1, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
      <Text style={styles.nextWeek}>Next Week</Text>
    </View>
  );
}