import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Router from './src/Router';

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}
