import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
export const Loading = ({ children, loading, error }) => {
    if (loading) {
        return <Spinner animation="grow" variant="danger" className='spinner'/>;
      }
      if (error) {
        return <p>{error}</p>;
      }
      return children;
}
