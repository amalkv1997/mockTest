

import React from "react";
import { Component } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import ModalComponent from "../components/ItemDetailsModal";
import SearchContainer from "../components/SearchContainer";
import { ScreenWidth } from "../helper/screenHelper";
import { fetchDetail, FetchList, searchLabour } from "../Store/actions";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    //does whatever stuff
    this.state = {
      filter: '',
      isVisible:false
    }
    this.SearchChange = this.SearchChange.bind(this);

  }

  componentDidMount() {
    this.props.FetchList()
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={()=>this.openModal()}>
        <View style={styles.itemContent}>
          <Text style={styles.title1}>{item.name}</Text>
          <Text style={styles.title2}>Quantity - {item.quantity}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  SearchChange = (val) => {
    this.setState({
      ...this.state,
      filter: val
    })
    if (val.length >= 8) {
      this.props.searchLabours(val)
    }
    else if(val.length==0){
      this.props.FetchList()
    }
  }

  closeModal=()=>{this.setState({...this.state,isVisible:false})}

  openModal=()=>{
    this.setState({...this.state,isVisible:true})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.LabourData.isFetching ?
          <ActivityIndicator />
          :
          <View style={{
            marginLeft: 10,
            marginRight: 10
          }}>
            <SearchContainer SearchChange={(val) => this.SearchChange(val)} filter={this.state.filter} />
            <FlatList
              data={this.props.LabourData.data.labours}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        }
        <ModalComponent isVisible={this.state.isVisible} closeModal={()=>this.closeModal()} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#c5ecf0',
    alignSelf: 'center',
    width: (ScreenWidth) - 40,
    borderRadius: 10,
    height: 80,
    marginTop: 10,
    justifyContent: 'center'
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  title2: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#fff'
  },
  itemContent: {
    marginLeft: 20
  }
})

function mapDispatchToProps(dispatch) {
  return {
    FetchList: () => dispatch(FetchList()),
    searchLabours: (searchStr) => dispatch(searchLabour(searchStr)),
    FetchDetail:()=>dispatch(fetchDetail())
  }
}


function mapStateToProps(state) {
  return {
    LabourData: state.LabourData
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
