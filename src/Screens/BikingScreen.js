import React from 'react';
import { View, Text  } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import styles from '../styles.js';

const CONTENT = {
  tableHead: ['', 'Aktivititet', 'Tid', 'Tilmeld'],
  tableTitle: ['Tir 1/6', 'Ons 2/6', 'Ons 3/6', 'Fre 5/6', 'Fre 5/6', 'Fre 5/6', 'Fre 5/6', 'Fre 5/6', 'Fre 5/6', 'Fre 5/6'],
  tableData: [
    ['Emdrup Svøm', ' 16.00', 'Tilmeld'],
    ['Valby Svøm', ' 12.00', 'Tilmeld'],
    ['Valby Svøm ', '18.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
    ['Hillerød Svøm', '21.00', 'Tilmeld'],
  ],
};

export function BikingScreen() {
  return (
    <View style={styles.containerTable}>
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={{fontSize: 30, align: "center"}}> Ugens Cykeltræninger </Text>
      </View>
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
