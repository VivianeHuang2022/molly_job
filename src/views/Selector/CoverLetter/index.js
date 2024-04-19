import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function CoverLetter(props) {
  const navigate = useNavigate();
  const isFromPayment = localStorage.getItem('fromPayment');

  useEffect(() => {
    if (isFromPayment === 'coverletter') {
      navigate('/layout/coverletter/generate');
      localStorage.removeItem('fromPayment');
    } else {
      navigate('/layout/coverletter/generate');
    }
  }, []);
  return <div>{props.children}</div>;
}
