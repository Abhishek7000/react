import React from 'react';
import useFetchData from './useFetchData'

const MyComponentb = () => {
  const {
    data,
    loading,
  } = useFetchData();

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>Doing stuff with data</h2>
        {data.map(item => (<span>{item.title}</span>))}
      </div>
    )}
    </div>
  )
}

export default MyComponentb;