import React from 'react';
import Link from 'next/link';
import Header from '../../components/layout/header'
import Layout from '../../components/layout/layout';
import { Button } from 'reactstrap';

export default () => {
  return (
    <div>
        <Header/>
        <Layout title={ 'Next.js + Express' }>
          <div className='container'>
            <div className='jumbotron'>
              <h1>Next.js + Express</h1>
              <p>A simple app using Spotify API</p>
              <p>
                <Link href='/code/detail'><a className='btn btn-primary btn-lg' role='button'>Use it !</a></Link>
                <Button color="danger">Danger!</Button>
              </p>
            </div>
          </div>
        </Layout>
    </div>
    
  );
}