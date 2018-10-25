import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';
import { connect } from 'react-redux';
import Layout from '../../components/layout/layout';

class index extends React.Component {
  constructor (props) {
      super(props);
      
      this.state = {  
      }
  }
  
  render () {
      return (
          <div className="wrap">
              <Layout>
                  <Container>
                      <Row>
                          <Col sm="12" md={{ size: 6, offset: 3 }} className="login-box">
                              <Form>
                                  <FormGroup>
                                      <Label for="exampleEmail">Email</Label>
                                      <Input type="email" name="email" id="email" placeholder="email@activity.com" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="examplePassword">Password</Label>
                                      <Input type="password" name="password" id="password" placeholder="password placeholder" />
                                  </FormGroup>
                                  <FormGroup check>
                                      <Label check>
                                          <Input type="checkbox" />{' '}
                                          Remember
                                      </Label>
                                  </FormGroup>
                                  <Button color="secondary" size="lg" block>로그인</Button>
                              </Form>
                          </Col>
                      </Row>
                  </Container>
              </Layout>
          </div>
      )
  }
}



let mapStateToProps = (state) => {
  return {
      isLogin : state.LoginHandler.isLogin
  };
}

index = connect(mapStateToProps)(index);

export default index;