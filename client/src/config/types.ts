import { RootState } from "@/store/store";
import React from "react";


export interface FormField {
    name: string;
    label: string;
    placeholder: string;
    componentType: string;
    type: string;
    required?: boolean;
    options?: SelectOption[]
}

export interface SelectOption {
    value: string, 
    label: string | number
}

export interface RegisterInputs {
    userName?: string,
    email: string,
    password: string
}

export interface LoginInputs {
    email: string,
    password: string
}

export interface FormController {
    formControlls: FormField[],
    formData: any,
    setFormData: (data: any) => void,
    onSumitText: string,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    loading?: boolean
}

export interface User {
    _id: string;
    role: string;
    email: string;
  }

export interface RegisterResponse {
    success: boolean;
    message: string;
    user?: User | null 
}

export interface userSlicetype {
    isAuthenticated: boolean, 
    isLoading: boolean, 
    user: User | null | undefined
}

export interface AsyncThunkConfig {
    state: RootState;
    rejectValue: string; 
};

export interface AuthRouteType {
    isAuthenticated: boolean, 
    user: User | null | undefined, 
    children: React.ReactNode
}

export interface ProductItemProps {
    image: string;    
    title: string;   
    rating: number; 
    sellPrice: number;  
    price: number; 
}

export interface StarRatingProps {
    rating: number;       
    maxRating?: number;  
    size?: number;    
    color?: string;  
}

export interface CategoryHeaderProps {
    title: string;
    link: string;
    urltext: string;
}

export interface ResponseProps {
    success: boolean;
    message: string;
}

export interface AddProductProps {
    image?:File,
    title: string,
    description: string,
    category: string,
    brand: string,
    price: number,
    salePrice: number,
    totalStock: number
}