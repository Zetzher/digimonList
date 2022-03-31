import React from 'react'
import { Text, Image } from 'react-native';

const DigimonInfo = ({ navigation, route }) => {

    const { name, level, image } = route.params.info;

    return (
        <>
            <Text>{name}</Text>
        </>
    )
}

export default DigimonInfo;
