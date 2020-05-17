import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

export default function TeacherTable(props) {
  const {data} = props;
  // console.log(data[0]);
  return (
    <ScrollView style={styles.table}>
      <View style={{...styles.tableRow, ...styles.tableHeaderRow}}>
        <View style={styles.counterColumn}>
          <Text style={styles.counterColumnText}>ردیف</Text>
        </View>
        <View style={styles.semesterColumn}>
          <Text style={styles.semesterColumnText}>نام ترم</Text>
        </View>
        <View style={styles.dorehsColumn}>
          <Text style={styles.dorehsColumnText}>تعداد دوره</Text>
        </View>
        <View style={styles.usersColumn}>
          <Text style={styles.usersColumnText}>تعداد کاربر</Text>
        </View>
      </View>
      {data.map((row, index) => (
        <View key={index} style={styles.tableRow}>
          <View style={styles.counterColumn}>
            <Text style={styles.counterColumnText}>{index + 1}</Text>
          </View>
          <View style={styles.semesterColumn}>
            <Text style={styles.semesterColumnText}>{row.term_title}</Text>
          </View>
          <View style={styles.dorehsColumn}>
            <Text style={styles.dorehsColumnText}>{row.dorehs}</Text>
          </View>
          <View style={styles.usersColumn}>
            <Text style={styles.usersColumnText}>{row.users}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: 16,
  },
  tableRow: {
    flexDirection: 'row-reverse',
    width: '90%',
    justifyContent: 'space-between',
  },
  tableHeaderRow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.0,
    shadowRadius: 1.14,

    elevation: 16,
    borderColor: '#ccccff',
    // eslint-disable-next-line no-dupe-keys
    shadowColor: '#ccc',
    backgroundColor: '#FFF',
    // eslint-disable-next-line no-dupe-keys
    shadowOpacity: 3,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: '#e7a70e',

    borderRadius: 0,
  },
  counterColumn: {
    width: 52,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterColumnText: {
    textAlign: 'center',
    fontFamily: 'IRANSansMobile',
  },
  semesterColumn: {
    paddingLeft: 2,
    paddingRight: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  semesterColumnText: {
    textAlign: 'center',
    fontFamily: 'IRANSansMobile',
  },
  dorehsColumn: {
    paddingLeft: 2,
    paddingRight: 2,
    width: 60,
  },
  dorehsColumnText: {
    textAlign: 'center',
    fontFamily: 'IRANSansMobile',
  },
  usersColumn: {
    paddingLeft: 2,
    paddingRight: 2,
    width: 60,
  },
  usersColumnText: {
    textAlign: 'center',
    fontFamily: 'IRANSansMobile',
  },
});
