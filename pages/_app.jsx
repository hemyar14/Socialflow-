import Layout from '../components/Layout';
import GlobalToast from '../components/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalToast />
      <Component {...pageProps} />
    </Layout>
  );
}
