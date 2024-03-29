
import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [formations, setFormations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/formations')
            .then(response => setFormations(response.data))
            .catch(error => console.error('Erreur lors de la requête API :', error));
           
    }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });

      // Handle successful login
      console.log(response.data);
    //   return  <ul>
    //             {formations.map(formation => (
    //                 <li key={formation.codeFormation}>{formation.codeFormation}</li>
    //             ))}
    //         </ul> ;
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.response.data);
    }
  };

  return (

    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login Form</h2>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">

              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100" onClick={handleLogin}>Login</button></div>
            {/* <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
            </div> */}
          </form>
        </div>

      </div>
    </div>
  </div>
   
  );
};

export default Login;
