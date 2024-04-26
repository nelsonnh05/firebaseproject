import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap'; // Importer les composants de formulaire de React Bootstrap
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      // Réinitialiser le formulaire après l'inscription réussie
      setEmail('');
      setPassword('');
      setError(null);
    } catch (err) {
      console.error('Error creating user:', err.message);
      setError(err.message);
    }
  };

  return (
    <Form onSubmit={handleSignup}>
      <Form.Group controlId="formEmail">
        <FloatingLabel controlId="floatingInput" label="Email address">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FloatingLabel>
      </Form.Group>
      {error && <div className="text-danger">{error}</div>}
      <Button variant="primary" type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignupForm;
