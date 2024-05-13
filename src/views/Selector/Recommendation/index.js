import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Recommendation(props) {
  const navigate = useNavigate();

  const isFromPayment = localStorage.getItem('fromPayment');
  
  useEffect(() => {
    if (isFromPayment === 'recommendation') {
      navigate('/layout/recommendation/generate');
      localStorage.removeItem('fromPayment');
    } else {
      navigate('/layout/recommendation/edit');
    }
  }, []);
  return <div>{props.children}</div>;
}
