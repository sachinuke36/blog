export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#151515",
    borderColor: "#fff",
    color: "#fff",
    width: '50vw' ,
    boxShadow: "none",
    "&:hover": { borderColor: "#fff" },
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#1f1f1f",
    color: "#fff",
    width: '50vw'
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#333" : "#1f1f1f",
    color: "#fff",
    cursor: "pointer",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "#333",
    color: "#fff",
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: "#ccc",
    ':hover': {
      backgroundColor: '#555',
      color: 'white',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#aaa",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
};
