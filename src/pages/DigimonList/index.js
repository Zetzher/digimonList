import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const DigimonList = ({ navigation }) => {

    //Pau, Judith, Ventu, Ivan, Alex, Joey, Gio

    const [digimons, setDigimons] = useState([]);


    const retrieveInfo = async () => {
        const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
        const { data } = response;

        setDigimons(data)
    }

    const retrieveDigimon = async (name) => {
        const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
        const { data } = response;
        navigation.navigate('DigimonInfo', { info: data[0] })


    }

    useEffect(() => {
        retrieveInfo()
    }, []);

    //navigation
    return (
        <>

            {digimons.map(data => {
                const { img, level, name } = data;

                return (
                    <>

                        <TouchableOpacity onPress={() => {
                            retrieveDigimon(name);
                        }}><Text>{name}, {level}</Text></TouchableOpacity>
                    </>
                )
            })}
        </>
    )
}

export default DigimonList;