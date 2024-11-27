import { lazy, Suspense } from 'react';
//import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
import UserProvider from './context/UserProvider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {
  const clientId = '501889431581-5sd0mop2q39cgnlv438nuu4uh5gvhdp3.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider  clientId={clientId}>
          <UserProvider>
       <AccountProvider>
       <Suspense fallback={<Loader />} />
        {/* children */}
       <Messenger />
       </AccountProvider>
       </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
