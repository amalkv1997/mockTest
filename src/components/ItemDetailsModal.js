import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ScreenHeight, ScreenWidth } from '../helper/screenHelper';
import { fetchDetail } from '../Store/actions';
import CustomRatingBar from './customStarRating';
import CustomBar from './ProgressBar';
import Modal from "react-native-modal";

class ModalComponent extends Component {

    componentDidMount() {
        this.props.FetchDetail()
    }

    render() {
        console.log(this.props.LabourData.details)
        return (
            <Modal
                backdropColor="black"
                isVisible={this.props.isVisible}
                style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onBackdropPress={() => this.props.closeModal()}
            >
                {/*All views of Modal*/}
                {!this.props.LabourData.isFetching ?
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.text}>{this.props.LabourData.details ?
                                this.props.LabourData.details.name : ''}</Text>
                            <Text style={styles.textDescription}>{this.props.LabourData.details ?
                                this.props.LabourData.details.description : ''}</Text>
                            <View style={styles.subContainer}>

                                <View style={styles.textContainer}>
                                    <Text style={styles.detailQuantity1}>Quantity</Text>
                                    <Text style={styles.detailQuantity2}>-</Text>
                                    <Text style={styles.detailText3}>{this.props.LabourData.details ?
                                        this.props.LabourData.details.quantity : 0}
                                        {this.props.LabourData.details ? " " + this.props.LabourData.details.unit : ''}</Text>
                                </View>

                                <View style={styles.textContainer}>
                                    <Text style={styles.detailText1}>Start Date</Text>
                                    <Text style={styles.detailText2}>-</Text>
                                    <Text style={styles.detailText3}>{this.props.LabourData.details ?
                                        this.props.LabourData.details.startDate : 0}</Text>
                                </View>

                                <View style={styles.textContainer}>
                                    <Text style={styles.detailText1}>End Date</Text>
                                    <Text style={styles.detailText2}>-</Text>
                                    <Text style={styles.detailText3}>{this.props.LabourData.details ?
                                        this.props.LabourData.details.endtDate : 0}</Text>
                                </View>
                                <CustomBar />
                                <CustomRatingBar />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.closeModal()}
                        >
                            <Text style={{color:'#fff'}}>Approve</Text>
                        </TouchableOpacity>
                    </View> : null}
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    modal: {
        borderRadius: 16,
        width: 350,
        backgroundColor: "#fdfdfd",
        height: "100%",
        position: 'relative'
    },
    modalContainer: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    textContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
    text: {
        color: '#080808',
        fontWeight: 'bold'
    },
    textDescription: {
        marginTop: 8,
        color: '#d1d1d1'
    },
    subContainer: {
        marginTop: 10,
    },
    detailText1: {
        fontSize: 13,
        flex: .3
    },
    detailText2: {
        fontSize: 13,
        flex: .1
    },
    detailText3: {
        fontSize: 13,
    },
    detailQuantity1: {
        fontSize: 13,
        flex: .28
    },
    detailQuantity2: {
        fontSize: 13,
        flex: .1
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5fdde8",
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        bottom: 10,
        alignSelf:'center',
        width:'90%',
        borderRadius:15,
        height:50
    },
});

function mapDispatchToProps(dispatch) {
    return {
        FetchDetail: () => dispatch(fetchDetail())
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
)(ModalComponent)
