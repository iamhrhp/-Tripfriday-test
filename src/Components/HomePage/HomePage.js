import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const resJson = res.data;
      setUsers(resJson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <p>HomePage</p>
      <div className="divBefore">
        {users.map((item) => {
          return (
            <div key={item.id} className="divAfter">
              <p>{item.name}</p>
              <div
                className="popup"
                onKeyDown={() => navigate('detailPage', { state: item })}
                onClick={() => navigate('detailPage', { state: item })}
              >
                <p>{item.name}</p>
                <p>{item.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
