import { Button, Text } from "@react-native-material/core";
import { FlatList, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./BudgetStyles";
import { RemoveBudget } from "../redux/actions";

const BudgetList = ({navigation}) => {
    const data = useSelector(state => state);
    const budgetListItems = data.rootReducer.items;
    console.log(budgetListItems.items)
    const dispatch = useDispatch();

    const removeBudgetItem = (item) => {
        console.log(item)
        const itemIndex = budgetListItems.items.indexOf(item);
        if (itemIndex > -1) {
        dispatch(RemoveBudget(item));
        } else {
        alert(`${item.itemName} is not in the Todo List`);
}
    }

    const renderBudgetList = () => {
        console.log("this is working")
        return(
            <View style={styles.budgetView}>
            {budgetListItems.map((item) => {
                return(
                <View style={styles.budgetList}>
                    <Text>{item.itemName}</Text>
                    <Text></Text>
                </View>
                );
            })}
            </View>
    )}
    return(
        <View style={styles.main}>
            <Text>Budget List</Text>
            <Text style={{alignSelf: 'stretch', paddingLeft: 40}}>
                List of Items : 
            </Text>
            {/* {renderBudgetList()} */}
            
                <FlatList
                    data={budgetListItems.items}
                    renderItem={({item}) => (
                    <View style={styles.budgetView}>
                    <View style={styles.todoList}>
                    <Text>{item.itemName}</Text>
                    <Text>{item.plannedAmount}</Text>
                    <Text>{item.actualAmount}</Text>
                    </View>
                    <Button name="clear-list" title="Clear List" onPress={() => removeBudgetItem(item)} />
                    </View>
                    )}
                />
            {/* {budgetListItems.items.map((item) => {
                return(
                <View style={styles.budgetList}>
                    <Text>{item.itemName}</Text>
                    <Text>{item.plannedAmount}</Text>
                    <Text>{item.actualAmount}</Text>
                </View>
                );
            })} */}
            </View>
        
    )
}
export default BudgetList;