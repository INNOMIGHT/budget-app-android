import {StyleSheet, Dimensions} from 'react-native';
let width = Dimensions.get('window').width;
const BudgetStyles = {
main: {
alignItems: 'center',
},
mainInput: {
    // borderWidth: 1,
    // height: 55,
    width: width * 0.9,
    padding: 10,
    margin: 10,
    marginTop: 50,
    alignItems: 'center',
    borderRadius: 9,
},
budgetList: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.8,
    height: 40,
    },
budgetView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    },
remove: {
    backgroundColor: 'cyan',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4,
    },
    };
export const styles = StyleSheet.create(BudgetStyles);