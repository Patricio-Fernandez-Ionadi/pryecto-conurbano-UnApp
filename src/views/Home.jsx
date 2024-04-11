import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				App inicializada con redux y react-navigation
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
	},
})

export default Home
