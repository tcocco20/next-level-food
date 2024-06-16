"use client";
import { ChangeEvent, useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  name: string;
  label: string;
}

const ImagePicker = ({ name, label }: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInput = useRef<HTMLInputElement>(null);
  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      if (!file) {
        setPickedImage(null);
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = () => {
        const dataUrl = fileReader.result as string;
        setPickedImage(dataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
