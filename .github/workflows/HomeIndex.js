import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
 Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {requestAPI} from './config/fetch';
import {checkMelliCode} from './config/checkMelliCode';
import TeacherTable from './TeacherTable';

const styles = StyleSheet.create({
  rootView1: {
    marginLeft: 8,
    marginTop: 8,
  },
  rootView2: {
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'IRANSansMobile',
  },
  rootView3: {
    color: '#fff',
    marginLeft: 18,
    marginTop: 20,
    fontFamily: 'IRANSansMobile',
  },
  rootView4: {
    alignSelf: 'center',
    color: '#5cb85c',
    fontFamily: 'IRANSansMobile',
  },
  rootView5: {
    alignSelf: 'center',
    color: '#e7a70e',
    fontFamily: 'IRANSansMobile',
  },
  rootView6: {color: '#333', fontFamily: 'IRANSansMobile'},
  rootView7: {
    paddingRight: 10,
    paddingLeft: 10,
    alignSelf: 'center',
    width: '80%',
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ccc',
    marginTop: 10,
    fontFamily: 'IRANSansMobile',
  },
  rootView8: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootView9: {
    paddingRight: 10,
    paddingLeft: 10,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ccc',
    marginTop: 10,
    fontFamily: 'IRANSansMobile',
  },
  rootView: {
    fontFamily: 'IRANSansMobile',
    backgroundColor: '#f1ffff',
    flexDirection: 'column',
    flex: 11,
  },
  HeaderView: {
    //paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#24b0b0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BodyView: {
    padding: 30,
    flex: 8,
    backgroundColor: '#f1ffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  FooterView: {padding: 10, flex: 2, backgroundColor: '#f1ffff'},
  BtnView: {padding: 10, flex: 1},
  TxtView: {padding: 10, flexDirection: 'row', justifyContent: 'space-between'},
  RightHeaderView: {width: '30%'},
  CenterHeaderView: {justifyContent: 'center', width: 100},
  LeftHeaderView: {width: '25%'},
  formView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    borderColor: '#ccccff',
    // eslint-disable-next-line no-dupe-keys
    shadowColor: '#ccc',
    backgroundColor: '#FFF',
    // eslint-disable-next-line no-dupe-keys
    shadowOpacity: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    height: 400,
    alignItems: 'center',
  },
  invalidIdNumberText: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    top: 50,
  },
  idNumberTextField: {
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    paddingRight: 6,
    paddingLeft: 6,
    marginBottom: 6,
  },
  listContainer: {
    width: '80%',
  },
  tableRow: {
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  tableColumn: {
    width: '50%',
  },
});
export default function HomeIndex() {
  const [idNumber, setIdNumber] = useState('0000000035');
  const [tableData, setTableData] = useState([]);
  const [newData, setnewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idNumberIsValid, setIdNumberIsValid] = useState(true);
  //const [result, setResult] = useState([]);
  const [search, setsearch] = useState(null);

  const doSearch = text => {
    setTableData(newData);
    if (text && text.length > 0) {
      setTableData(xxx => {
        return tableData.filter(item => {
          if (item.term_title.indexOf(text) > 0) {
            return true;
          }
        });
      });
    }
  };

  const submitClicked = () => {
    if (checkMelliCode(idNumber)) {
      setIdNumberIsValid(true);
      const URL = 'https://ec.nahad.ir/index.php/service';
      const data = {
        usernameNet: 'matna62',
        passwordNet: '!@#matna',
        type: '1060',
        username: idNumber,
      };
      setLoading(true);
      requestAPI(URL, 'POST', data).then(response => {
        setLoading(false);
        const {responseCode, json} = response;
        if (responseCode === 200) {
          setTableData(json.result);
          setnewData(json.result);
          setLoading(false);
        } else {
        }
      });
    } else {
      setIdNumberIsValid(false);
    }
  };

  const GovahiClicked = () => {
    if (checkMelliCode(idNumber)) {
      setIdNumberIsValid(true);
      const URL = 'https://ec.nahad.ir/index.php/service';
      const data = {
        usernameNet: 'matna62',
        passwordNet: '!@#matna',
        type: '1061',
        username: idNumber,
      };
      setLoading(true);
      requestAPI(URL, 'POST', data).then(response => {
        // eslint-disable-next-line no-unused-vars
        const {responseCode, json} = response;
        setLoading(false);
        if (responseCode === 200) {
          // WebBrowser.openBrowserAsync(json.url).then(result => {
          //   setResult(result);
          // });
        } else {
        }
      });
    } else {
      setIdNumberIsValid(false);
    }
  };

  return (
    <View style={styles.rootView}>
      <View style={styles.HeaderView}>
        <View style={styles.RightHeaderView}>
          {/* <Image source={LegoImage} style={styles.rootView1} /> */}
        </View>
      </View>

      <View style={styles.BodyView}>
        {/* <Image source={CenterImage} style={styles.rootView1} /> */}
        <Text style={styles.rootView4}>
          {'    '}
          کاربر گرامی سلام؛{' '}
        </Text>
        <Text style={styles.rootView5}>
          به بخش گزارش گیری اساتید معارف سامانه آموزش مجازی دانشگاهیان خوش
          آمدید.
        </Text>
        <View style={styles.formView}>
          <View>
            <Text style={styles.rootView6}>
              کاربر گرامی کد ملی خود را وارد نمایید.
            </Text>
          </View>
          <View>
            <TextInput
              maxLength={10}
              clearTextOnFocus={true}
              autoFocus={true}
              placeholder="ورود کد ملی..."
              keyboardType="number-pad"
              onChangeText={text => setIdNumber(text)}
              value={idNumber}
              style={styles.rootView7}
            />
            {!idNumberIsValid ? (
              <Text style={styles.invalidIdNumberText}>کدملی معتبر نیست.</Text>
            ) : null}
          </View>
          <View style={styles.rootView8}>
            <View style={styles.TxtView}>
              <View style={styles.BtnView}>
                <Button
                  color="#5cb85c"
                  title="بررسی اطلاعات"
                  onPress={submitClicked}
                  disabled={loading}
                />
              </View>
              <View style={styles.BtnView}>
                <Button
                  color="#e7a70e"
                  title="دریافت گواهی "
                  onPress={GovahiClicked}
                  disabled={loading}
                />
              </View>
            </View>

            {loading && <ActivityIndicator size="large" color="#00ff00" />}
          </View>

          <TextInput
            clearTextOnFocus={true}
            autoFocus={true}
            placeholder="جستجو"
            onChangeText={text => {
              setsearch(text);
              doSearch(text);
            }}
            value={search}
            style={styles.rootView9}
          />

          {tableData && tableData.length > 0 && (
            <TeacherTable data={tableData} />
          )}
        </View>
      </View>
    </View>
  );
}
