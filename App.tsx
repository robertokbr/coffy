import React from 'react';
import { 
  useFonts, 
  Staatliches_400Regular, 
} from '@expo-google-fonts/staatliches';
import { 
  SourceSansPro_400Regular, 
  SourceSansPro_600SemiBold 
} from '@expo-google-fonts/source-sans-pro';
import { StatusBar, View } from 'react-native';

import Load from './src/components/Load';
import StackRoutes from './src/routes/stack.routes';
import colors from './src/styles/colors';
import HooksProvider from './src/hooks';

const App: React.FC = () => {
  const [ isLoaded ] = useFonts({
    regular: SourceSansPro_400Regular,
    medium: SourceSansPro_600SemiBold,
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
        <HooksProvider>
          <StackRoutes/>
        </HooksProvider>
      </View>
    </>
  )
}

export default App;
