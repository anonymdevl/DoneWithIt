import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';

import colors from '../config/colors';

const menuItems = [
        {
            title: 'My Listings',
            Icon: {
                name: 'format-list-checkbox',
                backgroundColor: colors.primary
            }
        },

        { 
            title: 'My Messages',
            Icon: {
                name: 'email',
                backgroundColor: colors.secondary,
            }
        },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={'Mosh Hamedani'}
                    subTitle={'programmimgwithmosh@gmail.com'}
                    image={require('../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.Icon.name} backgroundColor={item.Icon.backgroundColor}/>
                            }
                        />
                    }
                />  
            </View>
            <ListItem 
                title={'Logout'}
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d'/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {   
        backgroundColor: colors.light, 
    },
    container: {
        marginVertical: 20,
    }
})

export default AccountScreen;