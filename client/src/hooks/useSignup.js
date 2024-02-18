import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  return async (values, onSubmitProps) => {
    // Create a new FormData object
    const formData = new FormData();
    
    // Append other form fields
    for (let key in values) {
        formData.append(key, values[key]);
    }

    // Append the profile image file
    formData.append("profile_image", values.picture);

    // Send the form data to the server
    const savedUserResponse = await fetch(
        "http://localhost:3001/signup",
        {
            method: "POST",
            body: formData,
        }
    );
    
    // Parse the response
    const savedUser = await savedUserResponse.json();
    console.log(savedUser)
    onSubmitProps.resetForm();

    if (savedUser) {
        navigate("/login")
    }
};

};

export default Signup;
