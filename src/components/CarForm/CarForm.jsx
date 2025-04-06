import React from 'react';
import FormInput from "../FormInput/FormInput";
import FormTextArea from "../FormTextArea/FormTextArea";
import FormFileInput from "../FormFileInput/FormFileInput";
import styles from "./CarFormModule.css"

const CarForm = ({ formData, setFormData, handleSubmit }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormInput label="Marka" type="text" name="marka" value={formData.marka} onChange={handleChange} required />
            <FormInput label="Model" type="text" name="model" value={formData.model} onChange={handleChange} required />
            <FormInput label="Year" type="number" name="year" value={formData.year} onChange={handleChange} required />
            <FormInput label="Price" type="number" name="price" value={formData.price} onChange={handleChange} required />
            <FormInput label="Mileage" type="number" name="mileage" value={formData.mileage} onChange={handleChange} required />
            <FormInput label="body_type" type="text" name="body_type" value={formData.body_type} onChange={handleChange} required />
            <FormInput label="Transmission" type="text" name="transmission" value={formData.transmission} onChange={handleChange} required />
            <FormTextArea label="Description" name="description" value={formData.description} onChange={handleChange} required />
            <FormFileInput label="Image" name="image" onChange={handleImageChange} accept="image/*" />
            <FormInput label="phoneNumber" type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            <button className={styles.submitButton} type="submit">Create Post</button>
        </form>
    );
};

export default CarForm;
