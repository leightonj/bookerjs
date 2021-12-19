import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Card from '../../components/Card';

import Loading from '../../components/Loading'

const Show = (props) => {
  const { id } = useParams();
  const [state, setState] = useState({ isLoading: true, room: {} });

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/rooms/${id}`)
    .then(res => {
      setState(prevState => ({ ...prevState, room: res.data, isLoading: false }));
    });
  }, [id]);

  // console.log(state);

  if (state.isLoading) return <Loading />;

  return (
    <Card title={state.room.name}>
      <dl className="row">
        <dt className="col-4">ID:</dt>
        <dd className="col-8">{state.room.id.$oid.substring(18)}</dd>
      </dl>
    </Card>
  );
};

export default Show;
