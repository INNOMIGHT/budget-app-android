import { Text, Stack, TextInput, Button } from "@react-native-material/core";
import { View } from "react-native";
import { styles } from "./BudgetStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBudget, AddTodo } from "../redux/actions";

const Budget = ({navigation}) => {
    const [budgetItem, setBudgetItem] = useState();
    const [budgetPlanned, setBudgetPlanned] = useState();
    const [budgetActual, setBudgetActual] = useState();
    const data = useSelector(state => state);
    const allBudgetItems = data.items;
    const dispatch = useDispatch();


    const addBudgetEntry = () => {
        let finalBudgetItem = {
            "itemName": budgetItem,
            "plannedAmount": budgetPlanned,
            "actualAmount": budgetActual
        }
        if (!budgetActual || !budgetPlanned || !budgetItem){
            alert("Field cannot be empty");
        } else {
            dispatch(AddBudget(finalBudgetItem));
            setBudgetActual("")
            setBudgetItem("")
            setBudgetPlanned("")
        }
        

        // console.log(finalBudgetItem);
        console.log(data.rootReducer.items);
    }
    return(
        <View style={styles.main}>
            
            <Text variant="h4" style={styles.mainInput}>Home Budget</Text>
            <TextInput
                style={styles.mainInput}
                onChangeText={setBudgetItem}
                placeholder={'Add Your item here'}
                value={budgetItem}
            />
            <TextInput
                style={styles.mainInput}
                onChangeText={setBudgetPlanned}
                placeholder={'Add Your Planned Amount'}
                value={budgetPlanned}
            />
            <TextInput
                style={styles.mainInput}
                onChangeText={setBudgetActual}
                placeholder={'Add Your Actual Amount'}
                value={budgetActual}
            />
            <Button name="add-entry" title="Add Budget Entry" onPress={addBudgetEntry} />
            <Button name="show-items" title="Show List Page" onPress={() => {navigation.navigate('BudgetList')}} />
        </View>
    )
}

export default Budget;