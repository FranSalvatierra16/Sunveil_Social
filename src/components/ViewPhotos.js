import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Image } from 'react-native';
import { Text } from 'react-native-svg';

export const PhotoViewer = ({ photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={photos[currentPhotoIndex]} style={{ width: 100, height: 100 }} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <TouchableOpacity onPress={handlePrevPhoto} disabled={currentPhotoIndex === 0}>
                    <Text>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextPhoto} disabled={currentPhotoIndex === photos.length - 1}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

