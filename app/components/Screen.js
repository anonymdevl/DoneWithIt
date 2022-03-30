import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   
})

export default Screen;