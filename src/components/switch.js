import Form from 'react-bootstrap/Form';
import { useTheme } from '../contexts/ThemeContext';
function Switch() {

let theme = useTheme();  
  return (
    <Form className='switchbuton' onClick={()=>theme.setTheme(theme.theme === "Dark" ? "Light" : "Dark")}>
      <Form.Check type="switch" id="custom-switch" label={theme.theme === "Dark" ? "Light": "Dark"}/>
    </Form>
  );
}

export default Switch;