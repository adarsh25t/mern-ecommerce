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


export const adminRoutes = [
    {
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon:','
    },
    {
        label: 'Products',
        path: '/admin/products',
        icon: 'ShoppingCart',
    },
    {
        label: 'Orders',
        path: '/admin/orders',
        icon: 'ShoppingBag',
    },
    {
        label: 'Customers',
        path: '/admin/customers',
        icon: 'Users',
    },
    {
        label: 'Features',
        path: '/admin/features',
        icon: 'Cog',
    },
]