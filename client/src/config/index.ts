import { LayoutDashboard } from 'lucide-react';

export const backendUrl = "http://localhost:5000/api";


export const registrationFormController = [
    {
        name: "userName",
        label: "User Name",
        placeholder: "Enter your name",
        componentType: "input",
        type: "text",
        required: true
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
        required: true
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
        required: true
    }
]

export const loginFormController = [
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
        required: true
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
        required: true
    }
]

export const registerFormInputs = {
    userName: "",
    email: "",
    password: ""
}

export const loginFormInputs = {
    email: "",
    password: ""
}


export const addProductsFromElement = [
    {
        name: "title",
        label: "Title",
        placeholder: "Enter product title",
        componentType: "input",
        type: "text",
        required: true
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Enter product description",
        componentType: "textarea",
        type: "text",
    },
    {
        name: "category",
        label: "Category",
        placeholder: "Select product category",
        componentType: "select",
        type: "text",
        options: [
            { value: "men", label: "Men" },
            { value: "women", label: "Women" },
            { value: "kids", label: " Kids" },
            { value: "Sports & Outdoors", label: "Sports & Outdoors" },
            { value: "electronics", label: "Electronics" },
            { value: "footwear", label: "Footwear" },
        ]
    },
    {
        name: "brand",
        label: "Brand",
        placeholder: "Select product brand",
        componentType: "select",
        type: "text",
        required: true,
        options: [
            { value: "Nike", label: "Nike" },
            { value: "Adidas", label: "Adidas" },
            { value: "Puma", label: "Puma" },
            { value: "Reebok", label: "Reebok" },
            { value: "Vans", label: "Vans" },
            { value: "Converse", label: "Converse" },
        ]
    },
    {
        name: "price",
        label: "Price",
        placeholder: "Enter product price",
        componentType: "input",
        type: "number",
        required: true
    },
    {
        name: "salePrice",
        label: "Sale Price",
        placeholder: "Enter product sale price",
        componentType: "input",
        type: "number",
        required: true
    },
    {
        name: "totalStock",
        label: "Total Stock",
        placeholder: "Enter product total stock",
        componentType: "input",
        type: "number",
        required: true
    }
]

export const addFormInputs = {
    image:"",
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: ""
}