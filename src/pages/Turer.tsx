import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the type for the props expected by the TourSubmissionModal
interface TourSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define the type for the state of the form
interface TourFormState {
  description: string;
  tags: string;
  location: string;
  image: File | null;
}

const TourSubmissionModal: React.FC<TourSubmissionModalProps> = ({ isOpen, onClose }) => {
  // Initialize the state with the correct type
  const [formState, setFormState] = useState<TourFormState>({
    description: '',
    tags: '',
    location: '',
    image: null,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the form submission
    console.log(formState);
    onClose(); // Close the modal after submission
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement; // Cast to HTMLInputElement
    if (target.type === 'file') {
        setFormState((prev) => ({
            ...prev,
            image: target.files ? target.files[0] : null,
        }));
    } else {
        setFormState((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));
    }
};


  if (!isOpen) return null;

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <textarea
            name="description"
            value={formState.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Tags
          <input
            type="text"
            name="tags"
            value={formState.tags}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Google Maps Location
          <input
            type="text"
            name="location"
            value={formState.location}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Upload Image
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit Tour</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

// Define the type for the props expected by the TourItem
interface TourItemProps {
  title: string;
  description: string;
  image: string;
}

const TourItem: React.FC<TourItemProps> = ({ title, description, image }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={image} alt={title} />
  </div>
);

export { TourSubmissionModal, TourItem };
