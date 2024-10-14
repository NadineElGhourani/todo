import React,{useState} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './Components/Task';

export default function App() {
  //Keyboard.dismiss();
  const [task, setTask] =useState();
  const [taskItems, setTaskItems] =useState([]);
  

  const handleAddTask = ()=>{
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

const completeTask=(index) =>{
let itemsCopy = [...taskItems];
itemsCopy.splice(index, 1);
setTaskItems(itemsCopy);
}

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectiontittle}>Today's Tasks</Text>
        <View style={styles.items}>
        {
            taskItems.map((item, index) => (
            
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                <Task text={item} />
                </TouchableOpacity>
             
            ))
        }
 
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A7766',
    opacity:0.75,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectiontittle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },

  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    padding:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#ffffff',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
  },
  addWrapper: {
    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,
  },
  addText: {},
});


