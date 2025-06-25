type productImagesType = {
  public_id: string;
  secure_url: string;
};

type rawProductImagesType = {
    file:File,
    secure_url:string
}

export type FormStateShape = {
  productName: string;
  productImages: (rawProductImagesType | productImagesType)[];
  price: string;
  productCategory: string;
  description: string;
};

type FormFieldKey = keyof FormStateShape;

type FormControlConfig = {
  id: number;
  label: string;
  name: FormFieldKey;
  placeholder?: string;
};

export const formControls: FormControlConfig[] = [
    {
        id:0,
        label:"Product Name",
        placeholder:'Enter product name',
        name:"productName"
    },
    {
        id:1,
        label:"Product Images",
        placeholder:'You can upload more than one images',
        name:'productImages'
    },
    {
        id:2,
        label:"Price",
        placeholder:'Price',
        name:'price'
    },
    {
        id:3,
        label:"Product Category",
        name:'productCategory'
    },
    {
        id:4,
        label:"Description",
        placeholder:"Description",
        name:'description'
    }
]