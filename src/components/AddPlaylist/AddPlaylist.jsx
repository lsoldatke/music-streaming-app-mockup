import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AddPlaylist({onAddPlaylist}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    coverArtUrl: ''
  });

  function changeHandler(event) {
    const {name, value} = event.target;

    setFormData(previousState => ({
      ...previousState,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    onAddPlaylist(formData);
    navigate('/');
  }

  return (
    <form>

    </form>
  );
}

export default AddPlaylist;
