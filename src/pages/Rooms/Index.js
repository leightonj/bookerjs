import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

import Loading from '../../components/Loading'

const getRooms = (state, setState) => {
  axios.get(`http://127.0.0.1:3001/rooms`)
    .then(res => {
      setState({ ...state, rooms: res.data, isLoading: false });
    });
}

const Index = (props) => {
  const [state, setState] = useState({ isLoading: true, rooms: []});

  useEffect((state) => {
    getRooms(state, setState);
  }, []);

  // console.log(state);

  if (state.isLoading) return <Loading />;

  return (
    <Card title="Rooms">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {
          state.rooms.map(room =>
            <tr key={room.id.$oid}>
              <td>
                <Link to={`/rooms/${room.id.$oid}`}>
                  {room.id.$oid.substring(18)}
                </Link>
              </td>
              <td>{room.name}</td>
            </tr>
          )
        }
        </tbody>
      </Table>
    </Card>
  );
}

export default Index;
