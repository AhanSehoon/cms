import { connect } from 'react-redux';

class index extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render () {
        return (
            <div>
                
                <p>Hello Next.js</p>
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