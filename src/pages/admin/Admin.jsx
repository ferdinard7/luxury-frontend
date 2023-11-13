import { useState } from "react";
import "./admin.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import axios from "axios";

function Admin() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;

    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const properties = { ...inputs, img: downloadURL };
          try {
            const res = await axios.post('https://luxury-backend.onrender.com/api/add-property', properties);

            console.log('Property created:', res.data);

          } catch (err) {

            console.log('Error creating property:', err);
          }

        });

      }
    );
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Add New Property</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Property Title</label>
          <input name="title" type="text" placeholder="Title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="price" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>property Age</label>
          <input name="age" type="text" placeholder="Age" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Location</label>
          <input name="location" type="text" placeholder="the-Location" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="4-Bedroom Duplex" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Pool</label>
          <input name="pool" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Parking space</label>
          <input name="parking_space" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>GYM</label>
          <input name="gym" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <input name="type" type="text" placeholder="Apartment, Duplex or the rest" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Security</label>
          <input name="security" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Dining Capacity</label>
          <input name="dining" type="text" placeholder="amount in numbers" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Temple</label>
          <input name="temple" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>3rd Party</label>
          <input name="party" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Allivator</label>
          <input name="alliavtor" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>CCTV</label>
          <input name="cctv" type="text" placeholder="yes or No" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Water Supply</label>
          <input name="water" type="text" placeholder="Ground fllor/ Tank" onChange={handleChange} />
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  )
}


export default Admin;