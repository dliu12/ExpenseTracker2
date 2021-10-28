import React from 'react';

export const AddModalContext = React.createContext();

const AddModalContextProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const contextValue = React.useMemo(
    () => ({
      openModal,
      setOpenModal,
      isSubmitting,
      setIsSubmitting,
    }),
    [openModal, isSubmitting]
  );

  return (
    <AddModalContext.Provider value={contextValue}>
      {children}
    </AddModalContext.Provider>
  );
};

export default AddModalContextProvider;
