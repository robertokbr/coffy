import React from 'react';
import { 
  RobotoSlab_500Medium, 
  RobotoSlab_400Regular, 
} from '@expo-google-fonts/roboto-slab';
import { 
  useFonts, 
  Staatliches_400Regular, 
} from '@expo-google-fonts/staatliches';
import { StatusBar, View } from 'react-native';

import Load from './src/components/Load';
import StackRoutes from './src/routes/stack.routes';
import colors from './src/styles/colors';

const App: React.FC = () => {
  const [ isLoaded ] = useFonts({
    regular: RobotoSlab_400Regular,
    medium: RobotoSlab_500Medium,
    bold: Staatliches_400Regular,
  });

  if (!isLoaded) {
    return <Load />
  }

  return (
    <>
      <StatusBar 
      backgroundColor={colors.backgroundTwo} 
      barStyle="light-content" 
      translucent
      />
      <View 
        style={{ 
          backgroundColor: colors.background, 
          flex: 1, 
        }}
      >
        <StackRoutes/>
      </View>
    </>
  )
}

export default App;
