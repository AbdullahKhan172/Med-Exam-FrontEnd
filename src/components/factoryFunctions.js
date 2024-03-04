export const clearForm = ({ fields }) => {
  fields.map((el) => {
    el("");
  });
  setName("");
  setEmail("");
  setDate("");
};
