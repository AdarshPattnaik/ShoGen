import React from 'react'
import { Link } from 'react-router-dom';

export default function PageNavigation ({title}) {
  return (
    <>
        <div className="text-start pg-navigate my-3 ps-4 text-capitalize">
            <Link
                className="pg-home"
                to="/">Home</Link>/{title}
        </div>
    </>
  );
};