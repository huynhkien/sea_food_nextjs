"use client";
import { useState, useEffect } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { apiCreateCategory } from '../../../../api/category';
import {Loading} from "../../../../components/Index"
import { useDispatch } from 'react-redux';
import {showModal} from '../../../../store/app/appSlice'


const Page = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();


  const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
  
      if (selectedFile) {
        formData.append('image', selectedFile);
      }
      dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
      const response = await apiCreateCategory(formData);
      dispatch(showModal({ isShowModal: false, modalChildren: null }));
      if (response.success) {
        toast.success(response.mes);
        setSelectedFile(null);
        reset();
      } else {
        toast.error(response.mes);
      }
  };
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.onerror = () => {
        toast.error('Failed to read the file. Please try again.');
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  }, [selectedFile]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <div className="header mb-3">
        <div className="left">
          <h1>Category</h1>
        </div>
      </div>
      <div className="wg-box bg-light">
        <form className="form-new-product form-style-1" onSubmit={handleSubmit(onSubmit)} >
          <fieldset className="name">
            <div className="body-title">Category Name:</div>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              name="categoryName"
              placeholder="Enter name"
              {...register('name', { required: 'Category name is required' })}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </fieldset>
          <fieldset>
            <div className="body-title">Upload images:</div>
            <div className="upload-image flex-grow">
              <div className="item up-load">
                <label className="uploadfile" htmlFor="myFile">
                  <span className="icon">
                    <FaCloudUploadAlt color="blue" />
                  </span>
                  <span className="body-text">Drop your images here or click to browse</span>
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    onChange={handleFileChange}
                  />
                </label>
                {imagePreview ? <img className='img-upload' src={imagePreview} alt="Preview" /> : null}
              </div>
            </div>
          </fieldset>
          <fieldset className="category">
            <div className="body-title">Description:</div>
            <textarea
              className="form-control"
              rows={10}
              id="description"
              name="description"
              placeholder="Enter description"
              {...register('description', { required: 'Description is required' })}
            ></textarea>
            {errors.description && <small>{errors.description.message}</small>}
          </fieldset>
          <div className="d-flex justify-content-center text-center">
            <button type="submit" name="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
