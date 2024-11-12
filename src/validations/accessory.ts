import * as yup from "yup"; 

const accessoryValidationSchema = yup.object({
    accessory_name: yup.string().required("Accessory name is required"),
    price: yup.number().required("Price is required"),
    quantity: yup.number().required("Quantity is required"),
    image: yup.array().min(1, "At least one image is required"),
  });

  export default accessoryValidationSchema;

