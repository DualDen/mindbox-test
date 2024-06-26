import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ChakraProvider>
       <App />
   </ChakraProvider>,
)
