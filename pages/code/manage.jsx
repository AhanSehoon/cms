import React from 'react';
import Link from 'next/link';
import Header from '../../components/layout/header'
import Layout from '../../components/layout/layout';
import { Button } from 'reactstrap';
import axios from 'axios';

class Code extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
        data : []
    }
  }

  componentDidMount() {
    let params = {
      //comCd : 0
      //comCdClassOrd : 0
    }
    this.getCodeList(params);
  }

  getCodeList = (p) => {
    const url = 'http://localhost:3000/common/code';
        axios.get(url, {
            params: p
        })
        .then(res => {
          console.log(res.data);
            //const data = res.data;
            
            
            //this.setState({ data: roots})  
        })
        .catch(function (res) {
            console.log(res);
        });
  }

  render() {
      let user = this.props.user;
      return(
        <div>
            <Header/>
            <Layout title={ 'Next.js + Express' }>
              <div>asd</div>
            </Layout>
        </div> 
      )
  }
}
export default Code;