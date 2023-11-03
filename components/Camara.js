import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isTakingPicture, setIsTakingPicture] = useState(false);

  useEffect(() => {
    (async () => {
      // Solicitar permisos de la cámara
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef && !isTakingPicture) {
      setIsTakingPicture(true);
      const photo = await cameraRef.takePictureAsync();

      // Guardar la foto en la galería
      savePhotoToGallery(photo.uri);

      setIsTakingPicture(false);
    }
  };

  const savePhotoToGallery = async (photoUri) => {
    // Solicitar permisos para acceder a la biblioteca de medios
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      try {
        // Crear un recurso (asset) en la biblioteca de medios
        const asset = await MediaLibrary.createAssetAsync(photoUri);
        if (asset) {
          console.log('Foto guardada en la galería con éxito');
        } else {
          console.log('Error al guardar la foto en la galería');
        }
      } catch (error) {
        console.error('Error al guardar la foto en la galería:', error);
      }
    } else {
      // El usuario no otorgó los permisos, maneja este caso.
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      />
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: 'darkorange',
    borderRadius: 50,
    padding: 20,
    margin: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default CameraComponent;
