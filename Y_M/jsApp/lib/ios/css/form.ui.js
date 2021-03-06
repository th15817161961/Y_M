'use strict';
import React, {
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	textInputView:{
		borderColor: '#ff7e00',
	    borderStyle: 'solid',
	    borderWidth: 1,
	    marginBottom:16,
	    marginLeft: 16,
	    marginRight:16,
	    borderRadius: 4
	},
	textInput:{
		fontSize:20,
	    height: 50,
	    paddingLeft: 12,
	    paddingTop:12,
	    paddingBottom:12
	},
	touchable : {
	    height: 45,
	    marginLeft:16,
	    marginRight:16,
	    borderRadius:4,
	    marginTop: 10,
	    backgroundColor:'#ff7e00',
	    borderColor:'#ff7e00'
	},
	buttonTxt:{
		fontSize: 20,
	    textAlign: 'center',
	    marginTop: 13,
	    marginBottom: 10,
	    color:'#FFFFFF'
	}

});

module.exports = styles;