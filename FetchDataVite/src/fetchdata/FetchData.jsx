import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fetch-style.css';

const FetchData = () => {
  const [fetchingData, setFetchingData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);  // Log the fetched data
        setFetchingData(data);
      })
      .catch((err) => setError(err));
  }, []);

  // Display an error message if there is an error during fetching
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <h3 className='text-center'>Fetch Data Fetch Method</h3>
      </div>
      <hr />
      <ul className='container'>
        <div className="row">
          {fetchingData.map((todo) => (
            <div className="col-xl-4 col-md-6 col-12 styled" key={todo.id}>
              <div className="card bg-danger text-white">
                <div className="card-body">
                  <h5 className="card-title">{todo.title}</h5> {/* Display todo title */}
                  <p className="card-text">ID: {todo.id}</p> {/* Display todo ID */}
                  <p className="card-text">Completed: {todo.completed.toString()}</p> {/* Display todo completion status */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default FetchData;
