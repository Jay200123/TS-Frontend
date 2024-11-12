import Image from "./image";

interface Accessory {
  _id: string;
  accessory_name: string;
  price: number;
  quantity: number;
  image: Image[];
}

interface AccessoryState {
    accessories: Accessory[];
    accessory: Accessory | null;    
    loading: boolean;
    error: string | null;
    getAllAccessories: () => Promise<void>;  	
    getAccessoryById: (id: string) => Promise<void>;
    createAccessory: (formData: FormData) => Promise<void>;
    updateAccessoryById: (id: string, formData: FormData) => Promise<void>; 

}

interface AccessoryAPI {
    message: string;
    succcess: boolean,
    details: Accessory[];   
}

interface AccessoryByIdAPI {
    message: string;    
    succcess: boolean,  
    details: Accessory;	
}

interface AccessoryValues {
    accessory_name: string; 
    price: number;  
    quantity: number;   
    image: File[]; 
}

export type { 
    Accessory,
    AccessoryState,
    AccessoryAPI,
    AccessoryByIdAPI,
    AccessoryValues  
 };
