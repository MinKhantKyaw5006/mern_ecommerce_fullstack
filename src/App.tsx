
import './index.css';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import { createContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// Context type
interface AppContextType {
  countryList: Country[] | undefined;
}

// Sample Country structure (based on the API)
interface Country {
  country: string;
  cities: string[];
}

// Create context with type
const Mycontext = createContext<AppContextType | null>(null);

// Create QueryClient
const queryClient = new QueryClient();

// Fetch countries function
const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/");
  const data = await response.json();
  return data.data;
};

// Component using query
const AppContent = () => {
  const {
    data: countryList,
    isSuccess,

  } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  // Log countries when fetched successfully
  useEffect(() => {
    if (isSuccess && countryList) {
      console.log("✅ Fetched Countries:", countryList);
    }
  }, [isSuccess, countryList]);

  const values: AppContextType = {
    countryList,
  };

  return (
    <Mycontext.Provider value={values}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Mycontext.Provider>
  );
};

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
export { Mycontext };
